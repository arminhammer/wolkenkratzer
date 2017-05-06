const {
  Template,
  Description,
  addDescription,
  remove,
  removeDescription,
  build
} = require('../../dist/index');

describe('Description', () => {
  test('Can add a Description to Template', () => {
    let t = Template();
    t = addDescription(t, Description({ Content: 'NewDescription' }));
    expect(build(t)).toEqual({
      Resources: {},
      AWSTemplateFormatVersion: '2010-09-09',
      Description: 'NewDescription'
    });
  });

  test('A new Description must have a Content', () => {
    let t = Template();
    expect(() => {
      t = addDescription(t, Description());
    }).toThrow(SyntaxError);
  });

  test('Can remove a Description from a Template', () => {
    let t = Template();
    t = addDescription(t, Description({ Content: 'NewDescription' }));
    t = removeDescription(t);
    expect(build(t)).toEqual({
      Resources: {},
      AWSTemplateFormatVersion: '2010-09-09'
    });
  });
});
