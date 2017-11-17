'use strict';

const path = require('path');
const bluebird = require('bluebird');
const fs = require('fs-extra');
const { execFile } = require('child_process');
const templatesDir = './tests/templates';
const files = fs.readdirSync(templatesDir);

describe('Examples', async () => files.map(async fileName =>
    test(
      fileName,
      async done => {
        const result: any = await new Promise((resolve, reject) => {
          execFile(
            'node',
            [fileName.replace('.json', '.js')],
            { cwd: path.resolve(__dirname, '..', 'examples') },
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
        expect(JSON.parse(result)).toEqual(
          require(path.join(__dirname, 'templates', fileName))
        );
        done();
      },
      600000
    )
  ));
