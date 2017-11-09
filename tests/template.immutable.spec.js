const {
  Template,
  Description,
  Mapping,
  Output,
  Parameter,
  S3
} = require('../src/index');

describe('Template Immutability', () => {
  test('Test that adding a Description does not mutate the Template', () => {
    const t = Template();
    t.add(Description('This is a description'));
    expect(t.build()).toEqual({
      Resources: {},
      AWSTemplateFormatVersion: '2010-09-09'
    });
  });

  test('Test that adding a Mapping does not mutate the Template', () => {
    const t = Template();
    t.add(
      Mapping('RegionMap', 'us-east-1', {
        S3hostedzoneID: 'Z3AQBSTGFYJSTF',
        websiteendpoint: 's3-website-us-east-1.amazonaws.com'
      })
    );
    expect(t.build()).toEqual({
      Resources: {},
      AWSTemplateFormatVersion: '2010-09-09'
    });
  });

  test('Test that adding a Output does not mutate the Template', () => {
    const t = Template();
    t.add(Output('NewOutput', { Value: 'String' }));
    expect(t.build()).toEqual({
      Resources: {},
      AWSTemplateFormatVersion: '2010-09-09'
    });
  });

  test('Test that adding a Parameter does not mutate the Template', () => {
    const t = Template();
    t.add(Parameter('NewParam', { Type: 'String' }));
    expect(t.build()).toEqual({
      Resources: {},
      AWSTemplateFormatVersion: '2010-09-09'
    });
  });

  test('Test that adding a Resource does not mutate the Template', () => {
    const t = Template();
    t.add(S3.Bucket('Main', { BucketName: 'This is a bucket' }));
    expect(t.build()).toEqual({
      Resources: {},
      AWSTemplateFormatVersion: '2010-09-09'
    });
  });
});
