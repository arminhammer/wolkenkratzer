"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_extra_1 = require("fs-extra");
var path_1 = require("path");
var ec2info = require('../ec2info/www/instances.json');
var results = ec2info.map(function (i) {
    return {
        arch: i.arch,
        instance_type: i.instance_type,
        linux_virtualization_types: i.linux_virtualization_types
    };
});
fs_extra_1.default
    .writeJson(path_1.default.resolve(__dirname, '..', 'ec2info.json'), results)
    .then(function () {
    console.log('Finished.');
})
    .catch(console.error);
//# sourceMappingURL=buildEC2Data.js.map