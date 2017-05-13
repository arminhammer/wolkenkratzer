const { Template, Parameter } = require('../../src/index');

describe('Parameter', () => {
  test('Can add a Parameter to Template', () => {
    let t = Template().add(Parameter('NewParam', { Type: 'String' }));
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
      t.add(Parameter());
    }).toThrow(SyntaxError);
  });

  test('A new Parameter must have a Type', () => {
    let t = Template();
    expect(() => {
      t.add(Parameter('NewParam'));
    }).toThrow(SyntaxError);
  });

  test('Can remove a Parameter to Template once it has been added', () => {
    let t = Template();
    let p = Parameter('NewParam', { Type: 'String' });
    t.add(p).remove(p);
    expect(t.build()).toEqual({
      Resources: {},
      AWSTemplateFormatVersion: '2010-09-09'
    });
  });

  test('Can remove a Parameter to Template once it has been added, by string Name', () => {
    let t = Template()
      .add(Parameter('NewParam', { Type: 'String' }))
      .remove('NewParam');
    expect(t.build()).toEqual({
      Resources: {},
      AWSTemplateFormatVersion: '2010-09-09'
    });
  });
});
