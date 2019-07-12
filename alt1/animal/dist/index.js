(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@alt1/base"), require("@alt1/ocr"));
	else if(typeof define === 'function' && define.amd)
		define(["@alt1/base", "@alt1/ocr"], factory);
	else if(typeof exports === 'object')
		exports["@alt1/animal-reader"] = factory(require("@alt1/base"), require("@alt1/ocr"));
	else
		root["AnimalReader"] = factory(root["A1lib"], root["OCR"]);
})((typeof self!='undefined'?self:this), function(__WEBPACK_EXTERNAL_MODULE__alt1_base__, __WEBPACK_EXTERNAL_MODULE__alt1_ocr__) {
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

/***/ "../../util/index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
function copyToClipboard(str) {
    var el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}
exports.copyToClipboard = copyToClipboard;
function newDragHandler(mousedownevent, movefunc, endfunc, mindist) {
    var locked = mindist != undefined;
    var mouseloc;
    var clientdx = mousedownevent.clientX - mousedownevent.screenX;
    var clientdy = mousedownevent.clientY - mousedownevent.screenY;
    //TODO screenX approach breaks when zoomed or clientx is required
    var x = mousedownevent.screenX + clientdx;
    var y = mousedownevent.screenY + clientdy;
    var init = function () { mouseloc = { x: x, y: y, dx: 0, dy: 0, sx: x, sy: y, end: false, start: true }; };
    init();
    var moved = function (e, end) {
        var x = e.screenX + clientdx;
        var y = e.screenY + clientdy;
        var dx = x - mouseloc.x;
        var dy = y - mouseloc.y;
        if (locked && Math.abs(dx) + Math.abs(dy) >= mindist) {
            locked = false;
        }
        if (!locked) {
            mouseloc.end = end;
            mouseloc.dx = dx;
            mouseloc.dy = dy;
            mouseloc.x = x;
            mouseloc.y = y;
            movefunc && movefunc(mouseloc, false);
            end && endfunc && endfunc(mouseloc, true);
            mouseloc.start = false;
        }
    };
    var mousemove = function (e) {
        if (e.touches) {
            e = e.touches[0];
        }
        moved(e, false);
    };
    var mouseup = function (e) {
        if (e.touches) {
            e = e.touches[0];
        }
        if (e) {
            moved(e, true);
        }
        for (var a in allframes) {
            var frame = allframes[a];
            frame.removeEventListener("mousemove", mousemove);
            frame.removeEventListener("mouseup", mouseup);
            frame.removeEventListener("touchmove", mousemove);
            frame.removeEventListener("touchend", mouseup);
        }
    };
    //damn this is a mess, other frames consume the event so add handlers to every frame
    //currently still break when hovering over frame which arent parents of the current one
    //EDIT: THIS IS MADNESS
    var allframes = [];
    var recurframe = function (frame) {
        if (allframes.indexOf(frame) != -1) {
            return;
        }
        try {
            var qq = frame.document;
        }
        catch (e) {
            return;
        }
        allframes.push(frame);
        for (var a = 0; a < frame.frames.length; a++) {
            recurframe(frame.frames[a]);
        }
    };
    recurframe(top);
    recurframe(window);
    for (var a in allframes) {
        var frame = allframes[a];
        frame.addEventListener("mousemove", mousemove);
        frame.addEventListener("mouseup", mouseup);
        frame.addEventListener("touchmove", mousemove);
        frame.addEventListener("touchend", mouseup);
    }
}
exports.newDragHandler = newDragHandler;
function startCaps(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
exports.startCaps = startCaps;
function delay(t) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (done) { return setTimeout.apply(void 0, [done, t].concat(args)); })];
        });
    });
}
exports.delay = delay;
function uuid() {
    //https://gist.github.com/jcxplorer/823878
    var uuid = "", i, random;
    for (i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;
        if (i == 8 || i == 12 || i == 16 || i == 20) {
            uuid += "-";
        }
        uuid += (i == 12 ? 4 : (i == 16 ? (random & 3 | 8) : random)).toString(16);
    }
    return uuid;
}
exports.uuid = uuid;
//because js still has no proper way for this (ie11)
function initArray(l, val) {
    var r = [];
    r.length = l;
    for (var a = 0; a < l; a += 1) {
        r[a] = val;
    }
    return r;
}
exports.initArray = initArray;
function stringdownload(filename, text) {
    filedownload(filename, 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
}
exports.stringdownload = stringdownload;
function filedownload(filename, url) {
    var element = document.createElement('a');
    element.setAttribute('href', url);
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
exports.filedownload = filedownload;
function listdate(time) {
    var fullmonthnames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var d = new Date(time);
    return d.getDate() + " " + fullmonthnames[d.getMonth()] + " " + d.getFullYear();
}
exports.listdate = listdate;
function dlpagejson(url, obj, func, errorfunc) {
    var req = new XMLHttpRequest();
    req.onload = function () {
        var obj = null;
        try {
            obj = JSON.parse(req.responseText);
        }
        catch (e) { }
        if (obj == null) {
            if (errorfunc) {
                errorfunc();
            }
            return;
        }
        if (func) {
            func(obj);
        }
    };
    req.onerror = errorfunc;
    if (obj) {
        req.open("POST", url, true);
        req.setRequestHeader("Content-type", "application/json");
        req.send(JSON.stringify(obj));
    }
    else {
        req.open("GET", url, true);
        req.send();
    }
}
exports.dlpagejson = dlpagejson;
var OldDom;
(function (OldDom) {
    function id(id) {
        return document.getElementById(id);
    }
    OldDom.id = id;
    function clear(el) {
        while (el.firstChild) {
            el.removeChild(el.firstChild);
        }
    }
    OldDom.clear = clear;
    function div(strClass, objAttr, arrayChildren) {
        var classname, attr, children, tag, tagarg, el, childfrag;
        //reorder arguments
        var argi = 0;
        if (typeof arguments[argi] == "string") {
            var typedata = arguments[argi++].split(":");
            classname = typedata[0];
            var tagdata = typedata[1] ? typedata[1].split("/") : [];
            tag = tagdata[0];
            tagarg = tagdata[1];
        }
        if (typeof arguments[argi] == "object" && !Array.isArray(arguments[argi]) && !(arguments[argi] instanceof DocumentFragment)) {
            attr = arguments[argi++];
        }
        if (typeof arguments[argi] == "object" && Array.isArray(arguments[argi])) {
            children = arguments[argi++];
        }
        else if (typeof arguments[argi] == "object" && arguments[argi] instanceof DocumentFragment) {
            childfrag = arguments[argi++];
        }
        attr = attr || {};
        if (classname) {
            attr["class"] = classname;
        }
        //start actual work
        tag = attr && attr.tag || tag || "div";
        if (tag == "input" && tagarg) {
            attr.type = tagarg;
        }
        if (tag == "frag") {
            el = document.createDocumentFragment();
        }
        else {
            var el = (attr && attr.namespace ? document.createElementNS(attr.namespace, tag) : document.createElement(tag));
        }
        if (attr) {
            for (var a in attr) {
                if (attr[a] === false || attr[a] == null || a == "tag" || a == "namespace") {
                    continue;
                }
                if (a.substr(0, 2) == "on") {
                    el[a] = attr[a];
                }
                else {
                    el.setAttribute(a, attr[a]);
                }
            }
        }
        if (children != null && children != undefined) {
            if (!Array.isArray(children)) {
                children = [children];
            }
            for (var a in children) {
                if (children[a] == null) {
                    continue;
                }
                if (typeof children[a] != "object") {
                    el.appendChild(document.createTextNode(children[a].toString()));
                }
                else {
                    el.appendChild(children[a]);
                }
            }
        }
        else if (childfrag != null) {
            el.appendChild(childfrag);
        }
        return el;
    }
    OldDom.div = div;
    function frag() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var el = document.createDocumentFragment();
        for (var a = 0; a < arguments.length; a++) {
            if (arguments[a] == null) {
                continue;
            }
            if (typeof arguments[a] != "object") {
                el.appendChild(document.createTextNode(arguments[a].toString()));
            }
            else {
                el.appendChild(arguments[a]);
            }
        }
        return el;
    }
    OldDom.frag = frag;
    function put(el, content) {
        if (typeof el == "string") {
            el = id(el);
        }
        clear(el);
        el.appendChild(content);
    }
    OldDom.put = put;
})(OldDom = exports.OldDom || (exports.OldDom = {}));
function smallu(nr, gp) {
    if (isNaN(nr)) {
        return "-";
    }
    nr = Math.round(nr);
    var sign = (nr < 0 ? "-" : "");
    nr = Math.abs(nr);
    if (nr >= 1000000000000000) {
        return sign + "quite a bit";
    }
    if (nr % 1) {
        if (nr < 100) {
            return sign + (nr + "00").slice(0, 4);
        }
        nr = Math.floor(nr);
    }
    var nrstr = nr + "";
    var original = nrstr;
    if (nrstr.length <= 3) {
        return sign + nrstr + (gp ? "gp" : "");
    }
    if (nrstr.length == 4) {
        return sign + nrstr.slice(0, 1) + "," + nrstr.slice(1, 4) + (gp ? "gp" : "");
    }
    if (nrstr.length % 3 != 0) {
        nrstr = nrstr.slice(0, nrstr.length % 3) + "." + nrstr.slice(nrstr.length % 3, 3);
    }
    else {
        nrstr = nrstr.slice(0, 3);
    }
    if (original.length <= 6) {
        return sign + nrstr + "k";
    }
    if (original.length <= 9) {
        return sign + nrstr + "m";
    }
    if (original.length <= 12) {
        return sign + nrstr + "b";
    }
    if (original.length <= 15) {
        return sign + nrstr + "t";
    }
    return "error";
}
exports.smallu = smallu;
function jsonTryDecode(str) {
    try {
        return JSON.parse(str);
    }
    catch (e) {
        return null;
    }
}
exports.jsonTryDecode = jsonTryDecode;
function urlArgs(url) {
    if (!url) {
        url = document.location.search;
    }
    var reg = /(\?|&)(.*?)(=(.*?))?(?=$|&)/g;
    var r = {};
    for (var m; m = reg.exec(url);) {
        r[m[2]] = m[4];
    }
    return r;
}
exports.urlArgs = urlArgs;
function padLeft(str, n, char) {
    if (char === void 0) { char = "0"; }
    str = str + "";
    while (str.length < n) {
        str = char + str;
    }
    return str;
}
exports.padLeft = padLeft;


/***/ }),

/***/ "../ocr/fonts/aa_12px_mono.fontmeta.json":
/***/ (function(module) {

module.exports = {"chars":[{"width":3,"chr":"!","bonus":45,"secondary":false,"pixels":[0,5,223,0,6,208,0,7,178,0,8,164,1,4,178,1,5,208,1,6,193,1,7,178,1,14,164]},{"width":6,"chr":"\"","bonus":25,"secondary":true,"pixels":[0,1,178,1,0,178,3,0,178,3,1,208,3,2,193]},{"width":10,"chr":"#","bonus":160,"secondary":false,"pixels":[0,11,164,1,7,193,1,11,193,2,7,208,2,11,223,2,12,223,2,13,208,2,14,178,3,4,164,3,5,208,3,6,208,3,7,223,3,8,178,3,11,208,4,7,193,4,11,193,5,7,193,5,11,208,5,12,178,5,13,164,5,14,193,5,15,208,6,6,164,6,7,223,6,8,223,6,9,208,6,10,178,6,11,223,6,12,164,7,7,208,7,11,193,8,7,193]},{"width":9,"chr":"$","bonus":140,"secondary":false,"pixels":[1,14,208,2,5,223,2,6,193,2,7,223,2,8,223,2,15,193,3,4,164,3,8,208,3,9,223,3,14,164,3,15,223,3,16,193,4,4,193,4,6,164,4,7,193,4,8,208,4,9,223,4,10,223,4,15,193,5,4,193,5,10,223,5,11,178,6,4,178,6,10,178,6,11,223,6,12,223,6,13,208,6,14,208]},{"width":14,"chr":"%","bonus":145,"secondary":false,"pixels":[1,5,223,1,6,208,1,7,208,1,8,223,2,9,164,3,4,164,4,4,208,4,5,193,4,8,178,4,14,223,5,6,193,5,7,193,5,11,178,5,12,193,6,9,193,6,10,178,7,7,193,7,12,193,7,13,193,8,4,193,8,5,178,8,11,178,8,14,193,9,15,164,10,10,164,11,11,193,11,14,193,12,12,193,12,13,193]},{"width":15,"chr":"&","bonus":205,"secondary":false,"pixels":[1,11,164,1,12,223,1,13,193,2,10,208,2,11,208,2,12,208,2,13,223,2,14,223,3,6,193,3,7,193,3,14,223,4,5,223,4,6,178,4,7,208,4,8,223,4,9,223,4,15,193,5,4,164,5,9,223,5,10,223,5,15,193,6,4,193,6,10,208,6,11,223,6,15,178,7,4,193,7,11,208,7,12,223,8,5,193,8,12,208,8,13,193,8,14,178,9,13,223,9,14,178,10,10,164,10,11,164,10,12,193,10,14,223,11,10,193,11,15,193,12,15,193]},{"width":4,"chr":"'","bonus":15,"secondary":true,"pixels":[1,0,223,1,1,208,1,2,164]},{"width":5,"chr":"(","bonus":65,"secondary":false,"pixels":[0,8,164,0,9,208,0,10,193,0,11,178,1,6,208,1,7,223,1,8,178,1,11,178,1,12,208,1,13,223,2,4,164,2,5,164,2,15,178]},{"width":6,"chr":")","bonus":50,"secondary":false,"pixels":[2,5,193,2,14,178,3,6,164,3,7,223,3,8,223,3,9,193,3,10,193,3,11,223,3,12,223,3,13,193]},{"width":7,"chr":"*","bonus":35,"secondary":false,"pixels":[1,5,208,2,7,193,3,4,164,3,5,164,3,6,164,4,5,208,4,7,208]},{"width":10,"chr":"+","bonus":65,"secondary":false,"pixels":[1,11,193,2,11,193,3,11,208,4,8,193,4,9,193,4,10,193,4,11,223,4,12,208,4,13,193,4,14,193,5,11,193,6,11,193,7,11,193]},{"width":4,"chr":",","bonus":15,"secondary":true,"pixels":[1,13,208,2,13,193,2,14,164]},{"width":7,"chr":"-","bonus":20,"secondary":true,"pixels":[1,9,193,2,9,193,3,9,208,4,9,178]},{"width":4,"chr":".","bonus":15,"secondary":true,"pixels":[1,14,193,1,15,164,2,14,178]},{"width":10,"chr":"/","bonus":50,"secondary":false,"pixels":[1,16,193,2,14,164,2,15,178,3,13,208,4,11,193,4,12,164,5,10,193,6,8,208,7,6,178,7,7,164]},{"width":10,"chr":"0","bonus":180,"secondary":false,"pixels":[0,8,164,0,9,208,0,10,193,0,11,193,1,6,223,1,7,223,1,8,223,1,9,223,1,10,223,1,11,223,1,12,223,1,13,223,2,5,208,2,13,164,2,14,223,3,4,164,3,15,178,4,4,193,4,15,193,5,4,178,5,15,164,6,5,223,6,6,164,6,14,208,7,6,223,7,7,223,7,8,223,7,9,223,7,10,223,7,11,223,7,12,223,7,13,223,8,8,193,8,9,193,8,10,193,8,11,164]},{"width":7,"chr":"1","bonus":115,"secondary":false,"pixels":[2,5,208,2,6,208,2,7,193,2,8,193,2,9,193,2,10,193,2,11,193,2,12,193,2,13,193,2,14,208,2,15,193,3,4,164,3,5,223,3,6,223,3,7,223,3,8,223,3,9,223,3,10,223,3,11,223,3,12,223,3,13,223,3,14,223,3,15,193]},{"width":10,"chr":"2","bonus":140,"secondary":false,"pixels":[1,5,208,1,15,193,2,4,164,2,14,208,2,15,193,3,4,193,3,13,178,3,15,193,4,4,208,4,12,193,4,15,193,5,4,164,5,5,178,5,10,193,5,11,193,5,15,193,6,5,223,6,6,223,6,7,223,6,8,223,6,9,223,6,10,178,6,15,193,7,6,178,7,7,193,7,8,164,7,14,193,7,15,178]},{"width":9,"chr":"3","bonus":140,"secondary":false,"pixels":[0,14,193,1,15,193,2,4,178,2,15,193,3,4,193,3,9,193,3,15,193,4,4,193,4,8,164,4,9,223,4,15,164,5,5,223,5,6,208,5,7,223,5,8,164,5,9,178,5,10,223,5,14,193,6,5,164,6,6,223,6,7,164,6,10,223,6,11,223,6,12,223,6,13,223,6,14,178,7,11,193,7,12,193]},{"width":10,"chr":"4","bonus":160,"secondary":false,"pixels":[0,12,208,1,11,208,1,12,193,2,9,178,2,12,193,3,8,178,3,12,193,4,7,164,4,12,193,5,6,223,5,7,193,5,8,193,5,9,193,5,10,193,5,11,208,5,12,223,5,13,193,5,14,193,5,15,193,6,5,193,6,6,193,6,7,193,6,8,193,6,9,193,6,10,193,6,11,208,6,12,223,6,13,193,6,14,208,6,15,193,7,12,193,8,12,164]},{"width":8,"chr":"5","bonus":145,"secondary":false,"pixels":[0,14,193,1,4,164,1,5,193,1,6,193,1,7,223,1,8,178,1,15,193,2,4,193,2,8,223,2,15,193,3,4,193,3,8,223,3,15,164,4,4,193,4,8,193,4,9,223,4,14,164,5,4,193,5,9,223,5,10,223,5,11,223,5,12,193,5,13,223,5,14,164,6,4,164,6,5,164,6,10,193,6,11,223,6,12,193]},{"width":10,"chr":"6","bonus":145,"secondary":false,"pixels":[0,10,164,0,11,193,0,12,193,1,8,208,1,9,223,1,10,223,1,11,223,1,12,223,1,13,223,1,14,193,2,7,223,2,8,193,2,14,223,3,6,208,3,15,193,4,5,193,4,9,164,4,15,193,5,9,193,5,15,178,6,9,178,6,10,193,7,10,223,7,11,223,7,12,223,7,13,223,7,14,193,8,11,193,8,12,208]},{"width":9,"chr":"7","bonus":100,"secondary":false,"pixels":[0,5,178,1,4,178,1,5,164,2,4,193,2,14,208,2,15,193,3,4,193,3,12,223,3,13,223,3,14,223,4,4,193,4,10,223,4,11,208,5,4,193,5,8,223,5,9,164,6,4,193,6,5,193,6,6,193,7,4,208]},{"width":9,"chr":"8","bonus":200,"secondary":false,"pixels":[0,6,164,0,7,164,0,12,193,0,13,193,1,5,223,1,6,208,1,7,223,1,8,208,1,10,164,1,11,223,1,12,208,1,13,223,1,14,223,2,4,164,2,8,223,2,9,193,2,10,193,2,15,164,3,4,193,3,9,223,3,15,193,4,4,193,4,9,223,4,15,193,5,4,178,5,8,178,5,9,178,5,10,223,6,5,223,6,6,208,6,7,223,6,10,208,6,11,223,6,12,208,6,13,223,6,14,223,7,6,193,7,11,178,7,12,223,7,13,193]},{"width":9,"chr":"9","bonus":135,"secondary":false,"pixels":[0,7,208,0,8,193,1,5,208,1,6,223,1,7,193,1,8,223,1,9,223,2,10,178,3,4,178,3,10,193,3,15,178,4,4,193,4,14,208,5,5,208,5,12,208,5,13,208,6,5,193,6,6,223,6,7,223,6,8,223,6,9,223,6,10,223,6,11,223,6,12,164,7,7,178,7,8,193,7,9,193]},{"width":4,"chr":":","bonus":30,"secondary":true,"pixels":[1,10,178,1,15,178,2,9,164,2,10,193,2,15,208,2,16,164]},{"width":4,"chr":";","bonus":30,"secondary":true,"pixels":[1,9,164,1,10,208,1,15,208,2,10,178,2,15,193,2,16,164]},{"width":9,"chr":"<","bonus":60,"secondary":false,"pixels":[0,11,178,1,11,193,1,12,208,2,10,164,2,12,164,3,10,208,3,13,193,4,13,178,5,9,208,5,14,178,6,9,164,6,14,208]},{"width":9,"chr":"=","bonus":70,"secondary":false,"pixels":[0,9,193,0,12,193,1,9,193,1,12,193,2,9,193,2,12,193,3,9,193,3,12,193,4,9,193,4,12,193,5,9,193,5,12,193,6,9,193,6,12,193]},{"width":9,"chr":">","bonus":55,"secondary":false,"pixels":[0,8,164,1,9,178,1,14,223,2,9,193,3,10,164,3,13,193,4,10,208,4,13,178,5,12,178,6,11,223,6,12,208]},{"width":9,"chr":"?","bonus":85,"secondary":false,"pixels":[0,5,178,1,4,164,2,4,193,2,11,193,3,4,208,3,10,223,3,14,164,4,4,193,4,8,164,4,9,223,5,5,223,5,6,208,5,7,223,5,8,223,6,5,193,6,6,223,6,7,208]},{"width":14,"chr":"@","bonus":180,"secondary":false,"pixels":[1,8,164,1,9,223,1,10,193,1,11,208,1,12,223,2,7,164,2,13,164,2,14,178,3,14,178,4,10,178,4,11,193,4,15,164,5,8,193,5,9,193,5,10,178,5,11,193,5,12,178,5,15,193,6,15,193,7,10,193,7,11,164,7,15,164,8,6,164,8,7,223,8,8,223,8,9,208,8,10,193,8,11,223,8,12,223,9,12,193,11,5,193,11,11,164,12,6,164,12,7,208,12,8,208,12,9,178]},{"width":14,"chr":"A","bonus":175,"secondary":false,"pixels":[1,15,164,2,14,208,2,15,193,3,11,164,3,12,223,3,13,164,4,9,193,4,10,193,4,11,208,5,7,208,5,8,164,5,11,193,6,5,223,6,6,223,6,7,178,6,11,193,7,6,193,7,7,223,7,8,223,7,9,193,7,11,193,8,8,164,8,9,223,8,10,223,8,11,223,8,12,164,9,11,208,9,12,223,9,13,223,9,14,208,9,15,164,10,13,193,10,14,223,10,15,193,11,15,193]},{"width":10,"chr":"B","bonus":235,"secondary":false,"pixels":[1,4,193,1,5,193,1,6,193,1,7,193,1,8,193,1,9,193,1,10,193,1,11,193,1,12,193,1,13,193,1,14,208,1,15,193,2,4,193,2,5,223,2,6,223,2,7,223,2,8,223,2,9,223,2,10,223,2,11,223,2,12,223,2,13,223,2,14,223,2,15,193,3,4,164,3,9,164,3,15,193,4,4,193,4,9,193,4,15,193,5,4,164,5,9,223,5,15,178,6,5,223,6,6,223,6,7,208,6,8,178,6,10,223,7,6,178,7,10,208,7,11,223,7,12,223,7,13,223,7,14,208,8,11,164,8,12,193,8,13,164]},{"width":12,"chr":"C","bonus":165,"secondary":false,"pixels":[0,8,164,0,9,208,0,10,193,0,11,164,1,6,178,1,7,223,1,8,223,1,9,223,1,10,223,1,11,223,1,12,223,2,5,164,2,6,223,2,7,164,2,11,164,2,12,223,2,13,223,3,5,208,3,13,193,3,14,223,4,14,208,5,4,178,5,15,164,6,4,193,6,15,193,7,4,193,7,15,193,8,4,193,8,15,193,9,4,164,9,15,164,10,5,193,10,14,178]},{"width":14,"chr":"D","bonus":260,"secondary":false,"pixels":[1,4,193,1,5,193,1,6,193,1,7,193,1,8,193,1,9,193,1,10,193,1,11,193,1,12,193,1,13,193,1,14,208,1,15,193,2,4,193,2,5,223,2,6,223,2,7,223,2,8,223,2,9,223,2,10,223,2,11,223,2,12,223,2,13,223,2,14,223,2,15,193,3,4,208,3,15,223,4,4,193,4,15,208,5,4,193,5,15,193,6,4,193,6,15,193,7,4,178,7,15,164,8,5,193,9,5,223,9,6,164,9,14,208,10,5,178,10,6,223,10,7,208,10,13,223,11,6,193,11,7,223,11,8,223,11,9,223,11,10,223,11,11,223,11,12,223,12,8,178,12,9,193,12,10,193]},{"width":10,"chr":"E","bonus":170,"secondary":false,"pixels":[2,4,193,2,5,223,2,6,223,2,7,223,2,8,223,2,9,223,2,10,223,2,11,223,2,12,223,2,13,223,2,14,223,2,15,193,3,4,208,3,5,193,3,6,193,3,7,193,3,8,193,3,9,223,3,10,193,3,11,193,3,12,193,3,13,193,3,14,223,3,15,193,4,4,193,4,9,193,4,15,193,5,4,193,5,9,193,5,15,193,6,4,208,6,9,208,6,15,193,7,15,208]},{"width":9,"chr":"F","bonus":155,"secondary":false,"pixels":[2,4,193,2,5,223,2,6,223,2,7,223,2,8,223,2,9,223,2,10,223,2,11,223,2,12,223,2,13,223,2,14,223,2,15,193,3,4,208,3,5,193,3,6,193,3,7,193,3,8,193,3,9,223,3,10,193,3,11,193,3,12,193,3,13,193,3,14,208,3,15,193,4,4,193,4,9,193,5,4,193,5,9,193,6,4,208,6,9,208,7,4,193]},{"width":14,"chr":"G","bonus":210,"secondary":false,"pixels":[0,9,193,0,10,208,0,11,164,1,7,223,1,8,223,1,9,223,1,10,223,1,11,223,1,12,223,1,13,164,2,6,223,2,7,164,2,11,164,2,12,223,2,13,223,3,5,223,3,13,193,3,14,223,4,14,208,5,4,178,5,15,164,6,4,193,6,15,193,7,4,193,7,15,193,8,4,193,8,15,193,9,4,178,9,15,178,10,5,178,10,10,193,10,11,223,10,12,223,10,13,223,10,14,223,11,5,178,11,6,164,11,10,208,11,11,193,11,12,193,11,13,193,11,14,193]},{"width":15,"chr":"H","bonus":270,"secondary":false,"pixels":[2,4,193,2,5,223,2,6,223,2,7,223,2,8,223,2,9,223,2,10,223,2,11,223,2,12,223,2,13,223,2,14,223,2,15,193,3,4,193,3,5,193,3,6,193,3,7,193,3,8,193,3,9,223,3,10,193,3,11,193,3,12,193,3,13,193,3,14,208,3,15,193,4,9,193,5,9,193,6,9,193,7,9,193,8,9,193,9,9,193,10,4,193,10,5,193,10,6,193,10,7,193,10,8,193,10,9,223,10,10,193,10,11,193,10,12,193,10,13,193,10,14,208,10,15,193,11,4,193,11,5,223,11,6,223,11,7,223,11,8,223,11,9,223,11,10,223,11,11,223,11,12,223,11,13,223,11,14,223,11,15,193]},{"width":7,"chr":"I","bonus":120,"secondary":false,"pixels":[2,4,193,2,5,223,2,6,223,2,7,223,2,8,223,2,9,223,2,10,223,2,11,223,2,12,223,2,13,223,2,14,223,2,15,193,3,4,193,3,5,193,3,6,193,3,7,193,3,8,193,3,9,193,3,10,193,3,11,193,3,12,193,3,13,193,3,14,208,3,15,193]},{"width":7,"chr":"J","bonus":135,"secondary":false,"pixels":[2,18,178,3,4,193,3,5,223,3,6,223,3,7,223,3,8,223,3,9,223,3,10,223,3,11,223,3,12,223,3,13,223,3,14,223,3,15,223,3,16,223,3,17,223,4,4,193,4,5,193,4,6,193,4,7,193,4,8,193,4,9,193,4,10,193,4,11,193,4,12,193,4,13,193,4,14,193,4,15,193]},{"width":13,"chr":"K","bonus":235,"secondary":false,"pixels":[1,4,193,1,5,193,1,6,193,1,7,193,1,8,193,1,9,193,1,10,193,1,11,193,1,12,193,1,13,193,1,14,208,1,15,193,2,4,193,2,5,223,2,6,223,2,7,223,2,8,223,2,9,223,2,10,223,2,11,223,2,12,223,2,13,223,2,14,223,2,15,193,3,9,223,4,8,193,4,9,193,4,10,223,5,7,193,5,10,178,5,11,223,5,12,164,6,6,193,6,11,164,6,12,223,6,13,178,7,4,193,7,5,208,7,12,164,7,13,223,7,14,193,8,4,208,8,13,164,8,14,223,9,14,164,9,15,193,10,15,193]},{"width":9,"chr":"L","bonus":145,"secondary":false,"pixels":[1,4,193,1,5,193,1,6,193,1,7,193,1,8,193,1,9,193,1,10,193,1,11,193,1,12,193,1,13,193,1,14,208,1,15,193,2,4,193,2,5,223,2,6,223,2,7,223,2,8,223,2,9,223,2,10,223,2,11,223,2,12,223,2,13,223,2,14,223,2,15,193,3,15,193,4,15,193,5,15,193,6,15,193,7,14,164]},{"width":18,"chr":"M","bonus":245,"secondary":false,"pixels":[1,15,164,2,11,193,2,12,223,2,13,223,2,14,223,2,15,208,3,5,193,3,6,223,3,7,223,3,8,208,3,9,164,4,6,208,4,7,223,4,8,223,5,8,223,5,9,223,5,10,223,6,10,223,6,11,223,6,12,223,7,12,223,7,13,223,7,14,208,8,13,223,8,14,178,9,11,193,9,12,193,10,9,193,10,10,193,11,7,178,11,8,193,12,5,178,12,6,223,12,7,223,12,8,208,12,9,178,13,6,164,13,7,193,13,8,223,13,9,223,13,10,223,13,11,223,13,12,223,13,13,223,13,14,223,13,15,178,14,13,193,14,14,223,14,15,193]},{"width":15,"chr":"N","bonus":225,"secondary":false,"pixels":[1,15,164,2,5,223,2,6,223,2,7,193,2,8,178,2,9,193,2,10,193,2,11,193,2,12,193,2,13,208,2,14,223,2,15,193,3,6,223,3,7,193,4,7,223,4,8,208,5,8,223,5,9,208,6,9,223,6,10,208,7,9,164,7,10,223,7,11,208,8,10,164,8,11,223,8,12,193,9,11,164,9,12,223,9,13,193,10,4,164,10,12,164,10,13,223,10,14,193,11,4,193,11,5,223,11,6,223,11,7,223,11,8,223,11,9,223,11,10,223,11,11,223,11,12,193,11,13,193,11,14,193,11,15,164]},{"width":15,"chr":"O","bonus":235,"secondary":false,"pixels":[0,8,164,0,9,193,0,10,193,0,11,164,1,7,223,1,8,223,1,9,223,1,10,223,1,11,223,1,12,223,1,13,164,2,6,223,2,7,164,2,12,223,2,13,223,2,14,164,3,5,193,3,13,164,3,14,223,4,14,178,5,4,178,5,15,193,6,4,193,6,15,208,7,4,208,7,15,178,8,4,178,8,15,164,9,5,208,10,5,223,10,6,223,10,13,164,10,14,193,11,6,223,11,7,223,11,8,223,11,9,208,11,10,193,11,11,223,11,12,223,11,13,223,12,7,208,12,8,223,12,9,223,12,10,223,12,11,223,12,12,178]},{"width":10,"chr":"P","bonus":180,"secondary":false,"pixels":[1,4,193,1,5,193,1,6,193,1,7,193,1,8,193,1,9,193,1,10,193,1,11,193,1,12,193,1,13,193,1,14,223,1,15,193,2,4,193,2,5,223,2,6,223,2,7,223,2,8,223,2,9,223,2,10,223,2,11,223,2,12,223,2,13,223,2,14,223,2,15,193,3,4,193,4,4,193,5,4,193,6,4,164,6,5,193,6,9,193,7,5,223,7,6,223,7,7,223,7,8,223,8,6,193,8,7,193]},{"width":14,"chr":"Q","bonus":260,"secondary":false,"pixels":[0,8,174,0,9,214,0,10,212,0,11,172,1,6,179,1,7,223,1,8,223,1,9,223,1,10,223,1,11,223,1,12,223,1,13,185,2,5,180,2,6,201,2,12,190,2,13,223,2,14,185,3,5,165,3,14,223,4,4,163,4,15,171,5,4,164,5,15,209,6,4,171,6,13,190,6,15,183,7,4,195,7,13,206,7,15,165,8,4,171,8,14,213,8,15,167,9,5,219,9,14,175,9,15,218,10,5,197,10,6,223,10,7,174,10,13,199,10,14,169,11,6,205,11,7,223,11,8,223,11,9,223,11,10,223,11,11,223,11,12,223,11,13,166,12,8,192,12,9,219,12,10,213,12,11,170]},{"width":14,"chr":"R","bonus":245,"secondary":false,"pixels":[1,4,193,1,5,193,1,6,193,1,7,193,1,8,193,1,9,193,1,10,193,1,11,193,1,12,193,1,13,193,1,14,223,1,15,193,2,4,193,2,5,223,2,6,223,2,7,223,2,8,223,2,9,223,2,10,223,2,11,223,2,12,223,2,13,223,2,14,223,2,15,193,3,4,193,3,10,208,4,4,193,4,10,193,5,4,193,5,10,223,6,4,164,6,5,193,6,9,164,6,10,208,6,11,223,7,5,223,7,6,223,7,7,223,7,8,223,7,11,178,7,12,223,7,13,193,8,6,193,8,7,193,8,13,223,8,14,208,9,14,223,9,15,164,10,15,208]},{"width":8,"chr":"S","bonus":140,"secondary":false,"pixels":[1,6,193,1,7,193,1,15,164,2,5,208,2,6,178,2,7,223,2,8,223,2,9,164,2,15,193,3,4,164,3,8,208,3,9,223,3,15,193,4,4,193,4,9,223,4,10,223,4,11,164,4,15,164,5,4,193,5,10,223,5,11,223,5,12,208,5,13,178,5,14,223,6,5,193,6,11,164,6,12,193,6,13,178]},{"width":13,"chr":"T","bonus":160,"secondary":false,"pixels":[1,4,208,2,4,193,3,4,193,4,4,193,5,4,193,5,5,193,5,6,193,5,7,193,5,8,193,5,9,193,5,10,193,5,11,193,5,12,193,5,13,193,5,14,208,5,15,193,6,4,193,6,5,223,6,6,223,6,7,223,6,8,223,6,9,223,6,10,223,6,11,223,6,12,223,6,13,223,6,14,223,6,15,193,7,4,193,8,4,193,9,4,193,10,4,208]},{"width":14,"chr":"U","bonus":180,"secondary":false,"pixels":[2,4,193,2,5,223,2,6,223,2,7,223,2,8,223,2,9,223,2,10,223,2,11,223,2,12,223,3,4,193,3,5,193,3,6,193,3,7,193,3,8,193,3,9,193,3,10,193,3,11,193,3,12,223,3,13,223,3,14,208,4,14,223,5,15,193,6,15,193,7,15,193,9,14,193,10,4,193,10,5,193,10,6,193,10,7,193,10,8,193,10,9,193,10,10,193,10,11,193,10,12,223,10,13,208,11,4,178]},{"width":14,"chr":"V","bonus":160,"secondary":false,"pixels":[1,4,208,2,4,193,2,5,223,2,6,223,2,7,164,3,4,164,3,5,178,3,6,223,3,7,223,3,8,223,3,9,178,4,8,208,4,9,223,4,10,223,4,11,208,5,10,164,5,11,223,5,12,223,5,13,223,6,12,164,6,13,223,6,14,223,7,11,164,7,12,208,8,9,193,8,10,193,9,7,223,9,8,178,10,4,193,10,5,223,10,6,164,11,4,178]},{"width":19,"chr":"W","bonus":255,"secondary":false,"pixels":[1,4,193,2,4,193,2,5,223,2,6,223,2,7,178,3,4,164,3,5,178,3,6,223,3,7,223,3,8,223,3,9,223,3,10,164,4,8,164,4,9,223,4,10,223,4,11,223,4,12,223,5,12,208,5,13,223,5,14,223,6,12,208,6,13,164,7,9,178,7,10,193,8,7,208,8,8,164,9,5,223,9,6,223,9,7,208,10,6,164,10,7,223,10,8,223,10,9,223,11,9,208,11,10,223,11,11,223,11,12,178,12,11,193,12,12,223,12,13,223,12,14,193,13,12,208,13,13,208,14,9,164,14,10,208,14,11,164,15,6,178,15,7,223,15,8,164,16,4,193,16,5,178]},{"width":13,"chr":"X","bonus":190,"secondary":false,"pixels":[1,15,164,2,4,193,2,14,193,2,15,193,3,4,193,3,5,223,3,6,208,3,13,223,4,5,164,4,6,223,4,7,223,4,8,164,4,11,164,4,12,193,5,7,193,5,8,223,5,9,223,5,10,208,6,8,193,6,9,223,6,10,223,6,11,193,7,7,178,7,8,164,7,10,178,7,11,223,7,12,223,7,13,164,8,6,208,8,12,208,8,13,223,8,14,223,8,15,164,9,4,193,9,5,178,9,14,223,9,15,193,10,15,193]},{"width":14,"chr":"Y","bonus":150,"secondary":false,"pixels":[1,4,208,2,4,193,2,5,223,3,4,178,3,5,208,3,6,223,3,7,193,4,7,223,4,8,223,4,9,164,5,8,164,5,9,223,5,10,223,5,11,208,5,12,193,5,13,193,5,14,208,5,15,193,6,10,223,6,11,223,6,12,223,6,13,223,6,14,223,6,15,193,7,8,164,7,9,178,8,7,208,9,4,208,9,5,223,10,4,208]},{"width":11,"chr":"Z","bonus":185,"secondary":false,"pixels":[1,4,193,1,14,208,1,15,193,2,4,193,2,12,164,2,13,223,2,14,223,2,15,193,3,4,193,3,11,208,3,12,223,3,13,178,3,15,193,4,4,193,4,9,178,4,10,223,4,11,223,4,15,193,5,4,193,5,8,223,5,9,223,5,10,193,5,15,193,6,4,193,6,6,178,6,7,223,6,8,223,6,15,193,7,4,193,7,5,223,7,6,223,7,7,193,7,15,193,8,4,193,8,5,223,8,15,193,9,14,164]},{"width":5,"chr":"[","bonus":70,"secondary":false,"pixels":[1,2,178,1,3,208,1,4,193,1,5,193,1,6,193,1,7,193,1,8,193,1,9,193,1,10,193,1,11,193,1,12,193,1,13,193,1,14,193,1,15,193]},{"width":10,"chr":"\\","bonus":50,"secondary":false,"pixels":[1,5,178,1,6,164,2,7,208,3,9,193,4,10,193,4,11,164,5,12,208,6,13,164,6,14,178,7,15,193]},{"width":5,"chr":"]","bonus":70,"secondary":false,"pixels":[2,2,178,2,3,208,2,4,193,2,5,193,2,6,193,2,7,193,2,8,193,2,9,193,2,10,193,2,11,193,2,12,193,2,13,193,2,14,193,2,15,193]},{"width":9,"chr":"^","bonus":55,"secondary":false,"pixels":[1,8,164,1,9,208,2,6,193,2,7,193,3,4,208,3,5,193,4,5,208,4,6,178,5,7,178,5,8,208,6,10,223]},{"width":10,"chr":"_","bonus":40,"secondary":false,"pixels":[0,16,178,1,16,193,2,16,193,3,16,193,4,16,193,5,16,193,6,16,193,7,16,193]},{"width":14,"chr":"a","bonus":175,"secondary":false,"pixels":[1,15,164,2,14,208,2,15,193,3,11,164,3,12,223,3,13,164,4,9,193,4,10,193,4,11,208,5,7,208,5,8,164,5,11,193,6,5,223,6,6,223,6,7,178,6,11,193,7,6,193,7,7,223,7,8,223,7,9,193,7,11,193,8,8,164,8,9,223,8,10,223,8,11,223,8,12,164,9,11,208,9,12,223,9,13,223,9,14,208,9,15,164,10,13,193,10,14,223,10,15,193,11,15,193]},{"width":10,"chr":"b","bonus":235,"secondary":false,"pixels":[1,4,193,1,5,193,1,6,193,1,7,193,1,8,193,1,9,193,1,10,193,1,11,193,1,12,193,1,13,193,1,14,208,1,15,193,2,4,193,2,5,223,2,6,223,2,7,223,2,8,223,2,9,223,2,10,223,2,11,223,2,12,223,2,13,223,2,14,223,2,15,193,3,4,164,3,9,164,3,15,193,4,4,193,4,9,193,4,15,193,5,4,164,5,9,223,5,15,178,6,5,223,6,6,223,6,7,208,6,8,178,6,10,223,7,6,178,7,10,208,7,11,223,7,12,223,7,13,223,7,14,208,8,11,164,8,12,193,8,13,164]},{"width":12,"chr":"c","bonus":165,"secondary":false,"pixels":[0,8,164,0,9,208,0,10,193,0,11,164,1,6,178,1,7,223,1,8,223,1,9,223,1,10,223,1,11,223,1,12,223,2,5,164,2,6,223,2,7,164,2,11,164,2,12,223,2,13,223,3,5,208,3,13,193,3,14,223,4,14,208,5,4,178,5,15,164,6,4,193,6,15,193,7,4,193,7,15,193,8,4,193,8,15,193,9,4,164,9,15,164,10,5,193,10,14,178]},{"width":15,"chr":"d","bonus":260,"secondary":false,"pixels":[2,4,193,2,5,223,2,6,223,2,7,223,2,8,223,2,9,223,2,10,223,2,11,223,2,12,223,2,13,223,2,14,223,2,15,193,3,4,193,3,5,208,3,6,193,3,7,193,3,8,193,3,9,193,3,10,193,3,11,193,3,12,193,3,13,193,3,14,223,3,15,193,4,4,193,4,15,223,5,4,193,5,15,193,6,4,208,6,15,193,7,4,178,7,15,178,8,4,164,9,5,223,9,14,178,10,5,208,10,6,223,10,13,164,10,14,193,11,6,223,11,7,223,11,8,223,11,9,208,11,10,193,11,11,223,11,12,223,11,13,208,12,7,193,12,8,223,12,9,223,12,10,223,12,11,223]},{"width":10,"chr":"e","bonus":170,"secondary":false,"pixels":[2,4,193,2,5,223,2,6,223,2,7,223,2,8,223,2,9,223,2,10,223,2,11,223,2,12,223,2,13,223,2,14,223,2,15,193,3,4,208,3,5,193,3,6,193,3,7,193,3,8,193,3,9,223,3,10,193,3,11,193,3,12,193,3,13,193,3,14,223,3,15,193,4,4,193,4,9,193,4,15,193,5,4,193,5,9,193,5,15,193,6,4,208,6,9,208,6,15,193,7,15,208]},{"width":9,"chr":"f","bonus":155,"secondary":false,"pixels":[2,4,193,2,5,223,2,6,223,2,7,223,2,8,223,2,9,223,2,10,223,2,11,223,2,12,223,2,13,223,2,14,223,2,15,193,3,4,208,3,5,193,3,6,193,3,7,193,3,8,193,3,9,223,3,10,193,3,11,193,3,12,193,3,13,193,3,14,208,3,15,193,4,4,193,4,9,193,5,4,193,5,9,193,6,4,208,6,9,208,7,4,193]},{"width":15,"chr":"g","bonus":220,"secondary":false,"pixels":[1,7,178,1,8,223,1,9,223,1,10,223,1,11,223,1,12,193,2,6,223,2,7,223,2,8,223,2,9,193,2,10,208,2,11,223,2,12,223,2,13,223,3,5,208,3,6,164,3,13,223,3,14,193,4,5,164,4,14,223,5,4,164,6,4,193,6,15,178,7,4,193,7,15,208,8,4,208,8,15,193,9,4,178,9,15,178,10,4,164,10,5,164,10,10,208,10,11,193,10,12,193,10,13,193,10,14,208,10,15,164,11,5,223,11,6,164,11,10,193,11,11,223,11,12,223,11,13,223,11,14,223]},{"width":15,"chr":"h","bonus":270,"secondary":false,"pixels":[2,4,193,2,5,223,2,6,223,2,7,223,2,8,223,2,9,223,2,10,223,2,11,223,2,12,223,2,13,223,2,14,223,2,15,193,3,4,193,3,5,193,3,6,193,3,7,193,3,8,193,3,9,223,3,10,193,3,11,193,3,12,193,3,13,193,3,14,208,3,15,193,4,9,193,5,9,193,6,9,193,7,9,193,8,9,193,9,9,193,10,4,193,10,5,193,10,6,193,10,7,193,10,8,193,10,9,223,10,10,193,10,11,193,10,12,193,10,13,193,10,14,208,10,15,193,11,4,193,11,5,223,11,6,223,11,7,223,11,8,223,11,9,223,11,10,223,11,11,223,11,12,223,11,13,223,11,14,223,11,15,193]},{"width":7,"chr":"i","bonus":120,"secondary":false,"pixels":[2,4,193,2,5,193,2,6,193,2,7,193,2,8,193,2,9,193,2,10,193,2,11,193,2,12,193,2,13,193,2,14,208,2,15,193,3,4,193,3,5,223,3,6,223,3,7,223,3,8,223,3,9,223,3,10,223,3,11,223,3,12,223,3,13,223,3,14,223,3,15,193]},{"width":7,"chr":"j","bonus":135,"secondary":false,"pixels":[2,18,178,3,4,193,3,5,223,3,6,223,3,7,223,3,8,223,3,9,223,3,10,223,3,11,223,3,12,223,3,13,223,3,14,223,3,15,223,3,16,223,3,17,223,4,4,193,4,5,193,4,6,193,4,7,193,4,8,193,4,9,193,4,10,193,4,11,193,4,12,193,4,13,193,4,14,193,4,15,193]},{"width":13,"chr":"k","bonus":235,"secondary":false,"pixels":[1,4,193,1,5,193,1,6,193,1,7,193,1,8,193,1,9,193,1,10,193,1,11,193,1,12,193,1,13,193,1,14,208,1,15,193,2,4,193,2,5,223,2,6,223,2,7,223,2,8,223,2,9,223,2,10,223,2,11,223,2,12,223,2,13,223,2,14,223,2,15,193,3,9,223,4,8,193,4,9,193,4,10,223,5,7,193,5,10,178,5,11,223,5,12,164,6,6,193,6,11,164,6,12,223,6,13,178,7,4,193,7,5,208,7,12,164,7,13,223,7,14,193,8,4,208,8,13,164,8,14,223,9,14,164,9,15,193,10,15,193]},{"width":9,"chr":"l","bonus":145,"secondary":false,"pixels":[1,4,193,1,5,193,1,6,193,1,7,193,1,8,193,1,9,193,1,10,193,1,11,193,1,12,193,1,13,193,1,14,208,1,15,193,2,4,193,2,5,223,2,6,223,2,7,223,2,8,223,2,9,223,2,10,223,2,11,223,2,12,223,2,13,223,2,14,223,2,15,193,3,15,193,4,15,193,5,15,193,6,15,193,7,14,164]},{"width":18,"chr":"m","bonus":245,"secondary":false,"pixels":[1,15,164,2,11,193,2,12,223,2,13,223,2,14,223,2,15,208,3,5,193,3,6,223,3,7,223,3,8,208,3,9,164,4,6,208,4,7,223,4,8,223,5,8,223,5,9,223,5,10,223,6,10,223,6,11,223,6,12,223,7,12,223,7,13,223,7,14,208,8,13,223,8,14,178,9,11,193,9,12,193,10,9,193,10,10,193,11,7,178,11,8,193,12,5,178,12,6,223,12,7,223,12,8,208,12,9,178,13,6,164,13,7,193,13,8,223,13,9,223,13,10,223,13,11,223,13,12,223,13,13,223,13,14,223,13,15,178,14,13,193,14,14,223,14,15,193]},{"width":15,"chr":"n","bonus":225,"secondary":false,"pixels":[1,15,164,2,5,223,2,6,223,2,7,193,2,8,178,2,9,193,2,10,193,2,11,193,2,12,193,2,13,208,2,14,223,2,15,193,3,6,223,3,7,193,4,7,223,4,8,208,5,8,223,5,9,208,6,9,223,6,10,208,7,9,164,7,10,223,7,11,208,8,10,164,8,11,223,8,12,193,9,11,164,9,12,223,9,13,193,10,4,164,10,12,164,10,13,223,10,14,193,11,4,193,11,5,223,11,6,223,11,7,223,11,8,223,11,9,223,11,10,223,11,11,223,11,12,193,11,13,193,11,14,193,11,15,164]},{"width":15,"chr":"o","bonus":235,"secondary":false,"pixels":[0,8,164,0,9,193,0,10,193,0,11,164,1,7,223,1,8,223,1,9,223,1,10,223,1,11,223,1,12,223,1,13,164,2,6,223,2,7,164,2,12,223,2,13,223,2,14,164,3,5,193,3,13,164,3,14,223,4,14,178,5,4,178,5,15,193,6,4,193,6,15,208,7,4,208,7,15,178,8,4,178,8,15,164,9,5,208,10,5,223,10,6,223,10,13,164,10,14,193,11,6,223,11,7,223,11,8,223,11,9,208,11,10,193,11,11,223,11,12,223,11,13,223,12,7,208,12,8,223,12,9,223,12,10,223,12,11,223,12,12,178]},{"width":10,"chr":"p","bonus":180,"secondary":false,"pixels":[1,4,193,1,5,193,1,6,193,1,7,193,1,8,193,1,9,193,1,10,193,1,11,193,1,12,193,1,13,193,1,14,223,1,15,193,2,4,193,2,5,223,2,6,223,2,7,223,2,8,223,2,9,223,2,10,223,2,11,223,2,12,223,2,13,223,2,14,223,2,15,193,3,4,193,4,4,193,5,4,193,6,4,164,6,5,193,6,9,193,7,5,223,7,6,223,7,7,223,7,8,223,8,6,193,8,7,193]},{"width":14,"chr":"q","bonus":260,"secondary":false,"pixels":[0,8,174,0,9,214,0,10,212,0,11,172,1,6,179,1,7,223,1,8,223,1,9,223,1,10,223,1,11,223,1,12,223,1,13,185,2,5,180,2,6,201,2,12,190,2,13,223,2,14,185,3,5,165,3,14,223,4,4,163,4,15,171,5,4,164,5,15,209,6,4,171,6,13,190,6,15,183,7,4,195,7,13,206,7,15,165,8,4,171,8,14,213,8,15,167,9,5,219,9,14,175,9,15,218,10,5,197,10,6,223,10,7,174,10,13,199,10,14,169,11,6,205,11,7,223,11,8,223,11,9,223,11,10,223,11,11,223,11,12,223,11,13,166,12,8,192,12,9,219,12,10,213,12,11,170]},{"width":13,"chr":"r","bonus":235,"secondary":false,"pixels":[1,4,193,1,5,193,1,6,193,1,7,193,1,8,193,1,9,193,1,10,193,1,11,193,1,12,193,1,13,193,1,14,223,1,15,193,2,4,193,2,5,223,2,6,223,2,7,223,2,8,223,2,9,223,2,10,223,2,11,223,2,12,223,2,13,223,2,14,223,2,15,193,3,4,193,3,10,208,4,4,208,4,10,208,5,4,178,5,10,223,5,11,208,6,5,223,6,6,223,6,7,193,6,8,223,6,9,178,6,11,193,6,12,223,6,13,164,7,6,223,7,7,208,7,12,164,7,13,223,7,14,193,8,14,223,8,15,164,9,15,208]},{"width":8,"chr":"s","bonus":140,"secondary":false,"pixels":[1,6,193,1,7,193,1,15,164,2,5,208,2,6,178,2,7,223,2,8,223,2,9,164,2,15,193,3,4,164,3,8,208,3,9,223,3,15,193,4,4,193,4,9,223,4,10,223,4,11,164,4,15,164,5,4,193,5,10,223,5,11,223,5,12,208,5,13,178,5,14,223,6,5,193,6,11,164,6,12,193,6,13,178]},{"width":13,"chr":"t","bonus":160,"secondary":false,"pixels":[1,4,208,2,4,193,3,4,193,4,4,193,5,4,193,5,5,193,5,6,193,5,7,193,5,8,193,5,9,193,5,10,193,5,11,193,5,12,193,5,13,193,5,14,208,5,15,193,6,4,193,6,5,223,6,6,223,6,7,223,6,8,223,6,9,223,6,10,223,6,11,223,6,12,223,6,13,223,6,14,223,6,15,193,7,4,193,8,4,193,9,4,193,10,4,208]},{"width":14,"chr":"u","bonus":180,"secondary":false,"pixels":[2,4,193,2,5,223,2,6,223,2,7,223,2,8,223,2,9,223,2,10,223,2,11,223,2,12,223,3,4,193,3,5,193,3,6,193,3,7,193,3,8,193,3,9,193,3,10,193,3,11,193,3,12,223,3,13,223,3,14,208,4,14,223,5,15,193,6,15,193,7,15,193,9,14,193,10,4,193,10,5,193,10,6,193,10,7,193,10,8,193,10,9,193,10,10,193,10,11,193,10,12,223,10,13,208,11,4,178]},{"width":15,"chr":"v","bonus":160,"secondary":false,"pixels":[2,4,208,3,4,193,3,5,223,3,6,223,3,7,164,4,4,164,4,5,178,4,6,223,4,7,223,4,8,223,4,9,178,5,8,208,5,9,223,5,10,223,5,11,208,6,10,164,6,11,223,6,12,223,6,13,223,7,12,164,7,13,223,7,14,223,8,11,164,8,12,208,9,9,193,9,10,193,10,7,223,10,8,178,11,4,193,11,5,223,11,6,164,12,4,178]},{"width":19,"chr":"w","bonus":255,"secondary":false,"pixels":[1,4,193,2,4,193,2,5,223,2,6,223,2,7,178,3,4,164,3,5,178,3,6,223,3,7,223,3,8,223,3,9,223,3,10,164,4,8,164,4,9,223,4,10,223,4,11,223,4,12,223,5,12,208,5,13,223,5,14,223,6,12,208,6,13,164,7,9,178,7,10,193,8,7,208,8,8,164,9,5,223,9,6,223,9,7,208,10,6,164,10,7,223,10,8,223,10,9,223,11,9,208,11,10,223,11,11,223,11,12,178,12,11,193,12,12,223,12,13,223,12,14,193,13,12,208,13,13,208,14,9,164,14,10,208,14,11,164,15,6,178,15,7,223,15,8,164,16,4,193,16,5,178]},{"width":13,"chr":"x","bonus":190,"secondary":false,"pixels":[1,15,164,2,4,193,2,14,193,2,15,193,3,4,193,3,5,223,3,6,208,3,13,223,4,5,164,4,6,223,4,7,223,4,8,164,4,11,164,4,12,193,5,7,193,5,8,223,5,9,223,5,10,208,6,8,193,6,9,223,6,10,223,6,11,193,7,7,178,7,8,164,7,10,178,7,11,223,7,12,223,7,13,164,8,6,208,8,12,208,8,13,223,8,14,223,8,15,164,9,4,193,9,5,178,9,14,223,9,15,193,10,15,193]},{"width":13,"chr":"y","bonus":145,"secondary":false,"pixels":[1,4,193,2,4,193,2,5,223,2,6,178,3,5,164,3,6,223,3,7,223,4,7,193,4,8,223,4,9,193,5,9,208,5,10,223,5,11,223,5,12,223,5,13,223,5,14,223,5,15,193,6,10,223,6,11,193,6,12,193,6,13,193,6,14,208,6,15,193,7,8,193,8,6,193,8,7,178,9,4,193,9,5,208,10,4,193]},{"width":11,"chr":"z","bonus":185,"secondary":false,"pixels":[0,15,164,1,4,193,1,14,223,1,15,193,2,4,193,2,12,193,2,13,223,2,14,223,2,15,193,3,4,193,3,11,223,3,12,223,3,13,164,3,15,193,4,4,193,4,9,193,4,10,223,4,11,208,4,15,193,5,4,193,5,8,223,5,9,223,5,10,164,5,15,193,6,4,193,6,6,193,6,7,223,6,8,208,6,15,193,7,4,193,7,5,223,7,6,223,7,7,164,7,15,193,8,4,193,8,5,208,8,15,193]},{"width":6,"chr":"{","bonus":50,"secondary":false,"pixels":[1,9,193,2,4,223,2,5,193,2,6,193,2,7,208,2,11,208,2,12,193,2,13,193,2,14,223,2,15,223]},{"width":3,"chr":"|","bonus":80,"secondary":false,"pixels":[0,4,193,0,5,193,0,6,193,0,7,193,0,8,193,0,9,193,0,10,193,0,11,193,0,12,193,0,13,193,0,14,193,0,15,193,0,16,193,0,17,193,0,18,193,0,19,193]},{"width":6,"chr":"}","bonus":65,"secondary":false,"pixels":[2,4,178,2,14,164,2,15,208,3,5,178,3,6,193,3,7,193,3,8,178,3,9,178,3,10,193,3,11,193,3,12,193,3,13,193,3,14,164]},{"width":9,"chr":"~","bonus":30,"secondary":false,"pixels":[1,12,208,2,11,208,3,11,208,5,12,178,6,12,208,7,11,208]}],"width":19,"spacewidth":4,"shadow":false,"height":20,"basey":15};

/***/ }),

/***/ "../ocr/fonts/aa_8px_mono_pof2.fontmeta.json":
/***/ (function(module) {

module.exports = {"chars":[{"width":8,"chr":"A","bonus":85,"secondary":false,"pixels":[0,7,158,1,5,196,1,6,203,2,2,169,2,3,207,2,4,179,2,5,207,3,0,207,3,1,207,3,5,207,4,1,207,4,2,203,4,5,207,5,4,207,5,5,207,6,6,179,6,7,207]},{"width":7,"chr":"B","bonus":125,"secondary":false,"pixels":[0,0,204,0,1,221,0,2,221,0,3,221,0,4,221,0,5,221,0,6,221,0,7,204,1,0,255,1,3,255,1,7,255,2,0,255,2,3,255,2,7,255,3,0,255,3,3,255,3,7,255,4,0,221,4,3,255,4,4,170,4,7,204,5,1,170,5,2,170,5,5,187,5,6,153]},{"width":9,"chr":"C","bonus":80,"secondary":false,"pixels":[0,3,198,0,4,198,1,1,216,1,2,174,1,5,174,1,6,207,2,0,187,2,7,187,3,0,229,3,7,229,4,0,229,4,7,229,5,0,229,5,7,229,6,0,187,6,7,187]},{"width":8,"chr":"D","bonus":100,"secondary":false,"pixels":[0,0,204,0,1,221,0,2,221,0,3,221,0,4,221,0,5,221,0,6,221,0,7,204,1,0,255,1,7,255,2,0,255,2,7,255,3,0,255,3,7,255,4,0,204,4,7,204,5,1,221,5,6,221,6,3,187,6,4,187]},{"width":6,"chr":"E","bonus":95,"secondary":false,"pixels":[0,0,204,0,1,221,0,2,221,0,3,221,0,4,221,0,5,221,0,6,221,0,7,204,1,0,255,1,4,255,1,7,255,2,0,255,2,4,255,2,7,255,3,0,255,3,4,255,3,7,255,4,0,153,4,7,221]},{"width":6,"chr":"F","bonus":70,"secondary":false,"pixels":[0,0,204,0,1,221,0,2,221,0,3,221,0,4,221,0,5,221,0,6,221,0,7,204,1,0,255,1,4,255,2,0,255,2,4,255,3,0,255,3,4,255]},{"width":9,"chr":"G","bonus":105,"secondary":false,"pixels":[0,3,170,0,4,187,1,1,204,1,2,153,1,6,221,2,0,170,2,7,187,3,0,255,3,7,255,4,0,255,4,7,255,5,0,255,5,7,238,6,0,170,6,4,255,6,6,153,6,7,170,7,4,153,7,5,221,7,6,221,7,7,204]},{"width":8,"chr":"H","bonus":105,"secondary":false,"pixels":[0,0,198,0,1,207,0,2,207,0,3,207,0,4,207,0,5,207,0,6,207,0,7,198,1,4,219,2,4,219,3,4,219,4,4,219,5,4,219,6,0,198,6,1,207,6,2,207,6,3,207,6,4,207,6,5,207,6,6,207,6,7,198]},{"width":4,"chr":"I","bonus":60,"secondary":false,"pixels":[0,0,170,0,7,170,1,0,255,1,1,255,1,2,255,1,3,255,1,4,255,1,5,255,1,6,255,1,7,255,2,0,170,2,7,170]},{"width":6,"chr":"J","bonus":70,"secondary":false,"pixels":[0,5,153,0,6,153,1,7,204,2,0,221,2,7,255,3,0,255,3,7,204,4,0,204,4,1,221,4,2,221,4,3,221,4,4,221,4,5,221,4,6,153]},{"width":7,"chr":"K","bonus":90,"secondary":false,"pixels":[0,0,202,0,1,211,0,2,211,0,3,211,0,4,211,0,5,211,0,6,211,0,7,202,1,3,223,2,3,223,3,2,211,3,4,182,3,5,202,4,0,202,4,1,170,4,6,218,4,7,170,5,7,156]},{"width":6,"chr":"L","bonus":60,"secondary":false,"pixels":[0,0,204,0,1,221,0,2,221,0,3,221,0,4,221,0,5,221,0,6,221,0,7,204,1,7,255,2,7,255,3,7,255,4,7,255]},{"width":9,"chr":"M","bonus":70,"secondary":false,"pixels":[0,1,255,0,2,255,0,3,255,0,4,255,0,5,255,0,6,255,0,7,255,7,1,255,7,2,255,7,3,255,7,4,255,7,5,255,7,6,255,7,7,255]},{"width":8,"chr":"N","bonus":110,"secondary":false,"pixels":[0,0,187,0,1,203,0,2,203,0,3,203,0,4,203,0,5,203,0,6,203,0,7,187,1,1,234,2,2,203,3,3,172,3,4,172,4,5,203,5,6,234,6,0,187,6,1,203,6,2,203,6,3,203,6,4,203,6,5,203,6,6,203,6,7,187]},{"width":10,"chr":"O","bonus":110,"secondary":false,"pixels":[0,3,187,0,4,170,1,1,204,1,2,153,1,5,170,1,6,204,2,0,153,2,7,153,3,0,255,3,7,255,4,0,255,4,7,255,5,0,255,5,7,255,6,0,153,6,7,153,7,1,204,7,2,153,7,5,170,7,6,204,8,3,187,8,4,170]},{"width":7,"chr":"P","bonus":85,"secondary":false,"pixels":[0,0,204,0,1,221,0,2,221,0,3,221,0,4,221,0,5,221,0,6,221,0,7,204,1,0,255,1,4,255,2,0,255,2,4,255,3,0,255,3,4,255,4,0,187,4,4,187,5,2,221]},{"width":9,"chr":"Q","bonus":100,"secondary":false,"pixels":[0,3,187,0,4,187,1,1,221,1,5,153,1,6,221,2,0,187,2,7,170,3,0,255,3,7,255,4,0,255,4,7,255,5,0,238,5,7,238,6,1,204,6,6,255,7,2,255,7,3,204,7,4,221,7,5,255,7,7,204]},{"width":7,"chr":"R","bonus":100,"secondary":false,"pixels":[0,0,204,0,1,221,0,2,221,0,3,221,0,4,221,0,5,221,0,6,221,0,7,204,1,0,255,1,4,255,2,0,255,2,4,255,3,0,255,3,4,255,3,5,187,4,1,238,4,2,204,4,3,255,4,6,238,4,7,170]},{"width":6,"chr":"S","bonus":75,"secondary":false,"pixels":[0,1,176,0,2,188,1,0,209,1,3,218,1,7,226,2,0,231,2,3,188,2,7,231,3,0,231,3,4,231,3,7,231,4,0,188,4,4,161,4,5,218,4,6,226]},{"width":8,"chr":"T","bonus":65,"secondary":false,"pixels":[0,0,255,1,0,255,2,0,255,3,0,255,3,1,221,3,2,221,3,3,221,3,4,221,3,5,221,3,6,221,3,7,204,4,0,255,5,0,255]},{"width":8,"chr":"U","bonus":85,"secondary":false,"pixels":[0,0,204,0,1,221,0,2,221,0,3,221,0,4,221,0,5,187,1,6,170,2,7,255,3,7,255,4,7,221,5,0,204,5,1,221,5,2,221,5,3,221,5,4,221,5,5,255,5,6,238]},{"width":7,"chr":"V","bonus":70,"secondary":false,"pixels":[0,0,215,0,1,185,1,2,164,1,3,215,1,4,164,2,5,185,2,6,210,3,6,215,3,7,195,4,3,195,4,4,210,5,0,176,5,1,215,5,2,164]},{"width":10,"chr":"W","bonus":125,"secondary":false,"pixels":[0,0,255,0,1,221,1,3,187,1,4,255,1,5,204,2,6,255,2,7,255,3,2,153,3,3,238,3,4,221,4,0,255,4,1,255,4,2,153,5,2,170,5,3,238,5,4,204,6,6,255,6,7,255,7,3,153,7,4,238,7,5,238,7,6,153,8,0,238,8,1,238,8,2,153]},{"width":7,"chr":"X","bonus":75,"secondary":false,"pixels":[0,7,170,1,0,187,1,1,204,1,6,238,2,2,221,2,3,153,2,4,255,2,5,153,3,3,255,3,4,238,4,1,238,4,5,204,4,6,170,5,0,204,5,7,255]},{"width":7,"chr":"Y","bonus":55,"secondary":false,"pixels":[0,0,170,1,1,238,2,2,153,2,3,255,3,3,221,3,4,204,3,5,221,3,6,221,3,7,204,4,2,255,5,0,238]},{"width":7,"chr":"Z","bonus":75,"secondary":false,"pixels":[0,7,187,1,0,255,1,6,221,1,7,255,2,0,255,2,4,204,2,7,255,3,0,255,3,3,204,3,7,255,4,0,255,4,1,221,4,7,255,5,0,187,5,7,153]},{"width":7,"chr":"a","bonus":75,"secondary":false,"pixels":[0,6,187,1,2,221,1,5,170,1,7,255,2,2,255,2,4,187,2,7,255,3,2,255,3,4,255,3,7,221,4,3,238,4,4,255,4,5,204,4,6,255,4,7,238]},{"width":7,"chr":"b","bonus":105,"secondary":false,"pixels":[0,0,204,0,1,221,0,2,221,0,3,221,0,4,221,0,5,221,0,6,221,0,7,204,1,2,204,1,3,170,1,6,170,1,7,187,2,2,255,2,7,255,3,2,255,3,7,255,4,2,170,4,3,170,4,6,170,5,4,187,5,5,187]},{"width":7,"chr":"c","bonus":50,"secondary":false,"pixels":[0,4,170,0,5,187,1,3,187,1,6,187,2,2,255,2,7,255,3,2,255,3,7,255,4,2,221,4,7,221]},{"width":7,"chr":"d","bonus":105,"secondary":false,"pixels":[0,4,180,0,5,180,1,3,164,1,6,164,1,7,164,2,2,246,2,7,246,3,2,246,3,7,246,4,2,197,4,3,164,4,6,164,4,7,180,5,0,197,5,1,213,5,2,213,5,3,213,5,4,213,5,5,213,5,6,213,5,7,197]},{"width":7,"chr":"e","bonus":75,"secondary":false,"pixels":[0,4,187,0,5,170,1,3,187,1,4,255,1,6,204,2,2,255,2,4,255,2,7,255,3,2,255,3,4,255,3,7,255,4,2,187,4,4,255,4,7,221,5,4,204]},{"width":4,"chr":"f","bonus":50,"secondary":false,"pixels":[0,2,204,1,1,221,1,2,255,1,3,221,1,4,221,1,5,221,1,6,221,1,7,204,2,0,255,2,2,255]},{"width":7,"chr":"g","bonus":115,"secondary":false,"pixels":[0,4,187,0,5,187,1,2,170,1,3,153,1,6,170,1,10,153,2,2,255,2,7,255,2,10,238,3,2,255,3,7,255,3,10,221,4,2,221,4,6,153,4,7,221,4,9,204,5,2,204,5,3,221,5,4,221,5,5,221,5,6,221,5,7,221,5,8,170]},{"width":7,"chr":"h","bonus":90,"secondary":false,"pixels":[0,0,185,0,1,193,0,2,193,0,3,193,0,4,193,0,5,193,0,6,193,0,7,185,1,2,167,1,3,185,2,2,205,3,2,205,4,2,167,4,3,193,4,4,193,4,5,193,4,6,193,4,7,185]},{"width":3,"chr":"i","bonus":35,"secondary":false,"pixels":[0,0,238,0,2,204,0,3,221,0,4,221,0,5,221,0,6,221,0,7,204]},{"width":3,"chr":"j","bonus":45,"secondary":false,"pixels":[0,10,170,1,0,204,1,2,204,1,3,221,1,4,221,1,5,221,1,6,221,1,7,221,1,8,221]},{"width":6,"chr":"k","bonus":70,"secondary":false,"pixels":[0,0,183,0,1,191,0,2,191,0,3,191,0,4,191,0,5,191,0,6,191,0,7,183,1,4,202,2,3,153,2,4,202,2,5,191,3,2,183,3,6,191]},{"width":3,"chr":"l","bonus":40,"secondary":false,"pixels":[0,0,204,0,1,221,0,2,221,0,3,221,0,4,221,0,5,221,0,6,221,1,7,255]},{"width":10,"chr":"m","bonus":120,"secondary":false,"pixels":[0,2,202,0,3,211,0,4,211,0,5,211,0,6,211,0,7,202,1,2,156,1,3,211,2,2,218,3,2,223,4,2,170,4,3,223,4,4,211,4,5,211,4,6,211,4,7,202,5,3,192,6,2,223,7,2,218,8,3,182,8,4,211,8,5,211,8,6,211,8,7,202]},{"width":7,"chr":"n","bonus":80,"secondary":false,"pixels":[0,2,209,0,3,218,0,4,218,0,5,218,0,6,218,0,7,209,1,2,161,1,3,218,2,2,226,3,2,231,4,2,226,5,3,188,5,4,218,5,5,218,5,6,218,5,7,209]},{"width":8,"chr":"o","bonus":70,"secondary":false,"pixels":[0,4,192,0,5,182,1,3,202,1,6,211,2,2,218,2,7,218,3,2,223,3,7,223,4,2,218,4,7,223,5,3,202,5,6,211,6,4,182,6,5,182]},{"width":6,"chr":"p","bonus":90,"secondary":false,"pixels":[0,2,225,0,3,241,0,4,177,0,5,193,0,6,241,0,7,209,0,8,209,0,9,209,1,2,241,1,7,225,2,2,241,2,7,241,3,2,225,3,7,225,4,3,225,4,4,241,4,5,241,4,6,225]},{"width":7,"chr":"q","bonus":90,"secondary":false,"pixels":[0,4,192,0,5,192,1,2,182,1,3,170,1,6,170,1,7,182,2,2,223,2,7,223,3,2,218,3,7,218,4,2,223,4,3,223,4,4,192,4,5,192,4,6,223,4,7,218,4,8,211,4,9,211]},{"width":4,"chr":"r","bonus":45,"secondary":false,"pixels":[0,2,173,0,3,181,0,4,181,0,5,181,0,6,181,0,7,173,1,2,165,1,3,173,2,2,255]},{"width":6,"chr":"s","bonus":50,"secondary":false,"pixels":[0,3,198,1,2,229,1,4,224,1,7,229,2,2,229,2,7,229,3,2,229,3,5,224,3,7,229,4,6,198]},{"width":5,"chr":"t","bonus":35,"secondary":false,"pixels":[1,1,197,1,2,227,1,3,197,1,4,197,1,5,197,2,2,227,2,7,212]},{"width":6,"chr":"u","bonus":70,"secondary":false,"pixels":[0,2,204,0,3,221,0,4,221,0,5,221,0,6,170,1,7,238,2,7,255,3,7,204,4,2,204,4,3,221,4,4,221,4,5,204,4,6,255,4,7,221]},{"width":6,"chr":"v","bonus":50,"secondary":false,"pixels":[0,2,207,1,4,207,1,5,192,2,6,212,2,7,212,3,4,161,3,5,212,3,6,161,4,2,207,4,3,192]},{"width":10,"chr":"w","bonus":95,"secondary":false,"pixels":[1,2,153,1,3,238,1,4,187,2,5,153,2,6,238,2,7,187,3,5,204,3,6,238,3,7,153,4,2,170,4,3,255,5,3,221,5,4,221,6,6,255,6,7,221,7,5,238,7,6,204,8,2,238,8,3,204]},{"width":6,"chr":"x","bonus":55,"secondary":false,"pixels":[0,7,170,1,2,170,1,3,204,1,6,221,2,4,255,2,5,238,3,3,255,3,5,187,3,6,187,4,2,221,4,7,255]},{"width":6,"chr":"y","bonus":65,"secondary":false,"pixels":[0,2,255,0,3,153,0,10,221,1,4,204,1,5,221,1,10,187,2,6,187,2,7,255,2,8,238,3,5,238,3,6,187,4,2,204,4,3,221]},{"width":6,"chr":"z","bonus":70,"secondary":false,"pixels":[0,2,153,0,7,204,1,2,255,1,6,221,1,7,255,2,2,255,2,5,255,2,7,255,3,2,255,3,3,170,3,4,170,3,7,255,4,2,255,4,7,255]},{"width":3,"chr":":","bonus":10,"secondary":true,"pixels":[1,2,255,1,6,255]},{"width":4,"chr":"(","bonus":50,"secondary":false,"pixels":[0,2,184,0,3,218,0,4,222,0,5,214,0,6,183,1,0,197,1,1,202,1,7,202,1,8,195,2,9,208]},{"width":4,"chr":")","bonus":50,"secondary":false,"pixels":[1,9,208,2,0,197,2,1,202,2,7,202,2,8,195,3,2,185,3,3,218,3,4,222,3,5,214,3,6,183]},{"width":7,"chr":"0","bonus":90,"secondary":false,"pixels":[0,1,170,0,2,212,0,3,224,0,4,224,0,5,219,0,6,183,1,0,193,1,7,203,2,0,193,2,7,193,3,0,212,3,7,203,4,1,183,4,2,224,4,3,193,4,4,193,4,5,219,4,6,183]},{"width":7,"chr":"1","bonus":55,"secondary":false,"pixels":[1,7,193,2,0,203,2,1,203,2,2,193,2,3,193,2,4,193,2,5,193,2,6,193,2,7,219,3,7,203,4,7,156]},{"width":7,"chr":"2","bonus":60,"secondary":false,"pixels":[1,6,156,1,7,224,2,0,193,2,5,170,2,7,193,3,0,203,3,4,170,3,7,193,4,0,193,4,1,170,4,3,203,4,7,193]},{"width":7,"chr":"3","bonus":50,"secondary":false,"pixels":[0,7,203,1,0,193,1,7,193,2,0,193,2,3,193,2,7,203,3,1,212,3,2,203,3,4,203,3,6,183]},{"width":7,"chr":"4","bonus":85,"secondary":false,"pixels":[0,5,219,1,3,193,1,5,193,2,2,183,2,5,193,3,0,193,3,1,170,3,5,203,4,0,193,4,1,193,4,2,193,4,3,193,4,4,193,4,5,219,4,6,193,4,7,193,5,5,156]},{"width":7,"chr":"5","bonus":75,"secondary":false,"pixels":[1,0,219,1,1,193,1,2,193,1,3,193,1,7,203,2,0,193,2,3,193,2,7,193,3,0,193,3,3,203,3,7,203,4,0,156,4,4,219,4,5,193,4,6,212]},{"width":7,"chr":"6","bonus":80,"secondary":false,"pixels":[0,2,183,0,3,224,0,4,224,0,5,219,0,6,170,1,1,193,1,7,193,2,0,203,2,3,193,2,7,193,3,0,193,3,3,203,3,7,193,4,4,212,4,5,224,4,6,193]},{"width":7,"chr":"7","bonus":55,"secondary":false,"pixels":[0,0,193,1,0,193,1,7,203,2,0,193,2,5,219,2,6,170,3,0,193,3,2,170,3,3,212,4,0,224,4,1,193]},{"width":7,"chr":"8","bonus":100,"secondary":false,"pixels":[1,1,219,1,2,212,1,4,156,1,5,203,1,6,212,2,0,203,2,3,203,2,4,183,2,7,212,3,0,193,3,3,183,3,7,193,4,0,212,4,3,183,4,4,203,4,7,193,5,1,183,5,2,170,5,5,219,5,6,219]},{"width":7,"chr":"9","bonus":90,"secondary":false,"pixels":[1,1,212,1,2,193,1,3,219,1,7,170,2,0,203,2,4,212,2,7,193,3,0,193,3,4,193,3,7,203,4,0,193,4,4,156,4,6,183,5,1,170,5,2,219,5,3,224,5,4,224,5,5,193]},{"width":8,"chr":"%","bonus":75,"secondary":false,"pixels":[0,2,234,0,7,234,1,1,234,1,3,234,1,6,234,2,2,234,2,5,234,3,4,234,4,3,234,4,6,234,5,2,234,5,5,234,5,7,234,6,1,234,6,6,234]},{"width":3,"chr":",","bonus":15,"secondary":true,"pixels":[0,8,202,1,6,202,1,7,246]},{"width":2,"chr":".","bonus":5,"secondary":true,"pixels":[0,7,255]},{"width":2,"chr":"'","bonus":10,"secondary":true,"pixels":[0,0,255,0,1,213]},{"width":5,"chr":"?","bonus":50,"secondary":false,"pixels":[0,0,182,1,0,223,1,5,211,1,7,223,2,0,223,2,3,156,2,4,182,3,1,223,3,2,211,3,3,156]}],"width":10,"spacewidth":3,"shadow":false,"height":11,"basey":7};

/***/ }),

/***/ "./imgs/animalhappy.data.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports=__webpack_require__("@alt1/base").ImageDetect.imageDataFromBase64("iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAIAAABLMMCEAAAAAXNSR0IDN8dNUwAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjEuMWMqnEsAAABjSURBVBhXXY0rEoAwDETXILlBT9JevBKBRCPwCDQzpfymvLSOmUyy+7JplSddi+5Vz2YdDdE5K/i+lPLuiA4BsSW0eqNoiGU5JNgKbdng3e9diPJogz2+/uEgSlHHYKYVKEV9Aw5LIywzbzgAAAAASUVORK5CYII=")

/***/ }),

/***/ "./index.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var a1lib = __webpack_require__("@alt1/base");
var OCR = __webpack_require__("@alt1/ocr");
var util_1 = __webpack_require__("../../util/index.ts");
var stdfont = __webpack_require__("../ocr/fonts/aa_8px_mono_pof2.fontmeta.json");
var namefont = __webpack_require__("../ocr/fonts/aa_12px_mono.fontmeta.json");
var imgs = a1lib.ImageDetect.webpackImages({
    happynessicon: __webpack_require__("./imgs/animalhappy.data.png"),
});
var animalReaderInstance; //can't find a way to do this without var
exports.growtStages = {
    Egg: 0,
    Baby: 1,
    Adolescent: 2,
    Adult: 3,
    Elder: 4
};
var AnimalReader = /** @class */ (function () {
    function AnimalReader() {
        this.pos = null;
    }
    AnimalReader.compareAnimals = function (a1, a2) {
        var fails = 0;
        if (a1.name != a2.name) {
            fails++;
        }
        if (a1.trait0 != a2.trait0) {
            fails++;
        }
        if (a1.trait1 != a2.trait1) {
            fails++;
        }
        if (a1.trait2 != a2.trait2) {
            fails++;
        }
        if (a1.flavourtext != a2.flavourtext) {
            fails++;
        }
        if (a1.ismale != a2.ismale) {
            fails++;
        }
        return fails <= 1;
    };
    AnimalReader.prototype.find = function (img) {
        if (!img) {
            img = a1lib.captureHoldFullRs();
        }
        var pos = img.findSubimage(imgs.happynessicon);
        if (pos.length == 0) {
            return null;
        }
        this.pos = { x: pos[0].x - 44, y: pos[0].y - 154, width: 496, height: 232 };
        return this.pos;
    };
    AnimalReader.prototype.readMultiline = function (data, col, x, y) {
        var t = OCR.findReadLine(data, stdfont, [col], x, y);
        if (t.text == "") {
            var t0 = OCR.findReadLine(data, stdfont, [col], x, y - 6);
            var t1 = OCR.findReadLine(data, stdfont, [col], x, y + 6);
            return t0.text + " " + t1.text;
        }
        return t.text;
    };
    AnimalReader.prototype.read = function (img) {
        var _this = this;
        if (!this.pos) {
            return null;
        }
        var data = (img ? img.toData(this.pos.x, this.pos.y, this.pos.width, this.pos.height) : a1lib.capture(this.pos));
        if (!data) {
            return null;
        }
        //confirm interface
        if (data.pixelCompare(imgs.happynessicon, 44, 154) > 10) {
            return null;
        }
        var name = util_1.startCaps(OCR.findReadLine(data, namefont, [[255, 203, 5]], 250, 20).text.toLowerCase());
        var stage = OCR.findReadLine(data, stdfont, [[255, 255, 255]], 104, 40).text;
        var happy = parseInt(OCR.findReadLine(data, stdfont, [[255, 255, 255]], 109, 140).text) / 100;
        var health = parseInt(OCR.findReadLine(data, stdfont, [[255, 255, 255]], 104, 157).text) / 100;
        var readTrait = function (x) {
            var t = _this.readMultiline(data, [117, 146, 160], x, 173);
            if (t.match(/no trait/i)) {
                return "";
            }
            return t;
        };
        var trait0 = readTrait(256);
        var trait1 = readTrait(351);
        var trait2 = trait1 && readTrait(447);
        var breedstr = OCR.readLine(data, stdfont, [255, 255, 255], 219, 49, true, false).text;
        var breedm = breedstr.match(/Breed: ([\w ]+?) \((male|female)\)/);
        var ismale = breedm[2] == "male";
        var breed = breedm[1];
        var paddockType = OCR.readLine(data, stdfont, [255, 255, 255], 219, 65, true, false).text;
        var weight = OCR.readLine(data, stdfont, [255, 255, 255], 219, 81, true, false).text;
        var speed = OCR.readLine(data, stdfont, [255, 255, 255], 219, 98, true, false).text;
        var attractiveness = OCR.readLine(data, stdfont, [255, 255, 255], 219, 115, true, false).text;
        var flavourtext = this.readMultiline(data, [255, 255, 255], 243, 215);
        return { stage: stage, happy: happy, health: health, trait0: trait0, trait1: trait1, trait2: trait2, breed: breed, paddockType: paddockType, weight: weight, speed: speed, attractiveness: attractiveness, name: name, flavourtext: flavourtext, ismale: ismale };
    };
    return AnimalReader;
}());
exports.default = AnimalReader;


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./index.ts");


/***/ }),

/***/ "@alt1/base":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__alt1_base__;

/***/ }),

/***/ "@alt1/ocr":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__alt1_ocr__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map