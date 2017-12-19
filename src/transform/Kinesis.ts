import { Service } from '../service';
import { IResource, IService, TransformListFunctionType } from '../types';
import { Kinesis as stub } from './../spec/spec';

/**
 * @hidden
 */
const service: any = Service(stub);

/**
 * @hidden
 */
const StreamList: TransformListFunctionType = function(
    AWSClient: AWS.Kinesis
  ): Promise<IResource[]> {
    return new Promise(async (resolve, reject) => {
        const { StreamNames } = await AWSClient.listStreams()
        .promise();
        const streams = await Promise.all(
            StreamNames.map(s => AWSClient.describeStreamSummary({ StreamName: s }).promise()));
        const tags = await Promise.all(
            StreamNames.map(s => AWSClient.listTagsForStream({ StreamName: s }).promise()));
    
        const resources = streams.map((s, i) => service.Stream(s.StreamDescriptionSummary.StreamName, {
            Name : s.StreamDescriptionSummary.StreamName,
            RetentionPeriodHours : s.StreamDescriptionSummary.RetentionPeriodHours,
            ShardCount : s.StreamDescriptionSummary.OpenShardCount,
            Tags : tags[i].Tags
        }));
        
        resolve(resources);
    });
  };

/**
 * @hidden
 */
export const Kinesis = {
    StreamList
};
