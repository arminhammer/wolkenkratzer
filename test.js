/**
 * Created by arming on 6/2/16.
 */
const cloudpotato = require('./index')
const ec2 = require('./resources/ec2')

let template = new cloudpotato.Template()

let t = new cloudpotato.Template()
let instance = new ec2.Instance("myinstance")
instance.ImageId = 'ami-951945d0'
instance.InstanceType = 't2.micro'
console.log(JSON.stringify(instance, null, 2))
t.add_resource(instance)

let instance1 = new ec2.Instance("myinstance1", {
  ImageId: 'ami-951945d0'
})
instance1.InstanceType = 't2.micro'

t.add_resource(instance1)

let instance2 = new ec2.Instance("myinstance2")
instance2.ImageId = 'ami-951945d0'
instance2.AvailabilityZone = 'us-east-1a'
t.add_resource(instance2)


//let instance3 = new ec2.Instance("myinstance3")
//instance3.InstanceType = 't2.micro'
//t.add_resource(instance3)

//console.log(JSON.stringify(t, null, 2))
//console.log('Final:')

console.log(t.to_json())