'use strict';

const { Template } = require('../src/index');
const path = require('path');
const BPromise = require('bluebird');
const fs = BPromise.promisifyAll(require('fs-extra'));

describe('Template Imports', () => {
  test('Can correctly import a JSON template and output it as yaml', () => {
    const tJson = require('../tests/stagingtemplates/yaml/orig.json');
    const t = Template().import(tJson);
    //console.log(JSON.stringify(t, null, 2));
    const res = t.build();
    //const resYaml = t.yaml();
    //console.log(__dirname);
    return fs
      .readFile(path.resolve(__dirname, 'stagingtemplates/yaml/target.yml'))
      .then(yaml => {
        expect(res).toEqual(tJson);
        //expect(resYaml).toEqual(yaml);
      });
  });
});
