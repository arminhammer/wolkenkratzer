/**
 * @class TagSet
 */
export declare class TagSet {
    private tags;
    constructor();
    /**
     * Adds a tag to the resource's tagset. If one parameter is provided and it is of type Tag, it will be added. If the only parameter is
     * an object with the { Key: 'Key', Value: 'Value' } format, it is also valid. Alternatively two string parameters are provided, the
     * first being the key and the second being the value.
     * @param first
     * @param second
     */
    add(first: any, second: any): void;
    /**
     * Removes a Tag object from the TagSet
     * @param tag
     */
    remove(tag: string): void;
    /**
     * Returns a JSON representation of the TagSet
     * @returns {Array}
     */
    toJson(): any;
}
