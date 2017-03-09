'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @class Output
 */
class Output {
    constructor(name, parameter) {
        this.WKName = name;
        this.Description = parameter.Description;
        this.Value = parameter.Value;
    }
    /**
     * Returns a JSON version of the Output
     * @returns {Object}
     */
    toJson() {
        let p = JSON.parse(JSON.stringify(this));
        delete p.WKName;
        return p;
    }
    ;
}
exports.Output = Output;
