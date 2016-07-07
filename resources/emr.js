'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class Cluster extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EMR::Cluster'
    let properties = {
      AdditionalInfo: new resource.ResourceProperty('AdditionalInfo', Object, 'No', null),
      Applications: new resource.ResourceArray('Applications', types.AmazonElasticMapReduceClusterApplication, 'No', null),
      BootstrapActions: new resource.ResourceArray('BootstrapActions', types.AmazonElasticMapReduceClusterBootstrapActionConfig, 'No', null),
      Configurations: new resource.ResourceArray('Configurations', types.AmazonElasticMapReduceClusterConfiguration, 'No', null),
      Instances: new resource.ResourceProperty('Instances', types.AmazonElasticMapReduceClusterJobFlowInstancesConfig, 'Yes', null),
      JobFlowRole: new resource.ResourceProperty('JobFlowRole', String, 'Yes', null),
      LogUri: new resource.ResourceProperty('LogUri', String, 'No', null),
      Name: new resource.ResourceProperty('Name', String, 'Yes', null),
      ReleaseLabel: new resource.ResourceProperty('ReleaseLabel', String, 'No', null),
      ServiceRole: new resource.ResourceProperty('ServiceRole', String, 'Yes', null),
      Tags: new tag.TagSet(),
      VisibleToAllUsers: new resource.ResourceProperty('VisibleToAllUsers', Boolean, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class InstanceGroupConfig extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EMR::InstanceGroupConfig'
    let properties = {
      BidPrice: new resource.ResourceProperty('BidPrice', String, 'No', null),
      Configurations: new resource.ResourceArray('Configurations', types.AmazonElasticMapReduceClusterConfiguration, 'No', null),
      EbsConfiguration: new resource.ResourceProperty('EbsConfiguration', types.AmazonElasticMapReduceEbsConfiguration, 'No', null),
      InstanceCount: new resource.ResourceProperty('InstanceCount', Number, 'Yes', null),
      InstanceRole: new resource.ResourceProperty('InstanceRole', String, 'Yes', null),
      InstanceType: new resource.ResourceProperty('InstanceType', String, 'Yes', null),
      JobFlowId: new resource.ResourceProperty('JobFlowId', String, 'Yes', null),
      Market: new resource.ResourceProperty('Market', String, 'No', null),
      Name: new resource.ResourceProperty('Name', String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Step extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EMR::Step'
    let properties = {
      ActionOnFailure: new resource.ResourceProperty('ActionOnFailure', String, 'Yes', null),
      HadoopJarStep: new resource.ResourceProperty('HadoopJarStep', types.AmazonElasticMapReduceStepHadoopJarStepConfig, 'Yes', null),
      JobFlowId: new resource.ResourceProperty('JobFlowId', String, 'Yes', null),
      Name: new resource.ResourceProperty('Name', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Cluster: Cluster,
  InstanceGroupConfig: InstanceGroupConfig,
  Step: Step
}