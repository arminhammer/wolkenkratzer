//Utility methods
'use strict';

//Check if an ```Object``` is empty.
export function isEmpty(obj: Object) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

export function safeRename(name: string) {
  return name.replace(/\W/g, '');
}

export function getTypeFromString(typeString: string, types: any) {
  let realType: any = String;
  switch (typeString) {
    case 'String':
      realType = String;
      break;
    case 'Number':
      realType = Number;
      break;
    case 'Boolean':
      realType = Boolean;
      break;
    case 'Object':
      realType = Object;
      break;
    default:
      realType = types[typeString];
      break;
  }
  return realType;
}