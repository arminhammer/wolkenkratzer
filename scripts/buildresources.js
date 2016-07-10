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
    header += 'const ResourceAttributeArray = require(\'./../resourceattribute\').ResourceAttributeArray\n'
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
      resourceBody += 'class ' + resourceName + ' extends WKResource {\n'
      resourceBody += '  constructor (name, propertiesObject) {\n'
      resourceBody += '    let resourceType = \'' + subProp.name + '\'\n'
      resourceBody += '    let properties = {\n'
      let props = Object.keys(subProp.properties)
      for (let i = 0; i < props.length; i++) {
        let wkType = 'ResourceAttribute'
        let propType = subProp.properties[ props[ i ] ].Type
        if (propType === 'Type::ListofAWS::Route53::RecordSetobjects,asshowninthefollowingexample:') {
          propType = ['RecordSet']
        }
        if (Array.isArray(propType)) {
          wkType = 'ResourceAttributeArray'
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
        if (name === 'Tags') {
          resourceBody += '      ' + name + ': new tag.TagSet()'
        } else {
          resourceBody += '      ' + name + ': new ' + wkType + '(\'' + name + '\', ' + propType + ', \'' + subProp.properties[ props[ i ] ].Required + '\', null)'
        }

        docHeader += '* @property {' + docType + '} ' + name + ' Required: ' + subProp.properties[ props[ i ] ].Required + '. ' + subProp.properties[ props[ i ] ].Description + '\n'

        if (i === (props.length - 1)) {
          resourceBody += '\n'
        } else {
          resourceBody += ',\n'
        }
      }
      resourceBody += '    }\n'
      resourceBody += '    super(name, resourceType, properties, propertiesObject)\n'
      resourceBody += '  }\n'
      resourceBody += '}\n\n'

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
