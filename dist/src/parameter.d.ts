/**
 * @class Parameter
 */
export declare class Parameter {
    private WKName;
    private Type;
    private AllowedPattern;
    private AllowedValues;
    private ConstraintDescription;
    private Default;
    private Description;
    private MaxLength;
    private MaxValue;
    private MinLength;
    private MinValue;
    private NoEcho;
    constructor(name: string, parameter: any);
    getName(): string;
    /**
     * Provides a JSON version of the Parameter
     */
    toJson(): any;
}
