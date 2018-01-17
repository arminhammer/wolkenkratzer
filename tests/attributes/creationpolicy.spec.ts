const {
  AutoScaling,
  CloudFormation,
  CreationPolicy,
  FnBase64,
  FnGetAZs,
  FnJoin,
  Pseudo,
  Ref,
  Template,
  UpdatePolicy
} = require('../../src/index');

describe('CreationPolicy', () => {
  test('Can add a CreationPolicy', () => {
    const t = Template()
      .add(CloudFormation.WaitConditionHandle('Handle'))
      .add(
        CloudFormation.WaitCondition('WaitCondition', {
          Handle: Ref('Handle'),
          Timeout: '300'
        })
      )
      .add(
        CreationPolicy('WaitCondition', {
          ResourceSignal: {
            Count: '5',
            Timeout: 'PT15M'
          }
        })
      );
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Handle: {
          Type: 'AWS::CloudFormation::WaitConditionHandle'
        },
        WaitCondition: {
          CreationPolicy: {
            ResourceSignal: {
              Count: '5',
              Timeout: 'PT15M'
            }
          },
          Properties: {
            Handle: {
              Ref: 'Handle'
            },
            Timeout: '300'
          },
          Type: 'AWS::CloudFormation::WaitCondition'
        }
      }
    });
  });

  test.only('Can add a CreationPolicy (from AWS docs)', () => {
    const t = Template()
      .add(
        AutoScaling.LaunchConfiguration('LaunchConfig', {
          ImageId: 'ami-16d18a7e',
          InstanceType: 't2.micro',
          UserData: FnBase64(
            FnJoin('', [
              '#!/bin/bash -xe\n',
              'yum install -y aws-cfn-bootstrap\n',
              '/opt/aws/bin/cfn-signal -e 0 --stack ',
              Ref(Pseudo.AWS_STACK_NAME),
              ' --resource AutoScalingGroup ',
              ' --region ',
              Ref(Pseudo.AWS_REGION),
              '\n'
            ])
          )
        })
      )
      .add(
        AutoScaling.AutoScalingGroup('AutoScalingGroup', {
          AvailabilityZones: FnGetAZs(),
          DesiredCapacity: '3',
          LaunchConfigurationName: Ref('LaunchConfig'),
          MaxSize: '4',
          MinSize: '1'
        })
      )
      .add(
        CreationPolicy('AutoScalingGroup', {
          ResourceSignal: {
            Count: '3',
            Timeout: 'PT15M'
          }
        })
      )
      .add(
        UpdatePolicy('AutoScalingGroup', {
          AutoScalingRollingUpdate: {
            MaxBatchSize: '2',
            MinInstancesInService: '1',
            PauseTime: 'PT1M',
            WaitOnResourceSignals: 'true'
          },
          AutoScalingScheduledAction: {
            IgnoreUnmodifiedGroupSizeProperties: 'true'
          }
        })
      );

    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        AutoScalingGroup: {
          CreationPolicy: {
            ResourceSignal: {
              Count: '3',
              Timeout: 'PT15M'
            }
          },
          Properties: {
            AvailabilityZones: { 'Fn::GetAZs': { Ref: 'AWS::Region' } },
            DesiredCapacity: '3',
            LaunchConfigurationName: { Ref: 'LaunchConfig' },
            MaxSize: '4',
            MinSize: '1'
          },
          Type: 'AWS::AutoScaling::AutoScalingGroup',
          UpdatePolicy: {
            AutoScalingRollingUpdate: {
              MaxBatchSize: '2',
              MinInstancesInService: '1',
              PauseTime: 'PT1M',
              WaitOnResourceSignals: 'true'
            },
            AutoScalingScheduledAction: {
              IgnoreUnmodifiedGroupSizeProperties: 'true'
            }
          }
        },
        LaunchConfig: {
          Properties: {
            ImageId: 'ami-16d18a7e',
            InstanceType: 't2.micro',
            UserData: {
              'Fn::Base64': {
                'Fn::Join': [
                  '',
                  [
                    '#!/bin/bash -xe\n',
                    'yum install -y aws-cfn-bootstrap\n',
                    '/opt/aws/bin/cfn-signal -e 0 --stack ',
                    { Ref: 'AWS::StackName' },
                    ' --resource AutoScalingGroup ',
                    ' --region ',
                    { Ref: 'AWS::Region' },
                    '\n'
                  ]
                ]
              }
            }
          },
          Type: 'AWS::AutoScaling::LaunchConfiguration'
        }
      }
    });
  });
});
