import { Service } from '../service';
import { IResource, IService, TransformFunctionType } from '../types';
import { S3 as stub } from './../spec/spec';

/**
 * @hidden
 */
const service: any = Service(stub);

/**
 * @hidden
 * @param param0
 */
const Bucket: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    const client = new AWSClient.S3();
    const versioningPromise = client
      .getBucketVersioning({ Bucket: name })
      .promise();
    const corsPromise = client
      .getBucketCors({ Bucket: name })
      .promise()
      .then(data => {
        data.CORSRules = data.CORSRules.map(c => {
          c.MaxAge = c.MaxAgeSeconds;
          delete c.MaxAgeSeconds;
          return c;
        });
        return data;
      })
      .catch(e => {
        // Silently catch the NoSuchCORSConfiguration
        return null;
      });
    const lifecyclePromise = client
      .getBucketLifecycleConfiguration({ Bucket: name })
      .promise()
      .then(data => data)
      .catch(e => {
        // Silently catch the NoSuchLifecycleConfiguration
        return null;
      });
    const loggingPromise = client.getBucketLogging({ Bucket: name }).promise();
    const notificationPromise = client
      .getBucketNotification({ Bucket: name })
      .promise();
    const replicationPromise = client
      .getBucketReplication({ Bucket: name })
      .promise()
      .then(data => data)
      .catch(e => {
        // Silently catch the ReplicationConfigurationNotFoundError
        return null;
      });
    const taggingPromise = client
      .getBucketTagging({
        Bucket: name
      })
      .promise()
      .then(data => data)
      .catch(e => {
        // Silently catch the NoSuchTagSet
        return null;
      });
    const websitePromise = client
      .getBucketWebsite({ Bucket: name })
      .promise()
      .then(data => data)
      .catch(e => {
        // Silently catch the NoSuchWebsiteConfiguration
        return null;
      });
    const accessControlPromise = client
      .getBucketAcl({ Bucket: name })
      .promise();
    const acceleratePromise = client
      .getBucketAccelerateConfiguration({ Bucket: name })
      .promise();
    const analyticsPromise = client
      .listBucketAnalyticsConfigurations({ Bucket: name })
      .promise();
    const inventoryPromise = client
      .listBucketInventoryConfigurations({ Bucket: name })
      .promise();
    const metricsPromise = client
      .listBucketMetricsConfigurations({ Bucket: name })
      .promise();

    const [
      versionResults,
      corsResults,
      lifecycleResults,
      loggingResults,
      notificationResults,
      replicationResults,
      taggingResults,
      websiteResults,
      accessControlResults,
      accelerateResults,
      analyticsResults,
      inventoryResults,
      metricsResults
    ]: any = await Promise.all([
      versioningPromise,
      corsPromise,
      lifecyclePromise,
      loggingPromise,
      notificationPromise,
      replicationPromise,
      taggingPromise,
      websitePromise,
      accessControlPromise,
      acceleratePromise,
      analyticsPromise,
      inventoryPromise,
      metricsPromise
    ]);
    const resource: any = { BucketName: name };
    if (versionResults.Status) {
      resource.VersioningConfiguration = versionResults;
    }
    if (corsResults.CORSRules) {
      resource.CorsConfiguration = { CORSRules: corsResults.CORSRules };
    }
    if (lifecycleResults) {
      resource.LifecycleConfiguration = lifecycleResults;
    }
    if (loggingResults) {
      resource.LoggingConfiguration = {
        DestinationBucketName: loggingResults.LoggingEnabled.TargetBucket,
        LogFilePrefix: loggingResults.LoggingEnabled.TargetPrefix
      };
    }
    if (Object.keys(notificationResults).length > 0) {
      resource.NotificationConfiguration = notificationResults;
    }
    if (replicationResults) {
      resource.ReplicationConfiguration = replicationResults;
    }
    if (taggingResults) {
      resource.Tags = taggingResults.TagSet;
    }
    if (websiteResults) {
      resource.WebsiteConfiguration = websiteResults;
    }
    if (accessControlResults) {
      resource.AccessControl = accessControlResults;
    }
    if (accelerateResults) {
      resource.AccelerateConfiguration = accelerateResults;
    }
    if (analyticsResults) {
      resource.AnalyticsConfigurations =
        analyticsResults.AnalyticsConfigurationList;
    }
    if (inventoryResults) {
      resource.InventoryConfigurations =
        inventoryResults.InventoryConfigurationList;
    }
    if (metricsResults) {
      resource.MetricsConfigurations = metricsResults.MetricsConfigurationList;
    }
    return resolve(service.Bucket(logical, resource));
  });
};

/**
 * @hidden
 * @param param0
 */
const BucketPolicy: TransformFunctionType = function(
  name: string,
  AWSClient: any,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    const resourceClient = new AWSClient.S3();
    const { Policy } = await resourceClient
      .getBucketPolicy({ Bucket: name })
      .promise();
    const resource: object = {
      Bucket: name,
      PolicyDocument: Policy
    };
    return resolve(service.BucketPolicy(logical, resource));
  });
};

/**
 * @hidden
 */
export const S3 = {
  Bucket,
  BucketPolicy
};
