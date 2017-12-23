/**
 * @hidden
 * @param obj
 */
function _isEmptyObject(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

export { _isEmptyObject };
