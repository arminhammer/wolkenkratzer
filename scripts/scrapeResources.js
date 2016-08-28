/**
 * Created by arming on 6/25/16.
 */
'use strict'

const BPromise = require('bluebird')
const Xray = require('x-ray')
const x = Xray()
const fs = BPromise.promisifyAll(require('fs-extra'))

let properties = {}

let links = BPromise.promisify(x('http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html', ['.highlights li a@href']))

links()
.mapSeries((link) => {
  let subLink = BPromise.promisify(x(link, {
    name: '.topictitle',
    titles: ['dt'],
    attributes: x('dd', [['p']])
  }))
  return subLink()
  .then((obj) => {
    console.log('obj')
    console.log(obj)
    let result = {
      name: obj.name.replace(/\s/g, ''),
      properties: {}
    }
    for (let i = 0; i < obj.titles.length; i++) {
      let attributes = { Description: '' }
      obj.attributes[i].forEach((attr) => {
        if (attr.startsWith('Type:')) {
          attributes.Type = attr
        } else if (attr.startsWith('Required:')) {
          attributes.Required = attr
        } else {
          attributes.Description += attr
        }
      })
      if (attributes.Required) {
        attributes.Required = attributes.Required.replace(/Required: /g, '')
        if (!((attributes.Required === 'Yes') || (attributes.Required === 'No'))) {
          attributes.Required = 'Conditional'
        }
      }
      if (attributes.Type) {
        attributes.Type = attributes.Type.replace(/Type: /g, '').replace(/\s/g, '')
        if (attributes.Type === 'Mappingofkey-valuepairs') {
          attributes.Type = 'Map'
        } else if (attributes.Type.startsWith('Listof') || attributes.Type.startsWith('listof') || attributes.Type.startsWith('Alistof')) {
          let val = attributes.Type.replace(/^Listof/, '').replace(/^listof/, '').replace(/^Alistof/, '').replace(/\./g, '')
          if (val === 'strings') {
            val = 'String'
          }
          attributes.Type = [val]
        }
        result.properties[obj.titles[i]] = attributes
      } else if (result.name === 'AWS::Events::Rule' && obj.titles[i] === 'ScheduleExpression') {
        /* Make an exception for ScheduleExpression */
        attributes.Type = 'String'
        result.properties[obj.titles[i]] = attributes
      }
    }
    properties[result.name] = result
  })
  .catch((err) => {
    console.error(err)
  })
})
.then(() => {
  console.log('result:')
  fs
  .writeJsonAsync('./resources.json', properties)
  .then(() => {
    console.log('Finished writing resources.json')
  })
})
