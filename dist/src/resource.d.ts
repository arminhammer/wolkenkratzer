/**
 * A CloudFormation Resource, mapping to those defined at http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html.
 * @memberof module:Core
 * @property {String} WKName
 */
export declare class WKResource {
    private WKName;
    private WKResourceType;
    private properties;
    private conditional;
    private DependsOn;
    private Metadata;
    private policies;
    constructor(name: string, resourceType: any, properties: any, propertiesObject: any, conditional?: any);
    /**
     * Adds a DependsOn dependency for another Resource
     * @param resource
     */
    dependsOn(resource: any): void;
    /**
     * Get the logical name of the resource
     * @returns {String}
     */
    getName(): string;
    /**
     * Adds a Config block to the Metadata AWS::CloudFormation::Init block of an Instance
     * @param config
     */
    addConfig(config: any): void;
    /**
     * Adds a ConfigSet block to the Metadata AWS::CloudFormation::Init block of an Instance
     * @param configSet
     */
    addConfigSet(configSet: any): void;
    /**
     * Adds a CreationPolicy, UpdatePolicy, or DeletePolic
     * @param policy
     */
    addPolicy(policy: any): void;
    /**
     * Performs validation and returns a pretty-printed JSON object.
     * @returns {String}
     */
    toJson(): Object;
}
