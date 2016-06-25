/**
 * Created by arming on 6/25/16.
 */
'use strict';

//const Xray = require('x-ray');
const BPromise = require('bluebird')
const Xray = require('x-ray')
const x = Xray();
const fs = BPromise.promisifyAll(require('fs-extra'))

let properties = {}

let links = BPromise.promisify(x('http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-product-property-reference.html', ['.highlights li a@href']))

links()
  .mapSeries((link) => {
    let subLink = BPromise.promisify(x(link, {
      name: '.topictitle',
      titles: ['dt'],
      attributes: x('.variablelist', 'dd', [{
        Description: 'p:nth-child(1)',
        Required: 'p:nth-child(2)',
        Type: 'p:nth-child(3)'
      }])
    }))
    return subLink()
      .then((obj) => {
        console.log('obj')
        console.log(obj)
        let result = {
          name: obj.name.replace(/\s/g,''),
          properties: {}
        }
        for(let i = 0; i < obj.titles.length; i++) {
          if(obj.attributes[i].Required) {
            obj.attributes[i].Required = obj.attributes[i].Required.replace(/Required: /g,'')
            if(!((obj.attributes[i].Required === 'Yes') || (obj.attributes[i].Required === 'No'))) {
              obj.attributes[i].Required = 'Conditional'
            }
          }
          if(obj.attributes[i].Type) {
            obj.attributes[i].Type = obj.attributes[i].Type.replace(/Type: /g,'').replace(/\s/g,'')
          }
          result.properties[obj.titles[i]] = obj.attributes[i]
        }
        properties[result.name] = result
      })
      .catch((err) => {
        console.error(err)
      })
  })
  .then(() => {
    //if(err) console.log(err)
    //else {
    console.log('result:')
    fs
      .writeJsonAsync('./properties.json', properties)
      .then(() => {
        console.log('Finished writing properties.json')
      })
    //console.log(JSON.stringify(properties, null, 2))
    //BPromise.mapSeries(links)
    //}
  })

/*
 {
 links: x('.highlights li a@href', {
 name: '.topictitle',
 titles: ['dt']
 })
 }
 */

/*
 x('http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-origin.html', {
 name: '.topictitle',
 titles: ['dt'],
 attributes: x('.variablelist', 'dd', [{
 Description: 'p:nth-child(1)',
 Required: 'p:nth-child(2)',
 Type: 'p:nth-child(3)'
 }])
 })
 ((err, obj) => {
 if (err) console.log(err)
 let result = {
 name: obj.name.replace(/ /g,''),
 properties: {}
 }
 for(let i = 0; i < obj.titles.length; i++) {
 obj.attributes[i].Required = obj.attributes[i].Required.replace(/Required: /g,'')
 if(!((obj.attributes[i].Required === 'Yes') || (obj.attributes[i].Required === 'No'))) {
 obj.attributes[i].Required = 'Conditional'
 }
 obj.attributes[i].Type = obj.attributes[i].Type.replace(/Type: /g,'')
 result.properties[obj.titles[i]] = obj.attributes[i]
 }
 properties[result.name] = result
 console.log(JSON.stringify(properties, null, 2))
 })
 */