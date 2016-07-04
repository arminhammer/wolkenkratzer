/**
 * Created by arming on 7/3/16.
 */

'use strict'
const TypeException = require('./exceptions').TypeException

class Block {
  constructor(name) {
    this.Name = name
  }
  toJson () {
    let p = JSON.parse(JSON.stringify(this))
    delete p.Name
    return p
  }
}

class Command extends Block {
  constructor (name, parameter) {
    super(name)
    if(parameter) {
      this.command = parameter.command
      this.env = parameter.env
      this.cwd = parameter.cwd
      this.test = parameter.test
      this.ignoreErrors = parameter.ignoreErrors
      this.waitAfterCompletion = parameter.waitAfterCompletion
    }
  }
}

class Config {
  constructor (name) {
    this.Name = name
    this.commands = {}
  }
  add (block) {
    if(block instanceof Command) {
      this.commands[block.Name] = block
    } else {
      throw new TypeException(block + ' is not a proper type for ConfigSet ' + this.Name)
    }
  }
  toJson () {
    let p = JSON.parse(JSON.stringify(this))
    delete p.Name
    return p
  }
}

class ConfigSet {
  constructor (name) {
    this.Name = name
    this.configs = []
  }
  add (config) {
    this.configs.push(config.Name)
  }
  toJson () {
    let p = JSON.parse(JSON.stringify(this))
    delete p.Name
    return p
  }
}

module.exports = {
  Command: Command,
  Config: Config,
  ConfigSet: ConfigSet
}
