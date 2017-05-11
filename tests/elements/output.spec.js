const { Template, Output } = require('../../dist/index');

describe('Output', () => {
  test('Can add a Output to Template', () => {
    let t = Template().add(Output('NewOutput', { Value: 'String' }));
    expect(t.build()).toEqual({
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
      t.add(Output());
    }).toThrow(SyntaxError);
  });

  test('A new Output must have a Value', () => {
    let t = Template();
    expect(() => {
      t.add(Output('NewOutput'));
    }).toThrow(SyntaxError);
  });

  test('Can remove a Output to Template once it has been added', () => {
    let t = Template();
    let o = Output('NewOutput', { Value: 'String' });
    t.add(o).remove(o);
    expect(t.build()).toEqual({
      Resources: {},
      AWSTemplateFormatVersion: '2010-09-09'
    });
  });

  test('Can remove a Output to Template once it has been added, by string Name', () => {
    let t = Template()
      .add(Output('NewOutput', { Value: 'String' }))
      .remove('NewOutput');
    expect(t.build()).toEqual({
      Resources: {},
      AWSTemplateFormatVersion: '2010-09-09'
    });
  });
});
