import { Service } from '../service';
import {
  IResource,
  TransformFunctionType,
  TransformListFunctionType,
} from '../types';
import { CloudTrail as stub } from './../spec/spec';

/**
 * @hidden
 */
const service: any = Service(stub);

/**
 * @hidden
 */
const Trail: TransformFunctionType = function(
  name: string,
  AWSClient: AWS.CloudTrail,
  logical: string
): Promise<IResource> {
  return new Promise(async (resolve, reject) => {
    const { trailList } = await AWSClient.describeTrails({
      trailNameList: [name],
    }).promise();
    const resource: object = {
      CloudWatchLogsLogGroupArn: trailList[0].CloudWatchLogsLogGroupArn,
      CloudWatchLogsRoleArn: trailList[0].CloudWatchLogsRoleArn,
      EnableLogFileValidation: trailList[0].LogFileValidationEnabled,
      IncludeGlobalServiceEvents: trailList[0].IncludeGlobalServiceEvents,
      IsLogging: true,
      IsMultiRegionTrail: trailList[0].IsMultiRegionTrail,
      KMSKeyId: trailList[0].KmsKeyId,
      S3BucketName: trailList[0].S3BucketName,
      S3KeyPrefix: trailList[0].S3KeyPrefix,
      SnsTopicName: trailList[0].SnsTopicName,
      TrailName: name,
    };
    resolve(service.Trail(logical, resource));
  });
};

/**
 * @hidden
 */
const TrailList: TransformListFunctionType = function(
  AWSClient: AWS.CloudTrail
): Promise<IResource[]> {
  return new Promise(async (resolve, reject) => {
    const { trailList } = await AWSClient.describeTrails().promise();

    const resources: IResource[] = trailList.map(t =>
      service.Trail(t.Name, {
        CloudWatchLogsLogGroupArn: t.CloudWatchLogsLogGroupArn,
        CloudWatchLogsRoleArn: t.CloudWatchLogsRoleArn,
        EnableLogFileValidation: t.LogFileValidationEnabled,
        IncludeGlobalServiceEvents: t.IncludeGlobalServiceEvents,
        IsLogging: true,
        IsMultiRegionTrail: t.IsMultiRegionTrail,
        KMSKeyId: t.KmsKeyId,
        S3BucketName: t.S3BucketName,
        S3KeyPrefix: t.S3KeyPrefix,
        SnsTopicName: t.SnsTopicName,
        TrailName: t.Name,
      })
    );
    resolve(resources);
  });
};

/**
 * @hidden
 */
export const CloudTrail = {
  Trail,
  TrailList,
};
