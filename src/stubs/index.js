'use strict';

const Promise = require('bluebird');
const x = require('x-ray')().delay(5000);
const fs = Promise.promisifyAll(require('fs-extra'));
const url = require('url');
const path = require('path');
const rp = require('request-promise');
const cheerio = require('cheerio');

const resourcesUrl =
  'http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html';
const propertiesUrl =
  'http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-product-property-reference.html';

const htmlDir = 'html/';
const jsonDir = 'json/';
const jsonResourcesDir = jsonDir;
const htmlResourcesDir = htmlDir + 'resources/';
const htmlPropertiesDir = htmlDir + 'properties/';

const newlinePattern = /\r?\n|\r/g;

const sanitizeReplacementsResources = {
  'NumberWeightexpectsintegervalues.': 'Number',
  'AJSONobjectconsistingofstringkey-valuepairs,asshowninthefollowingexample:': 'Map',
  'AJSONobjectconsistingofastringkey-valuepair,suchas:': 'Map',
  'Stringtolist-of-stringsmap': 'Map',
  AmazonSNStopicsARNs: 'String',
  strings: 'String',
  'Mappingofkey-valuepairs': 'Map',
  JSONobject: 'Object',
  SNSSubscriptions: 'AmazonSNSSubscriptionPropertyType',
  Integer: 'Number',
  Double: 'Number',
  AJSONpolicydocument: 'Object',
  AutoScalingEBSBlockDevice: 'AWSCloudFormationAutoScalingEBSBlockDevicePropertyType',
  CacheBehavior: 'CloudFrontDistributionConfigCacheBehavior',
  DefaultCacheBehaviortype: 'CloudFrontDefaultCacheBehavior',
  Loggingtype: 'CloudFrontLogging',
  Origins: 'CloudFrontDistributionConfigOrigin',
  ForwardedValuestype: 'CloudFrontForwardedValues',
  CustomOrigintype: 'CloudFrontDistributionConfigOriginCustomOrigin',
  S3Origintype: 'CloudFrontDistributionConfigOriginS3Origin',
  'anemptymap:{}': 'Map',
  PrivateIpAddressSpecification: 'EC2NetworkInterfacePrivateIPSpecification',
  'Key-valuepairs,withthenameofthelabelasthekeyandthelabelvalueasthevalue': 'Map',
  'Key-valuepairs,withtheoptionnameasthekeyandtheoptionvalueasthevalue': 'Map',
  'String-to-stringmap': 'Map',
  Stringtostringmap: 'Map',
  Timestamp: 'Date',
  'StringValidvaluesare"basic"or"S3"': 'String',
  'String(1–1600chars)': 'String',
  'key-valuepairs': 'Map',
  'referencestoAWS::IAM::RolesCurrently,amaximumofonerolecanbeassignedtoaninstanceprofile': 'String',
  EC2SecurityGroupRule: 'EC2SecurityGroupRulePropertyType',
  WebsiteConfigurationType: 'AmazonS3WebsiteConfigurationProperty',
  AliasTarget: 'Route53AliasTargetProperty',
  NumberWeightexpectsintegervalues: 'Number',
  DistributionConfigtype: 'CloudFrontDistributionConfig',
  users: 'String',
  AppCookieStickinessPolicyobjects: 'ElasticLoadBalancingAppCookieStickinessPolicyType',
  LBCookieStickinessPolicyobjects: 'ElasticLoadBalancingLBCookieStickinessPolicyType',
  ElasticLoadBalancingListenerPropertyTypeobjects: 'ElasticLoadBalancingListenerPropertyType',
  ElasticLoadBalancingpolicyobjects: 'ElasticLoadBalancingPolicyType',
  numbers: 'Number',
  SNSSubscriptions: 'AmazonSNSSubscriptionPropertyType',
  AmazonSNStopicsARNs: 'String',
  RDSSecurityGroupRules: 'AmazonRDSSecurityGroupRule',
  OptionSettings: 'ElasticBeanstalkOptionSettingsPropertyType',
  SourceBundle: 'ElasticBeanstalkSourceBundlePropertyType',
  Stringlist: 'String',
  routetableIDs: 'String',
  RefID: 'String',
  TopicRulePayloadobject: 'AWSIoTTopicRulePayload',
  EC2MountPoints: 'EC2MountPointPropertyType',
  NumberBgpAsnisalwaysanintegervalue: 'Number',
  MetricDimension: 'CloudWatchMetricDimensionPropertyType',
  EC2securitygroups: 'String',
  BlockDeviceMappings: 'AWSCloudFormationAutoScalingBlockDeviceMappingPropertyType',
  'securitygroupsassignedtoyourloadbalancerwithinyourvirtualprivatecloud(VPC)': 'String'
};

const sanitizeReplacementsProperties = {
  'JSONname-valuepairs': 'Map',
  Integer: 'Number',
  'Mappingofkey-valuepairs': 'Map',
  strings: 'String',
  JSONobject: 'Object',
  AutoScalingEBSBlockDevice: 'AWSCloudFormationAutoScalingEBSBlockDevicePropertyType',
  CacheBehavior: 'CloudFrontDistributionConfigCacheBehavior',
  DefaultCacheBehaviortype: 'CloudFrontDefaultCacheBehavior',
  Loggingtype: 'CloudFrontLogging',
  Origins: 'CloudFrontDistributionConfigOrigin',
  ForwardedValuestype: 'CloudFrontForwardedValues',
  CustomOrigintype: 'CloudFrontDistributionConfigOriginCustomOrigin',
  S3Origintype: 'CloudFrontDistributionConfigOriginS3Origin',
  'anemptymap:{}': 'Map',
  PrivateIpAddressSpecification: 'EC2NetworkInterfacePrivateIPSpecification',
  'Key-valuepairs,withthenameofthelabelasthekeyandthelabelvalueasthevalue': 'Map',
  'Key-valuepairs,withtheoptionnameasthekeyandtheoptionvalueasthevalue': 'Map',
  'String-to-stringmap': 'Map',
  Stringtostringmap: 'Map',
  OriginCustomHeadertype: 'CloudFrontDistributionConfigOriginOriginCustomHeader',
  CloudWatchAlarmactionobject: 'AWSIoTCloudwatchAlarmAction',
  CloudWatchMetricactionobject: 'AWSIoTCloudwatchMetricAction',
  DynamoDBactionobject: 'AWSIoTDynamoDBAction',
  Elasticsearchactionobject: 'AWSIoTElasticsearchAction',
  Firehoseactionobject: 'AWSIoTFirehoseAction',
  Kinesisactionobject: 'AWSIoTKinesisAction',
  Lambdaactionobject: 'AWSIoTLambdaAction',
  Republishactionobject: 'AWSIoTRepublishAction',
  S3actionobject: 'AWSIoTS3Action',
  Snsactionobject: 'AWSIoTSnsAction',
  Sqsactionobject: 'AWSIoTSqsAction',
  ArrayofActionobjects: 'AWSIoTActions'
};

const sanitizeAsArrays = {
  AmazonS3NotificationConfiguration: [
    'LambdaConfigurations',
    'QueueConfigurations',
    'TopicConfigurations'
  ]
};

const result = {
  Properties: {},
  Resources: {}
};

function getAndWriteFile(link, prefix) {
  let filename = path.basename(url.parse(link).pathname);
  //console.log(filename);
  //console.log(link);
  return rp.get(link).then(body => {
    fs.outputFileAsync(prefix + filename, body).then(() => {
      console.log('Finished writing ' + filename);
    });
  });
}

function downloadPages() {
  return Promise.promisify(x(resourcesUrl, ['.highlights li a@href']))()
    .mapSeries(link => {
      return getAndWriteFile(link, htmlResourcesDir);
    })
    .then(() => {
      return Promise.promisify(x(propertiesUrl, ['.highlights li a@href']))();
    })
    .mapSeries(link => {
      return getAndWriteFile(link, htmlPropertiesDir);
    })
    .then(() => {
      console.log('Finished');
    })
    .catch(err => {
      console.error('Error:');
      console.error(err);
    });
}

function sanitizeTypes(output, pageType) {
  output.Type = output.Type.replace(/\./, '');
  if (
    output.Type.startsWith('Listof') ||
    output.Type.startsWith('listof') ||
    output.Type.startsWith('Alistof')
  ) {
    output.Type = output.Type
      .replace(/^Listof/, '')
      .replace(/^listof/, '')
      .replace(/^Alistof/, '')
      .replace(/\./g, '');
    output.Array = true;
  }

  let originalType = output.Type;
  if (pageType == 'Resources') {
    if (sanitizeReplacementsResources[originalType]) {
      output.Type = sanitizeReplacementsResources[originalType];
    } else if (
      originalType !== 'String' &&
      originalType !== 'Boolean' &&
      originalType !== 'Number'
    ) {
      //console.log(originalType);
    }
  } else if (pageType == 'Properties') {
    if (sanitizeReplacementsProperties[originalType]) {
      output.Type = sanitizeReplacementsProperties[originalType];
    } else if (
      originalType !== 'String' &&
      originalType !== 'Boolean' &&
      originalType !== 'Number'
    ) {
      //console.log(originalType);
    }
  }
}

function overrideArrays(block) {
  if (sanitizeAsArrays[block.Name]) {
    sanitizeAsArrays[block.Name].forEach(prop => {
      if (block.Properties[prop]) {
        block.Properties[prop].Array = true;
      }
    });
  }
}

function scrapeHtmlPage(body, pageType, fileName) {
  return Promise.promisify(
    x(body, {
      name: '.topictitle',
      titles: ['dt'],
      attributes: x('dd', [['p@html']])
    })
  )()
    .then(obj => {
      let block = {
        Name: obj.name.replace(/\s/g, ''),
        Properties: {}
      };
      for (let i = 0; i < obj.titles.length; i++) {
        let output = {
          Description: '',
          Array: false,
          Type: 'String'
        };
        obj.attributes[i].forEach(attr => {
          let $ = cheerio.load(attr);
          let attrContent = $.text().trim();
          if (attrContent.startsWith('Type: ')) {
            output.Type = attrContent.replace(/Type: /g, '').replace(/\s/g, '');
            sanitizeTypes(output, pageType);
            let link = $('a').attr('href');
            if (link) {
              output.Type = link.replace('.html', '');
              if (output.Type === 'aws-properties-resource-tags') {
                output.Array = true;
              }
            }
          } else if (attrContent.startsWith('Required: ')) {
            output.Required = attrContent
              .replace(/Required: /g, '')
              .replace(newlinePattern, '');
          } else if (attrContent.startsWith('Update requires: ')) {
            output.UpdateRequires = attrContent.replace(
              /Update requires: /g,
              ''
            );
          } else {
            output.Description += attrContent.replace(newlinePattern, '');
          }
        });
        // Clean up title in case it has parenthesis
        if (obj.titles[i].includes('(')) {
          obj.titles[i] = obj.titles[i].replace(/\(.+\)/g, '').trim();
        }
        if (
          (output.Type && output.Required) ||
          obj.titles[i] === 'PolicyName'
        ) {
          block.Properties[obj.titles[i]] = output;
        }
      }
      overrideArrays(block);
      let split = block.Name.split('::');
      let group = split[1];
      let name = split[2];
      if (pageType === 'Properties') {
        group = fileName.replace('.html', '');
        if (!result[pageType][group]) {
          result[pageType][group] = {};
        }
        result[pageType][group] = block;
      } else {
        if (!result[pageType][group]) {
          result[pageType][group] = { Resources: {}, Models: {} };
        }
        result[pageType][group].Resources[name] = block;
      }
    })
    .catch(err => {
      console.error(err);
    });
}

function calculateModels() {
  console.log('calculating models...');
  Object.keys(result.Resources).map(group => {
    Object.keys(result.Resources[group].Resources).map(resource => {
      let neededProps = getPropertyTypeArray(
        result.Resources[group].Resources[resource],
        [],
        0
      );
      neededProps.map(n => {
        result.Resources[group].Models[n] = result.Properties[n];
      });
    });
  });
}

function getPropertyTypeArray(inputObject, typeResults, depth) {
  if (!typeResults) typeResults = [];
  depth++;
  //console.log(`depth: ${depth}`);
  if (depth > 3) {
    //console.log('Growing');
  }
  try {
    Object.keys(inputObject.Properties);
  } catch (e) {
    console.log('Caught');
    console.log(inputObject);
    console.log(e);
  }
  if (inputObject) {
    Object.keys(inputObject.Properties).map(propName => {
      let propObj = inputObject.Properties[propName];
      if (
        propObj.Type !== 'String' &&
        propObj.Type !== 'Object' &&
        propObj.Type !== 'Number' &&
        propObj.Type !== 'Boolean'
      ) {
        if (!typeResults.includes(propObj.Type)) {
          typeResults.push(propObj.Type);
          if (result.Properties[propObj.Type]) {
            getPropertyTypeArray(
              result.Properties[propObj.Type],
              typeResults,
              depth
            );
          }
        }
        //console.log('Done');
      }
    });
  }
  return typeResults;
}

function generateJson() {
  return fs
    .readdirAsync(htmlPropertiesDir)
    .map(fileName => {
      return fs
        .readFileAsync(htmlPropertiesDir + fileName, 'utf8')
        .then(body => {
          return scrapeHtmlPage(body, 'Properties', fileName);
        });
    })
    .then(() => {
      return fs.readdirAsync(htmlResourcesDir);
    })
    .map(fileName => {
      return fs
        .readFileAsync(htmlResourcesDir + fileName, 'utf8')
        .then(body => {
          return scrapeHtmlPage(body, 'Resources', fileName);
        });
    })
    .then(() => {
      calculateModels();
      for (let group in result.Resources) {
        fs.writeJSONAsync(
          jsonResourcesDir + group + '.json',
          result.Resources[group]
        );
      }
    })
    .then(() => {
      console.log('Finished.');
    });
}

let selection = process.argv[2];
if (selection === 'download') {
  downloadPages();
} else if (selection === 'generate-json') {
  generateJson();
} else {
  console.log('Invalid command.');
}
