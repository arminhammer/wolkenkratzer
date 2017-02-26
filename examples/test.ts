/**
* Created by arming on 6/2/16.
*/
'use strict'

const wk = require('./../index')

let t = new wk.Template()

let vpcCiderParam = new wk.Parameter('VPCCIDR', { Type: 'String', Default: '10.0.0.0/16' })
t.add(vpcCiderParam)

let vpnGateway = new wk.EC2.VPNGateway('VPNGateway')
vpnGateway.Type = 'ipsec.1'
t.add(vpnGateway)

console.log(t.toJson().Template)
