const { Template, S3, SNS } = require('../src/index');

describe('Resource', () => {
  test('Check for types of immediate attributes', () => {
    let t = Template();
    expect(() => {
      t.add(S3.Bucket('Main', { Name: 'This is a bucket' }));
    }).toThrow(SyntaxError);
  });

  test('Test for required attributes', () => {
    let t = Template();
    expect(() => {
      t.add(SNS.TopicPolicy('Main', { Topics: ['SampleTopic'] }));
    }).toThrow(SyntaxError);
  });

  /*test('Check for Array requirement', () => {
    let t = Template();
    expect(() => {
      t.add(S3.Bucket('Main', { Tags: 'This is a bucket' }));
    }).toThrow(SyntaxError);
  });*/
});
