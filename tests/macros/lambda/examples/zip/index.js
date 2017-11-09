const include = require('./src/include');

exports.handler = (event, context, callback) => {
  console.log(include);
  callback(null, 'Hello from Default Function');
};
