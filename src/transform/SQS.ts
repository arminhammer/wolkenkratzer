import { Service } from '../service';
import { IResource, TransformListFunctionType } from '../types';
import { SQS as stub } from './../spec/spec';

/**
 * @hidden
 */
const service: any = Service(stub);

/**
 * @hidden
 */
const QueueList: TransformListFunctionType = function(
  AWSClient: AWS.SQS
): Promise<IResource[]> {
  return new Promise(async (resolve, reject) => {
    const { QueueUrls } = await AWSClient.listQueues().promise();
    const queues = await Promise.all(
      QueueUrls.map(q =>
        AWSClient.getQueueAttributes({
          QueueUrl: q,
          AttributeNames: ['All'],
        }).promise()
      )
    );

    const resources = queues.map((q, i) =>
      service.Queue(q.Attributes.QueueArn, {
        ContentBasedDeduplication: q.Attributes.ContentBasedDeduplication,
        DelaySeconds: q.Attributes.DelaySeconds,
        FifoQueue: q.Attributes.FifoQueue,
        KmsDataKeyReusePeriodSeconds: q.Attributes.KmsDataKeyReusePeriodSeconds,
        KmsMasterKeyId: q.Attributes.KmsMasterKeyId,
        MaximumMessageSize: q.Attributes.MaximumMessageSize,
        MessageRetentionPeriod: q.Attributes.MessageRetentionPeriod,
        QueueName: q.Attributes.QueueArn.split(':')[5],
        ReceiveMessageWaitTimeSeconds:
          q.Attributes.ReceiveMessageWaitTimeSeconds,
        RedrivePolicy: q.Attributes.RedrivePolicy,
        VisibilityTimeout: q.Attributes.VisibilityTimeout,
      })
    );

    resolve(resources);
  });
};

/**
 * @hidden
 */
const QueuePolicyList: TransformListFunctionType = function(
  AWSClient: AWS.SQS
): Promise<IResource[]> {
  return new Promise(async (resolve, reject) => {
    const { QueueUrls } = await AWSClient.listQueues().promise();
    const queues = await Promise.all(
      QueueUrls.map(q =>
        AWSClient.getQueueAttributes({
          QueueUrl: q,
          AttributeNames: ['All'],
        }).promise()
      )
    );

    const resources = queues.map((q, i) =>
      service.Queue(q.Attributes.QueueArn, {
        PolicyDocument: q.Attributes.Policy,
        Queues: [QueueUrls[i]],
      })
    );

    resolve(resources);
  });
};

/**
 * @hidden
 */
export const SQS = {
  QueueList,
  QueuePolicyList,
};
