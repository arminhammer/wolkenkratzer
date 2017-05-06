const {
  Template,
  Output,
  addOutput,
  removeOutput,
  build
} = require('../../dist/index');

describe('Output', () => {
  test('Can add a Output to Template', () => {
    let t = Template();
    t = addOutput(t, Output('NewOutput', { Value: 'String' }));
    expect(build(t)).toEqual({
      Resources: {},
      AWSTemplateFormatVersion: '2010-09-09',
      Outputs: {
        NewOutput: {
          Value: 'String'
        }
      }
    });
  });

  test('A new Output must have a Name', () => {
    let t = Template();
    expect(() => {
      t = addOutput(t, Output());
    }).toThrow(SyntaxError);
  });

  test('A new Output must have a Value', () => {
    let t = Template();
    expect(() => {
      t = addOutput(t, Output('NewOutput'));
    }).toThrow(SyntaxError);
  });

  test('Can remove a Output to Template once it has been added', () => {
    let t = Template();
    let o = Output('NewOutput', { Value: 'String' });
    t = addOutput(t, o);
    t = removeOutput(t, o);
    expect(build(t)).toEqual({
      Resources: {},
      AWSTemplateFormatVersion: '2010-09-09'
    });
  });

  test('Can remove a Output to Template once it has been added, by string Name', () => {
    let t = Template();
    t = addOutput(t, Output('NewOutput', { Value: 'String' }));
    t = removeOutput(t, 'NewOutput');
    expect(build(t)).toEqual({
      Resources: {},
      AWSTemplateFormatVersion: '2010-09-09'
    });
  });
});
