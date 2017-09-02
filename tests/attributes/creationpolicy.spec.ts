const { Template, CloudFormation, CreationPolicy } = require('../../src/index');

describe('CreationPolicy', () => {
  test('Can add a CreationPolicy', () => {
    const t = Template()
      .add(CloudFormation.WaitCondition('WaitCondition'))
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
        WaitCondition: {
          CreationPolicy: {
            ResourceSignal: {
              Count: '5',
              Timeout: 'PT15M'
            }
          },
          Type: 'AWS::CloudFormation::WaitCondition'
        }
      }
    });
  });
});
