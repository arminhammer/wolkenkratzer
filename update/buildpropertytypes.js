/**
 * Created by arming on 6/26/16.
 */
'use strict';

const BPromise = require('bluebird')
const fs = BPromise.promisifyAll(require('fs-extra'))

let props = fs
  .readJsonAsync('./properties.json')
  .then((file) => {
    let result = ''
    result += '\'use strict\'\n\n'
    result += 'const SubPropertyObject = require(\'./../../baseawsobject\').SubPropertyObject\n'
    result += 'const ResourceArray = require(\'./../../resourceproperty\').ResourceArray\n'
    result += 'const ResourceProperty = require(\'./../../resourceproperty\').ResourceProperty\n\n'
    //result += 'const wolkenkratzer = require(\'./../../index\')\n\n'
    let exportList = []

    for(let subType in file) {
      let subProp = file[subType]
      console.log(subProp)
      exportList.push(subType + ': ' + subType)
      result += 'class ' + subProp.name + ' extends SubPropertyObject {\n'
      result += '  constructor(propertiesObject) {\n'
      result += '    let properties = {\n'
      let props = Object.keys(subProp.properties)
      for (let i = 0; i < props.length; i++) {
        let wkType = 'ResourceProperty'
        let propType = subProp.properties[ props[ i ] ].Type
        if(Array.isArray(propType)) {
          wkType = 'ResourceArray'
          propType = propType[0]
        }
        if(typeof propType === 'string') {
          propType = propType.replace(/\./g, '')
          if(propType.includes('JSON')) {
            propType = 'Object'
          }
        }
        switch(propType) {
          case 'Integer':
            propType = 'Number'
          case 'AutoScalingEBSBlockDevice':
            propType = 'AWSCloudFormationAutoScalingEBSBlockDevicePropertyType'
          case 'CacheBehavior':
            propType = 'CloudFrontDistributionConfigCacheBehavior'
          case 'DefaultCacheBehaviortype':
            propType = 'CloudFrontDefaultCacheBehavior'
          case 'Loggingtype':
            propType = 'CloudFrontLogging'
          case 'Origins':
            propType = 'CloudFrontDistributionConfigOrigin'
          case 'ForwardedValuestype':
            propType = 'CloudFrontForwardedValues'
          case 'CustomOrigintype':
            propType = 'CloudFrontDistributionConfigOriginCustomOrigin'
          case 'S3Origintype':
            propType = 'CloudFrontDistributionConfigOriginS3Origin'
          case 'anemptymap:{}':
            propType = 'Map'
          case 'PrivateIpAddressSpecification':
            propType = 'EC2NetworkInterfacePrivateIPSpecification'
          case 'Key-valuepairs,withthenameofthelabelasthekeyandthelabelvalueasthevalue':
            propType = 'Map'
          case 'Key-valuepairs,withtheoptionnameasthekeyandtheoptionvalueasthevalue':
            propType = 'Map'
          case 'String-to-stringmap':
            propType = 'Map'
          case 'Stringtostringmap':
            propType = 'Map'

        }
        let name = props[i].replace(/ \(.+\)/g,'')
        result += '      ' + name + ': new ' + wkType + '(' + propType + ', \'' + subProp.properties[ props[ i ] ].Required + '\', null)'
        if (i === (props.length - 1)) {
          result += '\n'
        } else {
          result += ',\n'
        }
      }
      result += '    }\n'
      result += '    super(properties, propertiesObject)\n'
      result += '  }\n'
      result += '}\n\n'
    }
    result += 'module.exports = {\n'
    for(let i = 0; i < exportList.length; i++) {
      let ending = ',\n'
      if(i === (exportList.length - 1)) {
        ending = '\n'
      }
      result += exportList[i] + ending
    }
    result += '}'
    console.log('result:')
    console.log(result)
    return result
  })
  .then((result) => {
    return fs.writeFileAsync('../resources/propertytypes/propertytypes.js', result)
  })
  .then(() => {
    console.log('Finished writing file.')
  })
