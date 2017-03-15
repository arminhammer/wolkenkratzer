//Utility methods
'use strict';

//Check if an ```Object``` is empty.
export function isEmpty(obj: Object) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

export function safeRename(name: string) {
  return name.replace(/\W/g, '');
}
