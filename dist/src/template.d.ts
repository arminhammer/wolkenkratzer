import { Mapping } from './mapping';
import { Output } from './output';
import { Parameter } from './parameter';
/**
 * @memberof module:Core
 */
export declare class Template {
    private Description;
    private Metadata;
    private Conditions;
    private Mappings;
    private Outputs;
    private Parameters;
    private Resources;
    private AWSTemplateFormatVersion;
    constructor(template: any);
    /**
     * Add an element to the Template
     * @param element
     */
    add(element: Parameter | Object | Output | Mapping): void;
    /**
     * Remove an element from the Template
     * @param element
     */
    remove(element: Parameter | Object | Output | Mapping): void;
    /**
     * Set the metadata value of the template
     * @param metadata
     */
    setMetadata(metadata: string): void;
    /**
     * Set the version value of the template
     * @param version
     */
    setVersion(version: string): void;
    /**
     * Add a description to the template
     * @param description
     */
    setDescription(description: string): void;
    /**
     * Add a condition to the template
     * @param name
     * @param condition
     */
    addCondition(name: string, condition: string): void;
    /**
     * Remove a condition from the template
     * @param name
     * @param condition
     */
    removeCondition(name: string, condition: string): void;
    /**
     *
     * @param callback
     */
    toJsonAsync(callback: Function): any;
    /**
     * Returns a CloudFormation JSON template string
     * @returns {Object}
     */
    toJson(): any;
    toYaml(): {
        Errors: any;
        Template: any;
    };
}
