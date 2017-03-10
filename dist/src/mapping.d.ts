/**
 * Mapping
*/
export declare class Mapping {
    private WKName;
    private body;
    constructor(name: string, body: string);
    /**
     * Provides a JSON version of the Mapping
     * @returns {Object}
     */
    toJson(): Object;
}
