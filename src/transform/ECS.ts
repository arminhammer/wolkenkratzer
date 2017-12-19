import { flatten } from 'lodash';
import { Service } from '../service';
import { IResource, IService, TransformListFunctionType } from '../types';
import { ECS as stub } from './../spec/spec';

/**
 * @hidden
 */
const service: any = Service(stub);

/**
 * @hidden
 */
const ClusterList: TransformListFunctionType = function(
    AWSClient: AWS.ECS
  ): Promise<IResource[]> {
    return new Promise(async (resolve, reject) => {
        const { clusterArns } = await AWSClient.listClusters()
        .promise();
        const clusterNames = clusterArns.map(c => c.split(':')[5].slice(8));
        const resources = clusterNames.map(x => service.Cluster(x, {
            ClusterName: x 
        }));
        resolve(resources);
    });
  };

/**
 * @hidden
 */
const ServiceList: TransformListFunctionType = function(
    AWSClient: AWS.ECS
  ): Promise<IResource[]> {
    return new Promise(async (resolve, reject) => {
        const { clusterArns } = await AWSClient.listClusters()
        .promise();
        const serviceList = await Promise.all(clusterArns.map(c => AWSClient.listServices({ cluster: c }).promise()));
        const services = flatten(await Promise.all(serviceList.map((s, i) => 
        AWSClient.describeServices({ cluster: clusterArns[i], services: s.serviceArns }).promise())));
        const describedServices = flatten(services.map(x => x.services.map(y => y)));
        const resources = describedServices.map(x => service.Service(x, {
            Cluster: x.clusterArn,
            DeploymentConfiguration : x.deploymentConfiguration,
            DesiredCount : x.desiredCount,
            LaunchType : x.launchType,
            LoadBalancers : x.loadBalancers,
            NetworkConfiguration : x.networkConfiguration,
            PlacementConstraints : x.placementConstraints,
            PlacementStrategies : x.placementStrategy,
            PlatformVersion : x.platformVersion,
            Role : x.roleArn,
            ServiceName : x.serviceName,
            TaskDefinition : x.taskDefinition
          }));
        resolve(resources);
    });
  };

/**
 * @hidden
 */
const TaskDefinitionList: TransformListFunctionType = function(
    AWSClient: AWS.ECS
  ): Promise<IResource[]> {
    return new Promise(async (resolve, reject) => {
        const { taskDefinitionArns } = await AWSClient.listTaskDefinitions().promise();
        const taskDefinitionList = await Promise.all(taskDefinitionArns
            .map(x => AWSClient.describeTaskDefinition({ taskDefinition: x }).promise()));
        const resources = taskDefinitionList.map(x => service.TaskDefinition(x, {
            ContainerDefinitions : x.taskDefinition.containerDefinitions,        
            Cpu : x.taskDefinition.cpu,    
            ExecutionRoleArn : x.taskDefinition.executionRoleArn,
            Family : x.taskDefinition.family,
            Memory : x.taskDefinition.memory,
            NetworkMode : x.taskDefinition.networkMode,
            PlacementConstraints : x.taskDefinition.placementConstraints,
            RequiresCompatibilities : x.taskDefinition.requiresCompatibilities,
            TaskRoleArn : x.taskDefinition.taskRoleArn,
            Volumes : x.taskDefinition.volumes
        }));
        resolve(resources);
    });
  };

/**
 * @hidden
 */
export const ECS = {
    ClusterList,
    ServiceList, 
    TaskDefinitionList
};
