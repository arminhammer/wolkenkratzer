/**
 * Created by arming on 6/26/16.
 */
'use strict'

const BPromise = require('bluebird')
const fs = BPromise.promisifyAll(require('fs-extra'))

let groups = {}

fs
  .readJsonAsync('./resources.json')
  .then((file) => {
    let header = ''
    header += '\'use strict\'\n\n'
    header += 'const WKResource = require(\'./../resource\').WKResource\n'
    header += 'const ResourceAttribute = require(\'./../resourceattribute\').ResourceAttribute\n'
    header += 'const tag = require(\'./../tag\')\n'
    header += 'const types = require(\'./../types\')\n\n'

    for (let subType in file) {
      let subProp = file[subType]
      let groupName = subProp.name.replace(/^AWS::/, '').replace(/::\w+$/, '')

      let resourceName = subProp.name.replace(/AWS::\w+::/g, '')
      // Lambda's Function in this case conflicts with Javascript Function.
      if (resourceName === 'Function') {
        resourceName = 'LambdaFunction'
      }
      let exportLine = (resourceName + ': ' + resourceName)

      let docHeader = ''
      docHeader += '/** @memberof module:' + groupName + '\n'
      docHeader += '*   @extends WKResource\n'

      let resourceBody = ''
      resourceBody += 'function ' + resourceName + ' (name, propertiesObject) {\n'
      // resourceBody += '  constructor  {\n'
      resourceBody += '    let resourceType = \'' + subProp.name + '\'\n'
      resourceBody += '    let properties = {\n'
      let props = Object.keys(subProp.properties)
      for (let i = 0; i < props.length; i++) {
        let wkType = 'ResourceAttribute'
        let propType = subProp.properties[ props[ i ] ].Type
        if (propType === 'Type::ListofAWS::Route53::RecordSetobjects,asshowninthefollowingexample:') {
          propType = ['RecordSet']
        }
        let isArray = false
        if (Array.isArray(propType)) {
          isArray = true
          propType = propType[0]
        }
        if (typeof propType === 'string') {
          propType = propType.replace(/\./g, '')
          if (propType.includes('JSON')) {
            propType = 'Object'
          }
        }
        switch (propType) {
          case 'Integer':
            propType = 'Number'
            break
          case 'AutoScalingEBSBlockDevice':
            propType = 'AWSCloudFormationAutoScalingEBSBlockDevicePropertyType'
            break
          case 'CacheBehavior':
            propType = 'CloudFrontDistributionConfigCacheBehavior'
            break
          case 'DefaultCacheBehaviortype':
            propType = 'CloudFrontDefaultCacheBehavior'
            break
          case 'Loggingtype':
            propType = 'CloudFrontLogging'
            break
          case 'Origins':
            propType = 'CloudFrontDistributionConfigOrigin'
            break
          case 'ForwardedValuestype':
            propType = 'CloudFrontForwardedValues'
            break
          case 'CustomOrigintype':
            propType = 'CloudFrontDistributionConfigOriginCustomOrigin'
            break
          case 'S3Origintype':
            propType = 'CloudFrontDistributionConfigOriginS3Origin'
            break
          case 'anemptymap:{}':
            propType = 'Map'
            break
          case 'PrivateIpAddressSpecification':
            propType = 'EC2NetworkInterfacePrivateIPSpecification'
            break
          case 'Key-valuepairs,withthenameofthelabelasthekeyandthelabelvalueasthevalue':
            propType = 'Map'
            break
          case 'Key-valuepairs,withtheoptionnameasthekeyandtheoptionvalueasthevalue':
            propType = 'Map'
            break
          case 'String-to-stringmap':
            propType = 'Map'
            break
          case 'Stringtostringmap':
            propType = 'Map'
            break
          case 'Timestamp':
            propType = 'Date'
            break
          case 'StringValidvaluesare"basic"or"S3"':
            propType = 'String'
            break
          case 'String(1–1600chars)':
            propType = 'String'
            break
          case 'key-valuepairs':
            propType = 'Map'
            break
          case 'referencestoAWS::IAM::RolesCurrently,amaximumofonerolecanbeassignedtoaninstanceprofile':
            propType = 'String'
            break
          case 'EC2SecurityGroupRule':
            propType = 'EC2SecurityGroupRulePropertyType'
            break
          case 'WebsiteConfigurationType':
            propType = 'AmazonS3WebsiteConfigurationProperty'
            break
          case 'AliasTarget':
            propType = 'Route53AliasTargetProperty'
            break
          case 'NumberWeightexpectsintegervalues':
            propType = 'Number'
            break
          case 'DistributionConfigtype':
            propType = 'CloudFrontDistributionConfig'
            break
          case 'users':
            propType = 'String'
            break
          case 'AppCookieStickinessPolicyobjects':
            propType = 'ElasticLoadBalancingAppCookieStickinessPolicyType'
            break
          case 'LBCookieStickinessPolicyobjects':
            propType = 'ElasticLoadBalancingLBCookieStickinessPolicyType'
            break
          case 'ElasticLoadBalancingListenerPropertyTypeobjects':
            propType = 'ElasticLoadBalancingListenerPropertyType'
            break
          case 'ElasticLoadBalancingpolicyobjects':
            propType = 'ElasticLoadBalancingPolicyType'
            break
          case 'numbers':
            propType = 'Number'
            break
          case 'SNSSubscriptions':
            propType = 'AmazonSNSSubscriptionPropertyType'
            break
          case 'AmazonSNStopicsARNs':
            propType = 'String'
            break
          case 'RDSSecurityGroupRules':
            propType = 'AmazonRDSSecurityGroupRule'
            break
          case 'OptionSettings':
            propType = 'ElasticBeanstalkOptionSettingsPropertyType'
            break
          case 'SourceBundle':
            propType = 'ElasticBeanstalkSourceBundlePropertyType'
            break
          case 'Stringlist':
            propType = 'String'
            wkType = 'ResourceAttribute'
            break
          case 'routetableIDs':
            propType = 'String'
            break
          case 'RefID':
            propType = 'String'
            break
          case 'TopicRulePayloadobject':
            propType = 'AWSIoTTopicRulePayload'
            break
          case 'EC2MountPoints':
            propType = 'EC2MountPointPropertyType'
            break
          case 'NumberBgpAsnisalwaysanintegervalue':
            propType = 'Number'
            break
          case 'MetricDimension':
            propType = 'CloudWatchMetricDimensionPropertyType'
            break
          case 'EC2securitygroups':
            propType = 'String'
            break
          case 'BlockDeviceMappings':
            propType = 'AWSCloudFormationAutoScalingBlockDeviceMappingPropertyType'
            break
          case 'securitygroupsassignedtoyourloadbalancerwithinyourvirtualprivatecloud(VPC)':
            propType = 'String'
            break
          default:
            break
        }
        let docType = propType
        if (!((propType === 'String') ||
            (propType === 'Date') ||
            (propType === 'Number') ||
            (propType === 'Boolean') ||
            (propType === 'Map') ||
            (propType === 'Object') ||
            (propType === 'RecordSet')
          )) {
          propType = 'types.' + propType
        }
        let name = props[i].replace(/ \(.+\)/g, '')
        let required = subProp.properties[ props[ i ] ].Required
        if (!required) {
          // If not determined, default to No
          required = 'No'
        }
        if (name === 'Tags') {
          resourceBody += '      ' + name + ': new tag.TagSet()'
        } else {
          resourceBody += '      ' + name + ': new ' + wkType + '(\'' + name + '\', ' + propType + ', ' + isArray + ', \'' + required + '\', null)'
        }

        docHeader += '* @property {' + docType + '} ' + name + ' Required: ' + required + '. ' + subProp.properties[ props[ i ] ].Description + '\n'

        if (i === (props.length - 1)) {
          resourceBody += '\n'
        } else {
          resourceBody += ',\n'
        }
      }
      resourceBody += '    }\n'
      resourceBody += '    WKResource.call(this, name, resourceType, properties, propertiesObject)\n'
      // resourceBody += '  }\n'
      resourceBody += '}\n'
      resourceBody += resourceName + '.prototype = Object.create(WKResource.prototype)\n\n'
      docHeader += '*/\n'

      if (groups[groupName]) {
        groups[groupName].body += docHeader + resourceBody
        groups[groupName].exports.push(exportLine)
      } else {
        let moduleHeader = '/** @module ' + groupName + ' */\n\n'
        groups[groupName] = {
          body: header + moduleHeader + docHeader + resourceBody,
          exports: [exportLine]
        }
      }
    }
  })
  .then(() => {
    return Object.keys(groups)
  })
  .mapSeries((group) => {
    let exportBody = 'module.exports = {'
    for (let i = 0; i < groups[group].exports.length; i++) {
      let ending = ',\n'
      if (i === (groups[group].exports.length - 1)) {
        ending = '\n'
      }
      exportBody += '  ' + groups[group].exports[i] + ending
    }
    exportBody += '}\n'
    return fs.writeFileAsync('../resources/' + group.toLowerCase() + '.js', groups[group].body + exportBody)
  })
  .then(() => {
    console.log('Finished writing resource file.')
  })
