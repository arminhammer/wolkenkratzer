const { S3, Parameter, Template } = require('../src/index');

describe('Template Set', () => {
  test('Test has() function', () => {
    const t = Template()
      .add(S3.Bucket('Main', { BucketName: 'bucket-name' }))
      .add(Parameter('NewParameter', { Type: 'String'}));
    const hasBucket = t.has('Main');
    const hasBucketName = t.has('Main.BucketName');
    const hasParameter = t.has('NewParameter');
    const hasTags = t.has('Main.Tags');
    expect(hasBucket).toEqual(true);
    expect(hasBucketName).toEqual(true);
    expect(hasParameter).toEqual(true);
    expect(hasTags).toEqual(false);
  });
});
