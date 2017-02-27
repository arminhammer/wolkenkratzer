const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs-extra'));
const toc = require('markdown-toc');

result = '';

fs
  .readFileAsync('stubs/doc.md', 'utf8')
  .then(stubDoc => {
    //console.log(stubDoc);
    result += stubDoc;
  })
  .then(() => {
    let finalTOC = toc(result).content;
    //console.log(finalTOC);
    result = finalTOC + '\n\n' + result;
    return fs.writeFile('READMEnew.md', result);
  })
  .then(result => {
    console.log('Done.');
  })
  .catch(e => {
    console.error('Error.');
    console.error(e);
  });
