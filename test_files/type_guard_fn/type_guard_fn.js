/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
goog.module('test_files.type_guard_fn.type_guard_fn');
var module = module || { id: 'test_files/type_guard_fn/type_guard_fn.ts' };
module = module;
exports = {};
/**
 * @param {!Object} a
 * @return {boolean}
 */
function isBoolean(a) {
    return typeof a === 'string';
}
exports.isBoolean = isBoolean;
/**
 * @template T
 * @param {!Object} obj
 * @return {boolean}
 */
function isThenable(obj) {
    return true;
}
