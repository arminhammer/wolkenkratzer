const { Template } = require('../src/index');

describe('Template', () => {
  test('Can turn a Template to JSON', () => {
    let t = Template();
    expect(t.build()).toEqual({
      Resources: {},
      AWSTemplateFormatVersion: '2010-09-09'
    });
  });
});
