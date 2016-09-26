/**
 * Created by arming on 9/25/16.
 */
/**
 This script is used to get the ec2 instance list from the https://github.com/powdahound/ec2instances.info project so that Macros that need instance information can be generated off of it.
 */
'use strict'

const https = require('https')
const fs = require('fs')

const file = fs.createWriteStream(__dirname + '/../metadata/ec2info.json')
https.get('https://raw.githubusercontent.com/powdahound/ec2instances.info/master/www/instances.json', (response) => {
  response.pipe(file)
})
