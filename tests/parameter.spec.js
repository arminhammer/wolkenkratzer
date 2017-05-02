const { Template, Parameter, add, remove, json } = require('../dist/index');

describe('Parameter', () => {
  it('Can add a Parameter to Template', () => {
    let t = Template();
    t = add(t, Parameter({ Name: 'NewParam' }));
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

    it('Can remove a Parameter to Template once it has been added', () => {
    let t = Template();
    let p = Parameter({ Name: 'NewParam' })
    t = add(t, p);
    t = remove(t, p);
    expect(JSON.parse(json(t))).toEqual({
      Resources: {},
      AWSTemplateFormatVersion: '2010-09-09'
    });
  });
});
