import { Service } from '../service';
import { IResource, TransformListFunctionType } from '../types';
import { SNS as stub } from './../spec/spec';

/**
 * @hidden
 */
const service: any = Service(stub);

/**
 * @hidden
 */
const TopicList: TransformListFunctionType = function(
  AWSClient: AWS.SNS
): Promise<IResource[]> {
  return new Promise(async (resolve, reject) => {
    const { Topics } = await AWSClient.listTopics().promise();

    const topics = await Promise.all(
      Topics.map(x =>
        AWSClient.getTopicAttributes({ TopicArn: x.TopicArn }).promise()
      )
    );
    const subscriptions = await Promise.all(
      Topics.map(x =>
        AWSClient.listSubscriptionsByTopic({ TopicArn: x.TopicArn }).promise()
      )
    );

    const resources = topics.map((x, i) =>
      service.Topic(x.Attributes.DisplayName, {
        DisplayName: x.Attributes.DisplayName,
        Subscription: subscriptions[i].Subscriptions.map(s => ({
          Endpoint: s.Endpoint,
          Protocol: s.Protocol,
        })),
        TopicName: x.Attributes.TopicArn.split(':')[5],
      })
    );

    resolve(resources);
  });
};

/**
 * @hidden
 */
const TopicPolicyList: TransformListFunctionType = function(
  AWSClient: AWS.SNS
): Promise<IResource[]> {
  return new Promise(async (resolve, reject) => {
    const { Topics } = await AWSClient.listTopics().promise();
    const topics = await Promise.all(
      Topics.map(x =>
        AWSClient.getTopicAttributes({ TopicArn: x.TopicArn }).promise()
      )
    );

    const resources = topics.map((x, i) =>
      service.TopicPolicy(x.Attributes.TopicArn, {
        PolicyDocument: x.Attributes.Policy,
        Topics: [x.Attributes.TopicArn],
      })
    );

    resolve(resources);
  });
};

/**
 * @hidden
 */
const SubscriptionList: TransformListFunctionType = function(
  AWSClient: AWS.SNS
): Promise<IResource[]> {
  return new Promise(async (resolve, reject) => {
    const { Subscriptions } = await AWSClient.listSubscriptions().promise();

    const resources = Subscriptions.map((x, i) =>
      service.Subscription(x.SubscriptionArn.split(':')[6], {
        Endpoint: x.Endpoint,
        Protocol: x.Protocol,
        TopicArn: x.TopicArn,
      })
    );

    resolve(resources);
  });
};

/**
 * @hidden
 */
export const SNS = {
  SubscriptionList,
  TopicList,
  TopicPolicyList,
};
