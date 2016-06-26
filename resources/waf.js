'use strict'

const wolkenkratzer = require('./../index')
const propertyTypes = require('./propertytypes/propertytypes')

class ByteMatchSet extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::WAF::ByteMatchSet'
    let properties = {
      ByteMatchTuples: new wolkenkratzer.ResourceArray(propertyTypes.AWSWAFByteMatchSetByteMatchTuples, 'No', null),
      Name: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class IPSet extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::WAF::IPSet'
    let properties = {
      IPSetDescriptors: new wolkenkratzer.ResourceArray(propertyTypes.AWSWAFIPSetIPSetDescriptors, 'No', null),
      Name: new wolkenkratzer.ResourceProperty(String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Rule extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::WAF::Rule'
    let properties = {
      MetricName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Name: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Predicates: new wolkenkratzer.ResourceArray(propertyTypes.AWSWAFRulePredicates, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SizeConstraintSet extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::WAF::SizeConstraintSet'
    let properties = {
      Name: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      SizeConstraints: new wolkenkratzer.ResourceArray(propertyTypes.AWSWAFSizeConstraintSetSizeConstraint, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SqlInjectionMatchSet extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::WAF::SqlInjectionMatchSet'
    let properties = {
      Name: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      SqlInjectionMatchTuples: new wolkenkratzer.ResourceArray(propertyTypes.AWSWAFSqlInjectionMatchSetSqlInjectionMatchTuples, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class WebACL extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::WAF::WebACL'
    let properties = {
      DefaultAction: new wolkenkratzer.ResourceProperty(propertyTypes.AWSWAFWebACLAction, 'Yes', null),
      MetricName: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Name: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      Rules: new wolkenkratzer.ResourceArray(propertyTypes.AWSWAFWebACLRules, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class XssMatchSet extends wolkenkratzer.BaseAWSObject {
  constructor(name, propertiesObject) {
    let resourceType = 'AWS::WAF::XssMatchSet'
    let properties = {
      Name: new wolkenkratzer.ResourceProperty(String, 'Yes', null),
      XssMatchTuples: new wolkenkratzer.ResourceArray(propertyTypes.AWSWAFXssMatchSetXssMatchTuple, 'No', null)
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