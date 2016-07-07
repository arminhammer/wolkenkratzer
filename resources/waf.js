'use strict'

const baseawsobject = require('./../baseawsobject')
const resource = require('./../resourceproperty')
const tag = require('./../tag')
const types = require('./../types')

class ByteMatchSet extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::WAF::ByteMatchSet'
    let properties = {
      ByteMatchTuples: new resource.ResourceArray('ByteMatchTuples', types.AWSWAFByteMatchSetByteMatchTuples, 'No', null),
      Name: new resource.ResourceProperty('Name', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class IPSet extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::WAF::IPSet'
    let properties = {
      IPSetDescriptors: new resource.ResourceArray('IPSetDescriptors', types.AWSWAFIPSetIPSetDescriptors, 'No', null),
      Name: new resource.ResourceProperty('Name', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Rule extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::WAF::Rule'
    let properties = {
      MetricName: new resource.ResourceProperty('MetricName', String, 'Yes', null),
      Name: new resource.ResourceProperty('Name', String, 'Yes', null),
      Predicates: new resource.ResourceArray('Predicates', types.AWSWAFRulePredicates, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SizeConstraintSet extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::WAF::SizeConstraintSet'
    let properties = {
      Name: new resource.ResourceProperty('Name', String, 'Yes', null),
      SizeConstraints: new resource.ResourceArray('SizeConstraints', types.AWSWAFSizeConstraintSetSizeConstraint, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SqlInjectionMatchSet extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::WAF::SqlInjectionMatchSet'
    let properties = {
      Name: new resource.ResourceProperty('Name', String, 'Yes', null),
      SqlInjectionMatchTuples: new resource.ResourceArray('SqlInjectionMatchTuples', types.AWSWAFSqlInjectionMatchSetSqlInjectionMatchTuples, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class WebACL extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::WAF::WebACL'
    let properties = {
      DefaultAction: new resource.ResourceProperty('DefaultAction', types.AWSWAFWebACLAction, 'Yes', null),
      MetricName: new resource.ResourceProperty('MetricName', String, 'Yes', null),
      Name: new resource.ResourceProperty('Name', String, 'Yes', null),
      Rules: new resource.ResourceArray('Rules', types.AWSWAFWebACLRules, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class XssMatchSet extends baseawsobject.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::WAF::XssMatchSet'
    let properties = {
      Name: new resource.ResourceProperty('Name', String, 'Yes', null),
      XssMatchTuples: new resource.ResourceArray('XssMatchTuples', types.AWSWAFXssMatchSetXssMatchTuple, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

module.exports = {
  ByteMatchSet: ByteMatchSet,
  IPSet: IPSet,
  Rule: Rule,
  SizeConstraintSet: SizeConstraintSet,
  SqlInjectionMatchSet: SqlInjectionMatchSet,
  WebACL: WebACL,
  XssMatchSet: XssMatchSet
}