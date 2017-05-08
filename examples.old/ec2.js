'use strict';

// replace with const wk = require('wolkenkratzer')
const wk = require('../dist/index');
const aws = require('aws-sdk');
const ec2 = new aws.EC2({ region: 'us-east-1' });

let t = new wk.Template();

let ec21 = new wk.EC2.Instance('ec21');
ec21.ImageId = 'ami-2a69aa47';

t.add(ec21);

ec2.describeInstances({}, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    let instance = data.Reservations[0].Instances[0];
    delete instance.NetworkInterfaces;
    let ec22 = new wk.EC2.Instance('ec22', instance);
    t.add(ec22);
    console.log(t.toJson().Template);
  }
});
