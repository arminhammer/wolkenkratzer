/**
 * Created by arming on 7/4/16.
 */
'use strict';
const TypeException = require('./exceptions').TypeException;
/** @module Core */
/**
 * @memberof module:Core
 */
function Policy(name) {
    this.WKName = name;
}
Policy.prototype.toJson = function () {
    let p = JSON.parse(JSON.stringify(this));
    delete p.WKName;
    return p;
};
/**
 * @memberof module:Core
 */
function CreationPolicy(parameters) {
    Policy.call(this, 'CreationPolicy');
    if (parameters) {
        this.AutoScalingCreationPolicy = parameters.AutoScalingCreationPolicy;
        this.ResourceSignal = parameters.ResourceSignal;
    }
}
CreationPolicy.prototype = Object.create(Policy.prototype);
/**
 * @memberof module:Core
 */
function DeletionPolicy(Type) {
    Policy.call(this, 'DeletionPolicy');
    if (Type === 'Delete' || Type === 'Retain' || Type === 'Snapshot') {
        this.Type = Type;
    }
    else {
        throw new TypeException(Type + ' in DeletionPolicy must be Delete, Retain, or Snapshot');
    }
}
DeletionPolicy.prototype = Object.create(Policy.prototype);
/**
 * @memberof module:Core
 */
function UpdatePolicy(parameters) {
    Policy.call(this, 'UpdatePolicy');
}
UpdatePolicy.prototype = Object.create(Policy.prototype);
module.exports = {
    Policy: Policy,
    CreationPolicy: CreationPolicy,
    DeletionPolicy: DeletionPolicy,
    UpdatePolicy: UpdatePolicy
};
