"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var intrinsic_1 = require("../intrinsic");
/**
 * Create a Condition object
 * @param {*} name
 * @param {*} conditionFn
 */
function Condition(name, conditionFn) {
    var newCondFn = lodash_1.cloneDeep(conditionFn);
    if (typeof newCondFn === 'object' && !newCondFn.kind) {
        newCondFn = intrinsic_1.buildIntrinsic(newCondFn);
    }
    return { kind: 'Condition', Name: name, Condition: newCondFn };
}
exports.Condition = Condition;
//# sourceMappingURL=condition.js.map