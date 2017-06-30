// @flow

export { Template } from './template';
export { Parameter } from './elements/parameter';
export { Description } from './elements/description';
export { Output } from './elements/output';
export { Mapping } from './elements/mapping';
export { Resource, CustomResource } from './elements/resource';
export { Condition } from './elements/condition';
export { Ref, FnGetAtt, FnEquals, FnJoin } from './intrinsic';
import { Service, IService } from './service';
export { CreationPolicy } from './attributes/creationpolicy';
export { ResourceMetadata } from './attributes/metadata';
export { S3BucketTransform } from './transform/s3';
export {
  getInstanceTypeList,
  getInstanceTypeNameList
} from './macros/ec2meta.macro';
export { Pseudo } from './pseudo';

//import * as fs from 'fs';
import * as path from 'path';

//const files = fs.readdirSync(path.resolve(__dirname, './stubs/json'));
const files = [
  'ApiGateway.json',
  'CloudWatch.json',
  'DataPipeline.json',
  'EMR.json',
  'GameLift.json',
  'Logs.json',
  'SNS.json',
  'ApplicationAutoScaling.json',
  'CodeBuild.json',
  'DirectoryService.json',
  'ElastiCache.json',
  'IAM.json',
  'OpsWorks.json',
  'SQS.json',
  'AutoScaling.json',
  'CodeCommit.json',
  'DynamoDB.json',
  'ElasticBeanstalk.json',
  'IoT.json',
  'RDS.json',
  'SSM.json',
  'CertificateManager.json',
  'CodeDeploy.json',
  'EC2.json',
  'ElasticLoadBalancing.json',
  'KMS.json',
  'Redshift.json',
  'StepFunctions.json',
  'CloudFormation.json',
  'CodePipeline.json',
  'ECR.json',
  'ElasticLoadBalancingV2.json',
  'Kinesis.json',
  'Route53.json',
  'WAF.json',
  'CloudFront.json',
  'Cognito.json',
  'ECS.json',
  'Elasticsearch.json',
  'KinesisFirehose.json',
  'S3.json',
  'WAFRegional.json',
  'CloudTrail.json',
  'Config.json',
  'EFS.json',
  'Events.json',
  'Lambda.json',
  'SDB.json',
  'WorkSpaces.json'
];
files.map(file => {
  if (file !== 'json') {
    const service = file.replace('.json', '');
    exports[service] = Service(service);
  }
});
