// @flow

export { Template } from './template';
export { Parameter } from './elements/parameter';
export { Description } from './elements/description';
export { Output } from './elements/output';
export { Mapping } from './elements/mapping';
export { Resource, CustomResource } from './elements/resource';
export { Condition } from './elements/condition';
export {
  Ref,
  FnGetAtt,
  FnEquals,
  FnJoin,
  FnFindInMap,
  FnSub,
  FnAnd
} from './intrinsic';
import { Service, IService } from './service';
export { CreationPolicy } from './attributes/creationpolicy';
export { ResourceMetadata } from './attributes/metadata';
export { S3BucketTransform } from './transform/s3';
export {
  getInstanceTypeList,
  getInstanceTypeNameList
} from './macros/ec2meta.macro';
export { Pseudo } from './pseudo';

import * as path from 'path';

import ApiGateway from './stubs/json/ApiGateway.json';
exports['ApiGateway'] = Service(ApiGateway);

import ApplicationAutoScaling from './stubs/json/ApplicationAutoScaling.json';
exports['ApplicationAutoScaling'] = Service(ApplicationAutoScaling);

import AutoScaling from './stubs/json/AutoScaling.json';
exports['AutoScaling'] = Service(AutoScaling);

import CertificateManager from './stubs/json/CertificateManager.json';
exports['CertificateManager'] = Service(CertificateManager);

import CloudFormation from './stubs/json/CloudFormation.json';
exports['CloudFormation'] = Service(CloudFormation);

import CloudFront from './stubs/json/CloudFront.json';
exports['CloudFront'] = Service(CloudFront);

import CloudTrail from './stubs/json/CloudTrail.json';
exports['CloudTrail'] = Service(CloudTrail);

import CloudWatch from './stubs/json/CloudWatch.json';
exports['CloudWatch'] = Service(CloudWatch);

import CodeBuild from './stubs/json/CodeBuild.json';
exports['CodeBuild'] = Service(CodeBuild);

import CodeCommit from './stubs/json/CodeCommit.json';
exports['CodeCommit'] = Service(CodeCommit);

import CodeDeploy from './stubs/json/CodeDeploy.json';
exports['CodeDeploy'] = Service(CodeDeploy);

import CodePipeline from './stubs/json/CodePipeline.json';
exports['CodePipeline'] = Service(CodePipeline);

import Cognito from './stubs/json/Cognito.json';
exports['Cognito'] = Service(Cognito);

import Config from './stubs/json/Config.json';
exports['Config'] = Service(Config);

import DataPipeline from './stubs/json/DataPipeline.json';
exports['DataPipeline'] = Service(DataPipeline);

import DirectoryService from './stubs/json/DirectoryService.json';
exports['DirectoryService'] = Service(DirectoryService);

import DynamoDB from './stubs/json/DynamoDB.json';
exports['DynamoDB'] = Service(DynamoDB);

import EC2 from './stubs/json/EC2.json';
exports['EC2'] = Service(EC2);

import ECR from './stubs/json/ECR.json';
exports['ECR'] = Service(ECR);

import ECS from './stubs/json/ECS.json';
exports['ECS'] = Service(ECS);

import EFS from './stubs/json/EFS.json';
exports['EFS'] = Service(EFS);

import EMR from './stubs/json/EMR.json';
exports['EMR'] = Service(EMR);

import ElastiCache from './stubs/json/ElastiCache.json';
exports['ElastiCache'] = Service(ElastiCache);

import ElasticBeanstalk from './stubs/json/ElasticBeanstalk.json';
exports['ElasticBeanstalk'] = Service(ElasticBeanstalk);

import ElasticLoadBalancing from './stubs/json/ElasticLoadBalancing.json';
exports['ElasticLoadBalancing'] = Service(ElasticLoadBalancing);

import ElasticLoadBalancingV2 from './stubs/json/ElasticLoadBalancingV2.json';
exports['ElasticLoadBalancingV2'] = Service(ElasticLoadBalancingV2);

import Elasticsearch from './stubs/json/Elasticsearch.json';
exports['Elasticsearch'] = Service(Elasticsearch);

import Events from './stubs/json/Events.json';
exports['Events'] = Service(Events);

import GameLift from './stubs/json/GameLift.json';
exports['GameLift'] = Service(GameLift);

import IAM from './stubs/json/IAM.json';
exports['IAM'] = Service(IAM);

import IoT from './stubs/json/IoT.json';
exports['IoT'] = Service(IoT);

import KMS from './stubs/json/KMS.json';
exports['KMS'] = Service(KMS);

import Kinesis from './stubs/json/Kinesis.json';
exports['Kinesis'] = Service(Kinesis);

import KinesisFirehose from './stubs/json/KinesisFirehose.json';
exports['KinesisFirehose'] = Service(KinesisFirehose);

import Lambda from './stubs/json/Lambda.json';
exports['Lambda'] = Service(Lambda);

import Logs from './stubs/json/Logs.json';
exports['Logs'] = Service(Logs);

import OpsWorks from './stubs/json/OpsWorks.json';
exports['OpsWorks'] = Service(OpsWorks);

import RDS from './stubs/json/RDS.json';
exports['RDS'] = Service(RDS);

import Redshift from './stubs/json/Redshift.json';
exports['Redshift'] = Service(Redshift);

import Route53 from './stubs/json/Route53.json';
exports['Route53'] = Service(Route53);

import S3 from './stubs/json/S3.json';
exports['S3'] = Service(S3);

import SDB from './stubs/json/SDB.json';
exports['SDB'] = Service(SDB);

import SNS from './stubs/json/SNS.json';
exports['SNS'] = Service(SNS);

import SQS from './stubs/json/SQS.json';
exports['SQS'] = Service(SQS);

import SSM from './stubs/json/SSM.json';
exports['SSM'] = Service(SSM);

import StepFunctions from './stubs/json/StepFunctions.json';
exports['StepFunctions'] = Service(StepFunctions);

import WAF from './stubs/json/WAF.json';
exports['WAF'] = Service(WAF);

import WAFRegional from './stubs/json/WAFRegional.json';
exports['WAFRegional'] = Service(WAFRegional);

import WorkSpaces from './stubs/json/WorkSpaces.json';
exports['WorkSpaces'] = Service(WorkSpaces);
