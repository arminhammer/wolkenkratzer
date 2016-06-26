/**
 * Created by arming on 6/26/16.
 */
'use strict';

const BPromise = require('bluebird')
const fs = BPromise.promisifyAll(require('fs-extra'))

let groups = {}

let props = fs
  .readJsonAsync('./resources.json')
  .then((file) => {
    let header = ''
    header += '\'use strict\'\n\n'
    header += 'const wolkenkratzer = require(\'./../index\')\n'
    header += 'const propertyTypes = require(\'./propertytypes/propertytypes\')\n\n'
    //let exportList = []

    for(let subType in file) {
      let subProp = file[subType]
      //console.log(subProp)
      let resourceName = subProp.name.replace(/AWS::\w+::/g,'')
      let exportLine = (resourceName + ': ' + resourceName)
      let resourceBody = ''
      resourceBody += 'class ' + resourceName + ' extends wolkenkratzer.BaseAWSObject {\n'
      resourceBody += '  constructor(name, propertiesObject) {\n'
      resourceBody += '    let resourceType = \'' + subProp.name + '\'\n'
      resourceBody += '    let properties = {\n'
      let props = Object.keys(subProp.properties)
      for (let i = 0; i < props.length; i++) {
        let wkType = 'ResourceProperty'
        let propType = subProp.properties[ props[ i ] ].Type
        if(propType === 'Type::ListofAWS::Route53::RecordSetobjects,asshowninthefollowingexample:') {
          //console.log('Hit')
          propType = ['RecordSet']
        }
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
          case 'Timestamp':
            propType = 'Date'
          case 'StringValidvaluesare"basic"or"S3"':
            propType = 'String'
          case 'String(1–1600chars)':
            propType = 'String'
          case 'key-valuepairs':
            propType = 'Map'
          case 'referencestoAWS::IAM::RolesCurrently,amaximumofonerolecanbeassignedtoaninstanceprofile':
            propType = 'String'
        }
        if(!((propType === 'String') ||
          (propType === 'Date') ||
          (propType === 'Number') ||
          (propType === 'Boolean') ||
          (propType === 'Map') ||
          (propType === 'Object') ||
          (propType === 'RecordSet')
          )) {
          propType = 'propertyTypes.' + propType
        }
        let name = props[i].replace(/ \(.+\)/g,'')
        if(name === 'Tags') {
          resourceBody += '      ' + name + ': new wolkenkratzer.TagSet()'
        } else {
          resourceBody += '      ' + name + ': new wolkenkratzer.' + wkType + '(' + propType + ', \'' + subProp.properties[ props[ i ] ].Required + '\', null)'
        }

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

      let groupName = subProp.name.replace(/^AWS::/,'').replace(/::\w+$/,'')
      if(groups[groupName]) {
        groups[groupName].body += resourceBody
        groups[groupName].exports.push(exportLine)
      } else {
        groups[groupName] = {
          body: header + resourceBody,
          exports: [exportLine]
        }
      }
    }
  })
  /*.then((resourceBody) => {
    return fs.writeFileAsync('../resources/autogenresources/resources.js', resourceBody)
  })*/
  .then(() => {
    return Object.keys(groups)
  })
  .mapSeries((group) => {
    let exportBody = 'module.exports = {\n'
    for(let i = 0; i < groups[group].exports.length; i++) {
      let ending = ',\n'
      if(i === (groups[group].exports.length - 1)) {
        ending = '\n'
      }
      exportBody += '  ' + groups[group].exports[i] + ending
    }
    exportBody += '}'
    //console.log('resourceBody:')
    //console.log(resourceBody)
    //return resourceBody
    return fs.writeFileAsync('../resources/' + group.toLowerCase() + '.js', groups[group].body + exportBody)
  })
  .then(() => {
    console.log('Finished writing resource file.')
  })
