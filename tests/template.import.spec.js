'use strict';

const { Template } = require('../src/index');
const path = require('path');
const BPromise = require('bluebird');
const fs = BPromise.promisifyAll(require('fs-extra'));
//const execFile = require('child_process').execFile;

let templatesDir = './tests/templates';
let files = fs.readdirSync(templatesDir);

describe('Template Imports', () => {
  test('Can take an existing Template as a parameter', () => {
    const tJson = require('../tests/templates/ami.json');
    const t = Template().import(tJson);
    let res = t.build();
    expect(res).toEqual(tJson);
  });

  test('Can correctly import a template that has an ASG and a array ref', () => {
    const tJson = require('../tests/stagingtemplates/asgarray.json');
    const t = Template().import(tJson);
    let res = t.build();
    expect(res).toEqual(tJson);
  });

  /*
  files.map(fileName => {
    test(`Test importing ${fileName}`, () => {
      const templateJSON = require(path.resolve(templatesDir, fileName));
      const t = Template().import(templateJSON);
      //console.log(t);
      let res = t.build();
      expect(res).toEqual(templateJSON);
    });
  });*/
});
