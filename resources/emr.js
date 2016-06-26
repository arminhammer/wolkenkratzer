'use strict'

const wolkenkratzer = require('./../index')
const propertyTypes = require('./propertytypes/propertytypes')

class Cluster extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EMR::Cluster'
    let properties = {
      AdditionalInfo: new wolkenkratzer.ResourceProperty(Object, 'No', null),
      Applications: new wolkenkratzer.ResourceArray(propertyTypes.AmazonElasticMapReduceClusterApplication, 'No', null),
      BootstrapActions: new wolkenkratzer.ResourceArray(propertyTypes.AmazonElasticMapReduceClusterBootstrapActionConfig, 'No', null),
      Configurations: new wolkenkratzer.ResourceArray(propertyTypes.AmazonElasticMapReduceClusterConfiguration, 'No', null),
      Instances: new wolkenkratzer.ResourceProperty(propertyTypes.AmazonElasticMapReduceClusterJobFlowInstancesConfig, 'Yes', null),
      JobFlowRole: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      LogUri: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Name: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      ReleaseLabel: new wolkenkratzer.ResourceProperty(String, 'No', null),
      ServiceRole: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Tags: new wolkenkratzer.TagSet(),
      VisibleToAllUsers: new wolkenkratzer.ResourceProperty(Boolean, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class InstanceGroupConfig extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EMR::InstanceGroupConfig'
    let properties = {
      BidPrice: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Configurations: new wolkenkratzer.ResourceArray(propertyTypes.AmazonElasticMapReduceClusterConfiguration, 'No', null),
      EbsConfiguration: new wolkenkratzer.ResourceProperty(propertyTypes.AmazonElasticMapReduceEbsConfiguration, 'No', null),
      InstanceCount: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      InstanceRole: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      InstanceType: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      JobFlowId: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Market: new wolkenkratzer.ResourceProperty(String, 'No', null),
      Name: new wolkenkratzer.ResourceProperty(String, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Step extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::EMR::Step'
    let properties = {
      ActionOnFailure: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      HadoopJarStep: new wolkenkratzer.ResourceProperty(propertyTypes.AmazonElasticMapReduceStepHadoopJarStepConfig, 'Yes', null),
      JobFlowId: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Name: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  Cluster: Cluster,
  InstanceGroupConfig: InstanceGroupConfig,
  Step: Step
}