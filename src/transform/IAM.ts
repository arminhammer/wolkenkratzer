/*
AWS::IAM::AccessKey
AWS::IAM::Group
AWS::IAM::InstanceProfile
AWS::IAM::ManagedPolicy
AWS::IAM::Policy
AWS::IAM::Role
AWS::IAM::User
AWS::IAM::UserToGroupAddition
*/

import { Service } from '../service';
import { IResource, TransformListFunctionType } from '../types';
import { IAM as stub } from './../spec/spec';

/**
 * @hidden
 */
const service: any = Service(stub);

/**
 * @hidden
 */
const ManagedPolicyList: TransformListFunctionType = function(
  AWSClient: AWS.IAM
): Promise<IResource[]> {
  return new Promise(async (resolve, reject) => {
    const { Policies } = await AWSClient.listPolicies().promise();
    const policies = await Promise.all(
      Policies.map(x => AWSClient.getPolicy({ PolicyArn: x.Arn }).promise())
    );
    const policyversions = await Promise.all(
      policies.map(x =>
        AWSClient.getPolicyVersion({
          PolicyArn: x.Policy.Arn,
          VersionId: x.Policy.DefaultVersionId,
        }).promise()
      )
    );

    const resources = policies.map((x, i) =>
      service.ManagedPolicy(x.Policy.PolicyName, {
        Description: x.Policy.Description,
        // Groups : Policies[i].,
        ManagedPolicyName: x.Policy.PolicyName,
        Path: x.Policy.Path,
        PolicyDocument: policyversions[i].PolicyVersion.Document,
        // Roles : [ String, ... ],
        // Users : [ String, ... ],
      })
    );

    resolve(resources);
  });
};

/**
 * @hidden
 */
export const IAM = {
  ManagedPolicyList,
};
