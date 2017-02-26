/**
 * Created by arming on 6/5/16.
 */
/* global describe it */
'use strict';

const path = require('path');
const ava = require('ava');

const BPromise = require('bluebird');
const fs = BPromise.promisifyAll(require('fs-extra'));

const wk = require(path.join(__dirname, '..', 'index'));

ava(
  'Conditional should be tested, You must specify either InternetGatewayId or VpnGatewayId, but not both.',
  test => {
    let t = new wk.Template();

    let vpcCiderParam = new wk.Parameter('VPCCIDR', {
      Type: 'String',
      Default: '10.0.0.0/16'
    });
    t.add(vpcCiderParam);

    let vpc = new wk.EC2.VPC('VPC');
    vpc.CidrBlock.ref(vpcCiderParam);
    vpc.InstanceTenancy = 'default';
    vpc.EnableDnsSupport = true;
    vpc.EnableDnsHostnames = true;
    t.add(vpc);

    let vpnGateway = new wk.EC2.VPNGateway('VPNGateway');
    vpnGateway.Type = 'ipsec.1';
    t.add(vpnGateway);

    let igwGateway = new wk.EC2.InternetGateway('InternetGateway');
    t.add(igwGateway);

    let vpcGatewayAttachment = new wk.EC2.VPCGatewayAttachment(
      'VPCGatewayAttachment'
    );
    vpcGatewayAttachment.InternetGatewayId.ref(igwGateway);
    vpcGatewayAttachment.VpcId.ref(vpc);
    vpcGatewayAttachment.VpnGatewayId.ref(vpnGateway);
    t.add(vpcGatewayAttachment);

    try {
      t.toJson();
    } catch (e) {
      test.equal(
        e.message,
        'VPCGatewayAttachment has a condition that was not met: You must specify either InternetGatewayId or VpnGatewayId, but not both.'
      );
    }
  }
);

ava(
  'Config and ConfigSets should be able to add a Config to an Instance',
  test => {
    let t = new wk.Template();
    let bucket = new wk.S3.Bucket('bucket');
    t.add(bucket);

    let instance = new wk.EC2.Instance('instance');
    instance.ImageId = 'ami-55555';
    t.add(instance);

    let launchConfig = new wk.AutoScaling.LaunchConfiguration('launchConfig');
    launchConfig.ImageId = 'ami-55555';
    launchConfig.InstanceType = 't2.micro';
    t.add(launchConfig);

    let config = new wk.Init.Config('config');
    let configSet = new wk.Init.ConfigSet('configSet');

    instance.addConfig(config);
    let jsonString = JSON.parse(t.toJson().Template);
    test.deepEqual(jsonString, {
      Resources: {
        bucket: {
          Type: 'AWS::S3::Bucket',
          Properties: {}
        },
        instance: {
          Type: 'AWS::EC2::Instance',
          Properties: {
            ImageId: 'ami-55555'
          },
          Metadata: {
            'AWS::CloudFormation::Init': {
              configSets: {},
              config: {}
            }
          }
        },
        launchConfig: {
          Type: 'AWS::AutoScaling::LaunchConfiguration',
          Properties: {
            ImageId: 'ami-55555',
            InstanceType: 't2.micro'
          }
        }
      },
      AWSTemplateFormatVersion: '2010-09-09'
    });
  }
);

ava('Should be able to add a ConfigSet to an Instance', test => {
  let t = new wk.Template();
  let bucket = new wk.S3.Bucket('bucket');
  t.add(bucket);

  let instance = new wk.EC2.Instance('instance');
  instance.ImageId = 'ami-55555';
  t.add(instance);

  let launchConfig = new wk.AutoScaling.LaunchConfiguration('launchConfig');
  launchConfig.ImageId = 'ami-55555';
  launchConfig.InstanceType = 't2.micro';
  t.add(launchConfig);

  let config = new wk.Init.Config('config');
  let configSet = new wk.Init.ConfigSet('configSet');

  instance.addConfigSet(configSet);
  let jsonString = JSON.parse(t.toJson().Template);
  test.deepEqual(jsonString, {
    Resources: {
      bucket: {
        Type: 'AWS::S3::Bucket',
        Properties: {}
      },
      instance: {
        Type: 'AWS::EC2::Instance',
        Properties: {
          ImageId: 'ami-55555'
        },
        Metadata: {
          'AWS::CloudFormation::Init': {
            configSets: {
              configSet: []
            }
          }
        }
      },
      launchConfig: {
        Type: 'AWS::AutoScaling::LaunchConfiguration',
        Properties: {
          ImageId: 'ami-55555',
          InstanceType: 't2.micro'
        }
      }
    },
    AWSTemplateFormatVersion: '2010-09-09'
  });
});

ava('Should be able to add a Config to a LaunchConfiguration', test => {
  let t = new wk.Template();
  let bucket = new wk.S3.Bucket('bucket');
  t.add(bucket);

  let instance = new wk.EC2.Instance('instance');
  instance.ImageId = 'ami-55555';
  t.add(instance);

  let launchConfig = new wk.AutoScaling.LaunchConfiguration('launchConfig');
  launchConfig.ImageId = 'ami-55555';
  launchConfig.InstanceType = 't2.micro';
  t.add(launchConfig);

  let config = new wk.Init.Config('config');
  let configSet = new wk.Init.ConfigSet('configSet');

  launchConfig.addConfig(config);
  let jsonString = JSON.parse(t.toJson().Template);
  test.deepEqual(jsonString, {
    Resources: {
      bucket: {
        Type: 'AWS::S3::Bucket',
        Properties: {}
      },
      instance: {
        Type: 'AWS::EC2::Instance',
        Properties: {
          ImageId: 'ami-55555'
        }
      },
      launchConfig: {
        Type: 'AWS::AutoScaling::LaunchConfiguration',
        Properties: {
          ImageId: 'ami-55555',
          InstanceType: 't2.micro'
        },
        Metadata: {
          'AWS::CloudFormation::Init': {
            configSets: {},
            config: {}
          }
        }
      }
    },
    AWSTemplateFormatVersion: '2010-09-09'
  });
});

ava('Should be able to add a ConfigSet to a LaunchConfiguration', test => {
  let t = new wk.Template();
  let bucket = new wk.S3.Bucket('bucket');
  t.add(bucket);

  let instance = new wk.EC2.Instance('instance');
  instance.ImageId = 'ami-55555';
  t.add(instance);

  let launchConfig = new wk.AutoScaling.LaunchConfiguration('launchConfig');
  launchConfig.ImageId = 'ami-55555';
  launchConfig.InstanceType = 't2.micro';
  t.add(launchConfig);

  let config = new wk.Init.Config('config');
  let configSet = new wk.Init.ConfigSet('configSet');

  launchConfig.addConfigSet(configSet);
  let jsonString = JSON.parse(t.toJson().Template);
  test.deepEqual(jsonString, {
    Resources: {
      bucket: {
        Type: 'AWS::S3::Bucket',
        Properties: {}
      },
      instance: {
        Type: 'AWS::EC2::Instance',
        Properties: {
          ImageId: 'ami-55555'
        }
      },
      launchConfig: {
        Type: 'AWS::AutoScaling::LaunchConfiguration',
        Properties: {
          ImageId: 'ami-55555',
          InstanceType: 't2.micro'
        },
        Metadata: {
          'AWS::CloudFormation::Init': {
            configSets: {
              configSet: []
            }
          }
        }
      }
    },
    AWSTemplateFormatVersion: '2010-09-09'
  });
});

ava('Should not be able to add a Config to an S3 Bucket', test => {
  let t = new wk.Template();
  let bucket = new wk.S3.Bucket('bucket');
  t.add(bucket);
  let config = new wk.Init.Config('config');

  const error = test.throws(() => {
    bucket.addConfig(config);
  });

  test.is(
    error.message,
    'Not allowed to add config to bucket because it is not an Instance or LaunchConfiguration'
  );
});

ava('Should be able to load an existing Static S3 template', test => {
  return fs
    .readJSONAsync(path.join(__dirname, 'stagingtemplates', 's3static.json'))
    .then(data => {
      let t = new wk.Template(data);
      let jsonString = JSON.parse(t.toJson().Template);
      test.deepEqual(jsonString, data);
    });
});
/*
ava('Should be able to load an existing Lambda template', test => {
  return fs
    .readJSONAsync(path.join(__dirname, 'stagingtemplates', 'lambda.json'))
    .then(data => {
      let t = new wk.Template(data);
      console.error('Errors:');
      console.error(t.toJson().Errors);
      let jsonString = JSON.parse(t.toJson().Template);
      //console.log('Template:')
      //console.log(jsonString, null, 2)
      test.deepEqual(jsonString, {
        AWSTemplateFormatVersion: '2010-09-09',
        Parameters: {
          ExistingSecurityGroups: {
            Type: 'List<AWS::EC2::SecurityGroup::Id>'
          },
          ExistingVPC: {
            Type: 'AWS::EC2::VPC::Id',
            Description: 'The VPC ID that includes the security groups in the ExistingSecurityGroups parameter.'
          },
          InstanceType: {
            Type: 'String',
            Default: 't2.micro',
            AllowedValues: ['t2.micro', 'm1.small']
          }
        },
        Mappings: {
          AWSInstanceType2Arch: {
            't2.micro': { Arch: 'HVM64' },
            'm1.small': { Arch: 'PV64' }
          },
          AWSRegionArch2AMI: {
            'us-east-1': { PV64: 'ami-1ccae774', HVM64: 'ami-1ecae776' },
            'us-west-2': { PV64: 'ami-ff527ecf', HVM64: 'ami-e7527ed7' },
            'us-west-1': { PV64: 'ami-d514f291', HVM64: 'ami-d114f295' },
            'eu-west-1': { PV64: 'ami-bf0897c8', HVM64: 'ami-a10897d6' },
            'eu-central-1': { PV64: 'ami-ac221fb1', HVM64: 'ami-a8221fb5' },
            'ap-northeast-1': { PV64: 'ami-27f90e27', HVM64: 'ami-cbf90ecb' },
            'ap-southeast-1': { PV64: 'ami-acd9e8fe', HVM64: 'ami-68d8e93a' },
            'ap-southeast-2': { PV64: 'ami-ff9cecc5', HVM64: 'ami-fd9cecc7' },
            'sa-east-1': { PV64: 'ami-bb2890a6', HVM64: 'ami-b52890a8' },
            'cn-north-1': { PV64: 'ami-fa39abc3', HVM64: 'ami-f239abcb' }
          }
        },
        Resources: {
          SecurityGroup: {
            Type: 'AWS::EC2::SecurityGroup',
            Properties: {
              GroupDescription: 'Allow HTTP traffic to the host',
              VpcId: { Ref: 'ExistingVPC' },
              SecurityGroupIngress: [
                {
                  IpProtocol: 'tcp',
                  FromPort: '80',
                  ToPort: '80',
                  CidrIp: '0.0.0.0/0'
                }
              ],
              SecurityGroupEgress: [
                {
                  IpProtocol: 'tcp',
                  FromPort: '80',
                  ToPort: '80',
                  CidrIp: '0.0.0.0/0'
                }
              ]
            }
          },
          AllSecurityGroups: {
            Type: 'Custom::Split',
            Properties: {
              ServiceToken: {
                'Fn::GetAtt': ['AppendItemToListFunction', 'Arn']
              },
              List: { Ref: 'ExistingSecurityGroups' },
              AppendedItem: { Ref: 'SecurityGroup' }
            }
          },
          AppendItemToListFunction: {
            Type: 'AWS::Lambda::Function',
            Properties: {
              Handler: 'index.handler',
              Role: { 'Fn::GetAtt': ['LambdaExecutionRole', 'Arn'] },
              Code: {
                ZipFile: {
                  'Fn::Join': [
                    '',
                    [
                      "var response = require('cfn-response');",
                      'exports.handler = function(event, context) {',
                      '   var responseData = {Value: event.ResourceProperties.List};',
                      '   responseData.Value.push(event.ResourceProperties.AppendedItem);',
                      '   response.send(event, context, response.SUCCESS, responseData);',
                      '};'
                    ]
                  ]
                }
              },
              Runtime: 'nodejs'
            }
          },
          MyEC2Instance: {
            Type: 'AWS::EC2::Instance',
            Properties: {
              ImageId: {
                'Fn::FindInMap': [
                  'AWSRegionArch2AMI',
                  { Ref: 'AWS::Region' },
                  {
                    'Fn::FindInMap': [
                      'AWSInstanceType2Arch',
                      { Ref: 'InstanceType' },
                      'Arch'
                    ]
                  }
                ]
              },
              SecurityGroupIds: {
                'Fn::GetAtt': ['AllSecurityGroups', 'Value']
              },
              InstanceType: { Ref: 'InstanceType' }
            }
          },
          LambdaExecutionRole: {
            Type: 'AWS::IAM::Role',
            Properties: {
              AssumeRolePolicyDocument: {
                Version: '2012-10-17',
                Statement: [
                  {
                    Effect: 'Allow',
                    Principal: { Service: ['lambda.amazonaws.com'] },
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
                        Action: ['logs:*'],
                        Resource: 'arn:aws:logs:*:*:*'
                      }
                    ]
                  }
                }
              ]
            }
          }
        },
        Outputs: {
          AllSecurityGroups: {
            Description: 'Security Groups that are associated with the EC2 instance',
            Value: {
              'Fn::Join': [
                ', ',
                { 'Fn::GetAtt': ['AllSecurityGroups', 'Value'] }
              ]
            }
          }
        }
      });
    });
});
*/
