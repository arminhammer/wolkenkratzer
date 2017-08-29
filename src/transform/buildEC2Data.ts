import fs from 'fs-extra';
import path from 'path';

const ec2info = require('../ec2info/www/instances.json');

const results = ec2info.map(i => {
  return {
    instance_type: i.instance_type,
    linux_virtualization_types: i.linux_virtualization_types,
    arch: i.arch
  };
});

fs
  .writeJson(path.resolve(__dirname, '..', 'ec2info.json'), results)
  .then(() => {})
  .catch(console.error);
