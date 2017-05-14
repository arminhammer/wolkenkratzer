const { Template, Mapping } = require('../../src/index');

describe('Mapping', () => {
  test.only('Can add a Mapping to Template', () => {
    let t = Template().add(
      Mapping('RegionMap', 'us-east-1', {
        S3hostedzoneID: 'Z3AQBSTGFYJSTF',
        websiteendpoint: 's3-website-us-east-1.amazonaws.com'
      })
    );
    expect(t.build()).toEqual({
      Resources: {},
      AWSTemplateFormatVersion: '2010-09-09',
      Mappings: {
        RegionMap: {
          'us-east-1': {
            S3hostedzoneID: 'Z3AQBSTGFYJSTF',
            websiteendpoint: 's3-website-us-east-1.amazonaws.com'
          }
        }
      }
    });
  });

  test('A new Mapping must have a Name', () => {
    let t = Template();
    expect(() => {
      t.add(Mapping());
    }).toThrow(SyntaxError);
  });

  test('A new Mapping must have a Value', () => {
    let t = Template();
    expect(() => {
      t.add(Mapping('NewMapping'));
    }).toThrow(SyntaxError);
  });

  test('Can remove a Mapping to Template once it has been added', () => {
    let t = Template();
    let o = Mapping('NewMapping', { Value: 'String' });
    t.add(o).remove(o);
    expect(t.build()).toEqual({
      Resources: {},
      AWSTemplateFormatVersion: '2010-09-09'
    });
  });

  test('Can remove a Mapping to Template once it has been added, by string Name', () => {
    let t = Template()
      .add(Mapping('NewMapping', { Value: 'String' }))
      .remove('NewMapping');
    expect(t.build()).toEqual({
      Resources: {},
      AWSTemplateFormatVersion: '2010-09-09'
    });
  });
});
