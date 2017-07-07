const {
  Template,
  Condition,
  FnEquals,
  Ref,
  Pseudo,
  S3
} = require('../../src/index');

describe('Condition', () => {
  test('Can add Condition to Template', () => {
    let t = Template().add(
      Condition('isProd', FnEquals(Ref(Pseudo.AWS_REGION), 'us-east-1'))
    );
    expect(t.build()).toEqual({
      Resources: {},
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {},
      Conditions: {
        isProd: {
          'Fn::Equals': [
            {
              Ref: 'AWS::Region'
            },
            'us-east-1'
          ]
        }
      }
    });
  });

  test('Can create a conditional Resource', () => {
    let t = Template()
      .add(Condition('isProd', FnEquals(Ref(Pseudo.AWS_REGION), 'us-east-1')))
      .add(S3.Bucket('Bucket', null, { Condition: 'isProd' }));
    expect(t.build()).toEqual({
      Resources: {},
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Bucket: {
          Condition: 'isProd',
          Type: 'AWS::S3::Bucket',
          Properties: {}
        }
      },
      Conditions: {
        isProd: {
          'Fn::Equals': [
            {
              Ref: 'AWS::Region'
            },
            'us-east-1'
          ]
        }
      }
    });
  });
});
