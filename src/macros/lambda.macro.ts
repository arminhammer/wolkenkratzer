import { merge } from 'lodash';
import { relative, resolve } from 'path';
import { Parameter } from '../elements/parameter';
import { FnJoin, Ref } from '../intrinsic';
import { Service } from '../service';
import { Template } from '../template';
import { IResource, ITemplate } from '../types';

import { map as bmap } from 'bluebird';
import { readFile, stat } from 'fs-extra';

import { Lambda as LambdaJson } from './../spec/spec';

/**
 * @hidden
 */
const jszip = require('jszip');

/**
 * @hidden
 */
const klaw = require('klaw');

/**
 * @hidden
 */
const Lambda = Service(LambdaJson);

/**
 * @hidden
 */
const defaultConfig = {
  Environment: {},
  FunctionName: 'MyFunction',
  Handler: 'index.handler',
  MemorySize: 128,
  Role: 'BlankRole',
  Runtime: 'nodejs6.10',
  Tags: [],
  Timeout: 30,
  // env: {},
  // kms: '',
};

/**
 * @hidden
 */
export interface IZipLambdaResult {
  FunctionResource: IResource;
  Zip: any;
}

/**
 * @hidden
 */
export interface IZipLambdaTemplateResult {
  Template: ITemplate;
  Zip: any;
}

/**
 * @hidden
 * @param param0
 */
function _createInlineFunction({
  path: inputPath,
  name,
  options,
  parameters,
}): Promise<IResource> {
  return new Promise((res, rej) => {
    readFile(inputPath)
      .then(functionCode => {
        const props: any = {
          Code: {
            ZipFile: FnJoin('\n', functionCode.toString().split('\n')),
          },
          FunctionName: options.FunctionName,
          Handler: options.Handler,
          MemorySize: options.MemorySize,
          Role:
            parameters && parameters.includes('Role')
              ? Ref(`${name}Role`)
              : options.Role,
          Runtime: options.Runtime,
          Timeout: options.Timeout,
          // Tags: options.Tags ? options.Tags.length > 0 : null
        };
        if (Object.keys(options.Environment).length > 0) {
          props.Environment = options.Environment;
        }
        if (options.Tags.length > 0) {
          props.Tags = options.Tags;
        }
        const fn = Lambda.Function(name, props);
        res(fn);
      })
      .catch(e => {
        rej(e);
      });
  });
}

/**
 * @hidden
 * @param param0
 */
function _createInlineTemplate({
  path: inputPath,
  name,
  options,
  parameters,
}): Promise<ITemplate> {
  return new Promise((res, rej) => {
    _createInlineFunction({ path: inputPath, name, options, parameters })
      .then(fnBlock => {
        let t = Template();
        if (parameters && parameters.length > 0) {
          parameters.map(p => {
            t = t.add(Parameter(`${name}${p}`, { Type: 'String' }));
          });
        }
        t = t
          .add(fnBlock)
          .putOut(fnBlock.Name, `${fnBlock.Name}LambdaFunctionOutput`);
        res(t);
      })
      .catch(e => {
        rej(e);
      });
  });
}

/**
 * Create an inline Lambda function from a folder or source file
 * @param {} param0
 */
export function buildInlineLambdaTemplate({
  path: inputPath,
  name,
  options,
  parameters,
}): Promise<ITemplate> {
  name = name ? name : defaultConfig.FunctionName;
  options = options ? merge({}, defaultConfig, options) : defaultConfig;
  inputPath = resolve(inputPath);
  return _createInlineTemplate({
    name,
    options,
    parameters,
    path: inputPath,
  });
}

/**
 * Create an inline Lambda function
 * @param {*} param0
 */
export function buildInlineLambda({
  path: inputPath,
  name,
  options,
  parameters,
}: any) {
  name = name ? name : defaultConfig.FunctionName;
  options = options ? merge({}, defaultConfig, options) : defaultConfig;
  inputPath = resolve(inputPath);
  return stat(inputPath).then(rstat => {
    if (rstat.isFile()) {
      return _createInlineFunction({
        name,
        options,
        parameters,
        path: inputPath,
      });
    } else {
      const indexPath = resolve(inputPath, 'index.js');
      return stat(indexPath).then(statIndex => {
        return _createInlineFunction({
          name,
          options,
          parameters,
          path: indexPath,
        });
      });
    }
  });
}

/**
 * Create a Lambda function from a folder or source file
 * @hidden
 * @param {} param0
 */
export function _buildZipLambda({
  path: inputPath,
  name,
  options,
  parameters,
  bucket,
  key,
  output,
}): Promise<IZipLambdaResult> {
  name = name ? name : defaultConfig.FunctionName;
  options = options ? merge({}, defaultConfig, options) : defaultConfig;
  inputPath = resolve(inputPath);
  return new Promise((res, rej) => {
    const zip = new jszip();
    const files: Array<string> = [];
    klaw(inputPath)
      .on('data', ({ path: location, stats }) => {
        if (stats.isFile()) {
          files.push(location);
        }
      })
      .on('end', () => {
        bmap(files, file => {
          return readFile(file).then(contents => {
            const relPath = relative(inputPath, file);
            zip.file(relPath, contents);
          });
        }).then(results => {
          zip.generateAsync({ type: 'nodebuffer' }).then(blob => {
            // writeFileSync('final.zip', blob);
            let t = Template();
            let s3BucketVal = Ref(`${name}S3BucketParam`);
            let s3KeyVal = Ref(`${name}S3KeyParam`);
            if (bucket) {
              s3BucketVal = bucket;
              t = t.add(Parameter(`${name}S3BucketParam`, { Type: 'String' }));
            }
            if (key) {
              s3KeyVal = key;
              t = t.add(Parameter(`${name}S3KeyParam`, { Type: 'String' }));
            }
            if (parameters && parameters.length > 0) {
              parameters.map(p => {
                t = t.add(Parameter(`${name}${p}`, { Type: 'String' }));
              });
            }
            const props: any = {
              Code: {
                S3Bucket: s3BucketVal,
                S3Key: s3KeyVal,
              },
              FunctionName: options.FunctionName,
              Handler: options.Handler,
              MemorySize: options.MemorySize,
              Role:
                parameters && parameters.includes('Role')
                  ? Ref(`${name}Role`)
                  : options.Role,
              Runtime: options.Runtime,
              Timeout: options.Timeout,
              // Tags: options.Tags ? options.Tags.length > 0 : null
            };
            if (Object.keys(options.Environment).length > 0) {
              props.Environment = options.Environment;
            }
            if (options.Tags.length > 0) {
              props.Tags = options.Tags;
            }
            const fn = Lambda.Function(name, props);
            res({
              FunctionResource: fn,
              Zip: blob,
            });
          });
        });
      });
  });
}

/**
 * Create a Lambda function from a folder or source file
 * @param {} param0
 */
export function buildZipLambda({
  path: inputPath,
  name,
  options,
  parameters,
  bucket,
  key,
  output,
}: any): Promise<IZipLambdaResult> {
  return _buildZipLambda({
    bucket,
    key,
    name,
    options,
    output,
    parameters,
    path: inputPath,
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
  output,
}: any) {
  name = name ? name : defaultConfig.FunctionName;
  options = options ? merge({}, defaultConfig, options) : defaultConfig;
  inputPath = resolve(inputPath);
  return new Promise((res, rej) => {
    stat(inputPath)
      .then(rstat => {
        if (rstat.isFile()) {
          _createInlineFunction({
            name: name,
            options: options,
            parameters: parameters,
            path: inputPath,
          })
            .then(fn => {
              res({ FunctionResource: fn });
            })
            .catch(e => {
              rej(e);
            });
        } else if (rstat.isDirectory()) {
          const zip = new jszip();
          const files: Array<string> = [];
          klaw(inputPath)
            .on('data', ({ path: location, stats }) => {
              if (stats.isFile()) {
                files.push(location);
              }
            })
            .on('end', () => {
              if (
                files.length === 1 &&
                relative(inputPath, files[0]) === 'index.js'
              ) {
                _createInlineFunction({
                  name: name,
                  options: options,
                  parameters: parameters,
                  path: files[0],
                })
                  .then(fn => {
                    res({ FunctionResource: fn });
                  })
                  .catch(e => {
                    rej(e);
                  });
              } else {
                bmap(files, file => {
                  return readFile(file).then(contents => {
                    const relPath = relative(inputPath, file);
                    zip.file(relPath, contents);
                  });
                }).then(results => {
                  zip.generateAsync({ type: 'nodebuffer' }).then(blob => {
                    // writeFileSync('final.zip', blob);
                    let t = Template()
                      .add(
                        Parameter(`${name}S3BucketParam`, { Type: 'String' })
                      )
                      .add(Parameter(`${name}S3KeyParam`, { Type: 'String' }));
                    if (parameters && parameters.length > 0) {
                      parameters.map(p => {
                        t = t.add(Parameter(`${name}${p}`, { Type: 'String' }));
                      });
                    }
                    const fn = Lambda.Function(name, {
                      Code: {
                        S3Bucket: Ref(`${name}S3BucketParam`),
                        S3Key: Ref(`${name}S3KeyParam`),
                      },
                      FunctionName: options.FunctionName,
                      Handler: options.Handler,
                      MemorySize: options.MemorySize,
                      Role:
                        parameters && parameters.includes('Role')
                          ? Ref(`${name}Role`)
                          : options.Role,
                      Runtime: options.Runtime,
                      Timeout: options.Timeout,
                      // Tags: options.Tags ? options.Tags.length > 0 : null
                    });

                    res({
                      FunctionResource: fn,
                      Zip: blob,
                    });
                  });
                });
              }
            });
        }
      })
      .catch(e => {
        rej(e);
      });
  });
}

/**
 * Create a Lambda function from a folder or source file
 * @param {} param0
 */
export function buildZipLambdaTemplate({
  path: inputPath,
  name,
  options,
  parameters,
  bucket,
  key,
  output,
}: any): Promise<IZipLambdaTemplateResult> {
  return _buildZipLambda({
    bucket,
    key,
    name,
    options,
    output,
    parameters,
    path: inputPath,
  })
    .then(({ FunctionResource, Zip }): Promise<IZipLambdaTemplateResult> => {
      return new Promise((res, rej) => {
        let t = Template()
          .add(Parameter(`${name}S3BucketParam`, { Type: 'String' }))
          .add(Parameter(`${name}S3KeyParam`, { Type: 'String' }));
        if (parameters && parameters.length > 0) {
          parameters.map(p => {
            t = t.add(Parameter(`${name}${p}`, { Type: 'String' }));
          });
        }
        t = t
          .add(FunctionResource)
          .putOut(
            FunctionResource.Name,
            `${FunctionResource.Name}LambdaFunctionOutput`
          );
        res({
          Template: t,
          Zip,
        });
      });
    })
    .catch(e => {
      throw new SyntaxError(`There was an error: ${e}`);
    });
}

/**
 * Create a Lambda function from a folder or source file
 * @param {} param0
 */
export function buildLambdaTemplate({
  path: inputPath,
  name,
  options,
  parameters,
  output,
}: any) {
  name = name ? name : defaultConfig.FunctionName;
  options = options ? merge({}, defaultConfig, options) : defaultConfig;
  inputPath = resolve(inputPath);
  return new Promise((res, rej) => {
    stat(inputPath)
      .then(rstat => {
        if (rstat.isFile()) {
          _createInlineTemplate({
            name: name,
            options: options,
            parameters: parameters,
            path: inputPath,
          })
            .then(t => {
              res({ Template: t.build() });
            })
            .catch(e => {
              rej(e);
            });
        } else if (rstat.isDirectory()) {
          const zip = new jszip();
          const files: Array<string> = [];
          klaw(inputPath)
            .on('data', ({ path: location, stats }) => {
              if (stats.isFile()) {
                files.push(location);
              }
            })
            .on('end', () => {
              if (
                files.length === 1 &&
                relative(inputPath, files[0]) === 'index.js'
              ) {
                _createInlineTemplate({
                  name: name,
                  options: options,
                  parameters: parameters,
                  path: files[0],
                })
                  .then(t => {
                    res({ Template: t.build() });
                  })
                  .catch(e => {
                    rej(e);
                  });
              } else {
                bmap(files, file => {
                  return readFile(file).then(contents => {
                    const relPath = relative(inputPath, file);
                    zip.file(relPath, contents);
                  });
                }).then(results => {
                  zip.generateAsync({ type: 'nodebuffer' }).then(blob => {
                    // writeFileSync('final.zip', blob);
                    let t = Template()
                      .add(
                        Parameter(`${name}S3BucketParam`, { Type: 'String' })
                      )
                      .add(Parameter(`${name}S3KeyParam`, { Type: 'String' }));
                    if (parameters && parameters.length > 0) {
                      parameters.map(p => {
                        t = t.add(Parameter(`${name}${p}`, { Type: 'String' }));
                      });
                    }
                    t = t
                      .add(
                        Lambda.Function(name, {
                          Code: {
                            S3Bucket: Ref(`${name}S3BucketParam`),
                            S3Key: Ref(`${name}S3KeyParam`),
                          },
                          FunctionName: options.FunctionName,
                          Handler: options.Handler,
                          MemorySize: options.MemorySize,
                          Role:
                            parameters && parameters.includes('Role')
                              ? Ref(`${name}Role`)
                              : options.Role,
                          Runtime: options.Runtime,
                          Timeout: options.Timeout,
                          // Tags: options.Tags ? options.Tags.length > 0 : null
                        })
                      )
                      .putOut(name, `${name}LambdaFunctionOutput`);
                    res({
                      Template: t.build(),
                      Zip: blob,
                    });
                  });
                });
              }
            });
        }
      })
      .catch(e => {
        rej(e);
      });
  });
}
