import { Lambda as LambdaJson } from 'cfn-doc-json-stubs';
import { merge } from 'lodash';
import path from 'path';
import { Parameter } from '../elements/parameter';
import { IResource } from '../elements/resource';
import { FnJoin, Ref } from '../intrinsic';
import { Service } from '../service';
import { ITemplate, Template } from '../template';

const fs = require('fs-extra');
const bluebird = require('bluebird');
const jszip = require('jszip');
const klaw = require('klaw');

const Lambda = Service(LambdaJson);

const defaultConfig = {
  Environment: {},
  FunctionName: 'MyFunction',
  Handler: 'index.handler',
  MemorySize: 128,
  Role: 'BlankRole',
  Runtime: 'nodejs6.10',
  Tags: [],
  Timeout: 30
  // env: {},
  // kms: '',
};

export interface IZipLambdaResult {
  FunctionResource: IResource;
  Zip: any;
}

function _createInlineFunction({
  path: inputPath,
  name,
  options,
  parameters
}): Promise<IResource> {
  return new Promise((resolve, reject) => {
    fs
      .readFile(inputPath)
      .then(functionCode => {
        const props: any = {
          Code: {
            ZipFile: FnJoin('\n', functionCode.toString().split('\n'))
          },
          FunctionName: options.FunctionName,
          Handler: options.Handler,
          MemorySize: options.MemorySize,
          Role:
            parameters && parameters.includes('Role')
              ? Ref(`${name}Role`)
              : options.Role,
          Runtime: options.Runtime,
          Timeout: options.Timeout
          // Tags: options.Tags ? options.Tags.length > 0 : null
        };
        if (Object.keys(options.Environment).length > 0) {
          props.Environment = options.Environment;
        }
        if (options.Tags.length > 0) {
          props.Tags = options.Tags;
        }
        const fn = Lambda.Function(name, props);
        resolve(fn);
      })
      .catch(e => {
        reject(e);
      });
  });
}

function _createInlineTemplate({
  path: inputPath,
  name,
  options,
  parameters
}): Promise<ITemplate> {
  return new Promise((resolve, reject) => {
    _createInlineFunction({ path: inputPath, name, options, parameters })
      .then(fnBlock => {
        let t = Template();
        if (parameters && parameters.length > 0) {
          parameters.map(p => {
            t = t.add(Parameter(`${name}${p}`, { Type: 'String' }));
          });
        }
        t = t.add(fnBlock, {
          Output: true
        });
        resolve(t);
      })
      .catch(e => {
        reject(e);
      });
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
  parameters
}) {
  name = name ? name : defaultConfig.FunctionName;
  options = options ? merge({}, defaultConfig, options) : defaultConfig;
  inputPath = path.resolve(inputPath);
  return fs.stat(inputPath).then(stat => {
    if (stat.isFile()) {
      return _createInlineFunction({
        name,
        options,
        parameters,
        path: inputPath
      });
    } else {
      const indexPath = path.resolve(inputPath, 'index.js');
      return fs.stat(indexPath).then(statIndex => {
        if (statIndex.isFile()) {
          return _createInlineFunction({
            name,
            options,
            parameters,
            path: indexPath
          });
        } else {
          return null;
        }
      });
    }
  });
}

/**
 * Create a Lambda function from a folder or source file
 * @param {} param0 
 */
export function _buildZipLambda({
  path: inputPath,
  name,
  options,
  parameters,
  output
}): Promise<IZipLambdaResult> {
  name = name ? name : defaultConfig.FunctionName;
  options = options ? merge({}, defaultConfig, options) : defaultConfig;
  inputPath = path.resolve(inputPath);
  return new Promise((resolve, reject) => {
    const zip = new jszip();
    const files: Array<string> = [];
    klaw(inputPath)
      .on('data', ({ path: location, stats }) => {
        if (stats.isFile()) {
          files.push(location);
        }
      })
      .on('end', () => {
        bluebird
          .map(files, file => {
            return fs.readFile(file).then(contents => {
              const relPath = path.relative(inputPath, file);
              zip.file(relPath, contents);
            });
          })
          .then(results => {
            zip.generateAsync({ type: 'nodebuffer' }).then(blob => {
              // fs.writeFileSync('final.zip', blob);
              let t = Template()
                .add(Parameter(`${name}S3BucketParam`, { Type: 'String' }))
                .add(Parameter(`${name}S3KeyParam`, { Type: 'String' }));
              if (parameters && parameters.length > 0) {
                parameters.map(p => {
                  t = t.add(Parameter(`${name}${p}`, { Type: 'String' }));
                });
              }
              const fn = Lambda.Function(name, {
                Code: {
                  S3Bucket: Ref('MyGreatFunctionS3BucketParam'),
                  S3Key: Ref('MyGreatFunctionS3KeyParam')
                },
                FunctionName: options.FunctionName,
                Handler: options.Handler,
                MemorySize: options.MemorySize,
                Role:
                  parameters && parameters.includes('Role')
                    ? Ref(`${name}Role`)
                    : options.Role,
                Runtime: options.Runtime,
                Timeout: options.Timeout
                // Tags: options.Tags ? options.Tags.length > 0 : null
              });
              resolve({
                FunctionResource: fn,
                Zip: blob
              });
            });
          });
        // });
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
export function buildZipLambda({
  path: inputPath,
  name,
  options,
  parameters,
  output
}): Promise<IZipLambdaResult> {
  return _buildZipLambda({
    name,
    options,
    output,
    parameters,
    path: inputPath
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
          _createInlineFunction({
            name: name,
            options: options,
            parameters: parameters,
            path: inputPath
          })
            .then(fn => {
              resolve({ FunctionResource: fn });
            })
            .catch(e => {
              reject(e);
            });
        } else if (stat.isDirectory()) {
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
                path.relative(inputPath, files[0]) === 'index.js'
              ) {
                _createInlineFunction({
                  name: name,
                  options: options,
                  parameters: parameters,
                  path: files[0]
                })
                  .then(fn => {
                    resolve({ FunctionResource: fn });
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
                      // fs.writeFileSync('final.zip', blob);
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
                      const fn = Lambda.Function(name, {
                        Code: {
                          S3Bucket: Ref('MyGreatFunctionS3BucketParam'),
                          S3Key: Ref('MyGreatFunctionS3KeyParam')
                        },
                        FunctionName: options.FunctionName,
                        Handler: options.Handler,
                        MemorySize: options.MemorySize,
                        Role:
                          parameters && parameters.includes('Role')
                            ? Ref(`${name}Role`)
                            : options.Role,
                        Runtime: options.Runtime,
                        Timeout: options.Timeout
                        // Tags: options.Tags ? options.Tags.length > 0 : null
                      });

                      resolve({
                        FunctionResource: fn,
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

/**
 * Create a Lambda function from a folder or source file
 * @param {} param0 
 */
export function buildZipLambdaTemplate({
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
            name: name,
            options: options,
            parameters: parameters,
            path: inputPath
          })
            .then(t => {
              resolve({ Template: t.build() });
            })
            .catch(e => {
              reject(e);
            });
        } else if (stat.isDirectory()) {
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
                path.relative(inputPath, files[0]) === 'index.js'
              ) {
                _createInlineTemplate({
                  name: name,
                  options: options,
                  parameters: parameters,
                  path: files[0]
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
                      // fs.writeFileSync('final.zip', blob);
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
                          Code: {
                            S3Bucket: Ref('MyGreatFunctionS3BucketParam'),
                            S3Key: Ref('MyGreatFunctionS3KeyParam')
                          },
                          FunctionName: options.FunctionName,
                          Handler: options.Handler,
                          MemorySize: options.MemorySize,
                          Role:
                            parameters && parameters.includes('Role')
                              ? Ref(`${name}Role`)
                              : options.Role,
                          Runtime: options.Runtime,
                          Timeout: options.Timeout
                          // Tags: options.Tags ? options.Tags.length > 0 : null
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

/**
 * Create a Lambda function from a folder or source file
 * @param {} param0 
 */
export function buildLambdaTemplate({
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
            name: name,
            options: options,
            parameters: parameters,
            path: inputPath
          })
            .then(t => {
              resolve({ Template: t.build() });
            })
            .catch(e => {
              reject(e);
            });
        } else if (stat.isDirectory()) {
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
                path.relative(inputPath, files[0]) === 'index.js'
              ) {
                _createInlineTemplate({
                  name: name,
                  options: options,
                  parameters: parameters,
                  path: files[0]
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
                      // fs.writeFileSync('final.zip', blob);
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
                          Code: {
                            S3Bucket: Ref('MyGreatFunctionS3BucketParam'),
                            S3Key: Ref('MyGreatFunctionS3KeyParam')
                          },
                          FunctionName: options.FunctionName,
                          Handler: options.Handler,
                          MemorySize: options.MemorySize,
                          Role:
                            parameters && parameters.includes('Role')
                              ? Ref(`${name}Role`)
                              : options.Role,
                          Runtime: options.Runtime,
                          Timeout: options.Timeout
                          // Tags: options.Tags ? options.Tags.length > 0 : null
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
