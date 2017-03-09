//Utility methods
'use strict';

//Check if an ```Object``` is empty.
export function isEmpty(obj: Object) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

export function safeRename(name: string) {
  return name.replace(/\W/g, '');
}

function _generateShortHash() {
  return ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(
    -4
  );
}
