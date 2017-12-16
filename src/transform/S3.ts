import { compact } from 'lodash';
import { Service } from '../service';
import { IResource, IService, TransformFunctionType, TransformListFunctionType } from '../types';
import { S3 as stub } from './../spec/spec';

/**
 * @hidden
 */
const service: any = Service(stub);

/**
 * @hidden
 */
const Bucket: TransformFunctionType = function(
  name: string,
  AWSClient: AWS.S3,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    const versioningPromise = AWSClient
      .getBucketVersioning({ Bucket: name })
      .promise();
    const corsPromise = AWSClient
      .getBucketCors({ Bucket: name })
      .promise()
      .then(data => {
        const corsresult: { CORSRules } = { CORSRules: [] };
        corsresult.CORSRules = data.CORSRules.map(c => {
          const x: { MaxAge } = { MaxAge: 0 };
          x.MaxAge = c.MaxAgeSeconds;
          return x;
        });
        return corsresult;
      })
      .catch(e => {
        // Silently catch the NoSuchCORSConfiguration
        return { CORSRules: null };
      });
    const lifecyclePromise = AWSClient
      .getBucketLifecycleConfiguration({ Bucket: name })
      .promise()
      .then(data => data)
      .catch(e => {
        // Silently catch the NoSuchLifecycleConfiguration
        return null;
      });
    const loggingPromise = AWSClient.getBucketLogging({ Bucket: name }).promise();
    const notificationPromise = AWSClient
      .getBucketNotification({ Bucket: name })
      .promise();
    const replicationPromise = AWSClient
      .getBucketReplication({ Bucket: name })
      .promise()
      .then(data => data)
      .catch(e => {
        // Silently catch the ReplicationConfigurationNotFoundError
        return null;
      });
    const taggingPromise = AWSClient
      .getBucketTagging({
        Bucket: name
      })
      .promise()
      .then(data => data)
      .catch(e => {
        // Silently catch the NoSuchTagSet
        return null;
      });
    const websitePromise = AWSClient
      .getBucketWebsite({ Bucket: name })
      .promise()
      .then(data => data)
      .catch(e => {
        // Silently catch the NoSuchWebsiteConfiguration
        return null;
      });
    const accessControlPromise = AWSClient
      .getBucketAcl({ Bucket: name })
      .promise();
    const acceleratePromise = AWSClient
      .getBucketAccelerateConfiguration({ Bucket: name })
      .promise();
    const analyticsPromise = AWSClient
      .listBucketAnalyticsConfigurations({ Bucket: name })
      .promise();
    const inventoryPromise = AWSClient
      .listBucketInventoryConfigurations({ Bucket: name })
      .promise();
    const metricsPromise = AWSClient
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
    if (loggingResults && loggingResults.LoggingEnabled) {
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
 */
const BucketList: TransformListFunctionType = function(
  AWSClient: AWS.S3,
): Promise<IResource[]> {
  return new Promise(async (resolve, reject) => {
    const { Buckets } = await AWSClient.listBuckets().promise();
    const list: IResource[] = await Promise.all(
      Buckets.map(b =>
        Bucket(b.Name, AWSClient, `${b.Name}S3Bucket`)
      )
    );
    resolve(list);
  });
};

/**
 * @hidden
 */
const BucketPolicy: TransformFunctionType = function(
  name: string,
  AWSClient: AWS.S3,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    try {
      const { Policy } = await AWSClient
      .getBucketPolicy({ Bucket: name })
      .promise();
      const resource: object = {
        Bucket: name,
        PolicyDocument: Policy
      };
      resolve(service.BucketPolicy(logical, resource));
    } catch (e) {
      // Silently catch Error: The bucket policy does not exist
      resolve(undefined);
    }
  });
};

/**
 * @hidden
 */
const BucketPolicyList: TransformListFunctionType = function(
  AWSClient: AWS.S3,
): Promise<IResource[]> {
  return new Promise(async (resolve, reject) => {
    const { Buckets } = await AWSClient.listBuckets().promise();
    let list: IResource[] = await Promise.all(
      Buckets.map(b =>
        BucketPolicy(b.Name, AWSClient, `${b.Name}S3BucketPolicy`)
      )
    );
    list = compact(list);
    resolve(list);
  });
};

/**
 * @hidden
 */
export const S3 = {
  Bucket,
  BucketList,
  BucketPolicy,
  BucketPolicyList
};
