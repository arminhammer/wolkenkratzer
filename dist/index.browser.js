var wolkenkratzer = (function (exports) {
'use strict';

var global$1 = typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};



















var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};













var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/** Detect free variable `global` from Node.js. */var freeGlobal=(typeof global$1==='undefined'?'undefined':_typeof(global$1))=='object'&&global$1&&global$1.Object===Object&&global$1;

var freeSelf=(typeof self==='undefined'?'undefined':_typeof(self))=='object'&&self&&self.Object===Object&&self;/** Used as a reference to the global object. */var root=freeGlobal||freeSelf||Function('return this')();

var _Symbol=root.Symbol;

var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */var nativeObjectToString=objectProto.toString;/** Built-in value references. */var symToStringTag$1=_Symbol?_Symbol.toStringTag:undefined;/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */function getRawTag(value){var isOwn=hasOwnProperty.call(value,symToStringTag$1),tag=value[symToStringTag$1];try{value[symToStringTag$1]=undefined;var unmasked=true;}catch(e){}var result=nativeObjectToString.call(value);if(unmasked){if(isOwn){value[symToStringTag$1]=tag;}else{delete value[symToStringTag$1];}}return result;}

/** Used for built-in method references. */var objectProto$1=Object.prototype;/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */var nativeObjectToString$1=objectProto$1.toString;/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */function objectToString(value){return nativeObjectToString$1.call(value);}

var nullTag='[object Null]'; var undefinedTag='[object Undefined]';/** Built-in value references. */var symToStringTag=_Symbol?_Symbol.toStringTag:undefined;/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */function baseGetTag(value){if(value==null){return value===undefined?undefinedTag:nullTag;}return symToStringTag&&symToStringTag in Object(value)?getRawTag(value):objectToString(value);}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */function isObjectLike(value){return value!=null&&(typeof value==='undefined'?'undefined':_typeof(value))=='object';}

var symbolTag='[object Symbol]';/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */function isSymbol(value){return(typeof value==='undefined'?'undefined':_typeof(value))=='symbol'||isObjectLike(value)&&baseGetTag(value)==symbolTag;}

var NAN=0/0;/**
 * The base implementation of `_.toNumber` which doesn't ensure correct
 * conversions of binary, hexadecimal, or octal string values.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 */function baseToNumber(value){if(typeof value=='number'){return value;}if(isSymbol(value)){return NAN;}return+value;}

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */function arrayMap(array,iteratee){var index=-1,length=array==null?0:array.length,result=Array(length);while(++index<length){result[index]=iteratee(array[index],index,array);}return result;}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */var isArray=Array.isArray;

var INFINITY=1/0;/** Used to convert symbols to primitives and strings. */var symbolProto=_Symbol?_Symbol.prototype:undefined; var symbolToString=symbolProto?symbolProto.toString:undefined;/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */function baseToString(value){// Exit early for strings to avoid a performance hit in some environments.
if(typeof value=='string'){return value;}if(isArray(value)){// Recursively convert values (susceptible to call stack limits).
return arrayMap(value,baseToString)+'';}if(isSymbol(value)){return symbolToString?symbolToString.call(value):'';}var result=value+'';return result=='0'&&1/value==-INFINITY?'-0':result;}

function createMathOperation(operator,defaultValue){return function(value,other){var result;if(value===undefined&&other===undefined){return defaultValue;}if(value!==undefined){result=value;}if(other!==undefined){if(result===undefined){return other;}if(typeof value=='string'||typeof other=='string'){value=baseToString(value);other=baseToString(other);}else{value=baseToNumber(value);other=baseToNumber(other);}result=operator(value,other);}return result;};}

var add=createMathOperation(function(augend,addend){return augend+addend;},0);

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */function isObject(value){var type=typeof value==='undefined'?'undefined':_typeof(value);return value!=null&&(type=='object'||type=='function');}

var NAN$1=0/0;/** Used to match leading and trailing whitespace. */var reTrim=/^\s+|\s+$/g;/** Used to detect bad signed hexadecimal string values. */var reIsBadHex=/^[-+]0x[0-9a-f]+$/i;/** Used to detect binary string values. */var reIsBinary=/^0b[01]+$/i;/** Used to detect octal string values. */var reIsOctal=/^0o[0-7]+$/i;/** Built-in method references without a dependency on `root`. */var freeParseInt=parseInt;/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */function toNumber(value){if(typeof value=='number'){return value;}if(isSymbol(value)){return NAN$1;}if(isObject(value)){var other=typeof value.valueOf=='function'?value.valueOf():value;value=isObject(other)?other+'':other;}if(typeof value!='string'){return value===0?value:+value;}value=value.replace(reTrim,'');var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NAN$1:+value;}

var INFINITY$1=1/0; var MAX_INTEGER=1.7976931348623157e+308;/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */function toFinite(value){if(!value){return value===0?value:0;}value=toNumber(value);if(value===INFINITY$1||value===-INFINITY$1){var sign=value<0?-1:1;return sign*MAX_INTEGER;}return value===value?value:0;}

function toInteger(value){var result=toFinite(value),remainder=result%1;return result===result?remainder?result-remainder:result:0;}

var FUNC_ERROR_TEXT='Expected a function';/**
 * The opposite of `_.before`; this method creates a function that invokes
 * `func` once it's called `n` or more times.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {number} n The number of calls before `func` is invoked.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * var saves = ['profile', 'settings'];
 *
 * var done = _.after(saves.length, function() {
 *   console.log('done saving!');
 * });
 *
 * _.forEach(saves, function(type) {
 *   asyncSave({ 'type': type, 'complete': done });
 * });
 * // => Logs 'done saving!' after the two async saves have completed.
 */function after(n,func){if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}n=toInteger(n);return function(){if(--n<1){return func.apply(this,arguments);}};}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */function identity(value){return value;}

var asyncTag='[object AsyncFunction]'; var funcTag='[object Function]'; var genTag='[object GeneratorFunction]'; var proxyTag='[object Proxy]';/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */function isFunction(value){if(!isObject(value)){return false;}// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 9 which returns 'object' for typed arrays and other constructors.
var tag=baseGetTag(value);return tag==funcTag||tag==genTag||tag==asyncTag||tag==proxyTag;}

var coreJsData=root['__core-js_shared__'];

var maskSrcKey=function(){var uid=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||'');return uid?'Symbol(src)_1.'+uid:'';}();/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */function isMasked(func){return!!maskSrcKey&&maskSrcKey in func;}

/** Used for built-in method references. */var funcProto$1=Function.prototype;/** Used to resolve the decompiled source of functions. */var funcToString$1=funcProto$1.toString;/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */function toSource(func){if(func!=null){try{return funcToString$1.call(func);}catch(e){}try{return func+'';}catch(e){}}return'';}

var reRegExpChar=/[\\^$.*+?()[\]{}|]/g;/** Used to detect host constructors (Safari). */var reIsHostCtor=/^\[object .+?Constructor\]$/;/** Used for built-in method references. */var funcProto=Function.prototype; var objectProto$2=Object.prototype;/** Used to resolve the decompiled source of functions. */var funcToString=funcProto.toString;/** Used to check objects for own properties. */var hasOwnProperty$1=objectProto$2.hasOwnProperty;/** Used to detect if a method is native. */var reIsNative=RegExp('^'+funcToString.call(hasOwnProperty$1).replace(reRegExpChar,'\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$');/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */function baseIsNative(value){if(!isObject(value)||isMasked(value)){return false;}var pattern=isFunction(value)?reIsNative:reIsHostCtor;return pattern.test(toSource(value));}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */function getValue(object,key){return object==null?undefined:object[key];}

function getNative(object,key){var value=getValue(object,key);return baseIsNative(value)?value:undefined;}

var WeakMap=getNative(root,'WeakMap');

var metaMap=WeakMap&&new WeakMap();

var baseSetData=!metaMap?identity:function(func,data){metaMap.set(func,data);return func;};

var objectCreate=Object.create;/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */var baseCreate=function(){function object(){}return function(proto){if(!isObject(proto)){return{};}if(objectCreate){return objectCreate(proto);}object.prototype=proto;var result=new object();object.prototype=undefined;return result;};}();

function createCtor(Ctor){return function(){// Use a `switch` statement to work with class constructors. See
// http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
// for more details.
var args=arguments;switch(args.length){case 0:return new Ctor();case 1:return new Ctor(args[0]);case 2:return new Ctor(args[0],args[1]);case 3:return new Ctor(args[0],args[1],args[2]);case 4:return new Ctor(args[0],args[1],args[2],args[3]);case 5:return new Ctor(args[0],args[1],args[2],args[3],args[4]);case 6:return new Ctor(args[0],args[1],args[2],args[3],args[4],args[5]);case 7:return new Ctor(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);}var thisBinding=baseCreate(Ctor.prototype),result=Ctor.apply(thisBinding,args);// Mimic the constructor's `return` behavior.
// See https://es5.github.io/#x13.2.2 for more details.
return isObject(result)?result:thisBinding;};}

var WRAP_BIND_FLAG$1=1;/**
 * Creates a function that wraps `func` to invoke it with the optional `this`
 * binding of `thisArg`.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @returns {Function} Returns the new wrapped function.
 */function createBind(func,bitmask,thisArg){var isBind=bitmask&WRAP_BIND_FLAG$1,Ctor=createCtor(func);function wrapper(){var fn=this&&this!==root&&this instanceof wrapper?Ctor:func;return fn.apply(isBind?thisArg:this,arguments);}return wrapper;}

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */function apply(func,thisArg,args){switch(args.length){case 0:return func.call(thisArg);case 1:return func.call(thisArg,args[0]);case 2:return func.call(thisArg,args[0],args[1]);case 3:return func.call(thisArg,args[0],args[1],args[2]);}return func.apply(thisArg,args);}

/* Built-in method references for those with the same name as other `lodash` methods. */var nativeMax$1=Math.max;/**
 * Creates an array that is the composition of partially applied arguments,
 * placeholders, and provided arguments into a single array of arguments.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to prepend to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */function composeArgs(args,partials,holders,isCurried){var argsIndex=-1,argsLength=args.length,holdersLength=holders.length,leftIndex=-1,leftLength=partials.length,rangeLength=nativeMax$1(argsLength-holdersLength,0),result=Array(leftLength+rangeLength),isUncurried=!isCurried;while(++leftIndex<leftLength){result[leftIndex]=partials[leftIndex];}while(++argsIndex<holdersLength){if(isUncurried||argsIndex<argsLength){result[holders[argsIndex]]=args[argsIndex];}}while(rangeLength--){result[leftIndex++]=args[argsIndex++];}return result;}

/* Built-in method references for those with the same name as other `lodash` methods. */var nativeMax$2=Math.max;/**
 * This function is like `composeArgs` except that the arguments composition
 * is tailored for `_.partialRight`.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to append to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */function composeArgsRight(args,partials,holders,isCurried){var argsIndex=-1,argsLength=args.length,holdersIndex=-1,holdersLength=holders.length,rightIndex=-1,rightLength=partials.length,rangeLength=nativeMax$2(argsLength-holdersLength,0),result=Array(rangeLength+rightLength),isUncurried=!isCurried;while(++argsIndex<rangeLength){result[argsIndex]=args[argsIndex];}var offset=argsIndex;while(++rightIndex<rightLength){result[offset+rightIndex]=partials[rightIndex];}while(++holdersIndex<holdersLength){if(isUncurried||argsIndex<argsLength){result[offset+holders[holdersIndex]]=args[argsIndex++];}}return result;}

/**
 * Gets the number of `placeholder` occurrences in `array`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} placeholder The placeholder to search for.
 * @returns {number} Returns the placeholder count.
 */function countHolders(array,placeholder){var length=array.length,result=0;while(length--){if(array[length]===placeholder){++result;}}return result;}

/**
 * The function whose prototype chain sequence wrappers inherit from.
 *
 * @private
 */function baseLodash(){// No operation performed.
}

var MAX_ARRAY_LENGTH=4294967295;/**
 * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
 *
 * @private
 * @constructor
 * @param {*} value The value to wrap.
 */function LazyWrapper(value){this.__wrapped__=value;this.__actions__=[];this.__dir__=1;this.__filtered__=false;this.__iteratees__=[];this.__takeCount__=MAX_ARRAY_LENGTH;this.__views__=[];}// Ensure `LazyWrapper` is an instance of `baseLodash`.
LazyWrapper.prototype=baseCreate(baseLodash.prototype);LazyWrapper.prototype.constructor=LazyWrapper;

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */function noop(){// No operation performed.
}

var getData=!metaMap?noop:function(func){return metaMap.get(func);};

/** Used to lookup unminified function names. */var realNames={};

var objectProto$3=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$2=objectProto$3.hasOwnProperty;/**
 * Gets the name of `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {string} Returns the function name.
 */function getFuncName(func){var result=func.name+'',array=realNames[result],length=hasOwnProperty$2.call(realNames,result)?array.length:0;while(length--){var data=array[length],otherFunc=data.func;if(otherFunc==null||otherFunc==func){return data.name;}}return result;}

function LodashWrapper(value,chainAll){this.__wrapped__=value;this.__actions__=[];this.__chain__=!!chainAll;this.__index__=0;this.__values__=undefined;}LodashWrapper.prototype=baseCreate(baseLodash.prototype);LodashWrapper.prototype.constructor=LodashWrapper;

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */function copyArray(source,array){var index=-1,length=source.length;array||(array=Array(length));while(++index<length){array[index]=source[index];}return array;}

function wrapperClone(wrapper){if(wrapper instanceof LazyWrapper){return wrapper.clone();}var result=new LodashWrapper(wrapper.__wrapped__,wrapper.__chain__);result.__actions__=copyArray(wrapper.__actions__);result.__index__=wrapper.__index__;result.__values__=wrapper.__values__;return result;}

var objectProto$4=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$3=objectProto$4.hasOwnProperty;/**
 * Creates a `lodash` object which wraps `value` to enable implicit method
 * chain sequences. Methods that operate on and return arrays, collections,
 * and functions can be chained together. Methods that retrieve a single value
 * or may return a primitive value will automatically end the chain sequence
 * and return the unwrapped value. Otherwise, the value must be unwrapped
 * with `_#value`.
 *
 * Explicit chain sequences, which must be unwrapped with `_#value`, may be
 * enabled using `_.chain`.
 *
 * The execution of chained methods is lazy, that is, it's deferred until
 * `_#value` is implicitly or explicitly called.
 *
 * Lazy evaluation allows several methods to support shortcut fusion.
 * Shortcut fusion is an optimization to merge iteratee calls; this avoids
 * the creation of intermediate arrays and can greatly reduce the number of
 * iteratee executions. Sections of a chain sequence qualify for shortcut
 * fusion if the section is applied to an array and iteratees accept only
 * one argument. The heuristic for whether a section qualifies for shortcut
 * fusion is subject to change.
 *
 * Chaining is supported in custom builds as long as the `_#value` method is
 * directly or indirectly included in the build.
 *
 * In addition to lodash methods, wrappers have `Array` and `String` methods.
 *
 * The wrapper `Array` methods are:
 * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
 *
 * The wrapper `String` methods are:
 * `replace` and `split`
 *
 * The wrapper methods that support shortcut fusion are:
 * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
 * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
 * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
 *
 * The chainable wrapper methods are:
 * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
 * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
 * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
 * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
 * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
 * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
 * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
 * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
 * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
 * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
 * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
 * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
 * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
 * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
 * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
 * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
 * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
 * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
 * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
 * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
 * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
 * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
 * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
 * `zipObject`, `zipObjectDeep`, and `zipWith`
 *
 * The wrapper methods that are **not** chainable by default are:
 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
 * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
 * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
 * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
 * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
 * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
 * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
 * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
 * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
 * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
 * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
 * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
 * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
 * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
 * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
 * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
 * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
 * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
 * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
 * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
 * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
 * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
 * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
 * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
 * `upperFirst`, `value`, and `words`
 *
 * @name _
 * @constructor
 * @category Seq
 * @param {*} value The value to wrap in a `lodash` instance.
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var wrapped = _([1, 2, 3]);
 *
 * // Returns an unwrapped value.
 * wrapped.reduce(_.add);
 * // => 6
 *
 * // Returns a wrapped value.
 * var squares = wrapped.map(square);
 *
 * _.isArray(squares);
 * // => false
 *
 * _.isArray(squares.value());
 * // => true
 */function lodash(value){if(isObjectLike(value)&&!isArray(value)&&!(value instanceof LazyWrapper)){if(value instanceof LodashWrapper){return value;}if(hasOwnProperty$3.call(value,'__wrapped__')){return wrapperClone(value);}}return new LodashWrapper(value);}// Ensure wrappers are instances of `baseLodash`.
lodash.prototype=baseLodash.prototype;lodash.prototype.constructor=lodash;

function isLaziable(func){var funcName=getFuncName(func),other=lodash[funcName];if(typeof other!='function'||!(funcName in LazyWrapper.prototype)){return false;}if(func===other){return true;}var data=getData(other);return!!data&&func===data[0];}

/** Used to detect hot functions by number of calls within a span of milliseconds. */var HOT_COUNT=800;
var HOT_SPAN=16;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeNow=Date.now;/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */function shortOut(func){var count=0,lastCalled=0;return function(){var stamp=nativeNow(),remaining=HOT_SPAN-(stamp-lastCalled);lastCalled=stamp;if(remaining>0){if(++count>=HOT_COUNT){return arguments[0];}}else{count=0;}return func.apply(undefined,arguments);};}

var setData=shortOut(baseSetData);

/** Used to match wrap detail comments. */var reWrapDetails=/\{\n\/\* \[wrapped with (.+)\] \*/;
var reSplitDetails=/,? & /;/**
 * Extracts wrapper details from the `source` body comment.
 *
 * @private
 * @param {string} source The source to inspect.
 * @returns {Array} Returns the wrapper details.
 */function getWrapDetails(source){var match=source.match(reWrapDetails);return match?match[1].split(reSplitDetails):[];}

/** Used to match wrap detail comments. */var reWrapComment=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;/**
 * Inserts wrapper `details` in a comment at the top of the `source` body.
 *
 * @private
 * @param {string} source The source to modify.
 * @returns {Array} details The details to insert.
 * @returns {string} Returns the modified source.
 */function insertWrapDetails(source,details){var length=details.length;if(!length){return source;}var lastIndex=length-1;details[lastIndex]=(length>1?'& ':'')+details[lastIndex];details=details.join(length>2?', ':' ');return source.replace(reWrapComment,'{\n/* [wrapped with '+details+'] */\n');}

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */function constant(value){return function(){return value;};}

var defineProperty$1=function(){try{var func=getNative(Object,'defineProperty');func({},'',{});return func;}catch(e){}}();

var baseSetToString=!defineProperty$1?identity:function(func,string){return defineProperty$1(func,'toString',{'configurable':true,'enumerable':false,'value':constant(string),'writable':true});};

var setToString=shortOut(baseSetToString);

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */function arrayEach(array,iteratee){var index=-1,length=array==null?0:array.length;while(++index<length){if(iteratee(array[index],index,array)===false){break;}}return array;}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function baseFindIndex(array,predicate,fromIndex,fromRight){var length=array.length,index=fromIndex+(fromRight?1:-1);while(fromRight?index--:++index<length){if(predicate(array[index],index,array)){return index;}}return-1;}

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */function baseIsNaN(value){return value!==value;}

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function strictIndexOf(array,value,fromIndex){var index=fromIndex-1,length=array.length;while(++index<length){if(array[index]===value){return index;}}return-1;}

function baseIndexOf(array,value,fromIndex){return value===value?strictIndexOf(array,value,fromIndex):baseFindIndex(array,baseIsNaN,fromIndex);}

function arrayIncludes(array,value){var length=array==null?0:array.length;return!!length&&baseIndexOf(array,value,0)>-1;}

var WRAP_BIND_FLAG$4=1; var WRAP_BIND_KEY_FLAG$3=2; var WRAP_CURRY_FLAG$3=8; var WRAP_CURRY_RIGHT_FLAG$2=16; var WRAP_PARTIAL_FLAG$2=32; var WRAP_PARTIAL_RIGHT_FLAG$2=64; var WRAP_ARY_FLAG$2=128; var WRAP_REARG_FLAG=256; var WRAP_FLIP_FLAG$1=512;/** Used to associate wrap methods with their bit flags. */var wrapFlags=[['ary',WRAP_ARY_FLAG$2],['bind',WRAP_BIND_FLAG$4],['bindKey',WRAP_BIND_KEY_FLAG$3],['curry',WRAP_CURRY_FLAG$3],['curryRight',WRAP_CURRY_RIGHT_FLAG$2],['flip',WRAP_FLIP_FLAG$1],['partial',WRAP_PARTIAL_FLAG$2],['partialRight',WRAP_PARTIAL_RIGHT_FLAG$2],['rearg',WRAP_REARG_FLAG]];/**
 * Updates wrapper `details` based on `bitmask` flags.
 *
 * @private
 * @returns {Array} details The details to modify.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Array} Returns `details`.
 */function updateWrapDetails(details,bitmask){arrayEach(wrapFlags,function(pair){var value='_.'+pair[0];if(bitmask&pair[1]&&!arrayIncludes(details,value)){details.push(value);}});return details.sort();}

function setWrapToString(wrapper,reference,bitmask){var source=reference+'';return setToString(wrapper,insertWrapDetails(source,updateWrapDetails(getWrapDetails(source),bitmask)));}

var WRAP_BIND_FLAG$3=1; var WRAP_BIND_KEY_FLAG$2=2; var WRAP_CURRY_BOUND_FLAG=4; var WRAP_CURRY_FLAG$2=8; var WRAP_PARTIAL_FLAG$1=32; var WRAP_PARTIAL_RIGHT_FLAG$1=64;/**
 * Creates a function that wraps `func` to continue currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {Function} wrapFunc The function to create the `func` wrapper.
 * @param {*} placeholder The placeholder value.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */function createRecurry(func,bitmask,wrapFunc,placeholder,thisArg,partials,holders,argPos,ary,arity){var isCurry=bitmask&WRAP_CURRY_FLAG$2,newHolders=isCurry?holders:undefined,newHoldersRight=isCurry?undefined:holders,newPartials=isCurry?partials:undefined,newPartialsRight=isCurry?undefined:partials;bitmask|=isCurry?WRAP_PARTIAL_FLAG$1:WRAP_PARTIAL_RIGHT_FLAG$1;bitmask&=~(isCurry?WRAP_PARTIAL_RIGHT_FLAG$1:WRAP_PARTIAL_FLAG$1);if(!(bitmask&WRAP_CURRY_BOUND_FLAG)){bitmask&=~(WRAP_BIND_FLAG$3|WRAP_BIND_KEY_FLAG$2);}var newData=[func,bitmask,thisArg,newPartials,newHolders,newPartialsRight,newHoldersRight,argPos,ary,arity];var result=wrapFunc.apply(undefined,newData);if(isLaziable(func)){setData(result,newData);}result.placeholder=placeholder;return setWrapToString(result,func,bitmask);}

/**
 * Gets the argument placeholder value for `func`.
 *
 * @private
 * @param {Function} func The function to inspect.
 * @returns {*} Returns the placeholder value.
 */function getHolder(func){var object=func;return object.placeholder;}

/** Used as references for various `Number` constants. */var MAX_SAFE_INTEGER=9007199254740991;/** Used to detect unsigned integer values. */var reIsUint=/^(?:0|[1-9]\d*)$/;/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */function isIndex(value,length){length=length==null?MAX_SAFE_INTEGER:length;return!!length&&(typeof value=='number'||reIsUint.test(value))&&value>-1&&value%1==0&&value<length;}

var nativeMin=Math.min;/**
 * Reorder `array` according to the specified indexes where the element at
 * the first index is assigned as the first element, the element at
 * the second index is assigned as the second element, and so on.
 *
 * @private
 * @param {Array} array The array to reorder.
 * @param {Array} indexes The arranged array indexes.
 * @returns {Array} Returns `array`.
 */function reorder(array,indexes){var arrLength=array.length,length=nativeMin(indexes.length,arrLength),oldArray=copyArray(array);while(length--){var index=indexes[length];array[length]=isIndex(index,arrLength)?oldArray[index]:undefined;}return array;}

/** Used as the internal argument placeholder. */var PLACEHOLDER='__lodash_placeholder__';/**
 * Replaces all `placeholder` elements in `array` with an internal placeholder
 * and returns an array of their indexes.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {*} placeholder The placeholder to replace.
 * @returns {Array} Returns the new array of placeholder indexes.
 */function replaceHolders(array,placeholder){var index=-1,length=array.length,resIndex=0,result=[];while(++index<length){var value=array[index];if(value===placeholder||value===PLACEHOLDER){array[index]=PLACEHOLDER;result[resIndex++]=index;}}return result;}

var WRAP_BIND_FLAG$2=1; var WRAP_BIND_KEY_FLAG$1=2; var WRAP_CURRY_FLAG$1=8; var WRAP_CURRY_RIGHT_FLAG$1=16; var WRAP_ARY_FLAG$1=128; var WRAP_FLIP_FLAG=512;/**
 * Creates a function that wraps `func` to invoke it with optional `this`
 * binding of `thisArg`, partial application, and currying.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [partialsRight] The arguments to append to those provided
 *  to the new function.
 * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */function createHybrid(func,bitmask,thisArg,partials,holders,partialsRight,holdersRight,argPos,ary,arity){var isAry=bitmask&WRAP_ARY_FLAG$1,isBind=bitmask&WRAP_BIND_FLAG$2,isBindKey=bitmask&WRAP_BIND_KEY_FLAG$1,isCurried=bitmask&(WRAP_CURRY_FLAG$1|WRAP_CURRY_RIGHT_FLAG$1),isFlip=bitmask&WRAP_FLIP_FLAG,Ctor=isBindKey?undefined:createCtor(func);function wrapper(){var length=arguments.length,args=Array(length),index=length;while(index--){args[index]=arguments[index];}if(isCurried){var placeholder=getHolder(wrapper),holdersCount=countHolders(args,placeholder);}if(partials){args=composeArgs(args,partials,holders,isCurried);}if(partialsRight){args=composeArgsRight(args,partialsRight,holdersRight,isCurried);}length-=holdersCount;if(isCurried&&length<arity){var newHolders=replaceHolders(args,placeholder);return createRecurry(func,bitmask,createHybrid,wrapper.placeholder,thisArg,args,newHolders,argPos,ary,arity-length);}var thisBinding=isBind?thisArg:this,fn=isBindKey?thisBinding[func]:func;length=args.length;if(argPos){args=reorder(args,argPos);}else if(isFlip&&length>1){args.reverse();}if(isAry&&ary<length){args.length=ary;}if(this&&this!==root&&this instanceof wrapper){fn=Ctor||createCtor(fn);}return fn.apply(thisBinding,args);}return wrapper;}

function createCurry(func,bitmask,arity){var Ctor=createCtor(func);function wrapper(){var length=arguments.length,args=Array(length),index=length,placeholder=getHolder(wrapper);while(index--){args[index]=arguments[index];}var holders=length<3&&args[0]!==placeholder&&args[length-1]!==placeholder?[]:replaceHolders(args,placeholder);length-=holders.length;if(length<arity){return createRecurry(func,bitmask,createHybrid,wrapper.placeholder,undefined,args,holders,undefined,undefined,arity-length);}var fn=this&&this!==root&&this instanceof wrapper?Ctor:func;return apply(fn,this,args);}return wrapper;}

var WRAP_BIND_FLAG$5=1;/**
 * Creates a function that wraps `func` to invoke it with the `this` binding
 * of `thisArg` and `partials` prepended to the arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} partials The arguments to prepend to those provided to
 *  the new function.
 * @returns {Function} Returns the new wrapped function.
 */function createPartial(func,bitmask,thisArg,partials){var isBind=bitmask&WRAP_BIND_FLAG$5,Ctor=createCtor(func);function wrapper(){var argsIndex=-1,argsLength=arguments.length,leftIndex=-1,leftLength=partials.length,args=Array(leftLength+argsLength),fn=this&&this!==root&&this instanceof wrapper?Ctor:func;while(++leftIndex<leftLength){args[leftIndex]=partials[leftIndex];}while(argsLength--){args[leftIndex++]=arguments[++argsIndex];}return apply(fn,isBind?thisArg:this,args);}return wrapper;}

var PLACEHOLDER$1='__lodash_placeholder__';/** Used to compose bitmasks for function metadata. */var WRAP_BIND_FLAG$6=1; var WRAP_BIND_KEY_FLAG$4=2; var WRAP_CURRY_BOUND_FLAG$1=4; var WRAP_CURRY_FLAG$4=8; var WRAP_ARY_FLAG$3=128; var WRAP_REARG_FLAG$1=256;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeMin$1=Math.min;/**
 * Merges the function metadata of `source` into `data`.
 *
 * Merging metadata reduces the number of wrappers used to invoke a function.
 * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
 * may be applied regardless of execution order. Methods like `_.ary` and
 * `_.rearg` modify function arguments, making the order in which they are
 * executed important, preventing the merging of metadata. However, we make
 * an exception for a safe combined case where curried functions have `_.ary`
 * and or `_.rearg` applied.
 *
 * @private
 * @param {Array} data The destination metadata.
 * @param {Array} source The source metadata.
 * @returns {Array} Returns `data`.
 */function mergeData(data,source){var bitmask=data[1],srcBitmask=source[1],newBitmask=bitmask|srcBitmask,isCommon=newBitmask<(WRAP_BIND_FLAG$6|WRAP_BIND_KEY_FLAG$4|WRAP_ARY_FLAG$3);var isCombo=srcBitmask==WRAP_ARY_FLAG$3&&bitmask==WRAP_CURRY_FLAG$4||srcBitmask==WRAP_ARY_FLAG$3&&bitmask==WRAP_REARG_FLAG$1&&data[7].length<=source[8]||srcBitmask==(WRAP_ARY_FLAG$3|WRAP_REARG_FLAG$1)&&source[7].length<=source[8]&&bitmask==WRAP_CURRY_FLAG$4;// Exit early if metadata can't be merged.
if(!(isCommon||isCombo)){return data;}// Use source `thisArg` if available.
if(srcBitmask&WRAP_BIND_FLAG$6){data[2]=source[2];// Set when currying a bound function.
newBitmask|=bitmask&WRAP_BIND_FLAG$6?0:WRAP_CURRY_BOUND_FLAG$1;}// Compose partial arguments.
var value=source[3];if(value){var partials=data[3];data[3]=partials?composeArgs(partials,value,source[4]):value;data[4]=partials?replaceHolders(data[3],PLACEHOLDER$1):source[4];}// Compose partial right arguments.
value=source[5];if(value){partials=data[5];data[5]=partials?composeArgsRight(partials,value,source[6]):value;data[6]=partials?replaceHolders(data[5],PLACEHOLDER$1):source[6];}// Use source `argPos` if available.
value=source[7];if(value){data[7]=value;}// Use source `ary` if it's smaller.
if(srcBitmask&WRAP_ARY_FLAG$3){data[8]=data[8]==null?source[8]:nativeMin$1(data[8],source[8]);}// Use source `arity` if one is not provided.
if(data[9]==null){data[9]=source[9];}// Use source `func` and merge bitmasks.
data[0]=source[0];data[1]=newBitmask;return data;}

var FUNC_ERROR_TEXT$1='Expected a function';/** Used to compose bitmasks for function metadata. */var WRAP_BIND_FLAG=1; var WRAP_BIND_KEY_FLAG=2; var WRAP_CURRY_FLAG=8; var WRAP_CURRY_RIGHT_FLAG=16; var WRAP_PARTIAL_FLAG=32; var WRAP_PARTIAL_RIGHT_FLAG=64;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeMax=Math.max;/**
 * Creates a function that either curries or invokes `func` with optional
 * `this` binding and partially applied arguments.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags.
 *    1 - `_.bind`
 *    2 - `_.bindKey`
 *    4 - `_.curry` or `_.curryRight` of a bound function
 *    8 - `_.curry`
 *   16 - `_.curryRight`
 *   32 - `_.partial`
 *   64 - `_.partialRight`
 *  128 - `_.rearg`
 *  256 - `_.ary`
 *  512 - `_.flip`
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to be partially applied.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */function createWrap(func,bitmask,thisArg,partials,holders,argPos,ary,arity){var isBindKey=bitmask&WRAP_BIND_KEY_FLAG;if(!isBindKey&&typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT$1);}var length=partials?partials.length:0;if(!length){bitmask&=~(WRAP_PARTIAL_FLAG|WRAP_PARTIAL_RIGHT_FLAG);partials=holders=undefined;}ary=ary===undefined?ary:nativeMax(toInteger(ary),0);arity=arity===undefined?arity:toInteger(arity);length-=holders?holders.length:0;if(bitmask&WRAP_PARTIAL_RIGHT_FLAG){var partialsRight=partials,holdersRight=holders;partials=holders=undefined;}var data=isBindKey?undefined:getData(func);var newData=[func,bitmask,thisArg,partials,holders,partialsRight,holdersRight,argPos,ary,arity];if(data){mergeData(newData,data);}func=newData[0];bitmask=newData[1];thisArg=newData[2];partials=newData[3];holders=newData[4];arity=newData[9]=newData[9]===undefined?isBindKey?0:func.length:nativeMax(newData[9]-length,0);if(!arity&&bitmask&(WRAP_CURRY_FLAG|WRAP_CURRY_RIGHT_FLAG)){bitmask&=~(WRAP_CURRY_FLAG|WRAP_CURRY_RIGHT_FLAG);}if(!bitmask||bitmask==WRAP_BIND_FLAG){var result=createBind(func,bitmask,thisArg);}else if(bitmask==WRAP_CURRY_FLAG||bitmask==WRAP_CURRY_RIGHT_FLAG){result=createCurry(func,bitmask,arity);}else if((bitmask==WRAP_PARTIAL_FLAG||bitmask==(WRAP_BIND_FLAG|WRAP_PARTIAL_FLAG))&&!holders.length){result=createPartial(func,bitmask,thisArg,partials);}else{result=createHybrid.apply(undefined,newData);}var setter=data?baseSetData:setData;return setWrapToString(setter(result,newData),func,bitmask);}

var WRAP_ARY_FLAG=128;/**
 * Creates a function that invokes `func`, with up to `n` arguments,
 * ignoring any additional arguments.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} func The function to cap arguments for.
 * @param {number} [n=func.length] The arity cap.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Function} Returns the new capped function.
 * @example
 *
 * _.map(['6', '8', '10'], _.ary(parseInt, 1));
 * // => [6, 8, 10]
 */function ary(func,n,guard){n=guard?undefined:n;n=func&&n==null?func.length:n;return createWrap(func,WRAP_ARY_FLAG,undefined,undefined,undefined,undefined,n);}

function baseAssignValue(object,key,value){if(key=='__proto__'&&defineProperty$1){defineProperty$1(object,key,{'configurable':true,'enumerable':true,'value':value,'writable':true});}else{object[key]=value;}}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */function eq(value,other){return value===other||value!==value&&other!==other;}

var objectProto$6=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$5=objectProto$6.hasOwnProperty;/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */function assignValue(object,key,value){var objValue=object[key];if(!(hasOwnProperty$5.call(object,key)&&eq(objValue,value))||value===undefined&&!(key in object)){baseAssignValue(object,key,value);}}

function copyObject(source,props,object,customizer){var isNew=!object;object||(object={});var index=-1,length=props.length;while(++index<length){var key=props[index];var newValue=customizer?customizer(object[key],source[key],key,object,source):undefined;if(newValue===undefined){newValue=source[key];}if(isNew){baseAssignValue(object,key,newValue);}else{assignValue(object,key,newValue);}}return object;}

var nativeMax$3=Math.max;/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */function overRest(func,start,transform){start=nativeMax$3(start===undefined?func.length-1:start,0);return function(){var args=arguments,index=-1,length=nativeMax$3(args.length-start,0),array=Array(length);while(++index<length){array[index]=args[start+index];}index=-1;var otherArgs=Array(start+1);while(++index<start){otherArgs[index]=args[index];}otherArgs[start]=transform(array);return apply(func,this,otherArgs);};}

function baseRest(func,start){return setToString(overRest(func,start,identity),func+'');}

/** Used as references for various `Number` constants. */var MAX_SAFE_INTEGER$1=9007199254740991;/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */function isLength(value){return typeof value=='number'&&value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER$1;}

function isArrayLike(value){return value!=null&&isLength(value.length)&&!isFunction(value);}

function isIterateeCall(value,index,object){if(!isObject(object)){return false;}var type=typeof index==='undefined'?'undefined':_typeof(index);if(type=='number'?isArrayLike(object)&&isIndex(index,object.length):type=='string'&&index in object){return eq(object[index],value);}return false;}

function createAssigner(assigner){return baseRest(function(object,sources){var index=-1,length=sources.length,customizer=length>1?sources[length-1]:undefined,guard=length>2?sources[2]:undefined;customizer=assigner.length>3&&typeof customizer=='function'?(length--,customizer):undefined;if(guard&&isIterateeCall(sources[0],sources[1],guard)){customizer=length<3?undefined:customizer;length=1;}object=Object(object);while(++index<length){var source=sources[index];if(source){assigner(object,source,index,customizer);}}return object;});}

/** Used for built-in method references. */var objectProto$7=Object.prototype;/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */function isPrototype(value){var Ctor=value&&value.constructor,proto=typeof Ctor=='function'&&Ctor.prototype||objectProto$7;return value===proto;}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */function baseTimes(n,iteratee){var index=-1,result=Array(n);while(++index<n){result[index]=iteratee(index);}return result;}

var argsTag='[object Arguments]';/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */function baseIsArguments(value){return isObjectLike(value)&&baseGetTag(value)==argsTag;}

var objectProto$9=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$7=objectProto$9.hasOwnProperty;/** Built-in value references. */var propertyIsEnumerable=objectProto$9.propertyIsEnumerable;/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */var isArguments=baseIsArguments(function(){return arguments;}())?baseIsArguments:function(value){return isObjectLike(value)&&hasOwnProperty$7.call(value,'callee')&&!propertyIsEnumerable.call(value,'callee');};

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */function stubFalse(){return false;}

var freeExports=(typeof exports==='undefined'?'undefined':_typeof(exports))=='object'&&exports&&!exports.nodeType&&exports;/** Detect free variable `module`. */var freeModule=freeExports&&(typeof module==='undefined'?'undefined':_typeof(module))=='object'&&module&&!module.nodeType&&module;/** Detect the popular CommonJS extension `module.exports`. */var moduleExports=freeModule&&freeModule.exports===freeExports;/** Built-in value references. */var Buffer=moduleExports?root.Buffer:undefined;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeIsBuffer=Buffer?Buffer.isBuffer:undefined;/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */var isBuffer=nativeIsBuffer||stubFalse;

var argsTag$1='[object Arguments]'; var arrayTag='[object Array]'; var boolTag='[object Boolean]'; var dateTag='[object Date]'; var errorTag='[object Error]'; var funcTag$1='[object Function]'; var mapTag='[object Map]'; var numberTag='[object Number]'; var objectTag='[object Object]'; var regexpTag='[object RegExp]'; var setTag='[object Set]'; var stringTag='[object String]'; var weakMapTag='[object WeakMap]';var arrayBufferTag='[object ArrayBuffer]'; var dataViewTag='[object DataView]'; var float32Tag='[object Float32Array]'; var float64Tag='[object Float64Array]'; var int8Tag='[object Int8Array]'; var int16Tag='[object Int16Array]'; var int32Tag='[object Int32Array]'; var uint8Tag='[object Uint8Array]'; var uint8ClampedTag='[object Uint8ClampedArray]'; var uint16Tag='[object Uint16Array]'; var uint32Tag='[object Uint32Array]';/** Used to identify `toStringTag` values of typed arrays. */var typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=true;typedArrayTags[argsTag$1]=typedArrayTags[arrayTag]=typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=typedArrayTags[dataViewTag]=typedArrayTags[dateTag]=typedArrayTags[errorTag]=typedArrayTags[funcTag$1]=typedArrayTags[mapTag]=typedArrayTags[numberTag]=typedArrayTags[objectTag]=typedArrayTags[regexpTag]=typedArrayTags[setTag]=typedArrayTags[stringTag]=typedArrayTags[weakMapTag]=false;/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */function baseIsTypedArray(value){return isObjectLike(value)&&isLength(value.length)&&!!typedArrayTags[baseGetTag(value)];}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */function baseUnary(func){return function(value){return func(value);};}

var freeExports$1=(typeof exports==='undefined'?'undefined':_typeof(exports))=='object'&&exports&&!exports.nodeType&&exports;/** Detect free variable `module`. */var freeModule$1=freeExports$1&&(typeof module==='undefined'?'undefined':_typeof(module))=='object'&&module&&!module.nodeType&&module;/** Detect the popular CommonJS extension `module.exports`. */var moduleExports$1=freeModule$1&&freeModule$1.exports===freeExports$1;/** Detect free variable `process` from Node.js. */var freeProcess=moduleExports$1&&freeGlobal.process;/** Used to access faster Node.js helpers. */var nodeUtil=function(){try{return freeProcess&&freeProcess.binding&&freeProcess.binding('util');}catch(e){}}();

var nodeIsTypedArray=nodeUtil&&nodeUtil.isTypedArray;/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */var isTypedArray=nodeIsTypedArray?baseUnary(nodeIsTypedArray):baseIsTypedArray;

var objectProto$8=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$6=objectProto$8.hasOwnProperty;/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */function arrayLikeKeys(value,inherited){var isArr=isArray(value),isArg=!isArr&&isArguments(value),isBuff=!isArr&&!isArg&&isBuffer(value),isType=!isArr&&!isArg&&!isBuff&&isTypedArray(value),skipIndexes=isArr||isArg||isBuff||isType,result=skipIndexes?baseTimes(value.length,String):[],length=result.length;for(var key in value){if((inherited||hasOwnProperty$6.call(value,key))&&!(skipIndexes&&(// Safari 9 has enumerable `arguments.length` in strict mode.
key=='length'||// Node.js 0.10 has enumerable non-index properties on buffers.
isBuff&&(key=='offset'||key=='parent')||// PhantomJS 2 has enumerable non-index properties on typed arrays.
isType&&(key=='buffer'||key=='byteLength'||key=='byteOffset')||// Skip index properties.
isIndex(key,length)))){result.push(key);}}return result;}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */function overArg(func,transform){return function(arg){return func(transform(arg));};}

var nativeKeys=overArg(Object.keys,Object);

var objectProto$10=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$8=objectProto$10.hasOwnProperty;/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function baseKeys(object){if(!isPrototype(object)){return nativeKeys(object);}var result=[];for(var key in Object(object)){if(hasOwnProperty$8.call(object,key)&&key!='constructor'){result.push(key);}}return result;}

function keys(object){return isArrayLike(object)?arrayLikeKeys(object):baseKeys(object);}

var objectProto$5=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$4=objectProto$5.hasOwnProperty;/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */var assign=createAssigner(function(object,source){if(isPrototype(source)||isArrayLike(source)){copyObject(source,keys(source),object);return;}for(var key in source){if(hasOwnProperty$4.call(source,key)){assignValue(object,key,source[key]);}}});

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function nativeKeysIn(object){var result=[];if(object!=null){for(var key in Object(object)){result.push(key);}}return result;}

var objectProto$11=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$9=objectProto$11.hasOwnProperty;/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function baseKeysIn(object){if(!isObject(object)){return nativeKeysIn(object);}var isProto=isPrototype(object),result=[];for(var key in object){if(!(key=='constructor'&&(isProto||!hasOwnProperty$9.call(object,key)))){result.push(key);}}return result;}

function keysIn$1(object){return isArrayLike(object)?arrayLikeKeys(object,true):baseKeysIn(object);}

var assignIn=createAssigner(function(object,source){copyObject(source,keysIn$1(source),object);});

var assignInWith=createAssigner(function(object,source,srcIndex,customizer){copyObject(source,keysIn$1(source),object,customizer);});

var assignWith=createAssigner(function(object,source,srcIndex,customizer){copyObject(source,keys(source),object,customizer);});

var reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/; var reIsPlainProp=/^\w*$/;/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */function isKey(value,object){if(isArray(value)){return false;}var type=typeof value==='undefined'?'undefined':_typeof(value);if(type=='number'||type=='symbol'||type=='boolean'||value==null||isSymbol(value)){return true;}return reIsPlainProp.test(value)||!reIsDeepProp.test(value)||object!=null&&value in Object(object);}

var nativeCreate=getNative(Object,'create');

function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{};this.size=0;}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function hashDelete(key){var result=this.has(key)&&delete this.__data__[key];this.size-=result?1:0;return result;}

var HASH_UNDEFINED='__lodash_hash_undefined__';/** Used for built-in method references. */var objectProto$12=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$10=objectProto$12.hasOwnProperty;/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function hashGet(key){var data=this.__data__;if(nativeCreate){var result=data[key];return result===HASH_UNDEFINED?undefined:result;}return hasOwnProperty$10.call(data,key)?data[key]:undefined;}

var objectProto$13=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$11=objectProto$13.hasOwnProperty;/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function hashHas(key){var data=this.__data__;return nativeCreate?data[key]!==undefined:hasOwnProperty$11.call(data,key);}

var HASH_UNDEFINED$1='__lodash_hash_undefined__';/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */function hashSet(key,value){var data=this.__data__;this.size+=this.has(key)?0:1;data[key]=nativeCreate&&value===undefined?HASH_UNDEFINED$1:value;return this;}

function Hash(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}// Add methods to `Hash`.
Hash.prototype.clear=hashClear;Hash.prototype['delete']=hashDelete;Hash.prototype.get=hashGet;Hash.prototype.has=hashHas;Hash.prototype.set=hashSet;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */function listCacheClear(){this.__data__=[];this.size=0;}

function assocIndexOf(array,key){var length=array.length;while(length--){if(eq(array[length][0],key)){return length;}}return-1;}

var arrayProto=Array.prototype;/** Built-in value references. */var splice=arrayProto.splice;/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function listCacheDelete(key){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){return false;}var lastIndex=data.length-1;if(index==lastIndex){data.pop();}else{splice.call(data,index,1);}--this.size;return true;}

function listCacheGet(key){var data=this.__data__,index=assocIndexOf(data,key);return index<0?undefined:data[index][1];}

function listCacheHas(key){return assocIndexOf(this.__data__,key)>-1;}

function listCacheSet(key,value){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){++this.size;data.push([key,value]);}else{data[index][1]=value;}return this;}

function ListCache(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}// Add methods to `ListCache`.
ListCache.prototype.clear=listCacheClear;ListCache.prototype['delete']=listCacheDelete;ListCache.prototype.get=listCacheGet;ListCache.prototype.has=listCacheHas;ListCache.prototype.set=listCacheSet;

var Map=getNative(root,'Map');

function mapCacheClear(){this.size=0;this.__data__={'hash':new Hash(),'map':new(Map||ListCache)(),'string':new Hash()};}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */function isKeyable(value){var type=typeof value==='undefined'?'undefined':_typeof(value);return type=='string'||type=='number'||type=='symbol'||type=='boolean'?value!=='__proto__':value===null;}

function getMapData(map,key){var data=map.__data__;return isKeyable(key)?data[typeof key=='string'?'string':'hash']:data.map;}

function mapCacheDelete(key){var result=getMapData(this,key)['delete'](key);this.size-=result?1:0;return result;}

function mapCacheGet(key){return getMapData(this,key).get(key);}

function mapCacheHas(key){return getMapData(this,key).has(key);}

function mapCacheSet(key,value){var data=getMapData(this,key),size=data.size;data.set(key,value);this.size+=data.size==size?0:1;return this;}

function MapCache(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}// Add methods to `MapCache`.
MapCache.prototype.clear=mapCacheClear;MapCache.prototype['delete']=mapCacheDelete;MapCache.prototype.get=mapCacheGet;MapCache.prototype.has=mapCacheHas;MapCache.prototype.set=mapCacheSet;

var FUNC_ERROR_TEXT$2='Expected a function';/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */function memoize(func,resolver){if(typeof func!='function'||resolver!=null&&typeof resolver!='function'){throw new TypeError(FUNC_ERROR_TEXT$2);}var memoized=function memoized(){var args=arguments,key=resolver?resolver.apply(this,args):args[0],cache=memoized.cache;if(cache.has(key)){return cache.get(key);}var result=func.apply(this,args);memoized.cache=cache.set(key,result)||cache;return result;};memoized.cache=new(memoize.Cache||MapCache)();return memoized;}// Expose `MapCache`.
memoize.Cache=MapCache;

var MAX_MEMOIZE_SIZE=500;/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */function memoizeCapped(func){var result=memoize(func,function(key){if(cache.size===MAX_MEMOIZE_SIZE){cache.clear();}return key;});var cache=result.cache;return result;}

var reLeadingDot=/^\./; var rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;/** Used to match backslashes in property paths. */var reEscapeChar=/\\(\\)?/g;/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */var stringToPath=memoizeCapped(function(string){var result=[];if(reLeadingDot.test(string)){result.push('');}string.replace(rePropName,function(match,number,quote,string){result.push(quote?string.replace(reEscapeChar,'$1'):number||match);});return result;});

function toString(value){return value==null?'':baseToString(value);}

function castPath(value,object){if(isArray(value)){return value;}return isKey(value,object)?[value]:stringToPath(toString(value));}

var INFINITY$2=1/0;/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */function toKey(value){if(typeof value=='string'||isSymbol(value)){return value;}var result=value+'';return result=='0'&&1/value==-INFINITY$2?'-0':result;}

function baseGet(object,path){path=castPath(path,object);var index=0,length=path.length;while(object!=null&&index<length){object=object[toKey(path[index++])];}return index&&index==length?object:undefined;}

function get$1(object,path,defaultValue){var result=object==null?undefined:baseGet(object,path);return result===undefined?defaultValue:result;}

function baseAt(object,paths){var index=-1,length=paths.length,result=Array(length),skip=object==null;while(++index<length){result[index]=skip?undefined:get$1(object,paths[index]);}return result;}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */function arrayPush(array,values){var index=-1,length=values.length,offset=array.length;while(++index<length){array[offset+index]=values[index];}return array;}

var spreadableSymbol=_Symbol?_Symbol.isConcatSpreadable:undefined;/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */function isFlattenable(value){return isArray(value)||isArguments(value)||!!(spreadableSymbol&&value&&value[spreadableSymbol]);}

function baseFlatten(array,depth,predicate,isStrict,result){var index=-1,length=array.length;predicate||(predicate=isFlattenable);result||(result=[]);while(++index<length){var value=array[index];if(depth>0&&predicate(value)){if(depth>1){// Recursively flatten arrays (susceptible to call stack limits).
baseFlatten(value,depth-1,predicate,isStrict,result);}else{arrayPush(result,value);}}else if(!isStrict){result[result.length]=value;}}return result;}

function flatten(array){var length=array==null?0:array.length;return length?baseFlatten(array,1):[];}

function flatRest(func){return setToString(overRest(func,undefined,flatten),func+'');}

var at=flatRest(baseAt);

var getPrototype=overArg(Object.getPrototypeOf,Object);

var objectTag$1='[object Object]';/** Used for built-in method references. */var funcProto$2=Function.prototype; var objectProto$14=Object.prototype;/** Used to resolve the decompiled source of functions. */var funcToString$2=funcProto$2.toString;/** Used to check objects for own properties. */var hasOwnProperty$12=objectProto$14.hasOwnProperty;/** Used to infer the `Object` constructor. */var objectCtorString=funcToString$2.call(Object);/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */function isPlainObject(value){if(!isObjectLike(value)||baseGetTag(value)!=objectTag$1){return false;}var proto=getPrototype(value);if(proto===null){return true;}var Ctor=hasOwnProperty$12.call(proto,'constructor')&&proto.constructor;return typeof Ctor=='function'&&Ctor instanceof Ctor&&funcToString$2.call(Ctor)==objectCtorString;}

var domExcTag='[object DOMException]'; var errorTag$1='[object Error]';/**
 * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
 * `SyntaxError`, `TypeError`, or `URIError` object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
 * @example
 *
 * _.isError(new Error);
 * // => true
 *
 * _.isError(Error);
 * // => false
 */function isError(value){if(!isObjectLike(value)){return false;}var tag=baseGetTag(value);return tag==errorTag$1||tag==domExcTag||typeof value.message=='string'&&typeof value.name=='string'&&!isPlainObject(value);}

var attempt=baseRest(function(func,args){try{return apply(func,undefined,args);}catch(e){return isError(e)?e:new Error(e);}});

var FUNC_ERROR_TEXT$3='Expected a function';/**
 * Creates a function that invokes `func`, with the `this` binding and arguments
 * of the created function, while it's called less than `n` times. Subsequent
 * calls to the created function return the result of the last `func` invocation.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {number} n The number of calls at which `func` is no longer invoked.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * jQuery(element).on('click', _.before(5, addContactToList));
 * // => Allows adding up to 4 contacts to the list.
 */function before(n,func){var result;if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT$3);}n=toInteger(n);return function(){if(--n>0){result=func.apply(this,arguments);}if(n<=1){func=undefined;}return result;};}

var WRAP_BIND_FLAG$7=1; var WRAP_PARTIAL_FLAG$3=32;/**
 * Creates a function that invokes `func` with the `this` binding of `thisArg`
 * and `partials` prepended to the arguments it receives.
 *
 * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
 * may be used as a placeholder for partially applied arguments.
 *
 * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
 * property of bound functions.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to bind.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {...*} [partials] The arguments to be partially applied.
 * @returns {Function} Returns the new bound function.
 * @example
 *
 * function greet(greeting, punctuation) {
 *   return greeting + ' ' + this.user + punctuation;
 * }
 *
 * var object = { 'user': 'fred' };
 *
 * var bound = _.bind(greet, object, 'hi');
 * bound('!');
 * // => 'hi fred!'
 *
 * // Bound with placeholders.
 * var bound = _.bind(greet, object, _, '!');
 * bound('hi');
 * // => 'hi fred!'
 */var bind=baseRest(function(func,thisArg,partials){var bitmask=WRAP_BIND_FLAG$7;if(partials.length){var holders=replaceHolders(partials,getHolder(bind));bitmask|=WRAP_PARTIAL_FLAG$3;}return createWrap(func,bitmask,thisArg,partials,holders);});// Assign default placeholders.
bind.placeholder={};

var bindAll=flatRest(function(object,methodNames){arrayEach(methodNames,function(key){key=toKey(key);baseAssignValue(object,key,bind(object[key],object));});return object;});

var WRAP_BIND_FLAG$8=1; var WRAP_BIND_KEY_FLAG$5=2; var WRAP_PARTIAL_FLAG$4=32;/**
 * Creates a function that invokes the method at `object[key]` with `partials`
 * prepended to the arguments it receives.
 *
 * This method differs from `_.bind` by allowing bound functions to reference
 * methods that may be redefined or don't yet exist. See
 * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
 * for more details.
 *
 * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
 * builds, may be used as a placeholder for partially applied arguments.
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Function
 * @param {Object} object The object to invoke the method on.
 * @param {string} key The key of the method.
 * @param {...*} [partials] The arguments to be partially applied.
 * @returns {Function} Returns the new bound function.
 * @example
 *
 * var object = {
 *   'user': 'fred',
 *   'greet': function(greeting, punctuation) {
 *     return greeting + ' ' + this.user + punctuation;
 *   }
 * };
 *
 * var bound = _.bindKey(object, 'greet', 'hi');
 * bound('!');
 * // => 'hi fred!'
 *
 * object.greet = function(greeting, punctuation) {
 *   return greeting + 'ya ' + this.user + punctuation;
 * };
 *
 * bound('!');
 * // => 'hiya fred!'
 *
 * // Bound with placeholders.
 * var bound = _.bindKey(object, 'greet', _, '!');
 * bound('hi');
 * // => 'hiya fred!'
 */var bindKey=baseRest(function(object,key,partials){var bitmask=WRAP_BIND_FLAG$8|WRAP_BIND_KEY_FLAG$5;if(partials.length){var holders=replaceHolders(partials,getHolder(bindKey));bitmask|=WRAP_PARTIAL_FLAG$4;}return createWrap(key,bitmask,object,partials,holders);});// Assign default placeholders.
bindKey.placeholder={};

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */function baseSlice(array,start,end){var index=-1,length=array.length;if(start<0){start=-start>length?0:length+start;}end=end>length?length:end;if(end<0){end+=length;}length=start>end?0:end-start>>>0;start>>>=0;var result=Array(length);while(++index<length){result[index]=array[index+start];}return result;}

function castSlice(array,start,end){var length=array.length;end=end===undefined?length:end;return!start&&end>=length?array:baseSlice(array,start,end);}

/** Used to compose unicode character classes. */var rsAstralRange='\\ud800-\\udfff';
var rsComboMarksRange='\\u0300-\\u036f';
var reComboHalfMarksRange='\\ufe20-\\ufe2f';
var rsComboSymbolsRange='\\u20d0-\\u20ff';
var rsComboRange=rsComboMarksRange+reComboHalfMarksRange+rsComboSymbolsRange;
var rsVarRange='\\ufe0e\\ufe0f';/** Used to compose unicode capture groups. */var rsZWJ='\\u200d';/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */var reHasUnicode=RegExp('['+rsZWJ+rsAstralRange+rsComboRange+rsVarRange+']');/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */function hasUnicode(string){return reHasUnicode.test(string);}

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */function asciiToArray(string){return string.split('');}

/** Used to compose unicode character classes. */var rsAstralRange$1='\\ud800-\\udfff';
var rsComboMarksRange$1='\\u0300-\\u036f';
var reComboHalfMarksRange$1='\\ufe20-\\ufe2f';
var rsComboSymbolsRange$1='\\u20d0-\\u20ff';
var rsComboRange$1=rsComboMarksRange$1+reComboHalfMarksRange$1+rsComboSymbolsRange$1;
var rsVarRange$1='\\ufe0e\\ufe0f';/** Used to compose unicode capture groups. */var rsAstral='['+rsAstralRange$1+']'; var rsCombo='['+rsComboRange$1+']'; var rsFitz='\\ud83c[\\udffb-\\udfff]'; var rsModifier='(?:'+rsCombo+'|'+rsFitz+')'; var rsNonAstral='[^'+rsAstralRange$1+']'; var rsRegional='(?:\\ud83c[\\udde6-\\uddff]){2}'; var rsSurrPair='[\\ud800-\\udbff][\\udc00-\\udfff]'; var rsZWJ$1='\\u200d';/** Used to compose unicode regexes. */var reOptMod=rsModifier+'?'; var rsOptVar='['+rsVarRange$1+']?'; var rsOptJoin='(?:'+rsZWJ$1+'(?:'+[rsNonAstral,rsRegional,rsSurrPair].join('|')+')'+rsOptVar+reOptMod+')*'; var rsSeq=rsOptVar+reOptMod+rsOptJoin; var rsSymbol='(?:'+[rsNonAstral+rsCombo+'?',rsCombo,rsRegional,rsSurrPair,rsAstral].join('|')+')';/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */var reUnicode=RegExp(rsFitz+'(?='+rsFitz+')|'+rsSymbol+rsSeq,'g');/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */function unicodeToArray(string){return string.match(reUnicode)||[];}

function stringToArray(string){return hasUnicode(string)?unicodeToArray(string):asciiToArray(string);}

function createCaseFirst(methodName){return function(string){string=toString(string);var strSymbols=hasUnicode(string)?stringToArray(string):undefined;var chr=strSymbols?strSymbols[0]:string.charAt(0);var trailing=strSymbols?castSlice(strSymbols,1).join(''):string.slice(1);return chr[methodName]()+trailing;};}

var upperFirst=createCaseFirst('toUpperCase');

function capitalize(string){return upperFirst(toString(string).toLowerCase());}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */function arrayReduce(array,iteratee,accumulator,initAccum){var index=-1,length=array==null?0:array.length;if(initAccum&&length){accumulator=array[++index];}while(++index<length){accumulator=iteratee(accumulator,array[index],index,array);}return accumulator;}

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */function basePropertyOf(object){return function(key){return object==null?undefined:object[key];};}

var deburredLetters={// Latin-1 Supplement block.
'\xc0':'A','\xc1':'A','\xc2':'A','\xc3':'A','\xc4':'A','\xc5':'A','\xe0':'a','\xe1':'a','\xe2':'a','\xe3':'a','\xe4':'a','\xe5':'a','\xc7':'C','\xe7':'c','\xd0':'D','\xf0':'d','\xc8':'E','\xc9':'E','\xca':'E','\xcb':'E','\xe8':'e','\xe9':'e','\xea':'e','\xeb':'e','\xcc':'I','\xcd':'I','\xce':'I','\xcf':'I','\xec':'i','\xed':'i','\xee':'i','\xef':'i','\xd1':'N','\xf1':'n','\xd2':'O','\xd3':'O','\xd4':'O','\xd5':'O','\xd6':'O','\xd8':'O','\xf2':'o','\xf3':'o','\xf4':'o','\xf5':'o','\xf6':'o','\xf8':'o','\xd9':'U','\xda':'U','\xdb':'U','\xdc':'U','\xf9':'u','\xfa':'u','\xfb':'u','\xfc':'u','\xdd':'Y','\xfd':'y','\xff':'y','\xc6':'Ae','\xe6':'ae','\xde':'Th','\xfe':'th','\xdf':'ss',// Latin Extended-A block.
'\u0100':'A','\u0102':'A','\u0104':'A','\u0101':'a','\u0103':'a','\u0105':'a','\u0106':'C','\u0108':'C','\u010A':'C','\u010C':'C','\u0107':'c','\u0109':'c','\u010B':'c','\u010D':'c','\u010E':'D','\u0110':'D','\u010F':'d','\u0111':'d','\u0112':'E','\u0114':'E','\u0116':'E','\u0118':'E','\u011A':'E','\u0113':'e','\u0115':'e','\u0117':'e','\u0119':'e','\u011B':'e','\u011C':'G','\u011E':'G','\u0120':'G','\u0122':'G','\u011D':'g','\u011F':'g','\u0121':'g','\u0123':'g','\u0124':'H','\u0126':'H','\u0125':'h','\u0127':'h','\u0128':'I','\u012A':'I','\u012C':'I','\u012E':'I','\u0130':'I','\u0129':'i','\u012B':'i','\u012D':'i','\u012F':'i','\u0131':'i','\u0134':'J','\u0135':'j','\u0136':'K','\u0137':'k','\u0138':'k','\u0139':'L','\u013B':'L','\u013D':'L','\u013F':'L','\u0141':'L','\u013A':'l','\u013C':'l','\u013E':'l','\u0140':'l','\u0142':'l','\u0143':'N','\u0145':'N','\u0147':'N','\u014A':'N','\u0144':'n','\u0146':'n','\u0148':'n','\u014B':'n','\u014C':'O','\u014E':'O','\u0150':'O','\u014D':'o','\u014F':'o','\u0151':'o','\u0154':'R','\u0156':'R','\u0158':'R','\u0155':'r','\u0157':'r','\u0159':'r','\u015A':'S','\u015C':'S','\u015E':'S','\u0160':'S','\u015B':'s','\u015D':'s','\u015F':'s','\u0161':'s','\u0162':'T','\u0164':'T','\u0166':'T','\u0163':'t','\u0165':'t','\u0167':'t','\u0168':'U','\u016A':'U','\u016C':'U','\u016E':'U','\u0170':'U','\u0172':'U','\u0169':'u','\u016B':'u','\u016D':'u','\u016F':'u','\u0171':'u','\u0173':'u','\u0174':'W','\u0175':'w','\u0176':'Y','\u0177':'y','\u0178':'Y','\u0179':'Z','\u017B':'Z','\u017D':'Z','\u017A':'z','\u017C':'z','\u017E':'z','\u0132':'IJ','\u0133':'ij','\u0152':'Oe','\u0153':'oe','\u0149':"'n",'\u017F':'s'};/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */var deburrLetter=basePropertyOf(deburredLetters);

var reLatin=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;/** Used to compose unicode character classes. */var rsComboMarksRange$2='\\u0300-\\u036f'; var reComboHalfMarksRange$2='\\ufe20-\\ufe2f'; var rsComboSymbolsRange$2='\\u20d0-\\u20ff'; var rsComboRange$2=rsComboMarksRange$2+reComboHalfMarksRange$2+rsComboSymbolsRange$2;/** Used to compose unicode capture groups. */var rsCombo$1='['+rsComboRange$2+']';/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */var reComboMark=RegExp(rsCombo$1,'g');/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */function deburr(string){string=toString(string);return string&&string.replace(reLatin,deburrLetter).replace(reComboMark,'');}

/** Used to match words composed of alphanumeric characters. */var reAsciiWord=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */function asciiWords(string){return string.match(reAsciiWord)||[];}

/** Used to detect strings that need a more robust regexp to match words. */var reHasUnicodeWord=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */function hasUnicodeWord(string){return reHasUnicodeWord.test(string);}

/** Used to compose unicode character classes. */var rsAstralRange$2='\\ud800-\\udfff';
var rsComboMarksRange$3='\\u0300-\\u036f';
var reComboHalfMarksRange$3='\\ufe20-\\ufe2f';
var rsComboSymbolsRange$3='\\u20d0-\\u20ff';
var rsComboRange$3=rsComboMarksRange$3+reComboHalfMarksRange$3+rsComboSymbolsRange$3;
var rsDingbatRange='\\u2700-\\u27bf';
var rsLowerRange='a-z\\xdf-\\xf6\\xf8-\\xff';
var rsMathOpRange='\\xac\\xb1\\xd7\\xf7';
var rsNonCharRange='\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf';
var rsPunctuationRange='\\u2000-\\u206f';
var rsSpaceRange=' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000';
var rsUpperRange='A-Z\\xc0-\\xd6\\xd8-\\xde';
var rsVarRange$2='\\ufe0e\\ufe0f';
var rsBreakRange=rsMathOpRange+rsNonCharRange+rsPunctuationRange+rsSpaceRange;/** Used to compose unicode capture groups. */var rsApos$1='[\'\u2019]'; var rsBreak='['+rsBreakRange+']'; var rsCombo$2='['+rsComboRange$3+']'; var rsDigits='\\d+'; var rsDingbat='['+rsDingbatRange+']'; var rsLower='['+rsLowerRange+']'; var rsMisc='[^'+rsAstralRange$2+rsBreakRange+rsDigits+rsDingbatRange+rsLowerRange+rsUpperRange+']'; var rsFitz$1='\\ud83c[\\udffb-\\udfff]'; var rsModifier$1='(?:'+rsCombo$2+'|'+rsFitz$1+')'; var rsNonAstral$1='[^'+rsAstralRange$2+']'; var rsRegional$1='(?:\\ud83c[\\udde6-\\uddff]){2}'; var rsSurrPair$1='[\\ud800-\\udbff][\\udc00-\\udfff]'; var rsUpper='['+rsUpperRange+']'; var rsZWJ$2='\\u200d';/** Used to compose unicode regexes. */var rsMiscLower='(?:'+rsLower+'|'+rsMisc+')'; var rsMiscUpper='(?:'+rsUpper+'|'+rsMisc+')'; var rsOptContrLower='(?:'+rsApos$1+'(?:d|ll|m|re|s|t|ve))?'; var rsOptContrUpper='(?:'+rsApos$1+'(?:D|LL|M|RE|S|T|VE))?'; var reOptMod$1=rsModifier$1+'?'; var rsOptVar$1='['+rsVarRange$2+']?'; var rsOptJoin$1='(?:'+rsZWJ$2+'(?:'+[rsNonAstral$1,rsRegional$1,rsSurrPair$1].join('|')+')'+rsOptVar$1+reOptMod$1+')*'; var rsOrdLower='\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)'; var rsOrdUpper='\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)'; var rsSeq$1=rsOptVar$1+reOptMod$1+rsOptJoin$1; var rsEmoji='(?:'+[rsDingbat,rsRegional$1,rsSurrPair$1].join('|')+')'+rsSeq$1;/** Used to match complex or compound words. */var reUnicodeWord=RegExp([rsUpper+'?'+rsLower+'+'+rsOptContrLower+'(?='+[rsBreak,rsUpper,'$'].join('|')+')',rsMiscUpper+'+'+rsOptContrUpper+'(?='+[rsBreak,rsUpper+rsMiscLower,'$'].join('|')+')',rsUpper+'?'+rsMiscLower+'+'+rsOptContrLower,rsUpper+'+'+rsOptContrUpper,rsOrdUpper,rsOrdLower,rsDigits,rsEmoji].join('|'),'g');/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */function unicodeWords(string){return string.match(reUnicodeWord)||[];}

function words(string,pattern,guard){string=toString(string);pattern=guard?undefined:pattern;if(pattern===undefined){return hasUnicodeWord(string)?unicodeWords(string):asciiWords(string);}return string.match(pattern)||[];}

var rsApos='[\'\u2019]';/** Used to match apostrophes. */var reApos=RegExp(rsApos,'g');/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */function createCompounder(callback){return function(string){return arrayReduce(words(deburr(string).replace(reApos,'')),callback,'');};}

var camelCase=createCompounder(function(result,word,index){word=word.toLowerCase();return result+(index?capitalize(word):word);});

function castArray(){if(!arguments.length){return[];}var value=arguments[0];return isArray(value)?value:[value];}

var nativeMin$2=Math.min;/**
 * Creates a function like `_.round`.
 *
 * @private
 * @param {string} methodName The name of the `Math` method to use when rounding.
 * @returns {Function} Returns the new round function.
 */function createRound(methodName){var func=Math[methodName];return function(number,precision){number=toNumber(number);precision=precision==null?0:nativeMin$2(toInteger(precision),292);if(precision){// Shift with exponential notation to avoid floating-point issues.
// See [MDN](https://mdn.io/round#Examples) for more details.
var pair=(toString(number)+'e').split('e'),value=func(pair[0]+'e'+(+pair[1]+precision));pair=(toString(value)+'e').split('e');return+(pair[0]+'e'+(+pair[1]-precision));}return func(number);};}

var ceil=createRound('ceil');

function chain(value){var result=lodash(value);result.__chain__=true;return result;}

var nativeCeil=Math.ceil; var nativeMax$4=Math.max;/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * _.chunk(['a', 'b', 'c', 'd'], 2);
 * // => [['a', 'b'], ['c', 'd']]
 *
 * _.chunk(['a', 'b', 'c', 'd'], 3);
 * // => [['a', 'b', 'c'], ['d']]
 */function chunk(array,size,guard){if(guard?isIterateeCall(array,size,guard):size===undefined){size=1;}else{size=nativeMax$4(toInteger(size),0);}var length=array==null?0:array.length;if(!length||size<1){return[];}var index=0,resIndex=0,result=Array(nativeCeil(length/size));while(index<length){result[resIndex++]=baseSlice(array,index,index+=size);}return result;}

/**
 * The base implementation of `_.clamp` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */function baseClamp(number,lower,upper){if(number===number){if(upper!==undefined){number=number<=upper?number:upper;}if(lower!==undefined){number=number>=lower?number:lower;}}return number;}

function clamp(number,lower,upper){if(upper===undefined){upper=lower;lower=undefined;}if(upper!==undefined){upper=toNumber(upper);upper=upper===upper?upper:0;}if(lower!==undefined){lower=toNumber(lower);lower=lower===lower?lower:0;}return baseClamp(toNumber(number),lower,upper);}

function stackClear(){this.__data__=new ListCache();this.size=0;}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function stackDelete(key){var data=this.__data__,result=data['delete'](key);this.size=data.size;return result;}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function stackGet(key){return this.__data__.get(key);}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function stackHas(key){return this.__data__.has(key);}

var LARGE_ARRAY_SIZE=200;/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */function stackSet(key,value){var data=this.__data__;if(data instanceof ListCache){var pairs=data.__data__;if(!Map||pairs.length<LARGE_ARRAY_SIZE-1){pairs.push([key,value]);this.size=++data.size;return this;}data=this.__data__=new MapCache(pairs);}data.set(key,value);this.size=data.size;return this;}

function Stack(entries){var data=this.__data__=new ListCache(entries);this.size=data.size;}// Add methods to `Stack`.
Stack.prototype.clear=stackClear;Stack.prototype['delete']=stackDelete;Stack.prototype.get=stackGet;Stack.prototype.has=stackHas;Stack.prototype.set=stackSet;

function baseAssign(object,source){return object&&copyObject(source,keys(source),object);}

function baseAssignIn(object,source){return object&&copyObject(source,keysIn$1(source),object);}

var freeExports$2=(typeof exports==='undefined'?'undefined':_typeof(exports))=='object'&&exports&&!exports.nodeType&&exports;/** Detect free variable `module`. */var freeModule$2=freeExports$2&&(typeof module==='undefined'?'undefined':_typeof(module))=='object'&&module&&!module.nodeType&&module;/** Detect the popular CommonJS extension `module.exports`. */var moduleExports$2=freeModule$2&&freeModule$2.exports===freeExports$2;/** Built-in value references. */var Buffer$1=moduleExports$2?root.Buffer:undefined; var allocUnsafe=Buffer$1?Buffer$1.allocUnsafe:undefined;/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */function cloneBuffer(buffer,isDeep){if(isDeep){return buffer.slice();}var length=buffer.length,result=allocUnsafe?allocUnsafe(length):new buffer.constructor(length);buffer.copy(result);return result;}

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */function arrayFilter(array,predicate){var index=-1,length=array==null?0:array.length,resIndex=0,result=[];while(++index<length){var value=array[index];if(predicate(value,index,array)){result[resIndex++]=value;}}return result;}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */function stubArray(){return[];}

var objectProto$15=Object.prototype;/** Built-in value references. */var propertyIsEnumerable$1=objectProto$15.propertyIsEnumerable;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeGetSymbols=Object.getOwnPropertySymbols;/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */var getSymbols=!nativeGetSymbols?stubArray:function(object){if(object==null){return[];}object=Object(object);return arrayFilter(nativeGetSymbols(object),function(symbol){return propertyIsEnumerable$1.call(object,symbol);});};

function copySymbols(source,object){return copyObject(source,getSymbols(source),object);}

var nativeGetSymbols$1=Object.getOwnPropertySymbols;/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */var getSymbolsIn=!nativeGetSymbols$1?stubArray:function(object){var result=[];while(object){arrayPush(result,getSymbols(object));object=getPrototype(object);}return result;};

function copySymbolsIn(source,object){return copyObject(source,getSymbolsIn(source),object);}

function baseGetAllKeys(object,keysFunc,symbolsFunc){var result=keysFunc(object);return isArray(object)?result:arrayPush(result,symbolsFunc(object));}

function getAllKeys(object){return baseGetAllKeys(object,keys,getSymbols);}

function getAllKeysIn(object){return baseGetAllKeys(object,keysIn$1,getSymbolsIn);}

var DataView=getNative(root,'DataView');

var Promise$1=getNative(root,'Promise');

var Set=getNative(root,'Set');

var mapTag$2='[object Map]'; var objectTag$3='[object Object]'; var promiseTag='[object Promise]'; var setTag$2='[object Set]'; var weakMapTag$2='[object WeakMap]';var dataViewTag$2='[object DataView]';/** Used to detect maps, sets, and weakmaps. */var dataViewCtorString=toSource(DataView); var mapCtorString=toSource(Map); var promiseCtorString=toSource(Promise$1); var setCtorString=toSource(Set); var weakMapCtorString=toSource(WeakMap);/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */var getTag=baseGetTag;// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if(DataView&&getTag(new DataView(new ArrayBuffer(1)))!=dataViewTag$2||Map&&getTag(new Map())!=mapTag$2||Promise$1&&getTag(Promise$1.resolve())!=promiseTag||Set&&getTag(new Set())!=setTag$2||WeakMap&&getTag(new WeakMap())!=weakMapTag$2){getTag=function getTag(value){var result=baseGetTag(value),Ctor=result==objectTag$3?value.constructor:undefined,ctorString=Ctor?toSource(Ctor):'';if(ctorString){switch(ctorString){case dataViewCtorString:return dataViewTag$2;case mapCtorString:return mapTag$2;case promiseCtorString:return promiseTag;case setCtorString:return setTag$2;case weakMapCtorString:return weakMapTag$2;}}return result;};}var getTag$1 = getTag;

/** Used for built-in method references. */var objectProto$16=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$13=objectProto$16.hasOwnProperty;/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */function initCloneArray(array){var length=array.length,result=array.constructor(length);// Add properties assigned by `RegExp#exec`.
if(length&&typeof array[0]=='string'&&hasOwnProperty$13.call(array,'index')){result.index=array.index;result.input=array.input;}return result;}

var Uint8Array=root.Uint8Array;

function cloneArrayBuffer(arrayBuffer){var result=new arrayBuffer.constructor(arrayBuffer.byteLength);new Uint8Array(result).set(new Uint8Array(arrayBuffer));return result;}

function cloneDataView(dataView,isDeep){var buffer=isDeep?cloneArrayBuffer(dataView.buffer):dataView.buffer;return new dataView.constructor(buffer,dataView.byteOffset,dataView.byteLength);}

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */function addMapEntry(map,pair){// Don't return `map.set` because it's not chainable in IE 11.
map.set(pair[0],pair[1]);return map;}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */function mapToArray(map){var index=-1,result=Array(map.size);map.forEach(function(value,key){result[++index]=[key,value];});return result;}

var CLONE_DEEP_FLAG$1=1;/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */function cloneMap(map,isDeep,cloneFunc){var array=isDeep?cloneFunc(mapToArray(map),CLONE_DEEP_FLAG$1):mapToArray(map);return arrayReduce(array,addMapEntry,new map.constructor());}

/** Used to match `RegExp` flags from their coerced string values. */var reFlags=/\w*$/;/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */function cloneRegExp(regexp){var result=new regexp.constructor(regexp.source,reFlags.exec(regexp));result.lastIndex=regexp.lastIndex;return result;}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */function addSetEntry(set,value){// Don't return `set.add` because it's not chainable in IE 11.
set.add(value);return set;}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */function setToArray(set){var index=-1,result=Array(set.size);set.forEach(function(value){result[++index]=value;});return result;}

var CLONE_DEEP_FLAG$2=1;/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */function cloneSet(set,isDeep,cloneFunc){var array=isDeep?cloneFunc(setToArray(set),CLONE_DEEP_FLAG$2):setToArray(set);return arrayReduce(array,addSetEntry,new set.constructor());}

var symbolProto$1=_Symbol?_Symbol.prototype:undefined; var symbolValueOf=symbolProto$1?symbolProto$1.valueOf:undefined;/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */function cloneSymbol(symbol){return symbolValueOf?Object(symbolValueOf.call(symbol)):{};}

function cloneTypedArray(typedArray,isDeep){var buffer=isDeep?cloneArrayBuffer(typedArray.buffer):typedArray.buffer;return new typedArray.constructor(buffer,typedArray.byteOffset,typedArray.length);}

var boolTag$2='[object Boolean]'; var dateTag$2='[object Date]'; var mapTag$3='[object Map]'; var numberTag$2='[object Number]'; var regexpTag$2='[object RegExp]'; var setTag$3='[object Set]'; var stringTag$2='[object String]'; var symbolTag$2='[object Symbol]';var arrayBufferTag$2='[object ArrayBuffer]'; var dataViewTag$3='[object DataView]'; var float32Tag$2='[object Float32Array]'; var float64Tag$2='[object Float64Array]'; var int8Tag$2='[object Int8Array]'; var int16Tag$2='[object Int16Array]'; var int32Tag$2='[object Int32Array]'; var uint8Tag$2='[object Uint8Array]'; var uint8ClampedTag$2='[object Uint8ClampedArray]'; var uint16Tag$2='[object Uint16Array]'; var uint32Tag$2='[object Uint32Array]';/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */function initCloneByTag(object,tag,cloneFunc,isDeep){var Ctor=object.constructor;switch(tag){case arrayBufferTag$2:return cloneArrayBuffer(object);case boolTag$2:case dateTag$2:return new Ctor(+object);case dataViewTag$3:return cloneDataView(object,isDeep);case float32Tag$2:case float64Tag$2:case int8Tag$2:case int16Tag$2:case int32Tag$2:case uint8Tag$2:case uint8ClampedTag$2:case uint16Tag$2:case uint32Tag$2:return cloneTypedArray(object,isDeep);case mapTag$3:return cloneMap(object,isDeep,cloneFunc);case numberTag$2:case stringTag$2:return new Ctor(object);case regexpTag$2:return cloneRegExp(object);case setTag$3:return cloneSet(object,isDeep,cloneFunc);case symbolTag$2:return cloneSymbol(object);}}

function initCloneObject(object){return typeof object.constructor=='function'&&!isPrototype(object)?baseCreate(getPrototype(object)):{};}

var CLONE_DEEP_FLAG=1; var CLONE_FLAT_FLAG=2; var CLONE_SYMBOLS_FLAG$1=4;/** `Object#toString` result references. */var argsTag$2='[object Arguments]'; var arrayTag$1='[object Array]'; var boolTag$1='[object Boolean]'; var dateTag$1='[object Date]'; var errorTag$2='[object Error]'; var funcTag$2='[object Function]'; var genTag$1='[object GeneratorFunction]'; var mapTag$1='[object Map]'; var numberTag$1='[object Number]'; var objectTag$2='[object Object]'; var regexpTag$1='[object RegExp]'; var setTag$1='[object Set]'; var stringTag$1='[object String]'; var symbolTag$1='[object Symbol]'; var weakMapTag$1='[object WeakMap]';var arrayBufferTag$1='[object ArrayBuffer]'; var dataViewTag$1='[object DataView]'; var float32Tag$1='[object Float32Array]'; var float64Tag$1='[object Float64Array]'; var int8Tag$1='[object Int8Array]'; var int16Tag$1='[object Int16Array]'; var int32Tag$1='[object Int32Array]'; var uint8Tag$1='[object Uint8Array]'; var uint8ClampedTag$1='[object Uint8ClampedArray]'; var uint16Tag$1='[object Uint16Array]'; var uint32Tag$1='[object Uint32Array]';/** Used to identify `toStringTag` values supported by `_.clone`. */var cloneableTags={};cloneableTags[argsTag$2]=cloneableTags[arrayTag$1]=cloneableTags[arrayBufferTag$1]=cloneableTags[dataViewTag$1]=cloneableTags[boolTag$1]=cloneableTags[dateTag$1]=cloneableTags[float32Tag$1]=cloneableTags[float64Tag$1]=cloneableTags[int8Tag$1]=cloneableTags[int16Tag$1]=cloneableTags[int32Tag$1]=cloneableTags[mapTag$1]=cloneableTags[numberTag$1]=cloneableTags[objectTag$2]=cloneableTags[regexpTag$1]=cloneableTags[setTag$1]=cloneableTags[stringTag$1]=cloneableTags[symbolTag$1]=cloneableTags[uint8Tag$1]=cloneableTags[uint8ClampedTag$1]=cloneableTags[uint16Tag$1]=cloneableTags[uint32Tag$1]=true;cloneableTags[errorTag$2]=cloneableTags[funcTag$2]=cloneableTags[weakMapTag$1]=false;/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */function baseClone(value,bitmask,customizer,key,object,stack){var result,isDeep=bitmask&CLONE_DEEP_FLAG,isFlat=bitmask&CLONE_FLAT_FLAG,isFull=bitmask&CLONE_SYMBOLS_FLAG$1;if(customizer){result=object?customizer(value,key,object,stack):customizer(value);}if(result!==undefined){return result;}if(!isObject(value)){return value;}var isArr=isArray(value);if(isArr){result=initCloneArray(value);if(!isDeep){return copyArray(value,result);}}else{var tag=getTag$1(value),isFunc=tag==funcTag$2||tag==genTag$1;if(isBuffer(value)){return cloneBuffer(value,isDeep);}if(tag==objectTag$2||tag==argsTag$2||isFunc&&!object){result=isFlat||isFunc?{}:initCloneObject(value);if(!isDeep){return isFlat?copySymbolsIn(value,baseAssignIn(result,value)):copySymbols(value,baseAssign(result,value));}}else{if(!cloneableTags[tag]){return object?value:{};}result=initCloneByTag(value,tag,baseClone,isDeep);}}// Check for circular references and return its corresponding clone.
stack||(stack=new Stack());var stacked=stack.get(value);if(stacked){return stacked;}stack.set(value,result);var keysFunc=isFull?isFlat?getAllKeysIn:getAllKeys:isFlat?keysIn:keys;var props=isArr?undefined:keysFunc(value);arrayEach(props||value,function(subValue,key){if(props){key=subValue;subValue=value[key];}// Recursively populate clone (susceptible to call stack limits).
assignValue(result,key,baseClone(subValue,bitmask,customizer,key,value,stack));});return result;}

var CLONE_SYMBOLS_FLAG=4;/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */function clone(value){return baseClone(value,CLONE_SYMBOLS_FLAG);}

var CLONE_DEEP_FLAG$3=1; var CLONE_SYMBOLS_FLAG$2=4;/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */function cloneDeep(value){return baseClone(value,CLONE_DEEP_FLAG$3|CLONE_SYMBOLS_FLAG$2);}

var CLONE_DEEP_FLAG$4=1; var CLONE_SYMBOLS_FLAG$3=4;/**
 * This method is like `_.cloneWith` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @param {Function} [customizer] The function to customize cloning.
 * @returns {*} Returns the deep cloned value.
 * @see _.cloneWith
 * @example
 *
 * function customizer(value) {
 *   if (_.isElement(value)) {
 *     return value.cloneNode(true);
 *   }
 * }
 *
 * var el = _.cloneDeepWith(document.body, customizer);
 *
 * console.log(el === document.body);
 * // => false
 * console.log(el.nodeName);
 * // => 'BODY'
 * console.log(el.childNodes.length);
 * // => 20
 */function cloneDeepWith(value,customizer){customizer=typeof customizer=='function'?customizer:undefined;return baseClone(value,CLONE_DEEP_FLAG$4|CLONE_SYMBOLS_FLAG$3,customizer);}

var CLONE_SYMBOLS_FLAG$4=4;/**
 * This method is like `_.clone` except that it accepts `customizer` which
 * is invoked to produce the cloned value. If `customizer` returns `undefined`,
 * cloning is handled by the method instead. The `customizer` is invoked with
 * up to four arguments; (value [, index|key, object, stack]).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to clone.
 * @param {Function} [customizer] The function to customize cloning.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeepWith
 * @example
 *
 * function customizer(value) {
 *   if (_.isElement(value)) {
 *     return value.cloneNode(false);
 *   }
 * }
 *
 * var el = _.cloneWith(document.body, customizer);
 *
 * console.log(el === document.body);
 * // => false
 * console.log(el.nodeName);
 * // => 'BODY'
 * console.log(el.childNodes.length);
 * // => 0
 */function cloneWith(value,customizer){customizer=typeof customizer=='function'?customizer:undefined;return baseClone(value,CLONE_SYMBOLS_FLAG$4,customizer);}

function wrapperCommit(){return new LodashWrapper(this.value(),this.__chain__);}

/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * _.compact([0, 1, false, 2, '', 3]);
 * // => [1, 2, 3]
 */function compact(array){var index=-1,length=array==null?0:array.length,resIndex=0,result=[];while(++index<length){var value=array[index];if(value){result[resIndex++]=value;}}return result;}

function concat(){var length=arguments.length;if(!length){return[];}var args=Array(length-1),array=arguments[0],index=length;while(index--){args[index-1]=arguments[index];}return arrayPush(isArray(array)?copyArray(array):[array],baseFlatten(args,1));}

/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED$2='__lodash_hash_undefined__';/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */function setCacheAdd(value){this.__data__.set(value,HASH_UNDEFINED$2);return this;}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */function setCacheHas(value){return this.__data__.has(value);}

function SetCache(values){var index=-1,length=values==null?0:values.length;this.__data__=new MapCache();while(++index<length){this.add(values[index]);}}// Add methods to `SetCache`.
SetCache.prototype.add=SetCache.prototype.push=setCacheAdd;SetCache.prototype.has=setCacheHas;

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */function arraySome(array,predicate){var index=-1,length=array==null?0:array.length;while(++index<length){if(predicate(array[index],index,array)){return true;}}return false;}

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function cacheHas(cache,key){return cache.has(key);}

var COMPARE_PARTIAL_FLAG$2=1; var COMPARE_UNORDERED_FLAG$1=2;/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */function equalArrays(array,other,bitmask,customizer,equalFunc,stack){var isPartial=bitmask&COMPARE_PARTIAL_FLAG$2,arrLength=array.length,othLength=other.length;if(arrLength!=othLength&&!(isPartial&&othLength>arrLength)){return false;}// Assume cyclic values are equal.
var stacked=stack.get(array);if(stacked&&stack.get(other)){return stacked==other;}var index=-1,result=true,seen=bitmask&COMPARE_UNORDERED_FLAG$1?new SetCache():undefined;stack.set(array,other);stack.set(other,array);// Ignore non-index properties.
while(++index<arrLength){var arrValue=array[index],othValue=other[index];if(customizer){var compared=isPartial?customizer(othValue,arrValue,index,other,array,stack):customizer(arrValue,othValue,index,array,other,stack);}if(compared!==undefined){if(compared){continue;}result=false;break;}// Recursively compare arrays (susceptible to call stack limits).
if(seen){if(!arraySome(other,function(othValue,othIndex){if(!cacheHas(seen,othIndex)&&(arrValue===othValue||equalFunc(arrValue,othValue,bitmask,customizer,stack))){return seen.push(othIndex);}})){result=false;break;}}else if(!(arrValue===othValue||equalFunc(arrValue,othValue,bitmask,customizer,stack))){result=false;break;}}stack['delete'](array);stack['delete'](other);return result;}

var COMPARE_PARTIAL_FLAG$3=1; var COMPARE_UNORDERED_FLAG$2=2;/** `Object#toString` result references. */var boolTag$3='[object Boolean]'; var dateTag$3='[object Date]'; var errorTag$3='[object Error]'; var mapTag$4='[object Map]'; var numberTag$3='[object Number]'; var regexpTag$3='[object RegExp]'; var setTag$4='[object Set]'; var stringTag$3='[object String]'; var symbolTag$3='[object Symbol]';var arrayBufferTag$3='[object ArrayBuffer]'; var dataViewTag$4='[object DataView]';/** Used to convert symbols to primitives and strings. */var symbolProto$2=_Symbol?_Symbol.prototype:undefined; var symbolValueOf$1=symbolProto$2?symbolProto$2.valueOf:undefined;/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function equalByTag(object,other,tag,bitmask,customizer,equalFunc,stack){switch(tag){case dataViewTag$4:if(object.byteLength!=other.byteLength||object.byteOffset!=other.byteOffset){return false;}object=object.buffer;other=other.buffer;case arrayBufferTag$3:if(object.byteLength!=other.byteLength||!equalFunc(new Uint8Array(object),new Uint8Array(other))){return false;}return true;case boolTag$3:case dateTag$3:case numberTag$3:// Coerce booleans to `1` or `0` and dates to milliseconds.
// Invalid dates are coerced to `NaN`.
return eq(+object,+other);case errorTag$3:return object.name==other.name&&object.message==other.message;case regexpTag$3:case stringTag$3:// Coerce regexes to strings and treat strings, primitives and objects,
// as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
// for more details.
return object==other+'';case mapTag$4:var convert=mapToArray;case setTag$4:var isPartial=bitmask&COMPARE_PARTIAL_FLAG$3;convert||(convert=setToArray);if(object.size!=other.size&&!isPartial){return false;}// Assume cyclic values are equal.
var stacked=stack.get(object);if(stacked){return stacked==other;}bitmask|=COMPARE_UNORDERED_FLAG$2;// Recursively compare objects (susceptible to call stack limits).
stack.set(object,other);var result=equalArrays(convert(object),convert(other),bitmask,customizer,equalFunc,stack);stack['delete'](object);return result;case symbolTag$3:if(symbolValueOf$1){return symbolValueOf$1.call(object)==symbolValueOf$1.call(other);}}return false;}

var COMPARE_PARTIAL_FLAG$4=1;/** Used for built-in method references. */var objectProto$18=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$15=objectProto$18.hasOwnProperty;/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function equalObjects(object,other,bitmask,customizer,equalFunc,stack){var isPartial=bitmask&COMPARE_PARTIAL_FLAG$4,objProps=getAllKeys(object),objLength=objProps.length,othProps=getAllKeys(other),othLength=othProps.length;if(objLength!=othLength&&!isPartial){return false;}var index=objLength;while(index--){var key=objProps[index];if(!(isPartial?key in other:hasOwnProperty$15.call(other,key))){return false;}}// Assume cyclic values are equal.
var stacked=stack.get(object);if(stacked&&stack.get(other)){return stacked==other;}var result=true;stack.set(object,other);stack.set(other,object);var skipCtor=isPartial;while(++index<objLength){key=objProps[index];var objValue=object[key],othValue=other[key];if(customizer){var compared=isPartial?customizer(othValue,objValue,key,other,object,stack):customizer(objValue,othValue,key,object,other,stack);}// Recursively compare objects (susceptible to call stack limits).
if(!(compared===undefined?objValue===othValue||equalFunc(objValue,othValue,bitmask,customizer,stack):compared)){result=false;break;}skipCtor||(skipCtor=key=='constructor');}if(result&&!skipCtor){var objCtor=object.constructor,othCtor=other.constructor;// Non `Object` object instances with different constructors are not equal.
if(objCtor!=othCtor&&'constructor'in object&&'constructor'in other&&!(typeof objCtor=='function'&&objCtor instanceof objCtor&&typeof othCtor=='function'&&othCtor instanceof othCtor)){result=false;}}stack['delete'](object);stack['delete'](other);return result;}

var COMPARE_PARTIAL_FLAG$1=1;/** `Object#toString` result references. */var argsTag$3='[object Arguments]'; var arrayTag$2='[object Array]'; var objectTag$4='[object Object]';/** Used for built-in method references. */var objectProto$17=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$14=objectProto$17.hasOwnProperty;/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function baseIsEqualDeep(object,other,bitmask,customizer,equalFunc,stack){var objIsArr=isArray(object),othIsArr=isArray(other),objTag=objIsArr?arrayTag$2:getTag$1(object),othTag=othIsArr?arrayTag$2:getTag$1(other);objTag=objTag==argsTag$3?objectTag$4:objTag;othTag=othTag==argsTag$3?objectTag$4:othTag;var objIsObj=objTag==objectTag$4,othIsObj=othTag==objectTag$4,isSameTag=objTag==othTag;if(isSameTag&&isBuffer(object)){if(!isBuffer(other)){return false;}objIsArr=true;objIsObj=false;}if(isSameTag&&!objIsObj){stack||(stack=new Stack());return objIsArr||isTypedArray(object)?equalArrays(object,other,bitmask,customizer,equalFunc,stack):equalByTag(object,other,objTag,bitmask,customizer,equalFunc,stack);}if(!(bitmask&COMPARE_PARTIAL_FLAG$1)){var objIsWrapped=objIsObj&&hasOwnProperty$14.call(object,'__wrapped__'),othIsWrapped=othIsObj&&hasOwnProperty$14.call(other,'__wrapped__');if(objIsWrapped||othIsWrapped){var objUnwrapped=objIsWrapped?object.value():object,othUnwrapped=othIsWrapped?other.value():other;stack||(stack=new Stack());return equalFunc(objUnwrapped,othUnwrapped,bitmask,customizer,stack);}}if(!isSameTag){return false;}stack||(stack=new Stack());return equalObjects(object,other,bitmask,customizer,equalFunc,stack);}

function baseIsEqual(value,other,bitmask,customizer,stack){if(value===other){return true;}if(value==null||other==null||!isObjectLike(value)&&!isObjectLike(other)){return value!==value&&other!==other;}return baseIsEqualDeep(value,other,bitmask,customizer,baseIsEqual,stack);}

var COMPARE_PARTIAL_FLAG=1; var COMPARE_UNORDERED_FLAG=2;/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */function baseIsMatch(object,source,matchData,customizer){var index=matchData.length,length=index,noCustomizer=!customizer;if(object==null){return!length;}object=Object(object);while(index--){var data=matchData[index];if(noCustomizer&&data[2]?data[1]!==object[data[0]]:!(data[0]in object)){return false;}}while(++index<length){data=matchData[index];var key=data[0],objValue=object[key],srcValue=data[1];if(noCustomizer&&data[2]){if(objValue===undefined&&!(key in object)){return false;}}else{var stack=new Stack();if(customizer){var result=customizer(objValue,srcValue,key,object,source,stack);}if(!(result===undefined?baseIsEqual(srcValue,objValue,COMPARE_PARTIAL_FLAG|COMPARE_UNORDERED_FLAG,customizer,stack):result)){return false;}}}return true;}

function isStrictComparable(value){return value===value&&!isObject(value);}

function getMatchData(object){var result=keys(object),length=result.length;while(length--){var key=result[length],value=object[key];result[length]=[key,value,isStrictComparable(value)];}return result;}

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */function matchesStrictComparable(key,srcValue){return function(object){if(object==null){return false;}return object[key]===srcValue&&(srcValue!==undefined||key in Object(object));};}

function baseMatches(source){var matchData=getMatchData(source);if(matchData.length==1&&matchData[0][2]){return matchesStrictComparable(matchData[0][0],matchData[0][1]);}return function(object){return object===source||baseIsMatch(object,source,matchData);};}

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */function baseHasIn(object,key){return object!=null&&key in Object(object);}

function hasPath(object,path,hasFunc){path=castPath(path,object);var index=-1,length=path.length,result=false;while(++index<length){var key=toKey(path[index]);if(!(result=object!=null&&hasFunc(object,key))){break;}object=object[key];}if(result||++index!=length){return result;}length=object==null?0:object.length;return!!length&&isLength(length)&&isIndex(key,length)&&(isArray(object)||isArguments(object));}

function hasIn(object,path){return object!=null&&hasPath(object,path,baseHasIn);}

var COMPARE_PARTIAL_FLAG$5=1; var COMPARE_UNORDERED_FLAG$3=2;/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */function baseMatchesProperty(path,srcValue){if(isKey(path)&&isStrictComparable(srcValue)){return matchesStrictComparable(toKey(path),srcValue);}return function(object){var objValue=get$1(object,path);return objValue===undefined&&objValue===srcValue?hasIn(object,path):baseIsEqual(srcValue,objValue,COMPARE_PARTIAL_FLAG$5|COMPARE_UNORDERED_FLAG$3);};}

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */function baseProperty(key){return function(object){return object==null?undefined:object[key];};}

function basePropertyDeep(path){return function(object){return baseGet(object,path);};}

function property(path){return isKey(path)?baseProperty(toKey(path)):basePropertyDeep(path);}

function baseIteratee(value){// Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
// See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
if(typeof value=='function'){return value;}if(value==null){return identity;}if((typeof value==='undefined'?'undefined':_typeof(value))=='object'){return isArray(value)?baseMatchesProperty(value[0],value[1]):baseMatches(value);}return property(value);}

var FUNC_ERROR_TEXT$4='Expected a function';/**
 * Creates a function that iterates over `pairs` and invokes the corresponding
 * function of the first predicate to return truthy. The predicate-function
 * pairs are invoked with the `this` binding and arguments of the created
 * function.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Util
 * @param {Array} pairs The predicate-function pairs.
 * @returns {Function} Returns the new composite function.
 * @example
 *
 * var func = _.cond([
 *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
 *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
 *   [_.stubTrue,                      _.constant('no match')]
 * ]);
 *
 * func({ 'a': 1, 'b': 2 });
 * // => 'matches A'
 *
 * func({ 'a': 0, 'b': 1 });
 * // => 'matches B'
 *
 * func({ 'a': '1', 'b': '2' });
 * // => 'no match'
 */function cond(pairs){var length=pairs==null?0:pairs.length,toIteratee=baseIteratee;pairs=!length?[]:arrayMap(pairs,function(pair){if(typeof pair[1]!='function'){throw new TypeError(FUNC_ERROR_TEXT$4);}return[toIteratee(pair[0]),pair[1]];});return baseRest(function(args){var index=-1;while(++index<length){var pair=pairs[index];if(apply(pair[0],this,args)){return apply(pair[1],this,args);}}});}

/**
 * The base implementation of `_.conformsTo` which accepts `props` to check.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property predicates to conform to.
 * @returns {boolean} Returns `true` if `object` conforms, else `false`.
 */function baseConformsTo(object,source,props){var length=props.length;if(object==null){return!length;}object=Object(object);while(length--){var key=props[length],predicate=source[key],value=object[key];if(value===undefined&&!(key in object)||!predicate(value)){return false;}}return true;}

function baseConforms(source){var props=keys(source);return function(object){return baseConformsTo(object,source,props);};}

var CLONE_DEEP_FLAG$5=1;/**
 * Creates a function that invokes the predicate properties of `source` with
 * the corresponding property values of a given object, returning `true` if
 * all predicates return truthy, else `false`.
 *
 * **Note:** The created function is equivalent to `_.conformsTo` with
 * `source` partially applied.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Util
 * @param {Object} source The object of property predicates to conform to.
 * @returns {Function} Returns the new spec function.
 * @example
 *
 * var objects = [
 *   { 'a': 2, 'b': 1 },
 *   { 'a': 1, 'b': 2 }
 * ];
 *
 * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
 * // => [{ 'a': 1, 'b': 2 }]
 */function conforms(source){return baseConforms(baseClone(source,CLONE_DEEP_FLAG$5));}

function conformsTo(object,source){return source==null||baseConformsTo(object,source,keys(source));}

/**
 * A specialized version of `baseAggregator` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */function arrayAggregator(array,setter,iteratee,accumulator){var index=-1,length=array==null?0:array.length;while(++index<length){var value=array[index];setter(accumulator,value,iteratee(value),array);}return accumulator;}

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */function createBaseFor(fromRight){return function(object,iteratee,keysFunc){var index=-1,iterable=Object(object),props=keysFunc(object),length=props.length;while(length--){var key=props[fromRight?length:++index];if(iteratee(iterable[key],key,iterable)===false){break;}}return object;};}

var baseFor=createBaseFor();

function baseForOwn(object,iteratee){return object&&baseFor(object,iteratee,keys);}

function createBaseEach(eachFunc,fromRight){return function(collection,iteratee){if(collection==null){return collection;}if(!isArrayLike(collection)){return eachFunc(collection,iteratee);}var length=collection.length,index=fromRight?length:-1,iterable=Object(collection);while(fromRight?index--:++index<length){if(iteratee(iterable[index],index,iterable)===false){break;}}return collection;};}

var baseEach=createBaseEach(baseForOwn);

function baseAggregator(collection,setter,iteratee,accumulator){baseEach(collection,function(value,key,collection){setter(accumulator,value,iteratee(value),collection);});return accumulator;}

function createAggregator(setter,initializer){return function(collection,iteratee){var func=isArray(collection)?arrayAggregator:baseAggregator,accumulator=initializer?initializer():{};return func(collection,setter,baseIteratee(iteratee,2),accumulator);};}

var objectProto$19=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$16=objectProto$19.hasOwnProperty;/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The corresponding value of
 * each key is the number of times the key was returned by `iteratee`. The
 * iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * _.countBy([6.1, 4.2, 6.3], Math.floor);
 * // => { '4': 1, '6': 2 }
 *
 * // The `_.property` iteratee shorthand.
 * _.countBy(['one', 'two', 'three'], 'length');
 * // => { '3': 2, '5': 1 }
 */var countBy=createAggregator(function(result,value,key){if(hasOwnProperty$16.call(result,key)){++result[key];}else{baseAssignValue(result,key,1);}});

function create(prototype,properties){var result=baseCreate(prototype);return properties==null?result:baseAssign(result,properties);}

var WRAP_CURRY_FLAG$5=8;/**
 * Creates a function that accepts arguments of `func` and either invokes
 * `func` returning its result, if at least `arity` number of arguments have
 * been provided, or returns a function that accepts the remaining `func`
 * arguments, and so on. The arity of `func` may be specified if `func.length`
 * is not sufficient.
 *
 * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
 * may be used as a placeholder for provided arguments.
 *
 * **Note:** This method doesn't set the "length" property of curried functions.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Function
 * @param {Function} func The function to curry.
 * @param {number} [arity=func.length] The arity of `func`.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Function} Returns the new curried function.
 * @example
 *
 * var abc = function(a, b, c) {
 *   return [a, b, c];
 * };
 *
 * var curried = _.curry(abc);
 *
 * curried(1)(2)(3);
 * // => [1, 2, 3]
 *
 * curried(1, 2)(3);
 * // => [1, 2, 3]
 *
 * curried(1, 2, 3);
 * // => [1, 2, 3]
 *
 * // Curried with placeholders.
 * curried(1)(_, 3)(2);
 * // => [1, 2, 3]
 */function curry(func,arity,guard){arity=guard?undefined:arity;var result=createWrap(func,WRAP_CURRY_FLAG$5,undefined,undefined,undefined,undefined,undefined,arity);result.placeholder=curry.placeholder;return result;}// Assign default placeholders.
curry.placeholder={};

var WRAP_CURRY_RIGHT_FLAG$3=16;/**
 * This method is like `_.curry` except that arguments are applied to `func`
 * in the manner of `_.partialRight` instead of `_.partial`.
 *
 * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
 * builds, may be used as a placeholder for provided arguments.
 *
 * **Note:** This method doesn't set the "length" property of curried functions.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} func The function to curry.
 * @param {number} [arity=func.length] The arity of `func`.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Function} Returns the new curried function.
 * @example
 *
 * var abc = function(a, b, c) {
 *   return [a, b, c];
 * };
 *
 * var curried = _.curryRight(abc);
 *
 * curried(3)(2)(1);
 * // => [1, 2, 3]
 *
 * curried(2, 3)(1);
 * // => [1, 2, 3]
 *
 * curried(1, 2, 3);
 * // => [1, 2, 3]
 *
 * // Curried with placeholders.
 * curried(3)(1, _)(2);
 * // => [1, 2, 3]
 */function curryRight(func,arity,guard){arity=guard?undefined:arity;var result=createWrap(func,WRAP_CURRY_RIGHT_FLAG$3,undefined,undefined,undefined,undefined,undefined,arity);result.placeholder=curryRight.placeholder;return result;}// Assign default placeholders.
curryRight.placeholder={};

var now=function now(){return root.Date.now();};

var FUNC_ERROR_TEXT$5='Expected a function';/* Built-in method references for those with the same name as other `lodash` methods. */var nativeMax$5=Math.max; var nativeMin$3=Math.min;/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */function debounce(func,wait,options){var lastArgs,lastThis,maxWait,result,timerId,lastCallTime,lastInvokeTime=0,leading=false,maxing=false,trailing=true;if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT$5);}wait=toNumber(wait)||0;if(isObject(options)){leading=!!options.leading;maxing='maxWait'in options;maxWait=maxing?nativeMax$5(toNumber(options.maxWait)||0,wait):maxWait;trailing='trailing'in options?!!options.trailing:trailing;}function invokeFunc(time){var args=lastArgs,thisArg=lastThis;lastArgs=lastThis=undefined;lastInvokeTime=time;result=func.apply(thisArg,args);return result;}function leadingEdge(time){// Reset any `maxWait` timer.
lastInvokeTime=time;// Start the timer for the trailing edge.
timerId=setTimeout(timerExpired,wait);// Invoke the leading edge.
return leading?invokeFunc(time):result;}function remainingWait(time){var timeSinceLastCall=time-lastCallTime,timeSinceLastInvoke=time-lastInvokeTime,result=wait-timeSinceLastCall;return maxing?nativeMin$3(result,maxWait-timeSinceLastInvoke):result;}function shouldInvoke(time){var timeSinceLastCall=time-lastCallTime,timeSinceLastInvoke=time-lastInvokeTime;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return lastCallTime===undefined||timeSinceLastCall>=wait||timeSinceLastCall<0||maxing&&timeSinceLastInvoke>=maxWait;}function timerExpired(){var time=now();if(shouldInvoke(time)){return trailingEdge(time);}// Restart the timer.
timerId=setTimeout(timerExpired,remainingWait(time));}function trailingEdge(time){timerId=undefined;// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
if(trailing&&lastArgs){return invokeFunc(time);}lastArgs=lastThis=undefined;return result;}function cancel(){if(timerId!==undefined){clearTimeout(timerId);}lastInvokeTime=0;lastArgs=lastCallTime=lastThis=timerId=undefined;}function flush(){return timerId===undefined?result:trailingEdge(now());}function debounced(){var time=now(),isInvoking=shouldInvoke(time);lastArgs=arguments;lastThis=this;lastCallTime=time;if(isInvoking){if(timerId===undefined){return leadingEdge(lastCallTime);}if(maxing){// Handle invocations in a tight loop.
timerId=setTimeout(timerExpired,wait);return invokeFunc(lastCallTime);}}if(timerId===undefined){timerId=setTimeout(timerExpired,wait);}return result;}debounced.cancel=cancel;debounced.flush=flush;return debounced;}

/**
 * Checks `value` to determine whether a default value should be returned in
 * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
 * or `undefined`.
 *
 * @static
 * @memberOf _
 * @since 4.14.0
 * @category Util
 * @param {*} value The value to check.
 * @param {*} defaultValue The default value.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * _.defaultTo(1, 10);
 * // => 1
 *
 * _.defaultTo(undefined, 10);
 * // => 10
 */function defaultTo(value,defaultValue){return value==null||value!==value?defaultValue:value;}

var objectProto$20=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$17=objectProto$20.hasOwnProperty;/**
 * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
 * of source objects to the destination object for all destination properties
 * that resolve to `undefined`.
 *
 * @private
 * @param {*} objValue The destination value.
 * @param {*} srcValue The source value.
 * @param {string} key The key of the property to assign.
 * @param {Object} object The parent object of `objValue`.
 * @returns {*} Returns the value to assign.
 */function customDefaultsAssignIn(objValue,srcValue,key,object){if(objValue===undefined||eq(objValue,objectProto$20[key])&&!hasOwnProperty$17.call(object,key)){return srcValue;}return objValue;}

var defaults$1=baseRest(function(args){args.push(undefined,customDefaultsAssignIn);return apply(assignInWith,undefined,args);});

function assignMergeValue(object,key,value){if(value!==undefined&&!eq(object[key],value)||value===undefined&&!(key in object)){baseAssignValue(object,key,value);}}

function isArrayLikeObject(value){return isObjectLike(value)&&isArrayLike(value);}

function toPlainObject(value){return copyObject(value,keysIn$1(value));}

function baseMergeDeep(object,source,key,srcIndex,mergeFunc,customizer,stack){var objValue=object[key],srcValue=source[key],stacked=stack.get(srcValue);if(stacked){assignMergeValue(object,key,stacked);return;}var newValue=customizer?customizer(objValue,srcValue,key+'',object,source,stack):undefined;var isCommon=newValue===undefined;if(isCommon){var isArr=isArray(srcValue),isBuff=!isArr&&isBuffer(srcValue),isTyped=!isArr&&!isBuff&&isTypedArray(srcValue);newValue=srcValue;if(isArr||isBuff||isTyped){if(isArray(objValue)){newValue=objValue;}else if(isArrayLikeObject(objValue)){newValue=copyArray(objValue);}else if(isBuff){isCommon=false;newValue=cloneBuffer(srcValue,true);}else if(isTyped){isCommon=false;newValue=cloneTypedArray(srcValue,true);}else{newValue=[];}}else if(isPlainObject(srcValue)||isArguments(srcValue)){newValue=objValue;if(isArguments(objValue)){newValue=toPlainObject(objValue);}else if(!isObject(objValue)||srcIndex&&isFunction(objValue)){newValue=initCloneObject(srcValue);}}else{isCommon=false;}}if(isCommon){// Recursively merge objects and arrays (susceptible to call stack limits).
stack.set(srcValue,newValue);mergeFunc(newValue,srcValue,srcIndex,customizer,stack);stack['delete'](srcValue);}assignMergeValue(object,key,newValue);}

function baseMerge(object,source,srcIndex,customizer,stack){if(object===source){return;}baseFor(source,function(srcValue,key){if(isObject(srcValue)){stack||(stack=new Stack());baseMergeDeep(object,source,key,srcIndex,baseMerge,customizer,stack);}else{var newValue=customizer?customizer(object[key],srcValue,key+'',object,source,stack):undefined;if(newValue===undefined){newValue=srcValue;}assignMergeValue(object,key,newValue);}},keysIn$1);}

function customDefaultsMerge(objValue,srcValue,key,object,source,stack){if(isObject(objValue)&&isObject(srcValue)){// Recursively merge objects and arrays (susceptible to call stack limits).
stack.set(srcValue,objValue);baseMerge(objValue,srcValue,undefined,customDefaultsMerge,stack);stack['delete'](srcValue);}return objValue;}

var mergeWith=createAssigner(function(object,source,srcIndex,customizer){baseMerge(object,source,srcIndex,customizer);});

var defaultsDeep=baseRest(function(args){args.push(undefined,customDefaultsMerge);return apply(mergeWith,undefined,args);});

/** Error message constants. */var FUNC_ERROR_TEXT$6='Expected a function';/**
 * The base implementation of `_.delay` and `_.defer` which accepts `args`
 * to provide to `func`.
 *
 * @private
 * @param {Function} func The function to delay.
 * @param {number} wait The number of milliseconds to delay invocation.
 * @param {Array} args The arguments to provide to `func`.
 * @returns {number|Object} Returns the timer id or timeout object.
 */function baseDelay(func,wait,args){if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT$6);}return setTimeout(function(){func.apply(undefined,args);},wait);}

var defer=baseRest(function(func,args){return baseDelay(func,1,args);});

var delay=baseRest(function(func,wait,args){return baseDelay(func,toNumber(wait)||0,args);});

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */function arrayIncludesWith(array,value,comparator){var index=-1,length=array==null?0:array.length;while(++index<length){if(comparator(value,array[index])){return true;}}return false;}

var LARGE_ARRAY_SIZE$1=200;/**
 * The base implementation of methods like `_.difference` without support
 * for excluding multiple arrays or iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Array} values The values to exclude.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */function baseDifference(array,values,iteratee,comparator){var index=-1,includes=arrayIncludes,isCommon=true,length=array.length,result=[],valuesLength=values.length;if(!length){return result;}if(iteratee){values=arrayMap(values,baseUnary(iteratee));}if(comparator){includes=arrayIncludesWith;isCommon=false;}else if(values.length>=LARGE_ARRAY_SIZE$1){includes=cacheHas;isCommon=false;values=new SetCache(values);}outer:while(++index<length){var value=array[index],computed=iteratee==null?value:iteratee(value);value=comparator||value!==0?value:0;if(isCommon&&computed===computed){var valuesIndex=valuesLength;while(valuesIndex--){if(values[valuesIndex]===computed){continue outer;}}result.push(value);}else if(!includes(values,computed,comparator)){result.push(value);}}return result;}

var difference=baseRest(function(array,values){return isArrayLikeObject(array)?baseDifference(array,baseFlatten(values,1,isArrayLikeObject,true)):[];});

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */function last(array){var length=array==null?0:array.length;return length?array[length-1]:undefined;}

var differenceBy=baseRest(function(array,values){var iteratee=last(values);if(isArrayLikeObject(iteratee)){iteratee=undefined;}return isArrayLikeObject(array)?baseDifference(array,baseFlatten(values,1,isArrayLikeObject,true),baseIteratee(iteratee,2)):[];});

var differenceWith=baseRest(function(array,values){var comparator=last(values);if(isArrayLikeObject(comparator)){comparator=undefined;}return isArrayLikeObject(array)?baseDifference(array,baseFlatten(values,1,isArrayLikeObject,true),undefined,comparator):[];});

var divide=createMathOperation(function(dividend,divisor){return dividend/divisor;},1);

function drop(array,n,guard){var length=array==null?0:array.length;if(!length){return[];}n=guard||n===undefined?1:toInteger(n);return baseSlice(array,n<0?0:n,length);}

function dropRight(array,n,guard){var length=array==null?0:array.length;if(!length){return[];}n=guard||n===undefined?1:toInteger(n);n=length-n;return baseSlice(array,0,n<0?0:n);}

function baseWhile(array,predicate,isDrop,fromRight){var length=array.length,index=fromRight?length:-1;while((fromRight?index--:++index<length)&&predicate(array[index],index,array)){}return isDrop?baseSlice(array,fromRight?0:index,fromRight?index+1:length):baseSlice(array,fromRight?index+1:0,fromRight?length:index);}

function dropRightWhile(array,predicate){return array&&array.length?baseWhile(array,baseIteratee(predicate,3),true,true):[];}

function dropWhile(array,predicate){return array&&array.length?baseWhile(array,baseIteratee(predicate,3),true):[];}

function castFunction(value){return typeof value=='function'?value:identity;}

function forEach(collection,iteratee){var func=isArray(collection)?arrayEach:baseEach;return func(collection,castFunction(iteratee));}

/**
 * A specialized version of `_.forEachRight` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */function arrayEachRight(array,iteratee){var length=array==null?0:array.length;while(length--){if(iteratee(array[length],length,array)===false){break;}}return array;}

var baseForRight=createBaseFor(true);

function baseForOwnRight(object,iteratee){return object&&baseForRight(object,iteratee,keys);}

var baseEachRight=createBaseEach(baseForOwnRight,true);

function forEachRight(collection,iteratee){var func=isArray(collection)?arrayEachRight:baseEachRight;return func(collection,castFunction(iteratee));}

function endsWith(string,target,position){string=toString(string);target=baseToString(target);var length=string.length;position=position===undefined?length:baseClamp(toInteger(position),0,length);var end=position;position-=target.length;return position>=0&&string.slice(position,end)==target;}

function baseToPairs(object,props){return arrayMap(props,function(key){return[key,object[key]];});}

/**
 * Converts `set` to its value-value pairs.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the value-value pairs.
 */function setToPairs(set){var index=-1,result=Array(set.size);set.forEach(function(value){result[++index]=[value,value];});return result;}

var mapTag$5='[object Map]'; var setTag$5='[object Set]';/**
 * Creates a `_.toPairs` or `_.toPairsIn` function.
 *
 * @private
 * @param {Function} keysFunc The function to get the keys of a given object.
 * @returns {Function} Returns the new pairs function.
 */function createToPairs(keysFunc){return function(object){var tag=getTag$1(object);if(tag==mapTag$5){return mapToArray(object);}if(tag==setTag$5){return setToPairs(object);}return baseToPairs(object,keysFunc(object));};}

var toPairs=createToPairs(keys);

var toPairsIn=createToPairs(keysIn$1);

var htmlEscapes={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'};/**
 * Used by `_.escape` to convert characters to HTML entities.
 *
 * @private
 * @param {string} chr The matched character to escape.
 * @returns {string} Returns the escaped character.
 */var escapeHtmlChar=basePropertyOf(htmlEscapes);

var reUnescapedHtml=/[&<>"']/g; var reHasUnescapedHtml=RegExp(reUnescapedHtml.source);/**
 * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
 * corresponding HTML entities.
 *
 * **Note:** No other characters are escaped. To escape additional
 * characters use a third-party library like [_he_](https://mths.be/he).
 *
 * Though the ">" character is escaped for symmetry, characters like
 * ">" and "/" don't need escaping in HTML and have no special meaning
 * unless they're part of a tag or unquoted attribute value. See
 * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
 * (under "semi-related fun fact") for more details.
 *
 * When working with HTML you should always
 * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
 * XSS vectors.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escape('fred, barney, & pebbles');
 * // => 'fred, barney, &amp; pebbles'
 */function escape(string){string=toString(string);return string&&reHasUnescapedHtml.test(string)?string.replace(reUnescapedHtml,escapeHtmlChar):string;}

var reRegExpChar$1=/[\\^$.*+?()[\]{}|]/g;
 var reHasRegExpChar=RegExp(reRegExpChar$1.source);/**
 * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
 * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escapeRegExp('[lodash](https://lodash.com/)');
 * // => '\[lodash\]\(https://lodash\.com/\)'
 */function escapeRegExp(string){string=toString(string);return string&&reHasRegExpChar.test(string)?string.replace(reRegExpChar$1,'\\$&'):string;}

/**
 * A specialized version of `_.every` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`.
 */function arrayEvery(array,predicate){var index=-1,length=array==null?0:array.length;while(++index<length){if(!predicate(array[index],index,array)){return false;}}return true;}

function baseEvery(collection,predicate){var result=true;baseEach(collection,function(value,index,collection){result=!!predicate(value,index,collection);return result;});return result;}

function every(collection,predicate,guard){var func=isArray(collection)?arrayEvery:baseEvery;if(guard&&isIterateeCall(collection,predicate,guard)){predicate=undefined;}return func(collection,baseIteratee(predicate,3));}

var MAX_ARRAY_LENGTH$1=4294967295;/**
 * Converts `value` to an integer suitable for use as the length of an
 * array-like object.
 *
 * **Note:** This method is based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toLength(3.2);
 * // => 3
 *
 * _.toLength(Number.MIN_VALUE);
 * // => 0
 *
 * _.toLength(Infinity);
 * // => 4294967295
 *
 * _.toLength('3.2');
 * // => 3
 */function toLength(value){return value?baseClamp(toInteger(value),0,MAX_ARRAY_LENGTH$1):0;}

function baseFill(array,value,start,end){var length=array.length;start=toInteger(start);if(start<0){start=-start>length?0:length+start;}end=end===undefined||end>length?length:toInteger(end);if(end<0){end+=length;}end=start>end?0:toLength(end);while(start<end){array[start++]=value;}return array;}

function fill(array,value,start,end){var length=array==null?0:array.length;if(!length){return[];}if(start&&typeof start!='number'&&isIterateeCall(array,value,start)){start=0;end=length;}return baseFill(array,value,start,end);}

function baseFilter(collection,predicate){var result=[];baseEach(collection,function(value,index,collection){if(predicate(value,index,collection)){result.push(value);}});return result;}

function filter(collection,predicate){var func=isArray(collection)?arrayFilter:baseFilter;return func(collection,baseIteratee(predicate,3));}

function createFind(findIndexFunc){return function(collection,predicate,fromIndex){var iterable=Object(collection);if(!isArrayLike(collection)){var iteratee=baseIteratee(predicate,3);collection=keys(collection);predicate=function predicate(key){return iteratee(iterable[key],key,iterable);};}var index=findIndexFunc(collection,predicate,fromIndex);return index>-1?iterable[iteratee?collection[index]:index]:undefined;};}

var nativeMax$6=Math.max;/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */function findIndex(array,predicate,fromIndex){var length=array==null?0:array.length;if(!length){return-1;}var index=fromIndex==null?0:toInteger(fromIndex);if(index<0){index=nativeMax$6(length+index,0);}return baseFindIndex(array,baseIteratee(predicate,3),index);}

var find=createFind(findIndex);

/**
 * The base implementation of methods like `_.findKey` and `_.findLastKey`,
 * without support for iteratee shorthands, which iterates over `collection`
 * using `eachFunc`.
 *
 * @private
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @returns {*} Returns the found element or its key, else `undefined`.
 */function baseFindKey(collection,predicate,eachFunc){var result;eachFunc(collection,function(value,key,collection){if(predicate(value,key,collection)){result=key;return false;}});return result;}

function findKey(object,predicate){return baseFindKey(object,baseIteratee(predicate,3),baseForOwn);}

var nativeMax$7=Math.max; var nativeMin$4=Math.min;/**
 * This method is like `_.findIndex` except that it iterates over elements
 * of `collection` from right to left.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=array.length-1] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': false }
 * ];
 *
 * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
 * // => 2
 *
 * // The `_.matches` iteratee shorthand.
 * _.findLastIndex(users, { 'user': 'barney', 'active': true });
 * // => 0
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findLastIndex(users, ['active', false]);
 * // => 2
 *
 * // The `_.property` iteratee shorthand.
 * _.findLastIndex(users, 'active');
 * // => 0
 */function findLastIndex(array,predicate,fromIndex){var length=array==null?0:array.length;if(!length){return-1;}var index=length-1;if(fromIndex!==undefined){index=toInteger(fromIndex);index=fromIndex<0?nativeMax$7(length+index,0):nativeMin$4(index,length-1);}return baseFindIndex(array,baseIteratee(predicate,3),index,true);}

var findLast=createFind(findLastIndex);

function findLastKey(object,predicate){return baseFindKey(object,baseIteratee(predicate,3),baseForOwnRight);}

/**
 * Gets the first element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias first
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the first element of `array`.
 * @example
 *
 * _.head([1, 2, 3]);
 * // => 1
 *
 * _.head([]);
 * // => undefined
 */function head(array){return array&&array.length?array[0]:undefined;}

function baseMap(collection,iteratee){var index=-1,result=isArrayLike(collection)?Array(collection.length):[];baseEach(collection,function(value,key,collection){result[++index]=iteratee(value,key,collection);});return result;}

function map(collection,iteratee){var func=isArray(collection)?arrayMap:baseMap;return func(collection,baseIteratee(iteratee,3));}

function flatMap(collection,iteratee){return baseFlatten(map(collection,iteratee),1);}

var INFINITY$3=1/0;/**
 * This method is like `_.flatMap` except that it recursively flattens the
 * mapped results.
 *
 * @static
 * @memberOf _
 * @since 4.7.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * function duplicate(n) {
 *   return [[[n, n]]];
 * }
 *
 * _.flatMapDeep([1, 2], duplicate);
 * // => [1, 1, 2, 2]
 */function flatMapDeep(collection,iteratee){return baseFlatten(map(collection,iteratee),INFINITY$3);}

function flatMapDepth(collection,iteratee,depth){depth=depth===undefined?1:toInteger(depth);return baseFlatten(map(collection,iteratee),depth);}

var INFINITY$4=1/0;/**
 * Recursively flattens `array`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flattenDeep([1, [2, [3, [4]], 5]]);
 * // => [1, 2, 3, 4, 5]
 */function flattenDeep(array){var length=array==null?0:array.length;return length?baseFlatten(array,INFINITY$4):[];}

function flattenDepth(array,depth){var length=array==null?0:array.length;if(!length){return[];}depth=depth===undefined?1:toInteger(depth);return baseFlatten(array,depth);}

var WRAP_FLIP_FLAG$2=512;/**
 * Creates a function that invokes `func` with arguments reversed.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Function
 * @param {Function} func The function to flip arguments for.
 * @returns {Function} Returns the new flipped function.
 * @example
 *
 * var flipped = _.flip(function() {
 *   return _.toArray(arguments);
 * });
 *
 * flipped('a', 'b', 'c', 'd');
 * // => ['d', 'c', 'b', 'a']
 */function flip(func){return createWrap(func,WRAP_FLIP_FLAG$2);}

var floor=createRound('floor');

var FUNC_ERROR_TEXT$7='Expected a function';/** Used to compose bitmasks for function metadata. */var WRAP_CURRY_FLAG$6=8; var WRAP_PARTIAL_FLAG$5=32; var WRAP_ARY_FLAG$4=128; var WRAP_REARG_FLAG$2=256;/**
 * Creates a `_.flow` or `_.flowRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new flow function.
 */function createFlow(fromRight){return flatRest(function(funcs){var length=funcs.length,index=length,prereq=LodashWrapper.prototype.thru;if(fromRight){funcs.reverse();}while(index--){var func=funcs[index];if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT$7);}if(prereq&&!wrapper&&getFuncName(func)=='wrapper'){var wrapper=new LodashWrapper([],true);}}index=wrapper?index:length;while(++index<length){func=funcs[index];var funcName=getFuncName(func),data=funcName=='wrapper'?getData(func):undefined;if(data&&isLaziable(data[0])&&data[1]==(WRAP_ARY_FLAG$4|WRAP_CURRY_FLAG$6|WRAP_PARTIAL_FLAG$5|WRAP_REARG_FLAG$2)&&!data[4].length&&data[9]==1){wrapper=wrapper[getFuncName(data[0])].apply(wrapper,data[3]);}else{wrapper=func.length==1&&isLaziable(func)?wrapper[funcName]():wrapper.thru(func);}}return function(){var args=arguments,value=args[0];if(wrapper&&args.length==1&&isArray(value)){return wrapper.plant(value).value();}var index=0,result=length?funcs[index].apply(this,args):value;while(++index<length){result=funcs[index].call(this,result);}return result;};});}

var flow=createFlow();

var flowRight=createFlow(true);

function forIn(object,iteratee){return object==null?object:baseFor(object,castFunction(iteratee),keysIn$1);}

function forInRight(object,iteratee){return object==null?object:baseForRight(object,castFunction(iteratee),keysIn$1);}

function forOwn(object,iteratee){return object&&baseForOwn(object,castFunction(iteratee));}

function forOwnRight(object,iteratee){return object&&baseForOwnRight(object,castFunction(iteratee));}

/**
 * The inverse of `_.toPairs`; this method returns an object composed
 * from key-value `pairs`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} pairs The key-value pairs.
 * @returns {Object} Returns the new object.
 * @example
 *
 * _.fromPairs([['a', 1], ['b', 2]]);
 * // => { 'a': 1, 'b': 2 }
 */function fromPairs(pairs){var index=-1,length=pairs==null?0:pairs.length,result={};while(++index<length){var pair=pairs[index];result[pair[0]]=pair[1];}return result;}

function baseFunctions(object,props){return arrayFilter(props,function(key){return isFunction(object[key]);});}

function functions(object){return object==null?[]:baseFunctions(object,keys(object));}

function functionsIn(object){return object==null?[]:baseFunctions(object,keysIn$1(object));}

var objectProto$21=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$18=objectProto$21.hasOwnProperty;/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The order of grouped values
 * is determined by the order they occur in `collection`. The corresponding
 * value of each key is an array of elements responsible for generating the
 * key. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * _.groupBy([6.1, 4.2, 6.3], Math.floor);
 * // => { '4': [4.2], '6': [6.1, 6.3] }
 *
 * // The `_.property` iteratee shorthand.
 * _.groupBy(['one', 'two', 'three'], 'length');
 * // => { '3': ['one', 'two'], '5': ['three'] }
 */var groupBy=createAggregator(function(result,value,key){if(hasOwnProperty$18.call(result,key)){result[key].push(value);}else{baseAssignValue(result,key,[value]);}});

/**
 * The base implementation of `_.gt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is greater than `other`,
 *  else `false`.
 */function baseGt(value,other){return value>other;}

function createRelationalOperation(operator){return function(value,other){if(!(typeof value=='string'&&typeof other=='string')){value=toNumber(value);other=toNumber(other);}return operator(value,other);};}

var gt=createRelationalOperation(baseGt);

var gte=createRelationalOperation(function(value,other){return value>=other;});

/** Used for built-in method references. */var objectProto$22=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$19=objectProto$22.hasOwnProperty;/**
 * The base implementation of `_.has` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */function baseHas(object,key){return object!=null&&hasOwnProperty$19.call(object,key);}

function has(object,path){return object!=null&&hasPath(object,path,baseHas);}

/* Built-in method references for those with the same name as other `lodash` methods. */var nativeMax$8=Math.max;
var nativeMin$5=Math.min;/**
 * The base implementation of `_.inRange` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to check.
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
 */function baseInRange(number,start,end){return number>=nativeMin$5(start,end)&&number<nativeMax$8(start,end);}

function inRange(number,start,end){start=toFinite(start);if(end===undefined){end=start;start=0;}else{end=toFinite(end);}number=toNumber(number);return baseInRange(number,start,end);}

var stringTag$4='[object String]';/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */function isString(value){return typeof value=='string'||!isArray(value)&&isObjectLike(value)&&baseGetTag(value)==stringTag$4;}

function baseValues(object,props){return arrayMap(props,function(key){return object[key];});}

function values(object){return object==null?[]:baseValues(object,keys(object));}

var nativeMax$9=Math.max;/**
 * Checks if `value` is in `collection`. If `collection` is a string, it's
 * checked for a substring of `value`, otherwise
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * is used for equality comparisons. If `fromIndex` is negative, it's used as
 * the offset from the end of `collection`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'a': 1, 'b': 2 }, 1);
 * // => true
 *
 * _.includes('abcd', 'bc');
 * // => true
 */function includes(collection,value,fromIndex,guard){collection=isArrayLike(collection)?collection:values(collection);fromIndex=fromIndex&&!guard?toInteger(fromIndex):0;var length=collection.length;if(fromIndex<0){fromIndex=nativeMax$9(length+fromIndex,0);}return isString(collection)?fromIndex<=length&&collection.indexOf(value,fromIndex)>-1:!!length&&baseIndexOf(collection,value,fromIndex)>-1;}

var nativeMax$10=Math.max;/**
 * Gets the index at which the first occurrence of `value` is found in `array`
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. If `fromIndex` is negative, it's used as the
 * offset from the end of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 * @example
 *
 * _.indexOf([1, 2, 1, 2], 2);
 * // => 1
 *
 * // Search from the `fromIndex`.
 * _.indexOf([1, 2, 1, 2], 2, 2);
 * // => 3
 */function indexOf(array,value,fromIndex){var length=array==null?0:array.length;if(!length){return-1;}var index=fromIndex==null?0:toInteger(fromIndex);if(index<0){index=nativeMax$10(length+index,0);}return baseIndexOf(array,value,index);}

function initial(array){var length=array==null?0:array.length;return length?baseSlice(array,0,-1):[];}

var nativeMin$6=Math.min;/**
 * The base implementation of methods like `_.intersection`, without support
 * for iteratee shorthands, that accepts an array of arrays to inspect.
 *
 * @private
 * @param {Array} arrays The arrays to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of shared values.
 */function baseIntersection(arrays,iteratee,comparator){var includes=comparator?arrayIncludesWith:arrayIncludes,length=arrays[0].length,othLength=arrays.length,othIndex=othLength,caches=Array(othLength),maxLength=Infinity,result=[];while(othIndex--){var array=arrays[othIndex];if(othIndex&&iteratee){array=arrayMap(array,baseUnary(iteratee));}maxLength=nativeMin$6(array.length,maxLength);caches[othIndex]=!comparator&&(iteratee||length>=120&&array.length>=120)?new SetCache(othIndex&&array):undefined;}array=arrays[0];var index=-1,seen=caches[0];outer:while(++index<length&&result.length<maxLength){var value=array[index],computed=iteratee?iteratee(value):value;value=comparator||value!==0?value:0;if(!(seen?cacheHas(seen,computed):includes(result,computed,comparator))){othIndex=othLength;while(--othIndex){var cache=caches[othIndex];if(!(cache?cacheHas(cache,computed):includes(arrays[othIndex],computed,comparator))){continue outer;}}if(seen){seen.push(computed);}result.push(value);}}return result;}

function castArrayLikeObject(value){return isArrayLikeObject(value)?value:[];}

var intersection=baseRest(function(arrays){var mapped=arrayMap(arrays,castArrayLikeObject);return mapped.length&&mapped[0]===arrays[0]?baseIntersection(mapped):[];});

var intersectionBy=baseRest(function(arrays){var iteratee=last(arrays),mapped=arrayMap(arrays,castArrayLikeObject);if(iteratee===last(mapped)){iteratee=undefined;}else{mapped.pop();}return mapped.length&&mapped[0]===arrays[0]?baseIntersection(mapped,baseIteratee(iteratee,2)):[];});

var intersectionWith=baseRest(function(arrays){var comparator=last(arrays),mapped=arrayMap(arrays,castArrayLikeObject);comparator=typeof comparator=='function'?comparator:undefined;if(comparator){mapped.pop();}return mapped.length&&mapped[0]===arrays[0]?baseIntersection(mapped,undefined,comparator):[];});

function baseInverter(object,setter,iteratee,accumulator){baseForOwn(object,function(value,key,object){setter(accumulator,iteratee(value),key,object);});return accumulator;}

function createInverter(setter,toIteratee){return function(object,iteratee){return baseInverter(object,setter,toIteratee(iteratee),{});};}

var invert=createInverter(function(result,value,key){result[value]=key;},constant(identity));

var objectProto$23=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$20=objectProto$23.hasOwnProperty;/**
 * This method is like `_.invert` except that the inverted object is generated
 * from the results of running each element of `object` thru `iteratee`. The
 * corresponding inverted value of each inverted key is an array of keys
 * responsible for generating the inverted value. The iteratee is invoked
 * with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.1.0
 * @category Object
 * @param {Object} object The object to invert.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {Object} Returns the new inverted object.
 * @example
 *
 * var object = { 'a': 1, 'b': 2, 'c': 1 };
 *
 * _.invertBy(object);
 * // => { '1': ['a', 'c'], '2': ['b'] }
 *
 * _.invertBy(object, function(value) {
 *   return 'group' + value;
 * });
 * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
 */var invertBy=createInverter(function(result,value,key){if(hasOwnProperty$20.call(result,value)){result[value].push(key);}else{result[value]=[key];}},baseIteratee);

function parent(object,path){return path.length<2?object:baseGet(object,baseSlice(path,0,-1));}

function baseInvoke(object,path,args){path=castPath(path,object);object=parent(object,path);var func=object==null?object:object[toKey(last(path))];return func==null?undefined:apply(func,object,args);}

var invoke=baseRest(baseInvoke);

var invokeMap=baseRest(function(collection,path,args){var index=-1,isFunc=typeof path=='function',result=isArrayLike(collection)?Array(collection.length):[];baseEach(collection,function(value){result[++index]=isFunc?apply(path,value,args):baseInvoke(value,path,args);});return result;});

var arrayBufferTag$4='[object ArrayBuffer]';/**
 * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
 */function baseIsArrayBuffer(value){return isObjectLike(value)&&baseGetTag(value)==arrayBufferTag$4;}

var nodeIsArrayBuffer=nodeUtil&&nodeUtil.isArrayBuffer;/**
 * Checks if `value` is classified as an `ArrayBuffer` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
 * @example
 *
 * _.isArrayBuffer(new ArrayBuffer(2));
 * // => true
 *
 * _.isArrayBuffer(new Array(2));
 * // => false
 */var isArrayBuffer=nodeIsArrayBuffer?baseUnary(nodeIsArrayBuffer):baseIsArrayBuffer;

var boolTag$4='[object Boolean]';/**
 * Checks if `value` is classified as a boolean primitive or object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
 * @example
 *
 * _.isBoolean(false);
 * // => true
 *
 * _.isBoolean(null);
 * // => false
 */function isBoolean(value){return value===true||value===false||isObjectLike(value)&&baseGetTag(value)==boolTag$4;}

var dateTag$4='[object Date]';/**
 * The base implementation of `_.isDate` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
 */function baseIsDate(value){return isObjectLike(value)&&baseGetTag(value)==dateTag$4;}

var nodeIsDate=nodeUtil&&nodeUtil.isDate;/**
 * Checks if `value` is classified as a `Date` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
 * @example
 *
 * _.isDate(new Date);
 * // => true
 *
 * _.isDate('Mon April 23 2012');
 * // => false
 */var isDate=nodeIsDate?baseUnary(nodeIsDate):baseIsDate;

function isElement(value){return isObjectLike(value)&&value.nodeType===1&&!isPlainObject(value);}

var mapTag$6='[object Map]'; var setTag$6='[object Set]';/** Used for built-in method references. */var objectProto$24=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$21=objectProto$24.hasOwnProperty;/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */function isEmpty(value){if(value==null){return true;}if(isArrayLike(value)&&(isArray(value)||typeof value=='string'||typeof value.splice=='function'||isBuffer(value)||isTypedArray(value)||isArguments(value))){return!value.length;}var tag=getTag$1(value);if(tag==mapTag$6||tag==setTag$6){return!value.size;}if(isPrototype(value)){return!baseKeys(value).length;}for(var key in value){if(hasOwnProperty$21.call(value,key)){return false;}}return true;}

function isEqual(value,other){return baseIsEqual(value,other);}

function isEqualWith(value,other,customizer){customizer=typeof customizer=='function'?customizer:undefined;var result=customizer?customizer(value,other):undefined;return result===undefined?baseIsEqual(value,other,undefined,customizer):!!result;}

var nativeIsFinite=root.isFinite;/**
 * Checks if `value` is a finite primitive number.
 *
 * **Note:** This method is based on
 * [`Number.isFinite`](https://mdn.io/Number/isFinite).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
 * @example
 *
 * _.isFinite(3);
 * // => true
 *
 * _.isFinite(Number.MIN_VALUE);
 * // => true
 *
 * _.isFinite(Infinity);
 * // => false
 *
 * _.isFinite('3');
 * // => false
 */function isFinite(value){return typeof value=='number'&&nativeIsFinite(value);}

function isInteger(value){return typeof value=='number'&&value==toInteger(value);}

var mapTag$7='[object Map]';/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */function baseIsMap(value){return isObjectLike(value)&&getTag$1(value)==mapTag$7;}

var nodeIsMap=nodeUtil&&nodeUtil.isMap;/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */var isMap=nodeIsMap?baseUnary(nodeIsMap):baseIsMap;

function isMatch(object,source){return object===source||baseIsMatch(object,source,getMatchData(source));}

function isMatchWith(object,source,customizer){customizer=typeof customizer=='function'?customizer:undefined;return baseIsMatch(object,source,getMatchData(source),customizer);}

var numberTag$4='[object Number]';/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */function isNumber(value){return typeof value=='number'||isObjectLike(value)&&baseGetTag(value)==numberTag$4;}

function isNaN(value){// An `NaN` primitive is the only value that is not equal to itself.
// Perform the `toStringTag` check first to avoid errors with some
// ActiveX objects in IE.
return isNumber(value)&&value!=+value;}

var isMaskable=coreJsData?isFunction:stubFalse;

var CORE_ERROR_TEXT='Unsupported core-js use. Try https://npms.io/search?q=ponyfill.';/**
 * Checks if `value` is a pristine native function.
 *
 * **Note:** This method can't reliably detect native functions in the presence
 * of the core-js package because core-js circumvents this kind of detection.
 * Despite multiple requests, the core-js maintainer has made it clear: any
 * attempt to fix the detection will be obstructed. As a result, we're left
 * with little choice but to throw an error. Unfortunately, this also affects
 * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
 * which rely on core-js.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 * @example
 *
 * _.isNative(Array.prototype.push);
 * // => true
 *
 * _.isNative(_);
 * // => false
 */function isNative(value){if(isMaskable(value)){throw new Error(CORE_ERROR_TEXT);}return baseIsNative(value);}

/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isNil(null);
 * // => true
 *
 * _.isNil(void 0);
 * // => true
 *
 * _.isNil(NaN);
 * // => false
 */function isNil(value){return value==null;}

/**
 * Checks if `value` is `null`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
 * @example
 *
 * _.isNull(null);
 * // => true
 *
 * _.isNull(void 0);
 * // => false
 */function isNull(value){return value===null;}

var regexpTag$4='[object RegExp]';/**
 * The base implementation of `_.isRegExp` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 */function baseIsRegExp(value){return isObjectLike(value)&&baseGetTag(value)==regexpTag$4;}

var nodeIsRegExp=nodeUtil&&nodeUtil.isRegExp;/**
 * Checks if `value` is classified as a `RegExp` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 * @example
 *
 * _.isRegExp(/abc/);
 * // => true
 *
 * _.isRegExp('/abc/');
 * // => false
 */var isRegExp=nodeIsRegExp?baseUnary(nodeIsRegExp):baseIsRegExp;

var MAX_SAFE_INTEGER$2=9007199254740991;/**
 * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
 * double precision number which isn't the result of a rounded unsafe integer.
 *
 * **Note:** This method is based on
 * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
 * @example
 *
 * _.isSafeInteger(3);
 * // => true
 *
 * _.isSafeInteger(Number.MIN_VALUE);
 * // => false
 *
 * _.isSafeInteger(Infinity);
 * // => false
 *
 * _.isSafeInteger('3');
 * // => false
 */function isSafeInteger(value){return isInteger(value)&&value>=-MAX_SAFE_INTEGER$2&&value<=MAX_SAFE_INTEGER$2;}

var setTag$7='[object Set]';/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */function baseIsSet(value){return isObjectLike(value)&&getTag$1(value)==setTag$7;}

var nodeIsSet=nodeUtil&&nodeUtil.isSet;/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */var isSet=nodeIsSet?baseUnary(nodeIsSet):baseIsSet;

/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */function isUndefined(value){return value===undefined;}

var weakMapTag$3='[object WeakMap]';/**
 * Checks if `value` is classified as a `WeakMap` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
 * @example
 *
 * _.isWeakMap(new WeakMap);
 * // => true
 *
 * _.isWeakMap(new Map);
 * // => false
 */function isWeakMap(value){return isObjectLike(value)&&getTag$1(value)==weakMapTag$3;}

var weakSetTag='[object WeakSet]';/**
 * Checks if `value` is classified as a `WeakSet` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
 * @example
 *
 * _.isWeakSet(new WeakSet);
 * // => true
 *
 * _.isWeakSet(new Set);
 * // => false
 */function isWeakSet(value){return isObjectLike(value)&&baseGetTag(value)==weakSetTag;}

var CLONE_DEEP_FLAG$6=1;/**
 * Creates a function that invokes `func` with the arguments of the created
 * function. If `func` is a property name, the created function returns the
 * property value for a given element. If `func` is an array or object, the
 * created function returns `true` for elements that contain the equivalent
 * source properties, otherwise it returns `false`.
 *
 * @static
 * @since 4.0.0
 * @memberOf _
 * @category Util
 * @param {*} [func=_.identity] The value to convert to a callback.
 * @returns {Function} Returns the callback.
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
 * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, _.iteratee(['user', 'fred']));
 * // => [{ 'user': 'fred', 'age': 40 }]
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, _.iteratee('user'));
 * // => ['barney', 'fred']
 *
 * // Create custom iteratee shorthands.
 * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
 *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
 *     return func.test(string);
 *   };
 * });
 *
 * _.filter(['abc', 'def'], /ef/);
 * // => ['def']
 */function iteratee(func){return baseIteratee(typeof func=='function'?func:baseClone(func,CLONE_DEEP_FLAG$6));}

/** Used for built-in method references. */var arrayProto$1=Array.prototype;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeJoin=arrayProto$1.join;/**
 * Converts all elements in `array` into a string separated by `separator`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to convert.
 * @param {string} [separator=','] The element separator.
 * @returns {string} Returns the joined string.
 * @example
 *
 * _.join(['a', 'b', 'c'], '~');
 * // => 'a~b~c'
 */function join(array,separator){return array==null?'':nativeJoin.call(array,separator);}

var kebabCase=createCompounder(function(result,word,index){return result+(index?'-':'')+word.toLowerCase();});

var keyBy=createAggregator(function(result,value,key){baseAssignValue(result,key,value);});

/**
 * A specialized version of `_.lastIndexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function strictLastIndexOf(array,value,fromIndex){var index=fromIndex+1;while(index--){if(array[index]===value){return index;}}return index;}

var nativeMax$11=Math.max; var nativeMin$7=Math.min;/**
 * This method is like `_.indexOf` except that it iterates over elements of
 * `array` from right to left.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=array.length-1] The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 * @example
 *
 * _.lastIndexOf([1, 2, 1, 2], 2);
 * // => 3
 *
 * // Search from the `fromIndex`.
 * _.lastIndexOf([1, 2, 1, 2], 2, 2);
 * // => 1
 */function lastIndexOf(array,value,fromIndex){var length=array==null?0:array.length;if(!length){return-1;}var index=length;if(fromIndex!==undefined){index=toInteger(fromIndex);index=index<0?nativeMax$11(length+index,0):nativeMin$7(index,length-1);}return value===value?strictLastIndexOf(array,value,index):baseFindIndex(array,baseIsNaN,index,true);}

var lowerCase=createCompounder(function(result,word,index){return result+(index?' ':'')+word.toLowerCase();});

var lowerFirst=createCaseFirst('toLowerCase');

/**
 * The base implementation of `_.lt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is less than `other`,
 *  else `false`.
 */function baseLt(value,other){return value<other;}

var lt=createRelationalOperation(baseLt);

var lte=createRelationalOperation(function(value,other){return value<=other;});

function mapKeys(object,iteratee){var result={};iteratee=baseIteratee(iteratee,3);baseForOwn(object,function(value,key,object){baseAssignValue(result,iteratee(value,key,object),value);});return result;}

function mapValues(object,iteratee){var result={};iteratee=baseIteratee(iteratee,3);baseForOwn(object,function(value,key,object){baseAssignValue(result,key,iteratee(value,key,object));});return result;}

var CLONE_DEEP_FLAG$7=1;/**
 * Creates a function that performs a partial deep comparison between a given
 * object and `source`, returning `true` if the given object has equivalent
 * property values, else `false`.
 *
 * **Note:** The created function is equivalent to `_.isMatch` with `source`
 * partially applied.
 *
 * Partial comparisons will match empty array and empty object `source`
 * values against any array or object value, respectively. See `_.isEqual`
 * for a list of supported value comparisons.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Util
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 * @example
 *
 * var objects = [
 *   { 'a': 1, 'b': 2, 'c': 3 },
 *   { 'a': 4, 'b': 5, 'c': 6 }
 * ];
 *
 * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
 * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
 */function matches(source){return baseMatches(baseClone(source,CLONE_DEEP_FLAG$7));}

var CLONE_DEEP_FLAG$8=1;/**
 * Creates a function that performs a partial deep comparison between the
 * value at `path` of a given object to `srcValue`, returning `true` if the
 * object value is equivalent, else `false`.
 *
 * **Note:** Partial comparisons will match empty array and empty object
 * `srcValue` values against any array or object value, respectively. See
 * `_.isEqual` for a list of supported value comparisons.
 *
 * @static
 * @memberOf _
 * @since 3.2.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 * @example
 *
 * var objects = [
 *   { 'a': 1, 'b': 2, 'c': 3 },
 *   { 'a': 4, 'b': 5, 'c': 6 }
 * ];
 *
 * _.find(objects, _.matchesProperty('a', 4));
 * // => { 'a': 4, 'b': 5, 'c': 6 }
 */function matchesProperty(path,srcValue){return baseMatchesProperty(path,baseClone(srcValue,CLONE_DEEP_FLAG$8));}

function baseExtremum(array,iteratee,comparator){var index=-1,length=array.length;while(++index<length){var value=array[index],current=iteratee(value);if(current!=null&&(computed===undefined?current===current&&!isSymbol(current):comparator(current,computed))){var computed=current,result=value;}}return result;}

function max(array){return array&&array.length?baseExtremum(array,identity,baseGt):undefined;}

function maxBy(array,iteratee){return array&&array.length?baseExtremum(array,baseIteratee(iteratee,2),baseGt):undefined;}

/**
 * The base implementation of `_.sum` and `_.sumBy` without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {number} Returns the sum.
 */function baseSum(array,iteratee){var result,index=-1,length=array.length;while(++index<length){var current=iteratee(array[index]);if(current!==undefined){result=result===undefined?current:result+current;}}return result;}

var NAN$2=0/0;/**
 * The base implementation of `_.mean` and `_.meanBy` without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {number} Returns the mean.
 */function baseMean(array,iteratee){var length=array==null?0:array.length;return length?baseSum(array,iteratee)/length:NAN$2;}

function mean(array){return baseMean(array,identity);}

function meanBy(array,iteratee){return baseMean(array,baseIteratee(iteratee,2));}

var merge=createAssigner(function(object,source,srcIndex){baseMerge(object,source,srcIndex);});

var method=baseRest(function(path,args){return function(object){return baseInvoke(object,path,args);};});

var methodOf=baseRest(function(object,args){return function(path){return baseInvoke(object,path,args);};});

function min(array){return array&&array.length?baseExtremum(array,identity,baseLt):undefined;}

function minBy(array,iteratee){return array&&array.length?baseExtremum(array,baseIteratee(iteratee,2),baseLt):undefined;}

function mixin(object,source,options){var props=keys(source),methodNames=baseFunctions(source,props);var chain=!(isObject(options)&&'chain'in options)||!!options.chain,isFunc=isFunction(object);arrayEach(methodNames,function(methodName){var func=source[methodName];object[methodName]=func;if(isFunc){object.prototype[methodName]=function(){var chainAll=this.__chain__;if(chain||chainAll){var result=object(this.__wrapped__),actions=result.__actions__=copyArray(this.__actions__);actions.push({'func':func,'args':arguments,'thisArg':object});result.__chain__=chainAll;return result;}return func.apply(object,arrayPush([this.value()],arguments));};}});return object;}

var multiply=createMathOperation(function(multiplier,multiplicand){return multiplier*multiplicand;},1);

/** Error message constants. */var FUNC_ERROR_TEXT$8='Expected a function';/**
 * Creates a function that negates the result of the predicate `func`. The
 * `func` predicate is invoked with the `this` binding and arguments of the
 * created function.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} predicate The predicate to negate.
 * @returns {Function} Returns the new negated function.
 * @example
 *
 * function isEven(n) {
 *   return n % 2 == 0;
 * }
 *
 * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
 * // => [1, 3, 5]
 */function negate(predicate){if(typeof predicate!='function'){throw new TypeError(FUNC_ERROR_TEXT$8);}return function(){var args=arguments;switch(args.length){case 0:return!predicate.call(this);case 1:return!predicate.call(this,args[0]);case 2:return!predicate.call(this,args[0],args[1]);case 3:return!predicate.call(this,args[0],args[1],args[2]);}return!predicate.apply(this,args);};}

/**
 * Converts `iterator` to an array.
 *
 * @private
 * @param {Object} iterator The iterator to convert.
 * @returns {Array} Returns the converted array.
 */function iteratorToArray(iterator){var data,result=[];while(!(data=iterator.next()).done){result.push(data.value);}return result;}

var mapTag$8='[object Map]'; var setTag$8='[object Set]';/** Built-in value references. */var symIterator=_Symbol?_Symbol.iterator:undefined;/**
 * Converts `value` to an array.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Array} Returns the converted array.
 * @example
 *
 * _.toArray({ 'a': 1, 'b': 2 });
 * // => [1, 2]
 *
 * _.toArray('abc');
 * // => ['a', 'b', 'c']
 *
 * _.toArray(1);
 * // => []
 *
 * _.toArray(null);
 * // => []
 */function toArray$1(value){if(!value){return[];}if(isArrayLike(value)){return isString(value)?stringToArray(value):copyArray(value);}if(symIterator&&value[symIterator]){return iteratorToArray(value[symIterator]());}var tag=getTag$1(value),func=tag==mapTag$8?mapToArray:tag==setTag$8?setToArray:values;return func(value);}

function wrapperNext(){if(this.__values__===undefined){this.__values__=toArray$1(this.value());}var done=this.__index__>=this.__values__.length,value=done?undefined:this.__values__[this.__index__++];return{'done':done,'value':value};}

function baseNth(array,n){var length=array.length;if(!length){return;}n+=n<0?length:0;return isIndex(n,length)?array[n]:undefined;}

function nth(array,n){return array&&array.length?baseNth(array,toInteger(n)):undefined;}

function nthArg(n){n=toInteger(n);return baseRest(function(args){return baseNth(args,n);});}

function baseUnset(object,path){path=castPath(path,object);object=parent(object,path);return object==null||delete object[toKey(last(path))];}

function customOmitClone(value){return isPlainObject(value)?undefined:value;}

var CLONE_DEEP_FLAG$9=1; var CLONE_FLAT_FLAG$1=2; var CLONE_SYMBOLS_FLAG$5=4;/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */var omit=flatRest(function(object,paths){var result={};if(object==null){return result;}var isDeep=false;paths=arrayMap(paths,function(path){path=castPath(path,object);isDeep||(isDeep=path.length>1);return path;});copyObject(object,getAllKeysIn(object),result);if(isDeep){result=baseClone(result,CLONE_DEEP_FLAG$9|CLONE_FLAT_FLAG$1|CLONE_SYMBOLS_FLAG$5,customOmitClone);}var length=paths.length;while(length--){baseUnset(result,paths[length]);}return result;});

function baseSet(object,path,value,customizer){if(!isObject(object)){return object;}path=castPath(path,object);var index=-1,length=path.length,lastIndex=length-1,nested=object;while(nested!=null&&++index<length){var key=toKey(path[index]),newValue=value;if(index!=lastIndex){var objValue=nested[key];newValue=customizer?customizer(objValue,key,nested):undefined;if(newValue===undefined){newValue=isObject(objValue)?objValue:isIndex(path[index+1])?[]:{};}}assignValue(nested,key,newValue);nested=nested[key];}return object;}

function basePickBy(object,paths,predicate){var index=-1,length=paths.length,result={};while(++index<length){var path=paths[index],value=baseGet(object,path);if(predicate(value,path)){baseSet(result,castPath(path,object),value);}}return result;}

function pickBy(object,predicate){if(object==null){return{};}var props=arrayMap(getAllKeysIn(object),function(prop){return[prop];});predicate=baseIteratee(predicate);return basePickBy(object,props,function(value,path){return predicate(value,path[0]);});}

function omitBy(object,predicate){return pickBy(object,negate(baseIteratee(predicate)));}

function once(func){return before(2,func);}

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */function baseSortBy(array,comparer){var length=array.length;array.sort(comparer);while(length--){array[length]=array[length].value;}return array;}

function compareAscending(value,other){if(value!==other){var valIsDefined=value!==undefined,valIsNull=value===null,valIsReflexive=value===value,valIsSymbol=isSymbol(value);var othIsDefined=other!==undefined,othIsNull=other===null,othIsReflexive=other===other,othIsSymbol=isSymbol(other);if(!othIsNull&&!othIsSymbol&&!valIsSymbol&&value>other||valIsSymbol&&othIsDefined&&othIsReflexive&&!othIsNull&&!othIsSymbol||valIsNull&&othIsDefined&&othIsReflexive||!valIsDefined&&othIsReflexive||!valIsReflexive){return 1;}if(!valIsNull&&!valIsSymbol&&!othIsSymbol&&value<other||othIsSymbol&&valIsDefined&&valIsReflexive&&!valIsNull&&!valIsSymbol||othIsNull&&valIsDefined&&valIsReflexive||!othIsDefined&&valIsReflexive||!othIsReflexive){return-1;}}return 0;}

function compareMultiple(object,other,orders){var index=-1,objCriteria=object.criteria,othCriteria=other.criteria,length=objCriteria.length,ordersLength=orders.length;while(++index<length){var result=compareAscending(objCriteria[index],othCriteria[index]);if(result){if(index>=ordersLength){return result;}var order=orders[index];return result*(order=='desc'?-1:1);}}// Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
// that causes it, under certain circumstances, to provide the same value for
// `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
// for more details.
//
// This also ensures a stable sort in V8 and other engines.
// See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
return object.index-other.index;}

function baseOrderBy(collection,iteratees,orders){var index=-1;iteratees=arrayMap(iteratees.length?iteratees:[identity],baseUnary(baseIteratee));var result=baseMap(collection,function(value,key,collection){var criteria=arrayMap(iteratees,function(iteratee){return iteratee(value);});return{'criteria':criteria,'index':++index,'value':value};});return baseSortBy(result,function(object,other){return compareMultiple(object,other,orders);});}

function orderBy(collection,iteratees,orders,guard){if(collection==null){return[];}if(!isArray(iteratees)){iteratees=iteratees==null?[]:[iteratees];}orders=guard?undefined:orders;if(!isArray(orders)){orders=orders==null?[]:[orders];}return baseOrderBy(collection,iteratees,orders);}

function createOver(arrayFunc){return flatRest(function(iteratees){iteratees=arrayMap(iteratees,baseUnary(baseIteratee));return baseRest(function(args){var thisArg=this;return arrayFunc(iteratees,function(iteratee){return apply(iteratee,thisArg,args);});});});}

var over=createOver(arrayMap);

var castRest=baseRest;

var nativeMin$8=Math.min;/**
 * Creates a function that invokes `func` with its arguments transformed.
 *
 * @static
 * @since 4.0.0
 * @memberOf _
 * @category Function
 * @param {Function} func The function to wrap.
 * @param {...(Function|Function[])} [transforms=[_.identity]]
 *  The argument transforms.
 * @returns {Function} Returns the new function.
 * @example
 *
 * function doubled(n) {
 *   return n * 2;
 * }
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var func = _.overArgs(function(x, y) {
 *   return [x, y];
 * }, [square, doubled]);
 *
 * func(9, 3);
 * // => [81, 6]
 *
 * func(10, 5);
 * // => [100, 10]
 */var overArgs=castRest(function(func,transforms){transforms=transforms.length==1&&isArray(transforms[0])?arrayMap(transforms[0],baseUnary(baseIteratee)):arrayMap(baseFlatten(transforms,1),baseUnary(baseIteratee));var funcsLength=transforms.length;return baseRest(function(args){var index=-1,length=nativeMin$8(args.length,funcsLength);while(++index<length){args[index]=transforms[index].call(this,args[index]);}return apply(func,this,args);});});

var overEvery=createOver(arrayEvery);

var overSome=createOver(arraySome);

/** Used as references for various `Number` constants. */var MAX_SAFE_INTEGER$3=9007199254740991;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeFloor$1=Math.floor;/**
 * The base implementation of `_.repeat` which doesn't coerce arguments.
 *
 * @private
 * @param {string} string The string to repeat.
 * @param {number} n The number of times to repeat the string.
 * @returns {string} Returns the repeated string.
 */function baseRepeat(string,n){var result='';if(!string||n<1||n>MAX_SAFE_INTEGER$3){return result;}// Leverage the exponentiation by squaring algorithm for a faster repeat.
// See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
do{if(n%2){result+=string;}n=nativeFloor$1(n/2);if(n){string+=string;}}while(n);return result;}

var asciiSize=baseProperty('length');

/** Used to compose unicode character classes. */var rsAstralRange$3='\\ud800-\\udfff';
var rsComboMarksRange$4='\\u0300-\\u036f';
var reComboHalfMarksRange$4='\\ufe20-\\ufe2f';
var rsComboSymbolsRange$4='\\u20d0-\\u20ff';
var rsComboRange$4=rsComboMarksRange$4+reComboHalfMarksRange$4+rsComboSymbolsRange$4;
var rsVarRange$3='\\ufe0e\\ufe0f';/** Used to compose unicode capture groups. */var rsAstral$1='['+rsAstralRange$3+']'; var rsCombo$3='['+rsComboRange$4+']'; var rsFitz$2='\\ud83c[\\udffb-\\udfff]'; var rsModifier$2='(?:'+rsCombo$3+'|'+rsFitz$2+')'; var rsNonAstral$2='[^'+rsAstralRange$3+']'; var rsRegional$2='(?:\\ud83c[\\udde6-\\uddff]){2}'; var rsSurrPair$2='[\\ud800-\\udbff][\\udc00-\\udfff]'; var rsZWJ$3='\\u200d';/** Used to compose unicode regexes. */var reOptMod$2=rsModifier$2+'?'; var rsOptVar$2='['+rsVarRange$3+']?'; var rsOptJoin$2='(?:'+rsZWJ$3+'(?:'+[rsNonAstral$2,rsRegional$2,rsSurrPair$2].join('|')+')'+rsOptVar$2+reOptMod$2+')*'; var rsSeq$2=rsOptVar$2+reOptMod$2+rsOptJoin$2; var rsSymbol$1='(?:'+[rsNonAstral$2+rsCombo$3+'?',rsCombo$3,rsRegional$2,rsSurrPair$2,rsAstral$1].join('|')+')';/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */var reUnicode$1=RegExp(rsFitz$2+'(?='+rsFitz$2+')|'+rsSymbol$1+rsSeq$2,'g');/**
 * Gets the size of a Unicode `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */function unicodeSize(string){var result=reUnicode$1.lastIndex=0;while(reUnicode$1.test(string)){++result;}return result;}

function stringSize(string){return hasUnicode(string)?unicodeSize(string):asciiSize(string);}

var nativeCeil$2=Math.ceil;/**
 * Creates the padding for `string` based on `length`. The `chars` string
 * is truncated if the number of characters exceeds `length`.
 *
 * @private
 * @param {number} length The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the padding for `string`.
 */function createPadding(length,chars){chars=chars===undefined?' ':baseToString(chars);var charsLength=chars.length;if(charsLength<2){return charsLength?baseRepeat(chars,length):chars;}var result=baseRepeat(chars,nativeCeil$2(length/stringSize(chars)));return hasUnicode(chars)?castSlice(stringToArray(result),0,length).join(''):result.slice(0,length);}

var nativeCeil$1=Math.ceil; var nativeFloor=Math.floor;/**
 * Pads `string` on the left and right sides if it's shorter than `length`.
 * Padding characters are truncated if they can't be evenly divided by `length`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to pad.
 * @param {number} [length=0] The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the padded string.
 * @example
 *
 * _.pad('abc', 8);
 * // => '  abc   '
 *
 * _.pad('abc', 8, '_-');
 * // => '_-abc_-_'
 *
 * _.pad('abc', 3);
 * // => 'abc'
 */function pad(string,length,chars){string=toString(string);length=toInteger(length);var strLength=length?stringSize(string):0;if(!length||strLength>=length){return string;}var mid=(length-strLength)/2;return createPadding(nativeFloor(mid),chars)+string+createPadding(nativeCeil$1(mid),chars);}

function padEnd(string,length,chars){string=toString(string);length=toInteger(length);var strLength=length?stringSize(string):0;return length&&strLength<length?string+createPadding(length-strLength,chars):string;}

function padStart(string,length,chars){string=toString(string);length=toInteger(length);var strLength=length?stringSize(string):0;return length&&strLength<length?createPadding(length-strLength,chars)+string:string;}

var reTrimStart=/^\s+/;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeParseInt=root.parseInt;/**
 * Converts `string` to an integer of the specified radix. If `radix` is
 * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
 * hexadecimal, in which case a `radix` of `16` is used.
 *
 * **Note:** This method aligns with the
 * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category String
 * @param {string} string The string to convert.
 * @param {number} [radix=10] The radix to interpret `value` by.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.parseInt('08');
 * // => 8
 *
 * _.map(['6', '08', '10'], _.parseInt);
 * // => [6, 8, 10]
 */function parseInt$1(string,radix,guard){if(guard||radix==null){radix=0;}else if(radix){radix=+radix;}return nativeParseInt(toString(string).replace(reTrimStart,''),radix||0);}

var WRAP_PARTIAL_FLAG$6=32;/**
 * Creates a function that invokes `func` with `partials` prepended to the
 * arguments it receives. This method is like `_.bind` except it does **not**
 * alter the `this` binding.
 *
 * The `_.partial.placeholder` value, which defaults to `_` in monolithic
 * builds, may be used as a placeholder for partially applied arguments.
 *
 * **Note:** This method doesn't set the "length" property of partially
 * applied functions.
 *
 * @static
 * @memberOf _
 * @since 0.2.0
 * @category Function
 * @param {Function} func The function to partially apply arguments to.
 * @param {...*} [partials] The arguments to be partially applied.
 * @returns {Function} Returns the new partially applied function.
 * @example
 *
 * function greet(greeting, name) {
 *   return greeting + ' ' + name;
 * }
 *
 * var sayHelloTo = _.partial(greet, 'hello');
 * sayHelloTo('fred');
 * // => 'hello fred'
 *
 * // Partially applied with placeholders.
 * var greetFred = _.partial(greet, _, 'fred');
 * greetFred('hi');
 * // => 'hi fred'
 */var partial=baseRest(function(func,partials){var holders=replaceHolders(partials,getHolder(partial));return createWrap(func,WRAP_PARTIAL_FLAG$6,undefined,partials,holders);});// Assign default placeholders.
partial.placeholder={};

var WRAP_PARTIAL_RIGHT_FLAG$3=64;/**
 * This method is like `_.partial` except that partially applied arguments
 * are appended to the arguments it receives.
 *
 * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
 * builds, may be used as a placeholder for partially applied arguments.
 *
 * **Note:** This method doesn't set the "length" property of partially
 * applied functions.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Function
 * @param {Function} func The function to partially apply arguments to.
 * @param {...*} [partials] The arguments to be partially applied.
 * @returns {Function} Returns the new partially applied function.
 * @example
 *
 * function greet(greeting, name) {
 *   return greeting + ' ' + name;
 * }
 *
 * var greetFred = _.partialRight(greet, 'fred');
 * greetFred('hi');
 * // => 'hi fred'
 *
 * // Partially applied with placeholders.
 * var sayHelloTo = _.partialRight(greet, 'hello', _);
 * sayHelloTo('fred');
 * // => 'hello fred'
 */var partialRight=baseRest(function(func,partials){var holders=replaceHolders(partials,getHolder(partialRight));return createWrap(func,WRAP_PARTIAL_RIGHT_FLAG$3,undefined,partials,holders);});// Assign default placeholders.
partialRight.placeholder={};

var partition=createAggregator(function(result,value,key){result[key?0:1].push(value);},function(){return[[],[]];});

function basePick(object,paths){return basePickBy(object,paths,function(value,path){return hasIn(object,path);});}

var pick=flatRest(function(object,paths){return object==null?{}:basePick(object,paths);});

function wrapperPlant(value){var result,parent=this;while(parent instanceof baseLodash){var clone=wrapperClone(parent);clone.__index__=0;clone.__values__=undefined;if(result){previous.__wrapped__=clone;}else{result=clone;}var previous=clone;parent=parent.__wrapped__;}previous.__wrapped__=value;return result;}

function propertyOf(object){return function(path){return object==null?undefined:baseGet(object,path);};}

/**
 * This function is like `baseIndexOf` except that it accepts a comparator.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function baseIndexOfWith(array,value,fromIndex,comparator){var index=fromIndex-1,length=array.length;while(++index<length){if(comparator(array[index],value)){return index;}}return-1;}

var arrayProto$2=Array.prototype;/** Built-in value references. */var splice$1=arrayProto$2.splice;/**
 * The base implementation of `_.pullAllBy` without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to remove.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns `array`.
 */function basePullAll(array,values,iteratee,comparator){var indexOf=comparator?baseIndexOfWith:baseIndexOf,index=-1,length=values.length,seen=array;if(array===values){values=copyArray(values);}if(iteratee){seen=arrayMap(array,baseUnary(iteratee));}while(++index<length){var fromIndex=0,value=values[index],computed=iteratee?iteratee(value):value;while((fromIndex=indexOf(seen,computed,fromIndex,comparator))>-1){if(seen!==array){splice$1.call(seen,fromIndex,1);}splice$1.call(array,fromIndex,1);}}return array;}

function pullAll(array,values){return array&&array.length&&values&&values.length?basePullAll(array,values):array;}

var pull=baseRest(pullAll);

function pullAllBy(array,values,iteratee){return array&&array.length&&values&&values.length?basePullAll(array,values,baseIteratee(iteratee,2)):array;}

function pullAllWith(array,values,comparator){return array&&array.length&&values&&values.length?basePullAll(array,values,undefined,comparator):array;}

var arrayProto$3=Array.prototype;/** Built-in value references. */var splice$2=arrayProto$3.splice;/**
 * The base implementation of `_.pullAt` without support for individual
 * indexes or capturing the removed elements.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {number[]} indexes The indexes of elements to remove.
 * @returns {Array} Returns `array`.
 */function basePullAt(array,indexes){var length=array?indexes.length:0,lastIndex=length-1;while(length--){var index=indexes[length];if(length==lastIndex||index!==previous){var previous=index;if(isIndex(index)){splice$2.call(array,index,1);}else{baseUnset(array,index);}}}return array;}

var pullAt=flatRest(function(array,indexes){var length=array==null?0:array.length,result=baseAt(array,indexes);basePullAt(array,arrayMap(indexes,function(index){return isIndex(index,length)?+index:index;}).sort(compareAscending));return result;});

/* Built-in method references for those with the same name as other `lodash` methods. */var nativeFloor$2=Math.floor;
var nativeRandom$1=Math.random;/**
 * The base implementation of `_.random` without support for returning
 * floating-point numbers.
 *
 * @private
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the random number.
 */function baseRandom(lower,upper){return lower+nativeFloor$2(nativeRandom$1()*(upper-lower+1));}

var freeParseFloat=parseFloat;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeMin$9=Math.min; var nativeRandom=Math.random;/**
 * Produces a random number between the inclusive `lower` and `upper` bounds.
 * If only one argument is provided a number between `0` and the given number
 * is returned. If `floating` is `true`, or either `lower` or `upper` are
 * floats, a floating-point number is returned instead of an integer.
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 *
 * @static
 * @memberOf _
 * @since 0.7.0
 * @category Number
 * @param {number} [lower=0] The lower bound.
 * @param {number} [upper=1] The upper bound.
 * @param {boolean} [floating] Specify returning a floating-point number.
 * @returns {number} Returns the random number.
 * @example
 *
 * _.random(0, 5);
 * // => an integer between 0 and 5
 *
 * _.random(5);
 * // => also an integer between 0 and 5
 *
 * _.random(5, true);
 * // => a floating-point number between 0 and 5
 *
 * _.random(1.2, 5.2);
 * // => a floating-point number between 1.2 and 5.2
 */function random(lower,upper,floating){if(floating&&typeof floating!='boolean'&&isIterateeCall(lower,upper,floating)){upper=floating=undefined;}if(floating===undefined){if(typeof upper=='boolean'){floating=upper;upper=undefined;}else if(typeof lower=='boolean'){floating=lower;lower=undefined;}}if(lower===undefined&&upper===undefined){lower=0;upper=1;}else{lower=toFinite(lower);if(upper===undefined){upper=lower;lower=0;}else{upper=toFinite(upper);}}if(lower>upper){var temp=lower;lower=upper;upper=temp;}if(floating||lower%1||upper%1){var rand=nativeRandom();return nativeMin$9(lower+rand*(upper-lower+freeParseFloat('1e-'+((rand+'').length-1))),upper);}return baseRandom(lower,upper);}

/* Built-in method references for those with the same name as other `lodash` methods. */var nativeCeil$3=Math.ceil;
var nativeMax$12=Math.max;/**
 * The base implementation of `_.range` and `_.rangeRight` which doesn't
 * coerce arguments.
 *
 * @private
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the range of numbers.
 */function baseRange(start,end,step,fromRight){var index=-1,length=nativeMax$12(nativeCeil$3((end-start)/(step||1)),0),result=Array(length);while(length--){result[fromRight?length:++index]=start;start+=step;}return result;}

function createRange(fromRight){return function(start,end,step){if(step&&typeof step!='number'&&isIterateeCall(start,end,step)){end=step=undefined;}// Ensure the sign of `-0` is preserved.
start=toFinite(start);if(end===undefined){end=start;start=0;}else{end=toFinite(end);}step=step===undefined?start<end?1:-1:toFinite(step);return baseRange(start,end,step,fromRight);};}

var range=createRange();

var rangeRight=createRange(true);

var WRAP_REARG_FLAG$3=256;/**
 * Creates a function that invokes `func` with arguments arranged according
 * to the specified `indexes` where the argument value at the first index is
 * provided as the first argument, the argument value at the second index is
 * provided as the second argument, and so on.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} func The function to rearrange arguments for.
 * @param {...(number|number[])} indexes The arranged argument indexes.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var rearged = _.rearg(function(a, b, c) {
 *   return [a, b, c];
 * }, [2, 0, 1]);
 *
 * rearged('b', 'c', 'a')
 * // => ['a', 'b', 'c']
 */var rearg=flatRest(function(func,indexes){return createWrap(func,WRAP_REARG_FLAG$3,undefined,undefined,undefined,indexes);});

/**
 * The base implementation of `_.reduce` and `_.reduceRight`, without support
 * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} accumulator The initial value.
 * @param {boolean} initAccum Specify using the first or last element of
 *  `collection` as the initial value.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @returns {*} Returns the accumulated value.
 */function baseReduce(collection,iteratee,accumulator,initAccum,eachFunc){eachFunc(collection,function(value,index,collection){accumulator=initAccum?(initAccum=false,value):iteratee(accumulator,value,index,collection);});return accumulator;}

function reduce(collection,iteratee,accumulator){var func=isArray(collection)?arrayReduce:baseReduce,initAccum=arguments.length<3;return func(collection,baseIteratee(iteratee,4),accumulator,initAccum,baseEach);}

/**
 * A specialized version of `_.reduceRight` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the last element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */function arrayReduceRight(array,iteratee,accumulator,initAccum){var length=array==null?0:array.length;if(initAccum&&length){accumulator=array[--length];}while(length--){accumulator=iteratee(accumulator,array[length],length,array);}return accumulator;}

function reduceRight(collection,iteratee,accumulator){var func=isArray(collection)?arrayReduceRight:baseReduce,initAccum=arguments.length<3;return func(collection,baseIteratee(iteratee,4),accumulator,initAccum,baseEachRight);}

function reject(collection,predicate){var func=isArray(collection)?arrayFilter:baseFilter;return func(collection,negate(baseIteratee(predicate,3)));}

function remove(array,predicate){var result=[];if(!(array&&array.length)){return result;}var index=-1,indexes=[],length=array.length;predicate=baseIteratee(predicate,3);while(++index<length){var value=array[index];if(predicate(value,index,array)){result.push(value);indexes.push(index);}}basePullAt(array,indexes);return result;}

function repeat(string,n,guard){if(guard?isIterateeCall(string,n,guard):n===undefined){n=1;}else{n=toInteger(n);}return baseRepeat(toString(string),n);}

function replace(){var args=arguments,string=toString(args[0]);return args.length<3?string:string.replace(args[1],args[2]);}

var FUNC_ERROR_TEXT$9='Expected a function';/**
 * Creates a function that invokes `func` with the `this` binding of the
 * created function and arguments from `start` and beyond provided as
 * an array.
 *
 * **Note:** This method is based on the
 * [rest parameter](https://mdn.io/rest_parameters).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Function
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var say = _.rest(function(what, names) {
 *   return what + ' ' + _.initial(names).join(', ') +
 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
 * });
 *
 * say('hello', 'fred', 'barney', 'pebbles');
 * // => 'hello fred, barney, & pebbles'
 */function rest(func,start){if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT$9);}start=start===undefined?start:toInteger(start);return baseRest(func,start);}

function result(object,path,defaultValue){path=castPath(path,object);var index=-1,length=path.length;// Ensure the loop is entered when path is empty.
if(!length){length=1;object=undefined;}while(++index<length){var value=object==null?undefined:object[toKey(path[index])];if(value===undefined){index=length;value=defaultValue;}object=isFunction(value)?value.call(object):value;}return object;}

/** Used for built-in method references. */var arrayProto$4=Array.prototype;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeReverse=arrayProto$4.reverse;/**
 * Reverses `array` so that the first element becomes the last, the second
 * element becomes the second to last, and so on.
 *
 * **Note:** This method mutates `array` and is based on
 * [`Array#reverse`](https://mdn.io/Array/reverse).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @returns {Array} Returns `array`.
 * @example
 *
 * var array = [1, 2, 3];
 *
 * _.reverse(array);
 * // => [3, 2, 1]
 *
 * console.log(array);
 * // => [3, 2, 1]
 */function reverse(array){return array==null?array:nativeReverse.call(array);}

var round=createRound('round');

function arraySample(array){var length=array.length;return length?array[baseRandom(0,length-1)]:undefined;}

function baseSample(collection){return arraySample(values(collection));}

function sample(collection){var func=isArray(collection)?arraySample:baseSample;return func(collection);}

function shuffleSelf(array,size){var index=-1,length=array.length,lastIndex=length-1;size=size===undefined?length:size;while(++index<size){var rand=baseRandom(index,lastIndex),value=array[rand];array[rand]=array[index];array[index]=value;}array.length=size;return array;}

function arraySampleSize(array,n){return shuffleSelf(copyArray(array),baseClamp(n,0,array.length));}

function baseSampleSize(collection,n){var array=values(collection);return shuffleSelf(array,baseClamp(n,0,array.length));}

function sampleSize(collection,n,guard){if(guard?isIterateeCall(collection,n,guard):n===undefined){n=1;}else{n=toInteger(n);}var func=isArray(collection)?arraySampleSize:baseSampleSize;return func(collection,n);}

function set$1(object,path,value){return object==null?object:baseSet(object,path,value);}

function setWith(object,path,value,customizer){customizer=typeof customizer=='function'?customizer:undefined;return object==null?object:baseSet(object,path,value,customizer);}

function arrayShuffle(array){return shuffleSelf(copyArray(array));}

function baseShuffle(collection){return shuffleSelf(values(collection));}

function shuffle(collection){var func=isArray(collection)?arrayShuffle:baseShuffle;return func(collection);}

var mapTag$9='[object Map]'; var setTag$9='[object Set]';/**
 * Gets the size of `collection` by returning its length for array-like
 * values or the number of own enumerable string keyed properties for objects.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @returns {number} Returns the collection size.
 * @example
 *
 * _.size([1, 2, 3]);
 * // => 3
 *
 * _.size({ 'a': 1, 'b': 2 });
 * // => 2
 *
 * _.size('pebbles');
 * // => 7
 */function size(collection){if(collection==null){return 0;}if(isArrayLike(collection)){return isString(collection)?stringSize(collection):collection.length;}var tag=getTag$1(collection);if(tag==mapTag$9||tag==setTag$9){return collection.size;}return baseKeys(collection).length;}

function slice(array,start,end){var length=array==null?0:array.length;if(!length){return[];}if(end&&typeof end!='number'&&isIterateeCall(array,start,end)){start=0;end=length;}else{start=start==null?0:toInteger(start);end=end===undefined?length:toInteger(end);}return baseSlice(array,start,end);}

var snakeCase=createCompounder(function(result,word,index){return result+(index?'_':'')+word.toLowerCase();});

function baseSome(collection,predicate){var result;baseEach(collection,function(value,index,collection){result=predicate(value,index,collection);return!result;});return!!result;}

function some(collection,predicate,guard){var func=isArray(collection)?arraySome:baseSome;if(guard&&isIterateeCall(collection,predicate,guard)){predicate=undefined;}return func(collection,baseIteratee(predicate,3));}

var sortBy=baseRest(function(collection,iteratees){if(collection==null){return[];}var length=iteratees.length;if(length>1&&isIterateeCall(collection,iteratees[0],iteratees[1])){iteratees=[];}else if(length>2&&isIterateeCall(iteratees[0],iteratees[1],iteratees[2])){iteratees=[iteratees[0]];}return baseOrderBy(collection,baseFlatten(iteratees,1),[]);});

var MAX_ARRAY_LENGTH$3=4294967295; var MAX_ARRAY_INDEX=MAX_ARRAY_LENGTH$3-1;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeFloor$3=Math.floor; var nativeMin$10=Math.min;/**
 * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
 * which invokes `iteratee` for `value` and each element of `array` to compute
 * their sort ranking. The iteratee is invoked with one argument; (value).
 *
 * @private
 * @param {Array} array The sorted array to inspect.
 * @param {*} value The value to evaluate.
 * @param {Function} iteratee The iteratee invoked per element.
 * @param {boolean} [retHighest] Specify returning the highest qualified index.
 * @returns {number} Returns the index at which `value` should be inserted
 *  into `array`.
 */function baseSortedIndexBy(array,value,iteratee,retHighest){value=iteratee(value);var low=0,high=array==null?0:array.length,valIsNaN=value!==value,valIsNull=value===null,valIsSymbol=isSymbol(value),valIsUndefined=value===undefined;while(low<high){var mid=nativeFloor$3((low+high)/2),computed=iteratee(array[mid]),othIsDefined=computed!==undefined,othIsNull=computed===null,othIsReflexive=computed===computed,othIsSymbol=isSymbol(computed);if(valIsNaN){var setLow=retHighest||othIsReflexive;}else if(valIsUndefined){setLow=othIsReflexive&&(retHighest||othIsDefined);}else if(valIsNull){setLow=othIsReflexive&&othIsDefined&&(retHighest||!othIsNull);}else if(valIsSymbol){setLow=othIsReflexive&&othIsDefined&&!othIsNull&&(retHighest||!othIsSymbol);}else if(othIsNull||othIsSymbol){setLow=false;}else{setLow=retHighest?computed<=value:computed<value;}if(setLow){low=mid+1;}else{high=mid;}}return nativeMin$10(high,MAX_ARRAY_INDEX);}

var MAX_ARRAY_LENGTH$2=4294967295; var HALF_MAX_ARRAY_LENGTH=MAX_ARRAY_LENGTH$2>>>1;/**
 * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
 * performs a binary search of `array` to determine the index at which `value`
 * should be inserted into `array` in order to maintain its sort order.
 *
 * @private
 * @param {Array} array The sorted array to inspect.
 * @param {*} value The value to evaluate.
 * @param {boolean} [retHighest] Specify returning the highest qualified index.
 * @returns {number} Returns the index at which `value` should be inserted
 *  into `array`.
 */function baseSortedIndex(array,value,retHighest){var low=0,high=array==null?low:array.length;if(typeof value=='number'&&value===value&&high<=HALF_MAX_ARRAY_LENGTH){while(low<high){var mid=low+high>>>1,computed=array[mid];if(computed!==null&&!isSymbol(computed)&&(retHighest?computed<=value:computed<value)){low=mid+1;}else{high=mid;}}return high;}return baseSortedIndexBy(array,value,identity,retHighest);}

function sortedIndex(array,value){return baseSortedIndex(array,value);}

function sortedIndexBy(array,value,iteratee){return baseSortedIndexBy(array,value,baseIteratee(iteratee,2));}

function sortedIndexOf(array,value){var length=array==null?0:array.length;if(length){var index=baseSortedIndex(array,value);if(index<length&&eq(array[index],value)){return index;}}return-1;}

function sortedLastIndex(array,value){return baseSortedIndex(array,value,true);}

function sortedLastIndexBy(array,value,iteratee){return baseSortedIndexBy(array,value,baseIteratee(iteratee,2),true);}

function sortedLastIndexOf(array,value){var length=array==null?0:array.length;if(length){var index=baseSortedIndex(array,value,true)-1;if(eq(array[index],value)){return index;}}return-1;}

function baseSortedUniq(array,iteratee){var index=-1,length=array.length,resIndex=0,result=[];while(++index<length){var value=array[index],computed=iteratee?iteratee(value):value;if(!index||!eq(computed,seen)){var seen=computed;result[resIndex++]=value===0?0:value;}}return result;}

function sortedUniq(array){return array&&array.length?baseSortedUniq(array):[];}

function sortedUniqBy(array,iteratee){return array&&array.length?baseSortedUniq(array,baseIteratee(iteratee,2)):[];}

var MAX_ARRAY_LENGTH$4=4294967295;/**
 * Splits `string` by `separator`.
 *
 * **Note:** This method is based on
 * [`String#split`](https://mdn.io/String/split).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to split.
 * @param {RegExp|string} separator The separator pattern to split by.
 * @param {number} [limit] The length to truncate results to.
 * @returns {Array} Returns the string segments.
 * @example
 *
 * _.split('a-b-c', '-', 2);
 * // => ['a', 'b']
 */function split(string,separator,limit){if(limit&&typeof limit!='number'&&isIterateeCall(string,separator,limit)){separator=limit=undefined;}limit=limit===undefined?MAX_ARRAY_LENGTH$4:limit>>>0;if(!limit){return[];}string=toString(string);if(string&&(typeof separator=='string'||separator!=null&&!isRegExp(separator))){separator=baseToString(separator);if(!separator&&hasUnicode(string)){return castSlice(stringToArray(string),0,limit);}}return string.split(separator,limit);}

var FUNC_ERROR_TEXT$10='Expected a function';/* Built-in method references for those with the same name as other `lodash` methods. */var nativeMax$13=Math.max;/**
 * Creates a function that invokes `func` with the `this` binding of the
 * create function and an array of arguments much like
 * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
 *
 * **Note:** This method is based on the
 * [spread operator](https://mdn.io/spread_operator).
 *
 * @static
 * @memberOf _
 * @since 3.2.0
 * @category Function
 * @param {Function} func The function to spread arguments over.
 * @param {number} [start=0] The start position of the spread.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var say = _.spread(function(who, what) {
 *   return who + ' says ' + what;
 * });
 *
 * say(['fred', 'hello']);
 * // => 'fred says hello'
 *
 * var numbers = Promise.all([
 *   Promise.resolve(40),
 *   Promise.resolve(36)
 * ]);
 *
 * numbers.then(_.spread(function(x, y) {
 *   return x + y;
 * }));
 * // => a Promise of 76
 */function spread(func,start){if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT$10);}start=start==null?0:nativeMax$13(toInteger(start),0);return baseRest(function(args){var array=args[start],otherArgs=castSlice(args,0,start);if(array){arrayPush(otherArgs,array);}return apply(func,this,otherArgs);});}

var startCase=createCompounder(function(result,word,index){return result+(index?' ':'')+upperFirst(word);});

function startsWith(string,target,position){string=toString(string);position=position==null?0:baseClamp(toInteger(position),0,string.length);target=baseToString(target);return string.slice(position,position+target.length)==target;}

/**
 * This method returns a new empty object.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Object} Returns the new empty object.
 * @example
 *
 * var objects = _.times(2, _.stubObject);
 *
 * console.log(objects);
 * // => [{}, {}]
 *
 * console.log(objects[0] === objects[1]);
 * // => false
 */function stubObject(){return{};}

/**
 * This method returns an empty string.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {string} Returns the empty string.
 * @example
 *
 * _.times(2, _.stubString);
 * // => ['', '']
 */function stubString(){return'';}

/**
 * This method returns `true`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `true`.
 * @example
 *
 * _.times(2, _.stubTrue);
 * // => [true, true]
 */function stubTrue(){return true;}

var subtract=createMathOperation(function(minuend,subtrahend){return minuend-subtrahend;},0);

function sum(array){return array&&array.length?baseSum(array,identity):0;}

function sumBy(array,iteratee){return array&&array.length?baseSum(array,baseIteratee(iteratee,2)):0;}

function tail(array){var length=array==null?0:array.length;return length?baseSlice(array,1,length):[];}

function take(array,n,guard){if(!(array&&array.length)){return[];}n=guard||n===undefined?1:toInteger(n);return baseSlice(array,0,n<0?0:n);}

function takeRight(array,n,guard){var length=array==null?0:array.length;if(!length){return[];}n=guard||n===undefined?1:toInteger(n);n=length-n;return baseSlice(array,n<0?0:n,length);}

function takeRightWhile(array,predicate){return array&&array.length?baseWhile(array,baseIteratee(predicate,3),false,true):[];}

function takeWhile(array,predicate){return array&&array.length?baseWhile(array,baseIteratee(predicate,3)):[];}

/**
 * This method invokes `interceptor` and returns `value`. The interceptor
 * is invoked with one argument; (value). The purpose of this method is to
 * "tap into" a method chain sequence in order to modify intermediate results.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Seq
 * @param {*} value The value to provide to `interceptor`.
 * @param {Function} interceptor The function to invoke.
 * @returns {*} Returns `value`.
 * @example
 *
 * _([1, 2, 3])
 *  .tap(function(array) {
 *    // Mutate input array.
 *    array.pop();
 *  })
 *  .reverse()
 *  .value();
 * // => [2, 1]
 */function tap(value,interceptor){interceptor(value);return value;}

/** Used to escape characters for inclusion in compiled string literals. */var stringEscapes={'\\':'\\',"'":"'",'\n':'n','\r':'r','\u2028':'u2028','\u2029':'u2029'};/**
 * Used by `_.template` to escape characters for inclusion in compiled string literals.
 *
 * @private
 * @param {string} chr The matched character to escape.
 * @returns {string} Returns the escaped character.
 */function escapeStringChar(chr){return'\\'+stringEscapes[chr];}

/** Used to match template delimiters. */var reInterpolate=/<%=([\s\S]+?)%>/g;

/** Used to match template delimiters. */var reEscape=/<%-([\s\S]+?)%>/g;

/** Used to match template delimiters. */var reEvaluate=/<%([\s\S]+?)%>/g;

var templateSettings={/**
   * Used to detect `data` property values to be HTML-escaped.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */'escape':reEscape,/**
   * Used to detect code to be evaluated.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */'evaluate':reEvaluate,/**
   * Used to detect `data` property values to inject.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */'interpolate':reInterpolate,/**
   * Used to reference the data object in the template text.
   *
   * @memberOf _.templateSettings
   * @type {string}
   */'variable':'',/**
   * Used to import variables into the compiled template.
   *
   * @memberOf _.templateSettings
   * @type {Object}
   */'imports':{/**
     * A reference to the `lodash` function.
     *
     * @memberOf _.templateSettings.imports
     * @type {Function}
     */'_':{'escape':escape}}};

var reEmptyStringLeading=/\b__p \+= '';/g; var reEmptyStringMiddle=/\b(__p \+=) '' \+/g; var reEmptyStringTrailing=/(__e\(.*?\)|\b__t\)) \+\n'';/g;/**
 * Used to match
 * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
 */var reEsTemplate=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;/** Used to ensure capturing order of template delimiters. */var reNoMatch=/($^)/;/** Used to match unescaped characters in compiled string literals. */var reUnescapedString=/['\n\r\u2028\u2029\\]/g;/**
 * Creates a compiled template function that can interpolate data properties
 * in "interpolate" delimiters, HTML-escape interpolated data properties in
 * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
 * properties may be accessed as free variables in the template. If a setting
 * object is given, it takes precedence over `_.templateSettings` values.
 *
 * **Note:** In the development build `_.template` utilizes
 * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
 * for easier debugging.
 *
 * For more information on precompiling templates see
 * [lodash's custom builds documentation](https://lodash.com/custom-builds).
 *
 * For more information on Chrome extension sandboxes see
 * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category String
 * @param {string} [string=''] The template string.
 * @param {Object} [options={}] The options object.
 * @param {RegExp} [options.escape=_.templateSettings.escape]
 *  The HTML "escape" delimiter.
 * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
 *  The "evaluate" delimiter.
 * @param {Object} [options.imports=_.templateSettings.imports]
 *  An object to import into the template as free variables.
 * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
 *  The "interpolate" delimiter.
 * @param {string} [options.sourceURL='templateSources[n]']
 *  The sourceURL of the compiled template.
 * @param {string} [options.variable='obj']
 *  The data object variable name.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Function} Returns the compiled template function.
 * @example
 *
 * // Use the "interpolate" delimiter to create a compiled template.
 * var compiled = _.template('hello <%= user %>!');
 * compiled({ 'user': 'fred' });
 * // => 'hello fred!'
 *
 * // Use the HTML "escape" delimiter to escape data property values.
 * var compiled = _.template('<b><%- value %></b>');
 * compiled({ 'value': '<script>' });
 * // => '<b>&lt;script&gt;</b>'
 *
 * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
 * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
 * compiled({ 'users': ['fred', 'barney'] });
 * // => '<li>fred</li><li>barney</li>'
 *
 * // Use the internal `print` function in "evaluate" delimiters.
 * var compiled = _.template('<% print("hello " + user); %>!');
 * compiled({ 'user': 'barney' });
 * // => 'hello barney!'
 *
 * // Use the ES template literal delimiter as an "interpolate" delimiter.
 * // Disable support by replacing the "interpolate" delimiter.
 * var compiled = _.template('hello ${ user }!');
 * compiled({ 'user': 'pebbles' });
 * // => 'hello pebbles!'
 *
 * // Use backslashes to treat delimiters as plain text.
 * var compiled = _.template('<%= "\\<%- value %\\>" %>');
 * compiled({ 'value': 'ignored' });
 * // => '<%- value %>'
 *
 * // Use the `imports` option to import `jQuery` as `jq`.
 * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
 * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
 * compiled({ 'users': ['fred', 'barney'] });
 * // => '<li>fred</li><li>barney</li>'
 *
 * // Use the `sourceURL` option to specify a custom sourceURL for the template.
 * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
 * compiled(data);
 * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
 *
 * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
 * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
 * compiled.source;
 * // => function(data) {
 * //   var __t, __p = '';
 * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
 * //   return __p;
 * // }
 *
 * // Use custom template delimiters.
 * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
 * var compiled = _.template('hello {{ user }}!');
 * compiled({ 'user': 'mustache' });
 * // => 'hello mustache!'
 *
 * // Use the `source` property to inline compiled templates for meaningful
 * // line numbers in error messages and stack traces.
 * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
 *   var JST = {\
 *     "main": ' + _.template(mainText).source + '\
 *   };\
 * ');
 */function template(string,options,guard){// Based on John Resig's `tmpl` implementation
// (http://ejohn.org/blog/javascript-micro-templating/)
// and Laura Doktorova's doT.js (https://github.com/olado/doT).
var settings=templateSettings.imports._.templateSettings||templateSettings;if(guard&&isIterateeCall(string,options,guard)){options=undefined;}string=toString(string);options=assignInWith({},options,settings,customDefaultsAssignIn);var imports=assignInWith({},options.imports,settings.imports,customDefaultsAssignIn),importsKeys=keys(imports),importsValues=baseValues(imports,importsKeys);var isEscaping,isEvaluating,index=0,interpolate=options.interpolate||reNoMatch,source="__p += '";// Compile the regexp to match each delimiter.
var reDelimiters=RegExp((options.escape||reNoMatch).source+'|'+interpolate.source+'|'+(interpolate===reInterpolate?reEsTemplate:reNoMatch).source+'|'+(options.evaluate||reNoMatch).source+'|$','g');// Use a sourceURL for easier debugging.
var sourceURL='sourceURL'in options?'//# sourceURL='+options.sourceURL+'\n':'';string.replace(reDelimiters,function(match,escapeValue,interpolateValue,esTemplateValue,evaluateValue,offset){interpolateValue||(interpolateValue=esTemplateValue);// Escape characters that can't be included in string literals.
source+=string.slice(index,offset).replace(reUnescapedString,escapeStringChar);// Replace delimiters with snippets.
if(escapeValue){isEscaping=true;source+="' +\n__e("+escapeValue+") +\n'";}if(evaluateValue){isEvaluating=true;source+="';\n"+evaluateValue+";\n__p += '";}if(interpolateValue){source+="' +\n((__t = ("+interpolateValue+")) == null ? '' : __t) +\n'";}index=offset+match.length;// The JS engine embedded in Adobe products needs `match` returned in
// order to produce the correct `offset` value.
return match;});source+="';\n";// If `variable` is not specified wrap a with-statement around the generated
// code to add the data object to the top of the scope chain.
var variable=options.variable;if(!variable){source='with (obj) {\n'+source+'\n}\n';}// Cleanup code by stripping empty strings.
source=(isEvaluating?source.replace(reEmptyStringLeading,''):source).replace(reEmptyStringMiddle,'$1').replace(reEmptyStringTrailing,'$1;');// Frame code as the function body.
source='function('+(variable||'obj')+') {\n'+(variable?'':'obj || (obj = {});\n')+"var __t, __p = ''"+(isEscaping?', __e = _.escape':'')+(isEvaluating?', __j = Array.prototype.join;\n'+"function print() { __p += __j.call(arguments, '') }\n":';\n')+source+'return __p\n}';var result=attempt(function(){return Function(importsKeys,sourceURL+'return '+source).apply(undefined,importsValues);});// Provide the compiled function's source by its `toString` method or
// the `source` property as a convenience for inlining compiled templates.
result.source=source;if(isError(result)){throw result;}return result;}

var FUNC_ERROR_TEXT$11='Expected a function';/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */function throttle(func,wait,options){var leading=true,trailing=true;if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT$11);}if(isObject(options)){leading='leading'in options?!!options.leading:leading;trailing='trailing'in options?!!options.trailing:trailing;}return debounce(func,wait,{'leading':leading,'maxWait':wait,'trailing':trailing});}

/**
 * This method is like `_.tap` except that it returns the result of `interceptor`.
 * The purpose of this method is to "pass thru" values replacing intermediate
 * results in a method chain sequence.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Seq
 * @param {*} value The value to provide to `interceptor`.
 * @param {Function} interceptor The function to invoke.
 * @returns {*} Returns the result of `interceptor`.
 * @example
 *
 * _('  abc  ')
 *  .chain()
 *  .trim()
 *  .thru(function(value) {
 *    return [value];
 *  })
 *  .value();
 * // => ['abc']
 */function thru(value,interceptor){return interceptor(value);}

var MAX_SAFE_INTEGER$4=9007199254740991;/** Used as references for the maximum length and index of an array. */var MAX_ARRAY_LENGTH$5=4294967295;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeMin$11=Math.min;/**
 * Invokes the iteratee `n` times, returning an array of the results of
 * each invocation. The iteratee is invoked with one argument; (index).
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 * @example
 *
 * _.times(3, String);
 * // => ['0', '1', '2']
 *
 *  _.times(4, _.constant(0));
 * // => [0, 0, 0, 0]
 */function times(n,iteratee){n=toInteger(n);if(n<1||n>MAX_SAFE_INTEGER$4){return[];}var index=MAX_ARRAY_LENGTH$5,length=nativeMin$11(n,MAX_ARRAY_LENGTH$5);iteratee=castFunction(iteratee);n-=MAX_ARRAY_LENGTH$5;var result=baseTimes(length,iteratee);while(++index<n){iteratee(index);}return result;}

/**
 * Enables the wrapper to be iterable.
 *
 * @name Symbol.iterator
 * @memberOf _
 * @since 4.0.0
 * @category Seq
 * @returns {Object} Returns the wrapper object.
 * @example
 *
 * var wrapped = _([1, 2]);
 *
 * wrapped[Symbol.iterator]() === wrapped;
 * // => true
 *
 * Array.from(wrapped);
 * // => [1, 2]
 */function wrapperToIterator(){return this;}

function baseWrapperValue(value,actions){var result=value;if(result instanceof LazyWrapper){result=result.value();}return arrayReduce(actions,function(result,action){return action.func.apply(action.thisArg,arrayPush([result],action.args));},result);}

function wrapperValue(){return baseWrapperValue(this.__wrapped__,this.__actions__);}

function toLower(value){return toString(value).toLowerCase();}

function toPath(value){if(isArray(value)){return arrayMap(value,toKey);}return isSymbol(value)?[value]:copyArray(stringToPath(toString(value)));}

var MAX_SAFE_INTEGER$5=9007199254740991;/**
 * Converts `value` to a safe integer. A safe integer can be compared and
 * represented correctly.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toSafeInteger(3.2);
 * // => 3
 *
 * _.toSafeInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toSafeInteger(Infinity);
 * // => 9007199254740991
 *
 * _.toSafeInteger('3.2');
 * // => 3
 */function toSafeInteger(value){return value?baseClamp(toInteger(value),-MAX_SAFE_INTEGER$5,MAX_SAFE_INTEGER$5):value===0?value:0;}

function toUpper(value){return toString(value).toUpperCase();}

function transform(object,iteratee,accumulator){var isArr=isArray(object),isArrLike=isArr||isBuffer(object)||isTypedArray(object);iteratee=baseIteratee(iteratee,4);if(accumulator==null){var Ctor=object&&object.constructor;if(isArrLike){accumulator=isArr?new Ctor():[];}else if(isObject(object)){accumulator=isFunction(Ctor)?baseCreate(getPrototype(object)):{};}else{accumulator={};}}(isArrLike?arrayEach:baseForOwn)(object,function(value,index,object){return iteratee(accumulator,value,index,object);});return accumulator;}

function charsEndIndex(strSymbols,chrSymbols){var index=strSymbols.length;while(index--&&baseIndexOf(chrSymbols,strSymbols[index],0)>-1){}return index;}

function charsStartIndex(strSymbols,chrSymbols){var index=-1,length=strSymbols.length;while(++index<length&&baseIndexOf(chrSymbols,strSymbols[index],0)>-1){}return index;}

var reTrim$1=/^\s+|\s+$/g;/**
 * Removes leading and trailing whitespace or specified characters from `string`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {string} Returns the trimmed string.
 * @example
 *
 * _.trim('  abc  ');
 * // => 'abc'
 *
 * _.trim('-_-abc-_-', '_-');
 * // => 'abc'
 *
 * _.map(['  foo  ', '  bar  '], _.trim);
 * // => ['foo', 'bar']
 */function trim(string,chars,guard){string=toString(string);if(string&&(guard||chars===undefined)){return string.replace(reTrim$1,'');}if(!string||!(chars=baseToString(chars))){return string;}var strSymbols=stringToArray(string),chrSymbols=stringToArray(chars),start=charsStartIndex(strSymbols,chrSymbols),end=charsEndIndex(strSymbols,chrSymbols)+1;return castSlice(strSymbols,start,end).join('');}

var reTrimEnd=/\s+$/;/**
 * Removes trailing whitespace or specified characters from `string`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {string} Returns the trimmed string.
 * @example
 *
 * _.trimEnd('  abc  ');
 * // => '  abc'
 *
 * _.trimEnd('-_-abc-_-', '_-');
 * // => '-_-abc'
 */function trimEnd(string,chars,guard){string=toString(string);if(string&&(guard||chars===undefined)){return string.replace(reTrimEnd,'');}if(!string||!(chars=baseToString(chars))){return string;}var strSymbols=stringToArray(string),end=charsEndIndex(strSymbols,stringToArray(chars))+1;return castSlice(strSymbols,0,end).join('');}

var reTrimStart$1=/^\s+/;/**
 * Removes leading whitespace or specified characters from `string`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {string} Returns the trimmed string.
 * @example
 *
 * _.trimStart('  abc  ');
 * // => 'abc  '
 *
 * _.trimStart('-_-abc-_-', '_-');
 * // => 'abc-_-'
 */function trimStart(string,chars,guard){string=toString(string);if(string&&(guard||chars===undefined)){return string.replace(reTrimStart$1,'');}if(!string||!(chars=baseToString(chars))){return string;}var strSymbols=stringToArray(string),start=charsStartIndex(strSymbols,stringToArray(chars));return castSlice(strSymbols,start).join('');}

var DEFAULT_TRUNC_LENGTH=30; var DEFAULT_TRUNC_OMISSION='...';/** Used to match `RegExp` flags from their coerced string values. */var reFlags$1=/\w*$/;/**
 * Truncates `string` if it's longer than the given maximum string length.
 * The last characters of the truncated string are replaced with the omission
 * string which defaults to "...".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to truncate.
 * @param {Object} [options={}] The options object.
 * @param {number} [options.length=30] The maximum string length.
 * @param {string} [options.omission='...'] The string to indicate text is omitted.
 * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
 * @returns {string} Returns the truncated string.
 * @example
 *
 * _.truncate('hi-diddly-ho there, neighborino');
 * // => 'hi-diddly-ho there, neighbo...'
 *
 * _.truncate('hi-diddly-ho there, neighborino', {
 *   'length': 24,
 *   'separator': ' '
 * });
 * // => 'hi-diddly-ho there,...'
 *
 * _.truncate('hi-diddly-ho there, neighborino', {
 *   'length': 24,
 *   'separator': /,? +/
 * });
 * // => 'hi-diddly-ho there...'
 *
 * _.truncate('hi-diddly-ho there, neighborino', {
 *   'omission': ' [...]'
 * });
 * // => 'hi-diddly-ho there, neig [...]'
 */function truncate(string,options){var length=DEFAULT_TRUNC_LENGTH,omission=DEFAULT_TRUNC_OMISSION;if(isObject(options)){var separator='separator'in options?options.separator:separator;length='length'in options?toInteger(options.length):length;omission='omission'in options?baseToString(options.omission):omission;}string=toString(string);var strLength=string.length;if(hasUnicode(string)){var strSymbols=stringToArray(string);strLength=strSymbols.length;}if(length>=strLength){return string;}var end=length-stringSize(omission);if(end<1){return omission;}var result=strSymbols?castSlice(strSymbols,0,end).join(''):string.slice(0,end);if(separator===undefined){return result+omission;}if(strSymbols){end+=result.length-end;}if(isRegExp(separator)){if(string.slice(end).search(separator)){var match,substring=result;if(!separator.global){separator=RegExp(separator.source,toString(reFlags$1.exec(separator))+'g');}separator.lastIndex=0;while(match=separator.exec(substring)){var newEnd=match.index;}result=result.slice(0,newEnd===undefined?end:newEnd);}}else if(string.indexOf(baseToString(separator),end)!=end){var index=result.lastIndexOf(separator);if(index>-1){result=result.slice(0,index);}}return result+omission;}

function unary(func){return ary(func,1);}

var htmlUnescapes={'&amp;':'&','&lt;':'<','&gt;':'>','&quot;':'"','&#39;':"'"};/**
 * Used by `_.unescape` to convert HTML entities to characters.
 *
 * @private
 * @param {string} chr The matched character to unescape.
 * @returns {string} Returns the unescaped character.
 */var unescapeHtmlChar=basePropertyOf(htmlUnescapes);

var reEscapedHtml=/&(?:amp|lt|gt|quot|#39);/g; var reHasEscapedHtml=RegExp(reEscapedHtml.source);/**
 * The inverse of `_.escape`; this method converts the HTML entities
 * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
 * their corresponding characters.
 *
 * **Note:** No other HTML entities are unescaped. To unescape additional
 * HTML entities use a third-party library like [_he_](https://mths.be/he).
 *
 * @static
 * @memberOf _
 * @since 0.6.0
 * @category String
 * @param {string} [string=''] The string to unescape.
 * @returns {string} Returns the unescaped string.
 * @example
 *
 * _.unescape('fred, barney, &amp; pebbles');
 * // => 'fred, barney, & pebbles'
 */function unescape(string){string=toString(string);return string&&reHasEscapedHtml.test(string)?string.replace(reEscapedHtml,unescapeHtmlChar):string;}

var INFINITY$5=1/0;/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */var createSet=!(Set&&1/setToArray(new Set([,-0]))[1]==INFINITY$5)?noop:function(values){return new Set(values);};

var LARGE_ARRAY_SIZE$2=200;/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */function baseUniq(array,iteratee,comparator){var index=-1,includes=arrayIncludes,length=array.length,isCommon=true,result=[],seen=result;if(comparator){isCommon=false;includes=arrayIncludesWith;}else if(length>=LARGE_ARRAY_SIZE$2){var set=iteratee?null:createSet(array);if(set){return setToArray(set);}isCommon=false;includes=cacheHas;seen=new SetCache();}else{seen=iteratee?[]:result;}outer:while(++index<length){var value=array[index],computed=iteratee?iteratee(value):value;value=comparator||value!==0?value:0;if(isCommon&&computed===computed){var seenIndex=seen.length;while(seenIndex--){if(seen[seenIndex]===computed){continue outer;}}if(iteratee){seen.push(computed);}result.push(value);}else if(!includes(seen,computed,comparator)){if(seen!==result){seen.push(computed);}result.push(value);}}return result;}

var union=baseRest(function(arrays){return baseUniq(baseFlatten(arrays,1,isArrayLikeObject,true));});

var unionBy=baseRest(function(arrays){var iteratee=last(arrays);if(isArrayLikeObject(iteratee)){iteratee=undefined;}return baseUniq(baseFlatten(arrays,1,isArrayLikeObject,true),baseIteratee(iteratee,2));});

var unionWith=baseRest(function(arrays){var comparator=last(arrays);comparator=typeof comparator=='function'?comparator:undefined;return baseUniq(baseFlatten(arrays,1,isArrayLikeObject,true),undefined,comparator);});

function uniq(array){return array&&array.length?baseUniq(array):[];}

function uniqBy(array,iteratee){return array&&array.length?baseUniq(array,baseIteratee(iteratee,2)):[];}

function uniqWith(array,comparator){comparator=typeof comparator=='function'?comparator:undefined;return array&&array.length?baseUniq(array,undefined,comparator):[];}

var idCounter=0;/**
 * Generates a unique ID. If `prefix` is given, the ID is appended to it.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {string} [prefix=''] The value to prefix the ID with.
 * @returns {string} Returns the unique ID.
 * @example
 *
 * _.uniqueId('contact_');
 * // => 'contact_104'
 *
 * _.uniqueId();
 * // => '105'
 */function uniqueId(prefix){var id=++idCounter;return toString(prefix)+id;}

function unset(object,path){return object==null?true:baseUnset(object,path);}

var nativeMax$14=Math.max;/**
 * This method is like `_.zip` except that it accepts an array of grouped
 * elements and creates an array regrouping the elements to their pre-zip
 * configuration.
 *
 * @static
 * @memberOf _
 * @since 1.2.0
 * @category Array
 * @param {Array} array The array of grouped elements to process.
 * @returns {Array} Returns the new array of regrouped elements.
 * @example
 *
 * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
 * // => [['a', 1, true], ['b', 2, false]]
 *
 * _.unzip(zipped);
 * // => [['a', 'b'], [1, 2], [true, false]]
 */function unzip(array){if(!(array&&array.length)){return[];}var length=0;array=arrayFilter(array,function(group){if(isArrayLikeObject(group)){length=nativeMax$14(group.length,length);return true;}});return baseTimes(length,function(index){return arrayMap(array,baseProperty(index));});}

function unzipWith(array,iteratee){if(!(array&&array.length)){return[];}var result=unzip(array);if(iteratee==null){return result;}return arrayMap(result,function(group){return apply(iteratee,undefined,group);});}

function baseUpdate(object,path,updater,customizer){return baseSet(object,path,updater(baseGet(object,path)),customizer);}

function update(object,path,updater){return object==null?object:baseUpdate(object,path,castFunction(updater));}

function updateWith(object,path,updater,customizer){customizer=typeof customizer=='function'?customizer:undefined;return object==null?object:baseUpdate(object,path,castFunction(updater),customizer);}

var upperCase=createCompounder(function(result,word,index){return result+(index?' ':'')+word.toUpperCase();});

function valuesIn(object){return object==null?[]:baseValues(object,keysIn$1(object));}

var without=baseRest(function(array,values){return isArrayLikeObject(array)?baseDifference(array,values):[];});

function wrap(value,wrapper){return partial(castFunction(wrapper),value);}

var wrapperAt=flatRest(function(paths){var length=paths.length,start=length?paths[0]:0,value=this.__wrapped__,interceptor=function interceptor(object){return baseAt(object,paths);};if(length>1||this.__actions__.length||!(value instanceof LazyWrapper)||!isIndex(start)){return this.thru(interceptor);}value=value.slice(start,+start+(length?1:0));value.__actions__.push({'func':thru,'args':[interceptor],'thisArg':undefined});return new LodashWrapper(value,this.__chain__).thru(function(array){if(length&&!array.length){array.push(undefined);}return array;});});

function wrapperChain(){return chain(this);}

function wrapperReverse(){var value=this.__wrapped__;if(value instanceof LazyWrapper){var wrapped=value;if(this.__actions__.length){wrapped=new LazyWrapper(this);}wrapped=wrapped.reverse();wrapped.__actions__.push({'func':thru,'args':[reverse],'thisArg':undefined});return new LodashWrapper(wrapped,this.__chain__);}return this.thru(reverse);}

function baseXor(arrays,iteratee,comparator){var length=arrays.length;if(length<2){return length?baseUniq(arrays[0]):[];}var index=-1,result=Array(length);while(++index<length){var array=arrays[index],othIndex=-1;while(++othIndex<length){if(othIndex!=index){result[index]=baseDifference(result[index]||array,arrays[othIndex],iteratee,comparator);}}}return baseUniq(baseFlatten(result,1),iteratee,comparator);}

var xor=baseRest(function(arrays){return baseXor(arrayFilter(arrays,isArrayLikeObject));});

var xorBy=baseRest(function(arrays){var iteratee=last(arrays);if(isArrayLikeObject(iteratee)){iteratee=undefined;}return baseXor(arrayFilter(arrays,isArrayLikeObject),baseIteratee(iteratee,2));});

var xorWith=baseRest(function(arrays){var comparator=last(arrays);comparator=typeof comparator=='function'?comparator:undefined;return baseXor(arrayFilter(arrays,isArrayLikeObject),undefined,comparator);});

var zip=baseRest(unzip);

/**
 * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
 *
 * @private
 * @param {Array} props The property identifiers.
 * @param {Array} values The property values.
 * @param {Function} assignFunc The function to assign values.
 * @returns {Object} Returns the new object.
 */function baseZipObject(props,values,assignFunc){var index=-1,length=props.length,valsLength=values.length,result={};while(++index<length){var value=index<valsLength?values[index]:undefined;assignFunc(result,props[index],value);}return result;}

function zipObject(props,values){return baseZipObject(props||[],values||[],assignValue);}

function zipObjectDeep(props,values){return baseZipObject(props||[],values||[],baseSet);}

var zipWith=baseRest(function(arrays){var length=arrays.length,iteratee=length>1?arrays[length-1]:undefined;iteratee=typeof iteratee=='function'?(arrays.pop(),iteratee):undefined;return unzipWith(arrays,iteratee);});

var array = {chunk:chunk,compact:compact,concat:concat,difference:difference,differenceBy:differenceBy,differenceWith:differenceWith,drop:drop,dropRight:dropRight,dropRightWhile:dropRightWhile,dropWhile:dropWhile,fill:fill,findIndex:findIndex,findLastIndex:findLastIndex,first:head,flatten:flatten,flattenDeep:flattenDeep,flattenDepth:flattenDepth,fromPairs:fromPairs,head:head,indexOf:indexOf,initial:initial,intersection:intersection,intersectionBy:intersectionBy,intersectionWith:intersectionWith,join:join,last:last,lastIndexOf:lastIndexOf,nth:nth,pull:pull,pullAll:pullAll,pullAllBy:pullAllBy,pullAllWith:pullAllWith,pullAt:pullAt,remove:remove,reverse:reverse,slice:slice,sortedIndex:sortedIndex,sortedIndexBy:sortedIndexBy,sortedIndexOf:sortedIndexOf,sortedLastIndex:sortedLastIndex,sortedLastIndexBy:sortedLastIndexBy,sortedLastIndexOf:sortedLastIndexOf,sortedUniq:sortedUniq,sortedUniqBy:sortedUniqBy,tail:tail,take:take,takeRight:takeRight,takeRightWhile:takeRightWhile,takeWhile:takeWhile,union:union,unionBy:unionBy,unionWith:unionWith,uniq:uniq,uniqBy:uniqBy,uniqWith:uniqWith,unzip:unzip,unzipWith:unzipWith,without:without,xor:xor,xorBy:xorBy,xorWith:xorWith,zip:zip,zipObject:zipObject,zipObjectDeep:zipObjectDeep,zipWith:zipWith};

var collection = {countBy:countBy,each:forEach,eachRight:forEachRight,every:every,filter:filter,find:find,findLast:findLast,flatMap:flatMap,flatMapDeep:flatMapDeep,flatMapDepth:flatMapDepth,forEach:forEach,forEachRight:forEachRight,groupBy:groupBy,includes:includes,invokeMap:invokeMap,keyBy:keyBy,map:map,orderBy:orderBy,partition:partition,reduce:reduce,reduceRight:reduceRight,reject:reject,sample:sample,sampleSize:sampleSize,shuffle:shuffle,size:size,some:some,sortBy:sortBy};

var date = {now:now};

var func = {after:after,ary:ary,before:before,bind:bind,bindKey:bindKey,curry:curry,curryRight:curryRight,debounce:debounce,defer:defer,delay:delay,flip:flip,memoize:memoize,negate:negate,once:once,overArgs:overArgs,partial:partial,partialRight:partialRight,rearg:rearg,rest:rest,spread:spread,throttle:throttle,unary:unary,wrap:wrap};

var lang = {castArray:castArray,clone:clone,cloneDeep:cloneDeep,cloneDeepWith:cloneDeepWith,cloneWith:cloneWith,conformsTo:conformsTo,eq:eq,gt:gt,gte:gte,isArguments:isArguments,isArray:isArray,isArrayBuffer:isArrayBuffer,isArrayLike:isArrayLike,isArrayLikeObject:isArrayLikeObject,isBoolean:isBoolean,isBuffer:isBuffer,isDate:isDate,isElement:isElement,isEmpty:isEmpty,isEqual:isEqual,isEqualWith:isEqualWith,isError:isError,isFinite:isFinite,isFunction:isFunction,isInteger:isInteger,isLength:isLength,isMap:isMap,isMatch:isMatch,isMatchWith:isMatchWith,isNaN:isNaN,isNative:isNative,isNil:isNil,isNull:isNull,isNumber:isNumber,isObject:isObject,isObjectLike:isObjectLike,isPlainObject:isPlainObject,isRegExp:isRegExp,isSafeInteger:isSafeInteger,isSet:isSet,isString:isString,isSymbol:isSymbol,isTypedArray:isTypedArray,isUndefined:isUndefined,isWeakMap:isWeakMap,isWeakSet:isWeakSet,lt:lt,lte:lte,toArray:toArray$1,toFinite:toFinite,toInteger:toInteger,toLength:toLength,toNumber:toNumber,toPlainObject:toPlainObject,toSafeInteger:toSafeInteger,toString:toString};

var math = {add:add,ceil:ceil,divide:divide,floor:floor,max:max,maxBy:maxBy,mean:mean,meanBy:meanBy,min:min,minBy:minBy,multiply:multiply,round:round,subtract:subtract,sum:sum,sumBy:sumBy};

var number = {clamp:clamp,inRange:inRange,random:random};

var object = {assign:assign,assignIn:assignIn,assignInWith:assignInWith,assignWith:assignWith,at:at,create:create,defaults:defaults$1,defaultsDeep:defaultsDeep,entries:toPairs,entriesIn:toPairsIn,extend:assignIn,extendWith:assignInWith,findKey:findKey,findLastKey:findLastKey,forIn:forIn,forInRight:forInRight,forOwn:forOwn,forOwnRight:forOwnRight,functions:functions,functionsIn:functionsIn,get:get$1,has:has,hasIn:hasIn,invert:invert,invertBy:invertBy,invoke:invoke,keys:keys,keysIn:keysIn$1,mapKeys:mapKeys,mapValues:mapValues,merge:merge,mergeWith:mergeWith,omit:omit,omitBy:omitBy,pick:pick,pickBy:pickBy,result:result,set:set$1,setWith:setWith,toPairs:toPairs,toPairsIn:toPairsIn,transform:transform,unset:unset,update:update,updateWith:updateWith,values:values,valuesIn:valuesIn};

var seq = {at:wrapperAt,chain:chain,commit:wrapperCommit,lodash:lodash,next:wrapperNext,plant:wrapperPlant,reverse:wrapperReverse,tap:tap,thru:thru,toIterator:wrapperToIterator,toJSON:wrapperValue,value:wrapperValue,valueOf:wrapperValue,wrapperChain:wrapperChain};

var string = {camelCase:camelCase,capitalize:capitalize,deburr:deburr,endsWith:endsWith,escape:escape,escapeRegExp:escapeRegExp,kebabCase:kebabCase,lowerCase:lowerCase,lowerFirst:lowerFirst,pad:pad,padEnd:padEnd,padStart:padStart,parseInt:parseInt$1,repeat:repeat,replace:replace,snakeCase:snakeCase,split:split,startCase:startCase,startsWith:startsWith,template:template,templateSettings:templateSettings,toLower:toLower,toUpper:toUpper,trim:trim,trimEnd:trimEnd,trimStart:trimStart,truncate:truncate,unescape:unescape,upperCase:upperCase,upperFirst:upperFirst,words:words};

var util = {attempt:attempt,bindAll:bindAll,cond:cond,conforms:conforms,constant:constant,defaultTo:defaultTo,flow:flow,flowRight:flowRight,identity:identity,iteratee:iteratee,matches:matches,matchesProperty:matchesProperty,method:method,methodOf:methodOf,mixin:mixin,noop:noop,nthArg:nthArg,over:over,overEvery:overEvery,overSome:overSome,property:property,propertyOf:propertyOf,range:range,rangeRight:rangeRight,stubArray:stubArray,stubFalse:stubFalse,stubObject:stubObject,stubString:stubString,stubTrue:stubTrue,times:times,toPath:toPath,uniqueId:uniqueId};

function lazyClone(){var result=new LazyWrapper(this.__wrapped__);result.__actions__=copyArray(this.__actions__);result.__dir__=this.__dir__;result.__filtered__=this.__filtered__;result.__iteratees__=copyArray(this.__iteratees__);result.__takeCount__=this.__takeCount__;result.__views__=copyArray(this.__views__);return result;}

function lazyReverse(){if(this.__filtered__){var result=new LazyWrapper(this);result.__dir__=-1;result.__filtered__=true;}else{result=this.clone();result.__dir__*=-1;}return result;}

/* Built-in method references for those with the same name as other `lodash` methods. */var nativeMax$16=Math.max;
var nativeMin$14=Math.min;/**
 * Gets the view, applying any `transforms` to the `start` and `end` positions.
 *
 * @private
 * @param {number} start The start of the view.
 * @param {number} end The end of the view.
 * @param {Array} transforms The transformations to apply to the view.
 * @returns {Object} Returns an object containing the `start` and `end`
 *  positions of the view.
 */function getView(start,end,transforms){var index=-1,length=transforms.length;while(++index<length){var data=transforms[index],size=data.size;switch(data.type){case'drop':start+=size;break;case'dropRight':end-=size;break;case'take':end=nativeMin$14(end,start+size);break;case'takeRight':start=nativeMax$16(start,end-size);break;}}return{'start':start,'end':end};}

var LAZY_FILTER_FLAG$1=1; var LAZY_MAP_FLAG=2;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeMin$13=Math.min;/**
 * Extracts the unwrapped value from its lazy wrapper.
 *
 * @private
 * @name value
 * @memberOf LazyWrapper
 * @returns {*} Returns the unwrapped value.
 */function lazyValue(){var array=this.__wrapped__.value(),dir=this.__dir__,isArr=isArray(array),isRight=dir<0,arrLength=isArr?array.length:0,view=getView(0,arrLength,this.__views__),start=view.start,end=view.end,length=end-start,index=isRight?end:start-1,iteratees=this.__iteratees__,iterLength=iteratees.length,resIndex=0,takeCount=nativeMin$13(length,this.__takeCount__);if(!isArr||!isRight&&arrLength==length&&takeCount==length){return baseWrapperValue(array,this.__actions__);}var result=[];outer:while(length--&&resIndex<takeCount){index+=dir;var iterIndex=-1,value=array[index];while(++iterIndex<iterLength){var data=iteratees[iterIndex],iteratee=data.iteratee,type=data.type,computed=iteratee(value);if(type==LAZY_MAP_FLAG){value=computed;}else if(!computed){if(type==LAZY_FILTER_FLAG$1){continue outer;}else{break outer;}}}result[resIndex++]=value;}return result;}

/**
 * @license
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="es" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */var VERSION='4.17.4';/** Used to compose bitmasks for function metadata. */var WRAP_BIND_KEY_FLAG$6=2;/** Used to indicate the type of lazy iteratees. */var LAZY_FILTER_FLAG=1; var LAZY_WHILE_FLAG=3;/** Used as references for the maximum length and index of an array. */var MAX_ARRAY_LENGTH$6=4294967295;/** Used for built-in method references. */var arrayProto$5=Array.prototype; var objectProto$25=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty$22=objectProto$25.hasOwnProperty;/** Built-in value references. */var symIterator$1=_Symbol?_Symbol.iterator:undefined;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeMax$15=Math.max; var nativeMin$12=Math.min;// wrap `_.mixin` so it works when provided only one argument
var mixin$2=function(func$$1){return function(object$$1,source,options){if(options==null){var isObj=isObject(source),props=isObj&&keys(source),methodNames=props&&props.length&&baseFunctions(source,props);if(!(methodNames?methodNames.length:isObj)){options=source;source=object$$1;object$$1=this;}}return func$$1(object$$1,source,options);};}(mixin);// Add methods that return wrapped values in chain sequences.
lodash.after=func.after;lodash.ary=func.ary;lodash.assign=object.assign;lodash.assignIn=object.assignIn;lodash.assignInWith=object.assignInWith;lodash.assignWith=object.assignWith;lodash.at=object.at;lodash.before=func.before;lodash.bind=func.bind;lodash.bindAll=util.bindAll;lodash.bindKey=func.bindKey;lodash.castArray=lang.castArray;lodash.chain=seq.chain;lodash.chunk=array.chunk;lodash.compact=array.compact;lodash.concat=array.concat;lodash.cond=util.cond;lodash.conforms=util.conforms;lodash.constant=util.constant;lodash.countBy=collection.countBy;lodash.create=object.create;lodash.curry=func.curry;lodash.curryRight=func.curryRight;lodash.debounce=func.debounce;lodash.defaults=object.defaults;lodash.defaultsDeep=object.defaultsDeep;lodash.defer=func.defer;lodash.delay=func.delay;lodash.difference=array.difference;lodash.differenceBy=array.differenceBy;lodash.differenceWith=array.differenceWith;lodash.drop=array.drop;lodash.dropRight=array.dropRight;lodash.dropRightWhile=array.dropRightWhile;lodash.dropWhile=array.dropWhile;lodash.fill=array.fill;lodash.filter=collection.filter;lodash.flatMap=collection.flatMap;lodash.flatMapDeep=collection.flatMapDeep;lodash.flatMapDepth=collection.flatMapDepth;lodash.flatten=array.flatten;lodash.flattenDeep=array.flattenDeep;lodash.flattenDepth=array.flattenDepth;lodash.flip=func.flip;lodash.flow=util.flow;lodash.flowRight=util.flowRight;lodash.fromPairs=array.fromPairs;lodash.functions=object.functions;lodash.functionsIn=object.functionsIn;lodash.groupBy=collection.groupBy;lodash.initial=array.initial;lodash.intersection=array.intersection;lodash.intersectionBy=array.intersectionBy;lodash.intersectionWith=array.intersectionWith;lodash.invert=object.invert;lodash.invertBy=object.invertBy;lodash.invokeMap=collection.invokeMap;lodash.iteratee=util.iteratee;lodash.keyBy=collection.keyBy;lodash.keys=keys;lodash.keysIn=object.keysIn;lodash.map=collection.map;lodash.mapKeys=object.mapKeys;lodash.mapValues=object.mapValues;lodash.matches=util.matches;lodash.matchesProperty=util.matchesProperty;lodash.memoize=func.memoize;lodash.merge=object.merge;lodash.mergeWith=object.mergeWith;lodash.method=util.method;lodash.methodOf=util.methodOf;lodash.mixin=mixin$2;lodash.negate=negate;lodash.nthArg=util.nthArg;lodash.omit=object.omit;lodash.omitBy=object.omitBy;lodash.once=func.once;lodash.orderBy=collection.orderBy;lodash.over=util.over;lodash.overArgs=func.overArgs;lodash.overEvery=util.overEvery;lodash.overSome=util.overSome;lodash.partial=func.partial;lodash.partialRight=func.partialRight;lodash.partition=collection.partition;lodash.pick=object.pick;lodash.pickBy=object.pickBy;lodash.property=util.property;lodash.propertyOf=util.propertyOf;lodash.pull=array.pull;lodash.pullAll=array.pullAll;lodash.pullAllBy=array.pullAllBy;lodash.pullAllWith=array.pullAllWith;lodash.pullAt=array.pullAt;lodash.range=util.range;lodash.rangeRight=util.rangeRight;lodash.rearg=func.rearg;lodash.reject=collection.reject;lodash.remove=array.remove;lodash.rest=func.rest;lodash.reverse=array.reverse;lodash.sampleSize=collection.sampleSize;lodash.set=object.set;lodash.setWith=object.setWith;lodash.shuffle=collection.shuffle;lodash.slice=array.slice;lodash.sortBy=collection.sortBy;lodash.sortedUniq=array.sortedUniq;lodash.sortedUniqBy=array.sortedUniqBy;lodash.split=string.split;lodash.spread=func.spread;lodash.tail=array.tail;lodash.take=array.take;lodash.takeRight=array.takeRight;lodash.takeRightWhile=array.takeRightWhile;lodash.takeWhile=array.takeWhile;lodash.tap=seq.tap;lodash.throttle=func.throttle;lodash.thru=thru;lodash.toArray=lang.toArray;lodash.toPairs=object.toPairs;lodash.toPairsIn=object.toPairsIn;lodash.toPath=util.toPath;lodash.toPlainObject=lang.toPlainObject;lodash.transform=object.transform;lodash.unary=func.unary;lodash.union=array.union;lodash.unionBy=array.unionBy;lodash.unionWith=array.unionWith;lodash.uniq=array.uniq;lodash.uniqBy=array.uniqBy;lodash.uniqWith=array.uniqWith;lodash.unset=object.unset;lodash.unzip=array.unzip;lodash.unzipWith=array.unzipWith;lodash.update=object.update;lodash.updateWith=object.updateWith;lodash.values=object.values;lodash.valuesIn=object.valuesIn;lodash.without=array.without;lodash.words=string.words;lodash.wrap=func.wrap;lodash.xor=array.xor;lodash.xorBy=array.xorBy;lodash.xorWith=array.xorWith;lodash.zip=array.zip;lodash.zipObject=array.zipObject;lodash.zipObjectDeep=array.zipObjectDeep;lodash.zipWith=array.zipWith;// Add aliases.
lodash.entries=object.toPairs;lodash.entriesIn=object.toPairsIn;lodash.extend=object.assignIn;lodash.extendWith=object.assignInWith;// Add methods to `lodash.prototype`.
mixin$2(lodash,lodash);// Add methods that return unwrapped values in chain sequences.
lodash.add=math.add;lodash.attempt=util.attempt;lodash.camelCase=string.camelCase;lodash.capitalize=string.capitalize;lodash.ceil=math.ceil;lodash.clamp=number.clamp;lodash.clone=lang.clone;lodash.cloneDeep=lang.cloneDeep;lodash.cloneDeepWith=lang.cloneDeepWith;lodash.cloneWith=lang.cloneWith;lodash.conformsTo=lang.conformsTo;lodash.deburr=string.deburr;lodash.defaultTo=util.defaultTo;lodash.divide=math.divide;lodash.endsWith=string.endsWith;lodash.eq=lang.eq;lodash.escape=string.escape;lodash.escapeRegExp=string.escapeRegExp;lodash.every=collection.every;lodash.find=collection.find;lodash.findIndex=array.findIndex;lodash.findKey=object.findKey;lodash.findLast=collection.findLast;lodash.findLastIndex=array.findLastIndex;lodash.findLastKey=object.findLastKey;lodash.floor=math.floor;lodash.forEach=collection.forEach;lodash.forEachRight=collection.forEachRight;lodash.forIn=object.forIn;lodash.forInRight=object.forInRight;lodash.forOwn=object.forOwn;lodash.forOwnRight=object.forOwnRight;lodash.get=object.get;lodash.gt=lang.gt;lodash.gte=lang.gte;lodash.has=object.has;lodash.hasIn=object.hasIn;lodash.head=array.head;lodash.identity=identity;lodash.includes=collection.includes;lodash.indexOf=array.indexOf;lodash.inRange=number.inRange;lodash.invoke=object.invoke;lodash.isArguments=lang.isArguments;lodash.isArray=isArray;lodash.isArrayBuffer=lang.isArrayBuffer;lodash.isArrayLike=lang.isArrayLike;lodash.isArrayLikeObject=lang.isArrayLikeObject;lodash.isBoolean=lang.isBoolean;lodash.isBuffer=lang.isBuffer;lodash.isDate=lang.isDate;lodash.isElement=lang.isElement;lodash.isEmpty=lang.isEmpty;lodash.isEqual=lang.isEqual;lodash.isEqualWith=lang.isEqualWith;lodash.isError=lang.isError;lodash.isFinite=lang.isFinite;lodash.isFunction=lang.isFunction;lodash.isInteger=lang.isInteger;lodash.isLength=lang.isLength;lodash.isMap=lang.isMap;lodash.isMatch=lang.isMatch;lodash.isMatchWith=lang.isMatchWith;lodash.isNaN=lang.isNaN;lodash.isNative=lang.isNative;lodash.isNil=lang.isNil;lodash.isNull=lang.isNull;lodash.isNumber=lang.isNumber;lodash.isObject=isObject;lodash.isObjectLike=lang.isObjectLike;lodash.isPlainObject=lang.isPlainObject;lodash.isRegExp=lang.isRegExp;lodash.isSafeInteger=lang.isSafeInteger;lodash.isSet=lang.isSet;lodash.isString=lang.isString;lodash.isSymbol=lang.isSymbol;lodash.isTypedArray=lang.isTypedArray;lodash.isUndefined=lang.isUndefined;lodash.isWeakMap=lang.isWeakMap;lodash.isWeakSet=lang.isWeakSet;lodash.join=array.join;lodash.kebabCase=string.kebabCase;lodash.last=last;lodash.lastIndexOf=array.lastIndexOf;lodash.lowerCase=string.lowerCase;lodash.lowerFirst=string.lowerFirst;lodash.lt=lang.lt;lodash.lte=lang.lte;lodash.max=math.max;lodash.maxBy=math.maxBy;lodash.mean=math.mean;lodash.meanBy=math.meanBy;lodash.min=math.min;lodash.minBy=math.minBy;lodash.stubArray=util.stubArray;lodash.stubFalse=util.stubFalse;lodash.stubObject=util.stubObject;lodash.stubString=util.stubString;lodash.stubTrue=util.stubTrue;lodash.multiply=math.multiply;lodash.nth=array.nth;lodash.noop=util.noop;lodash.now=date.now;lodash.pad=string.pad;lodash.padEnd=string.padEnd;lodash.padStart=string.padStart;lodash.parseInt=string.parseInt;lodash.random=number.random;lodash.reduce=collection.reduce;lodash.reduceRight=collection.reduceRight;lodash.repeat=string.repeat;lodash.replace=string.replace;lodash.result=object.result;lodash.round=math.round;lodash.sample=collection.sample;lodash.size=collection.size;lodash.snakeCase=string.snakeCase;lodash.some=collection.some;lodash.sortedIndex=array.sortedIndex;lodash.sortedIndexBy=array.sortedIndexBy;lodash.sortedIndexOf=array.sortedIndexOf;lodash.sortedLastIndex=array.sortedLastIndex;lodash.sortedLastIndexBy=array.sortedLastIndexBy;lodash.sortedLastIndexOf=array.sortedLastIndexOf;lodash.startCase=string.startCase;lodash.startsWith=string.startsWith;lodash.subtract=math.subtract;lodash.sum=math.sum;lodash.sumBy=math.sumBy;lodash.template=string.template;lodash.times=util.times;lodash.toFinite=lang.toFinite;lodash.toInteger=toInteger;lodash.toLength=lang.toLength;lodash.toLower=string.toLower;lodash.toNumber=lang.toNumber;lodash.toSafeInteger=lang.toSafeInteger;lodash.toString=lang.toString;lodash.toUpper=string.toUpper;lodash.trim=string.trim;lodash.trimEnd=string.trimEnd;lodash.trimStart=string.trimStart;lodash.truncate=string.truncate;lodash.unescape=string.unescape;lodash.uniqueId=util.uniqueId;lodash.upperCase=string.upperCase;lodash.upperFirst=string.upperFirst;// Add aliases.
lodash.each=collection.forEach;lodash.eachRight=collection.forEachRight;lodash.first=array.head;mixin$2(lodash,function(){var source={};baseForOwn(lodash,function(func$$1,methodName){if(!hasOwnProperty$22.call(lodash.prototype,methodName)){source[methodName]=func$$1;}});return source;}(),{'chain':false});/**
 * The semantic version number.
 *
 * @static
 * @memberOf _
 * @type {string}
 */lodash.VERSION=VERSION;(lodash.templateSettings=string.templateSettings).imports._=lodash;// Assign default placeholders.
arrayEach(['bind','bindKey','curry','curryRight','partial','partialRight'],function(methodName){lodash[methodName].placeholder=lodash;});// Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
arrayEach(['drop','take'],function(methodName,index){LazyWrapper.prototype[methodName]=function(n){n=n===undefined?1:nativeMax$15(toInteger(n),0);var result$$1=this.__filtered__&&!index?new LazyWrapper(this):this.clone();if(result$$1.__filtered__){result$$1.__takeCount__=nativeMin$12(n,result$$1.__takeCount__);}else{result$$1.__views__.push({'size':nativeMin$12(n,MAX_ARRAY_LENGTH$6),'type':methodName+(result$$1.__dir__<0?'Right':'')});}return result$$1;};LazyWrapper.prototype[methodName+'Right']=function(n){return this.reverse()[methodName](n).reverse();};});// Add `LazyWrapper` methods that accept an `iteratee` value.
arrayEach(['filter','map','takeWhile'],function(methodName,index){var type=index+1,isFilter=type==LAZY_FILTER_FLAG||type==LAZY_WHILE_FLAG;LazyWrapper.prototype[methodName]=function(iteratee$$1){var result$$1=this.clone();result$$1.__iteratees__.push({'iteratee':baseIteratee(iteratee$$1,3),'type':type});result$$1.__filtered__=result$$1.__filtered__||isFilter;return result$$1;};});// Add `LazyWrapper` methods for `_.head` and `_.last`.
arrayEach(['head','last'],function(methodName,index){var takeName='take'+(index?'Right':'');LazyWrapper.prototype[methodName]=function(){return this[takeName](1).value()[0];};});// Add `LazyWrapper` methods for `_.initial` and `_.tail`.
arrayEach(['initial','tail'],function(methodName,index){var dropName='drop'+(index?'':'Right');LazyWrapper.prototype[methodName]=function(){return this.__filtered__?new LazyWrapper(this):this[dropName](1);};});LazyWrapper.prototype.compact=function(){return this.filter(identity);};LazyWrapper.prototype.find=function(predicate){return this.filter(predicate).head();};LazyWrapper.prototype.findLast=function(predicate){return this.reverse().find(predicate);};LazyWrapper.prototype.invokeMap=baseRest(function(path,args){if(typeof path=='function'){return new LazyWrapper(this);}return this.map(function(value){return baseInvoke(value,path,args);});});LazyWrapper.prototype.reject=function(predicate){return this.filter(negate(baseIteratee(predicate)));};LazyWrapper.prototype.slice=function(start,end){start=toInteger(start);var result$$1=this;if(result$$1.__filtered__&&(start>0||end<0)){return new LazyWrapper(result$$1);}if(start<0){result$$1=result$$1.takeRight(-start);}else if(start){result$$1=result$$1.drop(start);}if(end!==undefined){end=toInteger(end);result$$1=end<0?result$$1.dropRight(-end):result$$1.take(end-start);}return result$$1;};LazyWrapper.prototype.takeRightWhile=function(predicate){return this.reverse().takeWhile(predicate).reverse();};LazyWrapper.prototype.toArray=function(){return this.take(MAX_ARRAY_LENGTH$6);};// Add `LazyWrapper` methods to `lodash.prototype`.
baseForOwn(LazyWrapper.prototype,function(func$$1,methodName){var checkIteratee=/^(?:filter|find|map|reject)|While$/.test(methodName),isTaker=/^(?:head|last)$/.test(methodName),lodashFunc=lodash[isTaker?'take'+(methodName=='last'?'Right':''):methodName],retUnwrapped=isTaker||/^find/.test(methodName);if(!lodashFunc){return;}lodash.prototype[methodName]=function(){var value=this.__wrapped__,args=isTaker?[1]:arguments,isLazy=value instanceof LazyWrapper,iteratee$$1=args[0],useLazy=isLazy||isArray(value);var interceptor=function interceptor(value){var result$$1=lodashFunc.apply(lodash,arrayPush([value],args));return isTaker&&chainAll?result$$1[0]:result$$1;};if(useLazy&&checkIteratee&&typeof iteratee$$1=='function'&&iteratee$$1.length!=1){// Avoid lazy use if the iteratee has a "length" value other than `1`.
isLazy=useLazy=false;}var chainAll=this.__chain__,isHybrid=!!this.__actions__.length,isUnwrapped=retUnwrapped&&!chainAll,onlyLazy=isLazy&&!isHybrid;if(!retUnwrapped&&useLazy){value=onlyLazy?value:new LazyWrapper(this);var result$$1=func$$1.apply(value,args);result$$1.__actions__.push({'func':thru,'args':[interceptor],'thisArg':undefined});return new LodashWrapper(result$$1,chainAll);}if(isUnwrapped&&onlyLazy){return func$$1.apply(this,args);}result$$1=this.thru(interceptor);return isUnwrapped?isTaker?result$$1.value()[0]:result$$1.value():result$$1;};});// Add `Array` methods to `lodash.prototype`.
arrayEach(['pop','push','shift','sort','splice','unshift'],function(methodName){var func$$1=arrayProto$5[methodName],chainName=/^(?:push|sort|unshift)$/.test(methodName)?'tap':'thru',retUnwrapped=/^(?:pop|shift)$/.test(methodName);lodash.prototype[methodName]=function(){var args=arguments;if(retUnwrapped&&!this.__chain__){var value=this.value();return func$$1.apply(isArray(value)?value:[],args);}return this[chainName](function(value){return func$$1.apply(isArray(value)?value:[],args);});};});// Map minified method names to their real names.
baseForOwn(LazyWrapper.prototype,function(func$$1,methodName){var lodashFunc=lodash[methodName];if(lodashFunc){var key=lodashFunc.name+'',names=realNames[key]||(realNames[key]=[]);names.push({'name':methodName,'func':lodashFunc});}});realNames[createHybrid(undefined,WRAP_BIND_KEY_FLAG$6).name]=[{'name':'wrapper','func':undefined}];// Add methods to `LazyWrapper`.
LazyWrapper.prototype.clone=lazyClone;LazyWrapper.prototype.reverse=lazyReverse;LazyWrapper.prototype.value=lazyValue;// Add chain sequence methods to the `lodash` wrapper.
lodash.prototype.at=seq.at;lodash.prototype.chain=seq.wrapperChain;lodash.prototype.commit=seq.commit;lodash.prototype.next=seq.next;lodash.prototype.plant=seq.plant;lodash.prototype.reverse=seq.reverse;lodash.prototype.toJSON=lodash.prototype.valueOf=lodash.prototype.value=seq.value;// Add lazy aliases.
lodash.prototype.first=lodash.prototype.head;if(symIterator$1){lodash.prototype[symIterator$1]=seq.toIterator;}

/**
 * @license
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="es" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/**
 * Create a Parameter object
 * @param {*} name 
 * @param {*} properties 
 */function Parameter(name,properties){if(!name||!properties||!properties.Type){throw new SyntaxError('New Parameter with '+JSON.stringify({name:name,properties:properties})+' parameters is invalid. Name and Type are required.');}return{kind:'Parameter',Name:name,Properties:properties};}

/**
 * Set the Description of a template
 * @param {*} content 
 */function Description(content){if(!content){throw new SyntaxError('New Description must have content.');}return{kind:'Description',Content:content};}

/**
 * Create a Mapping object
 * @param {*} name 
 * @param {*} subName 
 * @param {*} body 
 */function Mapping(name,subName,body){if(!name||!subName||!body){throw new SyntaxError('New Mapping with '+JSON.stringify({name:name,subName:subName,body:body})+' parameters is invalid. name, subName, and body are required.');}return{kind:'Mapping',Name:name,Content:defineProperty({},subName,body)};}

function CreationPolicy(resource,content){if(!resource||!content||!content.AutoScalingCreationPolicy&&!content.ResourceSignal){throw new SyntaxError('New CreationPolicy must have content, '+JSON.stringify(content)+' is invalid.');}return{kind:'CreationPolicy',Resource:resource,Content:content};}

function Resource(name,properties,options){if(!name){throw new SyntaxError('New Resource is invalid. A Name is required.');}if(properties){_validateProperties(properties,this.name,this.json);}var result={kind:'Resource',Name:name,Type:this.json.Resources[this.name].Name,Properties:properties};if(options&&options.Condition){result.Condition=options.Condition;}return result;}function CustomResource(name,properties){if(!name){throw new SyntaxError('New Resource is invalid. A Name is required.');}return{kind:'Resource',Name:name,Type:'Custom::'+name,Properties:properties};}function _validateProperties(properties,rType,model){//Check if keys other than the defined ones are present
Object.keys(properties).map(function(p){if(!model.Resources[rType].Properties[p]){throw new SyntaxError(p+' is not a valid attribute of '+rType);}});// Check if all of the required keys are present
Object.keys(model.Resources[rType].Properties).map(function(p){if(model.Resources[rType].Properties[p].Required==='Yes'){if(!properties[p]){throw new SyntaxError(p+' is required but is not present in '+rType);}}if(model.Resources[rType].Properties[p].Array){if(properties[p]&&!Array.isArray(properties[p])){if(!properties[p].kind&&properties[p].kind!=='FnGetAtt'&&!properties[p]['Fn::GetAtt']){throw new SyntaxError(p+' must be an array in '+rType);}}}else{if(properties[p]&&Array.isArray(properties[p])){throw new SyntaxError(p+' cannot be an array in '+rType);}}});}

function Ref(target){if(typeof target==='string'){return{kind:'Ref',Ref:target};}else{return{kind:'Ref',Ref:target.Name};}}/**
 * Returns an Fn::GetAtt object that references another element in the template
 * @param {*} target 
 * @param {*} attr 
 */function FnGetAtt(target,attr){if(typeof target==='string'){return{kind:'FnGetAtt',FnGetAtt:[target,attr]};}else{return{kind:'FnGetAtt',FnGetAtt:[target.Name,attr]};}}/**
 * Returns an Fn::Join object
 */function FnJoin(delimiter,values){var newValues=values;if(Array.isArray(values)){newValues=values.map(function(v){return buildIntrinsic(v);});}return{kind:'FnJoin',Delimiter:delimiter,Values:newValues};}/**
 * Returns an Fn::And object
 * @param {*} one 
 * @param {*} two 
 */function FnAnd(one,two){return{kind:'FnAnd',FnAnd:[buildIntrinsic(one),buildIntrinsic(two)]};}/**
 * Returns an Fn::Equals object
 * @param {*} one 
 * @param {*} two 
 */function FnEquals(one,two){return{kind:'FnEquals',FnEquals:[one,two]};}// export IIntrinsic = IRef | IFnGetAtt | IFnAnd | IFnEquals | IFnIf | IFnNot | IFnOr;
/**
 * Returns an Fn::Sub object
 * @param {*} input 
 */function FnSub(input){return{kind:'FnSub',FnSub:input};}/**
 * Returns an Fn::Base64 object
 * @param {*} input 
 *//**
 * Returns an Fn::FindInMap object
 * @param {*} mapName 
 * @param {*} topLevelKey 
 * @param {*} secondLevelKey 
 */function FnFindInMap(mapName,topLevelKey,secondLevelKey){return{kind:'FnFindInMap',FnFindInMap:[mapName,topLevelKey,secondLevelKey]};}/**
 * Returns an Fn::GetAZs object
 * @param {*} region 
 *//**
 * Returns an Fn::Select object
 * @param {*} index 
 * @param {*} list 
 */function buildIntrinsic(input){if(input['Fn::Equals']){return FnEquals(buildIntrinsic(input['Fn::Equals'][0]),buildIntrinsic(input['Fn::Equals'][1]));}else if(input.Ref){return Ref(input.Ref);}else if(input['Fn::GetAtt']){return FnGetAtt(buildIntrinsic(input['Fn::GetAtt'][0]),buildIntrinsic(input['Fn::GetAtt'][1]));}else{return input;}}

function Condition(name,conditionFn){var newCondFn=cloneDeep(conditionFn);if((typeof newCondFn==='undefined'?'undefined':_typeof(newCondFn))==='object'&&!newCondFn.kind){newCondFn=buildIntrinsic(newCondFn);}return{kind:'Condition',Name:name,Condition:newCondFn};}

function Output(name,properties){if(!name||!properties||!properties.Value){throw new SyntaxError('New Output with '+JSON.stringify({name:name,properties:properties})+' parameters is invalid. Name and Value are required.');}var newProps=cloneDeep(properties);// If Value is a Ref object, create a Ref object
if(_typeof(newProps.Value)==='object'&&!newProps.Value.kind){if(newProps.Value.Ref){newProps.Value=Ref(newProps.Value.Ref);}else if(newProps.Value['Fn::Join']){newProps.Value=FnJoin(newProps.Value['Fn::Join'][0],newProps.Value['Fn::Join'][1]);}}// If Export Name is Intrinsic, create an Intrinsic object
if(newProps.Export&&newProps.Export.Name&&_typeof(newProps.Export.Name)==='object'&&newProps.Export.Name['Fn::Sub']&&!newProps.Export.Name.kind){newProps.Export.Name=FnSub(newProps.Export.Name['Fn::Sub']);}return{kind:'Output',Name:name,Properties:newProps};}

function ResourceMetadata(resource,content){if(!resource||!content){throw new SyntaxError('New Metadata must have content, '+JSON.stringify(content)+' is invalid.');}return{kind:'ResourceMetadata',Resource:resource,Content:content};}

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts,allowAboveRoot){// if the path tries to go above the root, `up` ends up > 0
var up=0;for(var i=parts.length-1;i>=0;i--){var last=parts[i];if(last==='.'){parts.splice(i,1);}else if(last==='..'){parts.splice(i,1);up++;}else if(up){parts.splice(i,1);up--;}}// if the path is allowed to go above the root, restore leading ..s
if(allowAboveRoot){for(;up--;up){parts.unshift('..');}}return parts;}// Split a filename into [root, dir, basename, ext], unix version
// posix version
// path.normalize(path)
// posix version
// posix version
// posix version
// path.relative(from, to)
// posix version
function filter$2(xs,f){if(xs.filter)return xs.filter(f);var res=[];for(var i=0;i<xs.length;i++){if(f(xs[i],i,xs))res.push(xs[i]);}return res;}// String.prototype.substr - negative index don't work in IE8
var substr='ab'.substr(-1)==='b'?function(str,start,len){return str.substr(start,len);}:function(str,start,len){if(start<0)start=str.length+start;return str.substr(start,len);};

function Service(json){var service={json:json};Object.keys(json.Resources).map(function(r){service[r]=Resource.bind({json:json,name:r});});return service;}

/**
 * Strings constants that map to CloudFormation pseudoparameter
 * Pseudo.AWS_ACCOUNT_ID
 * Pseudo.AWS_NOTIFICATION_ARNS
 * Pseudo.AWS_NO_VALUE
 * Pseudo.AWS_REGION
 * Pseudo.AWS_STACK_ID
 * Pseudo.AWS_STACK_NAME
 */var Pseudo={AWS_ACCOUNT_ID:'AWS::AccountId',AWS_NOTIFICATION_ARNS:'AWS::NotificationARNs',AWS_NO_VALUE:'AWS::NoValue',AWS_REGION:'AWS::Region',AWS_STACK_ID:'AWS::StackId',AWS_STACK_NAME:'AWS::StackName'};

var resourceList=["AutoScaling","ElasticBeanstalk","CloudFront","CloudWatch","EC2","ElasticLoadBalancing","ElastiCache","IAM","RDS","Route53","S3","SDB","SNS","SQS","CloudFormation","ApiGateway","ApplicationAutoScaling","CertificateManager","CloudTrail","CodeBuild","CodeCommit","CodeDeploy","CodePipeline","Cognito","Config","DataPipeline","DirectoryService","DMS","DynamoDB","ECS","ECR","EFS","ElasticLoadBalancingV2","EMR","Elasticsearch","Events","GameLift","IoT","Kinesis","KinesisAnalytics","KinesisFirehose","KMS","Lambda","Logs","OpsWorks","Redshift","SSM","StepFunctions","WAF","WAFRegional","WorkSpaces"];var AutoScaling={"Resources":{"AutoScalingGroup":{"Name":"AWS::AutoScaling::AutoScalingGroup","Properties":{"AvailabilityZones":{"Array":true,"Type":"String","Required":"Conditional. If you don't specify the VPCZoneIdentifier                                 property, you must specify this property.","UpdateRequires":"No interruption"},"Cooldown":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"DesiredCapacity":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"HealthCheckGracePeriod":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"No interruption"},"HealthCheckType":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"InstanceId":{"Array":false,"Type":"String","Required":"Conditional. You must specify this property if you don't specify the                                 LaunchConfigurationName property.","UpdateRequires":"Replacement"},"LaunchConfigurationName":{"Array":false,"Type":"String","Required":"Conditional; you must specify this property if                                 you don't specify the InstanceId property.","UpdateRequires":"No interruption"},"LoadBalancerNames":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"MaxSize":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"MetricsCollection":{"Array":true,"Type":"aws-properties-as-metricscollection","Required":"No","UpdateRequires":"No interruption"},"MinSize":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"NotificationConfigurations":{"Array":true,"Type":"aws-properties-as-notificationconfigurations","Required":"No","UpdateRequires":"No interruption"},"PlacementGroup":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"Tags":{"Array":true,"Type":"aws-properties-as-tags","Required":"No","UpdateRequires":"No interruption"},"TargetGroupARNs":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"TerminationPolicies":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"VPCZoneIdentifier":{"Array":true,"Type":"String","Required":"Conditional. If you don't specify the                                 AvailabilityZones property, you must specify this                                 property.","UpdateRequires":"Some interruptions"}}},"ScalingPolicy":{"Name":"AWS::AutoScaling::ScalingPolicy","Properties":{"AdjustmentType":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"AutoScalingGroupName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"Cooldown":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"EstimatedInstanceWarmup":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"No interruption"},"MetricAggregationType":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"MinAdjustmentMagnitude":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"No interruption"},"PolicyType":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"ScalingAdjustment":{"Array":false,"Type":"Number","Required":"Conditional. This property is required if the policy type                                 is SimpleScaling. This property is not supported with any other                                 policy type.","UpdateRequires":"No interruption"},"StepAdjustments":{"Array":true,"Type":"aws-properties-autoscaling-scalingpolicy-stepadjustments","Required":"Conditional. This property is required if the policy type                                 is StepScaling. This property is not supported with any other                                 policy type.","UpdateRequires":"No interruption"}}},"LaunchConfiguration":{"Name":"AWS::AutoScaling::LaunchConfiguration","Properties":{"AssociatePublicIpAddress":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"Replacement"},"BlockDeviceMappings":{"Array":true,"Type":"aws-properties-as-launchconfig-blockdev-mapping","Required":"No","UpdateRequires":"Replacement"},"ClassicLinkVPCId":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"ClassicLinkVPCSecurityGroups":{"Array":true,"Type":"String","Required":"Conditional. If you specified the ClassicLinkVPCId                                 property, you must specify this property.","UpdateRequires":"Replacement"},"EbsOptimized":{"Array":false,"Type":"Boolean","Required":"No If this property is not specified, \"false\" is used.","UpdateRequires":"Replacement"},"IamInstanceProfile":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"ImageId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"InstanceId":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"InstanceMonitoring":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"Replacement"},"InstanceType":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"KernelId":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"KeyName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"PlacementTenancy":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"RamDiskId":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"SecurityGroups":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"SpotPrice":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"UserData":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"}}},"ScheduledAction":{"Name":"AWS::AutoScaling::ScheduledAction","Properties":{"AutoScalingGroupName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"DesiredCapacity":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"No interruption"},"EndTime":{"Array":false,"Type":"Date","Required":"No","UpdateRequires":"No interruption"},"MaxSize":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"No interruption"},"MinSize":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"No interruption"},"Recurrence":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"StartTime":{"Array":false,"Type":"Date","Required":"No","UpdateRequires":"No interruption"}}},"LifecycleHook":{"Name":"AWS::AutoScaling::LifecycleHook","Properties":{"AutoScalingGroupName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"DefaultResult":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"HeartbeatTimeout":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"No interruption"},"LifecycleTransition":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"NotificationMetadata":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"NotificationTargetARN":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"RoleARN":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"}}}},"Models":{"aws-properties-as-metricscollection":{"Name":"AutoScalingMetricsCollection","Properties":{"Granularity":{"Array":false,"Type":"String","Required":"Yes"},"Metrics":{"Array":true,"Type":"String","Required":"No"}}},"aws-properties-as-notificationconfigurations":{"Name":"AutoScalingNotificationConfigurations","Properties":{"NotificationTypes":{"Array":true,"Type":"String","Required":"Yes"},"TopicARN":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-as-tags":{"Name":"AutoScalingTagsPropertyType","Properties":{"Key":{"Array":false,"Type":"String","Required":"Yes"},"Value":{"Array":false,"Type":"String","Required":"Yes"},"PropagateAtLaunch":{"Array":false,"Type":"Boolean","Required":"Yes"}}},"aws-properties-autoscaling-scalingpolicy-stepadjustments":{"Name":"AutoScalingScalingPolicyStepAdjustments","Properties":{"MetricIntervalLowerBound":{"Array":false,"Type":"Number","Required":"Conditional. You must specify at least one upper or lower bound."},"MetricIntervalUpperBound":{"Array":false,"Type":"Number","Required":"Conditional. You must specify at least one upper or lower bound."},"ScalingAdjustment":{"Array":false,"Type":"Number","Required":"Yes"}}},"aws-properties-as-launchconfig-blockdev-mapping":{"Name":"AWSCloudFormationAutoScalingBlockDeviceMappingPropertyType","Properties":{"DeviceName":{"Array":false,"Type":"String","Required":"Yes"},"Ebs":{"Array":false,"Type":"aws-properties-as-launchconfig-blockdev-template","Required":"Conditional You can specify either VirtualName or                                 Ebs, but not both."},"NoDevice":{"Array":false,"Type":"Boolean","Required":"No"},"VirtualName":{"Array":false,"Type":"String","Required":"Conditional You can specify either VirtualName or                                 Ebs, but not both."}}},"aws-properties-as-launchconfig-blockdev-template":{"Name":"AWSCloudFormationAutoScalingEBSBlockDevicePropertyType","Properties":{"DeleteOnTermination":{"Array":false,"Type":"Boolean","Required":"No"},"Encrypted":{"Array":false,"Type":"Boolean","Required":"No"},"Iops":{"Array":false,"Type":"Number","Required":"No"},"SnapshotId":{"Array":false,"Type":"String","Required":"Conditional If you specify both SnapshotId and                                 VolumeSize, VolumeSize must be equal or greater than                                 the size of the snapshot."},"VolumeSize":{"Array":false,"Type":"Number","Required":"Conditional If you specify both SnapshotId and                                 VolumeSize, VolumeSize must be equal or greater than                                 the size of the snapshot.","UpdateRequires":"Some interruptions"},"VolumeType":{"Array":false,"Type":"String","Required":"No"}}}}};var ElasticBeanstalk={"Resources":{"Environment":{"Name":"AWS::ElasticBeanstalk::Environment","Properties":{"ApplicationName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"CNAMEPrefix":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"EnvironmentName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"OptionSettings":{"Array":true,"Type":"aws-properties-beanstalk-option-settings","Required":"No","UpdateRequires":"Some interruptions"},"SolutionStackName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"Tags":{"Array":true,"Type":"aws-properties-resource-tags","Required":"No","UpdateRequires":"You can update tags only if you update another\n                                 property that requires that the environment be replaced, such as the\n                                 ApplicationName property."},"TemplateName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Some interruptions"},"Tier":{"Array":false,"Type":"aws-properties-beanstalk-environment-tier","Required":"No","UpdateRequires":"See Elastic Beanstalk Environment Tier Property\n                                    Type"},"VersionLabel":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Some interruptions"}}},"Application":{"Name":"AWS::ElasticBeanstalk::Application","Properties":{"ApplicationName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"}}},"ApplicationVersion":{"Name":"AWS::ElasticBeanstalk::ApplicationVersion","Properties":{"ApplicationName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"SourceBundle":{"Array":false,"Type":"aws-properties-beanstalk-sourcebundle","Required":"Yes","UpdateRequires":"Replacement"}}},"ConfigurationTemplate":{"Name":"AWS::ElasticBeanstalk::ConfigurationTemplate","Properties":{"ApplicationName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"EnvironmentId":{"Array":false,"Type":"String","Required":"Conditional","UpdateRequires":"Replacement"},"OptionSettings":{"Array":true,"Type":"aws-properties-beanstalk-option-settings","Required":"No","UpdateRequires":"Some interruptions"},"SolutionStackName":{"Array":false,"Type":"String","Required":"Conditional","UpdateRequires":"Replacement"},"SourceConfiguration":{"Array":false,"Type":"aws-properties-beanstalk-configurationtemplate-sourceconfiguration","Required":"Conditional","UpdateRequires":"Replacement"}}}},"Models":{"aws-properties-beanstalk-option-settings":{"Name":"ElasticBeanstalkOptionSettingsPropertyType","Properties":{"Namespace":{"Array":false,"Type":"String","Required":"Yes"},"OptionName":{"Array":false,"Type":"String","Required":"Yes"},"Value":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-resource-tags":{"Name":"AWSCloudFormationResourceTagsType","Properties":{"Key":{"Array":false,"Type":"String","Required":"Yes"},"Value":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-beanstalk-environment-tier":{"Name":"ElasticBeanstalkEnvironmentTierPropertyType","Properties":{"Name":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"Type":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"Version":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"}}},"aws-properties-beanstalk-sourcebundle":{"Name":"ElasticBeanstalkSourceBundlePropertyType","Properties":{"S3Bucket":{"Array":false,"Type":"String","Required":"Yes"},"S3Key":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-beanstalk-configurationtemplate-sourceconfiguration":{"Name":"ElasticBeanstalkSourceConfigurationPropertyType","Properties":{"ApplicationName":{"Array":false,"Type":"String","Required":"Yes"},"TemplateName":{"Array":false,"Type":"String","Required":"Yes"}}}}};var CloudFront={"Resources":{"Distribution":{"Name":"AWS::CloudFront::Distribution","Properties":{"DistributionConfig":{"Array":false,"Type":"aws-properties-cloudfront-distributionconfig","Required":"Yes","UpdateRequires":"No interruption"}}}},"Models":{"aws-properties-cloudfront-distributionconfig":{"Name":"CloudFrontDistributionConfig","Properties":{"Aliases":{"Array":true,"Type":"String","Required":"No"},"CacheBehaviors":{"Array":true,"Type":"aws-properties-cloudfront-cachebehavior","Required":"No"},"Comment":{"Array":false,"Type":"String","Required":"No"},"CustomErrorResponses":{"Array":false,"Type":"String","Required":"No"},"DefaultCacheBehavior":{"Array":false,"Type":"aws-properties-cloudfront-defaultcachebehavior","Required":"Yes"},"DefaultRootObject":{"Array":false,"Type":"String","Required":"No"},"Enabled":{"Array":false,"Type":"Boolean","Required":"Yes"},"HttpVersion":{"Array":false,"Type":"String","Required":"No"},"Logging":{"Array":false,"Type":"aws-properties-cloudfront-logging","Required":"No"},"Origins":{"Array":true,"Type":"aws-properties-cloudfront-origin","Required":"Yes"},"PriceClass":{"Array":false,"Type":"String","Required":"No"},"Restrictions":{"Array":false,"Type":"aws-properties-cloudfront-distributionconfig-restrictions","Required":"No"},"ViewerCertificate":{"Array":false,"Type":"aws-properties-cloudfront-distributionconfig-viewercertificate","Required":"No"},"WebACLId":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-cloudfront-cachebehavior":{"Name":"CloudFrontDistributionConfigCacheBehavior","Properties":{"AllowedMethods":{"Array":true,"Type":"String","Required":"No"},"CachedMethods":{"Array":true,"Type":"String","Required":"No"},"Compress":{"Array":false,"Type":"Boolean","Required":"No"},"DefaultTTL":{"Array":false,"Type":"Number","Required":"No"},"ForwardedValues":{"Array":false,"Type":"aws-properties-cloudfront-forwardedvalues","Required":"Yes"},"MaxTTL":{"Array":false,"Type":"Number","Required":"No"},"MinTTL":{"Array":false,"Type":"Number","Required":"No"},"PathPattern":{"Array":false,"Type":"String","Required":"Yes"},"SmoothStreaming":{"Array":false,"Type":"Boolean","Required":"No"},"TargetOriginId":{"Array":false,"Type":"String","Required":"Yes"},"TrustedSigners":{"Array":true,"Type":"String","Required":"No"},"ViewerProtocolPolicy":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-cloudfront-forwardedvalues":{"Name":"CloudFrontForwardedValues","Properties":{"Cookies":{"Array":false,"Type":"aws-properties-cloudfront-forwardedvalues-cookies","Required":"No"},"Headers":{"Array":true,"Type":"String","Required":"No"},"QueryString":{"Array":false,"Type":"Boolean","Required":"Yes"},"QueryStringCacheKeys":{"Array":true,"Type":"String","Required":"No"}}},"aws-properties-cloudfront-forwardedvalues-cookies":{"Name":"CloudFrontForwardedValuesCookies","Properties":{"Forward":{"Array":false,"Type":"String","Required":"Yes"},"WhitelistedNames":{"Array":true,"Type":"String","Required":"Conditional. Required if you specified whitelist for                                 the Forward property."}}},"aws-properties-cloudfront-defaultcachebehavior":{"Name":"CloudFrontDefaultCacheBehavior","Properties":{"AllowedMethods":{"Array":true,"Type":"String","Required":"No"},"CachedMethods":{"Array":true,"Type":"String","Required":"No"},"Compress":{"Array":false,"Type":"Boolean","Required":"No"},"DefaultTTL":{"Array":false,"Type":"Number","Required":"No"},"ForwardedValues":{"Array":false,"Type":"aws-properties-cloudfront-forwardedvalues","Required":"Yes"},"MaxTTL":{"Array":false,"Type":"Number","Required":"No"},"MinTTL":{"Array":false,"Type":"String","Required":"No"},"SmoothStreaming":{"Array":false,"Type":"Boolean","Required":"No"},"TargetOriginId":{"Array":false,"Type":"String","Required":"Yes"},"TrustedSigners":{"Array":true,"Type":"String","Required":"No"},"ViewerProtocolPolicy":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-cloudfront-logging":{"Name":"CloudFrontLogging","Properties":{"Bucket":{"Array":false,"Type":"String","Required":"Yes"},"IncludeCookies":{"Array":false,"Type":"Boolean","Required":"No"},"Prefix":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-cloudfront-origin":{"Name":"CloudFrontDistributionConfigOrigin","Properties":{"CustomOriginConfig":{"Array":false,"Type":"aws-properties-cloudfront-customorigin","Required":"Conditional. You cannot use CustomOriginConfig and                                 S3OriginConfig in the same distribution, but you                                 must specify one or the other."},"DomainName":{"Array":false,"Type":"String","Required":"Yes"},"Id":{"Array":false,"Type":"String","Required":"Yes"},"OriginCustomHeaders":{"Array":true,"Type":"aws-properties-cloudfront-origin-origincustomheader","Required":"No"},"OriginPath":{"Array":false,"Type":"String","Required":"No"},"S3OriginConfig":{"Array":false,"Type":"aws-properties-cloudfront-s3origin","Required":"Conditional. You cannot use S3OriginConfig and                                 CustomOriginConfig in the same distribution, but you                                 must specify one or the other."}}},"aws-properties-cloudfront-customorigin":{"Name":"CloudFrontDistributionConfigOriginCustomOrigin","Properties":{"HTTPPort":{"Array":false,"Type":"Number","Required":"No"},"HTTPSPort":{"Array":false,"Type":"Number","Required":"No"},"OriginProtocolPolicy":{"Array":false,"Type":"String","Required":"Yes"},"OriginSSLProtocols":{"Array":true,"Type":"String","Required":"No"}}},"aws-properties-cloudfront-origin-origincustomheader":{"Name":"CloudFrontDistributionConfigOriginOriginCustomHeader","Properties":{"HeaderName":{"Array":false,"Type":"String","Required":"Yes"},"HeaderValue":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-cloudfront-s3origin":{"Name":"CloudFrontDistributionConfigOriginS3Origin","Properties":{"OriginAccessIdentity":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-cloudfront-distributionconfig-restrictions":{"Name":"CloudFrontDistributionConfigurationRestrictions","Properties":{"GeoRestriction":{"Array":false,"Type":"aws-properties-cloudfront-distributionconfig-restrictions-georestriction","Required":"Yes"}}},"aws-properties-cloudfront-distributionconfig-restrictions-georestriction":{"Name":"CloudFrontDistributionConfigRestrictionsGeoRestriction","Properties":{"Locations":{"Array":true,"Type":"String","Required":"Conditional. Required if you specified blacklist or                                 whitelist for the RestrictionType property."},"RestrictionType":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-cloudfront-distributionconfig-viewercertificate":{"Name":"CloudFrontDistributionConfigurationViewerCertificate","Properties":{"AcmCertificateArn":{"Array":false,"Type":"String","Required":"Conditional. You must specify one of the following properties: AcmCertificateArn, CloudFrontDefaultCertificate, or IamCertificateId."},"CloudFrontDefaultCertificate":{"Array":false,"Type":"Boolean","Required":"Conditional. You must specify one of the following properties: AcmCertificateArn, CloudFrontDefaultCertificate, or IamCertificateId."},"IamCertificateId":{"Array":false,"Type":"String","Required":"Conditional. You must specify one of the following properties: AcmCertificateArn, CloudFrontDefaultCertificate, or IamCertificateId."},"MinimumProtocolVersion":{"Array":false,"Type":"String","Required":"No"},"SslSupportMethod":{"Array":false,"Type":"String","Required":"Conditional. Required if you specified the                                 IamCertificateId or AcmCertificateArn                                 property."}}}}};var CloudWatch={"Resources":{"Dashboard":{"Name":"AWS::CloudWatch::Dashboard","Properties":{"DashboardName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"DashboardBody":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"}}},"Alarm":{"Name":"AWS::CloudWatch::Alarm","Properties":{"ActionsEnabled":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"No interruption"},"AlarmActions":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"AlarmDescription":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"AlarmName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"ComparisonOperator":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"Dimensions":{"Array":true,"Type":"aws-properties-cw-dimension","Required":"No","UpdateRequires":"No interruption"},"EvaluateLowSampleCountPercentile":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"EvaluationPeriods":{"Array":false,"Type":"Number","Required":"Yes","UpdateRequires":"No interruption"},"ExtendedStatistic":{"Array":false,"Type":"String","Required":"Conditional. You must specify either the                                 ExtendedStatistic or the Statistic property.","UpdateRequires":"No interruption"},"InsufficientDataActions":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"MetricName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"Namespace":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"OKActions":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"Period":{"Array":false,"Type":"Number","Required":"Yes","UpdateRequires":"No interruption"},"Statistic":{"Array":false,"Type":"String","Required":"Conditional. You must specify either the                                 ExtendedStatistic or the Statistic property.","UpdateRequires":"No interruption"},"Threshold":{"Array":false,"Type":"Number","Required":"Yes","UpdateRequires":"No interruption"},"TreatMissingData":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"Unit":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"}}}},"Models":{"aws-properties-cw-dimension":{"Name":"CloudWatchMetricDimensionPropertyType","Properties":{"Name":{"Array":false,"Type":"String","Required":"Yes"},"Value":{"Array":false,"Type":"String","Required":"Yes"}}}}};var EC2={"Resources":{"VolumeAttachment":{"Name":"AWS::EC2::VolumeAttachment","Properties":{"Device":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Updates are not supported."},"InstanceId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Updates are not supported."},"VolumeId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Updates are not supported."}}},"EIP":{"Name":"AWS::EC2::EIP","Properties":{"InstanceId":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"Domain":{"Array":false,"Type":"String","Required":"Conditional. Required when allocating an address to a VPC","UpdateRequires":"Replacement"}}},"EIPAssociation":{"Name":"AWS::EC2::EIPAssociation","Properties":{"AllocationId":{"Array":false,"Type":"String","Required":"Conditional. Required for  EC2-VPC.","UpdateRequires":"Replacement if you also change the InstanceId or\n                                 NetworkInterfaceId property. If not, update requires No interruption."},"EIP":{"Array":false,"Type":"String","Required":"Conditional. Required for EC2-Classic.","UpdateRequires":"Replacement if you also change the InstanceId or\n                                 NetworkInterfaceId property. If not, update requires No interruption."},"InstanceId":{"Array":false,"Type":"String","Required":"Conditional. If you specify the EIP                                 property, you must specify this property. If you specify the AllocationId                                 property, you must specify this property or the NetworkInterfaceId                                 property.","UpdateRequires":"Replacement if you also change the AllocationId or\n                                 EIP property. If not, update requires No interruption."},"NetworkInterfaceId":{"Array":false,"Type":"String","Required":"Conditional. If you specify the                                 AllocationId property, you must specify this property or the                                 InstanceId property.","UpdateRequires":"Replacement if you also change the AllocationId or\n                                 EIP property. If not, update requires No interruption."},"PrivateIpAddress":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"}}},"SecurityGroupIngress":{"Name":"AWS::EC2::SecurityGroupIngress","Properties":{"CidrIp":{"Array":false,"Type":"String","Required":"Conditional. You must specify a source security group                                 (SourceSecurityGroupName or SourceSecurityGroupId) or a CIDR                                 range (CidrIp or CidrIpv6).","UpdateRequires":"Replacement"},"CidrIpv6":{"Array":false,"Type":"String","Required":"Conditional. You must specify a source security group                                 (SourceSecurityGroupName or SourceSecurityGroupId) or a CIDR                                 range (CidrIp or CidrIpv6).","UpdateRequires":"Replacement"},"FromPort":{"Array":false,"Type":"Number","Required":"Yes, for ICMP and any protocol that uses ports.","UpdateRequires":"Replacement"},"GroupId":{"Array":false,"Type":"String","Required":"Conditional. You must specify the GroupName                                 property or the GroupId property. For security groups that                                 are in a VPC, you must use the GroupId property. For example,                                 EC2-VPC                                 accounts must use the GroupId property.","UpdateRequires":"Replacement"},"GroupName":{"Array":false,"Type":"String","Required":"Conditional. You must specify the GroupName                                 property or the GroupId property. For security groups that                                 are in a VPC, you must use the GroupId property. For example,                                 EC2-VPC                                 accounts must use the GroupId property.","UpdateRequires":"Replacement"},"IpProtocol":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"SourceSecurityGroupId":{"Array":false,"Type":"String","Required":"Conditional. You must specify a source security group                                 (SourceSecurityGroupName or SourceSecurityGroupId) or a CIDR                                 range (CidrIp or CidrIpv6).","UpdateRequires":"Replacement"},"SourceSecurityGroupName":{"Array":false,"Type":"String","Required":"Conditional. You must specify a source security group                                 (SourceSecurityGroupName or SourceSecurityGroupId) or a CIDR                                 range (CidrIp or CidrIpv6).","UpdateRequires":"Replacement"},"SourceSecurityGroupOwnerId":{"Array":false,"Type":"String","Required":"Conditional. If you specify                                 SourceSecurityGroupName and that security group is owned                                 by a different account than the account creating the stack, you must specify the                                 SourceSecurityGroupOwnerId; otherwise, this property is                                 optional.","UpdateRequires":"Replacement"},"ToPort":{"Array":false,"Type":"Number","Required":"Yes, for ICMP and any protocol that uses ports.","UpdateRequires":"Replacement"}}},"Instance":{"Name":"AWS::EC2::Instance","Properties":{"Affinity":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"AvailabilityZone":{"Array":false,"Type":"String","Required":"No. If not specified, an Availability Zone will be automatically                                 chosen for you based on the load balancing criteria for the region.","UpdateRequires":"Replacement"},"BlockDeviceMappings":{"Array":true,"Type":"aws-properties-ec2-blockdev-mapping","Required":"No","UpdateRequires":"Replacement. If you change only the DeleteOnTermination\n                                 property for one or more block devices, update requires No interruption."},"DisableApiTermination":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"No interruption"},"EbsOptimized":{"Array":false,"Type":"Boolean","Required":"No. By default, AWS CloudFormation specifies false.","UpdateRequires":"Replacement for instance store-backed instances"},"HostId":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"IamInstanceProfile":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"ImageId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"InstanceInitiatedShutdownBehavior":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"InstanceType":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement for instance store-backed instances"},"Ipv6AddressCount":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"Replacement"},"Ipv6Addresses":{"Array":true,"Type":"aws-properties-ec2-networkinterface-ipv6addresses","Required":"No","UpdateRequires":"Replacement"},"KernelId":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement for instance store-backed instances"},"KeyName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"Monitoring":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"No interruption"},"NetworkInterfaces":{"Array":true,"Type":"aws-properties-ec2-network-iface-embedded","Required":"No","UpdateRequires":"Replacement"},"PlacementGroupName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"PrivateIpAddress":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"RamdiskId":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement for instance store-backed instances"},"SecurityGroupIds":{"Array":true,"Type":"String","Required":"Conditional. Required for VPC security                                 groups.","UpdateRequires":"Replacement for instances that are not in a VPC."},"SecurityGroups":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"Replacement."},"SourceDestCheck":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"No interruption"},"SsmAssociations":{"Array":true,"Type":"aws-properties-ec2-instance-ssmassociations","Required":"No","UpdateRequires":"No interruption"},"SubnetId":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"Tags":{"Array":true,"Type":"aws-properties-resource-tags","Required":"No","UpdateRequires":"No interruption."},"Tenancy":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement for all other changes."},"UserData":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement for instance store-backed instances."},"Volumes":{"Array":true,"Type":"aws-properties-ec2-mount-point","Required":"No","UpdateRequires":"No interruption"},"AdditionalInfo":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement for instance store-backed instances"}}},"Volume":{"Name":"AWS::EC2::Volume","Properties":{"AutoEnableIO":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"No interruption"},"AvailabilityZone":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Updates are not supported."},"Encrypted":{"Array":false,"Type":"Boolean","Required":"Conditional. If you specify the KmsKeyId property, you                                 must enable encryption.","UpdateRequires":"Updates are not supported."},"Iops":{"Array":false,"Type":"Number","Required":"Conditional. Required when the volume type is                                 io1; not used with other volume types.","UpdateRequires":"No interruption"},"KmsKeyId":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Updates are not supported."},"Size":{"Array":false,"Type":"Number","Required":"Conditional. If you don't specify a value for the                                 SnapshotId property, you must specify this property.","UpdateRequires":"No interruption"},"SnapshotId":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Updates are not supported."},"Tags":{"Array":true,"Type":"aws-properties-resource-tags","Required":"No","UpdateRequires":"No interruption"},"VolumeType":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"}}},"SecurityGroup":{"Name":"AWS::EC2::SecurityGroup","Properties":{"GroupName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"GroupDescription":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"SecurityGroupEgress":{"Array":true,"Type":"aws-properties-ec2-security-group-rule","Required":"No","UpdateRequires":"No interruption"},"SecurityGroupIngress":{"Array":true,"Type":"aws-properties-ec2-security-group-rule","Required":"No","UpdateRequires":"No interruption"},"Tags":{"Array":true,"Type":"aws-properties-resource-tags","Required":"No","UpdateRequires":"No interruption"},"VpcId":{"Array":false,"Type":"String","Required":"Yes, for VPC security groups without a default                                 VPC","UpdateRequires":"Replacement"}}},"CustomerGateway":{"Name":"AWS::EC2::CustomerGateway","Properties":{"BgpAsn":{"Array":false,"Type":"Number","Required":"Yes","UpdateRequires":"Replacement"},"IpAddress":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"Tags":{"Array":true,"Type":"aws-properties-resource-tags","Required":"No","UpdateRequires":"No interruption."},"Type":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"}}},"DHCPOptions":{"Name":"AWS::EC2::DHCPOptions","Properties":{"DomainName":{"Array":false,"Type":"String","Required":"Conditional; see note.","UpdateRequires":"Replacement"},"DomainNameServers":{"Array":true,"Type":"String","Required":"Conditional; see note.","UpdateRequires":"Replacement"},"NetbiosNameServers":{"Array":true,"Type":"String","Required":"Conditional; see note.","UpdateRequires":"Replacement"},"NetbiosNodeType":{"Array":true,"Type":"Number","Required":"Required if NetBiosNameServers is specified;                                 optional otherwise.","UpdateRequires":"Replacement"},"NtpServers":{"Array":true,"Type":"String","Required":"Conditional; see note.","UpdateRequires":"Replacement"},"Tags":{"Array":true,"Type":"aws-properties-resource-tags","Required":"No","UpdateRequires":"No interruption."}}},"Host":{"Name":"AWS::EC2::Host","Properties":{"AutoPlacement":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"AvailabilityZone":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"InstanceType":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"}}},"EgressOnlyInternetGateway":{"Name":"AWS::EC2::EgressOnlyInternetGateway","Properties":{"VpcId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"}}},"FlowLog":{"Name":"AWS::EC2::FlowLog","Properties":{"DeliverLogsPermissionArn":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"LogGroupName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"ResourceId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"ResourceType":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"TrafficType":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"}}},"NatGateway":{"Name":"AWS::EC2::NatGateway","Properties":{"AllocationId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"SubnetId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"}}},"InternetGateway":{"Name":"AWS::EC2::InternetGateway","Properties":{"Tags":{"Array":true,"Type":"aws-properties-resource-tags","Required":"No","UpdateRequires":"No interruption"}}},"NetworkAclEntry":{"Name":"AWS::EC2::NetworkAclEntry","Properties":{"CidrBlock":{"Array":false,"Type":"String","Required":"Conditional. You must specify the CidrBlock or Ipv6CidrBlock property.","UpdateRequires":"No interruption"},"Egress":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"Replacement."},"Icmp":{"Array":false,"Type":"aws-properties-ec2-networkaclentry-icmp","Required":"Conditional required if specifying 1 (ICMP) for the protocol                                 parameter.","UpdateRequires":"No interruption"},"Ipv6CidrBlock":{"Array":false,"Type":"String","Required":"Conditional. You must specify the CidrBlock or Ipv6CidrBlock property.","UpdateRequires":"No interruption"},"NetworkAclId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement."},"PortRange":{"Array":false,"Type":"aws-properties-ec2-networkaclentry-portrange","Required":"Conditional Required if specifying 6 (TCP) or 17 (UDP) for the protocol                                 parameter.","UpdateRequires":"No interruption"},"Protocol":{"Array":false,"Type":"Number","Required":"Yes","UpdateRequires":"No interruption"},"RuleAction":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"RuleNumber":{"Array":false,"Type":"Number","Required":"Yes","UpdateRequires":"Replacement."}}},"NetworkAcl":{"Name":"AWS::EC2::NetworkAcl","Properties":{"Tags":{"Array":true,"Type":"aws-properties-resource-tags","Required":"No","UpdateRequires":"No interruption."},"VpcId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"}}},"NetworkInterfaceAttachment":{"Name":"AWS::EC2::NetworkInterfaceAttachment","Properties":{"DeleteOnTermination":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"No interruption"},"DeviceIndex":{"Array":false,"Type":"String","Required":"Yes.","UpdateRequires":"No interruption"},"InstanceId":{"Array":false,"Type":"String","Required":"Yes.","UpdateRequires":"No interruption"},"NetworkInterfaceId":{"Array":false,"Type":"String","Required":"Yes.","UpdateRequires":"No interruption"}}},"NetworkInterface":{"Name":"AWS::EC2::NetworkInterface","Properties":{"GroupSet":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"Ipv6AddressCount":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"No interruption"},"Ipv6Addresses":{"Array":true,"Type":"aws-properties-ec2-networkinterface-ipv6addresses","Required":"No","UpdateRequires":"No interruption"},"PrivateIpAddress":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement."},"PrivateIpAddresses":{"Array":true,"Type":"aws-properties-ec2-network-interface-privateipspec","Required":"No","UpdateRequires":"Replacement if you change the primary private IP address. If not,\n                                 update requires No interruption."},"SecondaryPrivateIpAddressCount":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"No interruption."},"SourceDestCheck":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"No interruption."},"SubnetId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement."},"Tags":{"Array":true,"Type":"aws-properties-resource-tags","Required":"No","UpdateRequires":"No interruption."}}},"PlacementGroup":{"Name":"AWS::EC2::PlacementGroup","Properties":{"Strategy":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"}}},"RouteTable":{"Name":"AWS::EC2::RouteTable","Properties":{"VpcId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"Tags":{"Array":true,"Type":"aws-properties-resource-tags","Required":"No","UpdateRequires":"No interruption."}}},"Route":{"Name":"AWS::EC2::Route","Properties":{"DestinationCidrBlock":{"Array":false,"Type":"String","Required":"Conditional. You must specify the DestinationCidrBlock or DestinationIpv6CidrBlock property.","UpdateRequires":"Replacement"},"DestinationIpv6CidrBlock":{"Array":false,"Type":"String","Required":"Conditional. You must specify the DestinationCidrBlock or DestinationIpv6CidrBlock property.","UpdateRequires":"Replacement"},"EgressOnlyInternetGatewayId":{"Array":false,"Type":"String","Required":"Conditional. You must specify only one of the following properties:                                 EgressOnlyInternetGatewayId, GatewayId, InstanceId, NatGatewayId,                                 NetworkInterfaceId, or VpcPeeringConnectionId. For an example that uses this property, see                                  Amazon EC2 Route with Egress-Only Internet Gateway.","UpdateRequires":"No interruption"},"GatewayId":{"Array":false,"Type":"String","Required":"Conditional. You must specify only one of the following properties:                                 EgressOnlyInternetGatewayId, GatewayId, InstanceId, NatGatewayId,                                 NetworkInterfaceId, or VpcPeeringConnectionId.","UpdateRequires":"No interruption"},"InstanceId":{"Array":false,"Type":"String","Required":"Conditional. You must specify only one of the following properties:                                 EgressOnlyInternetGatewayId, GatewayId, InstanceId, NatGatewayId,                                 NetworkInterfaceId, or VpcPeeringConnectionId.","UpdateRequires":"No interruption"},"NatGatewayId":{"Array":false,"Type":"String","Required":"Conditional. You must specify only one of the following properties:                                 EgressOnlyInternetGatewayId, GatewayId, InstanceId, NatGatewayId,                                 NetworkInterfaceId, or VpcPeeringConnectionId.","UpdateRequires":"No interruption"},"NetworkInterfaceId":{"Array":false,"Type":"String","Required":"Conditional. You must specify only one of the following properties:                                 EgressOnlyInternetGatewayId, GatewayId, InstanceId, NatGatewayId,                                 NetworkInterfaceId, or VpcPeeringConnectionId.","UpdateRequires":"No interruption"},"RouteTableId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"VpcPeeringConnectionId":{"Array":false,"Type":"String","Required":"Conditional. You must specify only one of the following properties:                                 EgressOnlyInternetGatewayId, GatewayId, InstanceId, NatGatewayId,                                 NetworkInterfaceId, or VpcPeeringConnectionId.","UpdateRequires":"No interruption"}}},"SubnetNetworkAclAssociation":{"Name":"AWS::EC2::SubnetNetworkAclAssociation","Properties":{"SubnetId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"NetworkAclId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"}}},"SpotFleet":{"Name":"AWS::EC2::SpotFleet","Properties":{"SpotFleetRequestConfigData":{"Array":false,"Type":"aws-properties-ec2-spotfleet-spotfleetrequestconfigdata","Required":"Yes","UpdateRequires":"Some interruptions"}}},"SubnetRouteTableAssociation":{"Name":"AWS::EC2::SubnetRouteTableAssociation","Properties":{"RouteTableId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption. However, the physical ID changes when the route table ID is changed."},"SubnetId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"}}},"SecurityGroupEgress":{"Name":"AWS::EC2::SecurityGroupEgress","Properties":{"CidrIp":{"Array":false,"Type":"String","Required":"Conditional. You must specify a destination security group                                 (DestinationPrefixListId or DestinationSecurityGroupId) or a                                 CIDR range (CidrIp or CidrIpv6).","UpdateRequires":"Replacement"},"CidrIpv6":{"Array":false,"Type":"String","Required":"Conditional. You must specify a destination security group                                 (DestinationPrefixListId or DestinationSecurityGroupId) or a                                 CIDR range (CidrIp or CidrIpv6).","UpdateRequires":"Replacement"},"DestinationPrefixListId":{"Array":false,"Type":"String","Required":"Conditional. You must specify a destination security group                                 (DestinationPrefixListId or DestinationSecurityGroupId) or a                                 CIDR range (CidrIp or CidrIpv6).","UpdateRequires":"Replacement"},"DestinationSecurityGroupId":{"Array":false,"Type":"String","Required":"Conditional. You must specify a destination security group                                 (DestinationPrefixListId or DestinationSecurityGroupId) or a                                 CIDR range (CidrIp or CidrIpv6).","UpdateRequires":"Replacement"},"FromPort":{"Array":false,"Type":"Number","Required":"Yes","UpdateRequires":"Replacement"},"GroupId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"IpProtocol":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"ToPort":{"Array":false,"Type":"Number","Required":"Yes","UpdateRequires":"Replacement"}}},"SubnetCidrBlock":{"Name":"AWS::EC2::SubnetCidrBlock","Properties":{"Ipv6CidrBlock":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"SubnetId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"}}},"VPCDHCPOptionsAssociation":{"Name":"AWS::EC2::VPCDHCPOptionsAssociation","Properties":{"DhcpOptionsId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"VpcId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"}}},"Subnet":{"Name":"AWS::EC2::Subnet","Properties":{"AvailabilityZone":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"CidrBlock":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"MapPublicIpOnLaunch":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"No interruption."},"Tags":{"Array":true,"Type":"aws-properties-resource-tags","Required":"No","UpdateRequires":"No interruption."},"VpcId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"}}},"VPCGatewayAttachment":{"Name":"AWS::EC2::VPCGatewayAttachment","Properties":{"InternetGatewayId":{"Array":false,"Type":"String","Required":"Conditional You must specify either InternetGatewayId or                                 VpnGatewayId, but not both.","UpdateRequires":"No interruption"},"VpcId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"VpnGatewayId":{"Array":false,"Type":"String","Required":"Conditional You must specify either                                 InternetGatewayId or VpnGatewayId, but not both.","UpdateRequires":"No interruption"}}},"VPCCidrBlock":{"Name":"AWS::EC2::VPCCidrBlock","Properties":{"AmazonProvidedIpv6CidrBlock":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"Replacement"},"VpcId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"}}},"VPCPeeringConnection":{"Name":"AWS::EC2::VPCPeeringConnection","Properties":{"PeerVpcId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"Tags":{"Array":true,"Type":"aws-properties-resource-tags","Required":"No","UpdateRequires":"No interruption."},"VpcId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"PeerOwnerId":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"PeerRoleArn":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"}}},"VPC":{"Name":"AWS::EC2::VPC","Properties":{"CidrBlock":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"EnableDnsSupport":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"No interruption"},"EnableDnsHostnames":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"No interruption"},"InstanceTenancy":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"Tags":{"Array":true,"Type":"aws-properties-resource-tags","Required":"No","UpdateRequires":"No interruption."}}},"VPNConnectionRoute":{"Name":"AWS::EC2::VPNConnectionRoute","Properties":{"DestinationCidrBlock":{"Array":false,"Type":"String","Required":"Yes.","UpdateRequires":"Replacement"},"VpnConnectionId":{"Array":false,"Type":"String","Required":"Yes.","UpdateRequires":"Replacement"}}},"VPCEndpoint":{"Name":"AWS::EC2::VPCEndpoint","Properties":{"PolicyDocument":{"Array":false,"Type":"Object","Required":"No","UpdateRequires":"No interruption"},"RouteTableIds":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"ServiceName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"VpcId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"}}},"VPNConnection":{"Name":"AWS::EC2::VPNConnection","Properties":{"Type":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"CustomerGatewayId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"StaticRoutesOnly":{"Array":false,"Type":"Boolean","Required":"Conditional. If you are creating a VPN                                 connection for a device that does not support Border Gateway Protocol (BGP), you                                 must specify true.","UpdateRequires":"Replacement"},"Tags":{"Array":true,"Type":"aws-properties-resource-tags","Required":"No","UpdateRequires":"No interruption"},"VpnGatewayId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"}}},"VPNGateway":{"Name":"AWS::EC2::VPNGateway","Properties":{"Type":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"Tags":{"Array":true,"Type":"aws-properties-resource-tags","Required":"No","UpdateRequires":"No interruption."}}},"VPNGatewayRoutePropagation":{"Name":"AWS::EC2::VPNGatewayRoutePropagation","Properties":{"RouteTableIds":{"Array":true,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"VpnGatewayId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"}}}},"Models":{"aws-properties-ec2-blockdev-mapping":{"Name":"AmazonEC2BlockDeviceMappingProperty","Properties":{"DeviceName":{"Array":false,"Type":"String","Required":"Yes"},"Ebs":{"Array":false,"Type":"aws-properties-ec2-blockdev-template","Required":"Conditional You can specify either VirtualName or                                 Ebs, but not both."},"NoDevice":{"Array":false,"Type":"Boolean","Required":"No"},"VirtualName":{"Array":false,"Type":"String","Required":"Conditional You can specify either VirtualName or                                 Ebs, but not both."}}},"aws-properties-ec2-blockdev-template":{"Name":"AmazonElasticBlockStoreBlockDeviceProperty","Properties":{"DeleteOnTermination":{"Array":false,"Type":"Boolean","Required":"No"},"Encrypted":{"Array":false,"Type":"Boolean","Required":"No"},"Iops":{"Array":false,"Type":"Number","Required":"Conditional Required when the volume type is                                 io1; not used with other volume types."},"SnapshotId":{"Array":false,"Type":"String","Required":"Conditional If you specify both SnapshotId and                                 VolumeSize, VolumeSize must be equal or greater than                                 the size of the snapshot."},"VolumeSize":{"Array":false,"Type":"String","Required":"Conditional If you specify both SnapshotId and                                 VolumeSize, VolumeSize must be equal or greater than                                 the size of the snapshot.","UpdateRequires":"Some interruptions"},"VolumeType":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-ec2-networkinterface-ipv6addresses":{"Name":"EC2NetworkInterfaceIpv6Addresses","Properties":{"Ipv6Address":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-ec2-network-iface-embedded":{"Name":"EC2NetworkInterfaceEmbeddedPropertyType","Properties":{"AssociatePublicIpAddress":{"Array":false,"Type":"Boolean","Required":"No"},"DeleteOnTermination":{"Array":false,"Type":"Boolean","Required":"No"},"DeviceIndex":{"Array":false,"Type":"String","Required":"Yes"},"GroupSet":{"Array":true,"Type":"String","Required":"No"},"NetworkInterfaceId":{"Array":false,"Type":"String","Required":"Conditional. If you don't specify the SubnetId property, you must specify this property."},"Ipv6AddressCount":{"Array":false,"Type":"Number","Required":"No"},"Ipv6Addresses":{"Array":true,"Type":"aws-properties-ec2-networkinterface-ipv6addresses","Required":"No"},"PrivateIpAddress":{"Array":false,"Type":"String","Required":"No"},"PrivateIpAddresses":{"Array":true,"Type":"aws-properties-ec2-network-interface-privateipspec","Required":"No"},"SecondaryPrivateIpAddressCount":{"Array":false,"Type":"Number","Required":"No"},"SubnetId":{"Array":false,"Type":"String","Required":"Conditional. If you don't specify the                                 NetworkInterfaceId property, you must specify this                                 property."}}},"aws-properties-ec2-network-interface-privateipspec":{"Name":"EC2NetworkInterfacePrivateIPSpecification","Properties":{"PrivateIpAddress":{"Array":false,"Type":"String","Required":"Yes"},"Primary":{"Array":false,"Type":"Boolean","Required":"Yes"}}},"aws-properties-ec2-instance-ssmassociations":{"Name":"AmazonEC2InstanceSsmAssociations","Properties":{"AssociationParameters":{"Array":true,"Type":"aws-properties-ec2-instance-ssmassociations-associationparameters","Required":"No"},"DocumentName":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-ec2-instance-ssmassociations-associationparameters":{"Name":"AmazonEC2InstanceSsmAssociationsAssociationParameters","Properties":{"Key":{"Array":false,"Type":"String","Required":"Yes"},"Value":{"Array":true,"Type":"String","Required":"Yes"}}},"aws-properties-resource-tags":{"Name":"AWSCloudFormationResourceTagsType","Properties":{"Key":{"Array":false,"Type":"String","Required":"Yes"},"Value":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-ec2-mount-point":{"Name":"EC2MountPointPropertyType","Properties":{"Device":{"Array":false,"Type":"String","Required":"Yes"},"VolumeId":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-ec2-security-group-rule":{"Name":"EC2SecurityGroupRulePropertyType","Properties":{"CidrIp":{"Array":false,"Type":"String","Required":"Conditional. You must specify only one of the following properties:                                 CidrIp, CidrIpv6,                                 DestinationPrefixListId, DestinationSecurityGroupId,                                 or SourceSecurityGroupId."},"CidrIpv6":{"Array":false,"Type":"String","Required":"Conditional. You must specify only one of the following properties:                                 CidrIp, CidrIpv6,                                 DestinationPrefixListId, DestinationSecurityGroupId,                                 or SourceSecurityGroupId."},"DestinationPrefixListId":{"Array":false,"Type":"String","Required":"Conditional. You must specify only one of the following properties:                                 CidrIp, CidrIpv6,                                 DestinationPrefixListId, DestinationSecurityGroupId,                                 or SourceSecurityGroupId."},"DestinationSecurityGroupId":{"Array":false,"Type":"String","Required":"Conditional. You must specify only one of the following properties:                                 CidrIp, CidrIpv6,                                 DestinationPrefixListId, DestinationSecurityGroupId,                                 or SourceSecurityGroupId."},"FromPort":{"Array":false,"Type":"Number","Required":"No"},"IpProtocol":{"Array":false,"Type":"String","Required":"Yes"},"SourceSecurityGroupId":{"Array":false,"Type":"String","Required":"Conditional. You must specify only one of the following properties:                                 CidrIp, CidrIpv6,                                 DestinationPrefixListId, DestinationSecurityGroupId,                                 or SourceSecurityGroupId."},"SourceSecurityGroupName":{"Array":false,"Type":"String","Required":"Conditional. If you specify CidrIp, do not                                 specify SourceSecurityGroupName."},"SourceSecurityGroupOwnerId":{"Array":false,"Type":"String","Required":"Conditional. If you specify                                 SourceSecurityGroupName and that security group is owned                                 by a different account than the account creating the stack, you must specify the                                 SourceSecurityGroupOwnerId; otherwise, this property is                                 optional."},"ToPort":{"Array":false,"Type":"Number","Required":"No"}}},"aws-properties-ec2-networkaclentry-icmp":{"Name":"EC2NetworkAclEntryIcmp","Properties":{"Code":{"Array":false,"Type":"Number","Required":"Conditional. Required if you specify 1 (ICMP) for the CreateNetworkAclEntry protocol parameter."},"Type":{"Array":false,"Type":"Number","Required":"Conditional. Required if you specify 1 (ICMP) for the CreateNetworkAclEntry protocol parameter."}}},"aws-properties-ec2-networkaclentry-portrange":{"Name":"EC2NetworkAclEntryPortRange","Properties":{"From":{"Array":false,"Type":"Number","Required":"Conditional. Required if you specify 6 (TCP) or 17 (UDP) for the protocol parameter."},"To":{"Array":false,"Type":"Number","Required":"Conditional. Required if you specify 6 (TCP) or 17 (UDP) for the protocol parameter."}}},"aws-properties-ec2-spotfleet-spotfleetrequestconfigdata":{"Name":"AmazonEC2SpotFleetSpotFleetRequestConfigData","Properties":{"AllocationStrategy":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"ExcessCapacityTerminationPolicy":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"IamFleetRole":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"LaunchSpecifications":{"Array":true,"Type":"aws-properties-ec2-spotfleet-spotfleetrequestconfigdata-launchspecifications","Required":"Yes","UpdateRequires":"Replacement"},"SpotPrice":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"TargetCapacity":{"Array":false,"Type":"Number","Required":"Yes","UpdateRequires":"No interruption"},"TerminateInstancesWithExpiration":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"Replacement"},"ValidFrom":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"ValidUntil":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"}}},"aws-properties-ec2-spotfleet-spotfleetrequestconfigdata-launchspecifications":{"Name":"AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecifications","Properties":{"BlockDeviceMappings":{"Array":true,"Type":"aws-properties-ec2-spotfleet-spotfleetrequestconfigdata-launchspecifications-blockdevicemappings","Required":"No"},"EbsOptimized":{"Array":false,"Type":"Boolean","Required":"No"},"IamInstanceProfile":{"Array":false,"Type":"aws-properties-ec2-spotfleet-spotfleetrequestconfigdata-launchspecifications-iaminstanceprofile","Required":"No"},"ImageId":{"Array":false,"Type":"String","Required":"Yes"},"InstanceType":{"Array":false,"Type":"String","Required":"Yes"},"KernelId":{"Array":false,"Type":"String","Required":"No"},"KeyName":{"Array":false,"Type":"String","Required":"No"},"Monitoring":{"Array":false,"Type":"aws-properties-ec2-spotfleet-spotfleetrequestconfigdata-launchspecifications-monitoring","Required":"No"},"NetworkInterfaces":{"Array":true,"Type":"aws-properties-ec2-spotfleet-spotfleetrequestconfigdata-launchspecifications-networkinterfaces","Required":"No"},"Placement":{"Array":false,"Type":"aws-properties-ec2-spotfleet-spotfleetrequestconfigdata-launchspecifications-placement","Required":"No"},"RamdiskId":{"Array":false,"Type":"String","Required":"No"},"SecurityGroups":{"Array":true,"Type":"aws-properties-ec2-spotfleet-spotfleetrequestconfigdata-launchspecifications-securitygroups","Required":"No"},"SpotPrice":{"Array":false,"Type":"String","Required":"No"},"SubnetId":{"Array":false,"Type":"String","Required":"No"},"UserData":{"Array":false,"Type":"String","Required":"No"},"WeightedCapacity":{"Array":false,"Type":"Number","Required":"No"}}},"aws-properties-ec2-spotfleet-spotfleetrequestconfigdata-launchspecifications-blockdevicemappings":{"Name":"AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappings","Properties":{"DeviceName":{"Array":false,"Type":"String","Required":"Yes"},"Ebs":{"Array":false,"Type":"aws-properties-ec2-spotfleet-spotfleetrequestconfigdata-launchspecifications-blockdevicemappings-ebs","Required":"Conditional You can specify either the VirtualName or                                 Ebs, but not both."},"NoDevice":{"Array":false,"Type":"Boolean","Required":"No"},"VirtualName":{"Array":false,"Type":"String","Required":"Conditional You can specify either the VirtualName or                                 Ebs, but not both."}}},"aws-properties-ec2-spotfleet-spotfleetrequestconfigdata-launchspecifications-blockdevicemappings-ebs":{"Name":"AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsBlockDeviceMappingsEbs","Properties":{"DeleteOnTermination":{"Array":false,"Type":"Boolean","Required":"No"},"Encrypted":{"Array":false,"Type":"Boolean","Required":"No"},"Iops":{"Array":false,"Type":"Number","Required":"No"},"SnapshotId":{"Array":false,"Type":"String","Required":"No"},"VolumeSize":{"Array":false,"Type":"Number","Required":"No"},"VolumeType":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-ec2-spotfleet-spotfleetrequestconfigdata-launchspecifications-iaminstanceprofile":{"Name":"AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsIamInstanceProfile","Properties":{"Arn":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-ec2-spotfleet-spotfleetrequestconfigdata-launchspecifications-monitoring":{"Name":"AmazonEC2SpotFleetSpotFleetRequestConfigDataLaunchSpecificationsMonitoring","Properties":{"Enabled":{"Array":false,"Type":"Boolean","Required":"No"}}},"aws-properties-ec2-spotfleet-spotfleetrequestconfigdata-launchspecifications-networkinterfaces":{"Name":"AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfaces","Properties":{"AssociatePublicIpAddress":{"Array":false,"Type":"Boolean","Required":"No"},"DeleteOnTermination":{"Array":false,"Type":"Boolean","Required":"No"},"DeviceIndex":{"Array":false,"Type":"Number","Required":"No"},"Groups":{"Array":true,"Type":"String","Required":"No"},"Ipv6AddressCount":{"Array":false,"Type":"Number","Required":"No"},"Ipv6Addresses":{"Array":true,"Type":"aws-properties-ec2-networkinterface-ipv6addresses","Required":"No"},"NetworkInterfaceId":{"Array":false,"Type":"String","Required":"No"},"PrivateIpAddresses":{"Array":true,"Type":"aws-properties-ec2-spotfleet-spotfleetrequestconfigdata-launchspecifications-networkinterfaces-privateipaddresses","Required":"No"},"SecondaryPrivateIpAddressCount":{"Array":false,"Type":"Number","Required":"No"},"SubnetId":{"Array":false,"Type":"String","Required":"Conditional. If you don't specify the                                 NetworkInterfaceId property, you must specify this                                 property."}}},"aws-properties-ec2-spotfleet-spotfleetrequestconfigdata-launchspecifications-networkinterfaces-privateipaddresses":{"Name":"AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsNetworkInterfacesPrivateIpAddresses","Properties":{"Primary":{"Array":false,"Type":"Boolean","Required":"No"},"PrivateIpAddress":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-ec2-spotfleet-spotfleetrequestconfigdata-launchspecifications-placement":{"Name":"AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsPlacement","Properties":{"AvailabilityZone":{"Array":false,"Type":"String","Required":"No"},"GroupName":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-ec2-spotfleet-spotfleetrequestconfigdata-launchspecifications-securitygroups":{"Name":"AmazonElasticComputeCloudSpotFleetSpotFleetRequestConfigDataLaunchSpecificationsSecurityGroups","Properties":{"GroupId":{"Array":false,"Type":"String","Required":"Yes"}}}}};var ElasticLoadBalancing={"Resources":{"LoadBalancer":{"Name":"AWS::ElasticLoadBalancing::LoadBalancer","Properties":{"AccessLoggingPolicy":{"Array":false,"Type":"aws-properties-ec2-elb-accessloggingpolicy","Required":"No","UpdateRequires":"No interruption"},"AppCookieStickinessPolicy":{"Array":true,"Type":"aws-properties-ec2-elb-AppCookieStickinessPolicy","Required":"No","UpdateRequires":"No interruption"},"AvailabilityZones":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"Replacement if you did not have an Availability Zone specified and you\n                                 are adding one or if you are removing all Availability Zones. Otherwise, update\n                                 requires no interruption."},"ConnectionDrainingPolicy":{"Array":false,"Type":"aws-properties-ec2-elb-connectiondrainingpolicy","Required":"No","UpdateRequires":"No interruption"},"ConnectionSettings":{"Array":false,"Type":"aws-properties-ec2-elb-connectionsettings","Required":"No","UpdateRequires":"No interruption"},"CrossZone":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"No interruption"},"HealthCheck":{"Array":false,"Type":"aws-properties-ec2-elb-health-check","Required":"No","UpdateRequires":"Replacement if you did not have a health check specified and you are\n                                 adding one or if you are removing a health check. Otherwise, update requires no interruption."},"Instances":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"LBCookieStickinessPolicy":{"Array":true,"Type":"aws-properties-ec2-elb-LBCookieStickinessPolicy","Required":"No","UpdateRequires":"No interruption"},"LoadBalancerName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"Listeners":{"Array":true,"Type":"aws-properties-ec2-elb-listener","Required":"Yes","UpdateRequires":"No interruption"},"Policies":{"Array":true,"Type":"aws-properties-ec2-elb-policy","Required":"No","UpdateRequires":"No interruption"},"Scheme":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"SecurityGroups":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"Subnets":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"Replacement if you did not have an subnet specified and you are adding\n                                 one or if you are removing all subnets. Otherwise, update requires no interruption. To update the load\n                                 balancer to another subnet that is in the same Availability Zone, you must do two\n                                 updates. You must first update the load balancer to use a subnet in different\n                                 Availability Zone. After the update is complete, update the load balancer to use\n                                 the new subnet that is in the original Availability Zone."},"Tags":{"Array":true,"Type":"aws-properties-resource-tags","Required":"No","UpdateRequires":"No interruption"}}}},"Models":{"aws-properties-ec2-elb-accessloggingpolicy":{"Name":"ElasticLoadBalancingAccessLoggingPolicy","Properties":{"EmitInterval":{"Array":false,"Type":"Number","Required":"No"},"Enabled":{"Array":false,"Type":"Boolean","Required":"Yes"},"S3BucketName":{"Array":false,"Type":"String","Required":"Yes"},"S3BucketPrefix":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-ec2-elb-AppCookieStickinessPolicy":{"Name":"ElasticLoadBalancingAppCookieStickinessPolicyType","Properties":{"CookieName":{"Array":false,"Type":"String","Required":"Yes"},"PolicyName":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-ec2-elb-connectiondrainingpolicy":{"Name":"ElasticLoadBalancingConnectionDrainingPolicy","Properties":{"Enabled":{"Array":false,"Type":"Boolean","Required":"Yes"},"Timeout":{"Array":false,"Type":"Number","Required":"No"}}},"aws-properties-ec2-elb-connectionsettings":{"Name":"ElasticLoadBalancingConnectionSettings","Properties":{"IdleTimeout":{"Array":false,"Type":"Number","Required":"Yes"}}},"aws-properties-ec2-elb-health-check":{"Name":"ElasticLoadBalancingHealthCheckType","Properties":{"HealthyThreshold":{"Array":false,"Type":"String","Required":"Yes"},"Interval":{"Array":false,"Type":"String","Required":"Yes"},"Target":{"Array":false,"Type":"String","Required":"Yes"},"Timeout":{"Array":false,"Type":"String","Required":"Yes"},"UnhealthyThreshold":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-ec2-elb-LBCookieStickinessPolicy":{"Name":"ElasticLoadBalancingLBCookieStickinessPolicyType","Properties":{"CookieExpirationPeriod":{"Array":false,"Type":"String","Required":"No"},"PolicyName":{"Array":false,"Type":"String"}}},"aws-properties-ec2-elb-listener":{"Name":"ElasticLoadBalancingListenerPropertyType","Properties":{"InstancePort":{"Array":false,"Type":"String","Required":"Yes"},"InstanceProtocol":{"Array":false,"Type":"String","Required":"No"},"LoadBalancerPort":{"Array":false,"Type":"String","Required":"Yes"},"PolicyNames":{"Array":true,"Type":"String","Required":"No"},"Protocol":{"Array":false,"Type":"String","Required":"Yes"},"SSLCertificateId":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-ec2-elb-policy":{"Name":"ElasticLoadBalancingPolicyType","Properties":{"Attributes":{"Array":true,"Type":"Map","Required":"Yes"},"InstancePorts":{"Array":true,"Type":"String","Required":"No"},"LoadBalancerPorts":{"Array":true,"Type":"String","Required":"Only for some policies. For more information,                                 see the Elastic Load Balancing                                       Developer Guide."},"PolicyName":{"Array":false,"Type":"String","Required":"Yes"},"PolicyType":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-resource-tags":{"Name":"AWSCloudFormationResourceTagsType","Properties":{"Key":{"Array":false,"Type":"String","Required":"Yes"},"Value":{"Array":false,"Type":"String","Required":"Yes"}}}}};var ElastiCache={"Resources":{"SecurityGroupIngress":{"Name":"AWS::ElastiCache::SecurityGroupIngress","Properties":{"CacheSecurityGroupName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Updates are not supported."},"EC2SecurityGroupName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Updates are not supported."},"EC2SecurityGroupOwnerId":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Updates are not supported."}}},"SecurityGroup":{"Name":"AWS::ElastiCache::SecurityGroup","Properties":{}},"CacheCluster":{"Name":"AWS::ElastiCache::CacheCluster","Properties":{"AutoMinorVersionUpgrade":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"No interruption"},"AZMode":{"Array":false,"Type":"String","Required":"Conditional. If you specify multiple Availability Zones in the                                 PreferredAvailabilityZones property, you must specify cross                                 Availability Zones for this property.","UpdateRequires":"No interruption"},"CacheNodeType":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Some interruptions"},"CacheParameterGroupName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Some interruptions"},"CacheSecurityGroupNames":{"Array":true,"Type":"String","Required":"Conditional: If your cache cluster isn't in a VPC, you must specify                                 this property.","UpdateRequires":"No interruption"},"CacheSubnetGroupName":{"Array":false,"Type":"String","Required":"Conditional. If you specified the VpcSecurityGroupIds property, you must specify this property.","UpdateRequires":"Replacement"},"ClusterName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"Engine":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"EngineVersion":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Some interruptions"},"NotificationTopicArn":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"NumCacheNodes":{"Array":false,"Type":"Number","Required":"Yes","UpdateRequires":"No interruption. However, if the PreferredAvailabilityZone\n                                 and PreferredAvailabilityZones properties were not previously\n                                 specified and you don't specify any new values, an update requires replacement."},"Port":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"Replacement"},"PreferredAvailabilityZone":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"PreferredAvailabilityZones":{"Array":true,"Type":"String","Required":"No"},"PreferredMaintenanceWindow":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"SnapshotArns":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"SnapshotName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"SnapshotRetentionLimit":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"No interruption"},"SnapshotWindow":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"Tags":{"Array":true,"Type":"aws-properties-resource-tags","Required":"No","UpdateRequires":"No interruption."},"VpcSecurityGroupIds":{"Array":true,"Type":"String","Required":"Conditional: If your cache cluster is in a VPC, you must specify                                 this property.","UpdateRequires":"No interruption"}}},"SubnetGroup":{"Name":"AWS::ElastiCache::SubnetGroup","Properties":{"CacheSubnetGroupName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"SubnetIds":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"}}},"ParameterGroup":{"Name":"AWS::ElastiCache::ParameterGroup","Properties":{"CacheParameterGroupFamily":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Updates are not supported."},"Properties":{"Array":false,"Type":"Map","Required":"No","UpdateRequires":"Updates are not supported."}}},"ReplicationGroup":{"Name":"AWS::ElastiCache::ReplicationGroup","Properties":{"AutomaticFailoverEnabled":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"No interruption"},"AutoMinorVersionUpgrade":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"No interruption"},"CacheNodeType":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"CacheParameterGroupName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Some interruptions"},"CacheSecurityGroupNames":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"CacheSubnetGroupName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"Engine":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"EngineVersion":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"NodeGroupConfiguration":{"Array":true,"Type":"aws-properties-elasticache-replicationgroup-nodegroupconfiguration","Required":"No","UpdateRequires":"Replacement"},"NotificationTopicArn":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"NumCacheClusters":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"No interruption"},"NumNodeGroups":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"Replacement"},"Port":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"Replacement"},"PreferredCacheClusterAZs":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"PreferredMaintenanceWindow":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"PrimaryClusterId":{"Array":false,"Type":"String","Required":"Conditional. This property is optional if you specify the                                 NumCacheClusters, NumNodeGroups, or                                 ReplicasPerNodeGroup properties.","UpdateRequires":"No interruption"},"ReplicasPerNodeGroup":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"Replacement"},"ReplicationGroupDescription":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"ReplicationGroupId":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"SecurityGroupIds":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"SnapshotArns":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"SnapshotName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"SnapshotRetentionLimit":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"No interruption"},"SnapshottingClusterId":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"SnapshotWindow":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"Tags":{"Array":true,"Type":"aws-properties-resource-tags","Required":"No","UpdateRequires":"No interruption"}}}},"Models":{"aws-properties-resource-tags":{"Name":"AWSCloudFormationResourceTagsType","Properties":{"Key":{"Array":false,"Type":"String","Required":"Yes"},"Value":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-elasticache-replicationgroup-nodegroupconfiguration":{"Name":"AmazonElastiCacheReplicationGroupNodeGroupConfiguration","Properties":{"PrimaryAvailabilityZone":{"Array":false,"Type":"String","Required":"No"},"ReplicaAvailabilityZones":{"Array":true,"Type":"String","Required":"No"},"ReplicaCount":{"Array":false,"Type":"Number","Required":"No"},"Slots":{"Array":false,"Type":"String","Required":"No"}}}}};var IAM={"Resources":{"AccessKey":{"Name":"AWS::IAM::AccessKey","Properties":{"Serial":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"Replacement"},"Status":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"UserName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"}}},"UserToGroupAddition":{"Name":"AWS::IAM::UserToGroupAddition","Properties":{"GroupName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"Users":{"Array":true,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"}}},"User":{"Name":"AWS::IAM::User","Properties":{"Groups":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"LoginProfile":{"Array":false,"Type":"aws-properties-iam-user-loginprofile","Required":"No","UpdateRequires":"No interruption"},"ManagedPolicyArns":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"Path":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"Policies":{"Array":true,"Type":"aws-properties-iam-policy","Required":"No","UpdateRequires":"No interruption"},"UserName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"}}},"Group":{"Name":"AWS::IAM::Group","Properties":{"GroupName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"ManagedPolicyArns":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"Path":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"Policies":{"Array":true,"Type":"aws-properties-iam-policy","Required":"No","UpdateRequires":"No interruption"}}},"InstanceProfile":{"Name":"AWS::IAM::InstanceProfile","Properties":{"Path":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"Roles":{"Array":true,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"InstanceProfileName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"}}},"ManagedPolicy":{"Name":"AWS::IAM::ManagedPolicy","Properties":{"Groups":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"Path":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"PolicyDocument":{"Array":false,"Type":"Object","Required":"Yes","UpdateRequires":"No interruption"},"Roles":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"Users":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"ManagedPolicyName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"}}},"Policy":{"Name":"AWS::IAM::Policy","Properties":{"Groups":{"Array":true,"Type":"String","Required":"Conditional. You must specify at least one of the following                                 properties: Groups, Roles, or Users.","UpdateRequires":"No interruption"},"PolicyDocument":{"Array":false,"Type":"Object","Required":"Yes","UpdateRequires":"No interruption"},"PolicyName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"Roles":{"Array":true,"Type":"String","Required":"Conditional. You must specify at least one of the following                                 properties: Groups, Roles, or Users.","UpdateRequires":"No interruption"},"Users":{"Array":true,"Type":"String","Required":"Conditional. You must specify at least one of the following                                 properties: Groups, Roles, or Users.","UpdateRequires":"No interruption"}}},"Role":{"Name":"AWS::IAM::Role","Properties":{"AssumeRolePolicyDocument":{"Array":false,"Type":"Object","Required":"Yes","UpdateRequires":"No interruption"},"ManagedPolicyArns":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"Path":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"Policies":{"Array":true,"Type":"aws-properties-iam-policy","Required":"No","UpdateRequires":"No interruption"},"RoleName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"}}}},"Models":{"aws-properties-iam-user-loginprofile":{"Name":"IAMUserLoginProfile","Properties":{"Password":{"Array":false,"Type":"String","Required":"Yes"},"PasswordResetRequired":{"Array":false,"Type":"Boolean","Required":"No"}}},"aws-properties-iam-policy":{"Name":"IAMPolicies","Properties":{"PolicyDocument":{"Array":false,"Type":"Object","Required":"Yes","UpdateRequires":"No interruption"},"PolicyName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"}}}}};var RDS={"Resources":{"DBInstance":{"Name":"AWS::RDS::DBInstance","Properties":{"AllocatedStorage":{"Array":false,"Type":"String","Required":"Conditional. This property is required unless you specify the                                 DBClusterIdentifier property. In that case, do not specify this                                 property.","UpdateRequires":"No interruption"},"AllowMajorVersionUpgrade":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"No interruption"},"AutoMinorVersionUpgrade":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"No interruption or some\n                                    interruptions. For more information, see ModifyDBInstance in the\n                                 Amazon Relational Database Service API Reference."},"AvailabilityZone":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"BackupRetentionPeriod":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption or some\n                                    interruptions. For more information, see ModifyDBInstance in the\n                                 Amazon Relational Database Service API Reference."},"CharacterSetName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"CopyTagsToSnapshot":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"No interruption"},"DBClusterIdentifier":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"DBInstanceClass":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Some interruptions"},"DBInstanceIdentifier":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"DBName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"DBParameterGroupName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption or some\n                                    interruptions. If any of the data members of the referenced parameter\n                                 group are changed during an update, the DB instance might need to be restarted,\n                                 causing some interruption. If the parameter group contains static parameters,\n                                 whether they were changed or not, an update triggers a reboot."},"DBSecurityGroups":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"DBSnapshotIdentifier":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"DBSubnetGroupName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"Domain":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"DomainIAMRoleName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"Engine":{"Array":false,"Type":"String","Required":"Conditional","UpdateRequires":"Replacement"},"EngineVersion":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Some interruptions"},"Iops":{"Array":false,"Type":"Number","Required":"Conditional. If you specify io1 for the                                 StorageType property, you must specify this property.","UpdateRequires":"No interruption"},"KmsKeyId":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"LicenseModel":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"MasterUsername":{"Array":false,"Type":"String","Required":"Conditional","UpdateRequires":"Replacement"},"MasterUserPassword":{"Array":false,"Type":"String","Required":"Conditional","UpdateRequires":"No interruption"},"MonitoringInterval":{"Array":false,"Type":"Number","Required":"Conditional. If you specify the MonitoringRoleArn                                 property, specify a value other than 0 for                                 MonitoringInterval.","UpdateRequires":"No interruption or some\n                                    interruptions. For more information, see ModifyDBInstance in the\n                                 Amazon Relational Database Service API Reference."},"MonitoringRoleArn":{"Array":false,"Type":"String","Required":"Conditional. If you specify a value other than 0 for                                 the MonitoringInterval property, specify a value for                                 MonitoringRoleArn.","UpdateRequires":"No interruption"},"MultiAZ":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"No interruption"},"OptionGroupName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"Port":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"PreferredBackupWindow":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"PreferredMaintenanceWindow":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption or some\n                                    interruptions. For more information, see ModifyDBInstance in the\n                                 Amazon Relational Database Service API Reference."},"PubliclyAccessible":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"Replacement"},"SourceDBInstanceIdentifier":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"StorageEncrypted":{"Array":false,"Type":"Boolean","Required":"Conditional. If you specify the KmsKeyId property, you                                 must enable encryption.","UpdateRequires":"Replacement"},"StorageType":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Some interruptions"},"Tags":{"Array":true,"Type":"aws-properties-resource-tags","Required":"No","UpdateRequires":"No interruption"},"Timezone":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"VPCSecurityGroups":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"No interruption"}}},"DBParameterGroup":{"Name":"AWS::RDS::DBParameterGroup","Properties":{"Family":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Updates are not supported."},"Parameters":{"Array":false,"Type":"Map","Required":"No","UpdateRequires":"No interruption or Some interruptions. Changes to dynamic parameters are applied immediately. During an update, if you\n                                 have static parameters (whether they were changed or not), triggers AWS CloudFormation\n                                 to reboot the associated DB instance without failover."},"Tags":{"Array":true,"Type":"aws-properties-resource-tags","Required":"No","UpdateRequires":"No interruption"}}},"DBSecurityGroup":{"Name":"AWS::RDS::DBSecurityGroup","Properties":{"EC2VpcId":{"Array":false,"Type":"String","Required":"Conditional. Must be specified to create a DB Security Group for                                 a VPC; may not be specified otherwise.","UpdateRequires":"Replacement"},"DBSecurityGroupIngress":{"Array":true,"Type":"aws-properties-rds-security-group-rule","Required":"Yes","UpdateRequires":"No interruption"},"GroupDescription":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"Tags":{"Array":true,"Type":"aws-properties-resource-tags","Required":"No","UpdateRequires":"No interruption"}}},"DBClusterParameterGroup":{"Name":"AWS::RDS::DBClusterParameterGroup","Properties":{"Family":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"Parameters":{"Array":false,"Type":"Map","Required":"Yes","UpdateRequires":"No interruption or some\n                                    interruptions, depending on the parameters that you update."},"Tags":{"Array":true,"Type":"aws-properties-resource-tags","Required":"No","UpdateRequires":"Updates are not supported."}}},"DBSubnetGroup":{"Name":"AWS::RDS::DBSubnetGroup","Properties":{"DBSubnetGroupDescription":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"SubnetIds":{"Array":true,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"Tags":{"Array":true,"Type":"aws-properties-resource-tags","Required":"No","UpdateRequires":"No interruption"}}},"DBCluster":{"Name":"AWS::RDS::DBCluster","Properties":{"AvailabilityZones":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"BackupRetentionPeriod":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"No interruption or some\n                                    interruptions. For more information, see ModifyDBInstance in the\n                                 Amazon Relational Database Service API Reference."},"DatabaseName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"DBClusterParameterGroupName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Some interruptions"},"DBSubnetGroupName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"Engine":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"EngineVersion":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"KmsKeyId":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement."},"MasterUsername":{"Array":false,"Type":"String","Required":"Conditional. You must specify this property unless you specify the                                 SnapshotIdentifier property. In that case, do not specify this                                 property.","UpdateRequires":"Replacement."},"MasterUserPassword":{"Array":false,"Type":"String","Required":"Conditional. You must specify this property unless you specify the                                 SnapshotIdentifier property. In that case, do not specify this                                 property.","UpdateRequires":"No interruption"},"Port":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"No interruption"},"PreferredBackupWindow":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"PreferredMaintenanceWindow":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption or some\n                                    interruptions. For more information, see ModifyDBInstance in the\n                                 Amazon Relational Database Service API Reference."},"ReplicationSourceIdentifier":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"SnapshotIdentifier":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"StorageEncrypted":{"Array":false,"Type":"Boolean","Required":"Conditional. If you specify the KmsKeyId property, you                                 must enable encryption.","UpdateRequires":"Replacement."},"Tags":{"Array":true,"Type":"aws-properties-resource-tags","Required":"No","UpdateRequires":"No interruption"},"VpcSecurityGroupIds":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"No interruption"}}},"EventSubscription":{"Name":"AWS::RDS::EventSubscription","Properties":{"Enabled":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"No interruption"},"EventCategories":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"SnsTopicArn":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"SourceIds":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"SourceType":{"Array":false,"Type":"String","Required":"Conditional. If you specify the SourceIds or EventCategories property, you must specify this property.","UpdateRequires":"Replacement if you're removing this property after it was previously\n                                 specified. All other updates require no\n                                    interruption."}}},"OptionGroup":{"Name":"AWS::RDS::OptionGroup","Properties":{"EngineName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"MajorEngineVersion":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"OptionGroupDescription":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"OptionConfigurations":{"Array":false,"Type":"aws-properties-rds-optiongroup-optionconfigurations","Required":"Yes","UpdateRequires":"Replacement"},"Tags":{"Array":true,"Type":"aws-properties-resource-tags","Required":"No","UpdateRequires":"No interruption"}}},"DBSecurityGroupIngress":{"Name":"AWS::RDS::DBSecurityGroupIngress","Properties":{"DBSecurityGroupName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"EC2SecurityGroupId":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"EC2SecurityGroupName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"EC2SecurityGroupOwnerId":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"}}}},"Models":{"aws-properties-resource-tags":{"Name":"AWSCloudFormationResourceTagsType","Properties":{"Key":{"Array":false,"Type":"String","Required":"Yes"},"Value":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-rds-security-group-rule":{"Name":"AmazonRDSSecurityGroupRule","Properties":{"CIDRIP":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"EC2SecurityGroupId":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"EC2SecurityGroupName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"EC2SecurityGroupOwnerId":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"}}},"aws-properties-rds-optiongroup-optionconfigurations":{"Name":"AmazonRDSOptionGroupOptionConfigurations","Properties":{"DBSecurityGroupMemberships":{"Array":true,"Type":"String","Required":"No"},"OptionName":{"Array":false,"Type":"String","Required":"Yes"},"OptionSettings":{"Array":false,"Type":"aws-properties-rds-optiongroup-optionconfigurations-optionsettings","Required":"No"},"Port":{"Array":false,"Type":"Number","Required":"No"},"VpcSecurityGroupMemberships":{"Array":true,"Type":"String","Required":"No"}}},"aws-properties-rds-optiongroup-optionconfigurations-optionsettings":{"Name":"AmazonRDSOptionGroupOptionConfigurationsOptionSettings","Properties":{"Name":{"Array":false,"Type":"String","Required":"No"},"Value":{"Array":false,"Type":"String","Required":"No"}}}}};var Route53={"Resources":{"RecordSetGroup":{"Name":"AWS::Route53::RecordSetGroup","Properties":{"Comment":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"HostedZoneId":{"Array":false,"Type":"String","Required":"Conditional: You must specify either the                                 HostedZoneName or HostedZoneId, but you cannot                                 specify both.","UpdateRequires":"Replacement"},"HostedZoneName":{"Array":false,"Type":"String","Required":"Conditional. You must specify either the                                 HostedZoneName or HostedZoneId, but you cannot                                 specify both.","UpdateRequires":"Replacement"},"RecordSets":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"}}},"RecordSet":{"Name":"AWS::Route53::RecordSet","Properties":{"AliasTarget":{"Array":false,"Type":"aws-properties-route53-aliastarget","Required":"Conditional. Required if you are creating an alias resource record                                 set.","UpdateRequires":"No interruption"},"Comment":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"Failover":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"GeoLocation":{"Array":false,"Type":"aws-properties-route53-recordset-geolocation","Required":"No","UpdateRequires":"No interruption"},"HealthCheckId":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"HostedZoneId":{"Array":false,"Type":"String","Required":"Conditional. You must specify either the                                 HostedZoneName or HostedZoneId,                                 but you cannot specify both. If this record set is part of a record set group, do                                 not specify this property.","UpdateRequires":"Replacement"},"HostedZoneName":{"Array":false,"Type":"String","Required":"Conditional. You must specify either the                                 HostedZoneName or HostedZoneId,                                 but you cannot specify both. If this record set is part of a record set group, do                                 not specify this property.","UpdateRequires":"Replacement"},"Name":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"ResourceRecords":{"Array":true,"Type":"String","Required":"Conditional. If you don't specify the AliasTarget                                 property, you must specify this property. If you are creating an alias resource                                 record set, do not specify this property.","UpdateRequires":"No interruption"},"SetIdentifier":{"Array":false,"Type":"String","Required":"Conditional. Required if you are creating a weighted, latency,                                 failover, or geolocation resource record set.","UpdateRequires":"No interruption"},"TTL":{"Array":false,"Type":"String","Required":"Conditional. If you don't specify the AliasTarget                                 property, you must specify this property. If you are creating an alias resource                                 record set, do not specify this property.","UpdateRequires":"No interruption"},"Type":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"Weight":{"Array":false,"Type":"Number","Required":"Conditional. Required if you are creating a weighted resource record                                 set.","UpdateRequires":"No interruption"}}},"HealthCheck":{"Name":"AWS::Route53::HealthCheck","Properties":{"HealthCheckConfig":{"Array":false,"Type":"aws-properties-route53-healthcheck-healthcheckconfig","Required":"Yes","UpdateRequires":"No interruption"},"HealthCheckTags":{"Array":true,"Type":"aws-properties-route53-healthcheck-healthchecktags","Required":"No","UpdateRequires":"No interruption"}}},"HostedZone":{"Name":"AWS::Route53::HostedZone","Properties":{"HostedZoneConfig":{"Array":false,"Type":"aws-properties-route53-hostedzone-hostedzoneconfig","Required":"No","UpdateRequires":"No interruption"},"HostedZoneTags":{"Array":true,"Type":"aws-properties-route53-hostedzone-hostedzonetags","Required":"No","UpdateRequires":"No interruption"},"Name":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"VPCs":{"Array":true,"Type":"aws-resource-route53-hostedzone-hostedzonevpcs","Required":"No"}}}},"Models":{"aws-properties-route53-aliastarget":{"Name":"Route53AliasTargetProperty","Properties":{"DNSName":{"Array":false,"Type":"String","Required":"Yes"},"EvaluateTargetHealth":{"Array":false,"Type":"Boolean","Required":"No"},"HostedZoneId":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-route53-recordset-geolocation":{"Name":"AmazonRoute53RecordSetGeoLocationProperty","Properties":{"ContinentCode":{"Array":false,"Type":"String","Required":"Conditional. You must specify this or the CountryCode                                 property."},"CountryCode":{"Array":false,"Type":"String","Required":"Conditional. You must specify this or the ContinentCode                                 property."},"SubdivisionCode":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-route53-healthcheck-healthcheckconfig":{"Name":"AmazonRoute53HealthCheckConfig","Properties":{"AlarmIdentifier":{"Array":false,"Type":"aws-properties-route53-healthcheck-healthcheckconfig-alarmidentifier","Required":"No"},"ChildHealthChecks":{"Array":true,"Type":"String","Required":"No"},"EnableSNI":{"Array":false,"Type":"Boolean","Required":"No"},"FailureThreshold":{"Array":false,"Type":"Number","Required":"No"},"FullyQualifiedDomainName":{"Array":false,"Type":"String","Required":"Conditional"},"HealthThreshold":{"Array":false,"Type":"Number","Required":"No"},"InsufficientDataHealthStatus":{"Array":false,"Type":"String","Required":"No"},"Inverted":{"Array":false,"Type":"Boolean","Required":"No"},"IPAddress":{"Array":false,"Type":"String","Required":"No"},"MeasureLatency":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"Replacement"},"Port":{"Array":false,"Type":"Number","Required":"Conditional. Required when you specify TCP for the                                 Type property."},"RequestInterval":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"Replacement"},"ResourcePath":{"Array":false,"Type":"String","Required":"No"},"SearchString":{"Array":false,"Type":"String","Required":"No"},"Type":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"}}},"aws-properties-route53-healthcheck-healthcheckconfig-alarmidentifier":{"Name":"AmazonRoute53AlarmIdentifier","Properties":{"Name":{"Array":false,"Type":"String","Required":"Yes"},"Region":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-route53-healthcheck-healthchecktags":{"Name":"AmazonRoute53HealthCheckTags","Properties":{"Key":{"Array":false,"Type":"String","Required":"Yes"},"Value":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-route53-hostedzone-hostedzoneconfig":{"Name":"AmazonRoute53HostedZoneConfigProperty","Properties":{"Comment":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-route53-hostedzone-hostedzonetags":{"Name":"AmazonRoute53HostedZoneTags","Properties":{"Key":{"Array":false,"Type":"String","Required":"Yes"},"Value":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-resource-route53-hostedzone-hostedzonevpcs":{"Name":"AmazonRoute53HostedZoneVPCs","Properties":{"VPCId":{"Array":false,"Type":"String","Required":"Yes"},"VPCRegion":{"Array":false,"Type":"String","Required":"Yes"}}}}};var S3={"Resources":{"Bucket":{"Name":"AWS::S3::Bucket","Properties":{"AccessControl":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"BucketName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"CorsConfiguration":{"Array":false,"Type":"aws-properties-s3-bucket-cors","Required":"No","UpdateRequires":"No interruption"},"LifecycleConfiguration":{"Array":false,"Type":"aws-properties-s3-bucket-lifecycleconfig","Required":"No","UpdateRequires":"No interruption"},"LoggingConfiguration":{"Array":false,"Type":"aws-properties-s3-bucket-loggingconfig","Required":"No","UpdateRequires":"No interruption"},"NotificationConfiguration":{"Array":false,"Type":"aws-properties-s3-bucket-notificationconfig","Required":"No","UpdateRequires":"No interruption"},"ReplicationConfiguration":{"Array":false,"Type":"aws-properties-s3-bucket-replicationconfiguration","Required":"No","UpdateRequires":"No interruption"},"Tags":{"Array":true,"Type":"aws-properties-resource-tags","Required":"No","UpdateRequires":"No interruption"},"VersioningConfiguration":{"Array":false,"Type":"aws-properties-s3-bucket-versioningconfig","Required":"No","UpdateRequires":"No interruption"},"WebsiteConfiguration":{"Array":false,"Type":"aws-properties-s3-websiteconfiguration","Required":"No","UpdateRequires":"No interruption"}}},"BucketPolicy":{"Name":"AWS::S3::BucketPolicy","Properties":{"Bucket":{"Array":false,"Type":"String","Required":"Yes"},"PolicyDocument":{"Array":false,"Type":"Object","Required":"Yes","UpdateRequires":"No interruption"}}}},"Models":{"aws-properties-s3-bucket-cors":{"Name":"AmazonS3CorsConfiguration","Properties":{"CorsRules":{"Array":false,"Type":"aws-properties-s3-bucket-cors-corsrule","Required":"Yes"}}},"aws-properties-s3-bucket-cors-corsrule":{"Name":"AmazonS3CorsConfigurationRule","Properties":{"AllowedHeaders":{"Array":true,"Type":"String","Required":"No"},"AllowedMethods":{"Array":true,"Type":"String","Required":"Yes"},"AllowedOrigins":{"Array":true,"Type":"String","Required":"Yes"},"ExposedHeaders":{"Array":true,"Type":"String","Required":"No"},"Id":{"Array":false,"Type":"String","Required":"No"},"MaxAge":{"Array":false,"Type":"Number","Required":"No"}}},"aws-properties-s3-bucket-lifecycleconfig":{"Name":"AmazonS3LifecycleConfiguration","Properties":{"Rules":{"Array":false,"Type":"aws-properties-s3-bucket-lifecycleconfig-rule","Required":"Yes"}}},"aws-properties-s3-bucket-lifecycleconfig-rule":{"Name":"AmazonS3LifecycleRule","Properties":{"ExpirationDate":{"Array":false,"Type":"String","Required":"Conditional. You must specify at least one of the following properties: ExpirationDate, ExpirationInDays, NoncurrentVersionExpirationInDays, NoncurrentVersionTransition, NoncurrentVersionTransitions, Transition, or Transitions."},"ExpirationInDays":{"Array":false,"Type":"Number","Required":"Conditional. You must specify at least one of the following properties: ExpirationDate, ExpirationInDays, NoncurrentVersionExpirationInDays, NoncurrentVersionTransition, NoncurrentVersionTransitions, Transition, or Transitions."},"Id":{"Array":false,"Type":"String","Required":"No"},"NoncurrentVersionExpirationInDays":{"Array":false,"Type":"Number","Required":"Conditional. You must specify at least one of the following properties: ExpirationDate, ExpirationInDays, NoncurrentVersionExpirationInDays, NoncurrentVersionTransition, NoncurrentVersionTransitions, Transition, or Transitions."},"NoncurrentVersionTransition":{"Array":false,"Type":"aws-properties-s3-bucket-lifecycleconfig-rule-noncurrentversiontransition","Required":"Conditional. You must specify at least one of the following properties: ExpirationDate, ExpirationInDays, NoncurrentVersionExpirationInDays, NoncurrentVersionTransition, NoncurrentVersionTransitions, Transition, or Transitions."},"NoncurrentVersionTransitions":{"Array":true,"Type":"aws-properties-s3-bucket-lifecycleconfig-rule-noncurrentversiontransition","Required":"Conditional. You must specify at least one of the following properties: ExpirationDate, ExpirationInDays, NoncurrentVersionExpirationInDays, NoncurrentVersionTransition, NoncurrentVersionTransitions, Transition, or Transitions."},"Prefix":{"Array":false,"Type":"String","Required":"No"},"Status":{"Array":false,"Type":"String","Required":"Yes"},"Transition":{"Array":false,"Type":"aws-properties-s3-bucket-lifecycleconfig-rule-transition","Required":"Conditional. You must specify at least one of the following properties: ExpirationDate, ExpirationInDays, NoncurrentVersionExpirationInDays, NoncurrentVersionTransition, NoncurrentVersionTransitions, Transition, or Transitions."},"Transitions":{"Array":true,"Type":"aws-properties-s3-bucket-lifecycleconfig-rule-transition","Required":"Conditional. You must specify at least one of the following properties: ExpirationDate, ExpirationInDays, NoncurrentVersionExpirationInDays, NoncurrentVersionTransition, NoncurrentVersionTransitions, Transition, or Transitions."}}},"aws-properties-s3-bucket-lifecycleconfig-rule-noncurrentversiontransition":{"Name":"AmazonS3LifecycleRuleNoncurrentVersionTransition","Properties":{"StorageClass":{"Array":false,"Type":"String","Required":"Yes"},"TransitionInDays":{"Array":false,"Type":"Number","Required":"Yes"}}},"aws-properties-s3-bucket-lifecycleconfig-rule-transition":{"Name":"AmazonS3LifecycleRuleTransition","Properties":{"StorageClass":{"Array":false,"Type":"String","Required":"Yes"},"TransitionDate":{"Array":false,"Type":"String","Required":"Conditional"},"TransitionInDays":{"Array":false,"Type":"Number","Required":"Conditional"}}},"aws-properties-s3-bucket-loggingconfig":{"Name":"AmazonS3LoggingConfiguration","Properties":{"DestinationBucketName":{"Array":false,"Type":"String","Required":"No"},"LogFilePrefix":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-s3-bucket-notificationconfig":{"Name":"AmazonS3NotificationConfiguration","Properties":{"LambdaConfigurations":{"Array":true,"Type":"aws-properties-s3-bucket-notificationconfig-lambdaconfig","Required":"No"},"QueueConfigurations":{"Array":true,"Type":"aws-properties-s3-bucket-notificationconfig-queueconfig","Required":"No"},"TopicConfigurations":{"Array":true,"Type":"aws-properties-s3-bucket-notificationconfig-topicconfig","Required":"No"}}},"aws-properties-s3-bucket-notificationconfig-lambdaconfig":{"Name":"AmazonSimpleStorageServiceNotificationConfigurationLambdaConfigurations","Properties":{"Event":{"Array":false,"Type":"String","Required":"Yes"},"Filter":{"Array":false,"Type":"aws-properties-s3-bucket-notificationconfiguration-config-filter","Required":"No"},"Function":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-s3-bucket-notificationconfiguration-config-filter":{"Name":"AmazonS3NotificationConfigurationConfigFilter","Properties":{"S3Key":{"Array":false,"Type":"aws-properties-s3-bucket-notificationconfiguration-config-filter-s3key","Required":"Yes"}}},"aws-properties-s3-bucket-notificationconfiguration-config-filter-s3key":{"Name":"AmazonS3NotificationConfigurationConfigFilterS3Key","Properties":{"Rules":{"Array":true,"Type":"aws-properties-s3-bucket-notificationconfiguration-config-filter-s3key-rules","Required":"Yes"}}},"aws-properties-s3-bucket-notificationconfiguration-config-filter-s3key-rules":{"Name":"AmazonS3NotificationConfigurationConfigFilterS3KeyRules","Properties":{"Name":{"Array":false,"Type":"String","Required":"Yes"},"Value":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-s3-bucket-notificationconfig-queueconfig":{"Name":"AmazonSimpleStorageServiceNotificationConfigurationQueueConfigurations","Properties":{"Event":{"Array":false,"Type":"String","Required":"Yes"},"Filter":{"Array":false,"Type":"aws-properties-s3-bucket-notificationconfiguration-config-filter","Required":"No"},"Queue":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-s3-bucket-notificationconfig-topicconfig":{"Name":"AmazonS3NotificationConfigurationTopicConfigurations","Properties":{"Event":{"Array":false,"Type":"String","Required":"Yes"},"Filter":{"Array":false,"Type":"aws-properties-s3-bucket-notificationconfiguration-config-filter","Required":"No"},"Topic":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-s3-bucket-replicationconfiguration":{"Name":"AmazonS3ReplicationConfiguration","Properties":{"Role":{"Array":false,"Type":"String","Required":"Yes"},"Rules":{"Array":true,"Type":"aws-properties-s3-bucket-replicationconfiguration-rules","Required":"Yes"}}},"aws-properties-s3-bucket-replicationconfiguration-rules":{"Name":"AmazonS3ReplicationConfigurationRules","Properties":{"Destination":{"Array":false,"Type":"aws-properties-s3-bucket-replicationconfiguration-rules-destination","Required":"Yes"},"Id":{"Array":false,"Type":"String","Required":"No"},"Prefix":{"Array":false,"Type":"String","Required":"Yes"},"Status":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-s3-bucket-replicationconfiguration-rules-destination":{"Name":"AmazonS3ReplicationConfigurationRulesDestination","Properties":{"Bucket":{"Array":false,"Type":"String","Required":"Yes"},"StorageClass":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-resource-tags":{"Name":"AWSCloudFormationResourceTagsType","Properties":{"Key":{"Array":false,"Type":"String","Required":"Yes"},"Value":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-s3-bucket-versioningconfig":{"Name":"AmazonS3VersioningConfiguration","Properties":{"Status":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-s3-websiteconfiguration":{"Name":"AmazonS3WebsiteConfigurationProperty","Properties":{"ErrorDocument":{"Array":false,"Type":"String","Required":"No"},"IndexDocument":{"Array":false,"Type":"String","Required":"Yes"},"RedirectAllRequestsTo":{"Array":false,"Type":"aws-properties-s3-websiteconfiguration-redirectallrequeststo","Required":"No"},"RoutingRules":{"Array":true,"Type":"aws-properties-s3-websiteconfiguration-routingrules","Required":"No"}}},"aws-properties-s3-websiteconfiguration-redirectallrequeststo":{"Name":"AmazonS3WebsiteConfigurationRedirectAllRequestsToProperty","Properties":{"HostName":{"Array":false,"Type":"String","Required":"Yes"},"Protocol":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-s3-websiteconfiguration-routingrules":{"Name":"AmazonS3WebsiteConfigurationRoutingRulesProperty","Properties":{"RedirectRule":{"Array":false,"Type":"aws-properties-s3-websiteconfiguration-routingrules-redirectrule","Required":"Yes"},"RoutingRuleCondition":{"Array":false,"Type":"aws-properties-s3-websiteconfiguration-routingrules-routingrulecondition","Required":"No"}}},"aws-properties-s3-websiteconfiguration-routingrules-redirectrule":{"Name":"AmazonS3WebsiteConfigurationRoutingRulesRedirectRuleProperty","Properties":{"HostName":{"Array":false,"Type":"String","Required":"No"},"HttpRedirectCode":{"Array":false,"Type":"String","Required":"No"},"Protocol":{"Array":false,"Type":"String","Required":"No"},"ReplaceKeyPrefixWith":{"Array":false,"Type":"String","Required":"No"},"ReplaceKeyWith":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-s3-websiteconfiguration-routingrules-routingrulecondition":{"Name":"AmazonS3WebsiteConfigurationRoutingRulesRoutingRuleConditionProperty","Properties":{"HttpErrorCodeReturnedEquals":{"Array":false,"Type":"String","Required":"Conditional. You must specify at least one condition                                 property."},"KeyPrefixEquals":{"Array":false,"Type":"String","Required":"Conditional. You must at least one condition property."}}}}};var SDB={"Resources":{"Domain":{"Name":"AWS::SDB::Domain","Properties":{}}},"Models":{}};var SNS={"Resources":{"TopicPolicy":{"Name":"AWS::SNS::TopicPolicy","Properties":{"PolicyDocument":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"Topics":{"Array":true,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"}}},"Topic":{"Name":"AWS::SNS::Topic","Properties":{"DisplayName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"Subscription":{"Array":true,"Type":"aws-properties-sns-subscription","Required":"No","UpdateRequires":"No interruption"},"TopicName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"}}},"Subscription":{"Name":"AWS::SNS::Subscription","Properties":{"Endpoint":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"Protocol":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"TopicArn":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"}}}},"Models":{"aws-properties-sns-subscription":{"Name":"AmazonSNSSubscriptionPropertyType","Properties":{"Endpoint":{"Array":false,"Type":"String","Required":"Yes"},"Protocol":{"Array":false,"Type":"String","Required":"Yes"}}}}};var SQS={"Resources":{"QueuePolicy":{"Name":"AWS::SQS::QueuePolicy","Properties":{"PolicyDocument":{"Array":false,"Type":"Object","Required":"Yes","UpdateRequires":"No interruption"},"Queues":{"Array":true,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"}}},"Queue":{"Name":"AWS::SQS::Queue","Properties":{"ContentBasedDeduplication":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"No interruption"},"DelaySeconds":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"No interruption"},"FifoQueue":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"Replacement"},"MaximumMessageSize":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"No interruption"},"MessageRetentionPeriod":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"No interruption"},"QueueName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"ReceiveMessageWaitTimeSeconds":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"No interruption"},"RedrivePolicy":{"Array":false,"Type":"aws-properties-sqs-queues-redrivepolicy","Required":"No","UpdateRequires":"No interruption"},"VisibilityTimeout":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"No interruption"}}}},"Models":{"aws-properties-sqs-queues-redrivepolicy":{"Name":"AmazonSQSRedrivePolicy","Properties":{"deadLetterTargetArn":{"Array":false,"Type":"String","Required":"Yes"},"maxReceiveCount":{"Array":false,"Type":"Number","Required":"Yes"}}}}};var CloudFormation={"Resources":{"WaitConditionHandle":{"Name":"AWS::CloudFormation::WaitConditionHandle","Properties":{}},"Stack":{"Name":"AWS::CloudFormation::Stack","Properties":{"NotificationARNs":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"Parameters":{"Array":false,"Type":"aws-properties-stack-parameters","Required":"Conditional (required if the nested stack                                 requires input parameters).","UpdateRequires":"Whether an update causes interruptions\n                                 depends on the resources that are being updated. An update never causes a nested\n                                 stack to be replaced."},"Tags":{"Array":true,"Type":"aws-properties-resource-tags","Required":"No","UpdateRequires":"No interruption."},"TemplateURL":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Whether an update causes interruptions\n                                 depends on the resources that are being update. An update never causes a nested\n                                 stack to be replaced."},"TimeoutInMinutes":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"Updates are not supported."}}},"WaitCondition":{"Name":"AWS::CloudFormation::WaitCondition","Properties":{"Count":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"Updates are not supported."},"Handle":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Updates are not supported."},"Timeout":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Updates are not supported."}}},"Authentication":{"Name":"AWS::CloudFormation::Authentication","Properties":{"accessKeyId":{"Array":false,"Type":"String","Required":"Conditional Can be specified only if the type                                 property is set to \"S3\"."},"buckets":{"Array":true,"Type":"String","Required":"Conditional Can be specified only if the type                                 property is set to \"S3\"."},"password":{"Array":false,"Type":"String","Required":"Conditional Can be specified only if the type property is set to                                 \"basic\"."},"secretKey":{"Array":false,"Type":"String","Required":"Conditional Can be specified only if the type                                 property is set to \"S3\"."},"type":{"Array":false,"Type":"String","Required":"Yes"},"uris":{"Array":true,"Type":"String","Required":"Conditional Can be specified only if the type                                 property is set to \"basic\"."},"username":{"Array":false,"Type":"String","Required":"Conditional Can be specified only if the type property is set to                                 \"basic\"."},"roleName":{"Array":false,"Type":"String","Required":"Conditional Can be specified only if the type                                 property is set to \"S3\"."}}},"Interface":{"Name":"AWS::CloudFormation::Interface","Properties":{"ParameterGroups":{"Array":false,"Type":"aws-properties-cloudformation-interface-parametergroup","Required":"No","UpdateRequires":"No interruption"},"ParameterLabels":{"Array":false,"Type":"aws-properties-cloudformation-interface-parameterlabel","Required":"No","UpdateRequires":"No interruption"}}},"CustomResource":{"Name":"AWS::CloudFormation::CustomResource","Properties":{"ServiceToken":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Updates are not supported."}}},"Init":{"Name":"AWS::CloudFormation::Init","Properties":{}}},"Models":{"aws-properties-stack-parameters":{"Name":"AWSCloudFormationStackParameters","Properties":{}},"aws-properties-resource-tags":{"Name":"AWSCloudFormationResourceTagsType","Properties":{"Key":{"Array":false,"Type":"String","Required":"Yes"},"Value":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-cloudformation-interface-parametergroup":{"Name":"AWSCloudFormationInterfaceParameterGroup","Properties":{"Label":{"Array":false,"Type":"aws-properties-cloudformation-interface-label","Required":"No"},"Parameters":{"Array":true,"Type":"String","Required":"No"}}},"aws-properties-cloudformation-interface-label":{"Name":"AWSCloudFormationInterfaceLabel","Properties":{"default":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-cloudformation-interface-parameterlabel":{"Name":"AWSCloudFormationInterfaceParameterLabel","Properties":{"ParameterLogicalID":{"Array":false,"Type":"aws-properties-cloudformation-interface-label","Required":"No"}}}}};var ApiGateway={"Resources":{"Account":{"Name":"AWS::ApiGateway::Account","Properties":{"CloudWatchRoleArn":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"}}},"ApiKey":{"Name":"AWS::ApiGateway::ApiKey","Properties":{"Enabled":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"No interruption"},"Name":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"StageKeys":{"Array":true,"Type":"aws-properties-apitgateway-apikey-stagekey","Required":"No","UpdateRequires":"No interruption"}}},"Authorizer":{"Name":"AWS::ApiGateway::Authorizer","Properties":{"AuthorizerCredentials":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"AuthorizerResultTtlInSeconds":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"No interruption"},"AuthorizerUri":{"Array":false,"Type":"String","Required":"Conditional. Specify this property for Lambda functions only.","UpdateRequires":"No interruption"},"IdentitySource":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"IdentityValidationExpression":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"Name":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"ProviderARNs":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"RestApiId":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"Type":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"}}},"BasePathMapping":{"Name":"AWS::ApiGateway::BasePathMapping","Properties":{"BasePath":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"DomainName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"RestApiId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"Stage":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"}}},"ClientCertificate":{"Name":"AWS::ApiGateway::ClientCertificate","Properties":{}},"DomainName":{"Name":"AWS::ApiGateway::DomainName","Properties":{"CertificateArn":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"DomainName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"}}},"Deployment":{"Name":"AWS::ApiGateway::Deployment","Properties":{"RestApiId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"StageDescription":{"Array":false,"Type":"aws-properties-apitgateway-deployment-stagedescription","Required":"No","UpdateRequires":"No interruption"},"StageName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"}}},"Model":{"Name":"AWS::ApiGateway::Model","Properties":{"ContentType":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"Name":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"RestApiId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"Schema":{"Array":false,"Type":"Object","Required":"Yes","UpdateRequires":"No interruption"}}},"Method":{"Name":"AWS::ApiGateway::Method","Properties":{"ApiKeyRequired":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"No interruption"},"AuthorizationType":{"Array":false,"Type":"String","Required":"Yes. If you specify the AuthorizerId property, specify CUSTOM for this property.","UpdateRequires":"No interruption"},"AuthorizerId":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"HttpMethod":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"Integration":{"Array":false,"Type":"aws-properties-apitgateway-method-integration","Required":"No","UpdateRequires":"No interruption"},"MethodResponses":{"Array":true,"Type":"aws-properties-apitgateway-method-methodresponse","Required":"No","UpdateRequires":"No interruption"},"RequestModels":{"Array":false,"Type":"Map","Required":"No","UpdateRequires":"No interruption"},"RequestParameters":{"Array":false,"Type":"Map","Required":"No","UpdateRequires":"No interruption"},"ResourceId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"RestApiId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"}}},"Resource":{"Name":"AWS::ApiGateway::Resource","Properties":{"ParentId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"PathPart":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"RestApiId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"}}},"RestApi":{"Name":"AWS::ApiGateway::RestApi","Properties":{"BinaryMediaTypes":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"Body":{"Array":false,"Type":"Object","Required":"No","UpdateRequires":"No interruption"},"BodyS3Location":{"Array":false,"Type":"aws-properties-apitgateway-restapi-bodys3location","Required":"No","UpdateRequires":"No interruption"},"CloneFrom":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"FailOnWarnings":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"No interruption"},"Name":{"Array":false,"Type":"String","Required":"Conditional. Required if you don't specify a OpenAPI definition.","UpdateRequires":"No interruption"},"Parameters":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"No interruption"}}},"Stage":{"Name":"AWS::ApiGateway::Stage","Properties":{"CacheClusterEnabled":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"No interruption"},"CacheClusterSize":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"ClientCertificateId":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"DeploymentId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"MethodSettings":{"Array":false,"Type":"aws-properties-apitgateway-stage-methodsetting","Required":"No","UpdateRequires":"No interruption"},"RestApiId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"StageName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"Variables":{"Array":false,"Type":"Map","Required":"No","UpdateRequires":"No interruption"}}},"UsagePlan":{"Name":"AWS::ApiGateway::UsagePlan","Properties":{"ApiStages":{"Array":true,"Type":"aws-properties-apigateway-usageplan-apistage","Required":"No","UpdateRequires":"No interruption"},"Quota":{"Array":false,"Type":"aws-properties-apigateway-usageplan-quotasettings","Required":"No","UpdateRequires":"No interruption"},"Throttle":{"Array":false,"Type":"aws-properties-apigateway-usageplan-throttlesettings","Required":"No","UpdateRequires":"No interruption"},"UsagePlanName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"}}},"UsagePlanKey":{"Name":"AWS::ApiGateway::UsagePlanKey","Properties":{"KeyId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"KeyType":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"UsagePlanId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"}}}},"Models":{"aws-properties-apitgateway-apikey-stagekey":{"Name":"AmazonAPIGatewayApiKeyStageKey","Properties":{"RestApiId":{"Array":false,"Type":"String","Required":"No"},"StageName":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-apitgateway-deployment-stagedescription":{"Name":"AmazonAPIGatewayDeploymentStageDescription","Properties":{"CacheClusterEnabled":{"Array":false,"Type":"Boolean","Required":"No"},"CacheClusterSize":{"Array":false,"Type":"String","Required":"No"},"CacheDataEncrypted":{"Array":false,"Type":"Boolean","Required":"No"},"CacheTtlInSeconds":{"Array":false,"Type":"Number","Required":"No"},"CachingEnabled":{"Array":false,"Type":"Boolean","Required":"No"},"ClientCertificateId":{"Array":false,"Type":"String","Required":"No"},"DataTraceEnabled":{"Array":false,"Type":"Boolean","Required":"No"},"LoggingLevel":{"Array":false,"Type":"String","Required":"No"},"MethodSettings":{"Array":false,"Type":"aws-properties-apitgateway-deployment-stagedescription-methodsetting","Required":"No"},"MetricsEnabled":{"Array":false,"Type":"Boolean","Required":"No"},"StageName":{"Array":false,"Type":"String","Required":"No"},"ThrottlingBurstLimit":{"Array":false,"Type":"Number","Required":"No"},"ThrottlingRateLimit":{"Array":false,"Type":"Number","Required":"No"},"Variables":{"Array":false,"Type":"Map","Required":"No"}}},"aws-properties-apitgateway-deployment-stagedescription-methodsetting":{"Name":"AmazonAPIGatewayDeploymentStageDescriptionMethodSetting","Properties":{"CacheDataEncrypted":{"Array":false,"Type":"Boolean","Required":"No"},"CacheTtlInSeconds":{"Array":false,"Type":"Number","Required":"No"},"CachingEnabled":{"Array":false,"Type":"Boolean","Required":"No"},"DataTraceEnabled":{"Array":false,"Type":"Boolean","Required":"No"},"HttpMethod":{"Array":false,"Type":"String","Required":"No"},"LoggingLevel":{"Array":false,"Type":"String","Required":"No"},"MetricsEnabled":{"Array":false,"Type":"Boolean","Required":"No"},"ResourcePath":{"Array":false,"Type":"String","Required":"No"},"ThrottlingBurstLimit":{"Array":false,"Type":"Number","Required":"No"},"ThrottlingRateLimit":{"Array":false,"Type":"Number","Required":"No"}}},"aws-properties-apitgateway-method-integration":{"Name":"AmazonAPIGatewayMethodIntegration","Properties":{"CacheKeyParameters":{"Array":true,"Type":"String","Required":"No"},"CacheNamespace":{"Array":false,"Type":"String","Required":"No"},"Credentials":{"Array":false,"Type":"String","Required":"No"},"IntegrationHttpMethod":{"Array":false,"Type":"String","Required":"Conditional. For the Type property, if you specify MOCK, this property is optional. For all other types, you must specify this property."},"IntegrationResponses":{"Array":true,"Type":"aws-properties-apitgateway-method-integration-integrationresponse","Required":"No"},"PassthroughBehavior":{"Array":false,"Type":"String","Required":"No"},"RequestParameters":{"Array":false,"Type":"Map","Required":"No"},"RequestTemplates":{"Array":false,"Type":"Map","Required":"No"},"Type":{"Array":false,"Type":"String","Required":"Yes"},"Uri":{"Array":false,"Type":"String","Required":"Conditional. If you specified HTTP or AWS for the Type property, you must specify this property."}}},"aws-properties-apitgateway-method-integration-integrationresponse":{"Name":"AmazonAPIGatewayMethodIntegrationIntegrationResponse","Properties":{"ResponseParameters":{"Array":false,"Type":"Map","Required":"No"},"ResponseTemplates":{"Array":false,"Type":"Map","Required":"No"},"SelectionPattern":{"Array":false,"Type":"String","Required":"No"},"StatusCode":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-apitgateway-method-methodresponse":{"Name":"AmazonAPIGatewayMethodMethodResponse","Properties":{"ResponseModels":{"Array":false,"Type":"Map","Required":"No"},"ResponseParameters":{"Array":false,"Type":"Map","Required":"No"},"StatusCode":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-apitgateway-restapi-bodys3location":{"Name":"AmazonAPIGatewayRestApiS3Location","Properties":{"Bucket":{"Array":false,"Type":"String","Required":"No"},"ETag":{"Array":false,"Type":"String","Required":"No"},"Key":{"Array":false,"Type":"String","Required":"No"},"Version":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-apitgateway-stage-methodsetting":{"Name":"AmazonAPIGatewayStageMethodSetting","Properties":{"CacheDataEncrypted":{"Array":false,"Type":"Boolean","Required":"No"},"CacheTtlInSeconds":{"Array":false,"Type":"Number","Required":"No"},"CachingEnabled":{"Array":false,"Type":"Boolean","Required":"No"},"DataTraceEnabled":{"Array":false,"Type":"Boolean","Required":"No"},"HttpMethod":{"Array":false,"Type":"String","Required":"Yes"},"LoggingLevel":{"Array":false,"Type":"String","Required":"No"},"MetricsEnabled":{"Array":false,"Type":"Boolean","Required":"No"},"ResourcePath":{"Array":false,"Type":"String","Required":"Yes"},"ThrottlingBurstLimit":{"Array":false,"Type":"Number","Required":"No"},"ThrottlingRateLimit":{"Array":false,"Type":"Number","Required":"No"}}},"aws-properties-apigateway-usageplan-apistage":{"Name":"AmazonAPIGatewayUsagePlanApiStage","Properties":{"ApiId":{"Array":false,"Type":"String","Required":"No"},"Stage":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-apigateway-usageplan-quotasettings":{"Name":"AmazonAPIGatewayUsagePlanQuotaSettings","Properties":{"Limit":{"Array":false,"Type":"Number","Required":"No"},"Offset":{"Array":false,"Type":"Number","Required":"No"},"Period":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-apigateway-usageplan-throttlesettings":{"Name":"AmazonAPIGatewayUsagePlanThrottleSettings","Properties":{"BurstLimit":{"Array":false,"Type":"Number","Required":"No"},"RateLimit":{"Array":false,"Type":"Number","Required":"No"}}}}};var ApplicationAutoScaling={"Resources":{"ScalableTarget":{"Name":"AWS::ApplicationAutoScaling::ScalableTarget","Properties":{"MaxCapacity":{"Array":false,"Type":"Number","Required":"Yes","UpdateRequires":"No interruption"},"MinCapacity":{"Array":false,"Type":"Number","Required":"Yes","UpdateRequires":"No interruption"},"ResourceId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"RoleARN":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"ScalableDimension":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"ServiceNamespace":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"}}},"ScalingPolicy":{"Name":"AWS::ApplicationAutoScaling::ScalingPolicy","Properties":{"PolicyName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"PolicyType":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"ResourceId":{"Array":false,"Type":"String","Required":"Conditional. You must specify either the ScalingTargetId property or the ResourceId, ScalableDimension, and ServiceNamespace properties. If you specify the ResourceId, ScalableDimension, and ServiceNamespace properties, don't specify the ScalingTargetId property.","UpdateRequires":"Replacement"},"ScalableDimension":{"Array":false,"Type":"String","Required":"Conditional. You must specify either the ScalingTargetId property or the ResourceId, ScalableDimension, and ServiceNamespace properties. If you specify the ResourceId, ScalableDimension, and ServiceNamespace properties, don't specify the ScalingTargetId property.","UpdateRequires":"Replacement"},"ServiceNamespace":{"Array":false,"Type":"String","Required":"Conditional. You must specify either the ScalingTargetId property or the ResourceId, ScalableDimension, and ServiceNamespace properties. If you specify the ResourceId, ScalableDimension, and ServiceNamespace properties, don't specify the ScalingTargetId property.","UpdateRequires":"Replacement"},"ScalingTargetId":{"Array":false,"Type":"String","Required":"Conditional. You must specify either the ScalingTargetId property or the ResourceId, ScalableDimension, and ServiceNamespace properties. If you specify this property, don't specify the ResourceId, ScalableDimension, and ServiceNamespace properties.","UpdateRequires":"Replacement"},"StepScalingPolicyConfiguration":{"Array":false,"Type":"aws-properties-applicationautoscaling-scalingpolicy-stepscalingpolicyconfiguration","Required":"No","UpdateRequires":"No interruption"},"TargetTrackingScalingPolicyConfiguration":{"Array":false,"Type":"aws-properties-applicationautoscaling-scalingpolicy-targettrackingscalingpolicyconfiguration","Required":"No","UpdateRequires":"No interruption"}}}},"Models":{"aws-properties-applicationautoscaling-scalingpolicy-stepscalingpolicyconfiguration":{"Name":"ApplicationAutoScalingScalingPolicyStepScalingPolicyConfiguration","Properties":{"AdjustmentType":{"Array":false,"Type":"String","Required":"No"},"Cooldown":{"Array":false,"Type":"Number","Required":"No"},"MetricAggregationType":{"Array":false,"Type":"String","Required":"No"},"MinAdjustmentMagnitude":{"Array":false,"Type":"Number","Required":"No"},"StepAdjustments":{"Array":true,"Type":"aws-properties-applicationautoscaling-scalingpolicy-stepscalingpolicyconfiguration-stepadjustment","Required":"No"}}},"aws-properties-applicationautoscaling-scalingpolicy-stepscalingpolicyconfiguration-stepadjustment":{"Name":"ApplicationAutoScalingScalingPolicyStepScalingPolicyConfigurationStepAdjustment","Properties":{"MetricIntervalLowerBound":{"Array":false,"Type":"Number","Required":"Conditional. You must specify at least one upper or lower bound."},"MetricIntervalUpperBound":{"Array":false,"Type":"Number","Required":"Conditional. You must specify at least one upper or lower bound."},"ScalingAdjustment":{"Array":false,"Type":"Number","Required":"Yes"}}},"aws-properties-applicationautoscaling-scalingpolicy-targettrackingscalingpolicyconfiguration":{"Name":"ApplicationAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration","Properties":{"CustomizedMetricSpecification":{"Array":false,"Type":"aws-properties-applicationautoscaling-scalingpolicy-customizedmetricspecification","Required":"No","UpdateRequires":"No interruption"},"PredefinedMetricSpecification":{"Array":false,"Type":"aws-properties-applicationautoscaling-scalingpolicy-predefinedmetricspecification","Required":"No","UpdateRequires":"No interruption"},"ScaleInCooldown":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"No interruption"},"ScaleOutCooldown":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"No interruption"},"TargetValue":{"Array":false,"Type":"Double","Required":"Yes","UpdateRequires":"No interruption"}}},"aws-properties-applicationautoscaling-scalingpolicy-customizedmetricspecification":{"Name":"ApplicationAutoScalingScalingPolicyCustomizedMetricSpecification","Properties":{"Dimensions":{"Array":true,"Type":"aws-properties-applicationautoscaling-scalingpolicy-metricdimension","Required":"No","UpdateRequires":"No interruption"},"MetricName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"Namespace":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"Statistic":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"Unit":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"}}},"aws-properties-applicationautoscaling-scalingpolicy-metricdimension":{"Name":"ApplicationAutoScalingScalingPolicyMetricDimension","Properties":{"Name":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"Value":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"}}},"aws-properties-applicationautoscaling-scalingpolicy-predefinedmetricspecification":{"Name":"ApplicationAutoScalingScalingPolicyPredefinedMetricSpecification","Properties":{"PredefinedMetricType":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"ResourceLabel":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"}}}}};var CertificateManager={"Resources":{"Certificate":{"Name":"AWS::CertificateManager::Certificate","Properties":{"DomainName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"DomainValidationOptions":{"Array":true,"Type":"aws-properties-certificatemanager-certificate-domainvalidationoption","Required":"No","UpdateRequires":"Replacement"},"SubjectAlternativeNames":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"Tags":{"Array":true,"Type":"aws-properties-resource-tags","Required":"No","UpdateRequires":"No interruption."}}}},"Models":{"aws-properties-certificatemanager-certificate-domainvalidationoption":{"Name":"AWSCertificateManagerCertificateDomainValidationOption","Properties":{"DomainName":{"Array":false,"Type":"String","Required":"Yes"},"ValidationDomain":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-resource-tags":{"Name":"AWSCloudFormationResourceTagsType","Properties":{"Key":{"Array":false,"Type":"String","Required":"Yes"},"Value":{"Array":false,"Type":"String","Required":"Yes"}}}}};var CloudTrail={"Resources":{"Trail":{"Name":"AWS::CloudTrail::Trail","Properties":{"CloudWatchLogsLogGroupArn":{"Array":false,"Type":"String","Required":"Conditional. This property is required if you specify the                                 CloudWatchLogsRoleArn property.","UpdateRequires":"No interruption"},"CloudWatchLogsRoleArn":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"EnableLogFileValidation":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"No interruption"},"IncludeGlobalServiceEvents":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"No interruption"},"IsLogging":{"Array":false,"Type":"Boolean","Required":"Yes","UpdateRequires":"No interruption"},"IsMultiRegionTrail":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"No interruption"},"KMSKeyId":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"S3BucketName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"S3KeyPrefix":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"SnsTopicName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"Tags":{"Array":true,"Type":"aws-properties-resource-tags","Required":"No","UpdateRequires":"No interruption."},"TrailName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"}}}},"Models":{"aws-properties-resource-tags":{"Name":"AWSCloudFormationResourceTagsType","Properties":{"Key":{"Array":false,"Type":"String","Required":"Yes"},"Value":{"Array":false,"Type":"String","Required":"Yes"}}}}};var CodeBuild={"Resources":{"Project":{"Name":"AWS::CodeBuild::Project","Properties":{"Artifacts":{"Array":false,"Type":"aws-properties-codebuild-project-artifacts","Required":"Yes","UpdateRequires":"No interruption"},"EncryptionKey":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"Environment":{"Array":false,"Type":"aws-properties-codebuild-project-environment","Required":"Yes","UpdateRequires":"No interruption"},"Name":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"ServiceRole":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"Source":{"Array":false,"Type":"aws-properties-codebuild-project-source","Required":"Yes","UpdateRequires":"No interruption"},"Tags":{"Array":true,"Type":"aws-properties-resource-tags","Required":"No","UpdateRequires":"No interruption"},"TimeoutInMinutes":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"No interruption"}}}},"Models":{"aws-properties-codebuild-project-artifacts":{"Name":"AWSCodeBuildProjectArtifacts","Properties":{"Location":{"Array":false,"Type":"String","Required":"Conditional. If you specify CODEPIPELINE or                                 NO_ARTIFACTS for the Type property, don't specify this                                 property. For all of the other types, you must specify this property."},"Name":{"Array":false,"Type":"String","Required":"Conditional. If you specify CODEPIPELINE or                                 NO_ARTIFACTS for the Type property, don't specify this                                 property. For all of the other types, you must specify this property."},"NamespaceType":{"Array":false,"Type":"String","Required":"No"},"Packaging":{"Array":false,"Type":"String","Required":"No"},"Path":{"Array":false,"Type":"String","Required":"No"},"Type":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-codebuild-project-environment":{"Name":"AWSCodeBuildProjectEnvironment","Properties":{"ComputeType":{"Array":false,"Type":"String","Required":"Yes"},"EnvironmentVariables":{"Array":true,"Type":"aws-properties-codebuild-project-environment-environmentvariables","Required":"No"},"Image":{"Array":false,"Type":"String","Required":"Yes"},"PrivilegedMode":{"Array":false,"Type":"Boolean","Required":"No"},"Type":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-codebuild-project-environment-environmentvariables":{"Name":"AWSCodeBuildProjectEnvironmentEnvironmentVariables","Properties":{"Name":{"Array":false,"Type":"String","Required":"Yes"},"Value":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-codebuild-project-source":{"Name":"AWSCodeBuildProjectSource","Properties":{"BuildSpec":{"Array":false,"Type":"String","Required":"No"},"Location":{"Array":false,"Type":"String","Required":"Conditional. If you specify CODEPIPELINE for the                                 Type property, don't specify this property. For all of the other types,                                 you must specify this property."},"Type":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-resource-tags":{"Name":"AWSCloudFormationResourceTagsType","Properties":{"Key":{"Array":false,"Type":"String","Required":"Yes"},"Value":{"Array":false,"Type":"String","Required":"Yes"}}}}};var CodeCommit={"Resources":{"Repository":{"Name":"AWS::CodeCommit::Repository","Properties":{"RepositoryDescription":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"RepositoryName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"Triggers":{"Array":true,"Type":"aws-properties-codecommit-repository-triggers","Required":"No","UpdateRequires":"No interruption"}}}},"Models":{"aws-properties-codecommit-repository-triggers":{"Name":"AWSCodeCommitRepositoryTrigger","Properties":{"Branches":{"Array":true,"Type":"String","Required":"No"},"CustomData":{"Array":false,"Type":"String","Required":"No"},"DestinationArn":{"Array":false,"Type":"String","Required":"No"},"Events":{"Array":true,"Type":"String","Required":"No"},"Name":{"Array":false,"Type":"String","Required":"Yes"}}}}};var CodeDeploy={"Resources":{"DeploymentGroup":{"Name":"AWS::CodeDeploy::DeploymentGroup","Properties":{"AlarmConfiguration":{"Array":false,"Type":"aws-properties-codedeploy-deploymentgroup-alarmconfiguration","Required":"No","UpdateRequires":"No interruption"},"ApplicationName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"AutoScalingGroups":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"Deployment":{"Array":false,"Type":"aws-properties-codedeploy-deploymentgroup-deployment","Required":"No","UpdateRequires":"No interruption"},"DeploymentConfigName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"DeploymentGroupName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"Ec2TagFilters":{"Array":true,"Type":"aws-properties-codedeploy-deploymentgroup-ec2tagfilters","Required":"No","UpdateRequires":"No interruption"},"OnPremisesInstanceTagFilters":{"Array":true,"Type":"aws-properties-codedeploy-deploymentgroup-onpremisesinstancetagfilters","Required":"No","UpdateRequires":"No interruption"},"ServiceRoleArn":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"TriggerConfigurations":{"Array":true,"Type":"aws-properties-codedeploy-deploymentgroup-triggerconfig","Required":"No","UpdateRequires":"No interruption"}}},"DeploymentConfig":{"Name":"AWS::CodeDeploy::DeploymentConfig","Properties":{"DeploymentConfigName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"MinimumHealthyHosts":{"Array":false,"Type":"aws-properties-codedeploy-deploymentconfig-minimumhealthyhosts","Required":"Yes","UpdateRequires":"Replacement"}}},"Application":{"Name":"AWS::CodeDeploy::Application","Properties":{"ApplicationName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Updates are not supported."}}}},"Models":{"aws-properties-codedeploy-deploymentgroup-alarmconfiguration":{"Name":"AWSCodeDeployDeploymentGroupAlarmConfiguration","Properties":{"Alarms":{"Array":true,"Type":"aws-properties-codedeploy-deploymentgroup-alarm","Required":"No","UpdateRequires":"No interruption"},"Enabled":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"No interruption"},"IgnorePollAlarmFailure":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"No interruption"}}},"aws-properties-codedeploy-deploymentgroup-alarm":{"Name":"AWSCodeDeployDeploymentGroupAlarm","Properties":{"Name":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"}}},"aws-properties-codedeploy-deploymentgroup-deployment":{"Name":"AWSCodeDeployDeploymentGroupDeployment","Properties":{"IgnoreApplicationStopFailures":{"Array":false,"Type":"Boolean","Required":"No"},"Revision":{"Array":false,"Type":"aws-properties-codedeploy-deploymentgroup-deployment-revision","Required":"Yes"}}},"aws-properties-codedeploy-deploymentgroup-deployment-revision":{"Name":"AWSCodeDeployDeploymentGroupDeploymentRevision","Properties":{"GitHubLocation":{"Array":false,"Type":"aws-properties-codedeploy-deploymentgroup-deployment-revision-githublocation","Required":"No"},"RevisionType":{"Array":false,"Type":"String","Required":"No"},"S3Location":{"Array":false,"Type":"aws-properties-codedeploy-deploymentgroup-deployment-revision-s3location","Required":"No"}}},"aws-properties-codedeploy-deploymentgroup-deployment-revision-githublocation":{"Name":"AWSCodeDeployDeploymentGroupDeploymentRevisionGitHubLocation","Properties":{"CommitId":{"Array":false,"Type":"String","Required":"Yes"},"Repository":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-codedeploy-deploymentgroup-deployment-revision-s3location":{"Name":"AWSCodeDeployDeploymentGroupDeploymentRevisionS3Location","Properties":{"Bucket":{"Array":false,"Type":"String","Required":"Yes"},"BundleType":{"Array":false,"Type":"String","Required":"Yes"},"ETag":{"Array":false,"Type":"String","Required":"No"},"Key":{"Array":false,"Type":"String","Required":"Yes"},"Version":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-codedeploy-deploymentgroup-ec2tagfilters":{"Name":"AWSCodeDeployDeploymentGroupEc2TagFilters","Properties":{"Key":{"Array":false,"Type":"String","Required":"No"},"Type":{"Array":false,"Type":"String","Required":"Yes"},"Value":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-codedeploy-deploymentgroup-onpremisesinstancetagfilters":{"Name":"AWSCodeDeployDeploymentGroupOnPremisesInstanceTagFilters","Properties":{"Key":{"Array":false,"Type":"String","Required":"No"},"Type":{"Array":false,"Type":"String","Required":"No"},"Value":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-codedeploy-deploymentgroup-triggerconfig":{"Name":"AWSCodeDeployDeploymentGroupTriggerConfig","Properties":{"TriggerEvents":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"TriggerName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"TriggerTargetArn":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"}}},"aws-properties-codedeploy-deploymentconfig-minimumhealthyhosts":{"Name":"AWSCodeDeployDeploymentConfigMinimumHealthyHosts","Properties":{"Type":{"Array":false,"Type":"String","Required":"Yes"},"Value":{"Array":false,"Type":"Number","Required":"Yes"}}}}};var CodePipeline={"Resources":{"Pipeline":{"Name":"AWS::CodePipeline::Pipeline","Properties":{"ArtifactStore":{"Array":false,"Type":"aws-properties-codepipeline-pipeline-artifactstore","Required":"Yes","UpdateRequires":"No interruption"},"DisableInboundStageTransitions":{"Array":true,"Type":"aws-properties-codepipeline-pipeline-disableinboundstagetransitions","Required":"No","UpdateRequires":"No interruption"},"Name":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"RestartExecutionOnUpdate":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"No interruption"},"RoleArn":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"Stages":{"Array":false,"Type":"aws-properties-codepipeline-pipeline-stages","Required":"Yes","UpdateRequires":"No interruption"}}},"CustomActionType":{"Name":"AWS::CodePipeline::CustomActionType","Properties":{"Category":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"ConfigurationProperties":{"Array":true,"Type":"aws-resource-codepipeline-customactiontype-configurationproperties","Required":"No","UpdateRequires":"Replacement"},"InputArtifactDetails":{"Array":false,"Type":"aws-resource-codepipeline-customactiontype-artifactdetails","Required":"Yes","UpdateRequires":"Replacement"},"OutputArtifactDetails":{"Array":false,"Type":"aws-resource-codepipeline-customactiontype-artifactdetails","Required":"Yes","UpdateRequires":"Replacement"},"Provider":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"Settings":{"Array":false,"Type":"aws-resource-codepipeline-customactiontype-settings","Required":"No","UpdateRequires":"Replacement"},"Version":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"}}}},"Models":{"aws-properties-codepipeline-pipeline-artifactstore":{"Name":"AWSCodePipelinePipelineArtifactStore","Properties":{"EncryptionKey":{"Array":false,"Type":"aws-properties-codepipeline-pipeline-artifactstore-encryptionkey","Required":"No"},"Location":{"Array":false,"Type":"String","Required":"Yes"},"Type":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-codepipeline-pipeline-artifactstore-encryptionkey":{"Name":"AWSCodePipelinePipelineArtifactStoreEncryptionKey","Properties":{"Id":{"Array":false,"Type":"String","Required":"Yes"},"Type":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-codepipeline-pipeline-disableinboundstagetransitions":{"Name":"AWSCodePipelinePipelineDisableInboundStageTransitions","Properties":{"Reason":{"Array":false,"Type":"String","Required":"Yes"},"StageName":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-codepipeline-pipeline-stages":{"Name":"AWSCodePipelinePipelineStages","Properties":{"Actions":{"Array":true,"Type":"aws-properties-codepipeline-pipeline-stages-actions","Required":"Yes"},"Blockers":{"Array":true,"Type":"aws-properties-codepipeline-pipeline-stages-blockers","Required":"No"},"Name":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-codepipeline-pipeline-stages-actions":{"Name":"AWSCodePipelinePipelineStagesActions","Properties":{"ActionTypeId":{"Array":false,"Type":"aws-properties-codepipeline-pipeline-stages-actions-actiontypeid","Required":"Yes"},"Configuration":{"Array":false,"Type":"Object","Required":"No"},"InputArtifacts":{"Array":true,"Type":"aws-properties-codepipeline-pipeline-stages-actions-inputartifacts","Required":"No"},"Name":{"Array":false,"Type":"String","Required":"Yes"},"OutputArtifacts":{"Array":true,"Type":"aws-properties-codepipeline-pipeline-stages-actions-outputartifacts","Required":"No"},"RoleArn":{"Array":false,"Type":"String","Required":"No"},"RunOrder":{"Array":false,"Type":"Number","Required":"No"}}},"aws-properties-codepipeline-pipeline-stages-actions-actiontypeid":{"Name":"AWSCodePipelinePipelineStagesActionsActionTypeId","Properties":{"Category":{"Array":false,"Type":"String","Required":"Yes"},"Owner":{"Array":false,"Type":"String","Required":"Yes"},"Provider":{"Array":false,"Type":"String","Required":"Yes"},"Version":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-codepipeline-pipeline-stages-actions-inputartifacts":{"Name":"AWSCodePipelinePipelineStagesActionsInputArtifacts","Properties":{"Name":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-codepipeline-pipeline-stages-actions-outputartifacts":{"Name":"AWSCodePipelinePipelineStagesActionsOutputArtifacts","Properties":{"Name":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-codepipeline-pipeline-stages-blockers":{"Name":"AWSCodePipelinePipelineStagesBlockers","Properties":{"Name":{"Array":false,"Type":"String","Required":"Yes"},"Type":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-resource-codepipeline-customactiontype-configurationproperties":{"Name":"AWSCodePipelineCustomActionTypeConfigurationProperties","Properties":{"Key":{"Array":false,"Type":"Boolean","Required":"Yes"},"Name":{"Array":false,"Type":"String","Required":"Yes"},"Queryable":{"Array":false,"Type":"Boolean","Required":"No"},"Required":{"Array":false,"Type":"Boolean","Required":"Yes"},"Secret":{"Array":false,"Type":"Boolean","Required":"Yes"},"Type":{"Array":false,"Type":"String","Required":"No"}}},"aws-resource-codepipeline-customactiontype-artifactdetails":{"Name":"AWSCodePipelineCustomActionTypeArtifactDetails","Properties":{"MaximumCount":{"Array":false,"Type":"Number","Required":"Yes"},"MinimumCount":{"Array":false,"Type":"Number","Required":"Yes"}}},"aws-resource-codepipeline-customactiontype-settings":{"Name":"AWSCodePipelineCustomActionTypeSettings","Properties":{"EntityUrlTemplate":{"Array":false,"Type":"String","Required":"No"},"ExecutionUrlTemplate":{"Array":false,"Type":"String","Required":"No"},"RevisionUrlTemplate":{"Array":false,"Type":"String","Required":"No"},"ThirdPartyConfigurationUrl":{"Array":false,"Type":"String","Required":"No"}}}}};var Cognito={"Resources":{"IdentityPool":{"Name":"AWS::Cognito::IdentityPool","Properties":{"IdentityPoolName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"AllowUnauthenticatedIdentities":{"Array":false,"Type":"Boolean","Required":"Yes","UpdateRequires":"No interruption"},"DeveloperProviderName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"SupportedLoginProviders":{"Array":false,"Type":"Map","Required":"No","UpdateRequires":"No interruption"},"CognitoIdentityProviders":{"Array":false,"Type":"aws-properties-cognito-identitypool-cognitoidentityprovider","Required":"No","UpdateRequires":"No interruption"},"SamlProviderARNs":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"OpenIdConnectProviderARNs":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"CognitoStreams":{"Array":false,"Type":"aws-properties-cognito-identitypool-cognitostreams","Required":"No","UpdateRequires":"No interruption"},"PushSync":{"Array":false,"Type":"aws-properties-cognito-identitypool-pushsync","Required":"No","UpdateRequires":"No interruption"},"CognitoEvents":{"Array":false,"Type":"StringtoStringmap","Required":"No","UpdateRequires":"No interruption"}}},"IdentityPoolRoleAttachment":{"Name":"AWS::Cognito::IdentityPoolRoleAttachment","Properties":{"IdentityPoolId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"RoleMappings":{"Array":false,"Type":"aws-properties-cognito-identitypoolroleattachment-rolemapping","Required":"No","UpdateRequires":"No interruption"},"Roles":{"Array":false,"Type":"Map","Required":"No","UpdateRequires":"No interruption"}}},"UserPoolUser":{"Name":"AWS::Cognito::UserPoolUser","Properties":{"DesiredDeliveryMediums":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"ForceAliasCreation":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"Replacement"},"UserAttributes":{"Array":true,"Type":"aws-properties-cognito-userpooluser-attributetype","Required":"No","UpdateRequires":"Replacement"},"MessageAction":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"Username":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"UserPoolId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"ValidationData":{"Array":true,"Type":"aws-properties-cognito-userpooluser-attributetype","Required":"No","UpdateRequires":"Replacement"}}},"UserPool":{"Name":"AWS::Cognito::UserPool","Properties":{"AdminCreateUserConfig":{"Array":false,"Type":"aws-properties-cognito-userpool-admincreateuserconfig","Required":"No","UpdateRequires":"No interruption"},"AliasAttributes":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"AutoVerifiedAttributes":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"DeviceConfiguration":{"Array":false,"Type":"aws-properties-cognito-userpool-deviceconfiguration","Required":"No","UpdateRequires":"No interruption"},"EmailConfiguration":{"Array":false,"Type":"aws-properties-cognito-userpool-emailconfiguration","Required":"No","UpdateRequires":"No interruption"},"EmailVerificationMessage":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"EmailVerificationSubject":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"LambdaConfig":{"Array":false,"Type":"aws-properties-cognito-userpool-lambdaconfig","Required":"No","UpdateRequires":"No interruption"},"MfaConfiguration":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"Policies":{"Array":false,"Type":"aws-properties-cognito-userpool-policies","Required":"No","UpdateRequires":"No interruption"},"UserPoolName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"Schema":{"Array":true,"Type":"aws-properties-cognito-userpool-schemaattribute","Required":"No","UpdateRequires":"Replacement"},"SmsAuthenticationMessage":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"SmsConfiguration":{"Array":false,"Type":"aws-properties-cognito-userpool-smsconfiguration","Required":"No","UpdateRequires":"No interruption"},"SmsVerificationMessage":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"UserPoolTags":{"Array":false,"Type":"Map","Required":"No","UpdateRequires":"No interruption"}}},"UserPoolClient":{"Name":"AWS::Cognito::UserPoolClient","Properties":{"ClientName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"ExplicitAuthFlows":{"Array":true,"Type":"Strings","Required":"No","UpdateRequires":"No interruption"},"GenerateSecret":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"Replacement"},"ReadAttributes":{"Array":true,"Type":"Strings","Required":"No","UpdateRequires":"No interruption"},"RefreshTokenValidity":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"No interruption"},"UserPoolId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"WriteAttributes":{"Array":true,"Type":"Strings","Required":"No","UpdateRequires":"No interruption"}}},"UserPoolGroup":{"Name":"AWS::Cognito::UserPoolGroup","Properties":{"GroupName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"Precedence":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"No interruption"},"RoleArn":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"UserPoolId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"}}},"UserPoolUserToGroupAttachment":{"Name":"AWS::Cognito::UserPoolUserToGroupAttachment","Properties":{"GroupName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"Username":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"UserPoolId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"}}}},"Models":{"aws-properties-cognito-identitypool-cognitoidentityprovider":{"Name":"AmazonCognitoIdentityPoolCognitoIdentityProvider","Properties":{"ClientId":{"Array":false,"Type":"String","Required":"No"},"ProviderName":{"Array":false,"Type":"String","Required":"No"},"ServerSideTokenCheck":{"Array":false,"Type":"Boolean","Required":"No"}}},"aws-properties-cognito-identitypool-cognitostreams":{"Name":"AmazonCognitoIdentityPoolCognitoStreams","Properties":{"RoleArn":{"Array":false,"Type":"String","Required":"No"},"StreamingStatus":{"Array":false,"Type":"String","Required":"No"},"StreamName":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-cognito-identitypool-pushsync":{"Name":"AmazonCognitoIdentityPoolPushSync","Properties":{"ApplicationArns":{"Array":true,"Type":"String","Required":"No"},"RoleArn":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-cognito-identitypoolroleattachment-rolemapping":{"Name":"AmazonCognitoIdentityPoolRoleAttachmentRoleMapping","Properties":{"AmbiguousRoleResolution":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"RulesConfiguration":{"Array":false,"Type":"aws-properties-cognito-identitypoolroleattachment-rolemapping-rulesconfiguration","Required":"No","UpdateRequires":"No interruption"},"Type":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"}}},"aws-properties-cognito-identitypoolroleattachment-rolemapping-rulesconfiguration":{"Name":"AmazonCognitoIdentityPoolRoleAttachmentRoleMappingRulesConfiguration","Properties":{"Rules":{"Array":true,"Type":"aws-properties-cognito-identitypoolroleattachment-mappingrule","Required":"Yes"}}},"aws-properties-cognito-identitypoolroleattachment-mappingrule":{"Name":"AmazonCognitoIdentityPoolRoleAttachmentMappingRule","Properties":{"Claim":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"MatchType":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"RoleARN":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"Value":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"}}},"aws-properties-cognito-userpooluser-attributetype":{"Name":"AmazonCognitoUserPoolUserAttributeType","Properties":{"Name":{"Array":false,"Type":"String","Required":"Yes"},"Value":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-cognito-userpool-admincreateuserconfig":{"Name":"AmazonCognitoUserPoolAdminCreateUserConfig","Properties":{"AllowAdminCreateUserOnly":{"Array":false,"Type":"Boolean","Required":"No"},"InviteMessageTemplate":{"Array":false,"Type":"aws-properties-cognito-userpool-admincreateuserconfig-invitemessagetemplate","Required":"No"},"UnusedAccountValidityDays":{"Array":false,"Type":"Number","Required":"No"}}},"aws-properties-cognito-userpool-admincreateuserconfig-invitemessagetemplate":{"Name":"AmazonCognitoUserPoolInviteMessageTemplate","Properties":{"EmailMessage":{"Array":false,"Type":"String","Required":"No"},"EmailSubject":{"Array":false,"Type":"String","Required":"No"},"SMSMessage":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-cognito-userpool-deviceconfiguration":{"Name":"AmazonCognitoUserPoolDeviceConfiguration","Properties":{"ChallengeRequiredOnNewDevice":{"Array":false,"Type":"Boolean","Required":"No"},"DeviceOnlyRememberedOnUserPrompt":{"Array":false,"Type":"Boolean","Required":"No"}}},"aws-properties-cognito-userpool-emailconfiguration":{"Name":"AmazonCognitoUserPoolEmailConfiguration","Properties":{"ReplyToEmailAddress":{"Array":false,"Type":"String","Required":"No"},"SourceArn":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-cognito-userpool-lambdaconfig":{"Name":"AmazonCognitoUserPoolLambdaConfig","Properties":{"CreateAuthChallenge":{"Array":false,"Type":"String","Required":"No"},"CustomMessage":{"Array":false,"Type":"String","Required":"No"},"DefineAuthChallenge":{"Array":false,"Type":"String","Required":"No"},"PostAuthentication":{"Array":false,"Type":"String","Required":"No"},"PostConfirmation":{"Array":false,"Type":"String","Required":"No"},"PreAuthentication":{"Array":false,"Type":"String","Required":"No"},"PreSignUp":{"Array":false,"Type":"String","Required":"No"},"VerifyAuthChallengeResponse":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-cognito-userpool-policies":{"Name":"AmazonCognitoUserPoolPolicies","Properties":{"PasswordPolicy":{"Array":false,"Type":"aws-properties-cognito-userpool-passwordpolicy","Required":"No"}}},"aws-properties-cognito-userpool-passwordpolicy":{"Name":"AmazonCognitoUserPoolPasswordPolicy","Properties":{"MinimumLength":{"Array":false,"Type":"Number","Required":"No"},"RequireLowercase":{"Array":false,"Type":"Boolean","Required":"No"},"RequireNumbers":{"Array":false,"Type":"Boolean","Required":"No"},"RequireSymbols":{"Array":false,"Type":"Boolean","Required":"No"},"RequireUppercase":{"Array":false,"Type":"Boolean","Required":"No"}}},"aws-properties-cognito-userpool-schemaattribute":{"Name":"AmazonCognitoUserPoolSchemaAttribute","Properties":{"AttributeDataType":{"Array":false,"Type":"String","Required":"No"},"DeveloperOnlyAttribute":{"Array":false,"Type":"Boolean","Required":"No"},"Mutable":{"Array":false,"Type":"Boolean","Required":"No"},"Name":{"Array":false,"Type":"String","Required":"No"},"NumberAttributeConstraints":{"Array":false,"Type":"aws-properties-cognito-userpool-numberattributeconstraints","Required":"No"},"StringAttributeConstraints":{"Array":false,"Type":"aws-properties-cognito-userpool-stringattributeconstraints","Required":"No"},"Required":{"Array":false,"Type":"Boolean","Required":"No"}}},"aws-properties-cognito-userpool-numberattributeconstraints":{"Name":"AmazonCognitoUserPoolNumberAttributeConstraints","Properties":{"MaxValue":{"Array":false,"Type":"String","Required":"No"},"MinValue":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-cognito-userpool-stringattributeconstraints":{"Name":"AmazonCognitoUserPoolStringAttributeConstraints","Properties":{"MaxLength":{"Array":false,"Type":"String","Required":"No"},"MinLength":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-cognito-userpool-smsconfiguration":{"Name":"AmazonCognitoUserPoolSmsConfiguration","Properties":{"ExternalId":{"Array":false,"Type":"String","Required":"No"},"SnsCallerArn":{"Array":false,"Type":"String","Required":"Yes"}}}}};var Config={"Resources":{"ConfigurationRecorder":{"Name":"AWS::Config::ConfigurationRecorder","Properties":{"Name":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Updates are not supported."},"RecordingGroup":{"Array":false,"Type":"aws-properties-config-configurationrecorder-recordinggroup","Required":"No","UpdateRequires":"No interruption"},"RoleARN":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"}}},"ConfigRule":{"Name":"AWS::Config::ConfigRule","Properties":{"ConfigRuleName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"InputParameters":{"Array":false,"Type":"Object","Required":"No","UpdateRequires":"No interruption"},"MaximumExecutionFrequency":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"Scope":{"Array":false,"Type":"aws-properties-config-configrule-scope","Required":"No","UpdateRequires":"No interruption"},"Source":{"Array":false,"Type":"aws-properties-config-configrule-source","Required":"Yes","UpdateRequires":"No interruption"}}},"DeliveryChannel":{"Name":"AWS::Config::DeliveryChannel","Properties":{"ConfigSnapshotDeliveryProperties":{"Array":false,"Type":"aws-properties-config-deliverychannel-configsnapshotdeliveryproperties","Required":"No","UpdateRequires":"No interruption"},"Name":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Updates are not supported. To change the name, you must run two separate updates.\n                                 In the\n                                 first update, delete this resource, and then recreate it with a new name in the second\n                                 update."},"S3BucketName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"S3KeyPrefix":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"SnsTopicARN":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"}}}},"Models":{"aws-properties-config-configurationrecorder-recordinggroup":{"Name":"AWSConfigConfigurationRecorderRecordingGroup","Properties":{"AllSupported":{"Array":false,"Type":"Boolean","Required":"No"},"IncludeGlobalResourceTypes":{"Array":false,"Type":"Boolean","Required":"No"},"ResourceTypes":{"Array":true,"Type":"String","Required":"No"}}},"aws-properties-config-configrule-scope":{"Name":"AWSConfigConfigRuleScope","Properties":{"ComplianceResourceId":{"Array":false,"Type":"String","Required":"No"},"ComplianceResourceTypes":{"Array":true,"Type":"String","Required":"Conditional. If you specify a value for the                                 ComplianceResourceId property, you must also specify this                                 property."},"TagKey":{"Array":false,"Type":"String","Required":"Conditional. If you specify a tag value, you must specify this                                 property."},"TagValue":{"Array":false,"Type":"String","Required":"Conditional. If you specify a tag key, you must specify this                                 property."}}},"aws-properties-config-configrule-source":{"Name":"AWSConfigConfigRuleSource","Properties":{"Owner":{"Array":false,"Type":"String","Required":"Yes"},"SourceDetails":{"Array":true,"Type":"aws-properties-config-configrule-source-sourcedetails","Required":"No"},"SourceIdentifier":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-config-configrule-source-sourcedetails":{"Name":"AWSConfigConfigRuleSourceSourceDetails","Properties":{"EventSource":{"Array":false,"Type":"String","Required":"Yes"},"MaximumExecutionFrequency":{"Array":false,"Type":"String","Required":"No"},"MessageType":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-config-deliverychannel-configsnapshotdeliveryproperties":{"Name":"AWSConfigDeliveryChannelConfigSnapshotDeliveryProperties","Properties":{"DeliveryFrequency":{"Array":false,"Type":"String","Required":"No"}}}}};var DataPipeline={"Resources":{"Pipeline":{"Name":"AWS::DataPipeline::Pipeline","Properties":{"Activate":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"No interruption"},"Name":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"ParameterObjects":{"Array":false,"Type":"aws-properties-datapipeline-pipeline-parameterobjects","Required":"No","UpdateRequires":"No interruption"},"ParameterValues":{"Array":false,"Type":"aws-properties-datapipeline-pipeline-parametervalues","Required":"No","UpdateRequires":"No interruption"},"PipelineObjects":{"Array":true,"Type":"aws-properties-datapipeline-pipeline-pipelineobjects","Required":"Yes","UpdateRequires":"Some interruptions. Not all objects, fields, and values can be updated.\n                                 Restrictions on what can be updated are documented in Editing Your\n                                    Pipelines in the AWS Data Pipeline Developer Guide."},"PipelineTags":{"Array":false,"Type":"aws-properties-datapipeline-pipeline-pipelinetags","Required":"No","UpdateRequires":"No interruption"}}}},"Models":{"aws-properties-datapipeline-pipeline-parameterobjects":{"Name":"AWSDataPipelinePipelineParameterObjects","Properties":{"Attributes":{"Array":false,"Type":"aws-properties-datapipeline-pipeline-parameterobjects-attributes","Required":"Yes"},"Id":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-datapipeline-pipeline-parameterobjects-attributes":{"Name":"AWSDataPipelineParameterObjectsAttributes","Properties":{"Key":{"Array":false,"Type":"String","Required":"Yes"},"StringValue":{"Array":false,"Type":"String","Required":"Conditional if the key that you are using requires it."}}},"aws-properties-datapipeline-pipeline-parametervalues":{"Name":"AWSDataPipelinePipelineParameterValues","Properties":{"Id":{"Array":false,"Type":"String","Required":"Yes"},"StringValue":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-datapipeline-pipeline-pipelineobjects":{"Name":"AWSDataPipelinePipelineObjects","Properties":{"Fields":{"Array":false,"Type":"aws-properties-datapipeline-pipeline-pipelineobjects-fields","Required":"Yes"},"Id":{"Array":false,"Type":"String","Required":"Yes"},"Name":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-datapipeline-pipeline-pipelineobjects-fields":{"Name":"AWSDataPipelineDataPipelineObjectFields","Properties":{"Key":{"Array":false,"Type":"String","Required":"Yes"},"RefValue":{"Array":false,"Type":"String","Required":"Conditional if the key that you are using requires it."},"StringValue":{"Array":false,"Type":"String","Required":"Conditional if the key that you are using requires it."}}},"aws-properties-datapipeline-pipeline-pipelinetags":{"Name":"AWSDataPipelinePipelinePipelineTags","Properties":{"Key":{"Array":false,"Type":"String","Required":"Yes"},"Value":{"Array":false,"Type":"String","Required":"Yes"}}}}};var DirectoryService={"Resources":{"MicrosoftAD":{"Name":"AWS::DirectoryService::MicrosoftAD","Properties":{"CreateAlias":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"Replacement"},"EnableSso":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"No interruption"},"Name":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"Password":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"ShortName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"VpcSettings":{"Array":false,"Type":"aws-properties-directoryservice-microsoftad-vpcsettings","Required":"Yes","UpdateRequires":"Replacement"}}},"SimpleAD":{"Name":"AWS::DirectoryService::SimpleAD","Properties":{"CreateAlias":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"Replacement"},"EnableSso":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"No interruption"},"Name":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"Password":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"ShortName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"Size":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"VpcSettings":{"Array":false,"Type":"aws-properties-directoryservice-simplead-vpcsettings","Required":"Yes","UpdateRequires":"Replacement"}}}},"Models":{"aws-properties-directoryservice-microsoftad-vpcsettings":{"Name":"AWSDirectoryServiceMicrosoftADVpcSettings","Properties":{"SubnetIds":{"Array":true,"Type":"String","Required":"Yes"},"VpcId":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-directoryservice-simplead-vpcsettings":{"Name":"AWSDirectoryServiceSimpleADVpcSettings","Properties":{"SubnetIds":{"Array":true,"Type":"String","Required":"Yes"},"VpcId":{"Array":false,"Type":"String","Required":"Yes"}}}}};var DMS={"Resources":{"Endpoint":{"Name":"AWS::DMS::Endpoint","Properties":{"CertificateArn":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"DatabaseName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"DynamoDbSettings":{"Array":false,"Type":"aws-properties-dms-endpoint-dynamodbsettings","Required":"No","UpdateRequires":"No interruption"},"EndpointIdentifier":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"EndpointType":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"EngineName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"ExtraConnectionAttributes":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"KmsKeyId":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"MongoDbSettings":{"Array":false,"Type":"aws-properties-dms-endpoint-mongodbsettings","Required":"No","UpdateRequires":"No interruption"},"Password":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"Port":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"No interruption"},"S3Settings":{"Array":false,"Type":"aws-properties-dms-endpoint-s3settings","Required":"No","UpdateRequires":"No interruption"},"ServerName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"SslMode":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"Tags":{"Array":true,"Type":"aws-properties-resource-tags","Required":"No","UpdateRequires":"Replacement"},"Username":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"}}},"Certificate":{"Name":"AWS::DMS::Certificate","Properties":{"CertificateIdentifier":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"CertificatePem":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"CertificateWallet":{"Array":false,"Type":"Base64-encodedbinarydataobject","Required":"No","UpdateRequires":"Replacement"}}},"EventSubscription":{"Name":"AWS::DMS::EventSubscription","Properties":{"Enabled":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"No interruption"},"EventCategories":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"SnsTopicArn":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"SourceIds":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"SourceType":{"Array":false,"Type":"String","Required":"Conditional. If you specify the SourceIds                                  or EventCategories property, you must specify this property.","UpdateRequires":"No interruption"},"SubscriptionName":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"Tags":{"Array":true,"Type":"aws-properties-resource-tags","Required":"No","UpdateRequires":"Replacement"}}},"ReplicationInstance":{"Name":"AWS::DMS::ReplicationInstance","Properties":{"AllocatedStorage":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"No interruption"},"AutoMinorVersionUpgrade":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"No interruption"},"AvailabilityZone":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"EngineVersion":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Some interruptions"},"KmsKeyId":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"MultiAZ":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"No interruption"},"PreferredMaintenanceWindow":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"PubliclyAccessible":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"Replacement"},"ReplicationInstanceClass":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Some interruptions"},"ReplicationInstanceIdentifier":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"ReplicationSubnetGroupIdentifier":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"Tags":{"Array":true,"Type":"aws-properties-resource-tags","Required":"No","UpdateRequires":"Replacement"},"VpcSecurityGroupIds":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"No interruption"}}},"ReplicationSubnetGroup":{"Name":"AWS::DMS::ReplicationSubnetGroup","Properties":{"ReplicationSubnetGroupIdentifier":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"ReplicationSubnetGroupDescription":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"SubnetIds":{"Array":true,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"Tags":{"Array":true,"Type":"aws-properties-resource-tags","Required":"No","UpdateRequires":"Replacement"}}},"ReplicationTask":{"Name":"AWS::DMS::ReplicationTask","Properties":{"CdcStartTime":{"Array":false,"Type":"Number,epicvalueinmilliseconds","Required":"No","UpdateRequires":"No interruption"},"MigrationType":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"ReplicationInstanceArn":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"ReplicationTaskIdentifier":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"ReplicationTaskSettings":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"SourceEndpointArn":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"TableMappings":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"Tags":{"Array":true,"Type":"aws-properties-resource-tags","Required":"No","UpdateRequires":"Replacement"},"TargetEndpointArn":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"}}}},"Models":{"aws-properties-dms-endpoint-dynamodbsettings":{"Name":"AWSDMSEndpointDynamoDBSettings","Properties":{"ServiceAccessRoleArn":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-dms-endpoint-mongodbsettings":{"Name":"AWSDMSEndpointMongoDbSettings","Properties":{"AuthMechanism":{"Array":false,"Type":"String","Required":"No"},"AuthSource":{"Array":false,"Type":"String","Required":"No"},"DatabaseName":{"Array":false,"Type":"String","Required":"No"},"DocsToInvestigate":{"Array":false,"Type":"String","Required":"No"},"ExtractDocId":{"Array":false,"Type":"String","Required":"No"},"KmsKeyId":{"Array":false,"Type":"String","Required":"No"},"NestingLevel":{"Array":false,"Type":"String","Required":"No"},"Password":{"Array":false,"Type":"String","Required":"No"},"Port":{"Array":false,"Type":"Number","Required":"No"},"ServerName":{"Array":false,"Type":"String","Required":"No"},"Username":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-dms-endpoint-s3settings":{"Name":"AWSDMSEndpointS3Settings","Properties":{"BucketFolder":{"Array":false,"Type":"String","Required":"No"},"BucketName":{"Array":false,"Type":"String","Required":"No"},"CompressionType":{"Array":false,"Type":"String","Required":"No"},"CsvDelimiter":{"Array":false,"Type":"String","Required":"No"},"CsvRowDelimiter":{"Array":false,"Type":"String","Required":"No"},"ExternalTableDefinition":{"Array":false,"Type":"String","Required":"No"},"ServiceAccessRoleArn":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-resource-tags":{"Name":"AWSCloudFormationResourceTagsType","Properties":{"Key":{"Array":false,"Type":"String","Required":"Yes"},"Value":{"Array":false,"Type":"String","Required":"Yes"}}}}};var DynamoDB={"Resources":{"Table":{"Name":"AWS::DynamoDB::Table","Properties":{"AttributeDefinitions":{"Array":true,"Type":"aws-properties-dynamodb-attributedef","Required":"Yes","UpdateRequires":"No interruption"},"GlobalSecondaryIndexes":{"Array":true,"Type":"aws-properties-dynamodb-gsi","Required":"No","UpdateRequires":"Updates are not supported. with the following exceptions:"},"KeySchema":{"Array":true,"Type":"aws-properties-dynamodb-keyschema","Required":"Yes","UpdateRequires":"Replacement"},"LocalSecondaryIndexes":{"Array":true,"Type":"aws-properties-dynamodb-lsi","Required":"No","UpdateRequires":"Replacement"},"ProvisionedThroughput":{"Array":false,"Type":"aws-properties-dynamodb-provisionedthroughput","Required":"Yes","UpdateRequires":"No interruption"},"StreamSpecification":{"Array":false,"Type":"aws-properties-dynamodb-streamspecification","Required":"No","UpdateRequires":"No interruption to the table; however, the stream is replaced."},"TableName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"Tags":{"Array":true,"Type":"aws-properties-resource-tags","Required":"No","UpdateRequires":"No interruption"},"TimeToLiveSpecification":{"Array":false,"Type":"aws-properties-dynamodb-table-timetolivespecification","Required":"No","UpdateRequires":"No interruption"}}}},"Models":{"aws-properties-dynamodb-attributedef":{"Name":"DynamoDBAttributeDefinitions","Properties":{"AttributeName":{"Array":false,"Type":"String","Required":"Yes"},"AttributeType":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-dynamodb-gsi":{"Name":"DynamoDBGlobalSecondaryIndexes","Properties":{"IndexName":{"Array":false,"Type":"String","Required":"Yes"},"KeySchema":{"Array":false,"Type":"aws-properties-dynamodb-keyschema","Required":"Yes"},"Projection":{"Array":false,"Type":"aws-properties-dynamodb-projectionobject","Required":"Yes"},"ProvisionedThroughput":{"Array":false,"Type":"aws-properties-dynamodb-provisionedthroughput","Required":"Yes"}}},"aws-properties-dynamodb-keyschema":{"Name":"DynamoDBKeySchema","Properties":{"AttributeName":{"Array":false,"Type":"String","Required":"Yes"},"KeyType":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-dynamodb-projectionobject":{"Name":"DynamoDBProjectionObject","Properties":{"NonKeyAttributes":{"Array":true,"Type":"String","Required":"Yes"},"ProjectionType":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-dynamodb-provisionedthroughput":{"Name":"DynamoDBProvisionedThroughput","Properties":{"ReadCapacityUnits":{"Array":false,"Type":"Number","Required":"Yes"},"WriteCapacityUnits":{"Array":false,"Type":"Number","Required":"Yes"}}},"aws-properties-dynamodb-lsi":{"Name":"DynamoDBLocalSecondaryIndexes","Properties":{"IndexName":{"Array":false,"Type":"String","Required":"Yes"},"KeySchema":{"Array":false,"Type":"aws-properties-dynamodb-keyschema","Required":"Yes"},"Projection":{"Array":false,"Type":"aws-properties-dynamodb-projectionobject","Required":"Yes"}}},"aws-properties-dynamodb-streamspecification":{"Name":"DynamoDBTableStreamSpecification","Properties":{"StreamViewType":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-resource-tags":{"Name":"AWSCloudFormationResourceTagsType","Properties":{"Key":{"Array":false,"Type":"String","Required":"Yes"},"Value":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-dynamodb-table-timetolivespecification":{"Name":"DynamoDBTableTimeToLiveSpecification","Properties":{"AttributeName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"Enabled":{"Array":false,"Type":"Boolean","Required":"Yes","UpdateRequires":"No interruption"}}}}};var ECS={"Resources":{"Cluster":{"Name":"AWS::ECS::Cluster","Properties":{"ClusterName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"}}},"Service":{"Name":"AWS::ECS::Service","Properties":{"Cluster":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"DeploymentConfiguration":{"Array":false,"Type":"aws-properties-ecs-service-deploymentconfiguration","Required":"No","UpdateRequires":"No interruption"},"PlacementConstraints":{"Array":false,"Type":"aws-properties-ecs-service-placementconstraints-placementconstraint","Required":"No","UpdateRequires":"Replacement"},"PlacementStrategies":{"Array":false,"Type":"aws-properties-ecs-service-placementstrategies-placementstrategy","Required":"No","UpdateRequires":"Replacement"},"DesiredCount":{"Array":false,"Type":"Number","Required":"Yes","UpdateRequires":"No interruption"},"LoadBalancers":{"Array":true,"Type":"aws-properties-ecs-service-loadbalancers","Required":"No","UpdateRequires":"Replacement"},"Role":{"Array":false,"Type":"String","Required":"Conditional. Required only if you specify the                                 LoadBalancers property.","UpdateRequires":"Replacement"},"ServiceName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"TaskDefinition":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Some interruptions"}}},"TaskDefinition":{"Name":"AWS::ECS::TaskDefinition","Properties":{"Volumes":{"Array":true,"Type":"aws-properties-ecs-taskdefinition-volumes","Required":"No","UpdateRequires":"Replacement"},"Family":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"NetworkMode":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"TaskRoleArn":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"PlacementConstraints":{"Array":false,"Type":"aws-properties-ecs-taskdefinition-placementconstraints-taskdefinitionplacementconstraint","Required":"No","UpdateRequires":"Replacement"},"ContainerDefinitions":{"Array":true,"Type":"aws-properties-ecs-taskdefinition-containerdefinitions","Required":"Yes","UpdateRequires":"Replacement"}}}},"Models":{"aws-properties-ecs-service-deploymentconfiguration":{"Name":"AmazonEC2ContainerServiceServiceDeploymentConfiguration","Properties":{"MaximumPercent":{"Array":false,"Type":"Number","Required":"No"},"MinimumHealthyPercent":{"Array":false,"Type":"Number","Required":"No"}}},"aws-properties-ecs-service-placementconstraints-placementconstraint":{"Name":"AmazonEC2ContainerServiceServicePlacementConstraint","Properties":{"Type":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"Expression":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"}}},"aws-properties-ecs-service-placementstrategies-placementstrategy":{"Name":"AmazonEC2ContainerServiceServicePlacementStrategies","Properties":{"Type":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"Field":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"}}},"aws-properties-ecs-service-loadbalancers":{"Name":"AmazonEC2ContainerServiceServiceLoadBalancers","Properties":{"ContainerName":{"Array":false,"Type":"String","Required":"Yes"},"ContainerPort":{"Array":false,"Type":"Number","Required":"Yes"},"LoadBalancerName":{"Array":false,"Type":"String","Required":"No"},"TargetGroupArn":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-ecs-taskdefinition-volumes":{"Name":"AmazonEC2ContainerServiceTaskDefinitionVolumes","Properties":{"Name":{"Array":false,"Type":"String","Required":"Yes"},"Host":{"Array":false,"Type":"aws-properties-ecs-taskdefinition-volumes-host","Required":"No"}}},"aws-properties-ecs-taskdefinition-volumes-host":{"Name":"AmazonEC2ContainerServiceTaskDefinitionVolumesHost","Properties":{"SourcePath":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-ecs-taskdefinition-placementconstraints-taskdefinitionplacementconstraint":{"Name":"AmazonEC2ContainerServiceServicePlacementConstraint","Properties":{"Type":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"Expression":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"}}},"aws-properties-ecs-taskdefinition-containerdefinitions":{"Name":"AmazonEC2ContainerServiceTaskDefinitionContainerDefinitions","Properties":{"Command":{"Array":true,"Type":"String","Required":"No"},"Cpu":{"Array":false,"Type":"Number","Required":"No"},"DisableNetworking":{"Array":false,"Type":"Boolean","Required":"No"},"DnsSearchDomains":{"Array":true,"Type":"String","Required":"No"},"DnsServers":{"Array":true,"Type":"String","Required":"No"},"DockerLabels":{"Array":false,"Type":"Map","Required":"No"},"DockerSecurityOptions":{"Array":true,"Type":"String","Required":"No"},"EntryPoint":{"Array":true,"Type":"String","Required":"No"},"Environment":{"Array":true,"Type":"aws-properties-ecs-taskdefinition-containerdefinitions-environment","Required":"No"},"Essential":{"Array":false,"Type":"Boolean","Required":"No"},"ExtraHosts":{"Array":true,"Type":"aws-properties-ecs-taskdefinition-containerdefinitions-hostentry","Required":"No"},"Hostname":{"Array":false,"Type":"String","Required":"No"},"Image":{"Array":false,"Type":"String","Required":"No"},"Links":{"Array":true,"Type":"String","Required":"No"},"LogConfiguration":{"Array":false,"Type":"aws-properties-ecs-taskdefinition-containerdefinitions-logconfiguration","Required":"No"},"Memory":{"Array":false,"Type":"Number","Required":"Conditional. You must specify one or both of the                                 Memory or MemoryReservation properties. If you                                 specify both, the value for the Memory property must be greater                                 than the value of the MemoryReservation property."},"MemoryReservation":{"Array":false,"Type":"Number","Required":"Conditional. You must specify one or both of the                                 Memory or MemoryReservation properties. If you                                 specify both, the value for the Memory property must be greater                                 than the value of the MemoryReservation property."},"MountPoints":{"Array":true,"Type":"aws-properties-ecs-taskdefinition-containerdefinitions-mountpoints","Required":"No"},"Name":{"Array":false,"Type":"String","Required":"No"},"PortMappings":{"Array":true,"Type":"aws-properties-ecs-taskdefinition-containerdefinitions-portmappings","Required":"No"},"Privileged":{"Array":false,"Type":"Boolean","Required":"No"},"ReadonlyRootFilesystem":{"Array":false,"Type":"Boolean","Required":"No"},"Ulimits":{"Array":true,"Type":"aws-properties-ecs-taskdefinition-containerdefinitions-ulimit","Required":"No"},"User":{"Array":false,"Type":"String","Required":"No"},"VolumesFrom":{"Array":true,"Type":"aws-properties-ecs-taskdefinition-containerdefinitions-volumesfrom","Required":"No"},"WorkingDirectory":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-ecs-taskdefinition-containerdefinitions-environment":{"Name":"AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsEnvironment","Properties":{"Name":{"Array":false,"Type":"String","Required":"Yes"},"Value":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-ecs-taskdefinition-containerdefinitions-hostentry":{"Name":"AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsHostEntry","Properties":{"Hostname":{"Array":false,"Type":"String","Required":"Yes"},"IpAddress":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-ecs-taskdefinition-containerdefinitions-logconfiguration":{"Name":"AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsLogConfiguration","Properties":{"LogDriver":{"Array":false,"Type":"String","Required":"Yes"},"Options":{"Array":false,"Type":"Map","Required":"No"}}},"aws-properties-ecs-taskdefinition-containerdefinitions-mountpoints":{"Name":"AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsMountPoints","Properties":{"ContainerPath":{"Array":false,"Type":"String","Required":"Yes"},"SourceVolume":{"Array":false,"Type":"String","Required":"Yes"},"ReadOnly":{"Array":false,"Type":"Boolean","Required":"No"}}},"aws-properties-ecs-taskdefinition-containerdefinitions-portmappings":{"Name":"AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsPortMappings","Properties":{"ContainerPort":{"Array":false,"Type":"Number","Required":"Yes"},"HostPort":{"Array":false,"Type":"Number","Required":"No"},"Protocol":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-ecs-taskdefinition-containerdefinitions-ulimit":{"Name":"AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsUlimit","Properties":{"HardLimit":{"Array":false,"Type":"Number","Required":"Yes"},"Name":{"Array":false,"Type":"String","Required":"No"},"SoftLimit":{"Array":false,"Type":"Number","Required":"Yes"}}},"aws-properties-ecs-taskdefinition-containerdefinitions-volumesfrom":{"Name":"AmazonEC2ContainerServiceTaskDefinitionContainerDefinitionsVolumesFrom","Properties":{"SourceContainer":{"Array":false,"Type":"String","Required":"Yes"},"ReadOnly":{"Array":false,"Type":"Boolean","Required":"No"}}}}};var ECR={"Resources":{"Repository":{"Name":"AWS::ECR::Repository","Properties":{"RepositoryName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"RepositoryPolicyText":{"Array":false,"Type":"Object","Required":"No","UpdateRequires":"No interruption"}}}},"Models":{}};var EFS={"Resources":{"FileSystem":{"Name":"AWS::EFS::FileSystem","Properties":{"FileSystemTags":{"Array":false,"Type":"aws-properties-efs-filesystem-filesystemtags","Required":"No","UpdateRequires":"No interruption"},"PerformanceMode":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"}}},"MountTarget":{"Name":"AWS::EFS::MountTarget","Properties":{"FileSystemId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"IpAddress":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"SecurityGroups":{"Array":true,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"SubnetId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"}}}},"Models":{"aws-properties-efs-filesystem-filesystemtags":{"Name":"AmazonElasticFileSystemFileSystemFileSystemTags","Properties":{"Key":{"Array":false,"Type":"String","Required":"No"},"Value":{"Array":false,"Type":"String","Required":"No"}}}}};var ElasticLoadBalancingV2={"Resources":{"ListenerRule":{"Name":"AWS::ElasticLoadBalancingV2::ListenerRule","Properties":{"Actions":{"Array":true,"Type":"aws-properties-elasticloadbalancingv2-listenerrule-actions","Required":"Yes","UpdateRequires":"No interruption"},"Conditions":{"Array":true,"Type":"aws-properties-elasticloadbalancingv2-listenerrule-conditions","Required":"Yes","UpdateRequires":"No interruption"},"ListenerArn":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"Priority":{"Array":false,"Type":"Number","Required":"Yes","UpdateRequires":"No interruption"}}},"Listener":{"Name":"AWS::ElasticLoadBalancingV2::Listener","Properties":{"Certificates":{"Array":true,"Type":"aws-properties-elasticloadbalancingv2-listener-certificates","Required":"Conditional. If you specify HTTPS for the Protocol property, specify a certificate.","UpdateRequires":"No interruption"},"DefaultActions":{"Array":true,"Type":"aws-properties-elasticloadbalancingv2-listener-defaultactions","Required":"Yes","UpdateRequires":"No interruption"},"LoadBalancerArn":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"Port":{"Array":false,"Type":"Number","Required":"Yes","UpdateRequires":"No interruption"},"Protocol":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"SslPolicy":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"}}},"LoadBalancer":{"Name":"AWS::ElasticLoadBalancingV2::LoadBalancer","Properties":{"LoadBalancerAttributes":{"Array":true,"Type":"aws-properties-elasticloadbalancingv2-loadbalancer-loadbalancerattributes","Required":"No","UpdateRequires":"No interruption"},"Name":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"Scheme":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"SecurityGroups":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"Subnets":{"Array":true,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"Tags":{"Array":true,"Type":"aws-properties-resource-tags","Required":"No","UpdateRequires":"No interruption"},"IpAddressType":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"}}},"TargetGroup":{"Name":"AWS::ElasticLoadBalancingV2::TargetGroup","Properties":{"HealthCheckIntervalSeconds":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"No interruption"},"HealthCheckPath":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"HealthCheckPort":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"HealthCheckProtocol":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"HealthCheckTimeoutSeconds":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"No interruption"},"HealthyThresholdCount":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"No interruption"},"Matcher":{"Array":false,"Type":"aws-properties-elasticloadbalancingv2-targetgroup-matcher","Required":"No","UpdateRequires":"No interruption"},"Name":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"Port":{"Array":false,"Type":"Number","Required":"Yes","UpdateRequires":"Replacement"},"Protocol":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"Tags":{"Array":true,"Type":"aws-properties-resource-tags","Required":"No","UpdateRequires":"No interruption."},"TargetGroupAttributes":{"Array":true,"Type":"aws-properties-elasticloadbalancingv2-targetgroup-targetgroupattributes","Required":"No","UpdateRequires":"No interruption"},"Targets":{"Array":true,"Type":"aws-properties-elasticloadbalancingv2-targetgroup-targetdescription","Required":"No","UpdateRequires":"No interruption"},"UnhealthyThresholdCount":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"No interruption"},"VpcId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"}}}},"Models":{"aws-properties-elasticloadbalancingv2-listenerrule-actions":{"Name":"ElasticLoadBalancingListenerRuleActions","Properties":{"TargetGroupArn":{"Array":false,"Type":"String","Required":"Yes"},"Type":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-elasticloadbalancingv2-listenerrule-conditions":{"Name":"ElasticLoadBalancingListenerRuleConditions","Properties":{"Field":{"Array":false,"Type":"String","Required":"No"},"Values":{"Array":true,"Type":"String","Required":"No"}}},"aws-properties-elasticloadbalancingv2-listener-certificates":{"Name":"ElasticLoadBalancingListenerCertificates","Properties":{"CertificateArn":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-elasticloadbalancingv2-listener-defaultactions":{"Name":"ElasticLoadBalancingListenerDefaultActions","Properties":{"TargetGroupArn":{"Array":false,"Type":"String","Required":"Yes"},"Type":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-elasticloadbalancingv2-loadbalancer-loadbalancerattributes":{"Name":"ElasticLoadBalancingLoadBalancerLoadBalancerAttributes","Properties":{"Key":{"Array":false,"Type":"String","Required":"No"},"Value":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-resource-tags":{"Name":"AWSCloudFormationResourceTagsType","Properties":{"Key":{"Array":false,"Type":"String","Required":"Yes"},"Value":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-elasticloadbalancingv2-targetgroup-matcher":{"Name":"ElasticLoadBalancingTargetGroupMatcher","Properties":{"HttpCode":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-elasticloadbalancingv2-targetgroup-targetgroupattributes":{"Name":"ElasticLoadBalancingTargetGroupTargetGroupAttributes","Properties":{"Key":{"Array":false,"Type":"String","Required":"No"},"Value":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-elasticloadbalancingv2-targetgroup-targetdescription":{"Name":"ElasticLoadBalancingTargetGroupTargetDescription","Properties":{"Id":{"Array":false,"Type":"String","Required":"Yes"},"Port":{"Array":false,"Type":"Number","Required":"No"}}}}};var EMR={"Resources":{"InstanceFleetConfig":{"Name":"AWS::EMR::InstanceFleetConfig","Properties":{"ClusterId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"InstanceFleetType":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"InstanceTypeConfigs":{"Array":true,"Type":"aws-properties-elasticmapreduce-instancefleetconfig-instancetypeconfig","Required":"No","UpdateRequires":"Replacement"},"LaunchSpecifications":{"Array":false,"Type":"aws-properties-elasticmapreduce-instancefleetconfig-instancefleetprovisioningspecifications","Required":"No","UpdateRequires":"Replacement"},"Name":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"TargetOnDemandCapacity":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"No interruption"},"TargetSpotCapacity":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"No interruption"}}},"Cluster":{"Name":"AWS::EMR::Cluster","Properties":{"AdditionalInfo":{"Array":false,"Type":"Object","Required":"No","UpdateRequires":"Replacement"},"Applications":{"Array":true,"Type":"aws-properties-emr-cluster-application","Required":"No","UpdateRequires":"Replacement"},"AutoScalingRole":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"BootstrapActions":{"Array":true,"Type":"aws-properties-emr-cluster-bootstrapactionconfig","Required":"No","UpdateRequires":"Replacement"},"Configurations":{"Array":true,"Type":"aws-properties-emr-cluster-configuration","Required":"No","UpdateRequires":"Replacement"},"Instances":{"Array":false,"Type":"aws-properties-emr-cluster-jobflowinstancesconfig","Required":"Yes","UpdateRequires":"Replacement"},"JobFlowRole":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"LogUri":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"Name":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"ReleaseLabel":{"Array":false,"Type":"String","Required":"Conditional. If you specify the Applications property, you must specify this property.","UpdateRequires":"Replacement"},"ScaleDownBehavior":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"SecurityConfiguration":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"ServiceRole":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"Tags":{"Array":true,"Type":"aws-properties-resource-tags","Required":"No","UpdateRequires":"No interruption"},"VisibleToAllUsers":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"No interruption"}}},"SecurityConfiguration":{"Name":"AWS::EMR::SecurityConfiguration","Properties":{"Name":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"SecurityConfiguration":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"}}},"InstanceGroupConfig":{"Name":"AWS::EMR::InstanceGroupConfig","Properties":{"AutoScalingPolicy":{"Array":false,"Type":"aws-properties-elasticmapreduce-instancegroupconfig-autoscalingpolicy","Required":"No","UpdateRequires":"No interruption"},"BidPrice":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"Configurations":{"Array":true,"Type":"aws-properties-emr-cluster-configuration","Required":"No","UpdateRequires":"Replacement"},"EbsConfiguration":{"Array":false,"Type":"aws-properties-emr-ebsconfiguration","Required":"No","UpdateRequires":"Replacement"},"InstanceCount":{"Array":false,"Type":"Number","Required":"Yes","UpdateRequires":"No interruption"},"InstanceRole":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"InstanceType":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"JobFlowId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"Market":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"Name":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"}}},"Step":{"Name":"AWS::EMR::Step","Properties":{"ActionOnFailure":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"HadoopJarStep":{"Array":false,"Type":"aws-properties-emr-step-hadoopjarstepconfig","Required":"Yes","UpdateRequires":"Replacement"},"JobFlowId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"Name":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"}}}},"Models":{"aws-properties-elasticmapreduce-instancefleetconfig-instancetypeconfig":{"Name":"AmazonEMRInstanceFleetConfigInstanceTypeConfig","Properties":{"BidPrice":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"BidPriceAsPercentageOfOnDemandPrice":{"Array":false,"Type":"Double","Required":"No","UpdateRequires":"Replacement"},"Configurations":{"Array":true,"Type":"aws-properties-elasticmapreduce-instancefleetconfig-configuration","Required":"No","UpdateRequires":"Replacement"},"EbsConfiguration":{"Array":false,"Type":"aws-properties-elasticmapreduce-instancefleetconfig-ebsconfiguration","Required":"No","UpdateRequires":"Replacement"},"InstanceType":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"WeightedCapacity":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"Replacement"}}},"aws-properties-elasticmapreduce-instancefleetconfig-configuration":{"Name":"AmazonEMRInstanceFleetConfigConfiguration","Properties":{"Classification":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"ConfigurationProperties":{"Array":false,"Type":"Map","Required":"No","UpdateRequires":"Replacement"},"Configurations":{"Array":true,"Type":"aws-properties-elasticmapreduce-instancefleetconfig-configuration","Required":"No","UpdateRequires":"Replacement"}}},"aws-properties-elasticmapreduce-instancefleetconfig-ebsconfiguration":{"Name":"AmazonEMRInstanceFleetConfigEbsConfiguration","Properties":{"EbsBlockDeviceConfigs":{"Array":true,"Type":"aws-properties-elasticmapreduce-instancefleetconfig-ebsblockdeviceconfig","Required":"No","UpdateRequires":"Replacement"},"EbsOptimized":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"Replacement"}}},"aws-properties-elasticmapreduce-instancefleetconfig-ebsblockdeviceconfig":{"Name":"AmazonEMRInstanceFleetConfigEbsBlockDeviceConfig","Properties":{"VolumeSpecification":{"Array":false,"Type":"aws-properties-elasticmapreduce-instancefleetconfig-volumespecification","Required":"Yes","UpdateRequires":"Replacement"},"VolumesPerInstance":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"Replacement"}}},"aws-properties-elasticmapreduce-instancefleetconfig-volumespecification":{"Name":"AmazonEMRInstanceFleetConfigVolumeSpecification","Properties":{"Iops":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"Replacement"},"SizeInGB":{"Array":false,"Type":"Number","Required":"Yes","UpdateRequires":"Replacement"},"VolumeType":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"}}},"aws-properties-elasticmapreduce-instancefleetconfig-instancefleetprovisioningspecifications":{"Name":"AmazonEMRInstanceFleetConfigInstanceFleetProvisioningSpecifications","Properties":{"SpotSpecification":{"Array":false,"Type":"aws-properties-elasticmapreduce-instancefleetconfig-spotprovisioningspecification","Required":"Yes","UpdateRequires":"No interruption"}}},"aws-properties-elasticmapreduce-instancefleetconfig-spotprovisioningspecification":{"Name":"AmazonEMRInstanceFleetConfigSpotProvisioningSpecification","Properties":{"BlockDurationMinutes":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"No interruption"},"TimeoutAction":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"TimeoutDurationMinutes":{"Array":false,"Type":"Number","Required":"Yes","UpdateRequires":"No interruption"}}},"aws-properties-emr-cluster-application":{"Name":"AmazonEMRClusterApplication","Properties":{"AdditionalInfo":{"Array":false,"Type":"Map","Required":"No"},"Args":{"Array":true,"Type":"String","Required":"No"},"Name":{"Array":false,"Type":"String","Required":"No"},"Version":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-emr-cluster-bootstrapactionconfig":{"Name":"AmazonEMRClusterBootstrapActionConfig","Properties":{"Name":{"Array":false,"Type":"String","Required":"Yes"},"ScriptBootstrapAction":{"Array":false,"Type":"aws-properties-emr-cluster-bootstrapactionconfig-scriptbootstrapactionconfig","Required":"Yes"}}},"aws-properties-emr-cluster-bootstrapactionconfig-scriptbootstrapactionconfig":{"Name":"AmazonEMRClusterScriptBootstrapActionConfig","Properties":{"Args":{"Array":true,"Type":"String","Required":"No"},"Path":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-emr-cluster-configuration":{"Name":"AmazonEMRClusterConfiguration","Properties":{"Classification":{"Array":false,"Type":"String","Required":"No"},"ConfigurationProperties":{"Array":false,"Type":"Map","Required":"No"},"Configurations":{"Array":true,"Type":"aws-properties-emr-cluster-configuration","Required":"No"}}},"aws-properties-emr-cluster-jobflowinstancesconfig":{"Name":"AmazonEMRClusterJobFlowInstancesConfig","Properties":{"AdditionalMasterSecurityGroups":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"AdditionalSlaveSecurityGroups":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"CoreInstanceFleet":{"Array":false,"Type":"aws-properties-elasticmapreduce-cluster-instancefleetconfig","Required":"No","UpdateRequires":"Replacement"},"CoreInstanceGroup":{"Array":false,"Type":"aws-properties-emr-cluster-jobflowinstancesconfig-instancegroupconfig","Required":"No","UpdateRequires":"Replacement"},"Ec2KeyName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"Ec2SubnetId":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"EmrManagedMasterSecurityGroup":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"EmrManagedSlaveSecurityGroup":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"HadoopVersion":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"MasterInstanceFleet":{"Array":false,"Type":"aws-properties-elasticmapreduce-cluster-instancefleetconfig","Required":"No","UpdateRequires":"Replacement"},"MasterInstanceGroup":{"Array":false,"Type":"aws-properties-emr-cluster-jobflowinstancesconfig-instancegroupconfig","Required":"No","UpdateRequires":"Replacement"},"Placement":{"Array":false,"Type":"aws-properties-emr-cluster-jobflowinstancesconfig-placementtype","Required":"No","UpdateRequires":"Replacement"},"ServiceAccessSecurityGroup":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"TerminationProtected":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"No interruption"}}},"aws-properties-elasticmapreduce-cluster-instancefleetconfig":{"Name":"AmazonEMRClusterInstanceFleetConfig","Properties":{"InstanceTypeConfigs":{"Array":true,"Type":"aws-properties-elasticmapreduce-cluster-instancetypeconfig","Required":"No","UpdateRequires":"Replacement"},"LaunchSpecifications":{"Array":false,"Type":"aws-properties-elasticmapreduce-cluster-instancefleetprovisioningspecifications","Required":"No","UpdateRequires":"Replacement"},"Name":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"TargetOnDemandCapacity":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"No interruption"},"TargetSpotCapacity":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"No interruption"}}},"aws-properties-elasticmapreduce-cluster-instancetypeconfig":{"Name":"AmazonEMRClusterInstanceTypeConfig","Properties":{"BidPrice":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"BidPriceAsPercentageOfOnDemandPrice":{"Array":false,"Type":"Double","Required":"No","UpdateRequires":"Replacement"},"Configurations":{"Array":true,"Type":"aws-properties-emr-cluster-configuration","Required":"No","UpdateRequires":"Replacement"},"EbsConfiguration":{"Array":false,"Type":"aws-properties-emr-ebsconfiguration","Required":"No","UpdateRequires":"Replacement"},"InstanceType":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"WeightedCapacity":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"Replacement"}}},"aws-properties-emr-ebsconfiguration":{"Name":"AmazonEMREbsConfiguration","Properties":{"EbsBlockDeviceConfigs":{"Array":true,"Type":"aws-properties-emr-ebsconfiguration-ebsblockdeviceconfig","Required":"No"},"EbsOptimized":{"Array":false,"Type":"Boolean","Required":"No"}}},"aws-properties-emr-ebsconfiguration-ebsblockdeviceconfig":{"Name":"AmazonEMREbsConfigurationEbsBlockDeviceConfigs","Properties":{"VolumeSpecification":{"Array":false,"Type":"aws-properties-emr-ebsconfiguration-ebsblockdeviceconfig-volumespecification","Required":"Yes"},"VolumesPerInstance":{"Array":false,"Type":"Number","Required":"No"}}},"aws-properties-emr-ebsconfiguration-ebsblockdeviceconfig-volumespecification":{"Name":"AmazonEMREbsConfigurationEbsBlockDeviceConfigVolumeSpecification","Properties":{"Iops":{"Array":false,"Type":"Number","Required":"No"},"SizeInGB":{"Array":false,"Type":"Number","Required":"Yes"},"VolumeType":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-elasticmapreduce-cluster-instancefleetprovisioningspecifications":{"Name":"AmazonEMRClusterInstanceFleetProvisioningSpecifications","Properties":{"SpotSpecification":{"Array":false,"Type":"aws-properties-elasticmapreduce-cluster-spotprovisioningspecification","Required":"Yes","UpdateRequires":"No interruption"}}},"aws-properties-elasticmapreduce-cluster-spotprovisioningspecification":{"Name":"AmazonEMRClusterSpotProvisioningSpecification","Properties":{"BlockDurationMinutes":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"No interruption"},"TimeoutAction":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"TimeoutDurationMinutes":{"Array":false,"Type":"Number","Required":"Yes","UpdateRequires":"No interruption"}}},"aws-properties-emr-cluster-jobflowinstancesconfig-instancegroupconfig":{"Name":"AmazonEMRClusterInstanceGroupConfig","Properties":{"AutoScalingPolicy":{"Array":false,"Type":"aws-properties-emr-cluster-jobflowinstancesconfig-instancegroupconfig-autoscalingpolicy","Required":"No","UpdateRequires":"No interruption"},"BidPrice":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"Configurations":{"Array":true,"Type":"aws-properties-emr-cluster-configuration","Required":"No","UpdateRequires":"Replacement"},"EbsConfiguration":{"Array":false,"Type":"aws-properties-emr-ebsconfiguration","Required":"No","UpdateRequires":"Replacement"},"InstanceCount":{"Array":false,"Type":"Number","Required":"Yes"},"InstanceType":{"Array":false,"Type":"String","Required":"Yes"},"Market":{"Array":false,"Type":"String","Required":"No"},"Name":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-emr-cluster-jobflowinstancesconfig-instancegroupconfig-autoscalingpolicy":{"Name":"AmazonEMRClusterAutoScalingPolicy","Properties":{"Constraints":{"Array":false,"Type":"aws-properties-emr-cluster-jobflowinstancesconfig-instancegroupconfig-autoscalingpolicy-constraints-scalingconstraints","Required":"Yes"},"Rules":{"Array":false,"Type":"aws-properties-emr-cluster-jobflowinstancesconfig-instancegroupconfig-autoscalingpolicy-constraints-scalingrule","Required":"Yes"}}},"aws-properties-emr-cluster-jobflowinstancesconfig-instancegroupconfig-autoscalingpolicy-constraints-scalingconstraints":{"Name":"AmazonEMRClusterScalingConstraints","Properties":{"MaxCapacity":{"Array":false,"Type":"Number","Required":"Yes"},"MinCapacity":{"Array":false,"Type":"Number","Required":"Yes"}}},"aws-properties-emr-cluster-jobflowinstancesconfig-instancegroupconfig-autoscalingpolicy-constraints-scalingrule":{"Name":"AmazonEMRClusterScalingRule","Properties":{"Action":{"Array":false,"Type":"aws-properties-elasticmapreduce-cluster-scalingaction","Required":"Yes"},"Name":{"Array":false,"Type":"String","Required":"Yes"},"Trigger":{"Array":false,"Type":"aws-properties-elasticmapreduce-cluster-scalingtrigger","Required":"Yes"}}},"aws-properties-elasticmapreduce-cluster-scalingaction":{"Name":"AmazonEMRClusterScalingAction","Properties":{"Market":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"SimpleScalingPolicyConfiguration":{"Array":false,"Type":"aws-properties-elasticmapreduce-cluster-simplescalingpolicyconfiguration","Required":"Yes","UpdateRequires":"No interruption"}}},"aws-properties-elasticmapreduce-cluster-simplescalingpolicyconfiguration":{"Name":"AmazonEMRClusterSimpleScalingPolicyConfiguration","Properties":{"AdjustmentType":{"Array":false,"Type":"String","Required":"No"},"CoolDown":{"Array":false,"Type":"Number","Required":"No"},"ScalingAdjustment":{"Array":false,"Type":"Number","Required":"Yes"}}},"aws-properties-elasticmapreduce-cluster-scalingtrigger":{"Name":"AmazonEMRClusterScalingTrigger","Properties":{"CloudWatchAlarmDefinition":{"Array":false,"Type":"aws-properties-elasticmapreduce-cluster-cloudwatchalarmdefinition","Required":"Yes","UpdateRequires":"No interruption"}}},"aws-properties-elasticmapreduce-cluster-cloudwatchalarmdefinition":{"Name":"AmazonEMRClusterCloudWatchAlarmDefinition","Properties":{"ComparisonOperator":{"Array":false,"Type":"String","Required":"Yes"},"Dimensions":{"Array":true,"Type":"aws-properties-emr-cluster-jobflowinstancesconfig-instancegroupconfig-autoscalingpolicy-constraints-scalingrule-scalingtrigger-cloudwatchalarmdefinition-metricdimension","Required":"No"},"EvaluationPeriods":{"Array":false,"Type":"Number","Required":"No"},"MetricName":{"Array":false,"Type":"String","Required":"Yes"},"Namespace":{"Array":false,"Type":"String","Required":"No"},"Period":{"Array":false,"Type":"Number","Required":"Yes"},"Statistic":{"Array":false,"Type":"String","Required":"No"},"Threshold":{"Array":false,"Type":"Double","Required":"Yes"},"Unit":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-emr-cluster-jobflowinstancesconfig-instancegroupconfig-autoscalingpolicy-constraints-scalingrule-scalingtrigger-cloudwatchalarmdefinition-metricdimension":{"Name":"AmazonEMRClusterMetricDimension","Properties":{"Key":{"Array":false,"Type":"String","Required":"Yes"},"Value":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-emr-cluster-jobflowinstancesconfig-placementtype":{"Name":"AmazonEMRClusterPlacementType","Properties":{"AvailabilityZone":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-resource-tags":{"Name":"AWSCloudFormationResourceTagsType","Properties":{"Key":{"Array":false,"Type":"String","Required":"Yes"},"Value":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-elasticmapreduce-instancegroupconfig-autoscalingpolicy":{"Name":"AmazonEMRInstanceGroupConfigAutoScalingPolicy","Properties":{"Constraints":{"Array":false,"Type":"aws-properties-elasticmapreduce-instancegroupconfig-scalingconstraints","Required":"Yes","UpdateRequires":"No interruption"},"Rules":{"Array":true,"Type":"aws-properties-elasticmapreduce-instancegroupconfig-scalingrule","Required":"Yes","UpdateRequires":"No interruption"}}},"aws-properties-elasticmapreduce-instancegroupconfig-scalingconstraints":{"Name":"AmazonEMRInstanceGroupConfigScalingConstraints","Properties":{"MaxCapacity":{"Array":false,"Type":"Number","Required":"Yes"},"MinCapacity":{"Array":false,"Type":"Number","Required":"Yes"}}},"aws-properties-elasticmapreduce-instancegroupconfig-scalingrule":{"Name":"AmazonEMRInstanceGroupConfigScalingRule","Properties":{"Action":{"Array":false,"Type":"aws-properties-elasticmapreduce-instancegroupconfig-scalingaction","Required":"Yes"},"Name":{"Array":false,"Type":"String","Required":"Yes"},"Trigger":{"Array":false,"Type":"aws-properties-elasticmapreduce-instancegroupconfig-scalingtrigger","Required":"Yes"}}},"aws-properties-elasticmapreduce-instancegroupconfig-scalingaction":{"Name":"AmazonEMRInstanceGroupConfigScalingAction","Properties":{"Market":{"Array":false,"Type":"String","Required":"No"},"SimpleScalingPolicyConfiguration":{"Array":false,"Type":"aws-properties-elasticmapreduce-instancegroupconfig-simplescalingpolicyconfiguration","Required":"Yes"}}},"aws-properties-elasticmapreduce-instancegroupconfig-simplescalingpolicyconfiguration":{"Name":"AmazonEMRInstanceGroupConfigSimpleScalingPolicyConfiguration","Properties":{"AdjustmentType":{"Array":false,"Type":"String","Required":"No"},"CoolDown":{"Array":false,"Type":"Number","Required":"No"},"ScalingAdjustment":{"Array":false,"Type":"Number","Required":"Yes"}}},"aws-properties-elasticmapreduce-instancegroupconfig-scalingtrigger":{"Name":"AmazonEMRInstanceGroupConfigScalingTrigger","Properties":{"CloudWatchAlarmDefinition":{"Array":false,"Type":"aws-properties-elasticmapreduce-instancegroupconfig-cloudwatchalarmdefinition","Required":"Yes"}}},"aws-properties-elasticmapreduce-instancegroupconfig-cloudwatchalarmdefinition":{"Name":"AmazonEMRInstanceGroupConfigCloudWatchAlarmDefinition","Properties":{"ComparisonOperator":{"Array":false,"Type":"String","Required":"Yes"},"Dimensions":{"Array":true,"Type":"aws-properties-elasticmapreduce-instancegroupconfig-metricdimension","Required":"No"},"EvaluationPeriods":{"Array":false,"Type":"Number","Required":"No"},"MetricName":{"Array":false,"Type":"String","Required":"Yes"},"Namespace":{"Array":false,"Type":"String","Required":"No"},"Period":{"Array":false,"Type":"Number","Required":"Yes"},"Statistic":{"Array":false,"Type":"String","Required":"No"},"Threshold":{"Array":false,"Type":"Double","Required":"Yes"},"Unit":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-elasticmapreduce-instancegroupconfig-metricdimension":{"Name":"AmazonEMRInstanceGroupConfigMetricDimension","Properties":{"Key":{"Array":false,"Type":"String","Required":"Yes"},"Value":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-emr-step-hadoopjarstepconfig":{"Name":"AmazonEMRStepHadoopJarStepConfig","Properties":{"Args":{"Array":true,"Type":"String","Required":"No"},"Jar":{"Array":false,"Type":"String","Required":"Yes"},"MainClass":{"Array":false,"Type":"String","Required":"No"},"StepProperties":{"Array":true,"Type":"aws-properties-emr-step-hadoopjarstepconfig-keyvalue","Required":"No"}}},"aws-properties-emr-step-hadoopjarstepconfig-keyvalue":{"Name":"AmazonEMRStepKeyValue","Properties":{"Key":{"Array":false,"Type":"String","Required":"No"},"Value":{"Array":false,"Type":"String","Required":"No"}}}}};var Elasticsearch={"Resources":{"Domain":{"Name":"AWS::Elasticsearch::Domain","Properties":{"AccessPolicies":{"Array":false,"Type":"Object","Required":"No","UpdateRequires":"No interruption"},"AdvancedOptions":{"Array":false,"Type":"Map","Required":"No","UpdateRequires":"Replacement"},"DomainName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"EBSOptions":{"Array":false,"Type":"aws-properties-elasticsearch-domain-ebsoptions","Required":"No","UpdateRequires":"No interruption"},"ElasticsearchClusterConfig":{"Array":false,"Type":"aws-properties-elasticsearch-domain-elasticsearchclusterconfig","Required":"No","UpdateRequires":"No interruption"},"ElasticsearchVersion":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"SnapshotOptions":{"Array":false,"Type":"aws-properties-elasticsearch-domain-snapshotoptions","Required":"No","UpdateRequires":"No interruption"},"Tags":{"Array":true,"Type":"aws-properties-resource-tags","Required":"No","UpdateRequires":"No interruption"}}}},"Models":{"aws-properties-elasticsearch-domain-ebsoptions":{"Name":"AmazonElasticsearchServiceDomainEBSOptions","Properties":{"EBSEnabled":{"Array":false,"Type":"Boolean","Required":"No"},"Iops":{"Array":false,"Type":"Number","Required":"No"},"VolumeSize":{"Array":false,"Type":"Number","Required":"No"},"VolumeType":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-elasticsearch-domain-elasticsearchclusterconfig":{"Name":"AmazonElasticsearchServiceDomainElasticsearchClusterConfig","Properties":{"DedicatedMasterCount":{"Array":false,"Type":"Number","Required":"No"},"DedicatedMasterEnabled":{"Array":false,"Type":"Boolean","Required":"No"},"DedicatedMasterType":{"Array":false,"Type":"String","Required":"No"},"InstanceCount":{"Array":false,"Type":"Number","Required":"No"},"InstanceType":{"Array":false,"Type":"String","Required":"No"},"ZoneAwarenessEnabled":{"Array":false,"Type":"Boolean","Required":"No"}}},"aws-properties-elasticsearch-domain-snapshotoptions":{"Name":"AmazonElasticsearchServiceDomainSnapshotOptions","Properties":{"AutomatedSnapshotStartHour":{"Array":false,"Type":"Number","Required":"No"}}},"aws-properties-resource-tags":{"Name":"AWSCloudFormationResourceTagsType","Properties":{"Key":{"Array":false,"Type":"String","Required":"Yes"},"Value":{"Array":false,"Type":"String","Required":"Yes"}}}}};var Events={"Resources":{"Rule":{"Name":"AWS::Events::Rule","Properties":{"EventPattern":{"Array":false,"Type":"Object","Required":"Conditional. You must specify this property, the ScheduleExpression property, or both.","UpdateRequires":"No interruption"},"Name":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"ScheduleExpression":{"Array":false,"Type":"String","Required":"Conditional. You must specify this property, the EventPattern property, or both.","UpdateRequires":"No interruption"},"State":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"Targets":{"Array":true,"Type":"aws-properties-events-rule-target","Required":"No","UpdateRequires":"No interruption"}}}},"Models":{"aws-properties-events-rule-target":{"Name":"AmazonCloudWatchEventsRuleTarget","Properties":{"Arn":{"Array":false,"Type":"String","Required":"Yes"},"Id":{"Array":false,"Type":"String","Required":"Yes"},"Input":{"Array":false,"Type":"String","Required":"No. If you don't specify both this property and the InputPath, CloudWatch Events passes the entire matched event to the target."},"InputPath":{"Array":false,"Type":"String","Required":"No. If you don't specify both this property and the Input, CloudWatch Events passes the entire matched event to the target."},"RoleArn":{"Array":false,"Type":"String","Required":"No"}}}}};var GameLift={"Resources":{"Alias":{"Name":"AWS::GameLift::Alias","Properties":{"Name":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"RoutingStrategy":{"Array":false,"Type":"aws-properties-gamelift-alias-routingstrategy","Required":"Yes","UpdateRequires":"No interruption"}}},"Fleet":{"Name":"AWS::GameLift::Fleet","Properties":{"BuildId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"DesiredEC2Instances":{"Array":false,"Type":"Number","Required":"Yes","UpdateRequires":"No interruption"},"EC2InboundPermissions":{"Array":true,"Type":"aws-properties-gamelift-fleet-ec2inboundpermission","Required":"No","UpdateRequires":"No interruption"},"EC2InstanceType":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"LogPaths":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"MaxSize":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"No interruption"},"MinSize":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"No interruption"},"Name":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"ServerLaunchParameters":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"ServerLaunchPath":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"}}},"Build":{"Name":"AWS::GameLift::Build","Properties":{"Name":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"StorageLocation":{"Array":false,"Type":"aws-properties-gamelift-build-storagelocation","Required":"No, but we recommend that you specify a location. If you don't specify                                 this property, you must manually upload your build package files to GameLift.","UpdateRequires":"Replacement"},"Version":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"}}}},"Models":{"aws-properties-gamelift-alias-routingstrategy":{"Name":"AmazonGameLiftAliasRoutingStrategy","Properties":{"FleetId":{"Array":false,"Type":"String","Required":"Conditional. If you specify SIMPLE for the Type                                 property, you must specify this property."},"Message":{"Array":false,"Type":"String","Required":"Conditional. If you specify TERMINAL for the                                 Type property, you must specify this property."},"Type":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-gamelift-fleet-ec2inboundpermission":{"Name":"AmazonGameLiftFleetEC2InboundPermission","Properties":{"FromPort":{"Array":false,"Type":"Number","Required":"Yes"},"IpRange":{"Array":false,"Type":"String","Required":"Yes"},"Protocol":{"Array":false,"Type":"String","Required":"Yes"},"ToPort":{"Array":false,"Type":"Number","Required":"Yes"}}},"aws-properties-gamelift-build-storagelocation":{"Name":"AmazonGameLiftBuildStorageLocation","Properties":{"Bucket":{"Array":false,"Type":"String","Required":"Yes"},"Key":{"Array":false,"Type":"String","Required":"Yes"},"RoleArn":{"Array":false,"Type":"String","Required":"Yes"}}}}};var IoT={"Resources":{"Certificate":{"Name":"AWS::IoT::Certificate","Properties":{"CertificateSigningRequest":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"Status":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"}}},"PolicyPrincipalAttachment":{"Name":"AWS::IoT::PolicyPrincipalAttachment","Properties":{"PolicyName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"Principal":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"}}},"Thing":{"Name":"AWS::IoT::Thing","Properties":{"AttributePayload":{"Array":false,"Type":"aws-properties-iot-thing-attributepayload","Required":"No","UpdateRequires":"No interruption"},"ThingName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"}}},"Policy":{"Name":"AWS::IoT::Policy","Properties":{"PolicyDocument":{"Array":false,"Type":"Object","Required":"Yes","UpdateRequires":"Replacement"},"PolicyName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"}}},"ThingPrincipalAttachment":{"Name":"AWS::IoT::ThingPrincipalAttachment","Properties":{"Principal":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"ThingName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"}}},"TopicRule":{"Name":"AWS::IoT::TopicRule","Properties":{"RuleName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"TopicRulePayload":{"Array":false,"Type":"aws-properties-iot-topicrulepayload","Required":"Yes","UpdateRequires":"No interruption"}}}},"Models":{"aws-properties-iot-thing-attributepayload":{"Name":"AWSIoTThingAttributePayload","Properties":{"Attributes":{"Array":false,"Type":"Map","Required":"No","UpdateRequires":"No interruption"}}},"aws-properties-iot-topicrulepayload":{"Name":"AWSIoTTopicRulePayload","Properties":{"Actions":{"Array":false,"Type":"aws-properties-iot-actions","Required":"Yes","UpdateRequires":"No interruption"},"AwsIotSqlVersion":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"RuleDisabled":{"Array":false,"Type":"Boolean","Required":"Yes","UpdateRequires":"No interruption"},"Sql":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"}}},"aws-properties-iot-actions":{"Name":"AWSIoTActions","Properties":{"CloudwatchAlarm":{"Array":false,"Type":"aws-properties-iot-cloudwatchalarm","Required":"No"},"CloudwatchMetric":{"Array":false,"Type":"aws-properties-iot-cloudwatchmetric","Required":"No"},"DynamoDB":{"Array":false,"Type":"aws-properties-iot-dynamodb","Required":"No"},"Elasticsearch":{"Array":false,"Type":"aws-properties-iot-elasticsearch","Required":"No"},"Firehose":{"Array":false,"Type":"aws-properties-iot-firehose","Required":"No"},"Kinesis":{"Array":false,"Type":"aws-properties-iot-kinesis","Required":"No"},"Lambda":{"Array":false,"Type":"aws-properties-iot-lambda","Required":"No"},"Republish":{"Array":false,"Type":"aws-properties-iot-republish","Required":"No"},"S3":{"Array":false,"Type":"aws-properties-iot-s3","Required":"No"},"Sns":{"Array":false,"Type":"aws-properties-iot-sns","Required":"No"},"Sqs":{"Array":false,"Type":"aws-properties-iot-sqs","Required":"No"}}},"aws-properties-iot-cloudwatchalarm":{"Name":"AWSIoTCloudwatchAlarmAction","Properties":{"AlarmName":{"Array":false,"Type":"String","Required":"Yes"},"RoleArn":{"Array":false,"Type":"String","Required":"Yes"},"StateReason":{"Array":false,"Type":"String","Required":"Yes"},"StateValue":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-iot-cloudwatchmetric":{"Name":"AWSIoTCloudwatchMetricAction","Properties":{"MetricName":{"Array":false,"Type":"String","Required":"Yes"},"MetricNamespace":{"Array":false,"Type":"String","Required":"Yes"},"MetricTimestamp":{"Array":false,"Type":"String","Required":"No"},"MetricUnit":{"Array":false,"Type":"String","Required":"Yes"},"MetricValue":{"Array":false,"Type":"String","Required":"Yes"},"RoleArn":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-iot-dynamodb":{"Name":"AWSIoTDynamoDBAction","Properties":{"HashKeyField":{"Array":false,"Type":"String","Required":"Yes"},"HashKeyValue":{"Array":false,"Type":"String","Required":"Yes"},"PayloadField":{"Array":false,"Type":"String","Required":"No"},"RangeKeyField":{"Array":false,"Type":"String","Required":"Yes"},"RangeKeyValue":{"Array":false,"Type":"String","Required":"Yes"},"RoleArn":{"Array":false,"Type":"String","Required":"Yes"},"TableName":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-iot-elasticsearch":{"Name":"AWSIoTElasticsearchAction","Properties":{"Endpoint":{"Array":false,"Type":"String","Required":"Yes"},"Id":{"Array":false,"Type":"String","Required":"Yes"},"Index":{"Array":false,"Type":"String","Required":"Yes"},"RoleArn":{"Array":false,"Type":"String","Required":"Yes"},"Type":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-iot-firehose":{"Name":"AWSIoTFirehoseAction","Properties":{"DeliveryStreamName":{"Array":false,"Type":"String","Required":"Yes"},"RoleArn":{"Array":false,"Type":"String","Required":"Yes"},"Separator":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-iot-kinesis":{"Name":"AWSIoTKinesisAction","Properties":{"PartitionKey":{"Array":false,"Type":"String","Required":"No"},"RoleArn":{"Array":false,"Type":"String","Required":"Yes"},"StreamName":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-iot-lambda":{"Name":"AWSIoTLambdaAction","Properties":{"FunctionArn":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-iot-republish":{"Name":"AWSIoTRepublishAction","Properties":{"RoleArn":{"Array":false,"Type":"String","Required":"Yes"},"Topic":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-iot-s3":{"Name":"AWSIoTS3Action","Properties":{"BucketName":{"Array":false,"Type":"String","Required":"Yes"},"Key":{"Array":false,"Type":"String","Required":"Yes"},"RoleArn":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-iot-sns":{"Name":"AWSIoTSnsAction","Properties":{"MessageFormat":{"Array":false,"Type":"String","Required":"No"},"RoleArn":{"Array":false,"Type":"String","Required":"Yes"},"TargetArn":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-iot-sqs":{"Name":"AWSIoTSqsAction","Properties":{"QueueUrl":{"Array":false,"Type":"String","Required":"Yes"},"RoleArn":{"Array":false,"Type":"String","Required":"Yes"},"UseBase64":{"Array":false,"Type":"Boolean","Required":"No"}}}}};var Kinesis={"Resources":{"Stream":{"Name":"AWS::Kinesis::Stream","Properties":{"Name":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"RetentionPeriodHours":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"No interruption"},"ShardCount":{"Array":false,"Type":"Number","Required":"Yes","UpdateRequires":"No interruption"},"Tags":{"Array":true,"Type":"aws-properties-resource-tags","Required":"No","UpdateRequires":"No interruption"}}}},"Models":{"aws-properties-resource-tags":{"Name":"AWSCloudFormationResourceTagsType","Properties":{"Key":{"Array":false,"Type":"String","Required":"Yes"},"Value":{"Array":false,"Type":"String","Required":"Yes"}}}}};var KinesisAnalytics={"Resources":{"Application":{"Name":"AWS::KinesisAnalytics::Application","Properties":{"ApplicationName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"ApplicationDescription":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No\n                                    interruption"},"ApplicationCode":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No\n                                    interruption"},"Inputs":{"Array":true,"Type":"aws-properties-kinesisanalytics-application-input","Required":"Yes","UpdateRequires":"No\n                                    interruption"}}},"ApplicationOutput":{"Name":"AWS::KinesisAnalytics::ApplicationOutput","Properties":{"ApplicationName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"\n                                 Replacement"},"Output":{"Array":false,"Type":"aws-properties-kinesisanalytics-applicationoutput-output","Required":"Yes","UpdateRequires":"\n                                 No interruption"}}},"ApplicationReferenceDataSource":{"Name":"AWS::KinesisAnalytics::ApplicationReferenceDataSource","Properties":{"ApplicationName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"\n                                 Replacement"},"ReferenceDataSource":{"Array":false,"Type":"aws-properties-kinesisanalytics-applicationreferencedatasource-referencedatasource","Required":"Yes","UpdateRequires":"\n                                 No interruption"}}}},"Models":{"aws-properties-kinesisanalytics-application-input":{"Name":"AmazonKinesisAnalyticsApplicationInput","Properties":{"NamePrefix":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"\n                                 No interruption"},"InputParallelism":{"Array":false,"Type":"aws-properties-kinesisanalytics-application-inputparallelism","Required":"No","UpdateRequires":"\n                                 No interruption"},"InputSchema":{"Array":false,"Type":"aws-properties-kinesisanalytics-application-inputschema","Required":"Yes","UpdateRequires":"\n                                 No interruption"},"KinesisFirehoseInput":{"Array":false,"Type":"aws-properties-kinesisanalytics-application-kinesisfirehoseinput","Required":"No","UpdateRequires":"\n                                 No interruption"},"KinesisStreamsInput":{"Array":false,"Type":"aws-properties-kinesisanalytics-application-kinesisstreamsinput","Required":"No","UpdateRequires":"\n                                 No interruption"}}},"aws-properties-kinesisanalytics-application-inputparallelism":{"Name":"AmazonKinesisAnalyticsApplicationInputParallelism","Properties":{"Count":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"No\n                                    interruption"}}},"aws-properties-kinesisanalytics-application-inputschema":{"Name":"AmazonKinesisAnalyticsApplicationInputSchema","Properties":{"RecordColumns":{"Array":true,"Type":"aws-properties-kinesisanalytics-application-recordcolumn","Required":"Yes","UpdateRequires":"No\n                                    interruption"},"RecordEncoding":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No\n                                    interruption"},"RecordFormat":{"Array":false,"Type":"aws-properties-kinesisanalytics-application-recordformat","Required":"Yes","UpdateRequires":"No\n                                    interruption"}}},"aws-properties-kinesisanalytics-application-recordcolumn":{"Name":"AmazonKinesisAnalyticsApplicationRecordColumn","Properties":{"Mapping":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"\n                                 No interruption"},"Name":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"\n                                 No interruption"},"SqlType":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"\n                                 No interruption"}}},"aws-properties-kinesisanalytics-application-recordformat":{"Name":"AmazonKinesisAnalyticsApplicationRecordFormat","Properties":{"MappingParameters":{"Array":false,"Type":"aws-properties-kinesisanalytics-application-mappingparameters","Required":"No","UpdateRequires":"\n                                 No interruption"},"RecordFormatType":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"\n                                 No interruption"}}},"aws-properties-kinesisanalytics-application-mappingparameters":{"Name":"AmazonKinesisAnalyticsApplicationMappingParameters","Properties":{"CSVMappingParameters":{"Array":false,"Type":"aws-properties-kinesisanalytics-application-csvmappingparameters","Required":"No","UpdateRequires":"\n                                 No interruption"},"JSONMappingParameters":{"Array":false,"Type":"aws-properties-kinesisanalytics-application-jsonmappingparameters","Required":"No","UpdateRequires":"\n                                 No interruption"}}},"aws-properties-kinesisanalytics-application-csvmappingparameters":{"Name":"AmazonKinesisAnalyticsApplicationCSVMappingParameters","Properties":{"RecordColumnDelimiter":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No\n                                    interruption"},"RecordRowDelimiter":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No\n                                    interruption"}}},"aws-properties-kinesisanalytics-application-jsonmappingparameters":{"Name":"AmazonKinesisAnalyticsApplicationJSONMappingParameters","Properties":{"RecordRowPath":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"\n                                 No interruption"}}},"aws-properties-kinesisanalytics-application-kinesisfirehoseinput":{"Name":"AmazonKinesisAnalyticsApplicationKinesisFirehoseInput","Properties":{"ResourceARN":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"\n                                 No interruption"},"RoleARN":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"\n                                 No interruption"}}},"aws-properties-kinesisanalytics-application-kinesisstreamsinput":{"Name":"AmazonKinesisAnalyticsApplicationKinesisStreamsInput","Properties":{"ResourceARN":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"\n                                 No interruption"},"RoleARN":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"\n                                 No interruption"}}},"aws-properties-kinesisanalytics-applicationoutput-output":{"Name":"AmazonKinesisAnalyticsApplicationOutputOutput","Properties":{"DestinationSchema":{"Array":false,"Type":"aws-properties-kinesisanalytics-applicationoutput-destinationschema","Required":"Yes","UpdateRequires":"\n                                 No interruption"},"KinesisFirehoseOutput":{"Array":false,"Type":"aws-properties-kinesisanalytics-applicationoutput-kinesisfirehoseoutput","Required":"Conditional.","UpdateRequires":"\n                                 No interruption"},"KinesisStreamsOutput":{"Array":false,"Type":"aws-properties-kinesisanalytics-applicationoutput-kinesisstreamsoutput","Required":"Conditional.","UpdateRequires":"\n                                 No interruption"},"Name":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"\n                                 Replacement"}}},"aws-properties-kinesisanalytics-applicationoutput-destinationschema":{"Name":"AmazonKinesisAnalyticsApplicationOutputDestinationSchema","Properties":{"RecordFormatType":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"\n                                 No interruption"}}},"aws-properties-kinesisanalytics-applicationoutput-kinesisfirehoseoutput":{"Name":"AmazonKinesisAnalyticsApplicationOutputKinesisFirehoseOutput","Properties":{"ResourceARN":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"\n                                 No interruption"},"RoleARN":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"\n                                 No interruption"}}},"aws-properties-kinesisanalytics-applicationoutput-kinesisstreamsoutput":{"Name":"AmazonKinesisAnalyticsApplicationOutputKinesisStreamsOutput","Properties":{"ResourceARN":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"\n                                 No interruption"},"RoleARN":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"\n                                 No interruption"}}},"aws-properties-kinesisanalytics-applicationreferencedatasource-referencedatasource":{"Name":"AmazonKinesisAnalyticsApplicationReferenceDataSourceReferenceDataSource","Properties":{"TableName":{"Array":false,"Type":"String;","Required":"No","UpdateRequires":"\n                                 No interruption"},"S3ReferenceDataSource":{"Array":false,"Type":"aws-properties-kinesisanalytics-applicationreferencedatasource-s3referencedatasource","Required":"No","UpdateRequires":"\n                                 No interruption"},"ReferenceSchema":{"Array":false,"Type":"aws-properties-kinesisanalytics-applicationreferencedatasource-referenceschema","Required":"Yes","UpdateRequires":"\n                                 No interruption"}}},"aws-properties-kinesisanalytics-applicationreferencedatasource-s3referencedatasource":{"Name":"AmazonKinesisAnalyticsApplicationReferenceDataSourceS3ReferenceDataSource","Properties":{"BucketARN":{"Array":false,"Type":"String;","Required":"Yes","UpdateRequires":"\n                                 No interruption"},"FileKey":{"Array":false,"Type":"String;","Required":"Yes","UpdateRequires":"\n                                 No interruption"},"ReferenceRoleARN":{"Array":false,"Type":"String;","Required":"Yes","UpdateRequires":"\n                                 No interruption"}}},"aws-properties-kinesisanalytics-applicationreferencedatasource-referenceschema":{"Name":"AmazonKinesisAnalyticsApplicationReferenceDataSourceReferenceSchema","Properties":{"RecordColumns":{"Array":true,"Type":"aws-properties-kinesisanalytics-applicationreferencedatasource-recordcolumn","Required":"Yes","UpdateRequires":"\n                                 No interruption"},"RecordEncoding":{"Array":false,"Type":"String;","Required":"No","UpdateRequires":"\n                                 No interruption"},"RecordFormat":{"Array":false,"Type":"aws-properties-kinesisanalytics-applicationreferencedatasource-recordformat","Required":"Yes","UpdateRequires":"\n                                 No interruption"}}},"aws-properties-kinesisanalytics-applicationreferencedatasource-recordcolumn":{"Name":"AmazonKinesisAnalyticsApplicationReferenceDataSourceRecordColumn","Properties":{"Mapping":{"Array":false,"Type":"String;","Required":"No","UpdateRequires":"\n                                 No interruption"},"Name":{"Array":false,"Type":"String;","Required":"Yes","UpdateRequires":"\n                                 No interruption"},"SqlType":{"Array":false,"Type":"String;","Required":"Yes","UpdateRequires":"\n                                 No interruption"}}},"aws-properties-kinesisanalytics-applicationreferencedatasource-recordformat":{"Name":"AmazonKinesisAnalyticsApplicationReferenceDataSourceRecordFormat","Properties":{"MappingParameters":{"Array":false,"Type":"aws-properties-kinesisanalytics-applicationreferencedatasource-mappingparameters","Required":"No","UpdateRequires":"\n                                 No interruption"},"RecordFormatType":{"Array":false,"Type":"String;","Required":"Yes","UpdateRequires":"\n                                 No interruption"}}},"aws-properties-kinesisanalytics-applicationreferencedatasource-mappingparameters":{"Name":"AmazonKinesisAnalyticsApplicationReferenceDataSourceMappingParameters","Properties":{"CSVMappingParameters":{"Array":false,"Type":"aws-properties-kinesisanalytics-applicationreferencedatasource-csvmappingparameters","Required":"No","UpdateRequires":"\n                                 No interruption"},"JSONMappingParameters":{"Array":false,"Type":"aws-properties-kinesisanalytics-applicationreferencedatasource-jsonmappingparameters","Required":"No","UpdateRequires":"\n                                 No interruption"}}},"aws-properties-kinesisanalytics-applicationreferencedatasource-csvmappingparameters":{"Name":"AmazonKinesisAnalyticsApplicationReferenceDataSourceCSVMappingParameters","Properties":{"RecordColumnDelimiter":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"\n                                 No interruption"},"RecordRowDelimiter":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"\n                                 No interruption"}}},"aws-properties-kinesisanalytics-applicationreferencedatasource-jsonmappingparameters":{"Name":"AmazonKinesisAnalyticsApplicationReferenceDataSourceJSONMappingParameters","Properties":{"RecordRowPath":{"Array":false,"Type":"String;","Required":"Yes","UpdateRequires":"\n                                 No interruption"}}}}};var KinesisFirehose={"Resources":{"DeliveryStream":{"Name":"AWS::KinesisFirehose::DeliveryStream","Properties":{"DeliveryStreamName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"ElasticsearchDestinationConfiguration":{"Array":false,"Type":"aws-properties-kinesisfirehose-kinesisdeliverystream-elasticsearchdestinationconfiguration","Required":"Conditional. You must specify only one destination configuration.","UpdateRequires":"No interruption. If you change the delivery stream destination from an Amazon ES destination to an\n                                 Amazon S3 or Amazon Redshift destination, update requires some interruptions."},"RedshiftDestinationConfiguration":{"Array":false,"Type":"aws-properties-kinesisfirehose-kinesisdeliverystream-redshiftdestinationconfiguration","Required":"Conditional. You must specify only one destination configuration.","UpdateRequires":"No interruption. If you change the delivery stream destination from an Amazon Redshift destination\n                                 to an Amazon ES destination, update requires some interruptions."},"S3DestinationConfiguration":{"Array":false,"Type":"aws-properties-kinesisfirehose-kinesisdeliverystream-s3destinationconfiguration","Required":"Conditional. You must specify only one destination configuration.","UpdateRequires":"No interruption. If you change the delivery stream destination from an Amazon S3 destination to an\n                                 Amazon ES destination, update requires some interruptions."}}}},"Models":{"aws-properties-kinesisfirehose-kinesisdeliverystream-elasticsearchdestinationconfiguration":{"Name":"AmazonKinesisFirehoseDeliveryStreamElasticsearchDestinationConfiguration","Properties":{"BufferingHints":{"Array":false,"Type":"aws-properties-kinesisfirehose-kinesisdeliverystream-elasticsearchdestinationconfiguration-bufferinghints","Required":"Yes"},"CloudWatchLoggingOptions":{"Array":false,"Type":"aws-properties-kinesisfirehose-kinesisdeliverystream-destination-cloudwatchloggingoptions","Required":"No"},"DomainARN":{"Array":false,"Type":"String","Required":"Yes"},"IndexName":{"Array":false,"Type":"String","Required":"Yes"},"IndexRotationPeriod":{"Array":false,"Type":"String","Required":"Yes"},"RoleARN":{"Array":false,"Type":"String","Required":"Yes"},"S3BackupMode":{"Array":false,"Type":"String","Required":"Yes"},"TypeName":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-kinesisfirehose-kinesisdeliverystream-elasticsearchdestinationconfiguration-bufferinghints":{"Name":"AmazonKinesisFirehoseDeliveryStreamElasticsearchDestinationConfigurationBufferingHints","Properties":{"IntervalInSeconds":{"Array":false,"Type":"Number","Required":"Yes"},"SizeInMBs":{"Array":false,"Type":"Number","Required":"Yes"}}},"aws-properties-kinesisfirehose-kinesisdeliverystream-destination-cloudwatchloggingoptions":{"Name":"AmazonKinesisFirehoseDeliveryStreamDestinationCloudWatchLoggingOptions","Properties":{"Enabled":{"Array":false,"Type":"Boolean","Required":"No"},"LogGroupName":{"Array":false,"Type":"String","Required":"Conditional. If you enable logging, you must specify this property."},"LogStreamName":{"Array":false,"Type":"String","Required":"Conditional. If you enable logging, you must specify this property."}}},"aws-properties-kinesisfirehose-kinesisdeliverystream-redshiftdestinationconfiguration":{"Name":"AmazonKinesisFirehoseDeliveryStreamRedshiftDestinationConfiguration","Properties":{"CloudWatchLoggingOptions":{"Array":false,"Type":"aws-properties-kinesisfirehose-kinesisdeliverystream-destination-cloudwatchloggingoptions","Required":"No"},"ClusterJDBCURL":{"Array":false,"Type":"String","Required":"Yes"},"CopyCommand":{"Array":false,"Type":"aws-properties-kinesisfirehose-kinesisdeliverystream-redshiftdestinationconfiguration-copycommand","Required":"Yes"},"Password":{"Array":false,"Type":"String","Required":"Yes"},"RoleARN":{"Array":false,"Type":"String","Required":"Yes"},"S3Configuration":{"Array":false,"Type":"aws-properties-kinesisfirehose-kinesisdeliverystream-s3destinationconfiguration","Required":"Yes"},"Username":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-kinesisfirehose-kinesisdeliverystream-redshiftdestinationconfiguration-copycommand":{"Name":"AmazonKinesisFirehoseDeliveryStreamRedshiftDestinationConfigurationCopyCommand","Properties":{"CopyOptions":{"Array":false,"Type":"String","Required":"No"},"DataTableColumns":{"Array":false,"Type":"String","Required":"No"},"DataTableName":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-kinesisfirehose-kinesisdeliverystream-s3destinationconfiguration":{"Name":"AmazonKinesisFirehoseDeliveryStreamS3DestinationConfiguration","Properties":{"BucketARN":{"Array":false,"Type":"String","Required":"Yes"},"BufferingHints":{"Array":false,"Type":"aws-properties-kinesisfirehose-kinesisdeliverystream-s3destinationconfiguration-bufferinghints","Required":"Yes"},"CloudWatchLoggingOptions":{"Array":false,"Type":"aws-properties-kinesisfirehose-kinesisdeliverystream-destination-cloudwatchloggingoptions","Required":"No"},"CompressionFormat":{"Array":false,"Type":"String","Required":"Yes"},"EncryptionConfiguration":{"Array":false,"Type":"aws-properties-kinesisfirehose-kinesisdeliverystream-s3destinationconfiguration-encryptionconfiguration","Required":"No"},"Prefix":{"Array":false,"Type":"String","Required":"Yes"},"RoleARN":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-kinesisfirehose-kinesisdeliverystream-s3destinationconfiguration-bufferinghints":{"Name":"AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationBufferingHints","Properties":{"IntervalInSeconds":{"Array":false,"Type":"Number","Required":"Yes"},"SizeInMBs":{"Array":false,"Type":"Number","Required":"Yes"}}},"aws-properties-kinesisfirehose-kinesisdeliverystream-s3destinationconfiguration-encryptionconfiguration":{"Name":"AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfiguration","Properties":{"KMSEncryptionConfig":{"Array":false,"Type":"aws-properties-kinesisfirehose-kinesisdeliverystream-s3destinationconfiguration-encryptionconfiguration-kmsencryptionconfig","Required":"No"},"NoEncryptionConfig":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-kinesisfirehose-kinesisdeliverystream-s3destinationconfiguration-encryptionconfiguration-kmsencryptionconfig":{"Name":"AmazonKinesisFirehoseDeliveryStreamS3DestinationConfigurationEncryptionConfigurationKMSEncryptionConfig","Properties":{"AWSKMSKeyARN":{"Array":false,"Type":"String","Required":"Yes"}}}}};var KMS={"Resources":{"Key":{"Name":"AWS::KMS::Key","Properties":{"Enabled":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"No interruption"},"EnableKeyRotation":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"No interruption"},"KeyPolicy":{"Array":false,"Type":"Object","Required":"Yes","UpdateRequires":"No interruption"}}},"Alias":{"Name":"AWS::KMS::Alias","Properties":{"AliasName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"TargetKeyId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"}}}},"Models":{}};var Lambda={"Resources":{"Alias":{"Name":"AWS::Lambda::Alias","Properties":{"FunctionName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"FunctionVersion":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"Name":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"}}},"Function":{"Name":"AWS::Lambda::Function","Properties":{"Code":{"Array":false,"Type":"aws-properties-lambda-function-code","Required":"Yes","UpdateRequires":"No interruption"},"DeadLetterConfig":{"Array":false,"Type":"aws-properties-lambda-function-deadletterconfig","Required":"No","UpdateRequires":"No interruption"},"Environment":{"Array":false,"Type":"aws-properties-lambda-function-environment","Required":"No","UpdateRequires":"No interruption"},"FunctionName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"Handler":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"KmsKeyArn":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"MemorySize":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"No interruption"},"Role":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"Runtime":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"Timeout":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"No interruption"},"TracingConfig":{"Array":false,"Type":"aws-properties-lambda-function-tracingconfig","Required":"No","UpdateRequires":"No interruption"},"VpcConfig":{"Array":false,"Type":"aws-properties-lambda-function-vpcconfig","Required":"No","UpdateRequires":"No interruption"},"Tags":{"Array":true,"Type":"aws-properties-resource-tags","Required":"No","UpdateRequires":"No interruption"}}},"EventSourceMapping":{"Name":"AWS::Lambda::EventSourceMapping","Properties":{"BatchSize":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"No interruption"},"Enabled":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"No interruption"},"EventSourceArn":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"FunctionName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"StartingPosition":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"}}},"Version":{"Name":"AWS::Lambda::Version","Properties":{"CodeSha256":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Updates are not supported."},"FunctionName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"}}},"Permission":{"Name":"AWS::Lambda::Permission","Properties":{"Action":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"FunctionName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"Principal":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"SourceAccount":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"SourceArn":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"}}}},"Models":{"aws-properties-lambda-function-code":{"Name":"AWSLambdaFunctionCode","Properties":{"S3Bucket":{"Array":false,"Type":"String","Required":"Conditional Specify both the S3Bucket and S3Key                                 properties or specify the ZipFile property."},"S3Key":{"Array":false,"Type":"String","Required":"Conditional You must specify both the S3Bucket and S3Key properties or specify the ZipFile property."},"S3ObjectVersion":{"Array":false,"Type":"String","Required":"No"},"ZipFile":{"Array":false,"Type":"String","Required":"Conditional You must specify both the S3Bucket and S3Key properties or specify the ZipFile property."}}},"aws-properties-lambda-function-deadletterconfig":{"Name":"AWSLambdaFunctionDeadLetterConfig","Properties":{"TargetArn":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-lambda-function-environment":{"Name":"AWSLambdaFunctionEnvironment","Properties":{"Variables":{"Array":false,"Type":"Map","Required":"No"}}},"aws-properties-lambda-function-tracingconfig":{"Name":"AWSLambdaFunctionTracingConfig","Properties":{"Mode":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"}}},"aws-properties-lambda-function-vpcconfig":{"Name":"AWSLambdaFunctionVpcConfig","Properties":{"SecurityGroupIds":{"Array":true,"Type":"String","Required":"Yes"},"SubnetIds":{"Array":true,"Type":"String","Required":"Yes"}}},"aws-properties-resource-tags":{"Name":"AWSCloudFormationResourceTagsType","Properties":{"Key":{"Array":false,"Type":"String","Required":"Yes"},"Value":{"Array":false,"Type":"String","Required":"Yes"}}}}};var Logs={"Resources":{"LogGroup":{"Name":"AWS::Logs::LogGroup","Properties":{"LogGroupName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"RetentionInDays":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"No interruption"}}},"Destination":{"Name":"AWS::Logs::Destination","Properties":{"DestinationName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"DestinationPolicy":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"RoleArn":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"TargetArn":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"}}},"SubscriptionFilter":{"Name":"AWS::Logs::SubscriptionFilter","Properties":{"DestinationArn":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"FilterPattern":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"LogGroupName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"RoleArn":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"}}},"MetricFilter":{"Name":"AWS::Logs::MetricFilter","Properties":{"FilterPattern":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"LogGroupName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"MetricTransformations":{"Array":true,"Type":"aws-properties-logs-metricfilter-metrictransformation","Required":"Yes","UpdateRequires":"No interruption"}}},"LogStream":{"Name":"AWS::Logs::LogStream","Properties":{"LogGroupName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"LogStreamName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"}}}},"Models":{"aws-properties-logs-metricfilter-metrictransformation":{"Name":"CloudWatchLogsMetricFilterMetricTransformationProperty","Properties":{"MetricName":{"Array":false,"Type":"String","Required":"Yes"},"MetricNamespace":{"Array":false,"Type":"String","Required":"Yes"},"MetricValue":{"Array":false,"Type":"String","Required":"Yes"}}}}};var OpsWorks={"Resources":{"App":{"Name":"AWS::OpsWorks::App","Properties":{"AppSource":{"Array":false,"Type":"aws-properties-opsworks-stack-source","Required":"No","UpdateRequires":"No interruption"},"Attributes":{"Array":true,"Type":"Map","Required":"No","UpdateRequires":"No interruption"},"DataSources":{"Array":true,"Type":"aws-properties-opsworks-app-datasource","Required":"No","UpdateRequires":"No interruption"},"Domains":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"EnableSsl":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"No interruption"},"Environment":{"Array":true,"Type":"aws-properties-opsworks-app-environment","Required":"No","UpdateRequires":"No interruption"},"Name":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"Shortname":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"SslConfiguration":{"Array":false,"Type":"aws-properties-opsworks-app-sslconfiguration","Required":"No","UpdateRequires":"No interruption"},"StackId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"Type":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"}}},"ElasticLoadBalancerAttachment":{"Name":"AWS::OpsWorks::ElasticLoadBalancerAttachment","Properties":{"ElasticLoadBalancerName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"LayerId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"}}},"Instance":{"Name":"AWS::OpsWorks::Instance","Properties":{"AgentVersion":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"AmiId":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Updates are not supported."},"Architecture":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Some interruptions"},"AutoScalingType":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"AvailabilityZone":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"BlockDeviceMappings":{"Array":true,"Type":"aws-properties-opsworks-instance-blockdevicemapping","Required":"No","UpdateRequires":"Replacement"},"EbsOptimized":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"Replacement"},"ElasticIps":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"Hostname":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"InstallUpdatesOnBoot":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"Some interruptions"},"InstanceType":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Some interruptions"},"LayerIds":{"Array":true,"Type":"String","Required":"Yes","UpdateRequires":"Some interruptions"},"Os":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"RootDeviceType":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"SshKeyName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Some interruptions"},"StackId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"SubnetId":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"Tenancy":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"TimeBasedAutoScaling":{"Array":false,"Type":"aws-properties-opsworks-instance-timebasedautoscaling","Required":"No","UpdateRequires":"Replacement"},"VirtualizationType":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"Volumes":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"No interruption"}}},"Layer":{"Name":"AWS::OpsWorks::Layer","Properties":{"Attributes":{"Array":true,"Type":"Map","Required":"No","UpdateRequires":"No interruption"},"AutoAssignElasticIps":{"Array":false,"Type":"Boolean","Required":"Yes","UpdateRequires":"No interruption"},"AutoAssignPublicIps":{"Array":false,"Type":"Boolean","Required":"Yes","UpdateRequires":"No interruption"},"CustomInstanceProfileArn":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"CustomJson":{"Array":false,"Type":"Object","Required":"No"},"CustomRecipes":{"Array":false,"Type":"aws-properties-opsworks-layer-recipes","Required":"No","UpdateRequires":"No interruption"},"CustomSecurityGroupIds":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"EnableAutoHealing":{"Array":false,"Type":"Boolean","Required":"Yes","UpdateRequires":"No interruption"},"InstallUpdatesOnBoot":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"No interruption"},"LifecycleEventConfiguration":{"Array":false,"Type":"aws-properties-opsworks-layer-lifecycleeventconfiguration","Required":"No","UpdateRequires":"No interruption"},"LoadBasedAutoScaling":{"Array":false,"Type":"aws-properties-opsworks-layer-loadbasedautoscaling","Required":"No","UpdateRequires":"No interruption"},"Name":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"Packages":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"Shortname":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"StackId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"Type":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"VolumeConfigurations":{"Array":true,"Type":"aws-properties-opsworks-layer-volumeconfig","Required":"No","UpdateRequires":"Some interruptions"}}},"UserProfile":{"Name":"AWS::OpsWorks::UserProfile","Properties":{"AllowSelfManagement":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"No interruption"},"IamUserArn":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"SshPublicKey":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"SshUsername":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"}}},"Stack":{"Name":"AWS::OpsWorks::Stack","Properties":{"AgentVersion":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"Attributes":{"Array":true,"Type":"Map","Required":"No","UpdateRequires":"No interruption"},"ChefConfiguration":{"Array":false,"Type":"aws-properties-opsworks-stack-chefconfiguration","Required":"No","UpdateRequires":"No interruption"},"CloneAppIds":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"ClonePermissions":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"Replacement"},"ConfigurationManager":{"Array":false,"Type":"aws-properties-opsworks-stack-stackconfigmanager","Required":"No","UpdateRequires":"No interruption"},"CustomCookbooksSource":{"Array":false,"Type":"aws-properties-opsworks-stack-source","Required":"No","UpdateRequires":"No interruption"},"CustomJson":{"Array":false,"Type":"Object","Required":"No","UpdateRequires":"No interruption"},"DefaultAvailabilityZone":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"DefaultInstanceProfileArn":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"DefaultOs":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"DefaultRootDeviceType":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"DefaultSshKeyName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"DefaultSubnetId":{"Array":false,"Type":"String","Required":"Conditional. If you specify the VpcId property, you                                 must specify this property.","UpdateRequires":"No interruption"},"EcsClusterArn":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"ElasticIps":{"Array":true,"Type":"aws-properties-opsworks-stack-elasticip","Required":"No","UpdateRequires":"No interruption"},"HostnameTheme":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"Name":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"RdsDbInstances":{"Array":true,"Type":"aws-properties-opsworks-stack-rdsdbinstance","Required":"No","UpdateRequires":"No interruption"},"ServiceRoleArn":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"SourceStackId":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"UseCustomCookbooks":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"No interruption"},"UseOpsworksSecurityGroups":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"No interruption"},"VpcId":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"}}},"Volume":{"Name":"AWS::OpsWorks::Volume","Properties":{"Ec2VolumeId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"MountPoint":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"Name":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"StackId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"}}}},"Models":{"aws-properties-opsworks-stack-source":{"Name":"AWSOpsWorksSourceType","Properties":{"Password":{"Array":false,"Type":"String","Required":"No"},"Revision":{"Array":false,"Type":"String","Required":"No"},"SshKey":{"Array":false,"Type":"String","Required":"No"},"Type":{"Array":false,"Type":"String","Required":"No"},"Url":{"Array":false,"Type":"String","Required":"No"},"Username":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-opsworks-app-datasource":{"Name":"DataSource","Properties":{"Arn":{"Array":false,"Type":"String","Required":"No"},"DatabaseName":{"Array":false,"Type":"String","Required":"No"},"Type":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-opsworks-app-environment":{"Name":"AWSOpsWorksAppEnvironment","Properties":{"Key":{"Array":false,"Type":"String","Required":"Yes"},"Secure":{"Array":false,"Type":"Boolean","Required":"No"},"Value":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-opsworks-app-sslconfiguration":{"Name":"AWSOpsWorksSslConfigurationType","Properties":{"Certificate":{"Array":false,"Type":"String","Required":"Yes"},"Chain":{"Array":false,"Type":"String","Required":"No"},"PrivateKey":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-opsworks-instance-blockdevicemapping":{"Name":"AWSOpsWorksInstanceBlockDeviceMapping","Properties":{"DeviceName":{"Array":false,"Type":"String","Required":"No"},"Ebs":{"Array":false,"Type":"aws-properties-opsworks-instance-blockdevicemapping-ebsblockdevice","Required":"Conditional You can specify either the VirtualName or                                 Ebs, but not both."},"NoDevice":{"Array":false,"Type":"String","Required":"No"},"VirtualName":{"Array":false,"Type":"String","Required":"Conditional You can specify either the VirtualName or                                 Ebs, but not both."}}},"aws-properties-opsworks-instance-blockdevicemapping-ebsblockdevice":{"Name":"AWSOpsWorksInstanceBlockDeviceMappingEbsBlockDevice","Properties":{"DeleteOnTermination":{"Array":false,"Type":"Boolean","Required":"No"},"Iops":{"Array":false,"Type":"Number","Required":"No"},"SnapshotId":{"Array":false,"Type":"String","Required":"No"},"VolumeSize":{"Array":false,"Type":"Number","Required":"No"},"VolumeType":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-opsworks-instance-timebasedautoscaling":{"Name":"AWSOpsWorksTimeBasedAutoScalingType","Properties":{"Friday":{"Array":false,"Type":"Map","Required":"No"},"Monday":{"Array":false,"Type":"Map","Required":"No"},"Saturday":{"Array":false,"Type":"Map","Required":"No"},"Sunday":{"Array":false,"Type":"Map","Required":"No"},"Thursday":{"Array":false,"Type":"Map","Required":"No"},"Tuesday":{"Array":false,"Type":"Map","Required":"No"},"Wednesday":{"Array":false,"Type":"Map","Required":"No"}}},"aws-properties-opsworks-layer-recipes":{"Name":"AWSOpsWorksRecipesType","Properties":{"Configure":{"Array":true,"Type":"String","Required":"No"},"Deploy":{"Array":true,"Type":"String","Required":"No"},"Setup":{"Array":true,"Type":"String","Required":"No"},"Shutdown":{"Array":true,"Type":"String","Required":"No"},"Undeploy":{"Array":true,"Type":"String","Required":"No"}}},"aws-properties-opsworks-layer-lifecycleeventconfiguration":{"Name":"AWSOpsWorksLayerLifeCycleConfiguration","Properties":{"ShutdownEventConfiguration":{"Array":false,"Type":"aws-properties-opsworks-layer-lifecycleeventconfiguration-shutdowneventconfiguration","Required":"No"}}},"aws-properties-opsworks-layer-lifecycleeventconfiguration-shutdowneventconfiguration":{"Name":"AWSOpsWorksLayerLifeCycleConfigurationShutdownEventConfiguration","Properties":{"DelayUntilElbConnectionsDrained":{"Array":false,"Type":"Boolean","Required":"No"},"ExecutionTimeout":{"Array":false,"Type":"Number","Required":"No"}}},"aws-properties-opsworks-layer-loadbasedautoscaling":{"Name":"AWSOpsWorksLoadBasedAutoScalingType","Properties":{"DownScaling":{"Array":false,"Type":"aws-properties-opsworks-layer-loadbasedautoscaling-autoscalingthresholds","Required":"No"},"Enable":{"Array":false,"Type":"Boolean","Required":"No"},"UpScaling":{"Array":false,"Type":"aws-properties-opsworks-layer-loadbasedautoscaling-autoscalingthresholds","Required":"No"}}},"aws-properties-opsworks-layer-loadbasedautoscaling-autoscalingthresholds":{"Name":"AWSOpsWorksAutoScalingThresholdsType","Properties":{"CpuThreshold":{"Array":false,"Type":"Number","Required":"No"},"IgnoreMetricsTime":{"Array":false,"Type":"Number","Required":"No"},"InstanceCount":{"Array":false,"Type":"Number","Required":"No"},"LoadThreshold":{"Array":false,"Type":"Number","Required":"No"},"MemoryThreshold":{"Array":false,"Type":"Number","Required":"No"},"ThresholdsWaitTime":{"Array":false,"Type":"Number","Required":"No"}}},"aws-properties-opsworks-layer-volumeconfig":{"Name":"AWSOpsWorksVolumeConfigurationType","Properties":{"Iops":{"Array":false,"Type":"Number","Required":"Conditional. If you specify io1 for the volume type,                                 you must specify this property."},"MountPoint":{"Array":false,"Type":"String","Required":"Yes"},"NumberOfDisks":{"Array":false,"Type":"Number","Required":"Yes"},"RaidLevel":{"Array":false,"Type":"Number","Required":"No"},"Size":{"Array":false,"Type":"Number","Required":"Yes"},"VolumeType":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-opsworks-stack-chefconfiguration":{"Name":"AWSOpsWorksChefConfigurationType","Properties":{"BerkshelfVersion":{"Array":false,"Type":"String","Required":"No"},"ManageBerkshelf":{"Array":false,"Type":"Boolean","Required":"No"}}},"aws-properties-opsworks-stack-stackconfigmanager":{"Name":"AWSOpsWorksStackConfigurationManagerType","Properties":{"Name":{"Array":false,"Type":"String","Required":"No"},"Version":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-opsworks-stack-elasticip":{"Name":"AWSOpsWorksStackElasticIp","Properties":{"Ip":{"Array":false,"Type":"String","Required":"Yes"},"Name":{"Array":false,"Type":"String","Required":"No"}}},"aws-properties-opsworks-stack-rdsdbinstance":{"Name":"AWSOpsWorksStackRdsDbInstance","Properties":{"DbPassword":{"Array":false,"Type":"String","Required":"Yes"},"DbUser":{"Array":false,"Type":"String","Required":"Yes"},"RdsDbInstanceArn":{"Array":false,"Type":"String","Required":"Yes"}}}}};var Redshift={"Resources":{"ClusterParameterGroup":{"Name":"AWS::Redshift::ClusterParameterGroup","Properties":{"ParameterGroupFamily":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"Parameters":{"Array":false,"Type":"aws-property-redshift-clusterparametergroup-parameter","Required":"No","UpdateRequires":"No interruption"},"Tags":{"Array":true,"Type":"aws-properties-resource-tags","Required":"No","UpdateRequires":"No interruption"}}},"Cluster":{"Name":"AWS::Redshift::Cluster","Properties":{"AllowVersionUpgrade":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"No interruption"},"AutomatedSnapshotRetentionPeriod":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"No interruption"},"AvailabilityZone":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"ClusterParameterGroupName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Some interruptions"},"ClusterSecurityGroups":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"ClusterSubnetGroupName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"ClusterType":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Some interruptions"},"ClusterVersion":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"DBName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"ElasticIp":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"Encrypted":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"Replacement"},"HsmClientCertificateIdentifier":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"HsmConfigurationIdentifier":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"IamRoles":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"KmsKeyId":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"LoggingProperties":{"Array":false,"Type":"aws-properties-redshift-cluster-loggingproperties","Required":"No","UpdateRequires":"No interruption"},"MasterUsername":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"MasterUserPassword":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"NodeType":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"NumberOfNodes":{"Array":false,"Type":"Number","Required":"Conditional","UpdateRequires":"Some interruptions"},"OwnerAccount":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"Port":{"Array":false,"Type":"Number","Required":"No","UpdateRequires":"Replacement"},"PreferredMaintenanceWindow":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"PubliclyAccessible":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"Replacement"},"SnapshotClusterIdentifier":{"Array":false,"Type":"String","Required":"Conditional. This property is required if your IAM policy includes                                 a restriction on the cluster                                 name                                 and the resource element specifies anything                                 other than the wildcard character (*) for the cluster name.","UpdateRequires":"Replacement"},"SnapshotIdentifier":{"Array":false,"Type":"String","Required":"Conditional. If you specified the                                 SnapshotClusterIdentifier property, you must specify this                                 property.","UpdateRequires":"Replacement"},"Tags":{"Array":true,"Type":"aws-properties-resource-tags","Required":"No","UpdateRequires":"No interruption"},"VpcSecurityGroupIds":{"Array":true,"Type":"String","Required":"No","UpdateRequires":"No interruption"}}},"ClusterSecurityGroupIngress":{"Name":"AWS::Redshift::ClusterSecurityGroupIngress","Properties":{"ClusterSecurityGroupName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"CIDRIP":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"EC2SecurityGroupName":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"EC2SecurityGroupOwnerId":{"Array":false,"Type":"String","Required":"Conditional. If you specify the EC2SecurityGroupName                                 property, you must specify this property.","UpdateRequires":"Replacement"}}},"ClusterSecurityGroup":{"Name":"AWS::Redshift::ClusterSecurityGroup","Properties":{"Tags":{"Array":true,"Type":"aws-properties-resource-tags","Required":"No","UpdateRequires":"No interruption"}}},"ClusterSubnetGroup":{"Name":"AWS::Redshift::ClusterSubnetGroup","Properties":{"SubnetIds":{"Array":true,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"Tags":{"Array":true,"Type":"aws-properties-resource-tags","Required":"No","UpdateRequires":"No interruption"}}}},"Models":{"aws-property-redshift-clusterparametergroup-parameter":{"Name":"AmazonRedshiftParameterType","Properties":{"ParameterName":{"Array":false,"Type":"String","Required":"Yes"},"ParameterValue":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-resource-tags":{"Name":"AWSCloudFormationResourceTagsType","Properties":{"Key":{"Array":false,"Type":"String","Required":"Yes"},"Value":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-redshift-cluster-loggingproperties":{"Name":"AmazonRedshiftLoggingProperties","Properties":{"BucketName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"S3KeyPrefix":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"}}}}};var SSM={"Resources":{"Association":{"Name":"AWS::SSM::Association","Properties":{"DocumentVersion":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"InstanceId":{"Array":false,"Type":"String","Required":"Conditional. You must specify the InstanceId or                                 Targets property.","UpdateRequires":"Replacement"},"Name":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"Parameters":{"Array":false,"Type":"Map","Required":"No","UpdateRequires":"No interruption"},"ScheduleExpression":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"No interruption"},"Targets":{"Array":true,"Type":"aws-properties-ssm-association-targets","Required":"Conditional. You must specify the InstanceId or                                 Targets property.","UpdateRequires":"Replacement"}}},"Document":{"Name":"AWS::SSM::Document","Properties":{"Content":{"Array":false,"Type":"Object","Required":"Yes","UpdateRequires":"Replacement"},"DocumentType":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"}}},"Parameter":{"Name":"AWS::SSM::Parameter","Properties":{"Name":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Replacement"},"Type":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"},"Value":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"No interruption"}}}},"Models":{"aws-properties-ssm-association-targets":{"Name":"AmazonEC2SystemsManagerAssociationTargets","Properties":{"Key":{"Array":false,"Type":"String","Required":"Yes"},"Values":{"Array":true,"Type":"String","Required":"Yes"}}}}};var StepFunctions={"Resources":{"Activity":{"Name":"AWS::StepFunctions::Activity","Properties":{"Name":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"}}},"StateMachine":{"Name":"AWS::StepFunctions::StateMachine","Properties":{"DefinitionString":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"RoleArn":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"}}}},"Models":{}};var WAF={"Resources":{"ByteMatchSet":{"Name":"AWS::WAF::ByteMatchSet","Properties":{"ByteMatchTuples":{"Array":true,"Type":"aws-properties-waf-bytematchset-bytematchtuples","Required":"No","UpdateRequires":"No interruption"},"Name":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"}}},"IPSet":{"Name":"AWS::WAF::IPSet","Properties":{"IPSetDescriptors":{"Array":true,"Type":"aws-properties-waf-ipset-ipsetdescriptors","Required":"No","UpdateRequires":"No interruption"},"Name":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"}}},"Rule":{"Name":"AWS::WAF::Rule","Properties":{"MetricName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"Name":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"Predicates":{"Array":true,"Type":"aws-properties-waf-rule-predicates","Required":"No","UpdateRequires":"No interruption"}}},"SizeConstraintSet":{"Name":"AWS::WAF::SizeConstraintSet","Properties":{"Name":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"SizeConstraints":{"Array":true,"Type":"aws-properties-waf-sizeconstraintset-sizeconstraint","Required":"Yes","UpdateRequires":"No interruption"}}},"SqlInjectionMatchSet":{"Name":"AWS::WAF::SqlInjectionMatchSet","Properties":{"Name":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"SqlInjectionMatchTuples":{"Array":true,"Type":"aws-properties-waf-sqlinjectionmatchset-sqlinjectionmatchtuples","Required":"No","UpdateRequires":"No interruption"}}},"WebACL":{"Name":"AWS::WAF::WebACL","Properties":{"DefaultAction":{"Array":false,"Type":"aws-properties-waf-webacl-action","Required":"Yes","UpdateRequires":"No interruption"},"MetricName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"Name":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"Rules":{"Array":true,"Type":"aws-properties-waf-webacl-rules","Required":"No","UpdateRequires":"No interruption"}}},"XssMatchSet":{"Name":"AWS::WAF::XssMatchSet","Properties":{"Name":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"XssMatchTuples":{"Array":true,"Type":"aws-properties-waf-xssmatchset-xssmatchtuple","Required":"No","UpdateRequires":"No interruption"}}}},"Models":{"aws-properties-waf-bytematchset-bytematchtuples":{"Name":"AWSWAFByteMatchSetByteMatchTuples","Properties":{"FieldToMatch":{"Array":false,"Type":"aws-properties-waf-bytematchset-bytematchtuples-fieldtomatch","Required":"Yes"},"PositionalConstraint":{"Array":false,"Type":"String","Required":"Yes"},"TargetString":{"Array":false,"Type":"String","Required":"Conditional. You must specify this property or the                                 TargetStringBase64 property."},"TargetStringBase64":{"Array":false,"Type":"String","Required":"Conditional. You must specify this property or the                                 TargetString property."},"TextTransformation":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-waf-bytematchset-bytematchtuples-fieldtomatch":{"Name":"AWSWAFByteMatchSetByteMatchTuplesFieldToMatch","Properties":{"Data":{"Array":false,"Type":"String","Required":"Conditional"},"Type":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-waf-ipset-ipsetdescriptors":{"Name":"AWSWAFIPSetIPSetDescriptors","Properties":{"Type":{"Array":false,"Type":"String","Required":"Yes"},"Value":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-waf-rule-predicates":{"Name":"AWSWAFRulePredicates","Properties":{"DataId":{"Array":false,"Type":"String","Required":"Yes"},"Negated":{"Array":false,"Type":"Boolean","Required":"Yes"},"Type":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-waf-sizeconstraintset-sizeconstraint":{"Name":"AWSWAFSizeConstraintSetSizeConstraint","Properties":{"ComparisonOperator":{"Array":false,"Type":"String","Required":"Yes"},"FieldToMatch":{"Array":false,"Type":"aws-properties-waf-sizeconstraintset-sizeconstraint-fieldtomatch","Required":"Yes"},"Size":{"Array":false,"Type":"Number","Required":"Yes"},"TextTransformation":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-waf-sizeconstraintset-sizeconstraint-fieldtomatch":{"Name":"AWSWAFSizeConstraintSetSizeConstraintFieldToMatch","Properties":{"Data":{"Array":false,"Type":"String","Required":"Conditional"},"Type":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-waf-sqlinjectionmatchset-sqlinjectionmatchtuples":{"Name":"AWSWAFSqlInjectionMatchSetSqlInjectionMatchTuples","Properties":{"FieldToMatch":{"Array":false,"Type":"aws-properties-waf-bytematchset-bytematchtuples-fieldtomatch","Required":"Yes"},"TextTransformation":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-waf-webacl-action":{"Name":"AWSWAFWebACLAction","Properties":{"Type":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-waf-webacl-rules":{"Name":"AWSWAFWebACLRules","Properties":{"Action":{"Array":false,"Type":"aws-properties-waf-webacl-action","Required":"Yes"},"Priority":{"Array":false,"Type":"Number","Required":"Yes"},"RuleId":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-waf-xssmatchset-xssmatchtuple":{"Name":"AWSWAFXssMatchSetXssMatchTuple","Properties":{"FieldToMatch":{"Array":false,"Type":"aws-properties-waf-xssmatchset-xssmatchtuple-fieldtomatch","Required":"Yes"},"TextTransformation":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-waf-xssmatchset-xssmatchtuple-fieldtomatch":{"Name":"AWSWAFXssMatchSetXssMatchTupleFieldToMatch","Properties":{"Data":{"Array":false,"Type":"String","Required":"Conditional"},"Type":{"Array":false,"Type":"String","Required":"Yes"}}}}};var WAFRegional={"Resources":{"ByteMatchSet":{"Name":"AWS::WAFRegional::ByteMatchSet","Properties":{"ByteMatchTuples":{"Array":true,"Type":"aws-properties-wafregional-bytematchset-bytematchtuples","Required":"No","UpdateRequires":"No interruption"},"Name":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"}}},"Rule":{"Name":"AWS::WAFRegional::Rule","Properties":{"MetricName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"Name":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"Predicates":{"Array":true,"Type":"aws-properties-wafregional-rule-predicates","Required":"No","UpdateRequires":"No interruption"}}},"SizeConstraintSet":{"Name":"AWS::WAFRegional::SizeConstraintSet","Properties":{"Name":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"SizeConstraints":{"Array":true,"Type":"aws-properties-wafregional-sizeconstraintset-sizeconstraint","Required":"Yes","UpdateRequires":"No interruption"}}},"IPSet":{"Name":"AWS::WAFRegional::IPSet","Properties":{"IPSetDescriptors":{"Array":true,"Type":"aws-properties-wafregional-ipset-ipsetdescriptors","Required":"No","UpdateRequires":"No interruption"},"Name":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"}}},"SqlInjectionMatchSet":{"Name":"AWS::WAFRegional::SqlInjectionMatchSet","Properties":{"Name":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"SqlInjectionMatchTuples":{"Array":true,"Type":"aws-properties-wafregional-sqlinjectionmatchset-sqlinjectionmatchtuples","Required":"No","UpdateRequires":"No interruption"}}},"WebACL":{"Name":"AWS::WAFRegional::WebACL","Properties":{"DefaultAction":{"Array":false,"Type":"aws-properties-wafregional-webacl-action","Required":"Yes","UpdateRequires":"No interruption"},"MetricName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"Name":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"Rules":{"Array":true,"Type":"aws-properties-wafregional-webacl-rules","Required":"No","UpdateRequires":"No interruption"}}},"WebACLAssociation":{"Name":"AWS::WAFRegional::WebACLAssociation","Properties":{"ResourceArn":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"WebACLId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"}}},"XssMatchSet":{"Name":"AWS::WAFRegional::XssMatchSet","Properties":{"Name":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"XssMatchTuples":{"Array":true,"Type":"aws-properties-wafregional-xssmatchset-xssmatchtuple","Required":"No","UpdateRequires":"No interruption"}}}},"Models":{"aws-properties-wafregional-bytematchset-bytematchtuples":{"Name":"AWSWAFRegionalByteMatchSetByteMatchTuples","Properties":{"FieldToMatch":{"Array":false,"Type":"aws-properties-wafregional-bytematchset-bytematchtuples-fieldtomatch","Required":"Yes"},"PositionalConstraint":{"Array":false,"Type":"String","Required":"Yes"},"TargetString":{"Array":false,"Type":"String","Required":"Conditional. You must specify this property or the                                 TargetStringBase64 property."},"TargetStringBase64":{"Array":false,"Type":"String","Required":"Conditional. You must specify this property or the                                 TargetString property."},"TextTransformation":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-wafregional-bytematchset-bytematchtuples-fieldtomatch":{"Name":"AWSWAFRegionalByteMatchSetByteMatchTuplesFieldToMatch","Properties":{"Data":{"Array":false,"Type":"String","Required":"Conditional"},"Type":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-wafregional-rule-predicates":{"Name":"AWSWAFRegionalRulePredicates","Properties":{"DataId":{"Array":false,"Type":"String","Required":"Yes"},"Negated":{"Array":false,"Type":"Boolean","Required":"Yes"},"Type":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-wafregional-sizeconstraintset-sizeconstraint":{"Name":"AWSWAFRegionalSizeConstraintSetSizeConstraint","Properties":{"ComparisonOperator":{"Array":false,"Type":"String","Required":"Yes"},"FieldToMatch":{"Array":false,"Type":"aws-properties-wafregional-sizeconstraintset-sizeconstraint-fieldtomatch","Required":"Yes"},"Size":{"Array":false,"Type":"Number","Required":"Yes"},"TextTransformation":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-wafregional-sizeconstraintset-sizeconstraint-fieldtomatch":{"Name":"AWSWAFRegionalSizeConstraintSetSizeConstraintFieldToMatch","Properties":{"Data":{"Array":false,"Type":"String","Required":"Conditional"},"Type":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-wafregional-ipset-ipsetdescriptors":{"Name":"AWSWAFRegionalIPSetIPSetDescriptors","Properties":{"Type":{"Array":false,"Type":"String","Required":"Yes"},"Value":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-wafregional-sqlinjectionmatchset-sqlinjectionmatchtuples":{"Name":"AWSWAFRegionalSqlInjectionMatchSetSqlInjectionMatchTuples","Properties":{"FieldToMatch":{"Array":false,"Type":"aws-properties-wafregional-bytematchset-bytematchtuples-fieldtomatch","Required":"Yes"},"TextTransformation":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-wafregional-webacl-action":{"Name":"AWSWAFRegionalWebACLAction","Properties":{"Type":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-wafregional-webacl-rules":{"Name":"AWSWAFRegionalWebACLRules","Properties":{"Action":{"Array":false,"Type":"aws-properties-wafregional-webacl-action","Required":"Yes"},"Priority":{"Array":false,"Type":"Number","Required":"Yes"},"RuleId":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-wafregional-xssmatchset-xssmatchtuple":{"Name":"AWSWAFRegionalXssMatchSetXssMatchTuple","Properties":{"FieldToMatch":{"Array":false,"Type":"aws-properties-wafregional-xssmatchset-xssmatchtuple-fieldtomatch","Required":"Yes"},"TextTransformation":{"Array":false,"Type":"String","Required":"Yes"}}},"aws-properties-wafregional-xssmatchset-xssmatchtuple-fieldtomatch":{"Name":"AWSWAFRegionalXssMatchSetXssMatchTupleFieldToMatch","Properties":{"Data":{"Array":false,"Type":"String","Required":"Conditional"},"Type":{"Array":false,"Type":"String","Required":"Yes"}}}}};var WorkSpaces={"Resources":{"Workspace":{"Name":"AWS::WorkSpaces::Workspace","Properties":{"BundleId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Updates are not supported.. To update this property, you must also update another\n                                 property that triggers a replacement, such as the UserName\n                                 property."},"DirectoryId":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"UserName":{"Array":false,"Type":"String","Required":"Yes","UpdateRequires":"Replacement"},"RootVolumeEncryptionEnabled":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"Updates are not supported.. To update this property, you must also update another\n                                 property that triggers a replacement, such as the UserName\n                                 property."},"UserVolumeEncryptionEnabled":{"Array":false,"Type":"Boolean","Required":"No","UpdateRequires":"Updates are not supported.. To update this property, you must also update another\n                                 property that triggers a replacement, such as the UserName\n                                 property."},"VolumeEncryptionKey":{"Array":false,"Type":"String","Required":"No","UpdateRequires":"Updates are not supported.. To update this property, you must also update another\n                                 property that triggers a replacement, such as the UserName\n                                 property."}}}},"Models":{}};

var index = {
	resourceList: resourceList,
	AutoScaling: AutoScaling,
	ElasticBeanstalk: ElasticBeanstalk,
	CloudFront: CloudFront,
	CloudWatch: CloudWatch,
	EC2: EC2,
	ElasticLoadBalancing: ElasticLoadBalancing,
	ElastiCache: ElastiCache,
	IAM: IAM,
	RDS: RDS,
	Route53: Route53,
	S3: S3,
	SDB: SDB,
	SNS: SNS,
	SQS: SQS,
	CloudFormation: CloudFormation,
	ApiGateway: ApiGateway,
	ApplicationAutoScaling: ApplicationAutoScaling,
	CertificateManager: CertificateManager,
	CloudTrail: CloudTrail,
	CodeBuild: CodeBuild,
	CodeCommit: CodeCommit,
	CodeDeploy: CodeDeploy,
	CodePipeline: CodePipeline,
	Cognito: Cognito,
	Config: Config,
	DataPipeline: DataPipeline,
	DirectoryService: DirectoryService,
	DMS: DMS,
	DynamoDB: DynamoDB,
	ECS: ECS,
	ECR: ECR,
	EFS: EFS,
	ElasticLoadBalancingV2: ElasticLoadBalancingV2,
	EMR: EMR,
	Elasticsearch: Elasticsearch,
	Events: Events,
	GameLift: GameLift,
	IoT: IoT,
	Kinesis: Kinesis,
	KinesisAnalytics: KinesisAnalytics,
	KinesisFirehose: KinesisFirehose,
	KMS: KMS,
	Lambda: Lambda,
	Logs: Logs,
	OpsWorks: OpsWorks,
	Redshift: Redshift,
	SSM: SSM,
	StepFunctions: StepFunctions,
	WAF: WAF,
	WAFRegional: WAFRegional,
	WorkSpaces: WorkSpaces
};

/**
 * IAddOptions Interface
 * @member Template
 *//**
 * Returns a new Template object.
 * @member Template
 * @returns ITemplate
 */function Template(){return{AWSTemplateFormatVersion:'2010-09-09',Conditions:{},Mappings:{},Outputs:{},Parameters:{},Resources:{},/**
     * Add a new Parameter, Description, Output, Resource, Condition, or Mapping to the template. Returns a new Template with the element added. Does not mutate the original Template object.
     * @example
     * const t = Template().add(S3.Bucket('Bucket'), { Output: true });
     */add:function add(e,options){var _t=cloneDeep(this);switch(e.kind){case'CreationPolicy':return _addCreationPolicy(_t,e);case'ResourceMetadata':return _addResourceMetadata(_t,e);case'Condition':return _addCondition(_t,e);case'Mapping':return _addMapping(_t,e);case'Parameter':return _addParameter(_t,e);case'Output':return _addOutput(_t,e);case'Resource':var newT=_t;var f=cloneDeep(e);if(options){var nameSplit=f.Type.split('::').splice(1);var shortName=nameSplit.join('');if(options.Parameters){options.Parameters.map(function(p){var paramName=''+f.Name+shortName+'Param';if(!f.Properties){f.Properties={};}f.Properties[p]=Ref(paramName);newT=_addParameter(newT,Parameter(paramName,{Type:'String'}));});}newT=_addResource(_t,f);if(options.Output){newT=_addOutput(newT,Output(''+f.Name+shortName+'Output',{Value:Ref(f.Name),Condition:f.Condition,Export:{Name:FnSub('${'+Pseudo.AWS_STACK_NAME+'}-'+nameSplit[0]+'-'+nameSplit[1]+'-'+f.Name)}}));}}else{newT=_addResource(_t,f);}return newT;case'Description':return _addDescription(_t,e);default:throw new SyntaxError(JSON.stringify(e)+' is not a valid type, could not be added.');}},/**
     * Returns a finished CloudFormation template object. This can then be converted into JSON or YAML.
     * @example
     * const t = Template();
     * JSON.stringify(t.build(), null, 2)
     */build:function build(){var _this=this;var result={AWSTemplateFormatVersion:'2010-09-09',Resources:{}};if(Object.keys(this.Conditions).length>0){result.Conditions={};Object.keys(this.Conditions).map(function(c){result.Conditions[c]=_json(_this.Conditions[c]);});}if(Object.keys(this.Parameters).length>0){result.Parameters={};Object.keys(this.Parameters).map(function(p){result.Parameters[p]=_json(_this.Parameters[p]);});}if(Object.keys(this.Mappings).length>0){result.Mappings={};Object.keys(this.Mappings).map(function(m){result.Mappings[m]=_json(_this.Mappings[m]);});}if(Object.keys(this.Outputs).length>0){result.Outputs={};Object.keys(this.Outputs).map(function(o){result.Outputs[o]=_json(_this.Outputs[o]);});}if(Object.keys(this.Resources).length>0){result.Resources={};Object.keys(this.Resources).map(function(r){result.Resources[r]=_json(_this.Resources[r]);});}if(this.Description){result.Description=this.Description;}return result;},kind:'Template',/**
     * Add elements to the Template in a functional way.
     */map:function map(iterable,mapFn){var result=cloneDeep(this);iterable.map(function(i){result=result.add(mapFn(i));});return result;},/**
     * Remove a Parameter, Description, Output, Resource, Condition, or Mapping from the template. Returns a new Template with the element removed. Does not mutate the original Template object.
     * @example
     * let t = Template();
     * let p = Parameter('NewParam', { Type: 'String' });
     * t.add(p).remove(p);
     */remove:function remove(e){var result=cloneDeep(this);var element=void 0;if(typeof e==='string'){var parameter=result.Parameters[e];if(parameter){element=parameter;}else{var output=result.Outputs[e];if(output){element=output;}else{var mapping=result.Mappings[e];if(mapping){element=mapping;}else{throw new SyntaxError('Could not find '+JSON.stringify(e));}}}}else{element=e;}switch(element.kind){/*case 'Condition':
                    return _removeCondition(this, e);*/case'Parameter':return _removeParameter(this,element);case'Output':return _removeOutput(this,element);/*case 'Resource':
                    return _removeResource(this, e);*/case'Mapping':return _removeMapping(this,element);default:throw new SyntaxError(JSON.stringify(e)+' is not a valid type, could not be added.');}},/**
     * Removes the Description from the Template.
     */removeDescription:function removeDescription(){var Description$$1=this.Description,remaining=objectWithoutProperties(this,['Description']);return remaining;},/**
     * Merges another Template object into another. The original Template objects are not mutated. Returns a new Template object that is the product of the two original Template objects.
     */merge:function merge(t){var _t=cloneDeep(this);var combined={};['Conditions','Mapping','Outputs','Parameters','Resources','Description'].map(function(block){if(t[block]){combined[block]=_extends({},_t[block],t[block]);}});return _extends({},_t,combined);},/**
     * Import an existing CloudFormation JSON template and convert it into a Wolkenkratzer Template object.
     * @example
     * const templateJson = require('template.json');
     * const t = Template().import(templateJson);
     */import:function _import(inputTemplate){var _t=cloneDeep(this);return _calcFromExistingTemplate(_t,inputTemplate);}};}function _isEmptyObject(obj){return Object.keys(obj).length===0&&obj.constructor===Object;}function _validateRef(t,ref){if(ref.Ref){if(!(t.Parameters[ref.Ref]||t.Resources[ref.Ref])){throw new SyntaxError('Could not find '+JSON.stringify(ref));}}return;}function _validateFnGetAtt(t,att){if(att.FnGetAtt&&!t.Resources[att.FnGetAtt[0]]){throw new SyntaxError('Could not find '+JSON.stringify(att));}return;}function _strip(t){var kind=t.kind,Name=t.Name,rest=objectWithoutProperties(t,['kind','Name']);return rest;}function _cleanObject(object){if(Array.isArray(object)){for(var v=0;v<object.length;v++){object[v]=_cleanObject(object[v]);}}else{if(object.kind){object=_json(object);}else{for(var o in object){if(object[o]!==null&&_typeof(object[o])==='object'){object[o]=_cleanObject(object[o]);}}}}return object;}function _buildResource(t){var Type=t.Type,Properties=t.Properties,CreationPolicy$$1=t.CreationPolicy,Metadata=t.Metadata,Condition$$1=t.Condition;var newProps={};if(Properties){Object.keys(Properties).map(function(p){// Ignore empty arrays
if(!(Array.isArray(Properties[p])&&Properties[p].length===0)){if(Properties[p].kind){newProps[p]=_json(Properties[p]);}else if(!_isEmptyObject(Properties[p])){newProps[p]=_cleanObject(Properties[p]);}}});}var result={Type:Type,Properties:newProps};if(CreationPolicy$$1){result.CreationPolicy=_json(CreationPolicy$$1);}if(Metadata){result.Metadata=_json(Metadata);}if(Condition$$1){result.Condition=Condition$$1;}return result;}function _buildCondition(t){var Condition$$1=t.Condition;var result=_json(Condition$$1);Object.keys(result).map(function(k){if(result[k][0].kind){result[k][0]=_json(result[k][0]);}});return result;}function _buildCreationPolicy(t){var Content=t.Content;return Content;}function _buildResourceMetadata(t){var Content=t.Content;return Content;}function _buildFnJoin(t){if(Array.isArray(t.Values)){var jsonValues=t.Values.map(function(x){if(typeof x==='string'){return x;}else{return _json(x);}});return{'Fn::Join':[t.Delimiter,jsonValues]};}else{return{'Fn::Join':[t.Delimiter,_json(t.Values)]};}}function _buildFnFindInMap(t){return t.FnFindInMap.map(function(x){if(typeof x==='string'){return x;}else{return _json(x);}});}function _buildFnAnd(t){return t.FnAnd.map(function(x){if(typeof x==='string'){return x;}else{if(x.kind){return _json(x);}return x;}});}function _buildFnEquals(t){return t.FnEquals.map(function(x){if(typeof x==='string'){return x;}else{if(x.kind){return _json(x);}return x;}});}function _buildMapping(t){var result=t.Content;return result;}function _buildOutput(t){var outputResult=cloneDeep(t.Properties);if(typeof outputResult.Value!=='string'){var stripped=_json(outputResult.Value);outputResult=_extends({},outputResult,{Value:stripped});}if(outputResult.Export&&outputResult.Export.Name&&typeof outputResult.Export.Name!=='string'){var _stripped=_json(outputResult.Export.Name);outputResult=_extends({},outputResult,{Export:{Name:_stripped}});}return outputResult;}function _json(t){switch(t.kind){case'Ref':return{Ref:t.Ref};case'FnGetAtt':return{'Fn::GetAtt':t.FnGetAtt};case'FnJoin':return _buildFnJoin(t);case'FnAnd':return{'Fn::And':_buildFnAnd(t)};case'FnFindInMap':return{'Fn::FindInMap':_buildFnFindInMap(t)};case'FnEquals':return{'Fn::Equals':_buildFnEquals(t)};case'FnSub':return{'Fn::Sub':t.FnSub};case'CreationPolicy':return _buildCreationPolicy(t);case'ResourceMetadata':return _buildResourceMetadata(t);case'Condition':return _buildCondition(t);case'Mapping':return _buildMapping(t);case'Parameter':return _strip(t).Properties;case'Output':return _buildOutput(t);case'Resource':return _buildResource(t);default:throw new SyntaxError('Can\'t call _json on '+JSON.stringify(t));}}function _addDescription(t,e){var result=_extends({},t);var desc={Description:e.Content};result=_extends({},t,desc);return result;}function _addCreationPolicy(t,e){var result=_extends({},t);if(!result.Resources[e.Resource]){throw new SyntaxError('Cannot add CreationPolicy to a Resource that does not exist in the template.');}var resource=_extends({},result.Resources[e.Resource]);resource.CreationPolicy=e;result.Resources[e.Resource]=resource;return result;}function _addResourceMetadata(t,e){var result=_extends({},t);if(!result.Resources[e.Resource]){throw new SyntaxError('Cannot add Metadata to a Resource that does not exist in the template.');}var resource=_extends({},result.Resources[e.Resource]);resource.Metadata=e;result.Resources[e.Resource]=resource;return result;}function _addCondition(t,e){// TODO: Validate intrinsics
var result=_extends({},t);result.Conditions[e.Name]=e;return result;}function _addOutput(t,e){var e0=cloneDeep(e);if(typeof e0.Properties.Value!=='string'){if(e0.Properties.Value.Ref){_validateRef(t,e0.Properties.Value);}else if(typeof e0.Properties.Value!=='string'&&e0.Properties.Value['Fn::GetAtt']){e0.Properties.Value=FnGetAtt(e0.Properties.Value['Fn::GetAtt'][0],e0.Properties.Value['Fn::GetAtt'][1]);_validateFnGetAtt(t,e0.Properties.Value);}}var result=_extends({},t);result.Outputs[e0.Name]=e0;return result;}function _addParameter(t,e){var result=_extends({},t);result.Parameters[e.Name]=e;return result;}function _addMapping(t,e){var result=_extends({},t);if(result.Mappings[e.Name]){result.Mappings[e.Name]=_extends({},e,{Content:_extends({},result.Mappings[e.Name].Content,e.Content)});}else{result.Mappings[e.Name]=e;}return result;}function _addResource(t,e){var result=_extends({},t);result.Resources[e.Name]=e;return result;}function _removeMapping(t,e){var result=_extends({},t);var mapping=void 0;if(typeof e==='string'){if(result.Mappings[e]){mapping=result.Mappings[e];}else{throw new SyntaxError('Could not find '+JSON.stringify(e));}}else{mapping=e;}if(result.Mappings[mapping.Name]){delete result.Mappings[mapping.Name];}else{throw new SyntaxError('Could not find '+JSON.stringify(mapping));}return result;}function _removeOutput(t,e){var result=_extends({},t);var out=void 0;if(typeof e==='string'){if(result.Outputs[e]){out=result.Outputs[e];}else{throw new SyntaxError('Could not find '+JSON.stringify(e));}}else{out=e;}if(result.Outputs[out.Name]){delete result.Outputs[out.Name];}else{throw new SyntaxError('Could not find '+JSON.stringify(out));}return result;}function _removeParameter(t,e){var result=_extends({},t);var param=void 0;if(typeof e==='string'){if(result.Parameters[e]){param=result.Parameters[e];}else{throw new SyntaxError('Could not find '+JSON.stringify(e));}}else{param=e;}if(result.Parameters[param.Name]){delete result.Parameters[param.Name];}else{throw new SyntaxError('Could not find '+JSON.stringify(param));}return result;}function _calcFromExistingTemplate(t,inputTemplate){if(inputTemplate.Description){t=t.add(Description(inputTemplate.Description));}if(inputTemplate.Parameters){Object.keys(inputTemplate.Parameters).map(function(p){t=t.add(Parameter(p,inputTemplate.Parameters[p]));});}if(inputTemplate.Resources){Object.keys(inputTemplate.Resources).map(function(r){var split=inputTemplate.Resources[r].Type.split('::');var cat=split[1];var resType=split[2];if(split[0]==='AWS'){var service=Service(index[cat]);t=t.add(service[resType](r,inputTemplate.Resources[r].Properties));}else if(split[0]==='Custom'){t=t.add(CustomResource(r,inputTemplate.Resources[r].Properties));}});}if(inputTemplate.Outputs){Object.keys(inputTemplate.Outputs).map(function(o){t=t.add(Output(o,inputTemplate.Outputs[o]));});}if(inputTemplate.Mappings){Object.keys(inputTemplate.Mappings).map(function(m){Object.keys(inputTemplate.Mappings[m]).map(function(m0){t=t.add(Mapping(m,m0,inputTemplate.Mappings[m][m0]));});});}if(inputTemplate.Conditions){Object.keys(inputTemplate.Conditions).map(function(c){t=t.add(Condition(c,inputTemplate.Conditions[c]));});}return t;}

var s3Service=Service(S3);function S3BucketTransform(bucketName,logicalName,awsObj){var s3Client=new awsObj.S3();return new Promise(function(resolve$$1,reject){//let bucket = new s3Resource.Bucket(newName);
var bucket={};return s3Client.getBucketVersioning({Bucket:bucketName}).promise().then(function(versionData){if(Object.keys(versionData)){bucket.VersioningConfiguration=versionData;}// return s3Client.getBucketAcl({ Bucket: bucketName }).promise()
return s3Client.getBucketCors({Bucket:bucketName}).promise();})/* .then(function (aclData) {
      bucket.AccessControl = aclData
    })*/.then(function(corsData){bucket.CorsConfiguration=corsData;return s3Client.getBucketLifecycleConfiguration({Bucket:bucketName}).promise();}).catch(function(e){// Silently catch the NoSuchCORSConfiguration
return s3Client.getBucketLifecycleConfiguration({Bucket:bucketName}).promise();}).then(function(lifeData){bucket.LifecycleConfiguration=lifeData;return s3Client.getBucketLogging({Bucket:bucketName}).promise();}).catch(function(e){// Silently catch the NoSuchLifecycleConfiguration
return s3Client.getBucketLogging({Bucket:bucketName}).promise();}).then(function(loggingData){bucket.LoggingConfiguration={DestinationBucketName:loggingData.LoggingEnabled.TargetBucket,LogFilePrefix:loggingData.LoggingEnabled.TargetPrefix};return s3Client.getBucketNotification({Bucket:bucketName}).promise();}).then(function(notificationData){if(Object.keys(notificationData).length>0){bucket.NotificationConfiguration=notificationData;}return s3Client.getBucketReplication({Bucket:bucketName}).promise();}).then(function(replData){bucket.ReplicationConfiguration=replData;return s3Client.getBucketTagging({Bucket:bucketName}).promise();}).then(function(tagsData){tagsData.TagSet.forEach(function(tag){bucket.Tags.add(tag);});return s3Client.getBucketWebsite({Bucket:bucketName}).promise();}).catch(function(e){// Silently catch the NoSuchTagSet
return s3Client.getBucketWebsite({Bucket:bucketName}).promise();}).then(function(websiteData){bucket.WebsiteConfiguration=new websiteData();}).catch(function(e){// Silently catch the NoSuchWebsiteConfiguration
return;}).then(function(){resolve$$1(s3Service.Bucket(logicalName,bucket));}).catch(function(e){// Silently catch the NoSuchWebsiteConfiguration
reject(e);});});}

index.resourceList.map(function(r){exports[r]=Service(index[r]);});

exports.Template = Template;
exports.Parameter = Parameter;
exports.Description = Description;
exports.Output = Output;
exports.Mapping = Mapping;
exports.Resource = Resource;
exports.CustomResource = CustomResource;
exports.Condition = Condition;
exports.Ref = Ref;
exports.FnGetAtt = FnGetAtt;
exports.FnEquals = FnEquals;
exports.FnJoin = FnJoin;
exports.FnFindInMap = FnFindInMap;
exports.FnSub = FnSub;
exports.FnAnd = FnAnd;
exports.CreationPolicy = CreationPolicy;
exports.ResourceMetadata = ResourceMetadata;
exports.S3BucketTransform = S3BucketTransform;
exports.Pseudo = Pseudo;

return exports;

}({}));
//# sourceMappingURL=index.browser.js.map
