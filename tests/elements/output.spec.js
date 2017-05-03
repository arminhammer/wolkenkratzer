const { Template, Output, add, remove, json } = require('../../dist/index');

describe('Output', () => {
  test('Can add a Output to Template', () => {
    let t = Template();
    t = add(t, Output({ Name: 'NewOutput', Value: 'String' }));
    expect(JSON.parse(json(t))).toEqual({
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
      t = add(t, Output());
    }).toThrow(SyntaxError);
  });

  test('A new Output must have a Value', () => {
    let t = Template();
    expect(() => {
      t = add(t, Output({ Name: 'NewOutput' }));
    }).toThrow(SyntaxError);
  });

  test('Can remove a Output to Template once it has been added', () => {
    let t = Template();
    let o = Output({ Name: 'NewOutput', Value: 'String' });
    t = add(t, o);
    t = remove(t, o);
    expect(JSON.parse(json(t))).toEqual({
      Resources: {},
      AWSTemplateFormatVersion: '2010-09-09'
    });
  });

  test('Can remove a Output to Template once it has been added, by string Name', () => {
    let t = Template();
    t = add(t, Output({ Name: 'NewOutput', Value: 'String' }));
    t = remove(t, 'NewOutput');
    expect(JSON.parse(json(t))).toEqual({
      Resources: {},
      AWSTemplateFormatVersion: '2010-09-09'
    });
  });
});
