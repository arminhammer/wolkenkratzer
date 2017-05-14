const { Template, Mapping } = require('../../src/index');

describe('Mapping', () => {
  test('Can add a Mapping to Template', () => {
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

  test('Can add a second, different, Mapping to Template', () => {
    let t = Template()
      .add(
        Mapping('RegionMap', 'us-east-1', {
          S3hostedzoneID: 'Z3AQBSTGFYJSTF',
          websiteendpoint: 's3-website-us-east-1.amazonaws.com'
        })
      )
      .add(
        Mapping('RegionMap0', 'us-east-1', {
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
        },
        RegionMap0: {
          'us-east-1': {
            S3hostedzoneID: 'Z3AQBSTGFYJSTF',
            websiteendpoint: 's3-website-us-east-1.amazonaws.com'
          }
        }
      }
    });
  });

  test('Can add a second Mapping of the same key to a Template', () => {
    let t = Template()
      .add(
        Mapping('RegionMap', 'us-east-1', {
          S3hostedzoneID: 'Z3AQBSTGFYJSTF',
          websiteendpoint: 's3-website-us-east-1.amazonaws.com'
        })
      )
      .add(
        Mapping('RegionMap', 'us-west-1', {
          S3hostedzoneID: 'Z2F56UZL2M1ACD',
          websiteendpoint: 's3-website-us-west-1.amazonaws.com'
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
          },
          'us-west-1': {
            S3hostedzoneID: 'Z2F56UZL2M1ACD',
            websiteendpoint: 's3-website-us-west-1.amazonaws.com'
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

  test('A new Mapping must have a SubName', () => {
    let t = Template();
    expect(() => {
      t.add(Mapping('NewMapping'));
    }).toThrow(SyntaxError);
  });

  test('A new Mapping must have a Content', () => {
    let t = Template();
    expect(() => {
      t.add(Mapping('NewMapping', 'SubName'));
    }).toThrow(SyntaxError);
  });

  test('Can remove a Mapping to Template once it has been added', () => {
    let t = Template();
    let m = Mapping('RegionMap', 'us-west-1', {
      S3hostedzoneID: 'Z2F56UZL2M1ACD',
      websiteendpoint: 's3-website-us-west-1.amazonaws.com'
    });
    t.add(m).remove(m);
    expect(t.build()).toEqual({
      Resources: {},
      AWSTemplateFormatVersion: '2010-09-09'
    });
  });

  test('Can remove a Mapping to Template once it has been added, by string Name', () => {
    let t = Template()
      .add(
        Mapping('RegionMap', 'us-west-1', {
          S3hostedzoneID: 'Z2F56UZL2M1ACD',
          websiteendpoint: 's3-website-us-west-1.amazonaws.com'
        })
      )
      .remove('RegionMap');
    expect(t.build()).toEqual({
      Resources: {},
      AWSTemplateFormatVersion: '2010-09-09'
    });
  });
});
