/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
goog.module('test_files.generic_fn_type.generic_fn_type');
var module = module || { id: 'test_files/generic_fn_type/generic_fn_type.ts' };
module = module;
exports = {};
/**
 * A function type that includes a generic type argument. Unsupported by
 * Closure, so tsickle should emit ?.
 * @type {function(?): ?}
 */
let genericFnType = (x) => x;
/** @type {function(new: (?), ?): ?} */
let genericCtorFnType;
