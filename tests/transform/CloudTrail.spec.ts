const { Template, Transform } = require('../../src/index');

const AWS = {
  CloudTrail: class CloudTrail {
    public describeTrails() {
      return {
        promise: () =>
          new Promise(res => {
            res({
              trailList: [
                {
                  CloudWatchLogsLogGroupArn: 'loggrouparn',
                  CloudWatchLogsRoleArn: 'logrolearn',
                  HasCustomEventSelectors: 'false',
                  HomeRegion: 'us-east-1',
                  IncludeGlobalServiceEvents: true,
                  IsMultiRegionTrail: true,
                  KmsKeyId: 'arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012',
                  LogFileValidationEnabled: false,
                  Name: 'transformtest',
                  S3BucketName: 'bucketname',
                  S3KeyPrefix: 'prefix',
                  SnsTopicARN: 'arn:aws:sns:us-east-1:123456789012:MyTopic',
                  SnsTopicName: 'snstopic',
                  TrailARN: 'arn:aws:cloudtrail:us-east-1:123456789012:trail/MyTrail',
                },
                {
                  CloudWatchLogsLogGroupArn: 'loggrouparn1',
                  CloudWatchLogsRoleArn: 'logrolearn1',
                  HasCustomEventSelectors: 'false',
                  HomeRegion: 'us-east-1',
                  IncludeGlobalServiceEvents: true,
                  IsMultiRegionTrail: true,
                  KmsKeyId: 'arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789013',
                  LogFileValidationEnabled: false,
                  Name: 'transformtest1',
                  S3BucketName: 'bucketname1',
                  S3KeyPrefix: 'prefix1',
                  SnsTopicARN: 'arn:aws:sns:us-east-1:123456789012:MyTopic1',
                  SnsTopicName: 'snstopic1',
                  TrailARN: 'arn:aws:cloudtrail:us-east-1:123456789012:trail/MyTrail1',
                }
              ]
            });
          })
      };
    }
  }
};

describe('CloudTrail Trail Transform', () => {
  test('Can transform a trail correctly', async () => {
    const client = new AWS.CloudTrail();
    const resource = await Transform.CloudTrail.Trail(
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
            CloudWatchLogsLogGroupArn : 'loggrouparn',
            CloudWatchLogsRoleArn : 'logrolearn',
            EnableLogFileValidation : false,
            IncludeGlobalServiceEvents : true,
            IsLogging : true,
            IsMultiRegionTrail : true,
            KMSKeyId : 'arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012',
            S3BucketName : 'bucketname',
            S3KeyPrefix : 'prefix',
            SnsTopicName : 'snstopic',
            TrailName : 'transformtest'
          },
          Type: 'AWS::CloudTrail::Trail'
        }
      }
    });
  });

  test('Can transform a list of trails correctly', async () => {
    const client = new AWS.CloudTrail();
    const resource = await Transform.CloudTrail.TrailList(
      client,
    );
    const t = Template().map(resource, r => r);
    expect(t.build()).toEqual({
      AWSTemplateFormatVersion: '2010-09-09',
      Resources: {
        transformtest: {
          Properties: {
            CloudWatchLogsLogGroupArn : 'loggrouparn',
            CloudWatchLogsRoleArn : 'logrolearn',
            EnableLogFileValidation : false,
            IncludeGlobalServiceEvents : true,
            IsLogging : true,
            IsMultiRegionTrail : true,
            KMSKeyId : 'arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012',
            S3BucketName : 'bucketname',
            S3KeyPrefix : 'prefix',
            SnsTopicName : 'snstopic',
            TrailName : 'transformtest'
          },
          Type: 'AWS::CloudTrail::Trail'
        },
        transformtest1: {
          Properties: {
            CloudWatchLogsLogGroupArn : 'loggrouparn1',
            CloudWatchLogsRoleArn : 'logrolearn1',
            EnableLogFileValidation : false,
            IncludeGlobalServiceEvents : true,
            IsLogging : true,
            IsMultiRegionTrail : true,
            KMSKeyId : 'arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789013',
            S3BucketName : 'bucketname1',
            S3KeyPrefix : 'prefix1',
            SnsTopicName : 'snstopic1',
            TrailName : 'transformtest1'
          },
          Type: 'AWS::CloudTrail::Trail'
        }
      }
    });
  });
});
