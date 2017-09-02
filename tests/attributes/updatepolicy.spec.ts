const { AutoScaling, Template, UpdatePolicy } = require('../../src/index');

describe('UpdatePolicy', () => {
  test('Can add a UpdatePolicy', () => {
    const t = Template()
      .add(
        AutoScaling.AutoScalingGroup('ASG', {
          AvailabilityZones: ['us-east-1a', 'us-east-1b'],
          DesiredCapacity: '1',
          LaunchConfigurationName: {
            Ref: 'LaunchConfig'
          },
          MaxSize: '4',
          MinSize: '1'
        })
      )
      .add(
        UpdatePolicy('ASG', {
          AutoScalingRollingUpdate: {
            MaxBatchSize: '2',
            MinInstancesInService: '1',
            PauseTime: 'PT10M',
            WaitOnResourceSignals: 'true'
          },
          AutoScalingScheduledAction: {
            IgnoreUnmodifiedGroupSizeProperties: 'true'
          }
        })
      )
      .add(
        AutoScaling.ScheduledAction('ScheduledAction', {
          AutoScalingGroupName: {
            Ref: 'ASG'
          },
          DesiredCapacity: '2',
          StartTime: '2017-06-02T20 : 00 : 00Z'
        })
      );
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        ASG: {
          Properties: {
            AvailabilityZones: ['us-east-1a', 'us-east-1b'],
            DesiredCapacity: '1',
            LaunchConfigurationName: {
              Ref: 'LaunchConfig'
            },
            MaxSize: '4',
            MinSize: '1'
          },
          Type: 'AWS::AutoScaling::AutoScalingGroup',
          UpdatePolicy: {
            AutoScalingRollingUpdate: {
              MaxBatchSize: '2',
              MinInstancesInService: '1',
              PauseTime: 'PT10M',
              WaitOnResourceSignals: 'true'
            },
            AutoScalingScheduledAction: {
              IgnoreUnmodifiedGroupSizeProperties: 'true'
            }
          }
        },
        ScheduledAction: {
          Properties: {
            AutoScalingGroupName: {
              Ref: 'ASG'
            },
            DesiredCapacity: '2',
            StartTime: '2017-06-02T20 : 00 : 00Z'
          },
          Type: 'AWS::AutoScaling::ScheduledAction'
        }
      }
    });
  });
});
