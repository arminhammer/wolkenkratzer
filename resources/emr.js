'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

/** @module EMR */

/** @memberof module:EMR
*   @extends WKResource
* @property {Object} AdditionalInfo Required: No. Additional features that you want to select.Update requires: Replacement
* @property {AmazonElasticMapReduceClusterApplication} Applications Required: No. The software applications to deploy on the cluster, and the arguments that Amazon EMR
            passes to those applications.Update requires: Replacement
* @property {AmazonElasticMapReduceClusterBootstrapActionConfig} BootstrapActions Required: No. A list of bootstrap actions that Amazon EMR runs before starting applications on the
            cluster.Update requires: Replacement
* @property {AmazonElasticMapReduceClusterConfiguration} Configurations Required: No. The software configuration of the Amazon EMR cluster.Update requires: Replacement
* @property {AmazonElasticMapReduceClusterJobFlowInstancesConfig} Instances Required: Yes. Configures the EC2 instances that will run jobs in the Amazon EMR cluster.Update requires: Replacement
* @property {String} JobFlowRole Required: Yes. An AWS Identity and Access Management (IAM) role for an Amazon EMR cluster. All EC2 instances in the cluster
            assume this role, which instances use to access AWS services and resources to complete a
            job. For more information, see Configure IAM Roles for Amazon EMR in the Amazon Elastic MapReduce Management
              Guide.Update requires: Replacement
* @property {String} LogUri Required: No. An S3 bucket location to which Amazon EMR writes logs files from a job flow. If you don't
            specify a value, Amazon EMR doesn't write any log files.Update requires: Replacement
* @property {String} Name Required: Yes. A name for the Amazon EMR cluster.Update requires: Replacement
* @property {String} ReleaseLabel Required: No. The Amazon EMR software release label. A release is a set of software applications and
            components that you can install and configure on an Amazon EMR cluster. For more information,
            see About Amazon EMR Releases in the Amazon Elastic MapReduce Release
              Guide.Currently, AWS CloudFormation supports only Amazon EMR 4.0 and later software releases.Update requires: Replacement
* @property {String} ServiceRole Required: Yes. The IAM role that Amazon EMR assumes to access AWS resources on your behalf. For more
            information, see Configure IAM Roles for Amazon EMR in the Amazon Elastic MapReduce Management
              Guide.Update requires: Replacement
* @property {AWSCloudFormationResourceTags} Tags Required: No. An arbitrary set of tags (key–value pairs) to help you identify the Amazon EMR
            cluster.Update requires: No interruption.
* @property {Boolean} VisibleToAllUsers Required: No. Indicates whether the instances in the cluster are visible to all IAM users in the
            AWS account. If you specify true, all IAM users can view and (if they
            have permissions) manage the instances. If you specify false, only the
            IAM user that created the cluster can view and manage it. By default, AWS CloudFormation sets this
            property to false.Update requires: No interruption
*/
class Cluster extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EMR::Cluster'
    let properties = {
      AdditionalInfo: new ResourceAttribute('AdditionalInfo', Object, 'No', null),
      Applications: new ResourceAttributeArray('Applications', types.AmazonElasticMapReduceClusterApplication, 'No', null),
      BootstrapActions: new ResourceAttributeArray('BootstrapActions', types.AmazonElasticMapReduceClusterBootstrapActionConfig, 'No', null),
      Configurations: new ResourceAttributeArray('Configurations', types.AmazonElasticMapReduceClusterConfiguration, 'No', null),
      Instances: new ResourceAttribute('Instances', types.AmazonElasticMapReduceClusterJobFlowInstancesConfig, 'Yes', null),
      JobFlowRole: new ResourceAttribute('JobFlowRole', String, 'Yes', null),
      LogUri: new ResourceAttribute('LogUri', String, 'No', null),
      Name: new ResourceAttribute('Name', String, 'Yes', null),
      ReleaseLabel: new ResourceAttribute('ReleaseLabel', String, 'No', null),
      ServiceRole: new ResourceAttribute('ServiceRole', String, 'Yes', null),
      Tags: new tag.TagSet(),
      VisibleToAllUsers: new ResourceAttribute('VisibleToAllUsers', Boolean, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:EMR
*   @extends WKResource
* @property {String} BidPrice Required: No. The bid price in USD for each EC2 instance in the instance group when launching
            instances (nodes) as Spot Instances.Update requires: Replacement
* @property {AmazonElasticMapReduceClusterConfiguration} Configurations Required: No. A list of configurations to apply to this instance group. For more information see,
              Configuring Applications in the Amazon Elastic MapReduce Release
              Guide.Update requires: Replacement
* @property {AmazonElasticMapReduceEbsConfiguration} EbsConfiguration Required: No. Configures Amazon Elastic Block Store (Amazon EBS) storage volumes to attach to your instances.Update requires: Replacement
* @property {Number} InstanceCount Required: Yes. The number of instances to launch in the instance group.Update requires: No interruption
* @property {String} InstanceRole Required: Yes. The role of the servers in the Amazon EMR cluster, such as TASK. For more
            information, see Instance Groups in the Amazon Elastic MapReduce Management
            Guide.NoteCurrently, the only valid value is TASK. You configure the master and
              core instance groups as part of the AWS::EMR::Cluster resource.Update requires: Replacement
* @property {String} InstanceType Required: Yes. The EC2 instance type for all instances in the instance group. For more information,
            see Instance Configurations in the Amazon Elastic MapReduce Management
              Guide.Update requires: Replacement
* @property {String} JobFlowId Required: Yes. The ID of an Amazon EMR cluster that you want to associate this instance group
            with.Update requires: Replacement
* @property {String} Market Required: No. The type of marketplace from which your instances are provisioned into this group,
            either ON_DEMAND or SPOT. For more information, see Amazon EC2 Purchasing Options.Update requires: Replacement
* @property {String} Name Required: No. A name for the instance group.Update requires: Replacement
*/
class InstanceGroupConfig extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EMR::InstanceGroupConfig'
    let properties = {
      BidPrice: new ResourceAttribute('BidPrice', String, 'No', null),
      Configurations: new ResourceAttributeArray('Configurations', types.AmazonElasticMapReduceClusterConfiguration, 'No', null),
      EbsConfiguration: new ResourceAttribute('EbsConfiguration', types.AmazonElasticMapReduceEbsConfiguration, 'No', null),
      InstanceCount: new ResourceAttribute('InstanceCount', Number, 'Yes', null),
      InstanceRole: new ResourceAttribute('InstanceRole', String, 'Yes', null),
      InstanceType: new ResourceAttribute('InstanceType', String, 'Yes', null),
      JobFlowId: new ResourceAttribute('JobFlowId', String, 'Yes', null),
      Market: new ResourceAttribute('Market', String, 'No', null),
      Name: new ResourceAttribute('Name', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

/** @memberof module:EMR
*   @extends WKResource
* @property {String} ActionOnFailure Required: Yes. The action to take if the job flow step fails. Currently, AWS CloudFormation supports CONTINUE and CANCEL_AND_WAIT. For more information, see Managing Cluster Termination in the Amazon Elastic MapReduce Management Guide.Update requires: Replacement
* @property {AmazonElasticMapReduceStepHadoopJarStepConfig} HadoopJarStep Required: Yes. The JAR file that includes the main function that Amazon EMR executes.Update requires: Replacement
* @property {String} JobFlowId Required: Yes. The ID of a cluster in which you want to run this job flow step.Update requires: Replacement
* @property {String} Name Required: Yes. A name for the job flow step.Update requires: Replacement
*/
class Step extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::EMR::Step'
    let properties = {
      ActionOnFailure: new ResourceAttribute('ActionOnFailure', String, 'Yes', null),
      HadoopJarStep: new ResourceAttribute('HadoopJarStep', types.AmazonElasticMapReduceStepHadoopJarStepConfig, 'Yes', null),
      JobFlowId: new ResourceAttribute('JobFlowId', String, 'Yes', null),
      Name: new ResourceAttribute('Name', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {  Cluster: Cluster,
  InstanceGroupConfig: InstanceGroupConfig,
  Step: Step
}
