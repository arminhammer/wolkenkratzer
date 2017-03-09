'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @class Exception
 */
class Exception {
    constructor(message) {
        this.message = message;
    }
    /**
    * Returns a JSON string
    */
    toJson() {
        return this.message;
    }
    ;
}
exports.Exception = Exception;
/**
 * @class ValueException
 */
class ValueException extends Exception {
    constructor(message) {
        super(message);
        this.name = 'ValueError';
    }
}
exports.ValueException = ValueException;
/**
 * @class RequiredPropertyException
 */
class RequiredPropertyException extends Exception {
    constructor(message) {
        super(message);
        this.name = 'RequiredPropertyException';
    }
}
exports.RequiredPropertyException = RequiredPropertyException;
/**
 * @class TypeException
 */
class TypeException extends Exception {
    constructor(message) {
        super(message);
        this.name = 'TypeException';
    }
}
exports.TypeException = TypeException;
/**
 * @class ConditionNotMetException
 */
class ConditionNotMetException extends Exception {
    constructor(message) {
        super(message);
        this.name = 'ConditionNotMetException';
    }
}
exports.ConditionNotMetException = ConditionNotMetException;
