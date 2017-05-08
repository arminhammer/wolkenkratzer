const {
  Template,
  Output,
  Condition,
  addResource,
  CustomResource,
  addCondition,
  addOutput,
  addDescription,
  addParameter,
  S3,
  IAM,
  Lambda,
  EC2,
  Ref,
  FnGetAtt,
  FnEquals,
  Description,
  Parameter,
  build
} = require('../dist/index');

describe('Template', () => {
  test('Can turn a Template to JSON', () => {
    let t = Template();
    expect(build(t)).toEqual({
      Resources: {},
      AWSTemplateFormatVersion: '2010-09-09'
    });
  });

  test('Can turn create a valid S3 Template', () => {
    let t = Template();
    t = addResource(t, S3.Bucket('Bucket'));
    t = addOutput(t, Output('BucketName', { Value: Ref(t, 'Bucket') }));
    expect(build(t)).toEqual(require('./templates/s3.json'));
  });

  test('Can turn create a valid AMI Template', () => {
    const osTypes = [
      'Amazon',
      'Ubuntu',
      'RedHat',
      'Windows',
      'CentOS',
      'Debian',
      'Fedora'
    ];
    let t = Template();
    t = addDescription(
      t,
      Description({
        Content: 'Base template that always uses the newest Amazon Linux AMI'
      })
    );
    t = addParameter(
      t,
      Parameter('InstanceType', {
        Description: 'EC2 instance type',
        Type: 'String',
        Default: 't2.micro',
        AllowedValues: [
          't1.micro',
          't2.nano',
          't2.micro',
          't2.small',
          't2.medium',
          'm1.small',
          'm1.medium',
          'm1.large',
          'm1.xlarge',
          'm2.xlarge',
          'm2.2xlarge',
          'm2.4xlarge',
          'm3.medium',
          'm3.large',
          'm3.xlarge',
          'm3.2xlarge',
          'c1.medium',
          'c1.xlarge',
          'c3.large',
          'c3.xlarge',
          'c3.2xlarge',
          'c3.4xlarge',
          'c3.8xlarge',
          'c4.large',
          'c4.xlarge',
          'c4.2xlarge',
          'c4.4xlarge',
          'c4.8xlarge',
          'g2.2xlarge',
          'r3.large',
          'r3.xlarge',
          'r3.2xlarge',
          'r3.4xlarge',
          'r3.8xlarge',
          'i2.xlarge',
          'i2.2xlarge',
          'i2.4xlarge',
          'i2.8xlarge',
          'd2.xlarge',
          'd2.2xlarge',
          'd2.4xlarge',
          'd2.8xlarge',
          'hi1.4xlarge',
          'hs1.8xlarge',
          'cr1.8xlarge',
          'cc2.8xlarge',
          'cg1.4xlarge'
        ],
        ConstraintDescription: 'Must be a valid EC2 instance type.'
      })
    );
    t = addParameter(
      t,
      Parameter('AMI', {
        Description: 'Instance AMI',
        Type: 'String',
        Default: 'Amazon',
        AllowedValues: osTypes
      })
    );
    osTypes.map(os => {
      t = addCondition(t, Condition(`${os}AMI`, FnEquals(Ref(t, 'AMI'), os)));
    });
    t = addResource(
      t,
      CustomResource('AMIInfo', {
        ServiceToken: {
          'Fn::GetAtt': ['AMIInfoFunction', 'Arn']
        },
        Region: {
          Ref: 'AWS::Region'
        },
        Filters: [
          {
            'Fn::If': [
              'AmazonAMI',
              {
                Name: 'name',
                Values: ['amzn-ami-hvm*.x86_64-gp2']
              },
              {
                Ref: 'AWS::NoValue'
              }
            ]
          },
          {
            'Fn::If': [
              'AmazonAMI',
              {
                Name: 'owner-alias',
                Values: ['amazon']
              },
              {
                Ref: 'AWS::NoValue'
              }
            ]
          },
          {
            'Fn::If': [
              'UbuntuAMI',
              {
                Name: 'name',
                Values: ['ubuntu*amd64-server*']
              },
              {
                Ref: 'AWS::NoValue'
              }
            ]
          },
          {
            'Fn::If': [
              'UbuntuAMI',
              {
                Values: ['099720109477'],
                Name: 'owner-id'
              },
              {
                Ref: 'AWS::NoValue'
              }
            ]
          },
          {
            'Fn::If': [
              'RedHatAMI',
              {
                Name: 'name',
                Values: ['RHEL-*_HVM_GA-*-x86_64*Hourly2-GP2']
              },
              {
                Ref: 'AWS::NoValue'
              }
            ]
          },
          {
            'Fn::If': [
              'RedHatAMI',
              {
                Values: ['309956199498'],
                Name: 'owner-id'
              },
              {
                Ref: 'AWS::NoValue'
              }
            ]
          },
          {
            'Fn::If': [
              'WindowsAMI',
              {
                Name: 'name',
                Values: ['Windows_Server-*-English-64Bit-Base-*']
              },
              {
                Ref: 'AWS::NoValue'
              }
            ]
          },
          {
            'Fn::If': [
              'WindowsAMI',
              {
                Name: 'owner-alias',
                Values: ['amazon']
              },
              {
                Ref: 'AWS::NoValue'
              }
            ]
          },
          {
            'Fn::If': [
              'CentOSAMI',
              {
                Name: 'name',
                Values: ['CentOS Linux*x86_64 HVM EBS*']
              },
              {
                Ref: 'AWS::NoValue'
              }
            ]
          },
          {
            'Fn::If': [
              'CentOSAMI',
              {
                Values: ['aws-marketplace'],
                Name: 'owner-alias'
              },
              {
                Ref: 'AWS::NoValue'
              }
            ]
          },
          {
            'Fn::If': [
              'DebianAMI',
              {
                Name: 'name',
                Values: ['debian-*-amd64-hvm-2015*-ebs*']
              },
              {
                Ref: 'AWS::NoValue'
              }
            ]
          },
          {
            'Fn::If': [
              'DebianAMI',
              {
                Values: ['aws-marketplace'],
                Name: 'owner-alias'
              },
              {
                Ref: 'AWS::NoValue'
              }
            ]
          },
          {
            Name: 'virtualization-type',
            Values: ['hvm']
          },
          {
            Name: 'architecture',
            Values: ['x86_64']
          }
        ]
      })
    );
    t = addResource(
      t,
      EC2.Instance('CFInstance', {
        InstanceType: Ref(t, 'InstanceType'),
        ImageId: FnGetAtt(t, 'AMIInfo', 'Id')
      })
    );
    t = addResource(
      t,
      IAM.Role('LambdaExecutionRole', {
        AssumeRolePolicyDocument: {
          Version: '2012-10-17',
          Statement: [
            {
              Effect: 'Allow',
              Principal: {
                Service: ['lambda.amazonaws.com']
              },
              Action: ['sts:AssumeRole']
            }
          ]
        },
        Path: '/',
        Policies: [
          {
            PolicyName: 'root',
            PolicyDocument: {
              Version: '2012-10-17',
              Statement: [
                {
                  Effect: 'Allow',
                  Action: [
                    'logs:CreateLogGroup',
                    'logs:CreateLogStream',
                    'logs:PutLogEvents'
                  ],
                  Resource: 'arn:aws:logs:*:*:*'
                },
                {
                  Effect: 'Allow',
                  Action: ['ec2:DescribeImages'],
                  Resource: '*'
                }
              ]
            }
          }
        ]
      })
    );
    t = addResource(
      t,
      Lambda.Function('AMIInfoFunction', {
        Code: {
          ZipFile: {
            'Fn::Join': [
              '',
              [
                "  var response = require('cfn-response');",
                "  var aws = require('aws-sdk');",
                '',
                '  exports.handler = function(event, context) {',
                "      if (event.RequestType == 'Delete') {",
                "          response.send(event, context, 'SUCCESS');",
                '          return;',
                '      }',
                "      var responseStatus = 'FAILED';",
                '      var responseData = {};',
                '',
                '      var ec2 = new aws.EC2({region: event.ResourceProperties.Region});',
                '      var describeImagesParams = {',
                '          Filters: event.ResourceProperties.Filters',
                '      };',
                '',
                '      ec2.describeImages(describeImagesParams, function(err, describeImagesResult) {',
                '          if (err) {',
                '              console.log(err);',
                '          }',
                '          else {',
                '              var images = describeImagesResult.Images;',
                '              images.sort(function(x, y) { return y.Name.localeCompare(x.Name); });',
                '              for (var j = 0; j < images.length; j++) {',
                '                  if (isBeta(images[j].Name)) continue;',
                "                  responseStatus = 'SUCCESS';",
                '                  responseData.Id = images[j].ImageId;',
                '                  break;',
                '              }',
                '          }',
                '          response.send(event, context, responseStatus, responseData);',
                '      });',
                '  };',
                '',
                '  function isBeta(imageName) {',
                "      return imageName.toLowerCase().indexOf('beta') > -1 || imageName.toLowerCase().indexOf('.rc') > -1;",
                '}',
                ''
              ]
            ]
          }
        },
        Handler: 'index.handler',
        Role: {
          'Fn::GetAtt': ['LambdaExecutionRole', 'Arn']
        },
        Runtime: 'nodejs',
        Timeout: '60'
      })
    );
    t = addOutput(
      t,
      Output('AMIID', {
        Description: 'The Amazon EC2 instance AMI ID.',
        Value: FnGetAtt(t, 'AMIInfo', 'Id')
      })
    );
    expect(build(t)).toEqual(require('./templates/ami.json'));
  });
});

test('Can turn create a valid AMI Template', () => {
  const prefixes = ['S3', 'EC2', 'ELB', 'SG', 'RDS'];
  let t = Template();
  t = addResource(
    t,
    Lambda.Function('S3ReleaseCacheLambdaFunction', {
      Code: {
        ZipFile: {
          'Fn::Join': [
            '\n',
            [
              "'use strict';",
              '',
              "const aws = require('aws-sdk');",
              'const s3 = new aws.S3({ maxRetries: 11 });',
              '',
              "const bucket = 'main';",
              "const keyPrefix = 'plugins/aws-resources/cache';",
              '',
              'exports.handler = (event, context, callback) => {',
              '  let results = [];',
              '  s3',
              '    .listBuckets({})',
              '    .promise()',
              '    .then(list => {',
              '      let shortList = list.Buckets;',
              '      let bucketPromises = [];',
              '      shortList.map(bucket => {',
              '        bucketPromises.push(',
              '          new Promise((resolve, reject) => {',
              '            s3',
              '              .getBucketTagging({ Bucket: bucket.Name })',
              '              .promise()',
              '              .then(tags => {',
              '                bucket.Tags = tags.TagSet;',
              '                bucket.ARN = `arn:aws:s3:::${bucket.Name}`;',
              '                resolve(bucket);',
              '              })',
              '              .catch(e => {',
              '                console.log(e);',
              '                bucket.Tags = [];',
              '                resolve(bucket);',
              '              });',
              '          })',
              '        );',
              '      });',
              '      return Promise.all(bucketPromises);',
              '    })',
              '    .then(buckets => {',
              '      let asv = buckets.reduce((a, c) => {',
              '        c.Tags.map(t => {',
              "          if (t.Key === 'ASV') {",
              '            if (!a[t.Value]) {',
              '              a[t.Value] = [];',
              '            }',
              '            a[t.Value].push(c);',
              '          }',
              '        });',
              '        return a;',
              '      }, {});',
              '      let s3SavePromises = [];',
              '      for (let a in asv) {',
              '        results.push({ name: a, content: asv[a] });',
              '        s3SavePromises.push(',
              '          s3',
              '            .putObject({',
              '              Bucket: bucket,',
              '              Key: `${keyPrefix}/${a}/084220657940/s3.json`,',
              '              Body: JSON.stringify(asv[a]),',
              "              ServerSideEncryption: 'AES256'",
              '            })',
              '            .promise()',
              '        );',
              '      }',
              '      return Promise.all(s3SavePromises);',
              '    })',
              '    .then(output => {',
              "      console.log('Finished updating records');",
              "      callback(null, 'Finished updating records');",
              '    })',
              '    .catch(e => {',
              '      console.error(e);',
              "      callback(e, 'Error!');",
              '    });',
              '};',
              ''
            ]
          ]
        }
      },
      FunctionName: 'S3ReleaseCacheLambdaFunction',
      Handler: 'index.handler',
      MemorySize: 256,
      Role: 'arn:aws:iam::084220657940:role/CapOne-CrossAccount-CustomRole-Chassis-lambda',
      Runtime: 'nodejs4.3',
      Timeout: 300
    })
  );
  t = addResource(
    t,
    Lambda.Function('EC2ReleaseCacheLambdaFunction', {
      Code: {
        ZipFile: {
          'Fn::Join': [
            '\n',
            [
              "'use strict';",
              '',
              "const aws = require('aws-sdk');",
              'const ec2 = new aws.EC2({ maxRetries: 10 });',
              'const s3 = new aws.S3({ maxRetries: 10 });',
              '',
              "const bucket = 'main';",
              "const keyPrefix = 'plugins/aws-resources/cache';",
              '',
              'exports.handler = (event, context, callback) => {',
              '  let results = [];',
              '  ec2',
              '    .describeInstances()',
              '    .promise()',
              '    .then(list => {',
              '      let shortList = [];',
              '      list.Reservations.map(r => {',
              '        r.Instances.map(i => {',
              '          i.Name = i.InstanceId;',
              '          i.ARN = `arn:aws:ec2:us-east-1:084220657940:instance/${i.InstanceId}`;',
              '          shortList.push(i);',
              '        });',
              '      });',
              '      console.log(`Instance count: ${shortList.length}`);',
              '      let asv = shortList.reduce((a, c) => {',
              '        c.Tags.map(t => {',
              "          if (t.Key === 'ASV') {",
              '            if (!a[t.Value]) {',
              '              a[t.Value] = [];',
              '            }',
              '            a[t.Value].push(c);',
              '          }',
              '        });',
              '        return a;',
              '      }, {});',
              '      console.log(JSON.stringify(asv, null, 2));',
              '      let s3SavePromises = [];',
              '      for (let a in asv) {',
              '        results.push({ name: a, content: asv[a] });',
              '        s3SavePromises.push(',
              '          s3',
              '            .putObject({',
              '              Bucket: bucket,',
              '              Key: `${keyPrefix}/${a}/084220657940/ec2.json`,',
              '              Body: JSON.stringify(asv[a]),',
              "              ServerSideEncryption: 'AES256'",
              '            })',
              '            .promise()',
              '        );',
              '      }',
              '      return Promise.all(s3SavePromises);',
              '    })',
              '    .then(output => {',
              "      console.log('Finished updating records');",
              "      callback(null, 'Finished updating records');",
              '    })',
              '    .catch(e => {',
              '      console.error(e);',
              "      callback(e, 'Error!');",
              '    });',
              '};',
              ''
            ]
          ]
        }
      },
      FunctionName: 'EC2ReleaseCacheLambdaFunction',
      Handler: 'index.handler',
      MemorySize: 256,
      Role: 'arn:aws:iam::084220657940:role/CapOne-CrossAccount-CustomRole-Chassis-lambda',
      Runtime: 'nodejs4.3',
      Timeout: 300
    })
  );
  t = addResource(
    t,
    Lambda.Function('ELBReleaseCacheLambdaFunction', {
      Code: {
        ZipFile: {
          'Fn::Join': [
            '\n',
            [
              "'use strict';",
              '',
              "const aws = require('aws-sdk');",
              'const elb = new aws.ELB({ maxRetries: 10 });',
              'const s3 = new aws.S3({ maxRetries: 10 });',
              '',
              "const bucket = 'main';",
              "const keyPrefix = 'plugins/aws-resources/cache';",
              '',
              'exports.handler = (event, context, callback) => {',
              '  let results = [];',
              '  elb',
              '    .describeLoadBalancers({})',
              '    .promise()',
              '    .then(list => {',
              '      let shortList = list.LoadBalancerDescriptions;',
              '      let elbNames = [];',
              '',
              '      shortList.map(elb => {',
              '        elbNames.push(elb.LoadBalancerName);',
              '      });',
              '',
              '      let blocks = [];',
              '      let chunk = 20;',
              '      let j;',
              '      for (let i = 0, j = elbNames.length; i < j; i += chunk) {',
              '        blocks.push(elbNames.slice(i, i + chunk));',
              '      }',
              '',
              '      let bucketPromises = [];',
              '      blocks.map(block => {',
              '        bucketPromises.push(',
              '          new Promise((resolve, reject) => {',
              '            elb',
              '              .describeTags({ LoadBalancerNames: block })',
              '              .promise()',
              '              .then(tags => {',
              '                resolve(tags.TagDescriptions);',
              '              })',
              '              .catch(e => {',
              '                console.log(e);',
              '                resolve({ TagDescriptions: [] });',
              '              });',
              '          })',
              '        );',
              '      });',
              '      return Promise.all(bucketPromises);',
              '    })',
              '    .then(elbs => {',
              '      let elbResults = [];',
              '      elbs.map(block => {',
              '        block.map(elb => {',
              '          elb.Name = elb.LoadBalancerName;',
              '          elb.ARN = `arn:aws:elasticloadbalancing:us-east-1:084220657940:loadbalancer/${elb.LoadBalancerName}`;',
              '          elbResults.push(elb);',
              '        });',
              '      });',
              '      let asv = elbResults.reduce((a, c) => {',
              '        c.Tags.map(t => {',
              "          if (t.Key === 'ASV') {",
              '            if (!a[t.Value]) {',
              '              a[t.Value] = [];',
              '            }',
              '            a[t.Value].push(c);',
              '          }',
              '        });',
              '        return a;',
              '      }, {});',
              '      let s3SavePromises = [];',
              '      for (let a in asv) {',
              '        results.push({ name: a, content: asv[a] });',
              '        s3SavePromises.push(',
              '          s3',
              '            .putObject({',
              '              Bucket: bucket,',
              '              Key: `${keyPrefix}/${a}/084220657940/elb.json`,',
              '              Body: JSON.stringify(asv[a]),',
              "              ServerSideEncryption: 'AES256'",
              '            })',
              '            .promise()',
              '        );',
              '      }',
              '      return Promise.all(s3SavePromises);',
              '    })',
              '    .then(output => {',
              "      console.log('Finished updating records');",
              "      callback(null, 'Finished updating records');",
              '    })',
              '    .catch(e => {',
              '      console.error(e);',
              "      callback(e, 'Error!');",
              '    });',
              '};',
              ''
            ]
          ]
        }
      },
      FunctionName: 'ELBReleaseCacheLambdaFunction',
      Handler: 'index.handler',
      MemorySize: 256,
      Role: 'arn:aws:iam::084220657940:role/CapOne-CrossAccount-CustomRole-Chassis-lambda',
      Runtime: 'nodejs4.3',
      Timeout: 300
    })
  );
  t = addResource(
    t,
    Lambda.Function('SGReleaseCacheLambdaFunction', {
      Code: {
        ZipFile: {
          'Fn::Join': [
            '\n',
            [
              "'use strict';",
              '',
              "const aws = require('aws-sdk');",
              'const ec2 = new aws.EC2({ maxRetries: 10 });',
              'const s3 = new aws.S3({ maxRetries: 10 });',
              '',
              "const bucket = 'main';",
              "const keyPrefix = 'plugins/aws-resources/cache';",
              '',
              'exports.handler = (event, context, callback) => {',
              '  let results = [];',
              '  ec2',
              '    .describeSecurityGroups()',
              '    .promise()',
              '    .then(list => {',
              '      let shortList = [];',
              '      list.SecurityGroups.map(sg => {',
              '        sg.Name = sg.GroupName;',
              '        sg.ARN = `arn:aws:ec2:us-east-1:084220657940:security-group/${sg.GroupId}`;',
              '        shortList.push(sg);',
              '      });',
              '      let asv = shortList.reduce((a, c) => {',
              '        c.Tags.map(t => {',
              "          if (t.Key === 'ASV') {",
              '            if (!a[t.Value]) {',
              '              a[t.Value] = [];',
              '            }',
              '            a[t.Value].push(c);',
              '          }',
              '        });',
              '        return a;',
              '      }, {});',
              '      console.log(JSON.stringify(asv, null, 2));',
              '      let s3SavePromises = [];',
              '      for (let a in asv) {',
              '        results.push({ name: a, content: asv[a] });',
              '        s3SavePromises.push(',
              '          s3',
              '            .putObject({',
              '              Bucket: bucket,',
              '              Key: `${keyPrefix}/${a}/084220657940/sg.json`,',
              '              Body: JSON.stringify(asv[a]),',
              "              ServerSideEncryption: 'AES256'",
              '            })',
              '            .promise()',
              '        );',
              '      }',
              '      return Promise.all(s3SavePromises);',
              '    })',
              '    .then(output => {',
              "      console.log('Finished updating records');",
              "      callback(null, 'Finished updating records');",
              '    })',
              '    .catch(e => {',
              '      console.error(e);',
              "      callback(e, 'Error!');",
              '    });',
              '};',
              ''
            ]
          ]
        }
      },
      FunctionName: 'SGReleaseCacheLambdaFunction',
      Handler: 'index.handler',
      MemorySize: 256,
      Role: 'arn:aws:iam::084220657940:role/CapOne-CrossAccount-CustomRole-Chassis-lambda',
      Runtime: 'nodejs4.3',
      Timeout: 300
    })
  );
  t = addResource(
    t,
    Lambda.Function('RDSReleaseCacheLambdaFunction', {
      Code: {
        ZipFile: {
          'Fn::Join': [
            '\n',
            [
              "'use strict';",
              '',
              "const aws = require('aws-sdk');",
              'const rds = new aws.RDS({ maxRetries: 10 });',
              'const s3 = new aws.S3({ maxRetries: 10 });',
              '',
              "const bucket = 'main';",
              "const keyPrefix = 'plugins/aws-resources/cache';",
              '',
              'exports.handler = (event, context, callback) => {',
              "  console.log('Executing');",
              '  let results = [];',
              '  let instances = [];',
              '  rds',
              '    .describeDBInstances({})',
              '    .promise()',
              '    .then(list => {',
              '      list.DBInstances.map(instance => {',
              '        instances.push(instance);',
              '      });',
              '      //TOTAL HACK, MUST FIX',
              '      return rds.describeDBInstances({ Marker: list.Marker }).promise();',
              '    })',
              '    .then(list => {',
              '      list.DBInstances.map(instance => {',
              '        instances.push(instance);',
              '      });',
              '      return rds.describeDBInstances({ Marker: list.Marker }).promise();',
              '    })',
              '    .then(list => {',
              '      list.DBInstances.map(instance => {',
              '        instances.push(instance);',
              '      });',
              '      let bucketPromises = [];',
              '      instances.map(inst => {',
              '        inst.Name = inst.DBName;',
              '        inst.ARN = inst.DBInstanceArn;',
              '        bucketPromises.push(',
              '          new Promise((resolve, reject) => {',
              '            rds',
              '              .listTagsForResource({ ResourceName: inst.DBInstanceArn })',
              '              .promise()',
              '              .then(tags => {',
              '                inst.Tags = tags.TagList;',
              '                resolve(inst);',
              '              })',
              '              .catch(e => {',
              '                console.log(e);',
              '                inst.Tags = [];',
              '                resolve(inst);',
              '              });',
              '          })',
              '        );',
              '      });',
              '      return Promise.all(bucketPromises);',
              '    })',
              '    .then(instances => {',
              '      let asv = instances.reduce((a, c) => {',
              '        c.Tags.map(t => {',
              "          if (t.Key === 'ASV') {",
              '            if (!a[t.Value]) {',
              '              a[t.Value] = [];',
              '            }',
              '            a[t.Value].push(c);',
              '          }',
              '        });',
              '        return a;',
              '      }, {});',
              '      let s3SavePromises = [];',
              '      for (let a in asv) {',
              '        results.push({ name: a, content: asv[a] });',
              '        s3SavePromises.push(',
              '          s3',
              '            .putObject({',
              '              Bucket: bucket,',
              '              Key: `${keyPrefix}/${a}/084220657940/rds.json`,',
              '              Body: JSON.stringify(asv[a]),',
              "              ServerSideEncryption: 'AES256'",
              '            })',
              '            .promise()',
              '        );',
              '      }',
              '      return Promise.all(s3SavePromises);',
              '    })',
              '    .then(output => {',
              "      console.log('Finished updating records');",
              "      callback(null, 'Finished updating records');",
              '    })',
              '    .catch(e => {',
              '      console.error(e);',
              "      callback(e, 'Error!');",
              '    });',
              '};',
              ''
            ]
          ]
        }
      },
      FunctionName: 'RDSReleaseCacheLambdaFunction',
      Handler: 'index.handler',
      MemorySize: 256,
      Role: 'arn:aws:iam::084220657940:role/CapOne-RetailBank-Dev-CustomRole-',
      Runtime: 'nodejs4.3',
      Timeout: 300
    })
  );
  prefixes.map(p => {
    t = addOutput(
      t,
      Output(`${p}FunctionOutput`, {
        Description: `${p} Bucket Cache Function.`,
        Value: Ref(t, `${p}ReleaseCacheLambdaFunction`)
      })
    );
  });

  expect(build(t)).toEqual(require('./templates/functions.json'));
});
