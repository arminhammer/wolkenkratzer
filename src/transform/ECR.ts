import { Service } from '../service';
import { IResource, TransformListFunctionType } from '../types';
import { ECR as stub } from './../spec/spec';

/**
 * @hidden
 */
const service: any = Service(stub);

/**
 * @hidden
 */
const RepositoryList: TransformListFunctionType = function(
  AWSClient: AWS.ECR
): Promise<IResource[]> {
  return new Promise(async (resolve, reject) => {
    const { repositories } = await AWSClient.describeRepositories().promise();
    const lifecycles = await Promise.all(
      repositories.map(r =>
        AWSClient.getLifecyclePolicy({
          repositoryName: r.repositoryName,
        }).promise()
      )
    );
    const policytext = await Promise.all(
      repositories.map(r =>
        AWSClient.getRepositoryPolicy({
          repositoryName: r.repositoryName,
        }).promise()
      )
    );
    const resources = repositories.map((r, i) =>
      service.Repository(r.repositoryName, {
        LifecyclePolicy: {
          LifecyclePolicyText: lifecycles[i].lifecyclePolicyText,
          RegistryId: lifecycles[i].registryId,
        },
        RepositoryName: r.repositoryName,
        RepositoryPolicyText: policytext[i].policyText,
      })
    );
    resolve(resources);
  });
};

/**
 * @hidden
 */
export const ECR = {
  RepositoryList,
};
