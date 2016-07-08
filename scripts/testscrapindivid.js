/**
 * Created by arming on 6/26/16.
 */
'use strict'

const BPromise = require('bluebird')
const Xray = require('x-ray')
const x = Xray()

let properties = {}

let link = 'http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-blockdev-template.html'

let subLink = BPromise.promisify(x(link, {
  name: '.topictitle',
  titles: ['dt'],
  attributes: x('dd', [['p']])
}))
subLink()
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
        console.log('attr: ' + attr)
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
        } else if (attributes.Type.startsWith('Listof')) {
          attributes.Type = [attributes.Type.replace(/^Listof/, '')]
        }
      }
      result.properties[obj.titles[i]] = attributes
    }
    properties[result.name] = result
  }
    )
  .catch((err) => {
    console.error(err)
  })
  .then(() => {
    console.log('result:')
    console.log(JSON.stringify(properties, null, 2))
  })
