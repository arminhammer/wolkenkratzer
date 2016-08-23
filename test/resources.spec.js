/**
 * Created by arming on 6/5/16.
 */
/* global describe it */
'use strict'

const path = require('path')
const chai = require('chai')

chai.should()

const wk = require(path.join(__dirname, '..', 'index'))

describe('Resource', () => {
  describe('Test conditional logic', () => {
    let t = new wk.Template()

    let vpcCiderParam = new wk.Parameter('VPCCIDR', { Type: 'String', Default: '10.0.0.0/16' })
    t.add(vpcCiderParam)

    let vpc = new wk.EC2.VPC('VPC')
    vpc.CidrBlock.ref(vpcCiderParam)
    vpc.InstanceTenancy = 'default'
    vpc.EnableDnsSupport = true
    vpc.EnableDnsHostnames = true
    t.add(vpc)

    let vpnGateway = new wk.EC2.VPNGateway('VPNGateway')
    vpnGateway.Type = 'ipsec.1'
    t.add(vpnGateway)

    let igwGateway = new wk.EC2.InternetGateway('InternetGateway')
    t.add(igwGateway)

    let vpcGatewayAttachment = new wk.EC2.VPCGatewayAttachment('VPCGatewayAttachment')
    vpcGatewayAttachment.InternetGatewayId.ref(igwGateway)
    vpcGatewayAttachment.VpcId.ref(vpc)
    vpcGatewayAttachment.VpnGatewayId.ref(vpnGateway)
    t.add(vpcGatewayAttachment)
    it('Conditional should be tested, You must specify either InternetGatewayId or VpnGatewayId, but not both.', () => {
      try {
        t.toJson()
      } catch (e) {
        e.message.should.equal('VPCGatewayAttachment has a condition that was not met: You must specify either InternetGatewayId or VpnGatewayId, but not both.')
      }
    })

    /* it ('Should generate the expected JSON template', () => {
     vpnGateway.Type = 'ipsec.1'
     console.log(t.toJson())
     let jsonString = JSON.parse(t.toJson())
     jsonString.should.deep.equal({
     'Description': '',
     'Metadata': {},
     'Conditions': {},
     'Mappings': {},
     'Outputs': {},
     'Parameters': {},
     'Resources': {
     'VPNGateway': {
     'Type': 'AWS::EC2::VPNGateway',
     'Properties': {
     'Type': 'ipsec.1'
     }
     }
     },
     'AWSTemplateFormatVersion': '2010-09-09'
     })
     })

     it ('CloudFormation should validate the template', () => {
     let jsonString = t.toJson()
     CloudFormation.validateTemplate({
     TemplateBody: jsonString
     }, (err, data) => {
     if (err) {
     console.error(err)
     }
     should.exist(data)
     })
     })*/
  })

  describe('Config and ConfigSets', () => {

    it ('Should be able to add a Config to an Instance', () => {
      let t = new wk.Template()
      let bucket = new wk.S3.Bucket('bucket')
      t.add(bucket)

      let instance = new wk.EC2.Instance('instance')
      instance.ImageId = 'ami-55555'
      t.add(instance)

      let launchConfig = new wk.AutoScaling.LaunchConfiguration('launchConfig')
      launchConfig.ImageId = 'ami-55555'
      launchConfig.InstanceType = 't2.micro'
      t.add(launchConfig)

      let config = new wk.Init.Config('config')
      let configSet = new wk.Init.ConfigSet('configSet')

      instance.addConfig(config)
      let jsonString = JSON.parse(t.toJson().Template)
      jsonString.should.deep.equal({
        'Resources': {
          'bucket': {
            'Type': 'AWS::S3::Bucket',
            'Properties': {}
          },
          'instance': {
            'Type': 'AWS::EC2::Instance',
            'Properties': {
              'ImageId': 'ami-55555'
            },
            'Metadata': {
              'AWS::CloudFormation::Init': {
                'configSets': {},
                'config': {}
              }
            }
          },
          'launchConfig': {
            'Type': 'AWS::AutoScaling::LaunchConfiguration',
            'Properties': {
              'ImageId': 'ami-55555',
              'InstanceType': 't2.micro'
            }
          }
        },
        'AWSTemplateFormatVersion': '2010-09-09'
      })
    })

    it ('Should be able to add a ConfigSet to an Instance', () => {
      let t = new wk.Template()
      let bucket = new wk.S3.Bucket('bucket')
      t.add(bucket)

      let instance = new wk.EC2.Instance('instance')
      instance.ImageId = 'ami-55555'
      t.add(instance)

      let launchConfig = new wk.AutoScaling.LaunchConfiguration('launchConfig')
      launchConfig.ImageId = 'ami-55555'
      launchConfig.InstanceType = 't2.micro'
      t.add(launchConfig)

      let config = new wk.Init.Config('config')
      let configSet = new wk.Init.ConfigSet('configSet')

      instance.addConfigSet(configSet)
      let jsonString = JSON.parse(t.toJson().Template)
      jsonString.should.deep.equal({
        'Resources': {
          'bucket': {
            'Type': 'AWS::S3::Bucket',
            'Properties': {}
          },
          'instance': {
            'Type': 'AWS::EC2::Instance',
            'Properties': {
              'ImageId': 'ami-55555'
            },
            'Metadata': {
              'AWS::CloudFormation::Init': {
                'configSets': {
                  configSet: []
                }
              }
            }
          },
          'launchConfig': {
            'Type': 'AWS::AutoScaling::LaunchConfiguration',
            'Properties': {
              'ImageId': 'ami-55555',
              'InstanceType': 't2.micro'
            }
          }
        },
        'AWSTemplateFormatVersion': '2010-09-09'
      })
    })

    it ('Should be able to add a Config to a LaunchConfiguration', () => {
      let t = new wk.Template()
      let bucket = new wk.S3.Bucket('bucket')
      t.add(bucket)

      let instance = new wk.EC2.Instance('instance')
      instance.ImageId = 'ami-55555'
      t.add(instance)

      let launchConfig = new wk.AutoScaling.LaunchConfiguration('launchConfig')
      launchConfig.ImageId = 'ami-55555'
      launchConfig.InstanceType = 't2.micro'
      t.add(launchConfig)

      let config = new wk.Init.Config('config')
      let configSet = new wk.Init.ConfigSet('configSet')

      launchConfig.addConfig(config)
      let jsonString = JSON.parse(t.toJson().Template)
      jsonString.should.deep.equal({
        'Resources': {
          'bucket': {
            'Type': 'AWS::S3::Bucket',
            'Properties': {}
          },
          'instance': {
            'Type': 'AWS::EC2::Instance',
            'Properties': {
              'ImageId': 'ami-55555'
            }
          },
          'launchConfig': {
            'Type': 'AWS::AutoScaling::LaunchConfiguration',
            'Properties': {
              'ImageId': 'ami-55555',
              'InstanceType': 't2.micro'
            },
            'Metadata': {
              'AWS::CloudFormation::Init': {
                'configSets': {},
                'config': {}
              }
            }
          }
        },
        'AWSTemplateFormatVersion': '2010-09-09'
      })
    })

    it ('Should be able to add a ConfigSet to a LaunchConfiguration', () => {
      let t = new wk.Template()
      let bucket = new wk.S3.Bucket('bucket')
      t.add(bucket)

      let instance = new wk.EC2.Instance('instance')
      instance.ImageId = 'ami-55555'
      t.add(instance)

      let launchConfig = new wk.AutoScaling.LaunchConfiguration('launchConfig')
      launchConfig.ImageId = 'ami-55555'
      launchConfig.InstanceType = 't2.micro'
      t.add(launchConfig)

      let config = new wk.Init.Config('config')
      let configSet = new wk.Init.ConfigSet('configSet')

      launchConfig.addConfigSet(configSet)
      let jsonString = JSON.parse(t.toJson().Template)
      jsonString.should.deep.equal({
        'Resources': {
          'bucket': {
            'Type': 'AWS::S3::Bucket',
            'Properties': {}
          },
          'instance': {
            'Type': 'AWS::EC2::Instance',
            'Properties': {
              'ImageId': 'ami-55555'
            }
          },
          'launchConfig': {
            'Type': 'AWS::AutoScaling::LaunchConfiguration',
            'Properties': {
              'ImageId': 'ami-55555',
              'InstanceType': 't2.micro'
            },
            'Metadata': {
              'AWS::CloudFormation::Init': {
                'configSets': {
                  configSet: []
                }
              }
            }
          }
        },
        'AWSTemplateFormatVersion': '2010-09-09'
      })
    })

    it ('Should not be able to add a Config to an S3 Bucket', (done) => {
      let t = new wk.Template()
      let bucket = new wk.S3.Bucket('bucket')
      t.add(bucket)

      let config = new wk.Init.Config('config')

      try {
        bucket.addConfig(config)
      } catch (error) {
        done()
      }

    })

     it ('Should not be able to add a Config to an S3 Bucket', (done) => {

       let t = new wk.Template()
       let bucket = new wk.S3.Bucket('bucket')
       t.add(bucket)

       let configSet = new wk.Init.ConfigSet('configSet')

       try {
         bucket.addConfigSet(configSet)
       } catch (error) {
         done()
       }

     })

  })
})
