'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const exceptions_1 = require("./exceptions");
const tag_1 = require("./tag");
/**
 * @class TagSet
 */
class TagSet {
    constructor() {
        this.tags = {};
    }
    /**
     * Adds a tag to the resource's tagset. If one parameter is provided and it is of type Tag, it will be added. If the only parameter is
     * an object with the { Key: 'Key', Value: 'Value' } format, it is also valid. Alternatively two string parameters are provided, the
     * first being the key and the second being the value.
     * @param first
     * @param second
     */
    add(first, second) {
        let tag;
        if (typeof second === 'undefined') {
            if (!(first instanceof tag_1.Tag)) {
                if (first.Key && first.Value) {
                    tag = new tag_1.Tag(first.Key, first.Value);
                }
                else {
                    throw new exceptions_1.TypeException(tag + 'is not a valid tag');
                }
            }
            else {
                tag = first;
            }
            this.tags[tag.Key] = tag;
        }
        else {
            if (typeof first === 'string' && typeof second === 'string') {
                tag = new tag_1.Tag(first, second);
                this.tags[tag.Key] = tag;
            }
            else {
                throw new exceptions_1.TypeException(first + ' and ' + second + 'must be strings.');
            }
        }
    }
    ;
    /**
     * Removes a Tag object from the TagSet
     * @param tag
     */
    remove(tag) {
        delete this.tags['tag'];
    }
    ;
    /**
     * Returns a JSON representation of the TagSet
     * @returns {Array}
     */
    toJson() {
        if (Object.keys(this.tags).length > 0) {
            let tagArray = [];
            for (let tag in this.tags) {
                let tagJson = this.tags[tag].toJson();
                tagArray.push(tagJson);
            }
            return { errors: null, json: tagArray };
        }
        else {
            return { errors: null, json: null };
        }
    }
    ;
}
exports.TagSet = TagSet;
