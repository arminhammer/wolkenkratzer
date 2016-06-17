/**
 * Created by arming on 6/2/16.
 */
const cloudpotato = require('./index')
const s3 = require('./resources/s3')
const ec2 = require('./resources/ec2')

let t = new cloudpotato.Template()

let vpnGateway = new ec2.VPNGateway('VPNGateway')
vpnGateway.Type = 'ipsec.1'
t.addResource(vpnGateway)

// console.log(JSON.stringify(t, null, 2))
console.log('toJson():')
// console.log(t.toJson())
console.log(t.toJson())
