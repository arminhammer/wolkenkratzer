/**
 * @class Output
 */
export declare class Output {
    private WKName;
    private Description;
    private Value;
    constructor(name: string, parameter: any);
    /**
     * Returns a JSON version of the Output
     * @returns {Object}
     */
    toJson(): any;
}
