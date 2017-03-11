'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const intrinsic_1 = require("./intrinsic");
/**
 * @class Tag
 */
class Tag {
    constructor(key, value) {
        /**
       * Returns a JSON representation of the Tag
       * @returns {{Key: module:KMS.Key, Value: *}}
       */
        this.toJson = function () {
            let value = this.Value;
            if (value instanceof intrinsic_1.Intrinsic.Intrinsic) {
                value = value.toJson().json;
            }
            return { Key: this.Key, Value: value };
        };
        this.Key = key;
        this.Value = value;
    }
}
exports.Tag = Tag;
