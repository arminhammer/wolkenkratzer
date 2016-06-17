/**
 * Created by arming on 6/2/16.
 */
const cloudpotato = require('./index')
const s3 = require('./resources/s3')
const ec2 = require('./resources/ec2')

let t = new cloudpotato.Template()

let vpcCiderParam = new cloudpotato.Parameter('VPCCIDR', { Type: 'String', Default: '10.0.0.0/16' })
t.addParameter(vpcCiderParam)

/*let vpc = new ec2.VPC('VPC')
vpc.CidrBlock.ref(vpcCiderParam)
vpc.InstanceTenancy = 'default'
vpc.EnableDnsSupport = true
vpc.EnableDnsHostnames = true
t.addResource(vpc)*/

let vpnGateway = new ec2.VPNGateway('VPNGateway')
vpnGateway.Type = 'ipsec.1'
t.addResource(vpnGateway)

/*let igwGateway = new ec2.InternetGateway('InternetGateway')
t.addResource(igwGateway)

let vpcGatewayAttachment = new ec2.VPCGatewayAttachment('VPCGatewayAttachment')
vpcGatewayAttachment.InternetGatewayId.ref(igwGateway)
vpcGatewayAttachment.VpcId.ref(vpc)
vpcGatewayAttachment.VpnGatewayId.ref(vpnGateway)
t.addResource(vpcGatewayAttachment)*/

// console.log(JSON.stringify(t, null, 2))
console.log('toJson():')
// console.log(t.toJson())
console.log(t.toJson())
