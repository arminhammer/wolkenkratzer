import fs from 'fs-extra';
import path from 'path';

/**
 * @hidden
 */
const ec2info = require('../ec2info/www/instances.json');

/**
 * @hidden
 */
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
    console.log('Finished.');
  })
  .catch(console.error);
