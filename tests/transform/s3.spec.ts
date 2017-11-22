const { Template, Transform } = require('../../src/index');

const AWS = {
  S3: class S3 {
    public getBucketPolicy(params) {
      return {
        promise: () =>
          new Promise(res => {
            res({
              Policy: {
                Statement: [
                  {
                    Action: 's3:GetBucketAcl',
                    Effect: 'Allow',
                    Principal: { Service: 'cloudtrail.amazonaws.com' },
                    Resource: 'arn:aws:s3:::transform-test',
                    Sid: 'AWSCloudTrailAclCheck20150319'
                  },
                  {
                    Action: 's3:PutObject',
                    Condition: {
                      StringEquals: {
                        's3:x-amz-acl': 'bucket-owner-full-control'
                      }
                    },
                    Effect: 'Allow',
                    Principal: { Service: 'cloudtrail.amazonaws.com' },
                    Resource:
                      'arn:aws:s3:::transform-test/AWSLogs/1234567890/*',
                    Sid: 'AWSCloudTrailWrite20150319'
                  }
                ],
                Version: '2012-10-17'
              }
            });
          })
      };
    }
  }
};

describe('S3 Transform', () => {
  test('Can transform a bucket policy correctly', async () => {
    const resource = await Transform.S3.BucketPolicy(
      'transform-test',
      AWS,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {
          Properties: {
            Bucket: 'transform-test',
            PolicyDocument: {
              Statement: [
                {
                  Action: 's3:GetBucketAcl',
                  Effect: 'Allow',
                  Principal: { Service: 'cloudtrail.amazonaws.com' },
                  Resource: 'arn:aws:s3:::transform-test',
                  Sid: 'AWSCloudTrailAclCheck20150319'
                },
                {
                  Action: 's3:PutObject',
                  Condition: {
                    StringEquals: {
                      's3:x-amz-acl': 'bucket-owner-full-control'
                    }
                  },
                  Effect: 'Allow',
                  Principal: { Service: 'cloudtrail.amazonaws.com' },
                  Resource: 'arn:aws:s3:::transform-test/AWSLogs/1234567890/*',
                  Sid: 'AWSCloudTrailWrite20150319'
                }
              ],
              Version: '2012-10-17'
            }
          },
          Type: 'AWS::S3::BucketPolicy'
        }
      }
    });
  });
});
