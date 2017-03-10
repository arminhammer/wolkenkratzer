import { Jsonify } from './interfaces';
export declare function makeIntrinsic(obj: any): any;
/**
 * @class Intrinsic
 */
export declare class Intrinsic implements Jsonify {
    constructor();
    /**
    * Returns a JSON Object
    */
    toJson(): {
        json: {};
    };
    toJSON(): {};
}
/**
 * @class Ref
 */
export declare class Ref extends Intrinsic implements Jsonify {
    private ref;
    constructor(resource: any);
    /**
     * Returns a JSON string version
     * @returns {Object}
     */
    toJson(): {
        errors: null;
        json: {
            Ref: any;
        };
    };
}
/**
 * @class FnSub
 */
export declare class FnSub extends Intrinsic implements Jsonify {
    private sub;
    constructor(input: any);
    /**
     * Returns a JSON string version
     * @returns {Object}
     */
    toJson(): {
        errors: null;
        json: {
            'Fn::Sub': any;
        };
    };
}
/**
 * @class FnGetAtt
 */
export declare class FnGetAtt extends Intrinsic implements Jsonify {
    private resource;
    private attribute;
    constructor(resource: any, attribute?: any);
    /**
     * Returns a JSON string version
     * @returns {Object}
     */
    toJson(): {
        errors: null;
        json: {
            'Fn::GetAtt': any[];
        };
    };
}
/**
 * @class FnBase64
 */
export declare class FnBase64 extends Intrinsic implements Jsonify {
    private content;
    constructor(content: any);
    /**
     * Returns a JSON string version
     * @returns {Object}
     */
    toJson(): {
        errors: null;
        json: {
            'Fn::Base64': any;
        };
    };
}
/**
 * @mclass FnFindInMap
 */
export declare class FnFindInMap extends Intrinsic implements Jsonify {
    private mapName;
    private topLevelKey;
    private secondLevelKey;
    constructor(mapName: any, topLevelKey?: any, secondLevelKey?: any);
    /**
   * Returns a JSON string version
   * @returns {Object}
   */
    toJson(): {
        errors: null;
        json: {
            'Fn::FindInMap': any[];
        };
    };
}
export declare class FnGetAZs extends Intrinsic implements Jsonify {
    private region;
    constructor(region: any);
    /**
   *
   * @returns {Object}
   */
    toJson(): {
        errors: null;
        json: {
            'Fn::GetAZs': any;
        };
    };
}
/**
 * @class FnJoin
 */
export declare class FnJoin extends Intrinsic implements Jsonify {
    private delimiter;
    private values;
    constructor(delimiter: any, values: any);
    /**
   * Returns a JSON string version
   * @returns {Object}
   */
    toJson(): {
        errors: null;
        json: {
            'Fn::Join': any[];
        };
    };
}
/**
 * @class FnSelect
 */
export declare class FnSelect extends Intrinsic implements Jsonify {
    private index;
    private list;
    constructor(index: any, list: any);
    toJson(): {
        errors: null;
        json: {
            'Fn::Select': any[];
        };
    };
}
export declare class FnAnd extends Intrinsic implements Jsonify {
    private condition;
    private body;
    constructor(condition: any, body: any);
    toJson(): {
        errors: null;
        json: {
            'Fn::And': any[];
        };
    };
}
export declare class FnEquals extends Intrinsic implements Jsonify {
    private first;
    private second;
    constructor(first: any, second: any);
    toJson(): {
        errors: null;
        json: {
            'Fn::Equals': any[];
        };
    };
}
export declare class FnIf extends Intrinsic implements Jsonify {
    private condition;
    private ifTrue;
    private ifFalse;
    constructor(condition: any, ifTrue: any, ifFalse: any);
    toJson(): {
        errors: null;
        json: {
            'Fn::If': any[];
        };
    };
}
export declare class FnNot extends Intrinsic implements Jsonify {
    private condition;
    constructor(condition: any);
    toJson(): {
        errors: null;
        json: {
            'Fn::Not': any[];
        };
    };
}
export declare class FnOr extends Intrinsic implements Jsonify {
    private condition;
    private body;
    constructor(condition: any, body: any);
    toJson(): {
        errors: null;
        json: {
            'Fn::Or': any[];
        };
    };
}
