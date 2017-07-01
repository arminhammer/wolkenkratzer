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

/*const files = fs.readdirSync(path.resolve(__dirname, './stubs/json'));

files.map(file => {
  if (file !== 'json' && file !== 'S3.json') {
    const service = file.replace('.json', '');
    exports[service] = Service(service);
  }
});*/

exports['ApiGateway'] = Service(require('./stubs/json/ApiGateway.json'));
exports['ApplicationAutoScaling'] = Service(
  require('./stubs/json/ApplicationAutoScaling.json')
);
exports['AutoScaling'] = Service(require('./stubs/json/AutoScaling.json'));
exports['CertificateManager'] = Service(
  require('./stubs/json/CertificateManager.json')
);
exports['CloudFormation'] = Service(
  require('./stubs/json/CloudFormation.json')
);
exports['CloudFront'] = Service(require('./stubs/json/CloudFront.json'));
exports['CloudTrail'] = Service(require('./stubs/json/CloudTrail.json'));
exports['CloudWatch'] = Service(require('./stubs/json/CloudWatch.json'));
exports['CodeBuild'] = Service(require('./stubs/json/CodeBuild.json'));
exports['CodeCommit'] = Service(require('./stubs/json/CodeCommit.json'));
exports['CodeDeploy'] = Service(require('./stubs/json/CodeDeploy.json'));
exports['CodePipeline'] = Service(require('./stubs/json/CodePipeline.json'));
exports['Cognito'] = Service(require('./stubs/json/Cognito.json'));
exports['Config'] = Service(require('./stubs/json/Config.json'));
exports['DataPipeline'] = Service(require('./stubs/json/DataPipeline.json'));
exports['DirectoryService'] = Service(
  require('./stubs/json/DirectoryService.json')
);
exports['DynamoDB'] = Service(require('./stubs/json/DynamoDB.json'));
exports['EC2'] = Service(require('./stubs/json/EC2.json'));
exports['ECR'] = Service(require('./stubs/json/ECR.json'));
exports['ECS'] = Service(require('./stubs/json/ECS.json'));
exports['EFS'] = Service(require('./stubs/json/EFS.json'));
exports['EMR'] = Service(require('./stubs/json/EMR.json'));
exports['ElastiCache'] = Service(require('./stubs/json/ElastiCache.json'));
exports['ElasticBeanstalk'] = Service(
  require('./stubs/json/ElasticBeanstalk.json')
);
exports['ElasticLoadBalancing'] = Service(
  require('./stubs/json/ElasticLoadBalancing.json')
);
exports['ElasticLoadBalancingV2'] = Service(
  require('./stubs/json/ElasticLoadBalancingV2.json')
);
exports['Elasticsearch'] = Service(require('./stubs/json/Elasticsearch.json'));
exports['Events'] = Service(require('./stubs/json/Events.json'));
exports['GameLift'] = Service(require('./stubs/json/GameLift.json'));
exports['IAM'] = Service(require('./stubs/json/IAM.json'));
exports['IoT'] = Service(require('./stubs/json/IoT.json'));
exports['KMS'] = Service(require('./stubs/json/KMS.json'));
exports['Kinesis'] = Service(require('./stubs/json/Kinesis.json'));
exports['KinesisFirehose'] = Service(
  require('./stubs/json/KinesisFirehose.json')
);
exports['Lambda'] = Service(require('./stubs/json/Lambda.json'));
exports['Logs'] = Service(require('./stubs/json/Logs.json'));
exports['OpsWorks'] = Service(require('./stubs/json/OpsWorks.json'));
exports['RDS'] = Service(require('./stubs/json/RDS.json'));
exports['Redshift'] = Service(require('./stubs/json/Redshift.json'));
exports['Route53'] = Service(require('./stubs/json/Route53.json'));
exports['S3'] = Service(require('./stubs/json/S3.json'));
exports['SDB'] = Service(require('./stubs/json/SDB.json'));
exports['SNS'] = Service(require('./stubs/json/SNS.json'));
exports['SQS'] = Service(require('./stubs/json/SQS.json'));
exports['SSM'] = Service(require('./stubs/json/SSM.json'));
exports['StepFunctions'] = Service(require('./stubs/json/StepFunctions.json'));
exports['WAF'] = Service(require('./stubs/json/WAF.json'));
exports['WAFRegional'] = Service(require('./stubs/json/WAFRegional.json'));
exports['WorkSpaces'] = Service(require('./stubs/json/WorkSpaces.json'));
