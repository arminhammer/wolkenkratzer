/**
 * Created by arming on 6/5/16.
 */
'use strict'

const path = require('path')
const chai = require('chai')

chai.should()

const cloudpotato = require(path.join(__dirname, '..', 'index'))

describe ('Template', () => {
  let template = new cloudpotato.Template()

  it ('Version should be 2010-09-09', () => {
    template.AWSTemplateFormatVersion.should.equal('2010-09-09')
  })
})
