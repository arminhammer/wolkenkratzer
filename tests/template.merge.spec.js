const { Template, Parameter, Output } = require('../src/index');

describe('Template Merge', () => {
  test('Can merge two templates to JSON', () => {
    let t0 = Template()
      .add(Output('NewOutput', { Value: 'String' }))
      .add(Parameter('NewParam0', { Type: 'String' }));
    let t = Template()
      .add(Parameter('NewParam1', { Type: 'String' }))
      .merge(t0);
    expect(t.build()).toEqual({
      Resources: {},
      AWSTemplateFormatVersion: '2010-09-09',
      Parameters: {
        NewParam0: {
          Type: 'String'
        },
        NewParam1: {
          Type: 'String'
        }
      },
      Outputs: {
        NewOutput: {
          Value: 'String'
        }
      }
    });
  });
});
