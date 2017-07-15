'use strict';

const path = require('path');
const BPromise = require('bluebird');
const fs = BPromise.promisifyAll(require('fs-extra'));
const execFile = require('child_process').execFile;

let templatesDir = './tests/templates';
let files = fs.readdirSync(templatesDir);

describe('Examples', () => {
  files.map(fileName => {
    let file = '';
    test(
      fileName,
      done => {
        let readFile = require(path.join(__dirname, 'templates', fileName));
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
        })
          .then(result => {
            let jsonString = JSON.parse(result);
            expect(jsonString).toEqual(file);
            done();
          })
          .catch(e => {
            expect(e).toBeNull();
            done();
          });
      },
      1000
    );
  });
});
