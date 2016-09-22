/**
 * Created by arming on 6/26/16.
 */
'use strict'

const BPromise = require('bluebird')
const fs = BPromise.promisifyAll(require('fs-extra'))

fs
.readJsonAsync('./properties.json')
.then((file) => {
  let result = ''
  result += '\'use strict\'\n\n'
  result += 'const ResourceProperty = require(\'./resource\').ResourceProperty\n'
  result += 'const ResourceAttribute = require(\'./resourceattribute\').ResourceAttribute\n\n'
  result += '/** @module Types' + ' */\n\n'

  let exportList = []

  for (let subType in file) {
    let subProp = file[subType]
    exportList.push(subType + ': ' + subType)
    let docHeader = ''
    docHeader += '/**\n'
    let body = ''
    body += 'function ' + subProp.name + ' (propertiesObject) {\n'
    // body += '  constructor (propertiesObject) {\n'
    body += '  let properties = {\n'
    let props = Object.keys(subProp.properties)
    for (let i = 0; i < props.length; i++) {
      let wkType = 'ResourceAttribute'
      let propType = subProp.properties[ props[ i ] ].Type
      let isArray = false
      if (Array.isArray(propType)) {
        //wkType = 'ResourceAttributeArray'
        isArray = true
        propType = propType[0]
      }
      if ((props[i] === 'LambdaConfigurations') || (props[i] === 'QueueConfigurations') || (props[i] === 'TopicConfigurations')) {
        console.log(props[i])
      }
      if (typeof propType === 'string') {
        propType = propType.replace(/\./g, '')
        if (propType.includes('JSON')) {
          propType = 'Object'
        }
      }
      let name = props[i].replace(/ \(.+\)/g, '')
      let isValid = true
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
        case 'OriginCustomHeadertype':
          propType = 'CloudFrontDistributionConfigOriginOriginCustomHeader'
          break
        case 'CloudWatchAlarmactionobject':
          propType = 'AWSIoTCloudwatchAlarmAction'
          break
        case 'CloudWatchMetricactionobject':
          propType = 'AWSIoTCloudwatchMetricAction'
          break
        case 'DynamoDBactionobject':
          propType = 'AWSIoTDynamoDBAction'
          break
        case 'Elasticsearchactionobject':
          propType = 'AWSIoTElasticsearchAction'
          break
        case 'Firehoseactionobject':
          propType = 'AWSIoTFirehoseAction'
          break
        case 'Kinesisactionobject':
          propType = 'AWSIoTKinesisAction'
          break
        case 'Lambdaactionobject':
          propType = 'AWSIoTLambdaAction'
          break
        case 'Republishactionobject':
          propType = 'AWSIoTRepublishAction'
          break
        case 'S3actionobject':
          propType = 'AWSIoTS3Action'
          break
        case 'Snsactionobject':
          propType = 'AWSIoTSnsAction'
          break
        case 'Sqsactionobject':
          propType = 'AWSIoTSqsAction'
          break
        case 'ArrayofActionobjects':
          propType = 'AWSIoTActions'
          break
        case undefined:
          if (name === 'PolicyName') {
            propType = 'String'
          } else if (name === 'blacklist' ||
          name === 'whitelist' ||
          name === 'none' ||
          name === 'KEYS_ONLY' ||
          name === 'INCLUDE' ||
          name === 'ALL' ||
          name === 'event' ||
          name === 'context' ||
          name === 'responseStatus' ||
          name === 'responseData' ||
          name === 'physicalResourceId') {
            isValid = false
          }
          break
        default:
          break
      }
      let required = subProp.properties[ props[ i ] ].Required
      if (!required || name === 'IndexDocument') {
        // If not determined, default to No
        required = 'No'
      }
      if (isValid) {
        body += '    ' + name + ': new ' + wkType + '(\'' + name + '\', ' + propType + ', ' + isArray + ', \'' + required + '\', null)'
      }
      if (isValid && i === (props.length - 1)) {
        body += '\n'
      } else if (isValid) {
        body += ',\n'
      }

      docHeader += '* @property ' + name + ' {' + propType + '} Required: ' + required + '.'
      if (subProp.properties[ props[ i ] ].Description) {
        docHeader += ' ' + subProp.properties[ props[ i ] ].Description.replace(/\n/g, ' ').trim() + '\n'
      } else {
        docHeader += '\n'
      }
    }
    body += '  }\n'
    body += '  ResourceProperty.call(this, \'' + subProp.name + '\', properties, propertiesObject)\n'
    // body += '  }\n'
    body += '}\n'
    body += subProp.name + '.prototype = Object.create(ResourceProperty.prototype)\n\n'
    docHeader += '*/\n'
    result += docHeader
    result += body
  }

  result += 'module.exports = {\n'
  for (let i = 0; i < exportList.length; i++) {
    let ending = ',\n'
    if (i === (exportList.length - 1)) {
      ending = '\n'
    }
    result += '  ' + exportList[i] + ending
  }
  result += '}\n'
  return result
})
.then((result) => {
  return fs.writeFileAsync('../types.js', result)
})
.then(() => {
  console.log('Finished writing file.')
})
