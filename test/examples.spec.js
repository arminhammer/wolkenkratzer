'use strict';

const path = require('path');
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs-extra'));
const ava = require('ava');
const wk = require(path.join(__dirname, '..', 'index'));
const execFile = require('child_process').execFile;

let templatesDir = './test/templates';
let files = fs.readdirSync(templatesDir);

files.forEach(fileName => {
  ava(fileName, test => {
    let file = '';
    return fs
      .readJsonAsync(path.join(__dirname, 'templates', fileName))
      .then(readFile => {
        file = readFile;
        return new Promise((resolve, reject) => {
          execFile(
            'node',
            [fileName.replace('.json', '.js')],
            { cwd: path.join(__dirname, '..', 'examples') },
            (error, stdout, stderr) => {
              if (error) {
                reject(error);
              } else if (stderr) {
                reject(stderr);
              }
              resolve(stdout);
            }
          );
        });
      })
      .then(result => {
        let jsonString = JSON.parse(result);
        test.deepEqual(jsonString, file);
      })
      .catch(e => {
        console.error('Failed!!!');
        console.error(e);
        test.fail();
      });
  });
});
