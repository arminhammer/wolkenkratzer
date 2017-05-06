const {
  Template,
  Parameter,
  addParameter,
  removeParameter,
  build
} = require('../../dist/index');

describe('Parameter', () => {
  test('Can add a Parameter to Template', () => {
    let t = Template();
    t = addParameter(t, Parameter('NewParam', { Type: 'String' }));
    expect(build(t)).toEqual({
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
      t = addParameter(t, Parameter());
    }).toThrow(SyntaxError);
  });

  test('A new Parameter must have a Type', () => {
    let t = Template();
    expect(() => {
      t = addParameter(t, Parameter('NewParam'));
    }).toThrow(SyntaxError);
  });

  test('Can remove a Parameter to Template once it has been added', () => {
    let t = Template();
    let p = Parameter('NewParam', { Type: 'String' });
    t = addParameter(t, p);
    t = removeParameter(t, p);
    expect(build(t)).toEqual({
      Resources: {},
      AWSTemplateFormatVersion: '2010-09-09'
    });
  });

  test('Can remove a Parameter to Template once it has been added, by string Name', () => {
    let t = Template();
    t = addParameter(t, Parameter('NewParam', { Type: 'String' }));
    t = removeParameter(t, 'NewParam');
    expect(build(t)).toEqual({
      Resources: {},
      AWSTemplateFormatVersion: '2010-09-09'
    });
  });
});
