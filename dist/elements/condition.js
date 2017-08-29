"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const intrinsic_1 = require("../intrinsic");
const lodash_es_1 = require("lodash-es");
/**
 * Create a Condition object
 * @param {*} name
 * @param {*} conditionFn
 */
function Condition(name, conditionFn) {
    let newCondFn = lodash_es_1.cloneDeep(conditionFn);
    if (typeof newCondFn === 'object' && !newCondFn.kind) {
        newCondFn = intrinsic_1.buildIntrinsic(newCondFn);
    }
    return { kind: 'Condition', Name: name, Condition: newCondFn };
}
exports.Condition = Condition;
