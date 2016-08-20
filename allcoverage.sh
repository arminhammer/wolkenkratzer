#!/usr/bin/env bash

istanbul cover --print detail ./node_modules/.bin/_mocha 'test/**/*.spec.js' --dir ./coverage/tests
istanbul cover --print detail ./node_modules/.bin/_mocha 'examples/*.js' --dir ./coverage/examples
istanbul report