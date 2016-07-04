# wolkenkratzer

Wolkenkratzer is a Javascript library that helps you programmatically generate CloudFormation templates. The scope of the project is similar to the Python library https://github.com/cloudtools/troposphere.

## Installation

  ```$ npm install wolkenkratzer```

## Usage

The core class is Template, which is instantiated with ```new wolkenkratzer.Template()```. Parameters can be added with the ```addParameter()``` method,
and Resources can be added with ```addParameter```. The final template can be retrieved with Template.toJson().

The following script adds a VPNGateway to the template:

```javascript
const wolkenkratzer = require('wolkenkratzer')

let t = new wolkenkratzer.Template()

let vpcCiderParam = new wolkenkratzer.Parameter('VPCCIDR', { Type: 'String', Default: '10.0.0.0/16' })
t.addParameter(vpcCiderParam)

let vpnGateway = new wolkenkratzer.EC2.VPNGateway('VPNGateway')
vpnGateway.Type = 'ipsec.1'
t.addResource(vpnGateway)

console.log(t.toJson())
```

This results in the template:

```json
{
  "Parameters": {
    "VPCCIDR": {
      "Type": "String",
      "Default": "10.0.0.0/16"
    }
  },
  "Resources": {
    "VPNGateway": {
      "Type": "AWS::EC2::VPNGateway",
      "Properties": {
        "Type": "ipsec.1"
      }
    }
  },
  "AWSTemplateFormatVersion": "2010-09-09"
}
```
