(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash/lang"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash/lang"], factory);
	else if(typeof exports === 'object')
		exports["merge.js"] = factory(require("lodash/lang"));
	else
		root["merge.js"] = factory(root["lodash/lang"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_12__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = merge;

	var _lang = __webpack_require__(12);

	function merge(state, stateDiff) {
	  var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	  var _options$emptyDict = options.emptyDict;
	  var emptyDict = _options$emptyDict === undefined ? 'strict' : _options$emptyDict;
	  var _options$array = options.array;
	  var array = _options$array === undefined ? 'replace' : _options$array;

	  // Empty state diffs get special handling. In 'replace' mode they should be
	  // overwriting the current state. In 'skip' mode, we should be 'skipping'
	  // the merge of any objects, and return the current state. In 'strict' mode (default)
	  // we should still be creating a new object.

	  if (!Object.keys(stateDiff).length) {
	    if (emptyDict === 'replace') {
	      return stateDiff;
	    } else if (emptyDict === 'skip') {
	      return state;
	    }
	  }

	  var newState = _extends({}, state);

	  Object.keys(stateDiff).forEach(function (key) {
	    var oldVal = newState[key];
	    var newVal = stateDiff[key];
	    var newValIsEmpty = (0, _lang.isEmpty)(newVal);

	    if ((0, _lang.isPlainObject)(oldVal) && (0, _lang.isPlainObject)(newVal)) {
	      if (newValIsEmpty && emptyDict === 'skip') {
	        newState[key] = oldVal;
	      } else if (newValIsEmpty && emptyDict === 'replace') {
	        newState[key] = newVal;
	      } else {
	        newState[key] = merge(oldVal, newVal, options);
	      }
	    } else if (Array.isArray(oldVal) && Array.isArray(newVal)) {
	      if (array === 'concat') {
	        if (!newVal.length) {
	          newState[key] = oldVal;
	        } else {
	          newState[key] = oldVal.concat(newVal);
	        }
	      } else {
	        newState[key] = newVal;
	      }
	    } else {
	      newState[key] = newVal;
	    }
	  });

	  return newState;
	}

/***/ },

/***/ 12:
/***/ function(module, exports) {

	module.exports = require("lodash/lang");

/***/ }

/******/ })
});
;