'use strict';

// replace with const wk = require('wolkenkratzer')
const wk = require('./../index');

let t = new wk.Template();

let topic0 = new wk.SNS.Topic('topic0');
topic0.DisplayName = 'name';
topic0.TopicName = 'name';
topic0.Subscription.push({
  Endpoint: 'endpoint',
  Protocol: 'email'
});
t.add(topic0);

let topic1 = new wk.SNS.Topic('topic1');
topic1.DisplayName = 'name';
topic1.TopicName = 'name';
topic1.Subscription.push({
  Endpoint: 'endpoint',
  Protocol: 'email'
});
t.add(topic1);

t.remove(topic0);

let result = t.toJson();
if (result.Errors) {
  // console.error(result.Errors)
}
console.log(t.toJson().Template);
