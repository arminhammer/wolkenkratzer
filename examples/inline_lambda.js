const { buildInlineLambdaTemplate } = require('../dist/index');
const path = require('path');

buildInlineLambdaTemplate({
  path: path.resolve(__dirname, './data/inline/index.js'),
  name: 'MyGreatFunction',
  options: {
    MemorySize: 256
  },
  parameters: ['Role'],
  output: true
})
  .then(result => console.log(JSON.stringify(result.build(), 2, null)))
  .catch(console.error);
