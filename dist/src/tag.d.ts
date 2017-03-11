/**
 * @class Tag
 */
export declare class Tag {
    private Key;
    private Value;
    constructor(key: string, value: any);
    /**
   * Returns a JSON representation of the Tag
   * @returns {{Key: module:KMS.Key, Value: *}}
   */
    toJson: () => {
        Key: any;
        Value: any;
    };
}
