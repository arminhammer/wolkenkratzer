/**
 * @class Exception
 */
export declare class Exception {
    private message;
    protected name: string;
    constructor(message: string);
    /**
    * Returns a JSON string
    */
    toJson(): string;
}
/**
 * @class ValueException
 */
export declare class ValueException extends Exception {
    constructor(message: string);
}
/**
 * @class RequiredPropertyException
 */
export declare class RequiredPropertyException extends Exception {
    constructor(message: string);
}
/**
 * @class TypeException
 */
export declare class TypeException extends Exception {
    constructor(message: string);
}
/**
 * @class ConditionNotMetException
 */
export declare class ConditionNotMetException extends Exception {
    constructor(message: string);
}
