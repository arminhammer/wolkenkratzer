/**
 * Created by arming on 9/19/16.
 */

'use strict'

const wk = require('./../index')

let t = new wk.Template()

let topic = new wk.SNS.Topic('topic')
topic.DisplayName = 'name'
topic.TopicName = 'name'
topic.Subscription.push({
  'Endpoint': 'endpoint',
  'Protocol': 'email'
})
t.add(topic)

console.log(t.toJson().Template)