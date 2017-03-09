/**
 * Created by arming on 9/17/16.
 */
'use strict';
const EC2Meta = require('./macros/ec2meta.macro');
const S3 = require('./macros/s3.macro');
module.exports = {
    EC2Meta: EC2Meta,
    S3: S3
};
