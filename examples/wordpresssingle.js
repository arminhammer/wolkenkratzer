const { Template, Description } = require('../dist/index');

let t = Template()
  .add(
    Description(
      'AWS CloudFormation Sample Template WordPress_Single_Instance: WordPress is web software you can use to create a beautiful website or blog. This template installs WordPress with a local MySQL database for storage. It demonstrates using the AWS CloudFormation bootstrap scripts to deploy WordPress. **WARNING** This template creates an Amazon EC2 instance. You will be billed for the AWS resources used if you create a stack from this template.'
    )
  )
  .build();

console.log(JSON.stringify(t, null, 2));
