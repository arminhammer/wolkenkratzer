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
  .then(result => console.log(JSON.stringify(result.build(), null, 2)))
  .catch(console.error);
