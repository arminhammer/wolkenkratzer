const { Template, Description } = require('../../dist/index');

describe('Description', () => {
  test('Can add a Description to Template', () => {
    let t = Template().add(Description({ Content: 'NewDescription' }));
    expect(t.build()).toEqual({
      Resources: {},
      AWSTemplateFormatVersion: '2010-09-09',
      Description: 'NewDescription'
    });
  });

  test('A new Description must have a Content', () => {
    let t = Template();
    expect(() => {
      t.add(Description());
    }).toThrow(SyntaxError);
  });

  test('Can remove a Description from a Template', () => {
    const t = Template()
      .add(Description({ Content: 'NewDescription' }))
      .removeDescription();
    expect(t.build()).toEqual({
      Resources: {},
      AWSTemplateFormatVersion: '2010-09-09'
    });
  });
});
