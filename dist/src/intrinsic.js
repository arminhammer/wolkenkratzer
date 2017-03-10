'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("./resource");
const parameter_1 = require("./parameter");
function makeIntrinsic(obj) {
    if (obj['Ref']) {
        return new Ref(obj['Ref']);
    }
    else if (obj['Fn::FindInMap']) {
        return new FnFindInMap(obj['Fn::FindInMap']);
    }
    else if (obj['Fn::GetAtt']) {
        return new FnGetAtt(obj['Fn::GetAtt']);
    }
    else if (obj['Fn::Join']) {
        return new FnJoin(obj['Fn::Join'][0], obj['Fn::Join'][1]);
    }
    else if (obj['Fn::Sub']) {
        return new FnSub(obj['Fn::Sub']);
    }
    return null;
}
exports.makeIntrinsic = makeIntrinsic;
/**
 * @class Intrinsic
 */
class Intrinsic {
    constructor() { }
    /**
    * Returns a JSON Object
    */
    toJson() { return { json: {} }; }
    ;
    toJSON() {
        return this.toJson().json;
    }
    ;
}
exports.Intrinsic = Intrinsic;
/**
 * @class Ref
 */
class Ref extends Intrinsic {
    constructor(resource) {
        super();
        this.ref = resource;
    }
    /**
     * Returns a JSON string version
     * @returns {Object}
     */
    toJson() {
        if (this.ref instanceof resource_1.WKResource) {
            return { errors: null, json: { Ref: this.ref.getName() } };
        }
        else if (this.ref instanceof parameter_1.Parameter) {
            return { errors: null, json: { Ref: this.ref.getName() } };
        }
        else {
            return { errors: null, json: { Ref: this.ref } };
        }
    }
}
exports.Ref = Ref;
/**
 * @class FnSub
 */
class FnSub extends Intrinsic {
    constructor(input) {
        super();
        this.sub = input;
    }
    /**
     * Returns a JSON string version
     * @returns {Object}
     */
    toJson() {
        return { errors: null, json: { 'Fn::Sub': this.sub } };
    }
    ;
}
exports.FnSub = FnSub;
/**
 * @class FnGetAtt
 */
class FnGetAtt extends Intrinsic {
    constructor(resource, attribute) {
        super();
        this.resource = resource;
        this.attribute = attribute;
    }
    /**
     * Returns a JSON string version
     * @returns {Object}
     */
    toJson() {
        if (this.resource instanceof resource_1.WKResource || this.resource instanceof parameter_1.Parameter) {
            return {
                errors: null,
                json: { 'Fn::GetAtt': [this.resource.getName(), this.attribute] },
            };
        }
        else {
            return {
                errors: null,
                json: { 'Fn::GetAtt': [this.resource, this.attribute] },
            };
        }
    }
}
exports.FnGetAtt = FnGetAtt;
/**
 * @class FnBase64
 */
class FnBase64 extends Intrinsic {
    constructor(content) {
        super();
        this.content = content;
    }
    /**
     * Returns a JSON string version
     * @returns {Object}
     */
    toJson() {
        return { errors: null, json: { 'Fn::Base64': this.content } };
    }
    ;
}
exports.FnBase64 = FnBase64;
/**
 * @mclass FnFindInMap
 */
class FnFindInMap extends Intrinsic {
    constructor(mapName, topLevelKey, secondLevelKey) {
        super();
        this.mapName = mapName;
        this.topLevelKey = topLevelKey;
        this.secondLevelKey = secondLevelKey;
    }
    /**
   * Returns a JSON string version
   * @returns {Object}
   */
    toJson() {
        return {
            errors: null,
            json: {
                'Fn::FindInMap': [this.mapName, this.topLevelKey, this.secondLevelKey],
            },
        };
    }
    ;
}
exports.FnFindInMap = FnFindInMap;
class FnGetAZs extends Intrinsic {
    constructor(region) {
        super();
        if (region) {
            this.region = region;
        }
        else {
            this.region = { Ref: 'AWS::Region' };
        }
    }
    /**
   *
   * @returns {Object}
   */
    toJson() {
        return { errors: null, json: { 'Fn::GetAZs': this.region } };
    }
    ;
}
exports.FnGetAZs = FnGetAZs;
/**
 * @class FnJoin
 */
class FnJoin extends Intrinsic {
    constructor(delimiter, values) {
        super();
        this.delimiter = delimiter;
        this.values = values;
    }
    /**
   * Returns a JSON string version
   * @returns {Object}
   */
    toJson() {
        return { errors: null, json: { 'Fn::Join': [this.delimiter, this.values] } };
    }
    ;
}
exports.FnJoin = FnJoin;
/**
 * @class FnSelect
 */
class FnSelect extends Intrinsic {
    constructor(index, list) {
        super();
        this.index = index;
        this.list = list;
    }
    toJson() {
        return { errors: null, json: { 'Fn::Select': [this.index, this.list] } };
    }
    ;
}
exports.FnSelect = FnSelect;
class FnAnd extends Intrinsic {
    constructor(condition, body) {
        super();
        this.condition = condition;
        this.body = body;
    }
    toJson() {
        return { errors: null, json: { 'Fn::And': [this.condition, this.body] } };
    }
    ;
}
exports.FnAnd = FnAnd;
class FnEquals extends Intrinsic {
    constructor(first, second) {
        super();
        this.first = first;
        this.second = second;
    }
    toJson() {
        return { errors: null, json: { 'Fn::Equals': [this.first, this.second] } };
    }
}
exports.FnEquals = FnEquals;
class FnIf extends Intrinsic {
    constructor(condition, ifTrue, ifFalse) {
        super();
        this.condition = condition;
        this.ifTrue = ifTrue;
        this.ifFalse = ifFalse;
    }
    toJson() {
        return {
            errors: null,
            json: { 'Fn::If': [this.condition, this.ifTrue, this.ifFalse] },
        };
    }
    ;
}
exports.FnIf = FnIf;
class FnNot extends Intrinsic {
    constructor(condition) {
        super();
        this.condition = condition;
    }
    toJson() {
        return { errors: null, json: { 'Fn::Not': [this.condition] } };
    }
    ;
}
exports.FnNot = FnNot;
class FnOr extends Intrinsic {
    constructor(condition, body) {
        super();
        this.condition = condition;
        this.body = body;
    }
    toJson() {
        return { errors: null, json: { 'Fn::Or': [this.condition, this.body] } };
    }
    ;
}
exports.FnOr = FnOr;
