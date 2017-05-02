const { Template, Parameter, add, remove, json } = require('../dist/index');

describe('Parameter', () => {
  it('Can add a Parameter to Template', () => {
    let t = Template();
    t = add(t, Parameter({ Name: 'NewParam', Type: 'String' }));
    expect(JSON.parse(json(t))).toEqual({
      Resources: {},
      AWSTemplateFormatVersion: '2010-09-09',
      Parameters: {
        NewParam: {
          Type: 'String'
        }
      }
    });
  });

  it('A new Parameter must have a Name', () => {
    let t = Template();
    expect(() => {
      t = add(t, Parameter());
    }).toThrow(SyntaxError);
  });

  it('A new Parameter must have a Type', () => {
    let t = Template();
    expect(() => {
      t = add(t, Parameter({ Name: 'NewParam' }));
    }).toThrow(SyntaxError);
  });

  it('Can remove a Parameter to Template once it has been added', () => {
    let t = Template();
    let p = Parameter({ Name: 'NewParam', Type: 'String' });
    t = add(t, p);
    t = remove(t, p);
    expect(JSON.parse(json(t))).toEqual({
      Resources: {},
      AWSTemplateFormatVersion: '2010-09-09'
    });
  });

  it('Can remove a Parameter to Template once it has been added, by string Name', () => {
    let t = Template();
    t = add(t, Parameter({ Name: 'NewParam', Type: 'String' }));
    t = remove(t, 'NewParam');
    expect(JSON.parse(json(t))).toEqual({
      Resources: {},
      AWSTemplateFormatVersion: '2010-09-09'
    });
  });
});
