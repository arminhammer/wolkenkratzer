/**
 * Created by arming on 9/17/16.
 */
'use strict';

function isEmpty(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

function safeRename(name) {
  return name.replace(/\W/g, '');
}

function _generateShortHash() {
  return ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(
    -4
  );
}

module.exports = {
  isEmpty: isEmpty,
  safeRename: safeRename
};
