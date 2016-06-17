/**
 * Created by arming on 6/5/16.
 */
'use strict'

const path = require('path')
const chai = require('chai')

chai.should()

const cloudpotato = require(path.join(__dirname, '..', 'index'))
const ec2 = require(path.join(__dirname, '..', 'resources/ec2'))

describe ('BaseAWSObject', () => {

})
