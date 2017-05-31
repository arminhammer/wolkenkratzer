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
  'securitygroupsassignedtoyourloadbalancerwithinyourvirtualprivatecloud(VPC)': 'String' };


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
  ArrayofActionobjects: 'AWSIoTActions' };


const sanitizeAsArrays = {
  AmazonS3NotificationConfiguration: [
  'LambdaConfigurations',
  'QueueConfigurations',
  'TopicConfigurations'] };



const result = {
  Properties: {},
  Resources: {} };


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
  return Promise.promisify(x(resourcesUrl, ['.highlights li a@href']))().
  mapSeries(link => {
    return getAndWriteFile(link, htmlResourcesDir);
  }).
  then(() => {
    return Promise.promisify(x(propertiesUrl, ['.highlights li a@href']))();
  }).
  mapSeries(link => {
    return getAndWriteFile(link, htmlPropertiesDir);
  }).
  then(() => {
    console.log('Finished');
  }).
  catch(err => {
    console.error('Error:');
    console.error(err);
  });
}

function sanitizeTypes(output, pageType) {
  output.Type = output.Type.replace(/\./, '');
  if (
  output.Type.startsWith('Listof') ||
  output.Type.startsWith('listof') ||
  output.Type.startsWith('Alistof'))
  {
    output.Type = output.Type.
    replace(/^Listof/, '').
    replace(/^listof/, '').
    replace(/^Alistof/, '').
    replace(/\./g, '');
    output.Array = true;
  }

  let originalType = output.Type;
  if (pageType == 'Resources') {
    if (sanitizeReplacementsResources[originalType]) {
      output.Type = sanitizeReplacementsResources[originalType];
    } else if (
    originalType !== 'String' &&
    originalType !== 'Boolean' &&
    originalType !== 'Number')
    {
      //console.log(originalType);
    }
  } else if (pageType == 'Properties') {
    if (sanitizeReplacementsProperties[originalType]) {
      output.Type = sanitizeReplacementsProperties[originalType];
    } else if (
    originalType !== 'String' &&
    originalType !== 'Boolean' &&
    originalType !== 'Number')
    {
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
    attributes: x('dd', [['p@html']]) }))().


  then(obj => {
    let block = {
      Name: obj.name.replace(/\s/g, ''),
      Properties: {} };

    for (let i = 0; i < obj.titles.length; i++) {
      let output = {
        Description: '',
        Array: false,
        Type: 'String' };

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
          output.Required = attrContent.
          replace(/Required: /g, '').
          replace(newlinePattern, '');
        } else if (attrContent.startsWith('Update requires: ')) {
          output.UpdateRequires = attrContent.replace(
          /Update requires: /g,
          '');

        } else {
          output.Description += attrContent.replace(newlinePattern, '');
        }
      });
      // Clean up title in case it has parenthesis
      if (obj.titles[i].includes('(')) {
        obj.titles[i] = obj.titles[i].replace(/\(.+\)/g, '').trim();
      }
      if (
      output.Type && output.Required ||
      obj.titles[i] === 'PolicyName')
      {
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
  }).
  catch(err => {
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
      0);

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
      propObj.Type !== 'Boolean')
      {
        if (!typeResults.includes(propObj.Type)) {
          typeResults.push(propObj.Type);
          if (result.Properties[propObj.Type]) {
            getPropertyTypeArray(
            result.Properties[propObj.Type],
            typeResults,
            depth);

          }
        }
        //console.log('Done');
      }
    });
  }
  return typeResults;
}

function generateJson() {
  return fs.
  readdirAsync(htmlPropertiesDir).
  map(fileName => {
    return fs.
    readFileAsync(htmlPropertiesDir + fileName, 'utf8').
    then(body => {
      return scrapeHtmlPage(body, 'Properties', fileName);
    });
  }).
  then(() => {
    return fs.readdirAsync(htmlResourcesDir);
  }).
  map(fileName => {
    return fs.
    readFileAsync(htmlResourcesDir + fileName, 'utf8').
    then(body => {
      return scrapeHtmlPage(body, 'Resources', fileName);
    });
  }).
  then(() => {
    calculateModels();
    for (let group in result.Resources) {
      fs.writeJSONAsync(
      jsonResourcesDir + group + '.json',
      result.Resources[group]);

    }
  }).
  then(() => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHVicy9pbmRleC5qcyJdLCJuYW1lcyI6WyJQcm9taXNlIiwicmVxdWlyZSIsIngiLCJkZWxheSIsImZzIiwicHJvbWlzaWZ5QWxsIiwidXJsIiwicGF0aCIsInJwIiwiY2hlZXJpbyIsInJlc291cmNlc1VybCIsInByb3BlcnRpZXNVcmwiLCJodG1sRGlyIiwianNvbkRpciIsImpzb25SZXNvdXJjZXNEaXIiLCJodG1sUmVzb3VyY2VzRGlyIiwiaHRtbFByb3BlcnRpZXNEaXIiLCJuZXdsaW5lUGF0dGVybiIsInNhbml0aXplUmVwbGFjZW1lbnRzUmVzb3VyY2VzIiwiQW1hem9uU05TdG9waWNzQVJOcyIsInN0cmluZ3MiLCJKU09Ob2JqZWN0IiwiU05TU3Vic2NyaXB0aW9ucyIsIkludGVnZXIiLCJEb3VibGUiLCJBSlNPTnBvbGljeWRvY3VtZW50IiwiQXV0b1NjYWxpbmdFQlNCbG9ja0RldmljZSIsIkNhY2hlQmVoYXZpb3IiLCJEZWZhdWx0Q2FjaGVCZWhhdmlvcnR5cGUiLCJMb2dnaW5ndHlwZSIsIk9yaWdpbnMiLCJGb3J3YXJkZWRWYWx1ZXN0eXBlIiwiQ3VzdG9tT3JpZ2ludHlwZSIsIlMzT3JpZ2ludHlwZSIsIlByaXZhdGVJcEFkZHJlc3NTcGVjaWZpY2F0aW9uIiwiU3RyaW5ndG9zdHJpbmdtYXAiLCJUaW1lc3RhbXAiLCJFQzJTZWN1cml0eUdyb3VwUnVsZSIsIldlYnNpdGVDb25maWd1cmF0aW9uVHlwZSIsIkFsaWFzVGFyZ2V0IiwiTnVtYmVyV2VpZ2h0ZXhwZWN0c2ludGVnZXJ2YWx1ZXMiLCJEaXN0cmlidXRpb25Db25maWd0eXBlIiwidXNlcnMiLCJBcHBDb29raWVTdGlja2luZXNzUG9saWN5b2JqZWN0cyIsIkxCQ29va2llU3RpY2tpbmVzc1BvbGljeW9iamVjdHMiLCJFbGFzdGljTG9hZEJhbGFuY2luZ0xpc3RlbmVyUHJvcGVydHlUeXBlb2JqZWN0cyIsIkVsYXN0aWNMb2FkQmFsYW5jaW5ncG9saWN5b2JqZWN0cyIsIm51bWJlcnMiLCJSRFNTZWN1cml0eUdyb3VwUnVsZXMiLCJPcHRpb25TZXR0aW5ncyIsIlNvdXJjZUJ1bmRsZSIsIlN0cmluZ2xpc3QiLCJyb3V0ZXRhYmxlSURzIiwiUmVmSUQiLCJUb3BpY1J1bGVQYXlsb2Fkb2JqZWN0IiwiRUMyTW91bnRQb2ludHMiLCJOdW1iZXJCZ3BBc25pc2Fsd2F5c2FuaW50ZWdlcnZhbHVlIiwiTWV0cmljRGltZW5zaW9uIiwiRUMyc2VjdXJpdHlncm91cHMiLCJCbG9ja0RldmljZU1hcHBpbmdzIiwic2FuaXRpemVSZXBsYWNlbWVudHNQcm9wZXJ0aWVzIiwiT3JpZ2luQ3VzdG9tSGVhZGVydHlwZSIsIkNsb3VkV2F0Y2hBbGFybWFjdGlvbm9iamVjdCIsIkNsb3VkV2F0Y2hNZXRyaWNhY3Rpb25vYmplY3QiLCJEeW5hbW9EQmFjdGlvbm9iamVjdCIsIkVsYXN0aWNzZWFyY2hhY3Rpb25vYmplY3QiLCJGaXJlaG9zZWFjdGlvbm9iamVjdCIsIktpbmVzaXNhY3Rpb25vYmplY3QiLCJMYW1iZGFhY3Rpb25vYmplY3QiLCJSZXB1Ymxpc2hhY3Rpb25vYmplY3QiLCJTM2FjdGlvbm9iamVjdCIsIlNuc2FjdGlvbm9iamVjdCIsIlNxc2FjdGlvbm9iamVjdCIsIkFycmF5b2ZBY3Rpb25vYmplY3RzIiwic2FuaXRpemVBc0FycmF5cyIsIkFtYXpvblMzTm90aWZpY2F0aW9uQ29uZmlndXJhdGlvbiIsInJlc3VsdCIsIlByb3BlcnRpZXMiLCJSZXNvdXJjZXMiLCJnZXRBbmRXcml0ZUZpbGUiLCJsaW5rIiwicHJlZml4IiwiZmlsZW5hbWUiLCJiYXNlbmFtZSIsInBhcnNlIiwicGF0aG5hbWUiLCJnZXQiLCJ0aGVuIiwiYm9keSIsIm91dHB1dEZpbGVBc3luYyIsImNvbnNvbGUiLCJsb2ciLCJkb3dubG9hZFBhZ2VzIiwicHJvbWlzaWZ5IiwibWFwU2VyaWVzIiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsInNhbml0aXplVHlwZXMiLCJvdXRwdXQiLCJwYWdlVHlwZSIsIlR5cGUiLCJyZXBsYWNlIiwic3RhcnRzV2l0aCIsIkFycmF5Iiwib3JpZ2luYWxUeXBlIiwib3ZlcnJpZGVBcnJheXMiLCJibG9jayIsIk5hbWUiLCJmb3JFYWNoIiwicHJvcCIsInNjcmFwZUh0bWxQYWdlIiwiZmlsZU5hbWUiLCJuYW1lIiwidGl0bGVzIiwiYXR0cmlidXRlcyIsIm9iaiIsImkiLCJsZW5ndGgiLCJEZXNjcmlwdGlvbiIsImF0dHIiLCIkIiwibG9hZCIsImF0dHJDb250ZW50IiwidGV4dCIsInRyaW0iLCJSZXF1aXJlZCIsIlVwZGF0ZVJlcXVpcmVzIiwiaW5jbHVkZXMiLCJzcGxpdCIsImdyb3VwIiwiTW9kZWxzIiwiY2FsY3VsYXRlTW9kZWxzIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsInJlc291cmNlIiwibmVlZGVkUHJvcHMiLCJnZXRQcm9wZXJ0eVR5cGVBcnJheSIsIm4iLCJpbnB1dE9iamVjdCIsInR5cGVSZXN1bHRzIiwiZGVwdGgiLCJlIiwicHJvcE5hbWUiLCJwcm9wT2JqIiwicHVzaCIsImdlbmVyYXRlSnNvbiIsInJlYWRkaXJBc3luYyIsInJlYWRGaWxlQXN5bmMiLCJ3cml0ZUpTT05Bc3luYyIsInNlbGVjdGlvbiIsInByb2Nlc3MiLCJhcmd2Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxNQUFNQSxVQUFVQyxRQUFRLFVBQVIsQ0FBaEI7QUFDQSxNQUFNQyxJQUFJRCxRQUFRLE9BQVIsSUFBbUJFLEtBQW5CLENBQXlCLElBQXpCLENBQVY7QUFDQSxNQUFNQyxLQUFLSixRQUFRSyxZQUFSLENBQXFCSixRQUFRLFVBQVIsQ0FBckIsQ0FBWDtBQUNBLE1BQU1LLE1BQU1MLFFBQVEsS0FBUixDQUFaO0FBQ0EsTUFBTU0sT0FBT04sUUFBUSxNQUFSLENBQWI7QUFDQSxNQUFNTyxLQUFLUCxRQUFRLGlCQUFSLENBQVg7QUFDQSxNQUFNUSxVQUFVUixRQUFRLFNBQVIsQ0FBaEI7O0FBRUEsTUFBTVM7QUFDSixtR0FERjtBQUVBLE1BQU1DO0FBQ0osbUdBREY7O0FBR0Es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TUFFQTtBQUNMekQsVUFBUUMsR0FBUixDQUFZLGtCQUFaO0FBQ0QiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFByb21pc2UgPSByZXF1aXJlKCdibHVlYmlyZCcpO1xuY29uc3QgeCA9IHJlcXVpcmUoJ3gtcmF5JykoKS5kZWxheSg1MDAwKTtcbmNvbnN0IGZzID0gUHJvbWlzZS5wcm9taXNpZnlBbGwocmVxdWlyZSgnZnMtZXh0cmEnKSk7XG5jb25zdCB1cmwgPSByZXF1aXJlKCd1cmwnKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5jb25zdCBycCA9IHJlcXVpcmUoJ3JlcXVlc3QtcHJvbWlzZScpO1xuY29uc3QgY2hlZXJpbyA9IHJlcXVpcmUoJ2NoZWVyaW8nKTtcblxuY29uc3QgcmVzb3VyY2VzVXJsID1cbiAgJ2h0dHA6Ly9kb2NzLmF3cy5hbWF6b24uY29tL0FXU0Nsb3VkRm9ybWF0aW9uL2xhdGVzdC9Vc2VyR3VpZGUvYXdzLXRlbXBsYXRlLXJlc291cmNlLXR5cGUtcmVmLmh0bWwnO1xuY29uc3QgcHJvcGVydGllc1VybCA9XG4gICdodHRwOi8vZG9jcy5hd3MuYW1hem9uLmNvbS9BV1NDbG91ZEZvcm1hdGlvbi9sYXRlc3QvVXNlckd1aWRlL2F3cy1wcm9kdWN0LXByb3BlcnR5LXJlZmVyZW5jZS5odG1sJztcblxuY29uc3QgaHRtbERpciA9ICdodG1sLyc7XG5jb25zdCBqc29uRGlyID0gJ2pzb24vJztcbmNvbnN0IGpzb25SZXNvdXJjZXNEaXIgPSBqc29uRGlyO1xuY29uc3QgaHRtbFJlc291cmNlc0RpciA9IGh0bWxEaXIgKyAncmVzb3VyY2VzLyc7XG5jb25zdCBodG1sUHJvcGVydGllc0RpciA9IGh0bWxEaXIgKyAncHJvcGVydGllcy8nO1xuXG5jb25zdCBuZXdsaW5lUGF0dGVybiA9IC9cXHI/XFxufFxcci9nO1xuXG5jb25zdCBzYW5pdGl6ZVJlcGxhY2VtZW50c1Jlc291cmNlcyA9IHtcbiAgJ051bWJlcldlaWdodGV4cGVjdHNpbnRlZ2VydmFsdWVzLic6ICdOdW1iZXInLFxuICAnQUpTT05vYmplY3Rjb25zaXN0aW5nb2ZzdHJpbmdrZXktdmFsdWVwYWlycyxhc3Nob3duaW50aGVmb2xsb3dpbmdleGFtcGxlOic6ICdNYXAnLFxuICAnQUpTT05vYmplY3Rjb25zaXN0aW5nb2Zhc3RyaW5na2V5LXZhbHVlcGFpcixzdWNoYXM6JzogJ01hcCcsXG4gICdTdHJpbmd0b2xpc3Qtb2Ytc3RyaW5nc21hcCc6ICdNYXAnLFxuICBBbWF6b25TTlN0b3BpY3NBUk5zOiAnU3RyaW5nJyxcbiAgc3RyaW5nczogJ1N0cmluZycsXG4gICdNYXBwaW5nb2ZrZXktdmFsdWVwYWlycyc6ICdNYXAnLFxuICBKU09Ob2JqZWN0OiAnT2JqZWN0JyxcbiAgU05TU3Vic2NyaXB0aW9uczogJ0FtYXpvblNOU1N1YnNjcmlwdGlvblByb3BlcnR5VHlwZScsXG4gIEludGVnZXI6ICdOdW1iZXInLFxuICBEb3VibGU6ICdOdW1iZXInLFxuICBBSlNPTnBvbGljeWRvY3VtZW50OiAnT2JqZWN0JyxcbiAgQXV0b1NjYWxpbmdFQlNCbG9ja0RldmljZTogJ0FXU0Nsb3VkRm9ybWF0aW9uQXV0b1NjYWxpbmdFQlNCbG9ja0RldmljZVByb3BlcnR5VHlwZScsXG4gIENhY2hlQmVoYXZpb3I6ICdDbG91ZEZyb250RGlzdHJpYnV0aW9uQ29uZmlnQ2FjaGVCZWhhdmlvcicsXG4gIERlZmF1bHRDYWNoZUJlaGF2aW9ydHlwZTogJ0Nsb3VkRnJvbnREZWZhdWx0Q2FjaGVCZWhhdmlvcicsXG4gIExvZ2dpbmd0eXBlOiAnQ2xvdWRGcm9udExvZ2dpbmcnLFxuICBPcmlnaW5zOiAnQ2xvdWRGcm9udERpc3RyaWJ1dGlvbkNvbmZpZ09yaWdpbicsXG4gIEZvcndhcmRlZFZhbHVlc3R5cGU6ICdDbG91ZEZyb250Rm9yd2FyZGVkVmFsdWVzJyxcbiAgQ3VzdG9tT3JpZ2ludHlwZTogJ0Nsb3VkRnJvbnREaXN0cmlidXRpb25Db25maWdPcmlnaW5DdXN0b21PcmlnaW4nLFxuICBTM09yaWdpbnR5cGU6ICdDbG91ZEZyb250RGlzdHJpYnV0aW9uQ29uZmlnT3JpZ2luUzNPcmlnaW4nLFxuICAnYW5lbXB0eW1hcDp7fSc6ICdNYXAnLFxuICBQcml2YXRlSXBBZGRyZXNzU3BlY2lmaWNhdGlvbjogJ0VDMk5ldHdvcmtJbnRlcmZhY2VQcml2YXRlSVBTcGVjaWZpY2F0aW9uJyxcbiAgJ0tleS12YWx1ZXBhaXJzLHdpdGh0aGVuYW1lb2Z0aGVsYWJlbGFzdGhla2V5YW5kdGhlbGFiZWx2YWx1ZWFzdGhldmFsdWUnOiAnTWFwJyxcbiAgJ0tleS12YWx1ZXBhaXJzLHdpdGh0aGVvcHRpb25uYW1lYXN0aGVrZXlhbmR0aGVvcHRpb252YWx1ZWFzdGhldmFsdWUnOiAnTWFwJyxcbiAgJ1N0cmluZy10by1zdHJpbmdtYXAnOiAnTWFwJyxcbiAgU3RyaW5ndG9zdHJpbmdtYXA6ICdNYXAnLFxuICBUaW1lc3RhbXA6ICdEYXRlJyxcbiAgJ1N0cmluZ1ZhbGlkdmFsdWVzYXJlXCJiYXNpY1wib3JcIlMzXCInOiAnU3RyaW5nJyxcbiAgJ1N0cmluZygx4oCTMTYwMGNoYXJzKSc6ICdTdHJpbmcnLFxuICAna2V5LXZhbHVlcGFpcnMnOiAnTWFwJyxcbiAgJ3JlZmVyZW5jZXN0b0FXUzo6SUFNOjpSb2xlc0N1cnJlbnRseSxhbWF4aW11bW9mb25lcm9sZWNhbmJlYXNzaWduZWR0b2FuaW5zdGFuY2Vwcm9maWxlJzogJ1N0cmluZycsXG4gIEVDMlNlY3VyaXR5R3JvdXBSdWxlOiAnRUMyU2VjdXJpdHlHcm91cFJ1bGVQcm9wZXJ0eVR5cGUnLFxuICBXZWJzaXRlQ29uZmlndXJhdGlvblR5cGU6ICdBbWF6b25TM1dlYnNpdGVDb25maWd1cmF0aW9uUHJvcGVydHknLFxuICBBbGlhc1RhcmdldDogJ1JvdXRlNTNBbGlhc1RhcmdldFByb3BlcnR5JyxcbiAgTnVtYmVyV2VpZ2h0ZXhwZWN0c2ludGVnZXJ2YWx1ZXM6ICdOdW1iZXInLFxuICBEaXN0cmlidXRpb25Db25maWd0eXBlOiAnQ2xvdWRGcm9udERpc3RyaWJ1dGlvbkNvbmZpZycsXG4gIHVzZXJzOiAnU3RyaW5nJyxcbiAgQXBwQ29va2llU3RpY2tpbmVzc1BvbGljeW9iamVjdHM6ICdFbGFzdGljTG9hZEJhbGFuY2luZ0FwcENvb2tpZVN0aWNraW5lc3NQb2xpY3lUeXBlJyxcbiAgTEJDb29raWVTdGlja2luZXNzUG9saWN5b2JqZWN0czogJ0VsYXN0aWNMb2FkQmFsYW5jaW5nTEJDb29raWVTdGlja2luZXNzUG9saWN5VHlwZScsXG4gIEVsYXN0aWNMb2FkQmFsYW5jaW5nTGlzdGVuZXJQcm9wZXJ0eVR5cGVvYmplY3RzOiAnRWxhc3RpY0xvYWRCYWxhbmNpbmdMaXN0ZW5lclByb3BlcnR5VHlwZScsXG4gIEVsYXN0aWNMb2FkQmFsYW5jaW5ncG9saWN5b2JqZWN0czogJ0VsYXN0aWNMb2FkQmFsYW5jaW5nUG9saWN5VHlwZScsXG4gIG51bWJlcnM6ICdOdW1iZXInLFxuICBTTlNTdWJzY3JpcHRpb25zOiAnQW1hem9uU05TU3Vic2NyaXB0aW9uUHJvcGVydHlUeXBlJyxcbiAgQW1hem9uU05TdG9waWNzQVJOczogJ1N0cmluZycsXG4gIFJEU1NlY3VyaXR5R3JvdXBSdWxlczogJ0FtYXpvblJEU1NlY3VyaXR5R3JvdXBSdWxlJyxcbiAgT3B0aW9uU2V0dGluZ3M6ICdFbGFzdGljQmVhbnN0YWxrT3B0aW9uU2V0dGluZ3NQcm9wZXJ0eVR5cGUnLFxuICBTb3VyY2VCdW5kbGU6ICdFbGFzdGljQmVhbnN0YWxrU291cmNlQnVuZGxlUHJvcGVydHlUeXBlJyxcbiAgU3RyaW5nbGlzdDogJ1N0cmluZycsXG4gIHJvdXRldGFibGVJRHM6ICdTdHJpbmcnLFxuICBSZWZJRDogJ1N0cmluZycsXG4gIFRvcGljUnVsZVBheWxvYWRvYmplY3Q6ICdBV1NJb1RUb3BpY1J1bGVQYXlsb2FkJyxcbiAgRUMyTW91bnRQb2ludHM6ICdFQzJNb3VudFBvaW50UHJvcGVydHlUeXBlJyxcbiAgTnVtYmVyQmdwQXNuaXNhbHdheXNhbmludGVnZXJ2YWx1ZTogJ051bWJlcicsXG4gIE1ldHJpY0RpbWVuc2lvbjogJ0Nsb3VkV2F0Y2hNZXRyaWNEaW1lbnNpb25Qcm9wZXJ0eVR5cGUnLFxuICBFQzJzZWN1cml0eWdyb3VwczogJ1N0cmluZycsXG4gIEJsb2NrRGV2aWNlTWFwcGluZ3M6ICdBV1NDbG91ZEZvcm1hdGlvbkF1dG9TY2FsaW5nQmxvY2tEZXZpY2VNYXBwaW5nUHJvcGVydHlUeXBlJyxcbiAgJ3NlY3VyaXR5Z3JvdXBzYXNzaWduZWR0b3lvdXJsb2FkYmFsYW5jZXJ3aXRoaW55b3VydmlydHVhbHByaXZhdGVjbG91ZChWUEMpJzogJ1N0cmluZydcbn07XG5cbmNvbnN0IHNhbml0aXplUmVwbGFjZW1lbnRzUHJvcGVydGllcyA9IHtcbiAgJ0pTT05uYW1lLXZhbHVlcGFpcnMnOiAnTWFwJyxcbiAgSW50ZWdlcjogJ051bWJlcicsXG4gICdNYXBwaW5nb2ZrZXktdmFsdWVwYWlycyc6ICdNYXAnLFxuICBzdHJpbmdzOiAnU3RyaW5nJyxcbiAgSlNPTm9iamVjdDogJ09iamVjdCcsXG4gIEF1dG9TY2FsaW5nRUJTQmxvY2tEZXZpY2U6ICdBV1NDbG91ZEZvcm1hdGlvbkF1dG9TY2FsaW5nRUJTQmxvY2tEZXZpY2VQcm9wZXJ0eVR5cGUnLFxuICBDYWNoZUJlaGF2aW9yOiAnQ2xvdWRGcm9udERpc3RyaWJ1dGlvbkNvbmZpZ0NhY2hlQmVoYXZpb3InLFxuICBEZWZhdWx0Q2FjaGVCZWhhdmlvcnR5cGU6ICdDbG91ZEZyb250RGVmYXVsdENhY2hlQmVoYXZpb3InLFxuICBMb2dnaW5ndHlwZTogJ0Nsb3VkRnJvbnRMb2dnaW5nJyxcbiAgT3JpZ2luczogJ0Nsb3VkRnJvbnREaXN0cmlidXRpb25Db25maWdPcmlnaW4nLFxuICBGb3J3YXJkZWRWYWx1ZXN0eXBlOiAnQ2xvdWRGcm9udEZvcndhcmRlZFZhbHVlcycsXG4gIEN1c3RvbU9yaWdpbnR5cGU6ICdDbG91ZEZyb250RGlzdHJpYnV0aW9uQ29uZmlnT3JpZ2luQ3VzdG9tT3JpZ2luJyxcbiAgUzNPcmlnaW50eXBlOiAnQ2xvdWRGcm9udERpc3RyaWJ1dGlvbkNvbmZpZ09yaWdpblMzT3JpZ2luJyxcbiAgJ2FuZW1wdHltYXA6e30nOiAnTWFwJyxcbiAgUHJpdmF0ZUlwQWRkcmVzc1NwZWNpZmljYXRpb246ICdFQzJOZXR3b3JrSW50ZXJmYWNlUHJpdmF0ZUlQU3BlY2lmaWNhdGlvbicsXG4gICdLZXktdmFsdWVwYWlycyx3aXRodGhlbmFtZW9mdGhlbGFiZWxhc3RoZWtleWFuZHRoZWxhYmVsdmFsdWVhc3RoZXZhbHVlJzogJ01hcCcsXG4gICdLZXktdmFsdWVwYWlycyx3aXRodGhlb3B0aW9ubmFtZWFzdGhla2V5YW5kdGhlb3B0aW9udmFsdWVhc3RoZXZhbHVlJzogJ01hcCcsXG4gICdTdHJpbmctdG8tc3RyaW5nbWFwJzogJ01hcCcsXG4gIFN0cmluZ3Rvc3RyaW5nbWFwOiAnTWFwJyxcbiAgT3JpZ2luQ3VzdG9tSGVhZGVydHlwZTogJ0Nsb3VkRnJvbnREaXN0cmlidXRpb25Db25maWdPcmlnaW5PcmlnaW5DdXN0b21IZWFkZXInLFxuICBDbG91ZFdhdGNoQWxhcm1hY3Rpb25vYmplY3Q6ICdBV1NJb1RDbG91ZHdhdGNoQWxhcm1BY3Rpb24nLFxuICBDbG91ZFdhdGNoTWV0cmljYWN0aW9ub2JqZWN0OiAnQVdTSW9UQ2xvdWR3YXRjaE1ldHJpY0FjdGlvbicsXG4gIER5bmFtb0RCYWN0aW9ub2JqZWN0OiAnQVdTSW9URHluYW1vREJBY3Rpb24nLFxuICBFbGFzdGljc2VhcmNoYWN0aW9ub2JqZWN0OiAnQVdTSW9URWxhc3RpY3NlYXJjaEFjdGlvbicsXG4gIEZpcmVob3NlYWN0aW9ub2JqZWN0OiAnQVdTSW9URmlyZWhvc2VBY3Rpb24nLFxuICBLaW5lc2lzYWN0aW9ub2JqZWN0OiAnQVdTSW9US2luZXNpc0FjdGlvbicsXG4gIExhbWJkYWFjdGlvbm9iamVjdDogJ0FXU0lvVExhbWJkYUFjdGlvbicsXG4gIFJlcHVibGlzaGFjdGlvbm9iamVjdDogJ0FXU0lvVFJlcHVibGlzaEFjdGlvbicsXG4gIFMzYWN0aW9ub2JqZWN0OiAnQVdTSW9UUzNBY3Rpb24nLFxuICBTbnNhY3Rpb25vYmplY3Q6ICdBV1NJb1RTbnNBY3Rpb24nLFxuICBTcXNhY3Rpb25vYmplY3Q6ICdBV1NJb1RTcXNBY3Rpb24nLFxuICBBcnJheW9mQWN0aW9ub2JqZWN0czogJ0FXU0lvVEFjdGlvbnMnXG59O1xuXG5jb25zdCBzYW5pdGl6ZUFzQXJyYXlzID0ge1xuICBBbWF6b25TM05vdGlmaWNhdGlvbkNvbmZpZ3VyYXRpb246IFtcbiAgICAnTGFtYmRhQ29uZmlndXJhdGlvbnMnLFxuICAgICdRdWV1ZUNvbmZpZ3VyYXRpb25zJyxcbiAgICAnVG9waWNDb25maWd1cmF0aW9ucydcbiAgXVxufTtcblxuY29uc3QgcmVzdWx0ID0ge1xuICBQcm9wZXJ0aWVzOiB7fSxcbiAgUmVzb3VyY2VzOiB7fVxufTtcblxuZnVuY3Rpb24gZ2V0QW5kV3JpdGVGaWxlKGxpbmssIHByZWZpeCkge1xuICBsZXQgZmlsZW5hbWUgPSBwYXRoLmJhc2VuYW1lKHVybC5wYXJzZShsaW5rKS5wYXRobmFtZSk7XG4gIC8vY29uc29sZS5sb2coZmlsZW5hbWUpO1xuICAvL2NvbnNvbGUubG9nKGxpbmspO1xuICByZXR1cm4gcnAuZ2V0KGxpbmspLnRoZW4oYm9keSA9PiB7XG4gICAgZnMub3V0cHV0RmlsZUFzeW5jKHByZWZpeCArIGZpbGVuYW1lLCBib2R5KS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdGaW5pc2hlZCB3cml0aW5nICcgKyBmaWxlbmFtZSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkb3dubG9hZFBhZ2VzKCkge1xuICByZXR1cm4gUHJvbWlzZS5wcm9taXNpZnkoeChyZXNvdXJjZXNVcmwsIFsnLmhpZ2hsaWdodHMgbGkgYUBocmVmJ10pKSgpXG4gICAgLm1hcFNlcmllcyhsaW5rID0+IHtcbiAgICAgIHJldHVybiBnZXRBbmRXcml0ZUZpbGUobGluaywgaHRtbFJlc291cmNlc0Rpcik7XG4gICAgfSlcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5wcm9taXNpZnkoeChwcm9wZXJ0aWVzVXJsLCBbJy5oaWdobGlnaHRzIGxpIGFAaHJlZiddKSkoKTtcbiAgICB9KVxuICAgIC5tYXBTZXJpZXMobGluayA9PiB7XG4gICAgICByZXR1cm4gZ2V0QW5kV3JpdGVGaWxlKGxpbmssIGh0bWxQcm9wZXJ0aWVzRGlyKTtcbiAgICB9KVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdGaW5pc2hlZCcpO1xuICAgIH0pXG4gICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gc2FuaXRpemVUeXBlcyhvdXRwdXQsIHBhZ2VUeXBlKSB7XG4gIG91dHB1dC5UeXBlID0gb3V0cHV0LlR5cGUucmVwbGFjZSgvXFwuLywgJycpO1xuICBpZiAoXG4gICAgb3V0cHV0LlR5cGUuc3RhcnRzV2l0aCgnTGlzdG9mJykgfHxcbiAgICBvdXRwdXQuVHlwZS5zdGFydHNXaXRoKCdsaXN0b2YnKSB8fFxuICAgIG91dHB1dC5UeXBlLnN0YXJ0c1dpdGgoJ0FsaXN0b2YnKVxuICApIHtcbiAgICBvdXRwdXQuVHlwZSA9IG91dHB1dC5UeXBlXG4gICAgICAucmVwbGFjZSgvXkxpc3RvZi8sICcnKVxuICAgICAgLnJlcGxhY2UoL15saXN0b2YvLCAnJylcbiAgICAgIC5yZXBsYWNlKC9eQWxpc3RvZi8sICcnKVxuICAgICAgLnJlcGxhY2UoL1xcLi9nLCAnJyk7XG4gICAgb3V0cHV0LkFycmF5ID0gdHJ1ZTtcbiAgfVxuXG4gIGxldCBvcmlnaW5hbFR5cGUgPSBvdXRwdXQuVHlwZTtcbiAgaWYgKHBhZ2VUeXBlID09ICdSZXNvdXJjZXMnKSB7XG4gICAgaWYgKHNhbml0aXplUmVwbGFjZW1lbnRzUmVzb3VyY2VzW29yaWdpbmFsVHlwZV0pIHtcbiAgICAgIG91dHB1dC5UeXBlID0gc2FuaXRpemVSZXBsYWNlbWVudHNSZXNvdXJjZXNbb3JpZ2luYWxUeXBlXTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgb3JpZ2luYWxUeXBlICE9PSAnU3RyaW5nJyAmJlxuICAgICAgb3JpZ2luYWxUeXBlICE9PSAnQm9vbGVhbicgJiZcbiAgICAgIG9yaWdpbmFsVHlwZSAhPT0gJ051bWJlcidcbiAgICApIHtcbiAgICAgIC8vY29uc29sZS5sb2cob3JpZ2luYWxUeXBlKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAocGFnZVR5cGUgPT0gJ1Byb3BlcnRpZXMnKSB7XG4gICAgaWYgKHNhbml0aXplUmVwbGFjZW1lbnRzUHJvcGVydGllc1tvcmlnaW5hbFR5cGVdKSB7XG4gICAgICBvdXRwdXQuVHlwZSA9IHNhbml0aXplUmVwbGFjZW1lbnRzUHJvcGVydGllc1tvcmlnaW5hbFR5cGVdO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBvcmlnaW5hbFR5cGUgIT09ICdTdHJpbmcnICYmXG4gICAgICBvcmlnaW5hbFR5cGUgIT09ICdCb29sZWFuJyAmJlxuICAgICAgb3JpZ2luYWxUeXBlICE9PSAnTnVtYmVyJ1xuICAgICkge1xuICAgICAgLy9jb25zb2xlLmxvZyhvcmlnaW5hbFR5cGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBvdmVycmlkZUFycmF5cyhibG9jaykge1xuICBpZiAoc2FuaXRpemVBc0FycmF5c1tibG9jay5OYW1lXSkge1xuICAgIHNhbml0aXplQXNBcnJheXNbYmxvY2suTmFtZV0uZm9yRWFjaChwcm9wID0+IHtcbiAgICAgIGlmIChibG9jay5Qcm9wZXJ0aWVzW3Byb3BdKSB7XG4gICAgICAgIGJsb2NrLlByb3BlcnRpZXNbcHJvcF0uQXJyYXkgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNjcmFwZUh0bWxQYWdlKGJvZHksIHBhZ2VUeXBlLCBmaWxlTmFtZSkge1xuICByZXR1cm4gUHJvbWlzZS5wcm9taXNpZnkoXG4gICAgeChib2R5LCB7XG4gICAgICBuYW1lOiAnLnRvcGljdGl0bGUnLFxuICAgICAgdGl0bGVzOiBbJ2R0J10sXG4gICAgICBhdHRyaWJ1dGVzOiB4KCdkZCcsIFtbJ3BAaHRtbCddXSlcbiAgICB9KVxuICApKClcbiAgICAudGhlbihvYmogPT4ge1xuICAgICAgbGV0IGJsb2NrID0ge1xuICAgICAgICBOYW1lOiBvYmoubmFtZS5yZXBsYWNlKC9cXHMvZywgJycpLFxuICAgICAgICBQcm9wZXJ0aWVzOiB7fVxuICAgICAgfTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqLnRpdGxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgb3V0cHV0ID0ge1xuICAgICAgICAgIERlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgICBBcnJheTogZmFsc2UsXG4gICAgICAgICAgVHlwZTogJ1N0cmluZydcbiAgICAgICAgfTtcbiAgICAgICAgb2JqLmF0dHJpYnV0ZXNbaV0uZm9yRWFjaChhdHRyID0+IHtcbiAgICAgICAgICBsZXQgJCA9IGNoZWVyaW8ubG9hZChhdHRyKTtcbiAgICAgICAgICBsZXQgYXR0ckNvbnRlbnQgPSAkLnRleHQoKS50cmltKCk7XG4gICAgICAgICAgaWYgKGF0dHJDb250ZW50LnN0YXJ0c1dpdGgoJ1R5cGU6ICcpKSB7XG4gICAgICAgICAgICBvdXRwdXQuVHlwZSA9IGF0dHJDb250ZW50LnJlcGxhY2UoL1R5cGU6IC9nLCAnJykucmVwbGFjZSgvXFxzL2csICcnKTtcbiAgICAgICAgICAgIHNhbml0aXplVHlwZXMob3V0cHV0LCBwYWdlVHlwZSk7XG4gICAgICAgICAgICBsZXQgbGluayA9ICQoJ2EnKS5hdHRyKCdocmVmJyk7XG4gICAgICAgICAgICBpZiAobGluaykge1xuICAgICAgICAgICAgICBvdXRwdXQuVHlwZSA9IGxpbmsucmVwbGFjZSgnLmh0bWwnLCAnJyk7XG4gICAgICAgICAgICAgIGlmIChvdXRwdXQuVHlwZSA9PT0gJ2F3cy1wcm9wZXJ0aWVzLXJlc291cmNlLXRhZ3MnKSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0LkFycmF5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoYXR0ckNvbnRlbnQuc3RhcnRzV2l0aCgnUmVxdWlyZWQ6ICcpKSB7XG4gICAgICAgICAgICBvdXRwdXQuUmVxdWlyZWQgPSBhdHRyQ29udGVudFxuICAgICAgICAgICAgICAucmVwbGFjZSgvUmVxdWlyZWQ6IC9nLCAnJylcbiAgICAgICAgICAgICAgLnJlcGxhY2UobmV3bGluZVBhdHRlcm4sICcnKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGF0dHJDb250ZW50LnN0YXJ0c1dpdGgoJ1VwZGF0ZSByZXF1aXJlczogJykpIHtcbiAgICAgICAgICAgIG91dHB1dC5VcGRhdGVSZXF1aXJlcyA9IGF0dHJDb250ZW50LnJlcGxhY2UoXG4gICAgICAgICAgICAgIC9VcGRhdGUgcmVxdWlyZXM6IC9nLFxuICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3V0cHV0LkRlc2NyaXB0aW9uICs9IGF0dHJDb250ZW50LnJlcGxhY2UobmV3bGluZVBhdHRlcm4sICcnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBDbGVhbiB1cCB0aXRsZSBpbiBjYXNlIGl0IGhhcyBwYXJlbnRoZXNpc1xuICAgICAgICBpZiAob2JqLnRpdGxlc1tpXS5pbmNsdWRlcygnKCcpKSB7XG4gICAgICAgICAgb2JqLnRpdGxlc1tpXSA9IG9iai50aXRsZXNbaV0ucmVwbGFjZSgvXFwoLitcXCkvZywgJycpLnRyaW0oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXG4gICAgICAgICAgKG91dHB1dC5UeXBlICYmIG91dHB1dC5SZXF1aXJlZCkgfHxcbiAgICAgICAgICBvYmoudGl0bGVzW2ldID09PSAnUG9saWN5TmFtZSdcbiAgICAgICAgKSB7XG4gICAgICAgICAgYmxvY2suUHJvcGVydGllc1tvYmoudGl0bGVzW2ldXSA9IG91dHB1dDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgb3ZlcnJpZGVBcnJheXMoYmxvY2spO1xuICAgICAgbGV0IHNwbGl0ID0gYmxvY2suTmFtZS5zcGxpdCgnOjonKTtcbiAgICAgIGxldCBncm91cCA9IHNwbGl0WzFdO1xuICAgICAgbGV0IG5hbWUgPSBzcGxpdFsyXTtcbiAgICAgIGlmIChwYWdlVHlwZSA9PT0gJ1Byb3BlcnRpZXMnKSB7XG4gICAgICAgIGdyb3VwID0gZmlsZU5hbWUucmVwbGFjZSgnLmh0bWwnLCAnJyk7XG4gICAgICAgIGlmICghcmVzdWx0W3BhZ2VUeXBlXVtncm91cF0pIHtcbiAgICAgICAgICByZXN1bHRbcGFnZVR5cGVdW2dyb3VwXSA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdFtwYWdlVHlwZV1bZ3JvdXBdID0gYmxvY2s7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIXJlc3VsdFtwYWdlVHlwZV1bZ3JvdXBdKSB7XG4gICAgICAgICAgcmVzdWx0W3BhZ2VUeXBlXVtncm91cF0gPSB7IFJlc291cmNlczoge30sIE1vZGVsczoge30gfTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHRbcGFnZVR5cGVdW2dyb3VwXS5SZXNvdXJjZXNbbmFtZV0gPSBibG9jaztcbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVNb2RlbHMoKSB7XG4gIGNvbnNvbGUubG9nKCdjYWxjdWxhdGluZyBtb2RlbHMuLi4nKTtcbiAgT2JqZWN0LmtleXMocmVzdWx0LlJlc291cmNlcykubWFwKGdyb3VwID0+IHtcbiAgICBPYmplY3Qua2V5cyhyZXN1bHQuUmVzb3VyY2VzW2dyb3VwXS5SZXNvdXJjZXMpLm1hcChyZXNvdXJjZSA9PiB7XG4gICAgICBsZXQgbmVlZGVkUHJvcHMgPSBnZXRQcm9wZXJ0eVR5cGVBcnJheShcbiAgICAgICAgcmVzdWx0LlJlc291cmNlc1tncm91cF0uUmVzb3VyY2VzW3Jlc291cmNlXSxcbiAgICAgICAgW10sXG4gICAgICAgIDBcbiAgICAgICk7XG4gICAgICBuZWVkZWRQcm9wcy5tYXAobiA9PiB7XG4gICAgICAgIHJlc3VsdC5SZXNvdXJjZXNbZ3JvdXBdLk1vZGVsc1tuXSA9IHJlc3VsdC5Qcm9wZXJ0aWVzW25dO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9wZXJ0eVR5cGVBcnJheShpbnB1dE9iamVjdCwgdHlwZVJlc3VsdHMsIGRlcHRoKSB7XG4gIGlmICghdHlwZVJlc3VsdHMpIHR5cGVSZXN1bHRzID0gW107XG4gIGRlcHRoKys7XG4gIC8vY29uc29sZS5sb2coYGRlcHRoOiAke2RlcHRofWApO1xuICBpZiAoZGVwdGggPiAzKSB7XG4gICAgLy9jb25zb2xlLmxvZygnR3Jvd2luZycpO1xuICB9XG4gIHRyeSB7XG4gICAgT2JqZWN0LmtleXMoaW5wdXRPYmplY3QuUHJvcGVydGllcyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZygnQ2F1Z2h0Jyk7XG4gICAgY29uc29sZS5sb2coaW5wdXRPYmplY3QpO1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICB9XG4gIGlmIChpbnB1dE9iamVjdCkge1xuICAgIE9iamVjdC5rZXlzKGlucHV0T2JqZWN0LlByb3BlcnRpZXMpLm1hcChwcm9wTmFtZSA9PiB7XG4gICAgICBsZXQgcHJvcE9iaiA9IGlucHV0T2JqZWN0LlByb3BlcnRpZXNbcHJvcE5hbWVdO1xuICAgICAgaWYgKFxuICAgICAgICBwcm9wT2JqLlR5cGUgIT09ICdTdHJpbmcnICYmXG4gICAgICAgIHByb3BPYmouVHlwZSAhPT0gJ09iamVjdCcgJiZcbiAgICAgICAgcHJvcE9iai5UeXBlICE9PSAnTnVtYmVyJyAmJlxuICAgICAgICBwcm9wT2JqLlR5cGUgIT09ICdCb29sZWFuJ1xuICAgICAgKSB7XG4gICAgICAgIGlmICghdHlwZVJlc3VsdHMuaW5jbHVkZXMocHJvcE9iai5UeXBlKSkge1xuICAgICAgICAgIHR5cGVSZXN1bHRzLnB1c2gocHJvcE9iai5UeXBlKTtcbiAgICAgICAgICBpZiAocmVzdWx0LlByb3BlcnRpZXNbcHJvcE9iai5UeXBlXSkge1xuICAgICAgICAgICAgZ2V0UHJvcGVydHlUeXBlQXJyYXkoXG4gICAgICAgICAgICAgIHJlc3VsdC5Qcm9wZXJ0aWVzW3Byb3BPYmouVHlwZV0sXG4gICAgICAgICAgICAgIHR5cGVSZXN1bHRzLFxuICAgICAgICAgICAgICBkZXB0aFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy9jb25zb2xlLmxvZygnRG9uZScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJldHVybiB0eXBlUmVzdWx0cztcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVKc29uKCkge1xuICByZXR1cm4gZnNcbiAgICAucmVhZGRpckFzeW5jKGh0bWxQcm9wZXJ0aWVzRGlyKVxuICAgIC5tYXAoZmlsZU5hbWUgPT4ge1xuICAgICAgcmV0dXJuIGZzXG4gICAgICAgIC5yZWFkRmlsZUFzeW5jKGh0bWxQcm9wZXJ0aWVzRGlyICsgZmlsZU5hbWUsICd1dGY4JylcbiAgICAgICAgLnRoZW4oYm9keSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHNjcmFwZUh0bWxQYWdlKGJvZHksICdQcm9wZXJ0aWVzJywgZmlsZU5hbWUpO1xuICAgICAgICB9KTtcbiAgICB9KVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIHJldHVybiBmcy5yZWFkZGlyQXN5bmMoaHRtbFJlc291cmNlc0Rpcik7XG4gICAgfSlcbiAgICAubWFwKGZpbGVOYW1lID0+IHtcbiAgICAgIHJldHVybiBmc1xuICAgICAgICAucmVhZEZpbGVBc3luYyhodG1sUmVzb3VyY2VzRGlyICsgZmlsZU5hbWUsICd1dGY4JylcbiAgICAgICAgLnRoZW4oYm9keSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHNjcmFwZUh0bWxQYWdlKGJvZHksICdSZXNvdXJjZXMnLCBmaWxlTmFtZSk7XG4gICAgICAgIH0pO1xuICAgIH0pXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgY2FsY3VsYXRlTW9kZWxzKCk7XG4gICAgICBmb3IgKGxldCBncm91cCBpbiByZXN1bHQuUmVzb3VyY2VzKSB7XG4gICAgICAgIGZzLndyaXRlSlNPTkFzeW5jKFxuICAgICAgICAgIGpzb25SZXNvdXJjZXNEaXIgKyBncm91cCArICcuanNvbicsXG4gICAgICAgICAgcmVzdWx0LlJlc291cmNlc1tncm91cF1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdGaW5pc2hlZC4nKTtcbiAgICB9KTtcbn1cblxubGV0IHNlbGVjdGlvbiA9IHByb2Nlc3MuYXJndlsyXTtcbmlmIChzZWxlY3Rpb24gPT09ICdkb3dubG9hZCcpIHtcbiAgZG93bmxvYWRQYWdlcygpO1xufSBlbHNlIGlmIChzZWxlY3Rpb24gPT09ICdnZW5lcmF0ZS1qc29uJykge1xuICBnZW5lcmF0ZUpzb24oKTtcbn0gZWxzZSB7XG4gIGNvbnNvbGUubG9nKCdJbnZhbGlkIGNvbW1hbmQuJyk7XG59XG4iXX0=