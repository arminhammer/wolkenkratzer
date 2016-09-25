/**
 * Created by arming on 9/17/16.
 */
'use strict'

const EC2Meta = require('./macros/ec2meta.macro')
const S3 = require('./macros/s3.macro')

// const Intrinsic = require('./intrinsic')

/* function makeIntrinsic (obj) {
  if (obj.Ref) {
    return new Intrinsic.Ref(obj.Ref)
  } else if (obj['Fn::FindInMap']) {
    return Reflect.construct(Intrinsic.FnFindInMap, [obj['Fn::FindInMap']])
  } else if (obj['Fn::GetAtt']) {
    return Reflect.construct(Intrinsic.FnGetAtt, [obj['Fn::GetAtt']])
  } else if (obj['Fn::Join']) {
    return Reflect.construct(Intrinsic.FnJoin, [obj['Fn::Join']])
  }
  return null
}
 */

module.exports = {
  EC2Meta: EC2Meta,
  S3: S3
}
