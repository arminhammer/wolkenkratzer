'use strict';

// replace with const wk = require('wolkenkratzer')
const wk = require('../dist/index');

let t = new wk.Template();

let vpcCiderParam = new wk.Parameter('VPCCIDR', {
  Type: 'String',
  Default: '10.0.0.0/16'
});
t.add(vpcCiderParam);

let vpnGateway = new wk.EC2.VPNGateway('VPNGateway');
vpnGateway.Type = 'ipsec.1';
t.add(vpnGateway);

t.toJsonAsync((errors, template) => {
  if (errors) {
    // console.log(errors)
    console.log(template);
  } else {
    console.log(template);
  }
});
