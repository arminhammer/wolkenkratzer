const { Template, Transform } = require('../../src/index');

const AWS = {
  S3: class S3 {
    public getBucketPolicy(params) {
      return {
        promise: () =>
          new Promise((res, rej) => {
            if (params.Bucket === 'transformtest') {
            res({
              Policy: {
                Statement: [
                  {
                    Action: 's3:GetBucketAcl',
                    Effect: 'Allow',
                    Principal: { Service: 'cloudtrail.amazonaws.com' },
                    Resource: 'arn:aws:s3:::transformtest',
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
                      'arn:aws:s3:::transformtest/AWSLogs/1234567890/*',
                    Sid: 'AWSCloudTrailWrite20150319'
                  }
                ],
                Version: '2012-10-17'
              }
            });
          } else if (params.Bucket === 'transformtest1') {
            rej('No Policy');
          }
          })
      };
    }
    public listBuckets() {
      return {
        promise: () =>
          new Promise(res => {
            res({
              Buckets: [
                { Name: 'transformtest', CreationDate: '12345678890'}, 
                { Name: 'transformtest1', CreationDate: '12345678890'}
              ]
            });
          })
      };
    }
  }
};

describe('S3 Transform', () => {
  test('Can transform a bucket policy correctly', async () => {
    const client = new AWS.S3();
    const resource = await Transform.S3.BucketPolicy(
      'transformtest',
      client,
      'Main'
    );
    const t = Template().add(resource);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        Main: {
          Properties: {
            Bucket: 'transformtest',
            PolicyDocument: {
              Statement: [
                {
                  Action: 's3:GetBucketAcl',
                  Effect: 'Allow',
                  Principal: { Service: 'cloudtrail.amazonaws.com' },
                  Resource: 'arn:aws:s3:::transformtest',
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
                  Resource: 'arn:aws:s3:::transformtest/AWSLogs/1234567890/*',
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
  test('Can transform a list of bucket policies correctly', async () => {
    const client = new AWS.S3();
    const resources = await Transform.S3.BucketPolicyList(
      client
    );
    const t = Template().add(resources);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        transformtestS3BucketPolicy: {
          Properties: {
            Bucket: 'transformtest',
            PolicyDocument: {
              Statement: [
                {
                  Action: 's3:GetBucketAcl',
                  Effect: 'Allow',
                  Principal: { Service: 'cloudtrail.amazonaws.com' },
                  Resource: 'arn:aws:s3:::transformtest',
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
                  Resource: 'arn:aws:s3:::transformtest/AWSLogs/1234567890/*',
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
