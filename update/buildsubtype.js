/**
 * Created by arming on 6/26/16.
 */
'use strict';

const BPromise = require('bluebird')
const fs = BPromise.promisifyAll(require('fs-extra'))

let props = fs
  .readJsonAsync('./properties.json')
  .then((file) => {
    let subProp = file['AmazonElasticBlockStoreBlockDeviceProperty']
    console.log(subProp)
    let result = ''
    result += 'class ' + subProp.name + ' extends wolkenkratzer.SubPropertyObject {\n'
    result += '  constructor(propertiesObject) \n'
    result += '    let properties = {\n'
    for(let prop in subProp.properties) {
      //console.log(prop)
      result += '      ' + prop + ': new wolkenkratzer.ResourceProperty(' + subProp.properties[prop].Type + ', ' + subProp.properties[prop].Required + ', null)\n'
    }
    result += '    super(properties, propertiesObject)\n'
    result += '  }\n'
    result += '}\n'
    console.log('result:')
    console.log(result)
  })
