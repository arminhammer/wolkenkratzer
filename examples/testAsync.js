/**
 * Created by arming on 6/2/16.
 */
'use strict';

const wk = require('./../index')

let t = new wk.Template()

let vpcCiderParam = new wk.Parameter('VPCCIDR', { Type: 'String', Default: '10.0.0.0/16' })
t.addParameter(vpcCiderParam)

let vpnGateway = new wk.EC2.VPNGateway('VPNGateway')
vpnGateway.Type = 'ipsec.1'
t.addResource(vpnGateway)

/* let result = t.toJson()
console.log('errors:')
console.error(result.Errors)
console.log('template:')
console.log(result.Template)
*/

t.toJsonAsync((errors, template) => {
  if(errors) {
    console.log(errors)
    console.log(template)
  } else {
    console.log(template)
  }
})

/*
t.toJsonAsync()
.then((template) => {
  console.log(template)
})
.catch((e) => {
  console.log(e.Errors)
  console.log(e.Template)
})
*/
