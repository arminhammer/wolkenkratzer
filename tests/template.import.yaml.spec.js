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
    let res = t.build();
    fs.readFile('./stagingtemplates/yaml/target.yml').then(yaml => {
      //expect(res).toEqual(yaml);
      expect(res).toEqual(tJson);
    });
  });
});
