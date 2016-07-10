'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

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

module.exports = {
  Cluster: Cluster,
  InstanceGroupConfig: InstanceGroupConfig,
  Step: Step
}
