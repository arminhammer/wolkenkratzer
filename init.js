/**
 * Created by arming on 7/3/16.
 */

'use strict'
const TypeException = require('./exceptions').TypeException

/** @module Core */

/**
 * @memberof module:Core
 */
class Block {
  /**
   * @constructs Block
   * @param name
   */
  constructor (name) {
    this.WKName = name
  }

  /**
   * Returns a JSON string version
   */
  toJson () {
    let p = JSON.parse(JSON.stringify(this))
    delete p.WKName
    return p
  }
}

/**
 * @memberof module:Core
 */
class Command extends Block {
  /**
   * @constructs Command
   * @param name
   */
  constructor (name, parameter) {
    super(name)
    if (parameter) {
      this.command = parameter.command
      this.env = parameter.env
      this.cwd = parameter.cwd
      this.test = parameter.test
      this.ignoreErrors = parameter.ignoreErrors
      this.waitAfterCompletion = parameter.waitAfterCompletion
    }
  }
}

/**
 * @memberof module:Core
 */
class File extends Block {
  /**
   * @constructs File
   * @param name
   */
  constructor (name, parameter) {
    super(name)
    if (parameter) {
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

/**
 * @memberof module:Core
 */
class Packages extends Block {
  /**
   * @constructs Packages
   * @param name
   */
  constructor (name, body) {
    super(name)
    this.body = body
  }

  /**
   * Returns a JSON string version
   * @returns {*}
   */
  toJson () {
    return this.body
  }
}

/**
 * @memberof module:Core
 */
class Service extends Block {
  /**
   * @constructs Service
   * @param name
   */
  constructor (name, parameter) {
    super(name)
    if (parameter) {
      this.ensureRunning = parameter.ensureRunning
      this.enabled = parameter.enabled
      this.files = parameter.files
      this.sources = parameter.sources
      this.packages = parameter.packages
      this.commands = parameter.commands
    }
  }
}

/**
 * @memberof module:Core
 */
class Source extends Block {
  /**
   * @constructs Source
   * @param name
   */
  constructor (name, body) {
    super(name)
    this.body = body
  }

  /**
   * Returns a JSON string version
   * @returns {*}
   */
  toJson () {
    return this.body
  }
}

/**
 * @memberof module:Core
 */
class Config {
  /**
   * @constructs Config
   * @param name
   */
  constructor (name) {
    this.WKName = name
    this.commands = {}
    this.files = {}
    this.packages = {}
    this.services = {
      sysvinit: {}
    }
    this.sources = {}
  }

  /**
   *
   * @param block
   */
  add (block) {
    if (block instanceof Command) {
      this.commands[block.WKName] = block
    } else if (block instanceof File) {
      this.files[block.WKName] = block
    } else if (block instanceof Packages) {
      this.packages[block.WKName] = block
    } else if (block instanceof Service) {
      this.services.sysvinit[block.WKName] = block
    } else if (block instanceof Source) {
      this.sources[block.WKName] = block
    } else {
      throw new TypeException(block.WKName + ' is not a proper type for ConfigSet ' + this.Name)
    }
  }

  /**
   * Returns a JSON string version
   */
  toJson () {
    let p = JSON.parse(JSON.stringify(this))
    delete p.WKName
    for (let block in p) {
      if (Object.keys(p[block]).length === 0) {
        delete p[block]
      } else {
        if (block === 'services') {
          if (Object.keys(p[block].sysvinit).length === 0) {
            delete p[block]
          } else {
            for (let sublock in this[block].sysvinit) {
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

/**
 * @memberof module:Core
 */
class ConfigSet {
  /**
   * @constructs ConfigSet
   * @param name
   */
  constructor (name) {
    this.WKName = name
    this.configs = []
  }

  /**
   *
   * @param config
   */
  add (config) {
    this.configs.push(config.WKName)
  }

  /**
   * Returns a JSON string version
   */
  toJson () {
    let p = JSON.parse(JSON.stringify(this))
    delete p.WKName
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
