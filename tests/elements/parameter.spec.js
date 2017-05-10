const { Template, Parameter } = require('../../dist/index');

describe('Parameter', () => {
  test('Can add a Parameter to Template', () => {
    let t = Template().addParameter(Parameter('NewParam', { Type: 'String' }));
    expect(t.build()).toEqual({
      Resources: {},
      AWSTemplateFormatVersion: '2010-09-09',
      Parameters: {
        NewParam: {
          Type: 'String'
        }
      }
    });
  });

  test('A new Parameter must have a Name', () => {
    let t = Template();
    expect(() => {
      t.addParameter(Parameter());
    }).toThrow(SyntaxError);
  });

  test('A new Parameter must have a Type', () => {
    let t = Template();
    expect(() => {
      t.addParameter(Parameter('NewParam'));
    }).toThrow(SyntaxError);
  });

  test('Can remove a Parameter to Template once it has been added', () => {
    let t = Template();
    let p = Parameter('NewParam', { Type: 'String' });
    t.addParameter(p).removeParameter(p);
    expect(t.build()).toEqual({
      Resources: {},
      AWSTemplateFormatVersion: '2010-09-09'
    });
  });

  test('Can remove a Parameter to Template once it has been added, by string Name', () => {
    let t = Template()
      .addParameter(Parameter('NewParam', { Type: 'String' }))
      .removeParameter('NewParam');
    expect(t.build()).toEqual({
      Resources: {},
      AWSTemplateFormatVersion: '2010-09-09'
    });
  });
});
