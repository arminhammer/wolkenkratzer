/**
 * Created by arming on 6/27/16.
 */
'use strict'

const path = require('path')
const chai = require('chai')
chai.config.truncateThreshold = 0
chai.should()
var should = require('chai').should()
const BPromise = require('bluebird')
const fs = BPromise.promisifyAll(require('fs-extra'))
//const child_process = require('child_process')
const execFile = require('child_process').execFile;

const AWS = require('aws-sdk')
AWS.config.setPromisesDependency(BPromise);
const CloudFormation = new AWS.CloudFormation({ region: 'us-east-1' })

describe('Examples', () => {
  it('Should be able to generate the expected template', () => {
    return fs
      .readdirAsync(path.join(__dirname, '..', 'examples'))
      .map((file) => {
        return new BPromise((resolve, reject) => {
          execFile('node', [file], { cwd: path.join(__dirname, '..', 'examples') }, (error, stdout, stderr) => {
            if (error) {
              reject(error)
            } else if(stderr) {
              reject(stderr)
            }
            resolve(stdout)
          })
        })
      })
      .map((result) => {
        return CloudFormation.validateTemplate({
          TemplateBody: result.toString()
        }).promise().then((result) => {
          return result
        })
      })
      .then((results) => {
        results.forEach((result) => {
        })
      })
  })

  it('Should correctly create the wordpress template', () => {
    let file = ''
    return fs
      .readJsonAsync(path.join(__dirname, 'templates', 'wordpressSingle.json'))
      .then((readFile) => {
        //console.log('Read file!')
        file = readFile
        return new BPromise((resolve, reject) => {
          execFile('node', ['wordpressSingle'], { cwd: path.join(__dirname, '..', 'examples') }, (error, stdout, stderr) => {
            if (error) {
              reject(error)
            } else if(stderr) {
              reject(stderr)
            }
            resolve(stdout)
          })
        })
      })
      .then((result) => {
        let jsonString = JSON.parse(result)
        jsonString.should.deep.equal(file)
      })
  })
})