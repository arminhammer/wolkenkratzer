import fs from 'fs-extra';
import path from 'path';

const ec2info = require('../ec2info/www/instances.json');

const results = ec2info.map(i => {
  return {
    arch: i.arch,
    instance_type: i.instance_type,
    linux_virtualization_types: i.linux_virtualization_types
  };
});

fs
  .writeJson(path.resolve(__dirname, '..', 'ec2info.json'), results)
  .then(() => {
    console.debug('Finished.');
  })
  .catch(console.error);
