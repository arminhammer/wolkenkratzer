const {
  Template,
  Description,
  add,
  remove,
  wipe,
  build
} = require('../../dist/index');

describe('Description', () => {
  test('Can add a Description to Template', () => {
    let t = Template();
    t = add(t, Description({ Content: 'NewDescription' }));
    expect(build(t)).toEqual({
      Resources: {},
      AWSTemplateFormatVersion: '2010-09-09',
      Description: 'NewDescription'
    });
  });

  test('A new Description must have a Content', () => {
    let t = Template();
    expect(() => {
      t = add(t, Description());
    }).toThrow(SyntaxError);
  });

  test('Can remove a Description to Template once it has been added', () => {
    let t = Template();
    let d = Description({ Content: 'NewDescription' });
    t = add(t, d);
    t = remove(t, d);
    expect(build(t)).toEqual({
      Resources: {},
      AWSTemplateFormatVersion: '2010-09-09'
    });
  });

  test('Can wipe a Description from a Template after adding it', () => {
    let t = Template();
    t = add(t, Description({ Content: 'NewDescription' }));
    t = wipe(t, 'Description');
    expect(build(t)).toEqual({
      Resources: {},
      AWSTemplateFormatVersion: '2010-09-09'
    });
  });
});
