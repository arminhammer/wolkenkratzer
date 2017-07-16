const aws = require('aws-sdk');

exports.handler = (event, context, callback) => {
  callback(null, 'Hello from Default Function');
};
