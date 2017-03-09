/**
 * @memberof module:Core
 */
export declare class Template {
    private Description;
    constructor(template: any);
    /**
     * Add an element to the Template
     * @param element
     */
    Template: any;
    prototype: any;
    add: (element: any) => void;
    /**
     * Remove an element from the Template
     * @param element
     */
    Template: any;
    prototype: any;
    remove: (element: any) => void;
    /**
     * Set the metadata value of the template
     * @param metadata
     */
    Template: any;
    prototype: any;
    setMetadata: (metadata: any) => void;
    /**
     * Set the version value of the template
     * @param version
     */
    Template: any;
    prototype: any;
    setVersion: (version: any) => void;
    /**
     * Add a description to the template
     * @param description
     */
    Template: any;
    prototype: any;
    setDescription: (description: any) => void;
    /**
     * Add a condition to the template
     * @param name
     * @param condition
     */
    Template: any;
    prototype: any;
    addCondition: (name: any, condition: any) => void;
    /**
     * Remove a condition from the template
     * @param name
     * @param condition
     */
    Template: any;
    prototype: any;
    removeCondition: (name: any, condition: any) => void;
    /**
     *
     * @param callback
     */
    Template: any;
    prototype: any;
    toJsonAsync: (callback: any) => Promise<{}> | undefined;
    /**
     * Returns a CloudFormation JSON template string
     * @returns {Object}
     */
    Template: any;
    prototype: any;
    toJson: () => {
        Errors: any[];
        Template: string;
    };
    Template: any;
    prototype: any;
    toYaml: () => {
        Errors: any;
        Template: any;
    };
}
