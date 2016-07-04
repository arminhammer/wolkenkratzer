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

class File extends Block {
  constructor (name, parameter) {
    super(name)
    if(parameter) {
      this.content = parameter.content
      this.source = parameter.source
      this.encoding = parameter.encoding
      this.group = parameter.group
      this.owner = parameter.owner
      this.mode = parameter.mode
      this.authentication = parameter.authentication
      this.context = parameter.context
    }
  }
}

class Packages extends Block {
  constructor (name, body) {
    super(name)
    this.body = body
  }
  toJson () {
    return this.body
  }
}

class Service extends Block {
  constructor (name, parameter) {
    super(name)
    if(parameter) {
      this.ensureRunning = parameter.ensureRunning
      this.enabled = parameter.enabled
      this.files = parameter.files
      this.sources = parameter.sources
      this.packages = parameter.packages
      this.commands = parameter.commands
    }
  }
}

class Source extends Block {
  constructor (name, body) {
    super(name)
    this.body = body
  }
  toJson () {
    return this.body
  }
}

class Config {
  constructor (name) {
    this.Name = name
    this.commands = {}
    this.files = {}
    this.packages = {}
    this.services = {
      sysvinit: {}
    }
    this.sources = {}
  }
  add (block) {
    if(block instanceof Command) {
      this.commands[block.Name] = block
    } else if(block instanceof File) {
      this.files[block.Name] = block
    } else if(block instanceof Packages) {
      this.packages[block.Name] = block
    } else if(block instanceof Service) {
      this.services.sysvinit[block.Name] = block
    } else if(block instanceof Source) {
      this.sources[block.Name] = block
    }
    else {
      throw new TypeException(block.Name + ' is not a proper type for ConfigSet ' + this.Name)
    }
  }
  toJson () {
    let p = JSON.parse(JSON.stringify(this))
    delete p.Name
    for(let block in p) {
      if(Object.keys(p[block]).length === 0) {
        delete p[block]
      } else {
        if(block === 'services') {
          if(Object.keys(p[block].sysvinit).length === 0) {
            delete p[block]
          } else {
            for (let sublock in this[block].sysvinit) {
              let service = p[block].sysvinit[sublock]
              p[block].sysvinit[sublock] = this[block].sysvinit[sublock].toJson()
            }
          }
        } else {
          for (let sublock in p[ block ]) {
            p[block][sublock] = this[block][sublock].toJson()
          }
        }
      }
    }
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
  ConfigSet: ConfigSet,
  File: File,
  Packages: Packages,
  Service: Service,
  Source: Source
}
