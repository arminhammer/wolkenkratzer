'use strict';

const path = require('path');
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs-extra'));
const ava = require('ava');
const wk = require(path.join(__dirname, '..', 'dist', 'index'));

let stubDir = './stubs/json/resources/';
let files = fs.readdirSync(stubDir);

files.forEach(file => {
  ava(file, test => {
    let t = new wk.Template();
    let groupName = file.replace('.json', '');
    return fs
      .readJsonAsync(stubDir + file)
      .then(resources => {
        for (let r in resources) {
          let newResource = new wk[groupName][r](r);
          t.add(newResource);
        }
      })
      .then(() => {
        // console.log(t.toJson().Template)
        test.pass();
      })
      .catch(e => {
        console.error('Failed!!!');
        console.error(e);
        test.fail();
      });
  });
});
