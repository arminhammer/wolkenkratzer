/**
 * Created by arming on 7/5/16.
 */
'use strict'

const aws = require('aws-sdk')
const EC2 = new aws.EC2({ region: 'us-east-1' })
const wk = require('../index')

let t = new wk.Template()

let ec2One = new wk.EC2.Instance('ec2One')
ec2One.ImageId = 'ami-2a69aa47'

t.addResource(ec2One)

EC2.describeInstances({}, (err, data) => {
  if (err) {
    console.log(err)
  } else {
    let instance = data.Reservations[0].Instances[0]
    let ec2Two = new wk.EC2.Instance('ec2Two', instance)
    t.addResource(ec2Two)
    console.log(t.toJson())
  }
})
