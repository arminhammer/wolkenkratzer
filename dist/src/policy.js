'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const exceptions_1 = require("./exceptions");
var Policy;
(function (Policy_1) {
    /**
     * @class Policy
     */
    class Policy {
        constructor(name) {
            this.WKName = name;
        }
        getName() {
            return this.WKName;
        }
        toJson() {
            let p = JSON.parse(JSON.stringify(this));
            delete p.WKName;
            return p;
        }
    }
    Policy_1.Policy = Policy;
    /**
     * @class CreationPolicy
     */
    class CreationPolicy extends Policy {
        constructor(parameters) {
            super('CreationPolicy');
            if (parameters) {
                this.AutoScalingCreationPolicy = parameters.AutoScalingCreationPolicy;
                this.ResourceSignal = parameters.ResourceSignal;
            }
        }
    }
    Policy_1.CreationPolicy = CreationPolicy;
    /**
     * @class DeletionPolicy
     */
    class DeletionPolicy extends Policy {
        constructor(Type) {
            super('DeletionPolicy');
            if (Type === 'Delete' || Type === 'Retain' || Type === 'Snapshot') {
                this.Type = Type;
            }
            else {
                throw new exceptions_1.TypeException(Type + ' in DeletionPolicy must be Delete, Retain, or Snapshot');
            }
        }
    }
    Policy_1.DeletionPolicy = DeletionPolicy;
    /**
     * @class UpdatePolicy
     */
    class UpdatePolicy extends Policy {
        constructor(parameters) {
            super('UpdatePolicy');
        }
    }
    Policy_1.UpdatePolicy = UpdatePolicy;
})(Policy = exports.Policy || (exports.Policy = {}));
