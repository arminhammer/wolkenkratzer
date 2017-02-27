'use strict';

// replace with const wk = require('wolkenkratzer')
const wk = require('../index');

let t = new wk.Template();

let vpcCiderParam = new wk.Parameter('VPCCIDR', {
  Type: 'String',
  Default: '10.0.0.0/16'
});
t.add(vpcCiderParam);

let vpnGateway = new wk.EC2.VPNGateway('VPNGateway');
vpnGateway.Type = 'ipsec.1';
t.add(vpnGateway);

let output = t.toJson();
if (output.Errors) {
  console.error(output.Errors);
} else {
  console.log(t.toJson().Template);
}
