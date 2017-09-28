'use strict';

const { Template } = require('../src/index');
const path = require('path');
const BPromise = require('bluebird');
const fs = BPromise.promisifyAll(require('fs-extra'));
const yaml = require('js-yaml');
const schema = require('cloudformation-schema-js-yaml');

describe('Template Imports', () => {
  test('Can correctly import a JSON template and output it as yaml', () => {
    const tJson = require('../tests/stagingtemplates/yaml/orig.json');
    const t = Template().import(tJson);
    //console.log(JSON.stringify(t, null, 2));
    const res = t.build();
    const genYaml = t.yaml();
    //console.log(__dirname);
    return fs
      .readFile(path.resolve(__dirname, 'stagingtemplates/yaml/target.yml'))
      .then(yamlString => {
        expect(res).toEqual(tJson);
        const yamlGenObject = yaml.safeLoad(genYaml, { schema: schema });
        const yamlTargetObject = JSON.parse(
          JSON.stringify(yaml.safeLoad(yamlString, { schema: schema }))
        );
        //console.log(targetString);
        //console.log('gen');
        //console.log(genYaml);
        expect(yamlGenObject).toEqual(yamlTargetObject);
      });
  });
});
