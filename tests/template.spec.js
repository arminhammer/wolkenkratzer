const { Template, Parameter, add, json } = require('../dist/index');

describe('Template', () => {
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
});
