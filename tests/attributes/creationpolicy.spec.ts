const {
  Template,
  CloudFormation,
  CreationPolicy,
  Ref
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
          Type: 'AWS::CloudFormation::WaitConditionHandle',
        },
        WaitCondition: {
          CreationPolicy: {
            ResourceSignal: {
              Count: '5',
              Timeout: 'PT15M'
            }
          },
          Properties: {
                     Handle:  {
                       Ref: 'Handle',
                     },
                     Timeout: '300',
                   },
          Type: 'AWS::CloudFormation::WaitCondition';
        }
      }
    });
  });
});
