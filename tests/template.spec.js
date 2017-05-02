const { Template, Parameter, add, json } = require('../dist/index');

describe('Template', () => {
  it('Can turn a Template to JSON', () => {
    let t = Template();
    expect(JSON.parse(json(t))).toEqual({
      Resources: {},
      AWSTemplateFormatVersion: '2010-09-09'
    });
  });
});
