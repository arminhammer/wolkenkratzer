'use strict'
const Promise = require('bluebird')
const fs = Promise.promisifyAll(require('fs-extra'))
const toc = require('markdown-toc');

let doc = ''
let resourceDir = 'json/resources/'
fs.readdirAsync(resourceDir)
.then((files) => {
  doc += '# Resources\n'
  let filePromises = []
  files.forEach((f) => {
    filePromises.push(fs.readJsonAsync(resourceDir + f))
  })
  return filePromises
})
.mapSeries((f) => {
  let groupName = f[Object.keys(f)[0]].Name.split('::')[1]
  doc += '## ' + groupName + '\n'
  for (let item in f) {
    doc += buildBlock(f[item])
  }
})
.then(() => {
  return fs.readJsonAsync('json/properties/properties.json')
})
.then((properties) => {
  doc += '# Resource Attribute Properties\n'
  for (let item in properties) {
    doc += buildBlock(properties[item])
  }
})
.then(() => {
  let finalTOC = toc(doc).content;
  doc = finalTOC + '\n\n' + doc;
  return fs.writeFileAsync('doc.md', doc)
})
.then((result) => {
  console.log('Complete.')
})
.catch((e) => {
  console.error('failed.')
  console.error(e)
})

function buildBlock(content) {
  let block = '### ' + content.Name + '\n'
  block += '#### Properties\n'
    for(let prop in content.Properties) {
      let type = content.Properties[prop].Type
      if(type !== 'String' && type !== 'Boolean' && type !== 'Number' && type !== 'Map' && type !== 'Object' && type !== 'Date') {
        type = '[' + type + '](#' + type.toLowerCase() + ')'
        //console.log(type)
      }
      block += '##### ' + prop + '\n'
      block += content.Properties[prop].Description + '\n\n'
      block += '| Array    | Type     | Required |\n'
      block += '|----------|----------|----------|\n'
      block += '|' + content.Properties[prop].Array + '|' + type + '|' + content.Properties[prop].Required + '|\n\n'
    }
  block += '\n'
  return block
}