'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class Cluster extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EMR::Cluster'
    let properties = {
      AdditionalInfo: new resource.ResourceProperty(Object, 'No', null),
      Applications: new resource.ResourceArray(types.AmazonElasticMapReduceClusterApplication, 'No', null),
      BootstrapActions: new resource.ResourceArray(types.AmazonElasticMapReduceClusterBootstrapActionConfig, 'No', null),
      Configurations: new resource.ResourceArray(types.AmazonElasticMapReduceClusterConfiguration, 'No', null),
      Instances: new resource.ResourceProperty(types.AmazonElasticMapReduceClusterJobFlowInstancesConfig, 'Yes', null),
      JobFlowRole: new resource.ResourceProperty(String, 'Yes', null),
      LogUri: new resource.ResourceProperty(String, 'No', null),
      Name: new resource.ResourceProperty(String, 'Yes', null),
      ReleaseLabel: new resource.ResourceProperty(String, 'No', null),
      ServiceRole: new resource.ResourceProperty(String, 'Yes', null),
      Tags: new tag.TagSet(),
      VisibleToAllUsers: new resource.ResourceProperty(Boolean, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class InstanceGroupConfig extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EMR::InstanceGroupConfig'
    let properties = {
      BidPrice: new resource.ResourceProperty(String, 'No', null),
      Configurations: new resource.ResourceArray(types.AmazonElasticMapReduceClusterConfiguration, 'No', null),
      EbsConfiguration: new resource.ResourceProperty(types.AmazonElasticMapReduceEbsConfiguration, 'No', null),
      InstanceCount: new resource.ResourceProperty(Number, 'Yes', null),
      InstanceRole: new resource.ResourceProperty(String, 'Yes', null),
      InstanceType: new resource.ResourceProperty(String, 'Yes', null),
      JobFlowId: new resource.ResourceProperty(String, 'Yes', null),
      Market: new resource.ResourceProperty(String, 'No', null),
      Name: new resource.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Step extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EMR::Step'
    let properties = {
      ActionOnFailure: new resource.ResourceProperty(String, 'Yes', null),
      HadoopJarStep: new resource.ResourceProperty(types.AmazonElasticMapReduceStepHadoopJarStepConfig, 'Yes', null),
      JobFlowId: new resource.ResourceProperty(String, 'Yes', null),
      Name: new resource.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Cluster: Cluster,
  InstanceGroupConfig: InstanceGroupConfig,
  Step: Step
}