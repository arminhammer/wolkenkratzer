/**
 * Created by arming on 6/27/16.
 */
/* global describe it */
'use strict'

const path = require('path')
const chai = require('chai')
const assert = require('assert')
chai.config.truncateThreshold = 0
chai.should()
const BPromise = require('bluebird')
const fs = BPromise.promisifyAll(require('fs-extra'))
const execFile = require('child_process').execFile
const spawn = require('child_process').spawn;
var stream = require("mock-utf8-stream");

const AWS = require('aws-sdk')
AWS.config.setPromisesDependency(BPromise)
const CloudFormation = new AWS.CloudFormation({ region: 'us-east-1' })

describe('Examples', () => {
  it ('Should be able to generate the expected template', function () {
    this.timeout(15000)
    return fs
      .readdirAsync(path.join(__dirname, '..', 'examples'))
      .map((file) => {
        return new BPromise((resolve, reject) => {
          execFile('node', [file], { cwd: path.join(__dirname, '..', 'examples') }, (error, stdout, stderr) => {
            if (error) {
              reject(error)
            } else if (stderr) {
              reject(stderr)
            }
            resolve(stdout)
          })
        })
      })
      .map((templ) => {
        return CloudFormation.validateTemplate({
          TemplateBody: templ.toString()
        }).promise().then((result) => {
          return result
        })
        .catch((e) => {
          assert.fail(e)
        })
      })
      .then((results) => {
      })
  })

  it ('Should correctly create the wordpress template', () => {
    let file = ''
    return fs
      .readJsonAsync(path.join(__dirname, 'templates', 'wordpressSingle.json'))
      .then((readFile) => {
        file = readFile
        return new BPromise((resolve, reject) => {
          execFile('node', ['wordpressSingle'], { cwd: path.join(__dirname, '..', 'examples') }, (error, stdout, stderr) => {
            if (error) {
              reject(error)
            } else if (stderr) {
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

  it ('Should correctly create the s3CloudFront template', () => {
    let file = ''
    return fs
      .readJsonAsync(path.join(__dirname, 'templates', 's3CloudFront.json'))
      .then((readFile) => {
        file = readFile
        return new BPromise((resolve, reject) => {
          execFile('node', ['s3CloudFront'], { cwd: path.join(__dirname, '..', 'examples') }, (error, stdout, stderr) => {
            if (error) {
              reject(error)
            } else if (stderr) {
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

  /*
  it('Should execute and analyze the wordpresssingle template', () => {
    let file = ''
    return fs
    .readJsonAsync(path.join(__dirname, 'templates', 'wordpressSingle.json'))
    .then((readFile) => {
      file = readFile
      return new BPromise((resolve, reject) => {
        let script = require('../examples/wordpresssingle')
        let result = eval(script)
        console.log('Result:')
        console.log(result)
        const script = spawn('node', ['wordpressSingle'], {
          cwd: path.join(__dirname, '..', 'examples'),
          stdio: 'inherit'
        })
        let result = ''
        script.stdout.on('data', (data) => {
          console.log(`stdout: ${data}`);
          result += data
        })
        script.stderr.on('data', (data) => {
          console.log(`stderr: ${data}`);
          reject(data)
        })
        script.on('close', (code) => {
          console.log(`child process exited with code ${code}`);
          resolve(result)
        })
      })
    })
    .then((result) => {
      let jsonString = JSON.parse(result)
      jsonString.should.deep.equal(file)
    })
  })*/

  /* it('Should execute and analyze the wordpresssingle template', () => {
    let file = ''
    return fs
    .readJsonAsync(path.join(__dirname, 'templates', 'wordpressSingle.json'))
    .then((readFile) => {
      file = readFile
      return new BPromise((resolve, reject) => {
        const script = spawn('node', ['wordpressSingle'], {
          cwd: path.join(__dirname, '..', 'examples'),
          stdio: 'inherit'
        })
        let result = ''
        script.stdout.on('data', (data) => {
          console.log(`stdout: ${data}`);
          result += data
        })
        script.stderr.on('data', (data) => {
          console.log(`stderr: ${data}`);
          reject(data)
        })
        script.on('close', (code) => {
          console.log(`child process exited with code ${code}`);
          resolve(result)
        })
      })
    })
    .then((result) => {
      let jsonString = JSON.parse(result)
      jsonString.should.deep.equal(file)
    })
  })*/
})
