/**
 * Created by arming on 6/2/16.
 */
const cloudpotato = require('./index')
const s3 = require('./resources/s3')
const ec2 = require('./resources/ec2')

let t = new cloudpotato.Template()

let bucket = new s3.Bucket('newBucket')
bucket.BucketName = 'newBucket'

t.addResource(bucket)

let bucketPolicy = new s3.BucketPolicy('newBucketPolicy')
bucketPolicy.PolicyDocument = {
  'Statement': [{
    'Action': ['s3:GetObject'],
    'Effect': 'Allow',
    'Resource': '*',
    'Principal': '*'
  }]
}

bucketPolicy.Bucket.ref(bucket)

t.addResource(bucketPolicy)

// console.log('bucketPolicy')
// console.log(bucketPolicy)

let vpcCiderParam = new cloudpotato.Parameter('VPCCIDR', { Type: 'String', Default: '10.0.0.0/16' })
t.addParameter(vpcCiderParam)
let publicSubnetPubACIDRParam = new cloudpotato.Parameter('PublicSubnetPubACIDR', { Type: 'String', Default: '10.0.0.0/24' })
t.addParameter(publicSubnetPubACIDRParam)
let publicSubnetPubBCIDRParam = new cloudpotato.Parameter('PublicSubnetPubBCIDR', { Type: 'String', Default: '10.0.1.0/24' })
t.addParameter(publicSubnetPubBCIDRParam)
let privateSubnetPrivCCIDRParam = new cloudpotato.Parameter('PrivateSubnetPrivCCIDR', { Type: 'String', Default: '10.0.2.0/24' })
t.addParameter(privateSubnetPrivCCIDRParam)
let privateSubnetPrivDCIDRParam = new cloudpotato.Parameter('PrivateSubnetPrivDCIDR', { Type: 'String', Default: '10.0.3.0/24' })
t.addParameter(privateSubnetPrivDCIDRParam)
let vPCTagParam = new cloudpotato.Parameter('VPCTag', { Type: 'String', Default: 'BaseVPC' })
t.addParameter(vPCTagParam)

let vpc = new ec2.VPC('VPC')
vpc.CidrBlock.ref(vpcCiderParam)
vpc.InstanceTenancy = 'default'
vpc.EnableDnsSupport = true
vpc.EnableDnsHostnames = true
vpc.Tags.add({ Key: 'Name', Value: 'BaseVPC' })
vpc.Tags.add({ Key: 'Name0', Value: { 'Ref': 'VPCTag' } })
vpc.Tags.add(new cloudpotato.Tag('Name1', { 'Ref': 'VPCTag' }))
vpc.Tags.add(new cloudpotato.Tag('Name2', new cloudpotato.Ref(vPCTagParam)))
vpc.Tags.add({ Key: 'Group', Value: new cloudpotato.Ref(vPCTagParam) })

t.addResource(vpc)

let igw = new ec2.InternetGateway('InternetGateway')
igw.Tags.add({ Key: 'Name', Value: 'InternetGateway' })
igw.Tags.add({ Key: 'Group', Value: new cloudpotato.Ref(vPCTagParam) })
t.addResource(igw)

let vpcgatewayatt = new ec2.VPCGatewayAttachment('AttachInternetGateway')
vpcgatewayatt.InternetGatewayId.ref(igw)
vpcgatewayatt.VpcId.ref(vpc)

console.log('vpcgatewayatt')
console.log(vpcgatewayatt)
t.addResource(vpcgatewayatt)

let publicSubnetPubA = new ec2.Subnet('PublicSubnetPubA')
publicSubnetPubA.CidrBlock.ref(publicSubnetPubACIDRParam)
publicSubnetPubA.VpcId.ref(vpc)
publicSubnetPubA.MapPublicIpOnLaunch = true
igw.Tags.add({ Key: 'Name', Value: 'PublicSubnetPubA' })
igw.Tags.add({ Key: 'Group', Value: new cloudpotato.Ref(vPCTagParam) })
t.addResource(publicSubnetPubA)

let PrivateSubnetPrivC = new ec2.Subnet('PrivateSubnetPrivC')
PrivateSubnetPrivC.CidrBlock.ref(publicSubnetPubACIDRParam)
PrivateSubnetPrivC.VpcId.ref(vpc)
PrivateSubnetPrivC.MapPublicIpOnLaunch = true
PrivateSubnetPrivC.Tags.add({ Key: 'Name', Value: 'PrivateSubnetPrivC' })
PrivateSubnetPrivC.Tags.add({ Key: 'Group', Value: new cloudpotato.Ref(vPCTagParam) })
t.addResource(PrivateSubnetPrivC)

let PrivateSubnetPrivD = new ec2.Subnet('PrivateSubnetPrivD')
PrivateSubnetPrivD.CidrBlock.ref(publicSubnetPubACIDRParam)
PrivateSubnetPrivD.VpcId.ref(vpc)
PrivateSubnetPrivD.MapPublicIpOnLaunch = true
PrivateSubnetPrivD.Tags.add({ Key: 'Name', Value: 'PrivateSubnetPrivD' })
PrivateSubnetPrivD.Tags.add({ Key: 'Group', Value: new cloudpotato.Ref(vPCTagParam) })
t.addResource(PrivateSubnetPrivD)

// console.log(JSON.stringify(t, null, 2))
console.log(t.toJson())
// console.log(t.toJson())
