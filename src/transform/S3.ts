import { Service } from '../service';
import { IResource, IService, ITransformParameters } from '../types';
import { S3 as stub } from './../spec/spec';

/**
 * @hidden
 */
const service: any = Service(stub);

/**
 * @hidden
 * @param param0
 */
function Bucket({
  resourceName,
  AWSClient,
  logicalName
}: ITransformParameters): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    const resourceClient = new AWSClient.S3();
    const versioning = resourceClient
      .getBucketVersioning({ Bucket: resourceName })
      .promise();
    const cors = resourceClient
      .getBucketCors({ Bucket: resourceName })
      .promise()
      .then(data => {
        data.CORSRules = data.CORSRules.map(c => {
          c.MaxAge = c.MaxAgeSeconds;
          delete c.MaxAgeSeconds;
          return c;
        });
        console.log('data:', data);
        return data;
      })
      .catch(e => {
        console.log(e);
        return null;
      });
    const [versionResults, corsResults] = await Promise.all([versioning, cors]);
    console.log('results');
    console.log(versionResults);
    console.log(corsResults);
    const resource: any = { BucketName: resourceName };
    if (versionResults.Status) {
      resource.VersioningConfiguration = versionResults;
    }
    if (corsResults.CORSRules) {
      resource.CorsConfiguration = { CORSRules: corsResults.CORSRules };
    }
    return resolve(service.Bucket(logicalName, resource));
  });
}

/**
 * @hidden
 * @param param0
 */
function BucketPolicy({
  resourceName,
  AWSClient,
  logicalName
}: ITransformParameters): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    const resourceClient = new AWSClient.S3();
    const { Policy } = await resourceClient
      .getBucketPolicy({ Bucket: resourceName })
      .promise();
    const resource: object = {
      Bucket: resourceName,
      PolicyDocument: Policy
    };
    return resolve(service.BucketPolicy(logicalName, resource));
  });
}

/**
 * @hidden
 * @param bucketName
 * @param logicalName
 * @param awsObj
 */
function S3BucketTransform(
  bucketName: string,
  logicalName: string,
  awsObj: any
) {
  const s3Client = new awsObj.S3();
  return new Promise((resolve, reject) => {
    // let bucket = new s3Resource.Bucket(newName);
    const bucket: any = {};
    return (
      s3Client
        .getBucketVersioning({ Bucket: bucketName })
        .promise()
        .then(versionData => {
          if (Object.keys(versionData).length > 0) {
            bucket.VersioningConfiguration = versionData;
          }
          // return s3Client.getBucketAcl({ Bucket: bucketName }).promise()
          return s3Client.getBucketCors({ Bucket: bucketName }).promise();
        })
        /* .then(function (aclData) {
        bucket.AccessControl = aclData
      })*/
        .then(corsData => {
          bucket.CorsConfiguration = corsData;
          return s3Client
            .getBucketLifecycleConfiguration({ Bucket: bucketName })
            .promise();
        })
        .catch(e => {
          // Silently catch the NoSuchCORSConfiguration
          return s3Client
            .getBucketLifecycleConfiguration({ Bucket: bucketName })
            .promise();
        })
        .then(lifeData => {
          bucket.LifecycleConfiguration = lifeData;
          return s3Client.getBucketLogging({ Bucket: bucketName }).promise();
        })
        .catch(e => {
          // Silently catch the NoSuchLifecycleConfiguration
          return s3Client.getBucketLogging({ Bucket: bucketName }).promise();
        })
        .then(loggingData => {
          bucket.LoggingConfiguration = {
            DestinationBucketName: loggingData.LoggingEnabled.TargetBucket,
            LogFilePrefix: loggingData.LoggingEnabled.TargetPrefix
          };
          return s3Client
            .getBucketNotification({ Bucket: bucketName })
            .promise();
        })
        .then(notificationData => {
          if (Object.keys(notificationData).length > 0) {
            bucket.NotificationConfiguration = notificationData;
          }
          return s3Client
            .getBucketReplication({ Bucket: bucketName })
            .promise();
        })
        .then(replData => {
          bucket.ReplicationConfiguration = replData;
          return s3Client.getBucketTagging({ Bucket: bucketName }).promise();
        })
        .then(tagsData => {
          tagsData.TagSet.forEach((tag: any) => {
            bucket.Tags.add(tag);
          });
          return s3Client.getBucketWebsite({ Bucket: bucketName }).promise();
        })
        .catch(e => {
          // Silently catch the NoSuchTagSet
          return s3Client.getBucketWebsite({ Bucket: bucketName }).promise();
        })
        .then(websiteData => {
          bucket.WebsiteConfiguration = new websiteData();
        })
        .catch(e => {
          // Silently catch the NoSuchWebsiteConfiguration
          return;
        })
        .then(() => {
          resolve(service.Bucket(logicalName, bucket));
        })
        .catch(e => {
          // Silently catch the NoSuchWebsiteConfiguration
          reject(e);
        })
    );
  });
}

/**
 * @hidden
 */
export const S3 = {
  Bucket,
  BucketPolicy,
  S3BucketTransform
};
