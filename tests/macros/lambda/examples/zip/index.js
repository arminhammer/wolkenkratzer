const aws = require('aws-sdk');
const include = require('./src/include');

exports.handler = (event, context, callback) => {
  callback(null, 'Hello from Default Function');
};
