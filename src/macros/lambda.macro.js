import { Template } from '../template';
import { Parameter } from '../elements/parameter';
import { Ref } from '../intrinsic';
import { Service } from '../service';
import { Lambda as LambdaJson } from 'cfn-doc-json-stubs';
import { merge } from 'lodash';

const fs = require('fs-extra');
const path = require('path');
const bluebird = require('bluebird');
const jszip = require('jszip');
const klaw = require('klaw');

const Lambda = Service(LambdaJson);

const defaultConfig = {
  FunctionName: 'MyFunction',
  MemorySize: 128,
  Timeout: 30,
  Runtime: 'nodejs6.10',
  //env: {},
  Role: 'BlankRole',
  //kms: '',
  Handler: 'index.handler',
  Tags: []
};

function _createInlineTemplate({ path: inputPath, name, options, parameters }) {
  return new Promise((resolve, reject) => {
    fs
      .readFile(inputPath)
      .then(functionCode => {
        let t = Template();
        if (parameters && parameters.length > 0) {
          parameters.map(p => {
            t = t.add(Parameter(`${name}${p}`, { Type: 'String' }));
          });
        }
        t = t.add(
          Lambda.Function(name, {
            FunctionName: options.FunctionName,
            Handler: options.Handler,
            MemorySize: options.MemorySize,
            Role:
              parameters && parameters.includes('Role')
                ? Ref(`${name}Role`)
                : options.Role,
            Runtime: options.Runtime,
            Timeout: options.Timeout,
            Code: {
              ZipFile: {
                'Fn::Join': ['\n', functionCode.toString().split('\n')]
              }
            }
            //Tags: options.Tags ? options.Tags.length > 0 : null
          }),
          { Output: true }
        );
        resolve(t);
      })
      .catch(e => {
        reject(e);
      });
  });
}

/**
 * Create a Lambda function from a folder or source file
 * @param {} param0 
 */
export function buildLambda({
  path: inputPath,
  name,
  options,
  parameters,
  output
}) {
  name = name ? name : defaultConfig.FunctionName;
  options = options ? merge({}, defaultConfig, options) : defaultConfig;
  inputPath = path.resolve(inputPath);
  return new Promise((resolve, reject) => {
    fs
      .stat(inputPath)
      .then(stat => {
        if (stat.isFile()) {
          _createInlineTemplate({
            path: inputPath,
            name: name,
            options: options,
            parameters: parameters
          })
            .then(t => {
              resolve({ Template: t.build() });
            })
            .catch(e => {
              reject(e);
            });
        } else if (stat.isDirectory()) {
          const zip = new jszip();
          const files = [];
          klaw(inputPath)
            .on('data', ({ path: location, stats }) => {
              if (stats.isFile()) {
                files.push(location);
              }
            })
            .on('end', function() {
              if (
                files.length === 1 &&
                path.relative(inputPath, files[0]) === 'index.js'
              ) {
                _createInlineTemplate({
                  path: files[0],
                  name: name,
                  options: options,
                  parameters: parameters
                })
                  .then(t => {
                    resolve({ Template: t.build() });
                  })
                  .catch(e => {
                    reject(e);
                  });
              } else {
                bluebird
                  .map(files, file => {
                    return fs.readFile(file).then(contents => {
                      const relPath = path.relative(inputPath, file);
                      zip.file(relPath, contents);
                    });
                  })
                  .then(results => {
                    zip.generateAsync({ type: 'nodebuffer' }).then(blob => {
                      //fs.writeFileSync('final.zip', blob);
                      let t = Template()
                        .add(
                          Parameter(`${name}S3BucketParam`, { Type: 'String' })
                        )
                        .add(
                          Parameter(`${name}S3KeyParam`, { Type: 'String' })
                        );
                      if (parameters && parameters.length > 0) {
                        parameters.map(p => {
                          t = t.add(
                            Parameter(`${name}${p}`, { Type: 'String' })
                          );
                        });
                      }
                      t = t.add(
                        Lambda.Function(name, {
                          FunctionName: options.FunctionName,
                          Handler: options.Handler,
                          MemorySize: options.MemorySize,
                          Role:
                            parameters && parameters.includes('Role')
                              ? Ref(`${name}Role`)
                              : options.Role,
                          Runtime: options.Runtime,
                          Timeout: options.Timeout,
                          Code: {
                            S3Bucket: Ref('MyGreatFunctionS3BucketParam'),
                            S3Key: Ref('MyGreatFunctionS3KeyParam')
                          }
                          //Tags: options.Tags ? options.Tags.length > 0 : null
                        }),
                        { Output: true }
                      );

                      resolve({
                        Template: t.build(),
                        Zip: blob
                      });
                    });
                  });
              }
            });
        }
      })
      .catch(e => {
        reject(e);
      });
  });
}
