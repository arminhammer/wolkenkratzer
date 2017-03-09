'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Mapping
*/
class Mapping {
    constructor(name, body) {
        this.WKName = name;
        this.body = body;
    }
    /**
     * Provides a JSON version of the Mapping
     * @returns {Object}
     */
    toJson() {
        let p = JSON.parse(JSON.stringify(this));
        delete p.WKName;
        return p.body;
    }
    ;
}
exports.Mapping = Mapping;
