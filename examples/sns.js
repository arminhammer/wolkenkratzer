'use strict';

// replace with const wk = require('wolkenkratzer')
const wk = require('../index');

let t = new wk.Template();

let topic = new wk.SNS.Topic('topic');
topic.DisplayName = 'name';
topic.TopicName = 'name';
topic.Subscription.push({
  Endpoint: 'endpoint',
  Protocol: 'email'
});
t.add(topic);

let result = t.toJson();
if (result.Errors) {
  //console.error(result.Errors)
}
console.log(t.toJson().Template);
