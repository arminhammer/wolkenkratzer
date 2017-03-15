//Utility methods
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
//Check if an ```Object``` is empty.
function isEmpty(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}
exports.isEmpty = isEmpty;
function safeRename(name) {
    return name.replace(/\W/g, '');
}
exports.safeRename = safeRename;
