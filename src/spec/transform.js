const stubs = require('./CloudFormationResourceSpecification.json');
const { writeFile } = require('fs-extra');
const { resolve } = require('path');

let output = {};
let groupList = [];

Object.keys(stubs.ResourceTypes)
  .sort()
  .forEach(r => {
    const [, group, resource] = r.split('::');
    if (!output[group]) {
      groupList.push(group);
      output[group] = { Resources: {}, Models: {} };
    }
    output[group].Resources[resource] = stubs.ResourceTypes[r];
    output[group].Resources[resource].Name = r;
  });

Object.keys(stubs.PropertyTypes)
  .sort()
  .forEach(r => {
    console.log(r);
    let [, group, resourceblock] = r.split('::');
    if (group && resourceblock) {
      const [resource, property] = resourceblock.split('.');
      output[group].Models[property] = stubs.PropertyTypes[r];
      output[group].Models[property].Name = r;
    } else {
      console.log('r: ', r);
    }
  });
//console.log(groupList.sort());

let resultString = '';
resultString += `export const resourceList = ${JSON.stringify(
  groupList.sort()
)}\n\n`;

Object.keys(output)
  .sort()
  .forEach(o => {
    resultString += `export const ${o} = ${JSON.stringify(
      output[o],
      null,
      2
    )}\n`;
  });

writeFile(resolve(__dirname, 'spec.ts'), resultString);
