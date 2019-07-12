(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["aa_12px_mono"] = factory();
	else
		root["aa_12px_mono"] = factory();
})((typeof self!='undefined'?self:this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./fonts/aa_12px_mono.fontmeta.json":
/***/ (function(module) {

module.exports = {"chars":[{"width":3,"chr":"!","bonus":45,"secondary":false,"pixels":[0,5,223,0,6,208,0,7,178,0,8,164,1,4,178,1,5,208,1,6,193,1,7,178,1,14,164]},{"width":6,"chr":"\"","bonus":25,"secondary":true,"pixels":[0,1,178,1,0,178,3,0,178,3,1,208,3,2,193]},{"width":10,"chr":"#","bonus":160,"secondary":false,"pixels":[0,11,164,1,7,193,1,11,193,2,7,208,2,11,223,2,12,223,2,13,208,2,14,178,3,4,164,3,5,208,3,6,208,3,7,223,3,8,178,3,11,208,4,7,193,4,11,193,5,7,193,5,11,208,5,12,178,5,13,164,5,14,193,5,15,208,6,6,164,6,7,223,6,8,223,6,9,208,6,10,178,6,11,223,6,12,164,7,7,208,7,11,193,8,7,193]},{"width":9,"chr":"$","bonus":140,"secondary":false,"pixels":[1,14,208,2,5,223,2,6,193,2,7,223,2,8,223,2,15,193,3,4,164,3,8,208,3,9,223,3,14,164,3,15,223,3,16,193,4,4,193,4,6,164,4,7,193,4,8,208,4,9,223,4,10,223,4,15,193,5,4,193,5,10,223,5,11,178,6,4,178,6,10,178,6,11,223,6,12,223,6,13,208,6,14,208]},{"width":14,"chr":"%","bonus":145,"secondary":false,"pixels":[1,5,223,1,6,208,1,7,208,1,8,223,2,9,164,3,4,164,4,4,208,4,5,193,4,8,178,4,14,223,5,6,193,5,7,193,5,11,178,5,12,193,6,9,193,6,10,178,7,7,193,7,12,193,7,13,193,8,4,193,8,5,178,8,11,178,8,14,193,9,15,164,10,10,164,11,11,193,11,14,193,12,12,193,12,13,193]},{"width":15,"chr":"&","bonus":205,"secondary":false,"pixels":[1,11,164,1,12,223,1,13,193,2,10,208,2,11,208,2,12,208,2,13,223,2,14,223,3,6,193,3,7,193,3,14,223,4,5,223,4,6,178,4,7,208,4,8,223,4,9,223,4,15,193,5,4,164,5,9,223,5,10,223,5,15,193,6,4,193,6,10,208,6,11,223,6,15,178,7,4,193,7,11,208,7,12,223,8,5,193,8,12,208,8,13,193,8,14,178,9,13,223,9,14,178,10,10,164,10,11,164,10,12,193,10,14,223,11,10,193,11,15,193,12,15,193]},{"width":4,"chr":"'","bonus":15,"secondary":true,"pixels":[1,0,223,1,1,208,1,2,164]},{"width":5,"chr":"(","bonus":65,"secondary":false,"pixels":[0,8,164,0,9,208,0,10,193,0,11,178,1,6,208,1,7,223,1,8,178,1,11,178,1,12,208,1,13,223,2,4,164,2,5,164,2,15,178]},{"width":6,"chr":")","bonus":50,"secondary":false,"pixels":[2,5,193,2,14,178,3,6,164,3,7,223,3,8,223,3,9,193,3,10,193,3,11,223,3,12,223,3,13,193]},{"width":7,"chr":"*","bonus":35,"secondary":false,"pixels":[1,5,208,2,7,193,3,4,164,3,5,164,3,6,164,4,5,208,4,7,208]},{"width":10,"chr":"+","bonus":65,"secondary":false,"pixels":[1,11,193,2,11,193,3,11,208,4,8,193,4,9,193,4,10,193,4,11,223,4,12,208,4,13,193,4,14,193,5,11,193,6,11,193,7,11,193]},{"width":4,"chr":",","bonus":15,"secondary":true,"pixels":[1,13,208,2,13,193,2,14,164]},{"width":7,"chr":"-","bonus":20,"secondary":true,"pixels":[1,9,193,2,9,193,3,9,208,4,9,178]},{"width":4,"chr":".","bonus":15,"secondary":true,"pixels":[1,14,193,1,15,164,2,14,178]},{"width":10,"chr":"/","bonus":50,"secondary":false,"pixels":[1,16,193,2,14,164,2,15,178,3,13,208,4,11,193,4,12,164,5,10,193,6,8,208,7,6,178,7,7,164]},{"width":10,"chr":"0","bonus":180,"secondary":false,"pixels":[0,8,164,0,9,208,0,10,193,0,11,193,1,6,223,1,7,223,1,8,223,1,9,223,1,10,223,1,11,223,1,12,223,1,13,223,2,5,208,2,13,164,2,14,223,3,4,164,3,15,178,4,4,193,4,15,193,5,4,178,5,15,164,6,5,223,6,6,164,6,14,208,7,6,223,7,7,223,7,8,223,7,9,223,7,10,223,7,11,223,7,12,223,7,13,223,8,8,193,8,9,193,8,10,193,8,11,164]},{"width":7,"chr":"1","bonus":115,"secondary":false,"pixels":[2,5,208,2,6,208,2,7,193,2,8,193,2,9,193,2,10,193,2,11,193,2,12,193,2,13,193,2,14,208,2,15,193,3,4,164,3,5,223,3,6,223,3,7,223,3,8,223,3,9,223,3,10,223,3,11,223,3,12,223,3,13,223,3,14,223,3,15,193]},{"width":10,"chr":"2","bonus":140,"secondary":false,"pixels":[1,5,208,1,15,193,2,4,164,2,14,208,2,15,193,3,4,193,3,13,178,3,15,193,4,4,208,4,12,193,4,15,193,5,4,164,5,5,178,5,10,193,5,11,193,5,15,193,6,5,223,6,6,223,6,7,223,6,8,223,6,9,223,6,10,178,6,15,193,7,6,178,7,7,193,7,8,164,7,14,193,7,15,178]},{"width":9,"chr":"3","bonus":140,"secondary":false,"pixels":[0,14,193,1,15,193,2,4,178,2,15,193,3,4,193,3,9,193,3,15,193,4,4,193,4,8,164,4,9,223,4,15,164,5,5,223,5,6,208,5,7,223,5,8,164,5,9,178,5,10,223,5,14,193,6,5,164,6,6,223,6,7,164,6,10,223,6,11,223,6,12,223,6,13,223,6,14,178,7,11,193,7,12,193]},{"width":10,"chr":"4","bonus":160,"secondary":false,"pixels":[0,12,208,1,11,208,1,12,193,2,9,178,2,12,193,3,8,178,3,12,193,4,7,164,4,12,193,5,6,223,5,7,193,5,8,193,5,9,193,5,10,193,5,11,208,5,12,223,5,13,193,5,14,193,5,15,193,6,5,193,6,6,193,6,7,193,6,8,193,6,9,193,6,10,193,6,11,208,6,12,223,6,13,193,6,14,208,6,15,193,7,12,193,8,12,164]},{"width":8,"chr":"5","bonus":145,"secondary":false,"pixels":[0,14,193,1,4,164,1,5,193,1,6,193,1,7,223,1,8,178,1,15,193,2,4,193,2,8,223,2,15,193,3,4,193,3,8,223,3,15,164,4,4,193,4,8,193,4,9,223,4,14,164,5,4,193,5,9,223,5,10,223,5,11,223,5,12,193,5,13,223,5,14,164,6,4,164,6,5,164,6,10,193,6,11,223,6,12,193]},{"width":10,"chr":"6","bonus":145,"secondary":false,"pixels":[0,10,164,0,11,193,0,12,193,1,8,208,1,9,223,1,10,223,1,11,223,1,12,223,1,13,223,1,14,193,2,7,223,2,8,193,2,14,223,3,6,208,3,15,193,4,5,193,4,9,164,4,15,193,5,9,193,5,15,178,6,9,178,6,10,193,7,10,223,7,11,223,7,12,223,7,13,223,7,14,193,8,11,193,8,12,208]},{"width":9,"chr":"7","bonus":100,"secondary":false,"pixels":[0,5,178,1,4,178,1,5,164,2,4,193,2,14,208,2,15,193,3,4,193,3,12,223,3,13,223,3,14,223,4,4,193,4,10,223,4,11,208,5,4,193,5,8,223,5,9,164,6,4,193,6,5,193,6,6,193,7,4,208]},{"width":9,"chr":"8","bonus":200,"secondary":false,"pixels":[0,6,164,0,7,164,0,12,193,0,13,193,1,5,223,1,6,208,1,7,223,1,8,208,1,10,164,1,11,223,1,12,208,1,13,223,1,14,223,2,4,164,2,8,223,2,9,193,2,10,193,2,15,164,3,4,193,3,9,223,3,15,193,4,4,193,4,9,223,4,15,193,5,4,178,5,8,178,5,9,178,5,10,223,6,5,223,6,6,208,6,7,223,6,10,208,6,11,223,6,12,208,6,13,223,6,14,223,7,6,193,7,11,178,7,12,223,7,13,193]},{"width":9,"chr":"9","bonus":135,"secondary":false,"pixels":[0,7,208,0,8,193,1,5,208,1,6,223,1,7,193,1,8,223,1,9,223,2,10,178,3,4,178,3,10,193,3,15,178,4,4,193,4,14,208,5,5,208,5,12,208,5,13,208,6,5,193,6,6,223,6,7,223,6,8,223,6,9,223,6,10,223,6,11,223,6,12,164,7,7,178,7,8,193,7,9,193]},{"width":4,"chr":":","bonus":30,"secondary":true,"pixels":[1,10,178,1,15,178,2,9,164,2,10,193,2,15,208,2,16,164]},{"width":4,"chr":";","bonus":30,"secondary":true,"pixels":[1,9,164,1,10,208,1,15,208,2,10,178,2,15,193,2,16,164]},{"width":9,"chr":"<","bonus":60,"secondary":false,"pixels":[0,11,178,1,11,193,1,12,208,2,10,164,2,12,164,3,10,208,3,13,193,4,13,178,5,9,208,5,14,178,6,9,164,6,14,208]},{"width":9,"chr":"=","bonus":70,"secondary":false,"pixels":[0,9,193,0,12,193,1,9,193,1,12,193,2,9,193,2,12,193,3,9,193,3,12,193,4,9,193,4,12,193,5,9,193,5,12,193,6,9,193,6,12,193]},{"width":9,"chr":">","bonus":55,"secondary":false,"pixels":[0,8,164,1,9,178,1,14,223,2,9,193,3,10,164,3,13,193,4,10,208,4,13,178,5,12,178,6,11,223,6,12,208]},{"width":9,"chr":"?","bonus":85,"secondary":false,"pixels":[0,5,178,1,4,164,2,4,193,2,11,193,3,4,208,3,10,223,3,14,164,4,4,193,4,8,164,4,9,223,5,5,223,5,6,208,5,7,223,5,8,223,6,5,193,6,6,223,6,7,208]},{"width":14,"chr":"@","bonus":180,"secondary":false,"pixels":[1,8,164,1,9,223,1,10,193,1,11,208,1,12,223,2,7,164,2,13,164,2,14,178,3,14,178,4,10,178,4,11,193,4,15,164,5,8,193,5,9,193,5,10,178,5,11,193,5,12,178,5,15,193,6,15,193,7,10,193,7,11,164,7,15,164,8,6,164,8,7,223,8,8,223,8,9,208,8,10,193,8,11,223,8,12,223,9,12,193,11,5,193,11,11,164,12,6,164,12,7,208,12,8,208,12,9,178]},{"width":14,"chr":"A","bonus":175,"secondary":false,"pixels":[1,15,164,2,14,208,2,15,193,3,11,164,3,12,223,3,13,164,4,9,193,4,10,193,4,11,208,5,7,208,5,8,164,5,11,193,6,5,223,6,6,223,6,7,178,6,11,193,7,6,193,7,7,223,7,8,223,7,9,193,7,11,193,8,8,164,8,9,223,8,10,223,8,11,223,8,12,164,9,11,208,9,12,223,9,13,223,9,14,208,9,15,164,10,13,193,10,14,223,10,15,193,11,15,193]},{"width":10,"chr":"B","bonus":235,"secondary":false,"pixels":[1,4,193,1,5,193,1,6,193,1,7,193,1,8,193,1,9,193,1,10,193,1,11,193,1,12,193,1,13,193,1,14,208,1,15,193,2,4,193,2,5,223,2,6,223,2,7,223,2,8,223,2,9,223,2,10,223,2,11,223,2,12,223,2,13,223,2,14,223,2,15,193,3,4,164,3,9,164,3,15,193,4,4,193,4,9,193,4,15,193,5,4,164,5,9,223,5,15,178,6,5,223,6,6,223,6,7,208,6,8,178,6,10,223,7,6,178,7,10,208,7,11,223,7,12,223,7,13,223,7,14,208,8,11,164,8,12,193,8,13,164]},{"width":12,"chr":"C","bonus":165,"secondary":false,"pixels":[0,8,164,0,9,208,0,10,193,0,11,164,1,6,178,1,7,223,1,8,223,1,9,223,1,10,223,1,11,223,1,12,223,2,5,164,2,6,223,2,7,164,2,11,164,2,12,223,2,13,223,3,5,208,3,13,193,3,14,223,4,14,208,5,4,178,5,15,164,6,4,193,6,15,193,7,4,193,7,15,193,8,4,193,8,15,193,9,4,164,9,15,164,10,5,193,10,14,178]},{"width":14,"chr":"D","bonus":260,"secondary":false,"pixels":[1,4,193,1,5,193,1,6,193,1,7,193,1,8,193,1,9,193,1,10,193,1,11,193,1,12,193,1,13,193,1,14,208,1,15,193,2,4,193,2,5,223,2,6,223,2,7,223,2,8,223,2,9,223,2,10,223,2,11,223,2,12,223,2,13,223,2,14,223,2,15,193,3,4,208,3,15,223,4,4,193,4,15,208,5,4,193,5,15,193,6,4,193,6,15,193,7,4,178,7,15,164,8,5,193,9,5,223,9,6,164,9,14,208,10,5,178,10,6,223,10,7,208,10,13,223,11,6,193,11,7,223,11,8,223,11,9,223,11,10,223,11,11,223,11,12,223,12,8,178,12,9,193,12,10,193]},{"width":10,"chr":"E","bonus":170,"secondary":false,"pixels":[2,4,193,2,5,223,2,6,223,2,7,223,2,8,223,2,9,223,2,10,223,2,11,223,2,12,223,2,13,223,2,14,223,2,15,193,3,4,208,3,5,193,3,6,193,3,7,193,3,8,193,3,9,223,3,10,193,3,11,193,3,12,193,3,13,193,3,14,223,3,15,193,4,4,193,4,9,193,4,15,193,5,4,193,5,9,193,5,15,193,6,4,208,6,9,208,6,15,193,7,15,208]},{"width":9,"chr":"F","bonus":155,"secondary":false,"pixels":[2,4,193,2,5,223,2,6,223,2,7,223,2,8,223,2,9,223,2,10,223,2,11,223,2,12,223,2,13,223,2,14,223,2,15,193,3,4,208,3,5,193,3,6,193,3,7,193,3,8,193,3,9,223,3,10,193,3,11,193,3,12,193,3,13,193,3,14,208,3,15,193,4,4,193,4,9,193,5,4,193,5,9,193,6,4,208,6,9,208,7,4,193]},{"width":14,"chr":"G","bonus":210,"secondary":false,"pixels":[0,9,193,0,10,208,0,11,164,1,7,223,1,8,223,1,9,223,1,10,223,1,11,223,1,12,223,1,13,164,2,6,223,2,7,164,2,11,164,2,12,223,2,13,223,3,5,223,3,13,193,3,14,223,4,14,208,5,4,178,5,15,164,6,4,193,6,15,193,7,4,193,7,15,193,8,4,193,8,15,193,9,4,178,9,15,178,10,5,178,10,10,193,10,11,223,10,12,223,10,13,223,10,14,223,11,5,178,11,6,164,11,10,208,11,11,193,11,12,193,11,13,193,11,14,193]},{"width":15,"chr":"H","bonus":270,"secondary":false,"pixels":[2,4,193,2,5,223,2,6,223,2,7,223,2,8,223,2,9,223,2,10,223,2,11,223,2,12,223,2,13,223,2,14,223,2,15,193,3,4,193,3,5,193,3,6,193,3,7,193,3,8,193,3,9,223,3,10,193,3,11,193,3,12,193,3,13,193,3,14,208,3,15,193,4,9,193,5,9,193,6,9,193,7,9,193,8,9,193,9,9,193,10,4,193,10,5,193,10,6,193,10,7,193,10,8,193,10,9,223,10,10,193,10,11,193,10,12,193,10,13,193,10,14,208,10,15,193,11,4,193,11,5,223,11,6,223,11,7,223,11,8,223,11,9,223,11,10,223,11,11,223,11,12,223,11,13,223,11,14,223,11,15,193]},{"width":7,"chr":"I","bonus":120,"secondary":false,"pixels":[2,4,193,2,5,223,2,6,223,2,7,223,2,8,223,2,9,223,2,10,223,2,11,223,2,12,223,2,13,223,2,14,223,2,15,193,3,4,193,3,5,193,3,6,193,3,7,193,3,8,193,3,9,193,3,10,193,3,11,193,3,12,193,3,13,193,3,14,208,3,15,193]},{"width":7,"chr":"J","bonus":135,"secondary":false,"pixels":[2,18,178,3,4,193,3,5,223,3,6,223,3,7,223,3,8,223,3,9,223,3,10,223,3,11,223,3,12,223,3,13,223,3,14,223,3,15,223,3,16,223,3,17,223,4,4,193,4,5,193,4,6,193,4,7,193,4,8,193,4,9,193,4,10,193,4,11,193,4,12,193,4,13,193,4,14,193,4,15,193]},{"width":13,"chr":"K","bonus":235,"secondary":false,"pixels":[1,4,193,1,5,193,1,6,193,1,7,193,1,8,193,1,9,193,1,10,193,1,11,193,1,12,193,1,13,193,1,14,208,1,15,193,2,4,193,2,5,223,2,6,223,2,7,223,2,8,223,2,9,223,2,10,223,2,11,223,2,12,223,2,13,223,2,14,223,2,15,193,3,9,223,4,8,193,4,9,193,4,10,223,5,7,193,5,10,178,5,11,223,5,12,164,6,6,193,6,11,164,6,12,223,6,13,178,7,4,193,7,5,208,7,12,164,7,13,223,7,14,193,8,4,208,8,13,164,8,14,223,9,14,164,9,15,193,10,15,193]},{"width":9,"chr":"L","bonus":145,"secondary":false,"pixels":[1,4,193,1,5,193,1,6,193,1,7,193,1,8,193,1,9,193,1,10,193,1,11,193,1,12,193,1,13,193,1,14,208,1,15,193,2,4,193,2,5,223,2,6,223,2,7,223,2,8,223,2,9,223,2,10,223,2,11,223,2,12,223,2,13,223,2,14,223,2,15,193,3,15,193,4,15,193,5,15,193,6,15,193,7,14,164]},{"width":18,"chr":"M","bonus":245,"secondary":false,"pixels":[1,15,164,2,11,193,2,12,223,2,13,223,2,14,223,2,15,208,3,5,193,3,6,223,3,7,223,3,8,208,3,9,164,4,6,208,4,7,223,4,8,223,5,8,223,5,9,223,5,10,223,6,10,223,6,11,223,6,12,223,7,12,223,7,13,223,7,14,208,8,13,223,8,14,178,9,11,193,9,12,193,10,9,193,10,10,193,11,7,178,11,8,193,12,5,178,12,6,223,12,7,223,12,8,208,12,9,178,13,6,164,13,7,193,13,8,223,13,9,223,13,10,223,13,11,223,13,12,223,13,13,223,13,14,223,13,15,178,14,13,193,14,14,223,14,15,193]},{"width":15,"chr":"N","bonus":225,"secondary":false,"pixels":[1,15,164,2,5,223,2,6,223,2,7,193,2,8,178,2,9,193,2,10,193,2,11,193,2,12,193,2,13,208,2,14,223,2,15,193,3,6,223,3,7,193,4,7,223,4,8,208,5,8,223,5,9,208,6,9,223,6,10,208,7,9,164,7,10,223,7,11,208,8,10,164,8,11,223,8,12,193,9,11,164,9,12,223,9,13,193,10,4,164,10,12,164,10,13,223,10,14,193,11,4,193,11,5,223,11,6,223,11,7,223,11,8,223,11,9,223,11,10,223,11,11,223,11,12,193,11,13,193,11,14,193,11,15,164]},{"width":15,"chr":"O","bonus":235,"secondary":false,"pixels":[0,8,164,0,9,193,0,10,193,0,11,164,1,7,223,1,8,223,1,9,223,1,10,223,1,11,223,1,12,223,1,13,164,2,6,223,2,7,164,2,12,223,2,13,223,2,14,164,3,5,193,3,13,164,3,14,223,4,14,178,5,4,178,5,15,193,6,4,193,6,15,208,7,4,208,7,15,178,8,4,178,8,15,164,9,5,208,10,5,223,10,6,223,10,13,164,10,14,193,11,6,223,11,7,223,11,8,223,11,9,208,11,10,193,11,11,223,11,12,223,11,13,223,12,7,208,12,8,223,12,9,223,12,10,223,12,11,223,12,12,178]},{"width":10,"chr":"P","bonus":180,"secondary":false,"pixels":[1,4,193,1,5,193,1,6,193,1,7,193,1,8,193,1,9,193,1,10,193,1,11,193,1,12,193,1,13,193,1,14,223,1,15,193,2,4,193,2,5,223,2,6,223,2,7,223,2,8,223,2,9,223,2,10,223,2,11,223,2,12,223,2,13,223,2,14,223,2,15,193,3,4,193,4,4,193,5,4,193,6,4,164,6,5,193,6,9,193,7,5,223,7,6,223,7,7,223,7,8,223,8,6,193,8,7,193]},{"width":14,"chr":"Q","bonus":260,"secondary":false,"pixels":[0,8,174,0,9,214,0,10,212,0,11,172,1,6,179,1,7,223,1,8,223,1,9,223,1,10,223,1,11,223,1,12,223,1,13,185,2,5,180,2,6,201,2,12,190,2,13,223,2,14,185,3,5,165,3,14,223,4,4,163,4,15,171,5,4,164,5,15,209,6,4,171,6,13,190,6,15,183,7,4,195,7,13,206,7,15,165,8,4,171,8,14,213,8,15,167,9,5,219,9,14,175,9,15,218,10,5,197,10,6,223,10,7,174,10,13,199,10,14,169,11,6,205,11,7,223,11,8,223,11,9,223,11,10,223,11,11,223,11,12,223,11,13,166,12,8,192,12,9,219,12,10,213,12,11,170]},{"width":14,"chr":"R","bonus":245,"secondary":false,"pixels":[1,4,193,1,5,193,1,6,193,1,7,193,1,8,193,1,9,193,1,10,193,1,11,193,1,12,193,1,13,193,1,14,223,1,15,193,2,4,193,2,5,223,2,6,223,2,7,223,2,8,223,2,9,223,2,10,223,2,11,223,2,12,223,2,13,223,2,14,223,2,15,193,3,4,193,3,10,208,4,4,193,4,10,193,5,4,193,5,10,223,6,4,164,6,5,193,6,9,164,6,10,208,6,11,223,7,5,223,7,6,223,7,7,223,7,8,223,7,11,178,7,12,223,7,13,193,8,6,193,8,7,193,8,13,223,8,14,208,9,14,223,9,15,164,10,15,208]},{"width":8,"chr":"S","bonus":140,"secondary":false,"pixels":[1,6,193,1,7,193,1,15,164,2,5,208,2,6,178,2,7,223,2,8,223,2,9,164,2,15,193,3,4,164,3,8,208,3,9,223,3,15,193,4,4,193,4,9,223,4,10,223,4,11,164,4,15,164,5,4,193,5,10,223,5,11,223,5,12,208,5,13,178,5,14,223,6,5,193,6,11,164,6,12,193,6,13,178]},{"width":13,"chr":"T","bonus":160,"secondary":false,"pixels":[1,4,208,2,4,193,3,4,193,4,4,193,5,4,193,5,5,193,5,6,193,5,7,193,5,8,193,5,9,193,5,10,193,5,11,193,5,12,193,5,13,193,5,14,208,5,15,193,6,4,193,6,5,223,6,6,223,6,7,223,6,8,223,6,9,223,6,10,223,6,11,223,6,12,223,6,13,223,6,14,223,6,15,193,7,4,193,8,4,193,9,4,193,10,4,208]},{"width":14,"chr":"U","bonus":180,"secondary":false,"pixels":[2,4,193,2,5,223,2,6,223,2,7,223,2,8,223,2,9,223,2,10,223,2,11,223,2,12,223,3,4,193,3,5,193,3,6,193,3,7,193,3,8,193,3,9,193,3,10,193,3,11,193,3,12,223,3,13,223,3,14,208,4,14,223,5,15,193,6,15,193,7,15,193,9,14,193,10,4,193,10,5,193,10,6,193,10,7,193,10,8,193,10,9,193,10,10,193,10,11,193,10,12,223,10,13,208,11,4,178]},{"width":14,"chr":"V","bonus":160,"secondary":false,"pixels":[1,4,208,2,4,193,2,5,223,2,6,223,2,7,164,3,4,164,3,5,178,3,6,223,3,7,223,3,8,223,3,9,178,4,8,208,4,9,223,4,10,223,4,11,208,5,10,164,5,11,223,5,12,223,5,13,223,6,12,164,6,13,223,6,14,223,7,11,164,7,12,208,8,9,193,8,10,193,9,7,223,9,8,178,10,4,193,10,5,223,10,6,164,11,4,178]},{"width":19,"chr":"W","bonus":255,"secondary":false,"pixels":[1,4,193,2,4,193,2,5,223,2,6,223,2,7,178,3,4,164,3,5,178,3,6,223,3,7,223,3,8,223,3,9,223,3,10,164,4,8,164,4,9,223,4,10,223,4,11,223,4,12,223,5,12,208,5,13,223,5,14,223,6,12,208,6,13,164,7,9,178,7,10,193,8,7,208,8,8,164,9,5,223,9,6,223,9,7,208,10,6,164,10,7,223,10,8,223,10,9,223,11,9,208,11,10,223,11,11,223,11,12,178,12,11,193,12,12,223,12,13,223,12,14,193,13,12,208,13,13,208,14,9,164,14,10,208,14,11,164,15,6,178,15,7,223,15,8,164,16,4,193,16,5,178]},{"width":13,"chr":"X","bonus":190,"secondary":false,"pixels":[1,15,164,2,4,193,2,14,193,2,15,193,3,4,193,3,5,223,3,6,208,3,13,223,4,5,164,4,6,223,4,7,223,4,8,164,4,11,164,4,12,193,5,7,193,5,8,223,5,9,223,5,10,208,6,8,193,6,9,223,6,10,223,6,11,193,7,7,178,7,8,164,7,10,178,7,11,223,7,12,223,7,13,164,8,6,208,8,12,208,8,13,223,8,14,223,8,15,164,9,4,193,9,5,178,9,14,223,9,15,193,10,15,193]},{"width":14,"chr":"Y","bonus":150,"secondary":false,"pixels":[1,4,208,2,4,193,2,5,223,3,4,178,3,5,208,3,6,223,3,7,193,4,7,223,4,8,223,4,9,164,5,8,164,5,9,223,5,10,223,5,11,208,5,12,193,5,13,193,5,14,208,5,15,193,6,10,223,6,11,223,6,12,223,6,13,223,6,14,223,6,15,193,7,8,164,7,9,178,8,7,208,9,4,208,9,5,223,10,4,208]},{"width":11,"chr":"Z","bonus":185,"secondary":false,"pixels":[1,4,193,1,14,208,1,15,193,2,4,193,2,12,164,2,13,223,2,14,223,2,15,193,3,4,193,3,11,208,3,12,223,3,13,178,3,15,193,4,4,193,4,9,178,4,10,223,4,11,223,4,15,193,5,4,193,5,8,223,5,9,223,5,10,193,5,15,193,6,4,193,6,6,178,6,7,223,6,8,223,6,15,193,7,4,193,7,5,223,7,6,223,7,7,193,7,15,193,8,4,193,8,5,223,8,15,193,9,14,164]},{"width":5,"chr":"[","bonus":70,"secondary":false,"pixels":[1,2,178,1,3,208,1,4,193,1,5,193,1,6,193,1,7,193,1,8,193,1,9,193,1,10,193,1,11,193,1,12,193,1,13,193,1,14,193,1,15,193]},{"width":10,"chr":"\\","bonus":50,"secondary":false,"pixels":[1,5,178,1,6,164,2,7,208,3,9,193,4,10,193,4,11,164,5,12,208,6,13,164,6,14,178,7,15,193]},{"width":5,"chr":"]","bonus":70,"secondary":false,"pixels":[2,2,178,2,3,208,2,4,193,2,5,193,2,6,193,2,7,193,2,8,193,2,9,193,2,10,193,2,11,193,2,12,193,2,13,193,2,14,193,2,15,193]},{"width":9,"chr":"^","bonus":55,"secondary":false,"pixels":[1,8,164,1,9,208,2,6,193,2,7,193,3,4,208,3,5,193,4,5,208,4,6,178,5,7,178,5,8,208,6,10,223]},{"width":10,"chr":"_","bonus":40,"secondary":false,"pixels":[0,16,178,1,16,193,2,16,193,3,16,193,4,16,193,5,16,193,6,16,193,7,16,193]},{"width":14,"chr":"a","bonus":175,"secondary":false,"pixels":[1,15,164,2,14,208,2,15,193,3,11,164,3,12,223,3,13,164,4,9,193,4,10,193,4,11,208,5,7,208,5,8,164,5,11,193,6,5,223,6,6,223,6,7,178,6,11,193,7,6,193,7,7,223,7,8,223,7,9,193,7,11,193,8,8,164,8,9,223,8,10,223,8,11,223,8,12,164,9,11,208,9,12,223,9,13,223,9,14,208,9,15,164,10,13,193,10,14,223,10,15,193,11,15,193]},{"width":10,"chr":"b","bonus":235,"secondary":false,"pixels":[1,4,193,1,5,193,1,6,193,1,7,193,1,8,193,1,9,193,1,10,193,1,11,193,1,12,193,1,13,193,1,14,208,1,15,193,2,4,193,2,5,223,2,6,223,2,7,223,2,8,223,2,9,223,2,10,223,2,11,223,2,12,223,2,13,223,2,14,223,2,15,193,3,4,164,3,9,164,3,15,193,4,4,193,4,9,193,4,15,193,5,4,164,5,9,223,5,15,178,6,5,223,6,6,223,6,7,208,6,8,178,6,10,223,7,6,178,7,10,208,7,11,223,7,12,223,7,13,223,7,14,208,8,11,164,8,12,193,8,13,164]},{"width":12,"chr":"c","bonus":165,"secondary":false,"pixels":[0,8,164,0,9,208,0,10,193,0,11,164,1,6,178,1,7,223,1,8,223,1,9,223,1,10,223,1,11,223,1,12,223,2,5,164,2,6,223,2,7,164,2,11,164,2,12,223,2,13,223,3,5,208,3,13,193,3,14,223,4,14,208,5,4,178,5,15,164,6,4,193,6,15,193,7,4,193,7,15,193,8,4,193,8,15,193,9,4,164,9,15,164,10,5,193,10,14,178]},{"width":15,"chr":"d","bonus":260,"secondary":false,"pixels":[2,4,193,2,5,223,2,6,223,2,7,223,2,8,223,2,9,223,2,10,223,2,11,223,2,12,223,2,13,223,2,14,223,2,15,193,3,4,193,3,5,208,3,6,193,3,7,193,3,8,193,3,9,193,3,10,193,3,11,193,3,12,193,3,13,193,3,14,223,3,15,193,4,4,193,4,15,223,5,4,193,5,15,193,6,4,208,6,15,193,7,4,178,7,15,178,8,4,164,9,5,223,9,14,178,10,5,208,10,6,223,10,13,164,10,14,193,11,6,223,11,7,223,11,8,223,11,9,208,11,10,193,11,11,223,11,12,223,11,13,208,12,7,193,12,8,223,12,9,223,12,10,223,12,11,223]},{"width":10,"chr":"e","bonus":170,"secondary":false,"pixels":[2,4,193,2,5,223,2,6,223,2,7,223,2,8,223,2,9,223,2,10,223,2,11,223,2,12,223,2,13,223,2,14,223,2,15,193,3,4,208,3,5,193,3,6,193,3,7,193,3,8,193,3,9,223,3,10,193,3,11,193,3,12,193,3,13,193,3,14,223,3,15,193,4,4,193,4,9,193,4,15,193,5,4,193,5,9,193,5,15,193,6,4,208,6,9,208,6,15,193,7,15,208]},{"width":9,"chr":"f","bonus":155,"secondary":false,"pixels":[2,4,193,2,5,223,2,6,223,2,7,223,2,8,223,2,9,223,2,10,223,2,11,223,2,12,223,2,13,223,2,14,223,2,15,193,3,4,208,3,5,193,3,6,193,3,7,193,3,8,193,3,9,223,3,10,193,3,11,193,3,12,193,3,13,193,3,14,208,3,15,193,4,4,193,4,9,193,5,4,193,5,9,193,6,4,208,6,9,208,7,4,193]},{"width":15,"chr":"g","bonus":220,"secondary":false,"pixels":[1,7,178,1,8,223,1,9,223,1,10,223,1,11,223,1,12,193,2,6,223,2,7,223,2,8,223,2,9,193,2,10,208,2,11,223,2,12,223,2,13,223,3,5,208,3,6,164,3,13,223,3,14,193,4,5,164,4,14,223,5,4,164,6,4,193,6,15,178,7,4,193,7,15,208,8,4,208,8,15,193,9,4,178,9,15,178,10,4,164,10,5,164,10,10,208,10,11,193,10,12,193,10,13,193,10,14,208,10,15,164,11,5,223,11,6,164,11,10,193,11,11,223,11,12,223,11,13,223,11,14,223]},{"width":15,"chr":"h","bonus":270,"secondary":false,"pixels":[2,4,193,2,5,223,2,6,223,2,7,223,2,8,223,2,9,223,2,10,223,2,11,223,2,12,223,2,13,223,2,14,223,2,15,193,3,4,193,3,5,193,3,6,193,3,7,193,3,8,193,3,9,223,3,10,193,3,11,193,3,12,193,3,13,193,3,14,208,3,15,193,4,9,193,5,9,193,6,9,193,7,9,193,8,9,193,9,9,193,10,4,193,10,5,193,10,6,193,10,7,193,10,8,193,10,9,223,10,10,193,10,11,193,10,12,193,10,13,193,10,14,208,10,15,193,11,4,193,11,5,223,11,6,223,11,7,223,11,8,223,11,9,223,11,10,223,11,11,223,11,12,223,11,13,223,11,14,223,11,15,193]},{"width":7,"chr":"i","bonus":120,"secondary":false,"pixels":[2,4,193,2,5,193,2,6,193,2,7,193,2,8,193,2,9,193,2,10,193,2,11,193,2,12,193,2,13,193,2,14,208,2,15,193,3,4,193,3,5,223,3,6,223,3,7,223,3,8,223,3,9,223,3,10,223,3,11,223,3,12,223,3,13,223,3,14,223,3,15,193]},{"width":7,"chr":"j","bonus":135,"secondary":false,"pixels":[2,18,178,3,4,193,3,5,223,3,6,223,3,7,223,3,8,223,3,9,223,3,10,223,3,11,223,3,12,223,3,13,223,3,14,223,3,15,223,3,16,223,3,17,223,4,4,193,4,5,193,4,6,193,4,7,193,4,8,193,4,9,193,4,10,193,4,11,193,4,12,193,4,13,193,4,14,193,4,15,193]},{"width":13,"chr":"k","bonus":235,"secondary":false,"pixels":[1,4,193,1,5,193,1,6,193,1,7,193,1,8,193,1,9,193,1,10,193,1,11,193,1,12,193,1,13,193,1,14,208,1,15,193,2,4,193,2,5,223,2,6,223,2,7,223,2,8,223,2,9,223,2,10,223,2,11,223,2,12,223,2,13,223,2,14,223,2,15,193,3,9,223,4,8,193,4,9,193,4,10,223,5,7,193,5,10,178,5,11,223,5,12,164,6,6,193,6,11,164,6,12,223,6,13,178,7,4,193,7,5,208,7,12,164,7,13,223,7,14,193,8,4,208,8,13,164,8,14,223,9,14,164,9,15,193,10,15,193]},{"width":9,"chr":"l","bonus":145,"secondary":false,"pixels":[1,4,193,1,5,193,1,6,193,1,7,193,1,8,193,1,9,193,1,10,193,1,11,193,1,12,193,1,13,193,1,14,208,1,15,193,2,4,193,2,5,223,2,6,223,2,7,223,2,8,223,2,9,223,2,10,223,2,11,223,2,12,223,2,13,223,2,14,223,2,15,193,3,15,193,4,15,193,5,15,193,6,15,193,7,14,164]},{"width":18,"chr":"m","bonus":245,"secondary":false,"pixels":[1,15,164,2,11,193,2,12,223,2,13,223,2,14,223,2,15,208,3,5,193,3,6,223,3,7,223,3,8,208,3,9,164,4,6,208,4,7,223,4,8,223,5,8,223,5,9,223,5,10,223,6,10,223,6,11,223,6,12,223,7,12,223,7,13,223,7,14,208,8,13,223,8,14,178,9,11,193,9,12,193,10,9,193,10,10,193,11,7,178,11,8,193,12,5,178,12,6,223,12,7,223,12,8,208,12,9,178,13,6,164,13,7,193,13,8,223,13,9,223,13,10,223,13,11,223,13,12,223,13,13,223,13,14,223,13,15,178,14,13,193,14,14,223,14,15,193]},{"width":15,"chr":"n","bonus":225,"secondary":false,"pixels":[1,15,164,2,5,223,2,6,223,2,7,193,2,8,178,2,9,193,2,10,193,2,11,193,2,12,193,2,13,208,2,14,223,2,15,193,3,6,223,3,7,193,4,7,223,4,8,208,5,8,223,5,9,208,6,9,223,6,10,208,7,9,164,7,10,223,7,11,208,8,10,164,8,11,223,8,12,193,9,11,164,9,12,223,9,13,193,10,4,164,10,12,164,10,13,223,10,14,193,11,4,193,11,5,223,11,6,223,11,7,223,11,8,223,11,9,223,11,10,223,11,11,223,11,12,193,11,13,193,11,14,193,11,15,164]},{"width":15,"chr":"o","bonus":235,"secondary":false,"pixels":[0,8,164,0,9,193,0,10,193,0,11,164,1,7,223,1,8,223,1,9,223,1,10,223,1,11,223,1,12,223,1,13,164,2,6,223,2,7,164,2,12,223,2,13,223,2,14,164,3,5,193,3,13,164,3,14,223,4,14,178,5,4,178,5,15,193,6,4,193,6,15,208,7,4,208,7,15,178,8,4,178,8,15,164,9,5,208,10,5,223,10,6,223,10,13,164,10,14,193,11,6,223,11,7,223,11,8,223,11,9,208,11,10,193,11,11,223,11,12,223,11,13,223,12,7,208,12,8,223,12,9,223,12,10,223,12,11,223,12,12,178]},{"width":10,"chr":"p","bonus":180,"secondary":false,"pixels":[1,4,193,1,5,193,1,6,193,1,7,193,1,8,193,1,9,193,1,10,193,1,11,193,1,12,193,1,13,193,1,14,223,1,15,193,2,4,193,2,5,223,2,6,223,2,7,223,2,8,223,2,9,223,2,10,223,2,11,223,2,12,223,2,13,223,2,14,223,2,15,193,3,4,193,4,4,193,5,4,193,6,4,164,6,5,193,6,9,193,7,5,223,7,6,223,7,7,223,7,8,223,8,6,193,8,7,193]},{"width":14,"chr":"q","bonus":260,"secondary":false,"pixels":[0,8,174,0,9,214,0,10,212,0,11,172,1,6,179,1,7,223,1,8,223,1,9,223,1,10,223,1,11,223,1,12,223,1,13,185,2,5,180,2,6,201,2,12,190,2,13,223,2,14,185,3,5,165,3,14,223,4,4,163,4,15,171,5,4,164,5,15,209,6,4,171,6,13,190,6,15,183,7,4,195,7,13,206,7,15,165,8,4,171,8,14,213,8,15,167,9,5,219,9,14,175,9,15,218,10,5,197,10,6,223,10,7,174,10,13,199,10,14,169,11,6,205,11,7,223,11,8,223,11,9,223,11,10,223,11,11,223,11,12,223,11,13,166,12,8,192,12,9,219,12,10,213,12,11,170]},{"width":13,"chr":"r","bonus":235,"secondary":false,"pixels":[1,4,193,1,5,193,1,6,193,1,7,193,1,8,193,1,9,193,1,10,193,1,11,193,1,12,193,1,13,193,1,14,223,1,15,193,2,4,193,2,5,223,2,6,223,2,7,223,2,8,223,2,9,223,2,10,223,2,11,223,2,12,223,2,13,223,2,14,223,2,15,193,3,4,193,3,10,208,4,4,208,4,10,208,5,4,178,5,10,223,5,11,208,6,5,223,6,6,223,6,7,193,6,8,223,6,9,178,6,11,193,6,12,223,6,13,164,7,6,223,7,7,208,7,12,164,7,13,223,7,14,193,8,14,223,8,15,164,9,15,208]},{"width":8,"chr":"s","bonus":140,"secondary":false,"pixels":[1,6,193,1,7,193,1,15,164,2,5,208,2,6,178,2,7,223,2,8,223,2,9,164,2,15,193,3,4,164,3,8,208,3,9,223,3,15,193,4,4,193,4,9,223,4,10,223,4,11,164,4,15,164,5,4,193,5,10,223,5,11,223,5,12,208,5,13,178,5,14,223,6,5,193,6,11,164,6,12,193,6,13,178]},{"width":13,"chr":"t","bonus":160,"secondary":false,"pixels":[1,4,208,2,4,193,3,4,193,4,4,193,5,4,193,5,5,193,5,6,193,5,7,193,5,8,193,5,9,193,5,10,193,5,11,193,5,12,193,5,13,193,5,14,208,5,15,193,6,4,193,6,5,223,6,6,223,6,7,223,6,8,223,6,9,223,6,10,223,6,11,223,6,12,223,6,13,223,6,14,223,6,15,193,7,4,193,8,4,193,9,4,193,10,4,208]},{"width":14,"chr":"u","bonus":180,"secondary":false,"pixels":[2,4,193,2,5,223,2,6,223,2,7,223,2,8,223,2,9,223,2,10,223,2,11,223,2,12,223,3,4,193,3,5,193,3,6,193,3,7,193,3,8,193,3,9,193,3,10,193,3,11,193,3,12,223,3,13,223,3,14,208,4,14,223,5,15,193,6,15,193,7,15,193,9,14,193,10,4,193,10,5,193,10,6,193,10,7,193,10,8,193,10,9,193,10,10,193,10,11,193,10,12,223,10,13,208,11,4,178]},{"width":15,"chr":"v","bonus":160,"secondary":false,"pixels":[2,4,208,3,4,193,3,5,223,3,6,223,3,7,164,4,4,164,4,5,178,4,6,223,4,7,223,4,8,223,4,9,178,5,8,208,5,9,223,5,10,223,5,11,208,6,10,164,6,11,223,6,12,223,6,13,223,7,12,164,7,13,223,7,14,223,8,11,164,8,12,208,9,9,193,9,10,193,10,7,223,10,8,178,11,4,193,11,5,223,11,6,164,12,4,178]},{"width":19,"chr":"w","bonus":255,"secondary":false,"pixels":[1,4,193,2,4,193,2,5,223,2,6,223,2,7,178,3,4,164,3,5,178,3,6,223,3,7,223,3,8,223,3,9,223,3,10,164,4,8,164,4,9,223,4,10,223,4,11,223,4,12,223,5,12,208,5,13,223,5,14,223,6,12,208,6,13,164,7,9,178,7,10,193,8,7,208,8,8,164,9,5,223,9,6,223,9,7,208,10,6,164,10,7,223,10,8,223,10,9,223,11,9,208,11,10,223,11,11,223,11,12,178,12,11,193,12,12,223,12,13,223,12,14,193,13,12,208,13,13,208,14,9,164,14,10,208,14,11,164,15,6,178,15,7,223,15,8,164,16,4,193,16,5,178]},{"width":13,"chr":"x","bonus":190,"secondary":false,"pixels":[1,15,164,2,4,193,2,14,193,2,15,193,3,4,193,3,5,223,3,6,208,3,13,223,4,5,164,4,6,223,4,7,223,4,8,164,4,11,164,4,12,193,5,7,193,5,8,223,5,9,223,5,10,208,6,8,193,6,9,223,6,10,223,6,11,193,7,7,178,7,8,164,7,10,178,7,11,223,7,12,223,7,13,164,8,6,208,8,12,208,8,13,223,8,14,223,8,15,164,9,4,193,9,5,178,9,14,223,9,15,193,10,15,193]},{"width":13,"chr":"y","bonus":145,"secondary":false,"pixels":[1,4,193,2,4,193,2,5,223,2,6,178,3,5,164,3,6,223,3,7,223,4,7,193,4,8,223,4,9,193,5,9,208,5,10,223,5,11,223,5,12,223,5,13,223,5,14,223,5,15,193,6,10,223,6,11,193,6,12,193,6,13,193,6,14,208,6,15,193,7,8,193,8,6,193,8,7,178,9,4,193,9,5,208,10,4,193]},{"width":11,"chr":"z","bonus":185,"secondary":false,"pixels":[0,15,164,1,4,193,1,14,223,1,15,193,2,4,193,2,12,193,2,13,223,2,14,223,2,15,193,3,4,193,3,11,223,3,12,223,3,13,164,3,15,193,4,4,193,4,9,193,4,10,223,4,11,208,4,15,193,5,4,193,5,8,223,5,9,223,5,10,164,5,15,193,6,4,193,6,6,193,6,7,223,6,8,208,6,15,193,7,4,193,7,5,223,7,6,223,7,7,164,7,15,193,8,4,193,8,5,208,8,15,193]},{"width":6,"chr":"{","bonus":50,"secondary":false,"pixels":[1,9,193,2,4,223,2,5,193,2,6,193,2,7,208,2,11,208,2,12,193,2,13,193,2,14,223,2,15,223]},{"width":3,"chr":"|","bonus":80,"secondary":false,"pixels":[0,4,193,0,5,193,0,6,193,0,7,193,0,8,193,0,9,193,0,10,193,0,11,193,0,12,193,0,13,193,0,14,193,0,15,193,0,16,193,0,17,193,0,18,193,0,19,193]},{"width":6,"chr":"}","bonus":65,"secondary":false,"pixels":[2,4,178,2,14,164,2,15,208,3,5,178,3,6,193,3,7,193,3,8,178,3,9,178,3,10,193,3,11,193,3,12,193,3,13,193,3,14,164]},{"width":9,"chr":"~","bonus":30,"secondary":false,"pixels":[1,12,208,2,11,208,3,11,208,5,12,178,6,12,208,7,11,208]}],"width":19,"spacewidth":4,"shadow":false,"height":20,"basey":15};

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./fonts/aa_12px_mono.fontmeta.json");


/***/ })

/******/ });
});
//# sourceMappingURL=aa_12px_mono.js.map