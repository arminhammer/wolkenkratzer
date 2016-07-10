'use strict'

const WKResource = require('./../resource').WKResource
const ResourceAttribute = require('./../resourceattribute').ResourceAttribute
const ResourceAttributeArray = require('./../resourceattribute').ResourceAttributeArray
const tag = require('./../tag')
const types = require('./../types')

class ByteMatchSet extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::WAF::ByteMatchSet'
    let properties = {
      ByteMatchTuples: new ResourceAttributeArray('ByteMatchTuples', types.AWSWAFByteMatchSetByteMatchTuples, 'No', null),
      Name: new ResourceAttribute('Name', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class IPSet extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::WAF::IPSet'
    let properties = {
      IPSetDescriptors: new ResourceAttributeArray('IPSetDescriptors', types.AWSWAFIPSetIPSetDescriptors, 'No', null),
      Name: new ResourceAttribute('Name', String, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class Rule extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::WAF::Rule'
    let properties = {
      MetricName: new ResourceAttribute('MetricName', String, 'Yes', null),
      Name: new ResourceAttribute('Name', String, 'Yes', null),
      Predicates: new ResourceAttributeArray('Predicates', types.AWSWAFRulePredicates, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SizeConstraintSet extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::WAF::SizeConstraintSet'
    let properties = {
      Name: new ResourceAttribute('Name', String, 'Yes', null),
      SizeConstraints: new ResourceAttributeArray('SizeConstraints', types.AWSWAFSizeConstraintSetSizeConstraint, 'Yes', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class SqlInjectionMatchSet extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::WAF::SqlInjectionMatchSet'
    let properties = {
      Name: new ResourceAttribute('Name', String, 'Yes', null),
      SqlInjectionMatchTuples: new ResourceAttributeArray('SqlInjectionMatchTuples', types.AWSWAFSqlInjectionMatchSetSqlInjectionMatchTuples, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class WebACL extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::WAF::WebACL'
    let properties = {
      DefaultAction: new ResourceAttribute('DefaultAction', types.AWSWAFWebACLAction, 'Yes', null),
      MetricName: new ResourceAttribute('MetricName', String, 'Yes', null),
      Name: new ResourceAttribute('Name', String, 'Yes', null),
      Rules: new ResourceAttributeArray('Rules', types.AWSWAFWebACLRules, 'No', null)
    }
    super(name, resourceType, properties, propertiesObject)
  }
}

class XssMatchSet extends WKResource {
  constructor (name, propertiesObject) {
    let resourceType = 'AWS::WAF::XssMatchSet'
    let properties = {
      Name: new ResourceAttribute('Name', String, 'Yes', null),
      XssMatchTuples: new ResourceAttributeArray('XssMatchTuples', types.AWSWAFXssMatchSetXssMatchTuple, 'No', null)
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
