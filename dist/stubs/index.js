/**
 * Created by arming on 12/6/16.
 */

'use strict'

const Promise = require('bluebird')
const x = require('x-ray')().delay(5000)
const fs = Promise.promisifyAll(require('fs-extra'))
const url = require('url')
const path = require("path")
const rp = require('request-promise')

const resourcesUrl = 'http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html'
const propertiesUrl = 'http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-product-property-reference.html'

const htmlDir = 'html/'
const jsonDir = 'json/'
const jsonPropertiesFile = jsonDir + 'properties/properties.json'
const jsonResourcesDir = jsonDir + 'resources/'
const htmlResourcesDir = htmlDir + 'resources/'
const htmlPropertiesDir = htmlDir + 'properties/'

const newlinePattern = /\r?\n|\r/g

const sanitizeReplacementsResources = {
  'NumberWeightexpectsintegervalues.': 'Number',
  'AJSONobjectconsistingofstringkey-valuepairs,asshowninthefollowingexample:': 'Map',
  'AJSONobjectconsistingofastringkey-valuepair,suchas:': 'Map',
  'Stringtolist-of-stringsmap': 'Map',
  'AmazonSNStopicsARNs': 'String',
  'strings': 'String',
  'Mappingofkey-valuepairs': 'Map',
  'JSONobject': 'Object',
  'SNSSubscriptions': 'AmazonSNSSubscriptionPropertyType',
  'Integer': 'Number',
  'Double': 'Number',
  'AJSONpolicydocument': 'Object',
  'AutoScalingEBSBlockDevice': 'AWSCloudFormationAutoScalingEBSBlockDevicePropertyType',
  'CacheBehavior': 'CloudFrontDistributionConfigCacheBehavior',
  'DefaultCacheBehaviortype': 'CloudFrontDefaultCacheBehavior',
  'Loggingtype': 'CloudFrontLogging',
  'Origins': 'CloudFrontDistributionConfigOrigin',
  'ForwardedValuestype': 'CloudFrontForwardedValues',
  'CustomOrigintype': 'CloudFrontDistributionConfigOriginCustomOrigin',
  'S3Origintype': 'CloudFrontDistributionConfigOriginS3Origin',
  'anemptymap:{}': 'Map',
  'PrivateIpAddressSpecification': 'EC2NetworkInterfacePrivateIPSpecification',
  'Key-valuepairs,withthenameofthelabelasthekeyandthelabelvalueasthevalue': 'Map',
  'Key-valuepairs,withtheoptionnameasthekeyandtheoptionvalueasthevalue': 'Map',
  'String-to-stringmap': 'Map',
  'Stringtostringmap': 'Map',
  'Timestamp': 'Date',
  'StringValidvaluesare"basic"or"S3"': 'String',
  'String(1–1600chars)': 'String',
  'key-valuepairs': 'Map',
  'referencestoAWS::IAM::RolesCurrently,amaximumofonerolecanbeassignedtoaninstanceprofile': 'String',
  'EC2SecurityGroupRule': 'EC2SecurityGroupRulePropertyType',
  'WebsiteConfigurationType': 'AmazonS3WebsiteConfigurationProperty',
  'AliasTarget': 'Route53AliasTargetProperty',
  'NumberWeightexpectsintegervalues': 'Number',
  'DistributionConfigtype': 'CloudFrontDistributionConfig',
  'users': 'String',
  'AppCookieStickinessPolicyobjects': 'ElasticLoadBalancingAppCookieStickinessPolicyType',
  'LBCookieStickinessPolicyobjects': 'ElasticLoadBalancingLBCookieStickinessPolicyType',
  'ElasticLoadBalancingListenerPropertyTypeobjects': 'ElasticLoadBalancingListenerPropertyType',
  'ElasticLoadBalancingpolicyobjects': 'ElasticLoadBalancingPolicyType',
  'numbers': 'Number',
  'SNSSubscriptions': 'AmazonSNSSubscriptionPropertyType',
  'AmazonSNStopicsARNs': 'String',
  'RDSSecurityGroupRules': 'AmazonRDSSecurityGroupRule',
  'OptionSettings': 'ElasticBeanstalkOptionSettingsPropertyType',
  'SourceBundle': 'ElasticBeanstalkSourceBundlePropertyType',
  'Stringlist': 'String',
  'routetableIDs': 'String',
  'RefID': 'String',
  'TopicRulePayloadobject': 'AWSIoTTopicRulePayload',
  'EC2MountPoints': 'EC2MountPointPropertyType',
  'NumberBgpAsnisalwaysanintegervalue': 'Number',
  'MetricDimension': 'CloudWatchMetricDimensionPropertyType',
  'EC2securitygroups': 'String',
  'BlockDeviceMappings': 'AWSCloudFormationAutoScalingBlockDeviceMappingPropertyType',
  'securitygroupsassignedtoyourloadbalancerwithinyourvirtualprivatecloud(VPC)': 'String'
}

const sanitizeReplacementsProperties = {
  'JSONname-valuepairs': 'Map',
  'Integer': 'Number',
  'Mappingofkey-valuepairs': 'Map',
  'strings': 'String',
  'JSONobject': 'Object',
  'AutoScalingEBSBlockDevice': 'AWSCloudFormationAutoScalingEBSBlockDevicePropertyType',
  'CacheBehavior': 'CloudFrontDistributionConfigCacheBehavior',
  'DefaultCacheBehaviortype': 'CloudFrontDefaultCacheBehavior',
  'Loggingtype': 'CloudFrontLogging',
  'Origins': 'CloudFrontDistributionConfigOrigin',
  'ForwardedValuestype': 'CloudFrontForwardedValues',
  'CustomOrigintype': 'CloudFrontDistributionConfigOriginCustomOrigin',
  'S3Origintype': 'CloudFrontDistributionConfigOriginS3Origin',
  'anemptymap:{}': 'Map',
  'PrivateIpAddressSpecification': 'EC2NetworkInterfacePrivateIPSpecification',
  'Key-valuepairs,withthenameofthelabelasthekeyandthelabelvalueasthevalue': 'Map',
  'Key-valuepairs,withtheoptionnameasthekeyandtheoptionvalueasthevalue': 'Map',
  'String-to-stringmap': 'Map',
  'Stringtostringmap': 'Map',
  'OriginCustomHeadertype': 'CloudFrontDistributionConfigOriginOriginCustomHeader',
  'CloudWatchAlarmactionobject': 'AWSIoTCloudwatchAlarmAction',
  'CloudWatchMetricactionobject': 'AWSIoTCloudwatchMetricAction',
  'DynamoDBactionobject': 'AWSIoTDynamoDBAction',
  'Elasticsearchactionobject': 'AWSIoTElasticsearchAction',
  'Firehoseactionobject': 'AWSIoTFirehoseAction',
  'Kinesisactionobject': 'AWSIoTKinesisAction',
  'Lambdaactionobject': 'AWSIoTLambdaAction',
  'Republishactionobject': 'AWSIoTRepublishAction',
  'S3actionobject': 'AWSIoTS3Action',
  'Snsactionobject': 'AWSIoTSnsAction',
  'Sqsactionobject': 'AWSIoTSqsAction',
  'ArrayofActionobjects': 'AWSIoTActions'
}

const sanitizeAsArrays = {
  AmazonS3NotificationConfiguration: ['LambdaConfigurations', 'QueueConfigurations', 'TopicConfigurations']
}

const result = {
  Properties: {},
  Resources: {}
}

function getAndWriteFile(link, prefix) {
  let filename = path.basename(url.parse(link).pathname)
  console.log(filename)
  console.log(link)
  return rp.get(link)
  .then((body) => {
    fs.outputFileAsync(prefix + filename, body)
    .then(() => {
      console.log('Finished writing ' + filename)
    })
  })
}

function downloadPages() {
  return Promise
  .promisify(x(resourcesUrl, ['.highlights li a@href']))()
  .mapSeries((link) => {
    return getAndWriteFile(link, htmlResourcesDir)
  })
  .then(() => {
    return Promise.promisify(x(propertiesUrl, ['.highlights li a@href']))()
  })
  .mapSeries((link) => {
    return getAndWriteFile(link, htmlPropertiesDir)
  })
  .then(() => {
    console.log('Finished')
  })
  .catch((err) => {
    console.error('Error:')
    console.error(err)
  })
}

function sanitizeTypes (output, pageType) {
  output.Type = output.Type.replace(/\./,'')
  if (output.Type.startsWith('Listof') || output.Type.startsWith('listof') || output.Type.startsWith('Alistof')) {
    output.Type = output.Type.replace(/^Listof/, '').replace(/^listof/, '').replace(/^Alistof/, '').replace(/\./g, '')
    output.Array = true
  }
  let originalType = output.Type
  /*if (sanitizeAsArrays[originalType]) {
    output.Array = true
  }*/
  if (pageType == 'Resources') {
    if (sanitizeReplacementsResources[originalType]) {
      output.Type = sanitizeReplacementsResources[originalType]
    }
  } else if (pageType == 'Properties') {
    if (sanitizeReplacementsProperties[originalType]) {
      output.Type = sanitizeReplacementsProperties[originalType]
    }
  }
}

function overrideArrays(block) {
  if (sanitizeAsArrays[block.Name]) {
    // let blah = sanitizeAsArrays[block.Name]
    sanitizeAsArrays[block.Name].forEach((prop) => {
      if(block.Properties[prop]) {
        block.Properties[prop].Array = true
      }
    })
  }
}

function scrapeHtmlPage(body, pageType) {
  return Promise.promisify(x(body, {
    name: '.topictitle',
    titles: ['dt'],
    attributes: x('dd', [['p']])
  }))()
  .then((obj) => {
    let block = {
      Name: obj.name.replace(/\s/g, ''),
      Properties: {}
    }
    for (let i = 0; i < obj.titles.length; i++) {
      let output = {
        Description: '',
        Array: false,
        Type: 'String'
      }
      obj.attributes[i].forEach((attr) => {
        attr = attr.trim()
        if (attr.startsWith('Type: ')) {
          output.Type = attr.replace(/Type: /g, '').replace(/\s/g, '')
          sanitizeTypes(output, pageType)
        } else if (attr.startsWith('Required: ')) {
          output.Required = attr.replace(/Required: /g, '').replace(newlinePattern,'')
        } else if (attr.startsWith('Update requires: ')) {
          output.UpdateRequires = attr.replace(/Update requires: /g, '')
        } else {
          output.Description += attr.replace(newlinePattern,'')
        }
      })
      // Clean up title in case it has parenthesis
      if(obj.titles[i].includes('(')) {
        obj.titles[i] = obj.titles[i].replace(/\(.+\)/g,'').trim()
      }
      if((output.Type && output.Required) || (obj.titles[i] === 'PolicyName')) {
        block.Properties[obj.titles[i]] = output
      }
    }
    overrideArrays(block)
    let split = block.Name.split('::')
    let group = split[1]
    let name = split[2]
    if(pageType === 'Properties') {
      group = block.Name
    }
    if(!result[pageType][group]) {
      result[pageType][group] = {}
    }
    if(pageType === 'Properties') {
      result[pageType][group] = block
    } else {
      result[pageType][group][name] = block
    }
  })
  .catch((err) => {
    console.error(err)
  })
}

function generateJson() {
  return fs.readdirAsync(htmlResourcesDir)
  .map((fileName) => {
    return fs.readFileAsync(htmlResourcesDir + fileName, 'utf8')
    .then((body) => {
      return scrapeHtmlPage(body, 'Resources')
    })
  })
  .then(() => {
    //console.log(JSON.stringify(result, null, 2))
    return fs.readdirAsync(htmlPropertiesDir)
  })
  .map((fileName) => {
    return fs.readFileAsync(htmlPropertiesDir + fileName, 'utf8')
    .then((body) => {
      return scrapeHtmlPage(body, 'Properties')
    })
  })
  .then(() => {
    // console.log(JSON.stringify(result, null, 2))
    return fs.writeJSONAsync(jsonPropertiesFile, result.Properties)
  })
  .then(() => {
    for (let group in result.Resources) {
      fs.writeJSONAsync(jsonResourcesDir + group + '.json', result.Resources[group])
    }
  })
  .then(() => {
    //console.log(JSON.stringify(result, null, 2))
    console.log('Finished.')
  })
}

let selection = process.argv[2]
if(selection === 'download') {
  downloadPages()
} else if(selection === 'generate-json') {
  generateJson()
} else {
  console.log('Invalid command.')
}
