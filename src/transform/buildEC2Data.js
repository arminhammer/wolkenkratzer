const fs = require('fs-extra');
const path = require('path');
const ec2info = require('../ec2info/www/instances.json');

const results = ec2info.map(i => {
  return {
    instance_type: i.instance_type,
    linux_virtualization_types: i.linux_virtualization_types,
    arch: i.arch
  };
});

console.log(results);

fs
  .writeJson(path.resolve(__dirname, '..', 'ec2info.json'), results)
  .then(() => {
    console.log('Written');
  })
  .catch(console.error);
