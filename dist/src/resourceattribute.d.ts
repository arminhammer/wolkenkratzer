/** @module Core */
/**
 * @memberof module:Core
 */
export declare class ResourceAttribute {
    private WKName;
    private Type;
    private isArray;
    private required;
    private val;
    constructor(name: string, type: any, isArray: boolean, required: any, value: any);
    /**
     * Set the value of the attribute
     * @param value
     */
    set(value: any): void;
    /**
     * Add a value to the attribute array
     * @param val
     */
    push(val: any): void;
    /**
     * Get the value of the attribute
     * @returns {FnGetAtt|module:Core.FnGetAtt|FnFindInMap|*|Ref|FnJoin}
     */
    get(): any;
    /**
     * Add an Fn Ref intrinsic function to link another resource to the attribute
     * @param resource
     */
    ref(resource: any): void;
    /**
     * Add an Fn Sub intrinsic function
     * @param resource
     */
    sub(input: any): void;
    /**
     * Add an Fn GetAtt intrinsic function to link the attribute of another resource to the attribute
     * @param resource
     * @param attribute
     */
    getAtt(resource: any, attribute: any): void;
    /**
     * Add a Fn FindInMap intrinsic function to set the value of the attribute
     * @param map
     * @param top
     * @param second
     */
    findInMap(map: any, top: any, second: any): void;
    /**
     * Add an Fn Join intrinsic function to set the value of the attribute
     * @param delimiter
     * @param values
     */
    join(delimiter: any, values: any): void;
    /**
     * Add an Fn Base64 intrinsic function to set the value of the attribute
     * @param content
     */
    base64(content: any): void;
    /**
     * Get a JSON representation of the attribute
     * @returns {*}
     */
    toJson(): {
        errors: string[];
        json: any;
    } | {
        errors: null;
        json: null;
    };
}
