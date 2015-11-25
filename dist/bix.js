(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["bix"] = factory(require("react"));
	else
		root["bix"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_20__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*******************************************************************************
	 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
	 * material contains unpublished, copyrighted work including confidential and
	 * proprietary information of Rapid7.
	 ******************************************************************************/
	
	"use strict";
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _combine = __webpack_require__(2);
	
	var _combine2 = _interopRequireDefault(_combine);
	
	var _extend = __webpack_require__(18);
	
	var _extend2 = _interopRequireDefault(_extend);
	
	var _isReactComponent = __webpack_require__(19);
	
	var _isReactComponent2 = _interopRequireDefault(_isReactComponent);
	
	var _normalize2 = __webpack_require__(21);
	
	var _normalize3 = _interopRequireDefault(_normalize2);
	
	var _prefixer = __webpack_require__(3);
	
	var _prefixer2 = _interopRequireDefault(_prefixer);
	
	var _radium = __webpack_require__(22);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _sqwish = __webpack_require__(46);
	
	var _sqwish2 = _interopRequireDefault(_sqwish);
	
	var _unitlessValues = __webpack_require__(47);
	
	var _unitlessValues2 = _interopRequireDefault(_unitlessValues);
	
	var _utils = __webpack_require__(17);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	// functions to set properties in different ways
	var noPxAdded = /(px|vh|vw|em|[%]|ex|cm|mm|in|pt|pc|ch|rem|vmin|vmax)/,
	    setProperty = {
	    hidden: function hidden(obj, prop, value) {
	        Object.defineProperty(obj, prop, {
	            configurable: false,
	            enumerable: false,
	            value: value,
	            writable: true
	        });
	    },
	
	    permanent: function permanent(obj, prop, value) {
	        Object.defineProperty(obj, prop, {
	            configurable: false,
	            enumerable: true,
	            value: value,
	            writable: true
	        });
	    },
	
	    readonly: function readonly(obj, prop, value) {
	        Object.defineProperty(obj, prop, {
	            configurable: false,
	            enumerable: false,
	            value: value,
	            writable: false
	        });
	    }
	};
	
	var bix = Object.create({
	    combine: _combine2["default"],
	
	    extend: _extend2["default"],
	
	    normalize: function normalize() {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        if (!args.length || args[0] !== false) {
	            this.stylesheet("normalize-css", _normalize3["default"]);
	
	            this.stylesheet("bix-defaults", {
	                "*, *:after, *:before": {
	                    boxSizing: "border-box",
	                    position: "relative"
	                }
	            });
	        }
	
	        return this;
	    },
	
	    prefix: function prefix() {
	        var prefix = _prefixer2["default"](),
	            prefixedStyles = {};
	
	        for (var _len2 = arguments.length, styles = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	            styles[_key2] = arguments[_key2];
	        }
	
	        _utils2["default"].forEach(styles, function (style) {
	            prefixedStyles = _utils2["default"].merge(prefixedStyles, prefix(style));
	        });
	
	        return prefixedStyles;
	    },
	
	    radium: _radium2["default"],
	
	    render: function render(component) {
	        if (_isReactComponent2["default"](component)) {
	            component.forceUpdate();
	        } else {
	            _utils2["default"].forIn(this.$$components, function (componentObj) {
	                if (componentObj.renderOnResize && _isReactComponent2["default"](componentObj.component)) {
	                    componentObj.component.forceUpdate();
	                }
	            });
	        }
	    },
	
	    renderOnResize: function renderOnResize(component) {
	        if (_isReactComponent2["default"](component)) {
	            var _name = component.displayName;
	
	            if (this.$$components[_name]) {
	                this.$$components[_name].renderOnResize = true;
	                this.$$components[_name].component = component;
	            } else {
	                this.$$components[_name] = {
	                    component: component,
	                    renderOnResize: true,
	                    styles: {}
	                };
	            }
	        }
	
	        return this;
	    },
	
	    setUserAgent: function setUserAgent(userAgent) {
	        _prefixer.setPrefixerByUserAgent(userAgent);
	
	        return this;
	    },
	
	    styles: function styles(component) {
	        var _this = this,
	            _arguments = arguments;
	
	        if (_utils2["default"].isUndefined(component)) {
	            console.error("Error: no component has been specified.");
	            return this;
	        }
	
	        if (_utils2["default"].isString(component)) {
	            return this.$$components[component] && this.$$components[component].styles;
	        }
	
	        if (_utils2["default"].isObject(component)) {
	            var _len3, _styles, _key3;
	
	            var _ret = (function () {
	                if (_utils2["default"].isUndefined(component._reactInternalInstance)) {
	                    console.error("Error: object passed is not a React constructor.");
	                    return {
	                        v: _this
	                    };
	                }
	
	                var name = component.displayName;
	
	                if (_utils2["default"].isUndefined(name)) {
	                    console.error("Error: you need to specify a displayName property on your React class if you want to assign styles to bix.");
	                    return {
	                        v: _this
	                    };
	                }
	
	                for (_len3 = _arguments.length, _styles = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	                    _styles[_key3 - 1] = _arguments[_key3];
	                }
	
	                if (!_styles.length) {
	                    return {
	                        v: _this.$$components[name] && _this.$$components[name].styles
	                    };
	                }
	
	                if (_utils2["default"].isUndefined(_this.$$components[name])) {
	                    _this.$$components[name] = {};
	                }
	
	                _this.$$components[name].component = component;
	
	                if (_utils2["default"].isUndefined(_this.$$components[name].styles)) {
	                    _this.$$components[name].styles = {};
	                }
	
	                _utils2["default"].forEach(_styles, function (style) {
	                    _this.$$components[name].styles = _combine2["default"](_this.$$components[name].styles, style);
	                });
	            })();
	
	            if (typeof _ret === "object") return _ret.v;
	        }
	
	        return this;
	    },
	
	    stylesheet: function stylesheet(id) {
	        var prefixedProperties = _prefixer.getPrefixedProperties(),
	            jsPrefix = _prefixer.getJsPrefix();
	
	        if (!_utils2["default"].isString(id) && _utils2["default"].isObject(id)) {
	            if (id.displayName) {
	                id = id.displayName;
	            } else {
	                console.error("Error: the object you passed needs to have a displayName property to create a stylesheet.");
	                return this;
	            }
	        } else {
	            if (_utils2["default"].isUndefined(id)) {
	                console.error("Error: generated stylesheets need to be given an id.");
	                return this;
	            } else if (!_utils2["default"].isString(id)) {
	                console.error("Error: first parameter needs to be either a string or a React class.");
	                return this;
	            }
	        }
	
	        var currentStyles = {},
	            styleTag = document.createElement("style"),
	            str = "";
	
	        if (_utils2["default"].isObject(id)) {
	            id = id.displayName;
	
	            if (_utils2["default"].isUndefined(id)) {
	                console.error("Error: first parameter needs to be either a string or a React class.");
	                return this;
	            }
	        }
	
	        if (!_utils2["default"].isUndefined(this.$$stylesheets[id])) {
	            styleTag = document.getElementById(id);
	            currentStyles = this.$$stylesheets[id];
	        }
	
	        styleTag.type = "text/css";
	        styleTag.id = id;
	
	        for (var _len4 = arguments.length, styles = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
	            styles[_key4 - 1] = arguments[_key4];
	        }
	
	        _utils2["default"].forEach(styles, function (block) {
	            if (_utils2["default"].isObject(block)) {
	                _utils2["default"].forIn(block, function (style, key) {
	                    var cleanStyle = {};
	
	                    str += key + "{";
	
	                    _utils2["default"].forIn(style, function (value, prop) {
	                        if (!noPxAdded.test(value) && _utils2["default"].isNumber(value) && _unitlessValues2["default"].indexOf(prop) === -1) {
	                            value = value + "px";
	                        }
	
	                        if (prefixedProperties.indexOf(prop) !== -1) {
	                            prop = jsPrefix + prop.charAt(0).toUpperCase() + prop.slice(1);
	                        }
	
	                        cleanStyle[prop] = value;
	                    });
	
	                    _utils2["default"].forIn(cleanStyle, function (value, prop) {
	                        str += _utils2["default"].kebabCase(prop) + ":" + value + ";";
	                    });
	
	                    str += "}";
	                });
	
	                currentStyles = _combine2["default"](currentStyles, block);
	            }
	        });
	
	        this.$$stylesheets[id] = currentStyles;
	        styleTag.textContent = _sqwish2["default"](str);
	
	        document.head.appendChild(styleTag);
	
	        return this;
	    }
	});
	
	function delayRenderOnResize() {
	    window.setTimeout(_utils2["default"].bind(bix.render, bix), 1);
	}
	
	window.addEventListener("resize", delayRenderOnResize);
	
	setProperty.readonly(bix, "$$components", {});
	setProperty.readonly(bix, "$$stylesheets", {});
	
	exports["default"] = bix;
	module.exports = exports["default"];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/*******************************************************************************
	 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
	 * material contains unpublished, copyrighted work including confidential and
	 * proprietary information of Rapid7.
	 ******************************************************************************/
	
	"use strict";
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _prefixer = __webpack_require__(3);
	
	var _prefixer2 = _interopRequireDefault(_prefixer);
	
	var _utils = __webpack_require__(17);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	exports["default"] = function () {
	    var finalStyle = {},
	        prefix = _prefixer2["default"]();
	
	    for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
	        styles[_key] = arguments[_key];
	    }
	
	    _utils2["default"].forEach(styles, function (style) {
	        finalStyle = _utils2["default"].merge(finalStyle, prefix(style));
	    });
	
	    return finalStyle;
	};
	
	module.exports = exports["default"];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/*******************************************************************************
	 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
	 * material contains unpublished, copyrighted work including confidential and
	 * proprietary information of Rapid7.
	 ******************************************************************************/
	
	"use strict";
	
	exports.__esModule = true;
	exports.getCssPrefix = getCssPrefix;
	exports.getJsPrefix = getJsPrefix;
	exports.getPrefixedProperties = getPrefixedProperties;
	exports.setPrefixerByUserAgent = setPrefixerByUserAgent;
	exports["default"] = getPrefixer;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _inlineStylePrefixer = __webpack_require__(4);
	
	var _inlineStylePrefixer2 = _interopRequireDefault(_inlineStylePrefixer);
	
	var _utils = __webpack_require__(17);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var prefixer = new _inlineStylePrefixer2["default"](),
	    properties = [];
	
	function populatePrefixedProperties() {
	    var prefixedProperties = [];
	
	    _utils2["default"].forIn(prefixer._requiresPrefix, function (requiresPrefix, property) {
	        if (requiresPrefix) {
	            prefixedProperties[prefixedProperties.length] = property;
	        }
	    });
	
	    return prefixedProperties;
	}
	
	properties = populatePrefixedProperties();
	
	function getCssPrefix() {
	    return prefixer.cssPrefix;
	}
	
	function getJsPrefix() {
	    return prefixer.jsPrefix;
	}
	
	function getPrefixedProperties() {
	    return properties;
	}
	
	function setPrefixerByUserAgent(userAgent) {
	    prefixer = new _inlineStylePrefixer2["default"](userAgent);
	    properties = populatePrefixedProperties();
	}
	
	function getPrefixer() {
	    return _utils2["default"].bind(prefixer.prefix, this);
	}
	
	;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _getBrowserInformation = __webpack_require__(6);
	
	var _getBrowserInformation2 = _interopRequireDefault(_getBrowserInformation);
	
	var _getPrefixedKeyframes = __webpack_require__(8);
	
	var _getPrefixedKeyframes2 = _interopRequireDefault(_getPrefixedKeyframes);
	
	var _caniuseData = __webpack_require__(9);
	
	var _caniuseData2 = _interopRequireDefault(_caniuseData);
	
	var _Plugins = __webpack_require__(10);
	
	var _Plugins2 = _interopRequireDefault(_Plugins);
	
	var defaultUserAgent = typeof navigator !== 'undefined' ? navigator.userAgent : undefined;
	
	// only throw warnings if devmode is enabled
	var warn = function warn() {
	  if (process.env.NODE_ENV !== 'production') {
	    console.warn.apply(console, arguments);
	  }
	};
	// helper to capitalize strings
	var caplitalizeString = function caplitalizeString(str) {
	  return str.charAt(0).toUpperCase() + str.slice(1);
	};
	
	// leight polyfill for Object.assign
	var assign = function assign(base, extend) {
	  if (extend) {
	    Object.keys(extend).forEach(function (key) {
	      return base[key] = extend[key];
	    });
	  }
	  return extend;
	};
	
	var Prefixer = (function () {
	  /**
	   * Instantiante a new prefixer. Pass an asterisk as userAgent to combine all prefixes
	   * @param {string} userAgent - userAgent to gather prefix information according to caniuse.com
	   */
	
	  function Prefixer() {
	    var _this = this;
	
	    var userAgent = arguments.length <= 0 || arguments[0] === undefined ? defaultUserAgent : arguments[0];
	
	    _classCallCheck(this, Prefixer);
	
	    this._userAgent = userAgent;
	    this._browserInfo = (0, _getBrowserInformation2['default'])(userAgent);
	
	    // Checks if the userAgent was resolved correctly
	    if (this._browserInfo && this._browserInfo.prefix) {
	      this.cssPrefix = this._browserInfo.prefix.CSS;
	      this.jsPrefix = this._browserInfo.prefix.inline;
	      this.prefixedKeyframes = (0, _getPrefixedKeyframes2['default'])(this._browserInfo);
	    } else {
	      this._hasPropsRequiringPrefix = false;
	      warn('Either the global navigator was undefined or an invalid userAgent was provided.', 'Using a valid userAgent? Please let us know and create an issue at https://github.com/rofrischmann/inline-style-prefixer/issues');
	      return false;
	    }
	    var data = this._browserInfo.browser && _caniuseData2['default'][this._browserInfo.browser];
	    if (data) {
	      this._requiresPrefix = Object.keys(data).filter(function (key) {
	        return data[key] >= _this._browserInfo.version;
	      }).reduce(function (result, name) {
	        result[name] = true;
	        return result;
	      }, {});
	      this._hasPropsRequiringPrefix = Object.keys(this._requiresPrefix).length > 0;
	    } else {
	      this._hasPropsRequiringPrefix = false;
	      warn('Your userAgent seems to be not supported by inline-style-prefixer. Feel free to open an issue.');
	      return false;
	    }
	  }
	
	  /**
	   * Returns a prefixed version of the style object
	   * @param {Object} styles - Style object that gets prefixed properties added
	   * @returns {Object} - Style object with prefixed properties and values
	   */
	
	  _createClass(Prefixer, [{
	    key: 'prefix',
	    value: function prefix(styles) {
	      var _this2 = this;
	
	      // only add prefixes if needed
	      if (!this._hasPropsRequiringPrefix) {
	        return styles;
	      }
	
	      styles = assign({}, styles);
	
	      Object.keys(styles).forEach(function (property) {
	        var value = styles[property];
	        if (value instanceof Object) {
	          // recurse through nested style objects
	          styles[property] = _this2.prefix(value);
	        } else {
	          // add prefixes if needed
	          if (_this2._requiresPrefix[property]) {
	            styles[_this2.jsPrefix + caplitalizeString(property)] = value;
	            delete styles[property];
	          }
	
	          // resolve plugins
	          _Plugins2['default'].forEach(function (plugin) {
	            assign(styles, plugin(property, value, _this2._browserInfo, styles, false));
	          });
	        }
	      });
	
	      return styles;
	    }
	
	    /**
	     * Returns a prefixed version of the style object using all vendor prefixes
	     * @param {Object} styles - Style object that gets prefixed properties added
	     * @returns {Object} - Style object with prefixed properties and values
	     */
	  }], [{
	    key: 'prefixAll',
	    value: function prefixAll(styles) {
	      var prefixes = {};
	      var browserInfo = (0, _getBrowserInformation2['default'])('*');
	
	      browserInfo.browsers.forEach(function (browser) {
	        var data = _caniuseData2['default'][browser];
	        if (data) {
	          assign(prefixes, data);
	        }
	      });
	
	      // there should always be at least one prefixed style, but just incase
	      if (!Object.keys(prefixes).length > 0) {
	        return styles;
	      }
	
	      styles = assign({}, styles);
	
	      Object.keys(styles).forEach(function (property) {
	        var value = styles[property];
	        if (value instanceof Object) {
	          // recurse through nested style objects
	          styles[property] = Prefixer.prefixAll(value);
	        } else {
	          var browsers = Object.keys(browserInfo.prefixes);
	          browsers.forEach(function (browser) {
	            var style = browserInfo.prefixes[browser];
	            // add prefixes if needed
	            if (prefixes[property]) {
	              styles[style.inline + caplitalizeString(property)] = value;
	            }
	
	            // resolve plugins for each browser
	            _Plugins2['default'].forEach(function (plugin) {
	              var browserInfo = {
	                name: browser,
	                prefix: style,
	                version: 0 // assume lowest
	              };
	              assign(styles, plugin(property, value, browserInfo, styles, true));
	            });
	          });
	        }
	      });
	
	      return styles;
	    }
	  }]);
	
	  return Prefixer;
	})();
	
	exports['default'] = Prefixer;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 5 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _bowser = __webpack_require__(7);
	
	var _bowser2 = _interopRequireDefault(_bowser);
	
	var vendorPrefixes = {
	  Webkit: ['chrome', 'safari', 'ios', 'android', 'phantom', 'opera', 'webos', 'blackberry', 'bada', 'tizen'],
	  Moz: ['firefox', 'seamonkey', 'sailfish'],
	  ms: ['msie', 'msedge']
	};
	
	var browsers = {
	  chrome: [['chrome'], ['phantom'], ['webos'], ['blackberry'], ['bada'], ['tizenn']],
	  safari: [['safari']],
	  firefox: [['firefox'], ['seamonkey'], ['sailfish']],
	  ie: [['msie'], ['msedge']],
	  opera: [['opera']],
	  ios_saf: [['ios', 'mobile'], ['ios', 'tablet']],
	  ie_mob: [['windowsphone', 'mobile', 'msie'], ['windowsphone', 'tablet', 'msie'], ['windowsphone', 'mobile', 'msedge'], ['windowsphone', 'tablet', 'msedge']],
	  op_mini: [['opera', 'mobile'], ['opera', 'tablet']],
	  and_chr: [['android', 'chrome', 'mobile'], ['android', 'chrome', 'tablet']],
	  and_uc: [['android', 'mobile'], ['android', 'mobile']],
	  android: [['android', 'mobile'], ['android', 'mobile']]
	};
	
	/**
	 * Returns an object containing prefix data associated with a browser
	 * @param {string} browser - browser to find a prefix for
	 */
	var getPrefixes = function getPrefixes(browser) {
	  var prefixKeys = undefined;
	  var prefix = undefined;
	  var vendors = undefined;
	  var conditions = undefined;
	  var prefixVendor = undefined;
	  var browserVendors = undefined;
	
	  // Find the prefix for this browser (if any)
	  prefixKeys = Object.keys(vendorPrefixes);
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;
	
	  try {
	    for (var _iterator = prefixKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      prefix = _step.value;
	
	      // Find a matching vendor
	      vendors = vendorPrefixes[prefix];
	      conditions = browsers[browser];
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;
	
	      try {
	        for (var _iterator2 = vendors[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          prefixVendor = _step2.value;
	          var _iteratorNormalCompletion3 = true;
	          var _didIteratorError3 = false;
	          var _iteratorError3 = undefined;
	
	          try {
	            for (var _iterator3 = conditions[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	              browserVendors = _step3.value;
	
	              if (browserVendors.indexOf(prefixVendor) !== -1) {
	                return {
	                  inline: prefix,
	                  CSS: '-' + prefix.toLowerCase() + '-'
	                };
	              }
	            }
	          } catch (err) {
	            _didIteratorError3 = true;
	            _iteratorError3 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion3 && _iterator3['return']) {
	                _iterator3['return']();
	              }
	            } finally {
	              if (_didIteratorError3) {
	                throw _iteratorError3;
	              }
	            }
	          }
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2['return']) {
	            _iterator2['return']();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
	      }
	    }
	
	    // No prefix found for this browser
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator['return']) {
	        _iterator['return']();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }
	
	  return { inline: '', CSS: '' };
	};
	
	/**
	 * Uses bowser to get default browser information such as version and name
	 * Evaluates bowser info and adds vendorPrefix information
	 * @param {string} userAgent - userAgent that gets evaluated
	 */
	
	exports['default'] = function (userAgent) {
	  if (!userAgent) {
	    return false;
	  }
	
	  var info = {};
	
	  // Special user agent, return all supported prefixes
	  // instead of returning a string browser name and a prefix object
	  // we return an array of browser names and map of prefixes for each browser
	  if (userAgent === '*') {
	    // Return an array of supported browsers
	    info.browsers = Object.keys(browsers);
	
	    // Return prefixes associated by browser
	    info.prefixes = {};
	
	    // Iterate browser list, assign prefix to each
	    info.browsers.forEach(function (browser) {
	      info.prefixes[browser] = getPrefixes(browser);
	    });
	
	    return info;
	  }
	
	  // Normal user agent, detect browser
	  info = _bowser2['default']._detect(userAgent);
	
	  Object.keys(vendorPrefixes).forEach(function (prefix) {
	    vendorPrefixes[prefix].forEach(function (browser) {
	      if (info[browser]) {
	        info.prefix = {
	          inline: prefix,
	          CSS: '-' + prefix.toLowerCase() + '-'
	        };
	      }
	    });
	  });
	
	  var name = '';
	  Object.keys(browsers).forEach(function (browser) {
	    browsers[browser].forEach(function (condition) {
	      var match = 0;
	      condition.forEach(function (single) {
	        if (info[single]) {
	          match += 1;
	        }
	      });
	      if (condition.length === match) {
	        name = browser;
	      }
	    });
	  });
	
	  info.browser = name;
	  return info;
	};
	
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  * Bowser - a browser detector
	  * https://github.com/ded/bowser
	  * MIT License | (c) Dustin Diaz 2015
	  */
	
	!function (name, definition) {
	  if (typeof module != 'undefined' && module.exports) module.exports = definition()
	  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	  else this[name] = definition()
	}('bowser', function () {
	  /**
	    * See useragents.js for examples of navigator.userAgent
	    */
	
	  var t = true
	
	  function detect(ua) {
	
	    function getFirstMatch(regex) {
	      var match = ua.match(regex);
	      return (match && match.length > 1 && match[1]) || '';
	    }
	
	    function getSecondMatch(regex) {
	      var match = ua.match(regex);
	      return (match && match.length > 1 && match[2]) || '';
	    }
	
	    var iosdevice = getFirstMatch(/(ipod|iphone|ipad)/i).toLowerCase()
	      , likeAndroid = /like android/i.test(ua)
	      , android = !likeAndroid && /android/i.test(ua)
	      , chromeBook = /CrOS/.test(ua)
	      , edgeVersion = getFirstMatch(/edge\/(\d+(\.\d+)?)/i)
	      , versionIdentifier = getFirstMatch(/version\/(\d+(\.\d+)?)/i)
	      , tablet = /tablet/i.test(ua)
	      , mobile = !tablet && /[^-]mobi/i.test(ua)
	      , result
	
	    if (/opera|opr/i.test(ua)) {
	      result = {
	        name: 'Opera'
	      , opera: t
	      , version: versionIdentifier || getFirstMatch(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/yabrowser/i.test(ua)) {
	      result = {
	        name: 'Yandex Browser'
	      , yandexbrowser: t
	      , version: versionIdentifier || getFirstMatch(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/windows phone/i.test(ua)) {
	      result = {
	        name: 'Windows Phone'
	      , windowsphone: t
	      }
	      if (edgeVersion) {
	        result.msedge = t
	        result.version = edgeVersion
	      }
	      else {
	        result.msie = t
	        result.version = getFirstMatch(/iemobile\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/msie|trident/i.test(ua)) {
	      result = {
	        name: 'Internet Explorer'
	      , msie: t
	      , version: getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i)
	      }
	    } else if (chromeBook) {
	      result = {
	        name: 'Chrome'
	      , chromeBook: t
	      , chrome: t
	      , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
	      }
	    } else if (/chrome.+? edge/i.test(ua)) {
	      result = {
	        name: 'Microsoft Edge'
	      , msedge: t
	      , version: edgeVersion
	      }
	    }
	    else if (/chrome|crios|crmo/i.test(ua)) {
	      result = {
	        name: 'Chrome'
	      , chrome: t
	      , version: getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (iosdevice) {
	      result = {
	        name : iosdevice == 'iphone' ? 'iPhone' : iosdevice == 'ipad' ? 'iPad' : 'iPod'
	      }
	      // WTF: version is not part of user agent in web apps
	      if (versionIdentifier) {
	        result.version = versionIdentifier
	      }
	    }
	    else if (/sailfish/i.test(ua)) {
	      result = {
	        name: 'Sailfish'
	      , sailfish: t
	      , version: getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/seamonkey\//i.test(ua)) {
	      result = {
	        name: 'SeaMonkey'
	      , seamonkey: t
	      , version: getFirstMatch(/seamonkey\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/firefox|iceweasel/i.test(ua)) {
	      result = {
	        name: 'Firefox'
	      , firefox: t
	      , version: getFirstMatch(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)
	      }
	      if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua)) {
	        result.firefoxos = t
	      }
	    }
	    else if (/silk/i.test(ua)) {
	      result =  {
	        name: 'Amazon Silk'
	      , silk: t
	      , version : getFirstMatch(/silk\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (android) {
	      result = {
	        name: 'Android'
	      , version: versionIdentifier
	      }
	    }
	    else if (/phantom/i.test(ua)) {
	      result = {
	        name: 'PhantomJS'
	      , phantom: t
	      , version: getFirstMatch(/phantomjs\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/blackberry|\bbb\d+/i.test(ua) || /rim\stablet/i.test(ua)) {
	      result = {
	        name: 'BlackBerry'
	      , blackberry: t
	      , version: versionIdentifier || getFirstMatch(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
	      }
	    }
	    else if (/(web|hpw)os/i.test(ua)) {
	      result = {
	        name: 'WebOS'
	      , webos: t
	      , version: versionIdentifier || getFirstMatch(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
	      };
	      /touchpad\//i.test(ua) && (result.touchpad = t)
	    }
	    else if (/bada/i.test(ua)) {
	      result = {
	        name: 'Bada'
	      , bada: t
	      , version: getFirstMatch(/dolfin\/(\d+(\.\d+)?)/i)
	      };
	    }
	    else if (/tizen/i.test(ua)) {
	      result = {
	        name: 'Tizen'
	      , tizen: t
	      , version: getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || versionIdentifier
	      };
	    }
	    else if (/safari/i.test(ua)) {
	      result = {
	        name: 'Safari'
	      , safari: t
	      , version: versionIdentifier
	      }
	    }
	    else {
	      result = {
	        name: getFirstMatch(/^(.*)\/(.*) /),
	        version: getSecondMatch(/^(.*)\/(.*) /)
	     };
	   }
	
	    // set webkit or gecko flag for browsers based on these engines
	    if (!result.msedge && /(apple)?webkit/i.test(ua)) {
	      result.name = result.name || "Webkit"
	      result.webkit = t
	      if (!result.version && versionIdentifier) {
	        result.version = versionIdentifier
	      }
	    } else if (!result.opera && /gecko\//i.test(ua)) {
	      result.name = result.name || "Gecko"
	      result.gecko = t
	      result.version = result.version || getFirstMatch(/gecko\/(\d+(\.\d+)?)/i)
	    }
	
	    // set OS flags for platforms that have multiple browsers
	    if (!result.msedge && (android || result.silk)) {
	      result.android = t
	    } else if (iosdevice) {
	      result[iosdevice] = t
	      result.ios = t
	    }
	
	    // OS version extraction
	    var osVersion = '';
	    if (result.windowsphone) {
	      osVersion = getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
	    } else if (iosdevice) {
	      osVersion = getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i);
	      osVersion = osVersion.replace(/[_\s]/g, '.');
	    } else if (android) {
	      osVersion = getFirstMatch(/android[ \/-](\d+(\.\d+)*)/i);
	    } else if (result.webos) {
	      osVersion = getFirstMatch(/(?:web|hpw)os\/(\d+(\.\d+)*)/i);
	    } else if (result.blackberry) {
	      osVersion = getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
	    } else if (result.bada) {
	      osVersion = getFirstMatch(/bada\/(\d+(\.\d+)*)/i);
	    } else if (result.tizen) {
	      osVersion = getFirstMatch(/tizen[\/\s](\d+(\.\d+)*)/i);
	    }
	    if (osVersion) {
	      result.osversion = osVersion;
	    }
	
	    // device type extraction
	    var osMajorVersion = osVersion.split('.')[0];
	    if (tablet || iosdevice == 'ipad' || (android && (osMajorVersion == 3 || (osMajorVersion == 4 && !mobile))) || result.silk) {
	      result.tablet = t
	    } else if (mobile || iosdevice == 'iphone' || iosdevice == 'ipod' || android || result.blackberry || result.webos || result.bada) {
	      result.mobile = t
	    }
	
	    // Graded Browser Support
	    // http://developer.yahoo.com/yui/articles/gbs
	    if (result.msedge ||
	        (result.msie && result.version >= 10) ||
	        (result.yandexbrowser && result.version >= 15) ||
	        (result.chrome && result.version >= 20) ||
	        (result.firefox && result.version >= 20.0) ||
	        (result.safari && result.version >= 6) ||
	        (result.opera && result.version >= 10.0) ||
	        (result.ios && result.osversion && result.osversion.split(".")[0] >= 6) ||
	        (result.blackberry && result.version >= 10.1)
	        ) {
	      result.a = t;
	    }
	    else if ((result.msie && result.version < 10) ||
	        (result.chrome && result.version < 20) ||
	        (result.firefox && result.version < 20.0) ||
	        (result.safari && result.version < 6) ||
	        (result.opera && result.version < 10.0) ||
	        (result.ios && result.osversion && result.osversion.split(".")[0] < 6)
	        ) {
	      result.c = t
	    } else result.x = t
	
	    return result
	  }
	
	  var bowser = detect(typeof navigator !== 'undefined' ? navigator.userAgent : '')
	
	  bowser.test = function (browserList) {
	    for (var i = 0; i < browserList.length; ++i) {
	      var browserItem = browserList[i];
	      if (typeof browserItem=== 'string') {
	        if (browserItem in bowser) {
	          return true;
	        }
	      }
	    }
	    return false;
	  }
	
	  /*
	   * Set our detect method to the main bowser object so we can
	   * reuse it to test other user agents.
	   * This is needed to implement future tests.
	   */
	  bowser._detect = detect;
	
	  return bowser
	});


/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	exports['default'] = function (_ref) {
	  var browser = _ref.browser;
	  var version = _ref.version;
	  var prefix = _ref.prefix;
	
	  var prefixedKeyframes = 'keyframes';
	  if (browser === 'chrome' && version < 43 || (browser === 'safari' || browser === 'ios_saf') && version < 9 || browser === 'opera' && version < 30 || browser === 'android' && version <= 4.4 || browser === 'and_uc') {
	    prefixedKeyframes = prefix.CSS + prefixedKeyframes;
	  }
	  return prefixedKeyframes;
	};
	
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports) {

	var caniuseData = {"chrome":{"backfaceVisibility":35,"perspective":35,"perspectiveOrigin":35,"transform":35,"transformOrigin":35,"transformStyle":35,"transformOriginX":35,"transformOriginY":35,"animation":42,"animationDelay":42,"animationDirection":42,"animationFillMode":42,"animationDuration":42,"anmationIterationCount":42,"animationName":42,"animationPlayState":42,"animationTimingFunction":42,"appearance":49,"userSelect":49,"fontKerning":32,"textEmphasisPosition":49,"textEmphasis":49,"textEmphasisStyle":49,"textEmphasisColor":49,"boxDecorationBreak":49,"clipPath":49,"maskImage":49,"maskMode":49,"maskRepeat":49,"maskPosition":49,"maskClip":49,"maskOrigin":49,"maskSize":49,"maskComposite":49,"mask":49,"maskBorderSource":49,"maskBorderMode":49,"maskBorderSlice":49,"maskBorderWidth":49,"maskBorderOutset":49,"maskBorderRepeat":49,"maskBorder":49,"maskType":49,"textDecorationStyle":49,"textDecorationSkip":49,"textDecorationLine":49,"textDecorationColor":49,"filter":49,"fontFeatureSettings":49,"breakAfter":49,"breakBefore":49,"breakInside":49,"columnCount":49,"columnFill":49,"columnGap":49,"columnRule":49,"columnRuleColor":49,"columnRuleStyle":49,"columnRuleWidth":49,"columns":49,"columnSpan":49,"columnWidth":49},"safari":{"flex":8,"flexBasis":8,"flexDirection":8,"flexGrow":8,"flexFlow":8,"flexShrink":8,"alignContent":8,"alignItems":8,"alignSelf":8,"justifyContent":8,"order":8,"transition":6,"transitionDelay":6,"transitionDuration":6,"transitionProperty":6,"transitionTimingFunction":6,"backfaceVisibility":8,"perspective":8,"perspectiveOrigin":8,"transform":8,"transformOrigin":8,"transformStyle":8,"transformOriginX":8,"transformOriginY":8,"animation":8,"animationDelay":8,"animationDirection":8,"animationFillMode":8,"animationDuration":8,"anmationIterationCount":8,"animationName":8,"animationPlayState":8,"animationTimingFunction":8,"appearance":9,"userSelect":9,"backdropFilter":9,"fontKerning":9,"scrollSnapType":9,"scrollSnapPointsX":9,"scrollSnapPointsY":9,"scrollSnapDestination":9,"scrollSnapCoordinate":9,"textEmphasisPosition":7,"textEmphasis":7,"textEmphasisStyle":7,"textEmphasisColor":7,"boxDecorationBreak":9,"clipPath":9,"maskImage":9,"maskMode":9,"maskRepeat":9,"maskPosition":9,"maskClip":9,"maskOrigin":9,"maskSize":9,"maskComposite":9,"mask":9,"maskBorderSource":9,"maskBorderMode":9,"maskBorderSlice":9,"maskBorderWidth":9,"maskBorderOutset":9,"maskBorderRepeat":9,"maskBorder":9,"maskType":9,"textDecorationStyle":9,"textDecorationSkip":9,"textDecorationLine":9,"textDecorationColor":9,"shapeImageThreshold":9,"shapeImageMargin":9,"shapeImageOutside":9,"filter":9,"hyphens":9,"flowInto":9,"flowFrom":9,"breakBefore":8,"breakAfter":8,"breakInside":8,"regionFragment":9,"columnCount":8,"columnFill":8,"columnGap":8,"columnRule":8,"columnRuleColor":8,"columnRuleStyle":8,"columnRuleWidth":8,"columns":8,"columnSpan":8,"columnWidth":8},"firefox":{"appearance":45,"userSelect":45,"boxSizing":28,"textAlignLast":45,"textDecorationStyle":35,"textDecorationSkip":35,"textDecorationLine":35,"textDecorationColor":35,"tabSize":45,"hyphens":42,"fontFeatureSettings":33,"breakAfter":45,"breakBefore":45,"breakInside":45,"columnCount":45,"columnFill":45,"columnGap":45,"columnRule":45,"columnRuleColor":45,"columnRuleStyle":45,"columnRuleWidth":45,"columns":45,"columnSpan":45,"columnWidth":45},"opera":{"flex":16,"flexBasis":16,"flexDirection":16,"flexGrow":16,"flexFlow":16,"flexShrink":16,"alignContent":16,"alignItems":16,"alignSelf":16,"justifyContent":16,"order":16,"backfaceVisibility":22,"perspective":22,"perspectiveOrigin":22,"transform":22,"transformOrigin":22,"transformStyle":22,"transformOriginX":22,"transformOriginY":22,"animation":29,"animationDelay":29,"animationDirection":29,"animationFillMode":29,"animationDuration":29,"anmationIterationCount":29,"animationName":29,"animationPlayState":29,"animationTimingFunction":29,"appearance":35,"userSelect":35,"fontKerning":19,"textEmphasisPosition":35,"textEmphasis":35,"textEmphasisStyle":35,"textEmphasisColor":35,"boxDecorationBreak":35,"clipPath":35,"maskImage":35,"maskMode":35,"maskRepeat":35,"maskPosition":35,"maskClip":35,"maskOrigin":35,"maskSize":35,"maskComposite":35,"mask":35,"maskBorderSource":35,"maskBorderMode":35,"maskBorderSlice":35,"maskBorderWidth":35,"maskBorderOutset":35,"maskBorderRepeat":35,"maskBorder":35,"maskType":35,"filter":35,"fontFeatureSettings":35,"breakAfter":35,"breakBefore":35,"breakInside":35,"columnCount":35,"columnFill":35,"columnGap":35,"columnRule":35,"columnRuleColor":35,"columnRuleStyle":35,"columnRuleWidth":35,"columns":35,"columnSpan":35,"columnWidth":35},"ie":{"wrapMargin":11,"gridColumnStart":11,"regionFragment":11,"gridTemplateAreas":11,"gridRow":11,"wrapFlow":11,"scrollSnapDestination":11,"scrollSnapPointsY":11,"breakBefore":11,"flex":10,"gridAutoRows":11,"gridRowStart":11,"gridAutoFlow":11,"rowGap":11,"hyphens":11,"scrollSnapType":11,"gridTemplate":11,"scrollSnapPointsX":11,"wrapThrough":11,"flowFrom":11,"breakInside":11,"flexFlow":10,"columnGap":11,"gridArea":11,"gridColumn":11,"breakAfter":11,"gridAutoColumns":11,"scrollSnapCoordinate":11,"userSelect":11,"touchAction":10,"gridGap":11,"gridTemplateColumns":11,"gridTemplateRows":11,"grid":11,"gridRowEnd":11,"flexDirection":10,"flowInto":11,"textSizeAdjust":11},"ios_saf":{"flex":8.1,"flexBasis":8.1,"flexDirection":8.1,"flexGrow":8.1,"flexFlow":8.1,"flexShrink":8.1,"alignContent":8.1,"alignItems":8.1,"alignSelf":8.1,"justifyContent":8.1,"order":8.1,"transition":6,"transitionDelay":6,"transitionDuration":6,"transitionProperty":6,"transitionTimingFunction":6,"backfaceVisibility":8.1,"perspective":8.1,"perspectiveOrigin":8.1,"transform":8.1,"transformOrigin":8.1,"transformStyle":8.1,"transformOriginX":8.1,"transformOriginY":8.1,"animation":8.1,"animationDelay":8.1,"animationDirection":8.1,"animationFillMode":8.1,"animationDuration":8.1,"anmationIterationCount":8.1,"animationName":8.1,"animationPlayState":8.1,"animationTimingFunction":8.1,"appearance":9,"userSelect":9,"backdropFilter":9,"fontKerning":9,"scrollSnapType":9,"scrollSnapPointsX":9,"scrollSnapPointsY":9,"scrollSnapDestination":9,"scrollSnapCoordinate":9,"boxDecorationBreak":9,"clipPath":9,"maskImage":9,"maskMode":9,"maskRepeat":9,"maskPosition":9,"maskClip":9,"maskOrigin":9,"maskSize":9,"maskComposite":9,"mask":9,"maskBorderSource":9,"maskBorderMode":9,"maskBorderSlice":9,"maskBorderWidth":9,"maskBorderOutset":9,"maskBorderRepeat":9,"maskBorder":9,"maskType":9,"textSizeAdjust":9,"textDecorationStyle":9,"textDecorationSkip":9,"textDecorationLine":9,"textDecorationColor":9,"shapeImageThreshold":9,"shapeImageMargin":9,"shapeImageOutside":9,"filter":9,"hyphens":9,"flowInto":9,"flowFrom":9,"breakBefore":8.1,"breakAfter":8.1,"breakInside":8.1,"regionFragment":9,"columnCount":8.1,"columnFill":8.1,"columnGap":8.1,"columnRule":8.1,"columnRuleColor":8.1,"columnRuleStyle":8.1,"columnRuleWidth":8.1,"columns":8.1,"columnSpan":8.1,"columnWidth":8.1},"android":{"borderImage":4.2,"borderImageOutset":4.2,"borderImageRepeat":4.2,"borderImageSlice":4.2,"borderImageSource":4.2,"borderImageWidth":4.2,"flex":4.2,"flexBasis":4.2,"flexDirection":4.2,"flexGrow":4.2,"flexFlow":4.2,"flexShrink":4.2,"alignContent":4.2,"alignItems":4.2,"alignSelf":4.2,"justifyContent":4.2,"order":4.2,"transition":4.2,"transitionDelay":4.2,"transitionDuration":4.2,"transitionProperty":4.2,"transitionTimingFunction":4.2,"backfaceVisibility":4.4,"perspective":4.4,"perspectiveOrigin":4.4,"transform":4.4,"transformOrigin":4.4,"transformStyle":4.4,"transformOriginX":4.4,"transformOriginY":4.4,"animation":4.4,"animationDelay":4.4,"animationDirection":4.4,"animationFillMode":4.4,"animationDuration":4.4,"anmationIterationCount":4.4,"animationName":4.4,"animationPlayState":4.4,"animationTimingFunction":4.4,"appearance":44,"userSelect":44,"fontKerning":4.4,"textEmphasisPosition":44,"textEmphasis":44,"textEmphasisStyle":44,"textEmphasisColor":44,"boxDecorationBreak":44,"clipPath":44,"maskImage":44,"maskMode":44,"maskRepeat":44,"maskPosition":44,"maskClip":44,"maskOrigin":44,"maskSize":44,"maskComposite":44,"mask":44,"maskBorderSource":44,"maskBorderMode":44,"maskBorderSlice":44,"maskBorderWidth":44,"maskBorderOutset":44,"maskBorderRepeat":44,"maskBorder":44,"maskType":44,"filter":44,"fontFeatureSettings":44,"breakAfter":44,"breakBefore":44,"breakInside":44,"columnCount":44,"columnFill":44,"columnGap":44,"columnRule":44,"columnRuleColor":44,"columnRuleStyle":44,"columnRuleWidth":44,"columns":44,"columnSpan":44,"columnWidth":44},"and_chr":{},"and_uc":{"flex":9.9,"flexBasis":9.9,"flexDirection":9.9,"flexGrow":9.9,"flexFlow":9.9,"flexShrink":9.9,"alignContent":9.9,"alignItems":9.9,"alignSelf":9.9,"justifyContent":9.9,"order":9.9,"transition":9.9,"transitionDelay":9.9,"transitionDuration":9.9,"transitionProperty":9.9,"transitionTimingFunction":9.9,"backfaceVisibility":9.9,"perspective":9.9,"perspectiveOrigin":9.9,"transform":9.9,"transformOrigin":9.9,"transformStyle":9.9,"transformOriginX":9.9,"transformOriginY":9.9,"animation":9.9,"animationDelay":9.9,"animationDirection":9.9,"animationFillMode":9.9,"animationDuration":9.9,"anmationIterationCount":9.9,"animationName":9.9,"animationPlayState":9.9,"animationTimingFunction":9.9,"appearance":9.9,"userSelect":9.9,"fontKerning":9.9,"textEmphasisPosition":9.9,"textEmphasis":9.9,"textEmphasisStyle":9.9,"textEmphasisColor":9.9,"maskImage":9.9,"maskMode":9.9,"maskRepeat":9.9,"maskPosition":9.9,"maskClip":9.9,"maskOrigin":9.9,"maskSize":9.9,"maskComposite":9.9,"mask":9.9,"maskBorderSource":9.9,"maskBorderMode":9.9,"maskBorderSlice":9.9,"maskBorderWidth":9.9,"maskBorderOutset":9.9,"maskBorderRepeat":9.9,"maskBorder":9.9,"maskType":9.9,"textSizeAdjust":9.9,"filter":9.9,"hyphens":9.9,"flowInto":9.9,"flowFrom":9.9,"breakBefore":9.9,"breakAfter":9.9,"breakInside":9.9,"regionFragment":9.9,"fontFeatureSettings":9.9,"columnCount":9.9,"columnFill":9.9,"columnGap":9.9,"columnRule":9.9,"columnRuleColor":9.9,"columnRuleStyle":9.9,"columnRuleWidth":9.9,"columns":9.9,"columnSpan":9.9,"columnWidth":9.9},"op_mini":{"borderImage":5,"borderImageOutset":5,"borderImageRepeat":5,"borderImageSlice":5,"borderImageSource":5,"borderImageWidth":5,"tabSize":5,"objectFit":5,"objectPosition":5}}; module.exports = caniuseData

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _pluginsCursor = __webpack_require__(11);
	
	var _pluginsCursor2 = _interopRequireDefault(_pluginsCursor);
	
	var _pluginsFlex = __webpack_require__(12);
	
	var _pluginsFlex2 = _interopRequireDefault(_pluginsFlex);
	
	var _pluginsSizing = __webpack_require__(13);
	
	var _pluginsSizing2 = _interopRequireDefault(_pluginsSizing);
	
	var _pluginsGradient = __webpack_require__(14);
	
	var _pluginsGradient2 = _interopRequireDefault(_pluginsGradient);
	
	// special flexbox specifications
	
	var _pluginsFlexboxIE = __webpack_require__(15);
	
	var _pluginsFlexboxIE2 = _interopRequireDefault(_pluginsFlexboxIE);
	
	var _pluginsFlexboxOld = __webpack_require__(16);
	
	var _pluginsFlexboxOld2 = _interopRequireDefault(_pluginsFlexboxOld);
	
	exports['default'] = [_pluginsCursor2['default'], _pluginsFlex2['default'], _pluginsSizing2['default'], _pluginsGradient2['default'], _pluginsFlexboxIE2['default'], _pluginsFlexboxOld2['default']];
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var values = ['zoom-in', 'zoom-out', 'grab', 'grabbing'];
	
	exports['default'] = function (property, value, _ref2) {
	  var browser = _ref2.browser;
	  var version = _ref2.version;
	  var prefix = _ref2.prefix;
	
	  if (property === 'cursor' && values.indexOf(value) > -1 && (browser === 'firefox' && version < 24 || browser === 'chrome' && version < 37 || browser === 'safari' && version < 9 || browser === 'opera' && version < 24)) {
	    return _defineProperty({}, property, prefix.CSS + value);
	  }
	};
	
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var values = ['flex', 'inline-flex'];
	
	exports['default'] = function (property, value, _ref2) {
	  var browser = _ref2.browser;
	  var version = _ref2.version;
	  var prefix = _ref2.prefix;
	
	  if (property === 'display' && values.indexOf(value) > -1 && (browser === 'chrome' && (version < 29 || version > 20) || (browser === 'safari' || browser === 'ios_saf') && (version < 9 || version > 6) || browser === 'opera' && (version == 15 || version == 16))) {
	    return _defineProperty({}, property, prefix.CSS + value);
	  }
	};
	
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var properties = ['maxHeight', 'maxWidth', 'width', 'height', 'columnWidth', 'minWidth', 'minHeight'];
	var values = ['min-content', 'max-content', 'fill-available', 'fit-content', 'contain-floats'];
	
	exports['default'] = function (property, value, _ref2) {
	  var prefix = _ref2.prefix;
	
	  /**
	   * This actually is only available with prefixes
	   * NOTE: This might change in the feature
	   */
	  if (properties.indexOf(property) > -1 && values.indexOf(value) > -1) {
	    return _defineProperty({}, property, prefix.CSS + value);
	  }
	};
	
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var properties = ['background', 'backgroundImage'];
	var values = ['linear-gradient', 'radial-gradient', 'repeating-linear-gradient', 'repeating-radial-gradient'];
	
	exports['default'] = function (property, value, _ref2) {
	  var browser = _ref2.browser;
	  var version = _ref2.version;
	  var prefix = _ref2.prefix;
	
	  if (properties.indexOf(property) > -1 && values.indexOf(value) > -1 && (browser === 'firefox' && version < 16 || browser === 'chrome' && version < 26 || (browser === 'safari' || browser === 'ios_saf') && version < 7 || (browser === 'opera' || browser === 'op_mini') && version < 12.1 || browser === 'android' && version < 4.4 || browser === 'and_uc')) {
	    return _defineProperty({}, property, prefix.CSS + value);
	  }
	};
	
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var alternativeValues = {
	  'space-around': 'distribute',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end',
	  flex: '-ms-flexbox',
	  'inline-flex': '-ms-inline-flexbox'
	};
	
	var alternativeProps = {
	  alignContent: 'msFlexLinePack',
	  alignSelf: 'msFlexItemAlign',
	  alignItems: 'msFlexAlign',
	  justifyContent: 'msFlexPack',
	  order: 'msFlexOrder',
	  flexGrow: 'msFlexPositive',
	  flexShrink: 'msFlexNegative',
	  flexBasis: 'msPreferredSize'
	};
	
	var properties = Object.keys(alternativeProps).concat('display');
	
	exports['default'] = function (property, value, _ref2, styles) {
	  var browser = _ref2.browser;
	  var version = _ref2.version;
	
	  if (properties.indexOf(property) > -1 && (browser === 'ie_mob' || browser === 'ie') && version == 10) {
	    delete styles[property];
	    return _defineProperty({}, alternativeProps[property] || property, alternativeValues[value] || value);
	  }
	};
	
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var alternativeValues = {
	  'space-around': 'justify',
	  'space-between': 'justify',
	  'flex-start': 'start',
	  'flex-end': 'end',
	  'wrap-reverse': 'multiple',
	  wrap: 'multiple',
	  flex: 'box',
	  'inline-flex': 'inline-box'
	};
	
	var alternativeProps = {
	  alignItems: 'WebkitBoxAlign',
	  justifyContent: 'WebkitBoxPack',
	  flexWrap: 'WebkitBoxLines'
	};
	
	var properties = Object.keys(alternativeProps).concat(['alignContent', 'alignSelf', 'display', 'order', 'flexGrow', 'flexShrink', 'flexBasis', 'flexDirection']);
	
	exports['default'] = function (property, value, _ref2) {
	  var browser = _ref2.browser;
	  var version = _ref2.version;
	  var prefix = _ref2.prefix;
	
	  if (properties.indexOf(property) > -1 && (browser === 'firefox' && version < 22 || browser === 'chrome' && version < 21 || (browser === 'safari' || browser === 'ios_saf') && version <= 6.1 || browser === 'android' && version < 4.4 || browser === 'and_uc')) {
	    if (property === 'flexDirection') {
	      return {
	        WebkitBoxOrient: value.indexOf('column') > -1 ? 'vertical' : 'horizontal',
	        WebkitBoxDirection: value.indexOf('reverse') > -1 ? 'reverse' : 'normal'
	      };
	    }
	    if (property === 'display' && alternativeValues[value]) {
	      return { display: prefix.CSS + alternativeValues[value] };
	    }
	    return _defineProperty({}, alternativeProps[property] || property, alternativeValues[value] || value);
	  }
	};
	
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports) {

	/*******************************************************************************
	 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
	 * material contains unpublished, copyrighted work including confidential and
	 * proprietary information of Rapid7.
	 ******************************************************************************/
	
	"use strict";
	
	exports.__esModule = true;
	var toString = Object.prototype.toString;
	
	exports["default"] = {
	    bind: function bind(fn, thisArg) {
	        return function bindWrapper() {
	            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	                args[_key] = arguments[_key];
	            }
	
	            return fn.apply(thisArg, args);
	        };
	    },
	
	    ceil: function ceil(value) {
	        return Math.ceil(value);
	    },
	
	    forEach: function forEach(arr, cb) {
	        if (!this.isArray(arr) && !this.isArguments(arr)) {
	            console.error("Error: first parameter needs to be an array.");
	            return;
	        }
	
	        if (this.isArguments(arr)) {
	            arr = Array.prototype.slice.call(arr);
	        }
	
	        var i = 0,
	            len = arr.length;
	
	        for (; i < len; i++) {
	            if (cb(arr[i], i, arr) === false) {
	                break;
	            }
	        }
	    },
	
	    forIn: function forIn(obj, cb) {
	        if (this.isUndefined(obj)) {
	            obj = {};
	        }
	
	        if (!this.isObject(obj) || this.isFunction(obj)) {
	            console.error("Error: first parameter needs to be an object.");
	            return;
	        }
	
	        this.forEach(Object.keys(obj), function (key) {
	            return cb(obj[key], key, obj);
	        });
	    },
	
	    isArguments: function isArguments(obj) {
	        return !this.isNull(obj) && (toString.call(obj) === "[object Arguments]" || this.isObject(obj) && "callee" in obj);
	    },
	
	    isArray: function isArray(obj) {
	        return toString.call(obj) === "[object Array]";
	    },
	
	    isDate: function isDate(obj) {
	        return toString.call(obj) === "[object Date]";
	    },
	
	    isFinite: function isFinite(obj) {
	        return obj !== Infinity && obj !== -Infinity && !this.isNaN(obj);
	    },
	
	    isFunction: function isFunction(obj) {
	        return toString.call(obj) === "[object Function]" || typeof obj === "function";
	    },
	
	    isNaN: function isNaN(obj) {
	        return obj !== obj;
	    },
	
	    isNull: function isNull(obj) {
	        return obj === null;
	    },
	
	    isNumber: function isNumber(obj) {
	        var numObj = parseFloat(obj.toString().replace(/,/g, "."));
	
	        return !this.isNaN(numObj) && toString.call(numObj) === "[object Number]";
	    },
	
	    isObject: function isObject(obj) {
	        var type = typeof obj;
	
	        return type === "function" || type === "object" && !!obj;
	    },
	
	    isString: function isString(obj) {
	        return toString.call(obj) === "[object String]";
	    },
	
	    isUndefined: function isUndefined(obj) {
	        return obj === void 0;
	    },
	
	    kebabCase: function kebabCase(str) {
	        return str.replace(/([A-Z])/g, function ($1) {
	            return "-" + $1.toLowerCase();
	        });
	    },
	
	    merge: function merge(target) {
	        var _this = this;
	
	        var dest = {};
	
	        for (var _len2 = arguments.length, sources = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	            sources[_key2 - 1] = arguments[_key2];
	        }
	
	        this.forEach(sources, function (source) {
	            if (_this.isArray(source)) {
	                if (!_this.isArray(target)) {
	                    console.error("Error: Trying to merge array with non-array.");
	                    return dest;
	                }
	
	                dest = [].concat(target || []);
	
	                _this.forEach(source, function (item, i) {
	                    if (_this.isUndefined(dest[i])) {
	                        dest[i] = item;
	                    } else if (_this.isObject(item) && !_this.isFunction(item)) {
	                        dest[i] = _this.merge(target[i], item);
	                    } else {
	                        if (target.indexOf(item) === -1) {
	                            dest[i] = item;
	                        }
	                    }
	                });
	            } else {
	                if (target && _this.isObject(target) && !_this.isFunction(target)) {
	                    _this.forIn(target, function (value, key) {
	                        dest[key] = value;
	                    });
	                }
	
	                _this.forIn(source, function (value, key) {
	                    dest[key] = _this.isUndefined(target) || _this.isUndefined(target[key]) || !_this.isObject(value) && !_this.isUndefined(value) ? value : _this.merge(target[key], value || {});
	                });
	            }
	        });
	
	        return dest;
	    },
	
	    parseInt: (function (_parseInt) {
	        function parseInt(_x, _x2) {
	            return _parseInt.apply(this, arguments);
	        }
	
	        parseInt.toString = function () {
	            return _parseInt.toString();
	        };
	
	        return parseInt;
	    })(function (value, radix) {
	        return parseInt(value, radix || 10);
	    }),
	
	    unique: function unique(arr) {
	        var seen = {},
	            out = [],
	            j = 0;
	
	        this.forEach(arr, function (item) {
	            if (seen[item] !== 1) {
	                seen[item] = 1;
	                out[j++] = item;
	            }
	        });
	
	        return out;
	    }
	};
	module.exports = exports["default"];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/*******************************************************************************
	 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
	 * material contains unpublished, copyrighted work including confidential and
	 * proprietary information of Rapid7.
	 ******************************************************************************/
	
	"use strict";
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _prefixer = __webpack_require__(3);
	
	var _prefixer2 = _interopRequireDefault(_prefixer);
	
	var _utils = __webpack_require__(17);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	exports["default"] = function () {
	    var _this = this;
	
	    var prefix = _prefixer2["default"]();
	
	    for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
	        styles[_key] = arguments[_key];
	    }
	
	    _utils2["default"].forEach(styles, function (style) {
	        _utils2["default"].forIn(style, function (value, prop) {
	            if (!_utils2["default"].isObject(_this[prop])) {
	                _this[prop] = {};
	            }
	
	            _this[prop] = _utils2["default"].isFunction(value) ? style : _utils2["default"].merge(_this[prop], prefix(value));
	        });
	    });
	
	    return this;
	};
	
	module.exports = exports["default"];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/*******************************************************************************
	 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
	 * material contains unpublished, copyrighted work including confidential and
	 * proprietary information of Rapid7.
	 ******************************************************************************/
	
	"use strict";
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _react = __webpack_require__(20);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utils = __webpack_require__(17);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	exports["default"] = function (obj) {
	  return _utils2["default"].isFunction(obj) && Object.getPrototypeOf(obj) === _react2["default"].Component || _utils2["default"].isObject(obj) && obj._reactInternalInstance;
	};
	
	module.exports = exports["default"];

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ },
/* 21 */
/***/ function(module, exports) {

	/*******************************************************************************
	 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
	 * material contains unpublished, copyrighted work including confidential and
	 * proprietary information of Rapid7.
	 ******************************************************************************/
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = {
	    "html": {
	        fontFamily: "sans-serif",
	        MsTextSizeAdjust: "100%",
	        WebkitTextSizeAdjust: "100%"
	    },
	    "body": {
	        margin: 0
	    },
	    "article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary": {
	        display: "block"
	    },
	    "audio,canvas,progress,video": {
	        display: "inline-block",
	        verticalAlign: "baseline"
	    },
	    "audio:not([controls])": {
	        display: "none",
	        height: 0
	    },
	    "[hidden],template": {
	        display: "none"
	    },
	    a: {
	        backgroundColor: "transparent"
	    },
	    "a:active,a:hover": {
	        outline: 0
	    },
	    "abbr[title]": {
	        borderBottom: "1px dotted"
	    },
	    "b,strong": {
	        fontWeight: "bold"
	    },
	    dfn: {
	        fontStyle: "italic"
	    },
	    "h1": {
	        fontSize: "2em",
	        margin: "0.67em 0"
	    },
	    mark: {
	        background: "#ff0",
	        color: "#000"
	    },
	    small: {
	        fontSize: "80%"
	    },
	    "sub,sup": {
	        fontSize: "75%",
	        lineHeight: 0,
	        position: "relative",
	        verticalAlign: "baseline"
	    },
	    sup: {
	        top: "-0.5em"
	    },
	    sub: {
	        bottom: "-0.25em"
	    },
	    img: {
	        border: 0
	    },
	    "svg:not(:root)": {
	        overflow: "hidden"
	    },
	    figure: {
	        margin: "1em 40px"
	    },
	    hr: {
	        boxSizing: "content-box",
	        height: 0
	    },
	    pre: {
	        overflow: "auto"
	    },
	    "code,kbd,pre,samp": {
	        fontFamily: "monospace,monospace",
	        fontSize: "1em"
	    },
	    "button,input,optgroup,select,textarea": {
	        color: "inherit",
	        font: "inherit",
	        margin: 0
	    },
	    button: {
	        overflow: "visible"
	    },
	    "button,select": {
	        textTransform: "none"
	    },
	    "button,html input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]": {
	        appearance: "button",
	        cursor: "pointer"
	    },
	    "button[disabled],html input[disabled]": {
	        cursor: "default"
	    },
	    "button::-moz-focus-inner,input::-moz-focus-inner": {
	        border: 0,
	        padding: 0
	    },
	    input: {
	        lineHeight: "normal"
	    },
	    "input[type=\"checkbox\"],input[type=\"radio\"]": {
	        boxSizing: "border-box",
	        padding: 0
	    },
	    "input[type=\"number\"]::-webkit-inner-spin-button,input[type=\"number\"]::-webkit-outer-spin-button": {
	        height: "auto"
	    },
	    "input[type=\"search\"]": {
	        appearance: "textfield",
	        boxSizing: "content-box"
	    },
	    "input[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration": {
	        appearance: "none"
	    },
	    fieldset: {
	        border: "1px solid #c0c0c0",
	        margin: "0 2px",
	        padding: "0.35em 0.625em 0.75em"
	    },
	    legend: {
	        border: 0,
	        padding: 0
	    },
	    textarea: {
	        overflow: "auto"
	    },
	    optgroup: {
	        fontWeight: "bold"
	    },
	    table: {
	        borderCollapse: "collapse",
	        borderSpacing: 0
	    },
	    "td,th": {
	        padding: 0
	    }
	};
	module.exports = exports["default"];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/*******************************************************************************
	 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
	 * material contains unpublished, copyrighted work including confidential and
	 * proprietary information of Rapid7.
	 ******************************************************************************/
	
	"use strict";
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(20);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _radium = __webpack_require__(23);
	
	var _radium2 = _interopRequireDefault(_radium);
	
	var _isReactComponent = __webpack_require__(19);
	
	var _isReactComponent2 = _interopRequireDefault(_isReactComponent);
	
	var _prefixer = __webpack_require__(3);
	
	var _prefixer2 = _interopRequireDefault(_prefixer);
	
	exports["default"] = function (Element) {
	    var prefix = _prefixer2["default"]();
	
	    if (_isReactComponent2["default"](Element)) {
	        return _radium2["default"](Element);
	    }
	
	    if (_react2["default"].isValidElement(Element)) {
	        Element = Element.type;
	    }
	
	    var RadiumBixElement = (function (_React$Component) {
	        _inherits(RadiumBixElement, _React$Component);
	
	        function RadiumBixElement(props) {
	            _classCallCheck(this, _RadiumBixElement);
	
	            _get(Object.getPrototypeOf(_RadiumBixElement.prototype), "constructor", this).call(this, props);
	            this.displayName = "RadiumBixElement";
	        }
	
	        _createClass(RadiumBixElement, [{
	            key: "render",
	            value: function render() {
	                var _props = this.props;
	                var children = _props.children;
	                var style = _props.style;
	
	                var otherProps = _objectWithoutProperties(_props, ["children", "style"]);
	
	                style = prefix(style);
	
	                switch (Element) {
	                    case "area":
	                    case "base":
	                    case "br":
	                    case "col":
	                    case "hr":
	                    case "img":
	                    case "input":
	                    case "keygen":
	                    case "link":
	                    case "menuitem":
	                    case "meta":
	                    case "param":
	                    case "source":
	                    case "track":
	                    case "wbr":
	                        return _react2["default"].createElement(Element, _extends({
	                            style: [style]
	                        }, otherProps));
	                    default:
	                        return _react2["default"].createElement(
	                            Element,
	                            _extends({
	                                style: [style]
	                            }, otherProps),
	                            children
	                        );
	                }
	            }
	        }]);
	
	        var _RadiumBixElement = RadiumBixElement;
	        RadiumBixElement = _radium2["default"](RadiumBixElement) || RadiumBixElement;
	        return RadiumBixElement;
	    })(_react2["default"].Component);
	
	    return RadiumBixElement;
	};
	
	;
	module.exports = exports["default"];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _enhancer = __webpack_require__(24);
	
	var _enhancer2 = _interopRequireDefault(_enhancer);
	
	var _plugins = __webpack_require__(31);
	
	var _plugins2 = _interopRequireDefault(_plugins);
	
	var _componentsPrintStyleSheet = __webpack_require__(41);
	
	var _componentsPrintStyleSheet2 = _interopRequireDefault(_componentsPrintStyleSheet);
	
	var _componentsStyle = __webpack_require__(42);
	
	var _componentsStyle2 = _interopRequireDefault(_componentsStyle);
	
	var _getState = __webpack_require__(26);
	
	var _getState2 = _interopRequireDefault(_getState);
	
	var _keyframes = __webpack_require__(45);
	
	var _keyframes2 = _interopRequireDefault(_keyframes);
	
	var _resolveStyles = __webpack_require__(25);
	
	function Radium(ComposedComponent /*: constructor*/) {
	  return _enhancer2['default'](ComposedComponent);
	}
	
	Radium.Plugins = _plugins2['default'];
	Radium.PrintStyleSheet = _componentsPrintStyleSheet2['default'];
	Radium.Style = _componentsStyle2['default'];
	Radium.getState = _getState2['default'];
	Radium.keyframes = _keyframes2['default'];
	Radium.__clearStateForTests = _resolveStyles.__clearStateForTests;
	
	exports['default'] = Radium;
	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/* @flow */
	
	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = enhanceWithRadium;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(20);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _resolveStylesJs = __webpack_require__(25);
	
	var _resolveStylesJs2 = _interopRequireDefault(_resolveStylesJs);
	
	var _printStylesJs = __webpack_require__(40);
	
	var _printStylesJs2 = _interopRequireDefault(_printStylesJs);
	
	var KEYS_TO_IGNORE_WHEN_COPYING_PROPERTIES = ['arguments', 'callee', 'caller', 'length', 'name', 'prototype', 'type'];
	
	var copyProperties = function copyProperties(source, target) {
	  Object.getOwnPropertyNames(source).forEach(function (key) {
	    if (KEYS_TO_IGNORE_WHEN_COPYING_PROPERTIES.indexOf(key) < 0 && !target.hasOwnProperty(key)) {
	      var descriptor = Object.getOwnPropertyDescriptor(source, key);
	      Object.defineProperty(target, key, descriptor);
	    }
	  });
	};
	
	function enhanceWithRadium(configOrComposedComponent /*: constructor | Function | Object*/) /*: constructor*/ {
	  var config /*:: ?: Object*/ = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	  if (typeof configOrComposedComponent !== 'function') {
	    var _ret = (function () {
	      var newConfig = _extends({}, config, configOrComposedComponent);
	      return {
	        v: function (configOrComponent) {
	          return enhanceWithRadium(configOrComponent, newConfig);
	        }
	      };
	    })();
	
	    if (typeof _ret === 'object') return _ret.v;
	  }
	
	  var component /*: Function*/ = configOrComposedComponent;
	  var ComposedComponent /*: constructor*/ = component;
	
	  // Handle stateless components
	  if (!ComposedComponent.render && !ComposedComponent.prototype.render) {
	    ComposedComponent = (function (_Component) {
	      _inherits(_class, _Component);
	
	      function _class() {
	        _classCallCheck(this, _class);
	
	        _Component.apply(this, arguments);
	      }
	
	      _class.prototype.render = function render() {
	        return component(this.props, this.context);
	      };
	
	      return _class;
	    })(_react.Component);
	    ComposedComponent.displayName = component.displayName || component.name;
	  }
	
	  var RadiumEnhancer = (function (_ComposedComponent) {
	    _inherits(RadiumEnhancer, _ComposedComponent);
	
	    function RadiumEnhancer() {
	      _classCallCheck(this, RadiumEnhancer);
	
	      _ComposedComponent.apply(this, arguments);
	
	      this.state = this.state || {};
	      this.state._radiumStyleState = {};
	      this._radiumIsMounted = true;
	
	      if (RadiumEnhancer.printStyleClass) {
	        this.printStyleClass = RadiumEnhancer.printStyleClass;
	      }
	    }
	
	    // Class inheritance uses Object.create and because of __proto__ issues
	    // with IE <10 any static properties of the superclass aren't inherited and
	    // so need to be manually populated.
	    // See http://babeljs.io/docs/advanced/caveats/#classes-10-and-below-
	
	    RadiumEnhancer.prototype.componentWillUnmount = function componentWillUnmount() {
	      if (_ComposedComponent.prototype.componentWillUnmount) {
	        _ComposedComponent.prototype.componentWillUnmount.call(this);
	      }
	
	      this._radiumIsMounted = false;
	
	      if (this._radiumMouseUpListener) {
	        this._radiumMouseUpListener.remove();
	      }
	
	      if (this._radiumMediaQueryListenersByQuery) {
	        Object.keys(this._radiumMediaQueryListenersByQuery).forEach(function (query) {
	          this._radiumMediaQueryListenersByQuery[query].remove();
	        }, this);
	      }
	    };
	
	    RadiumEnhancer.prototype.getChildContext = function getChildContext() {
	      var superChildContext = _ComposedComponent.prototype.getChildContext ? _ComposedComponent.prototype.getChildContext.call(this) : {};
	
	      if (!this.props.radiumConfig) {
	        return superChildContext;
	      }
	
	      return _extends({}, superChildContext, {
	        radiumConfig: this.props.radiumConfig
	      });
	    };
	
	    RadiumEnhancer.prototype.render = function render() {
	      var renderedElement = _ComposedComponent.prototype.render.call(this);
	      var currentConfig = this.props.radiumConfig || this.context.radiumConfig || config;
	
	      if (config && currentConfig !== config) {
	        currentConfig = _extends({}, config, currentConfig);
	      }
	
	      return _resolveStylesJs2['default'](this, renderedElement, currentConfig);
	    };
	
	    return RadiumEnhancer;
	  })(ComposedComponent);
	
	  copyProperties(component, RadiumEnhancer);
	
	  if (process.env.NODE_ENV !== 'production') {
	    // This also fixes React Hot Loader by exposing the original components top
	    // level prototype methods on the Radium enhanced prototype as discussed in
	    // https://github.com/FormidableLabs/radium/issues/219.
	    copyProperties(ComposedComponent.prototype, RadiumEnhancer.prototype);
	  }
	
	  if (RadiumEnhancer.propTypes && RadiumEnhancer.propTypes.style) {
	    RadiumEnhancer.propTypes = _extends({}, RadiumEnhancer.propTypes, {
	      style: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object])
	    });
	  }
	
	  RadiumEnhancer.displayName = component.displayName || component.name || 'Component';
	
	  RadiumEnhancer.printStyleClass = _printStylesJs2['default'].addPrintStyles(RadiumEnhancer);
	
	  RadiumEnhancer.contextTypes = _extends({}, RadiumEnhancer.contextTypes, {
	    radiumConfig: _react2['default'].PropTypes.object
	  });
	
	  RadiumEnhancer.childContextTypes = _extends({}, RadiumEnhancer.childContextTypes, {
	    radiumConfig: _react2['default'].PropTypes.object
	  });
	
	  return RadiumEnhancer;
	}
	
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* @flow */
	
	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _getState2 = __webpack_require__(26);
	
	var _getState3 = _interopRequireDefault(_getState2);
	
	var _getStateKey = __webpack_require__(27);
	
	var _getStateKey2 = _interopRequireDefault(_getStateKey);
	
	var _mergeStyles = __webpack_require__(28);
	
	var _mergeStyles2 = _interopRequireDefault(_mergeStyles);
	
	var _plugins = __webpack_require__(31);
	
	var _plugins2 = _interopRequireDefault(_plugins);
	
	var _exenv = __webpack_require__(39);
	
	var _exenv2 = _interopRequireDefault(_exenv);
	
	var _react = __webpack_require__(20);
	
	var _react2 = _interopRequireDefault(_react);
	
	/*:: import type {Config} from './config';*/
	
	var DEFAULT_CONFIG = {
	  plugins: [_plugins2['default'].mergeStyleArray, _plugins2['default'].checkProps, _plugins2['default'].resolveMediaQueries, _plugins2['default'].resolveInteractionStyles, _plugins2['default'].prefix, _plugins2['default'].checkProps]
	};
	
	// Gross
	var globalState = {};
	
	// Declare early for recursive helpers.
	var resolveStyles = ((null /*: any*/) /*: (
	                                        component: any, // ReactComponent, flow+eslint complaining
	                                        renderedElement: any,
	                                        config: Config,
	                                        existingKeyMap?: {[key: string]: bool}
	                                      ) => any*/);
	
	var _resolveChildren = function _resolveChildren(_ref) {
	  var children = _ref.children;
	  var component = _ref.component;
	  var config = _ref.config;
	  var existingKeyMap = _ref.existingKeyMap;
	
	  if (!children) {
	    return children;
	  }
	
	  var childrenType = typeof children;
	
	  if (childrenType === 'string' || childrenType === 'number') {
	    // Don't do anything with a single primitive child
	    return children;
	  }
	
	  if (childrenType === 'function') {
	    // Wrap the function, resolving styles on the result
	    return function () {
	      var result = children.apply(this, arguments);
	      if (_react2['default'].isValidElement(result)) {
	        return resolveStyles(component, result, config, existingKeyMap);
	      }
	      return result;
	    };
	  }
	
	  if (_react2['default'].Children.count(children) === 1 && children.type) {
	    // If a React Element is an only child, don't wrap it in an array for
	    // React.Children.map() for React.Children.only() compatibility.
	    var onlyChild = _react2['default'].Children.only(children);
	    return resolveStyles(component, onlyChild, config, existingKeyMap);
	  }
	
	  return _react2['default'].Children.map(children, function (child) {
	    if (_react2['default'].isValidElement(child)) {
	      return resolveStyles(component, child, config, existingKeyMap);
	    }
	
	    return child;
	  });
	};
	
	// Recurse over props, just like children
	var _resolveProps = function _resolveProps(_ref2) {
	  var component = _ref2.component;
	  var config = _ref2.config;
	  var existingKeyMap = _ref2.existingKeyMap;
	  var props = _ref2.props;
	
	  var newProps = props;
	
	  Object.keys(props).forEach(function (prop) {
	    // We already recurse over children above
	    if (prop === 'children') {
	      return;
	    }
	
	    var propValue = props[prop];
	    if (_react2['default'].isValidElement(propValue)) {
	      newProps = _extends({}, newProps);
	      newProps[prop] = resolveStyles(component, propValue, config, existingKeyMap);
	    }
	  });
	
	  return newProps;
	};
	
	var _buildGetKey = function _buildGetKey(renderedElement, existingKeyMap) {
	  // We need a unique key to correlate state changes due to user interaction
	  // with the rendered element, so we know to apply the proper interactive
	  // styles.
	  var originalKey = typeof renderedElement.ref === 'string' ? renderedElement.ref : renderedElement.key;
	  var key = _getStateKey2['default'](originalKey);
	
	  var alreadyGotKey = false;
	  var getKey = function getKey() {
	    if (alreadyGotKey) {
	      return key;
	    }
	
	    alreadyGotKey = true;
	
	    if (existingKeyMap[key]) {
	      throw new Error('Radium requires each element with interactive styles to have a unique ' + 'key, set using either the ref or key prop. ' + (originalKey ? 'Key "' + originalKey + '" is a duplicate.' : 'Multiple elements have no key specified.'));
	    }
	
	    existingKeyMap[key] = true;
	
	    return key;
	  };
	
	  return getKey;
	};
	
	var _setStyleState = function _setStyleState(component, key, stateKey, value) {
	  if (!component._radiumIsMounted) {
	    return;
	  }
	
	  var existing = component._lastRadiumState || component.state && component.state._radiumStyleState || {};
	
	  var state = { _radiumStyleState: _extends({}, existing) };
	  state._radiumStyleState[key] = _extends({}, state._radiumStyleState[key]);
	  state._radiumStyleState[key][stateKey] = value;
	
	  component._lastRadiumState = state._radiumStyleState;
	  component.setState(state);
	};
	
	var _runPlugins = function _runPlugins(_ref3) {
	  var component = _ref3.component;
	  var config = _ref3.config;
	  var existingKeyMap = _ref3.existingKeyMap;
	  var props = _ref3.props;
	  var renderedElement = _ref3.renderedElement;
	
	  // Don't run plugins if renderedElement is not a simple ReactDOMElement or has
	  // no style.
	  if (!_react2['default'].isValidElement(renderedElement) || typeof renderedElement.type !== 'string' || !props.style) {
	    return props;
	  }
	
	  var newProps = props;
	
	  var plugins = config.plugins || DEFAULT_CONFIG.plugins;
	
	  var getKey = _buildGetKey(renderedElement, existingKeyMap);
	
	  var newStyle = props.style;
	  plugins.forEach(function (plugin) {
	    var result = plugin({
	      ExecutionEnvironment: _exenv2['default'],
	      componentName: component.constructor.displayName || component.constructor.name,
	      config: config,
	      getComponentField: function getComponentField(key) {
	        return component[key];
	      },
	      getGlobalState: function getGlobalState(key) {
	        return globalState[key];
	      },
	      getState: function getState(stateKey, elementKey) {
	        return _getState3['default'](component.state, elementKey || getKey(), stateKey);
	      },
	      mergeStyles: _mergeStyles2['default'],
	      props: newProps,
	      setState: function setState(stateKey, value, elementKey) {
	        return _setStyleState(component, elementKey || getKey(), stateKey, value);
	      },
	      style: newStyle
	    }) || {};
	
	    newStyle = result.style || newStyle;
	
	    newProps = result.props && Object.keys(result.props).length ? _extends({}, newProps, result.props) : newProps;
	
	    var newComponentFields = result.componentFields || {};
	    Object.keys(newComponentFields).forEach(function (fieldName) {
	      component[fieldName] = newComponentFields[fieldName];
	    });
	
	    var newGlobalState = result.globalState || {};
	    Object.keys(newGlobalState).forEach(function (key) {
	      globalState[key] = newGlobalState[key];
	    });
	  });
	
	  if (newStyle !== props.style) {
	    newProps = _extends({}, newProps, { style: newStyle });
	  }
	
	  return newProps;
	};
	
	// Wrapper around React.cloneElement. To avoid processing the same element
	// twice, whenever we clone an element add a special prop to make sure we don't
	// process this element again.
	var _cloneElement = function _cloneElement(renderedElement, newProps, newChildren) {
	  // Only add flag if this is a normal DOM element
	  if (typeof renderedElement.type === 'string') {
	    newProps = _extends({}, newProps, { _radiumDidResolveStyles: true });
	  }
	
	  return _react2['default'].cloneElement(renderedElement, newProps, newChildren);
	};
	
	//
	// The nucleus of Radium. resolveStyles is called on the rendered elements
	// before they are returned in render. It iterates over the elements and
	// children, rewriting props to add event handlers required to capture user
	// interactions (e.g. mouse over). It also replaces the style prop because it
	// adds in the various interaction styles (e.g. :hover).
	//
	resolveStyles = function (component /*: any*/, // ReactComponent, flow+eslint complaining
	renderedElement /*: any*/, // ReactElement
	config /*: Config*/, existingKeyMap /*:: ?: {[key: string]: boolean}*/) /*: any*/ {
	  if (config === undefined) config = DEFAULT_CONFIG;
	  // ReactElement
	  existingKeyMap = existingKeyMap || {};
	
	  if (!renderedElement ||
	  // Bail if we've already processed this element. This ensures that only the
	  // owner of an element processes that element, since the owner's render
	  // function will be called first (which will always be the case, since you
	  // can't know what else to render until you render the parent component).
	  renderedElement.props && renderedElement.props._radiumDidResolveStyles) {
	    return renderedElement;
	  }
	
	  var newChildren = _resolveChildren({
	    children: renderedElement.props.children,
	    component: component,
	    config: config,
	    existingKeyMap: existingKeyMap
	  });
	
	  var newProps = _resolveProps({
	    component: component,
	    config: config,
	    existingKeyMap: existingKeyMap,
	    props: renderedElement.props
	  });
	
	  newProps = _runPlugins({
	    component: component,
	    config: config,
	    existingKeyMap: existingKeyMap,
	    props: newProps,
	    renderedElement: renderedElement
	  });
	
	  // If nothing changed, don't bother cloning the element. Might be a bit
	  // wasteful, as we add the sentinal to stop double-processing when we clone.
	  // Assume benign double-processing is better than unneeded cloning.
	  if (newChildren === renderedElement.props.children && newProps === renderedElement.props) {
	    return renderedElement;
	  }
	
	  return _cloneElement(renderedElement, newProps !== renderedElement.props ? newProps : {}, newChildren);
	};
	
	// Only for use by tests
	resolveStyles.__clearStateForTests = function () {
	  globalState = {};
	};
	
	exports['default'] = resolveStyles;
	module.exports = exports['default'];
	// ReactComponent, flow+eslint complaining

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* @flow */
	
	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _getStateKey = __webpack_require__(27);
	
	var _getStateKey2 = _interopRequireDefault(_getStateKey);
	
	var getState = function getState(state /*: {_radiumStyleState: {[key: string]: {[value: string]: boolean}}}*/, elementKey /*: string*/, value /*: string*/) /*: any*/ {
	  var key = _getStateKey2['default'](elementKey);
	
	  return !!state && !!state._radiumStyleState && !!state._radiumStyleState[key] && state._radiumStyleState[key][value];
	};
	
	exports['default'] = getState;
	module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports) {

	/* @flow */
	
	'use strict';
	
	exports.__esModule = true;
	var getStateKey = function getStateKey(elementKey /*: ?string*/) /*: string*/ {
	  return elementKey === null || elementKey === undefined ? 'main' : elementKey.toString();
	};
	
	exports['default'] = getStateKey;
	module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _isPlainObject = __webpack_require__(29);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var shouldMerge = function shouldMerge(value) {
	  // Don't merge objects overriding toString, since they should be converted
	  // to string values.
	  return _isPlainObject2['default'](value) && value.toString === Object.prototype.toString;
	};
	
	// Merge style objects. Deep merge plain object values.
	var mergeStyles = function mergeStyles(styles) {
	  var result = {};
	
	  styles.forEach(function (style) {
	    if (!style || typeof style !== 'object') {
	      return;
	    }
	
	    if (Array.isArray(style)) {
	      style = mergeStyles(style);
	    }
	
	    Object.keys(style).forEach(function (key) {
	      if (shouldMerge(style[key]) && shouldMerge(result[key])) {
	        result[key] = mergeStyles([result[key], style[key]]);
	      } else {
	        result[key] = style[key];
	      }
	    });
	  });
	
	  return result;
	};
	
	exports['default'] = mergeStyles;
	module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	'use strict';
	
	var isObject = __webpack_require__(30);
	
	function isObjectObject(o) {
	  return isObject(o) === true
	    && Object.prototype.toString.call(o) === '[object Object]';
	}
	
	module.exports = function isPlainObject(o) {
	  var ctor,prot;
	  
	  if (isObjectObject(o) === false) return false;
	  
	  // If has modified constructor
	  ctor = o.constructor;
	  if (typeof ctor !== 'function') return false;
	  
	  // If has modified prototype
	  prot = ctor.prototype;
	  if (isObjectObject(prot) === false) return false;
	  
	  // If constructor does not have an Object-specific method
	  if (prot.hasOwnProperty('isPrototypeOf') === false) {
	    return false;
	  }
	  
	  // Most likely a plain Object
	  return true;
	};


/***/ },
/* 30 */
/***/ function(module, exports) {

	/*!
	 * isobject <https://github.com/jonschlinkert/isobject>
	 *
	 * Copyright (c) 2014-2015, Jon Schlinkert.
	 * Licensed under the MIT License.
	 */
	
	'use strict';
	
	module.exports = function isObject(val) {
	  return val != null && typeof val === 'object'
	    && !Array.isArray(val);
	};


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/** @flow */
	/* eslint-disable block-scoped-const */
	
	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _checkPropsPlugin = __webpack_require__(32);
	
	var _checkPropsPlugin2 = _interopRequireDefault(_checkPropsPlugin);
	
	var _mergeStyleArrayPlugin = __webpack_require__(33);
	
	var _mergeStyleArrayPlugin2 = _interopRequireDefault(_mergeStyleArrayPlugin);
	
	var _prefixPlugin = __webpack_require__(34);
	
	var _prefixPlugin2 = _interopRequireDefault(_prefixPlugin);
	
	var _resolveInteractionStylesPlugin = __webpack_require__(36);
	
	var _resolveInteractionStylesPlugin2 = _interopRequireDefault(_resolveInteractionStylesPlugin);
	
	var _resolveMediaQueriesPlugin = __webpack_require__(38);
	
	var _resolveMediaQueriesPlugin2 = _interopRequireDefault(_resolveMediaQueriesPlugin);
	
	/*:: import type {Config} from '../config';*/
	/*:: export type PluginConfig = {
	  // May not be readable if code has been minified
	  componentName: string,
	
	  // The Radium configuration
	  config: Config,
	
	  // Retrieve the value of a field on the component
	  getComponentField: (key: string) => any,
	
	  // Retrieve the value of a field global to the Radium module
	  // Used so that tests can easily clear global state.
	  getGlobalState: (key: string) => any,
	
	  // Retrieve the value of some state specific to the rendered element.
	  // Requires the element to have a unique key or ref or for an element key
	  // to be passed in.
	  getState: (stateKey: string, elementKey?: string) => any,
	
	  // Access to the mergeStyles utility
	  mergeStyles: (styles: Array<Object>) => Object,
	
	  // The props of the rendered element. This can be changed by each plugin,
	  // and successive plugins will see the result of previous plugins.
	  props: Object,
	
	  // Calls setState on the component with the given key and value.
	  // By default this is specific to the rendered element, but you can override
	  // by passing in the `elementKey` parameter.
	  setState: (stateKey: string, value: any, elementKey?: string) => void,
	
	  // The style prop of the rendered element. This can be changed by each plugin,
	  // and successive plugins will see the result of previous plugins. Kept
	  // separate from `props` for ease of use.
	  style: Object,
	
	  // uses the exenv npm module
	  ExecutionEnvironment: {
	    canUseEventListeners: bool,
	    canUseDOM: bool,
	  }
	};*/
	/*:: export type PluginResult = ?{
	  // Merged into the component directly. Useful for storing things for which you
	  // don't need to re-render, event subscriptions, for instance.
	  componentFields?: Object,
	
	  // Merged into a Radium controlled global state object. Use this instead of
	  // module level state for ease of clearing state between tests.
	  globalState?: Object,
	
	  // Merged into the rendered element's props.
	  props?: Object,
	
	  // Replaces (not merged into) the rendered element's style property.
	  style?: Object,
	};*/exports['default'] = {
	  checkProps: _checkPropsPlugin2['default'],
	  mergeStyleArray: _mergeStyleArrayPlugin2['default'],
	  prefix: _prefixPlugin2['default'],
	  resolveInteractionStyles: _resolveInteractionStylesPlugin2['default'],
	  resolveMediaQueries: _resolveMediaQueriesPlugin2['default']
	};
	module.exports = exports['default'];
	
	// May not be readable if code has been minified
	
	// The Radium configuration
	
	// Retrieve the value of a field on the component
	
	// Retrieve the value of a field global to the Radium module
	// Used so that tests can easily clear global state.
	
	// Retrieve the value of some state specific to the rendered element.
	// Requires the element to have a unique key or ref or for an element key
	// to be passed in.
	
	// Access to the mergeStyles utility
	
	// The props of the rendered element. This can be changed by each plugin,
	// and successive plugins will see the result of previous plugins.
	
	// Calls setState on the component with the given key and value.
	// By default this is specific to the rendered element, but you can override
	// by passing in the `elementKey` parameter.
	
	// The style prop of the rendered element. This can be changed by each plugin,
	// and successive plugins will see the result of previous plugins. Kept
	// separate from `props` for ease of use.
	
	// uses the exenv npm module
	
	// Merged into the component directly. Useful for storing things for which you
	// don't need to re-render, event subscriptions, for instance.
	
	// Merged into a Radium controlled global state object. Use this instead of
	// module level state for ease of clearing state between tests.
	
	// Merged into the rendered element's props.
	
	// Replaces (not merged into) the rendered element's style property.

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/* @flow */
	
	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	/*:: import type {PluginConfig, PluginResult} from '.';*/
	
	var checkProps = (function () {} /*: any*/);
	
	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    // Warn if you use longhand and shorthand properties in the same style
	    // object.
	    // https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties
	
	    var shorthandPropertyExpansions = {
	      'background': ['backgroundAttachment', 'backgroundBlendMode', 'backgroundClip', 'backgroundColor', 'backgroundImage', 'backgroundOrigin', 'backgroundPosition', 'backgroundPositionX', 'backgroundPositionY', 'backgroundRepeat', 'backgroundRepeatX', 'backgroundRepeatY', 'backgroundSize'],
	      'border': ['borderBottom', 'borderBottomColor', 'borderBottomStyle', 'borderBottomWidth', 'borderColor', 'borderLeft', 'borderLeftColor', 'borderLeftStyle', 'borderLeftWidth', 'borderRight', 'borderRightColor', 'borderRightStyle', 'borderRightWidth', 'borderStyle', 'borderTop', 'borderTopColor', 'borderTopStyle', 'borderTopWidth', 'borderWidth'],
	      'borderImage': ['borderImageOutset', 'borderImageRepeat', 'borderImageSlice', 'borderImageSource', 'borderImageWidth'],
	      'borderRadius': ['borderBottomLeftRadius', 'borderBottomRightRadius', 'borderTopLeftRadius', 'borderTopRightRadius'],
	      'font': ['fontFamily', 'fontKerning', 'fontSize', 'fontStretch', 'fontStyle', 'fontVariant', 'fontVariantLigatures', 'fontWeight', 'lineHeight'],
	      'listStyle': ['listStyleImage', 'listStylePosition', 'listStyleType'],
	      'margin': ['marginBottom', 'marginLeft', 'marginRight', 'marginTop'],
	      'padding': ['paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop'],
	      'transition': ['transitionDelay', 'transitionDuration', 'transitionProperty', 'transitionTimingFunction']
	    };
	
	    checkProps = function (config /*: PluginConfig*/) /*: PluginResult*/ {
	      var componentName = config.componentName;
	      var style = config.style;
	
	      if (typeof style !== 'object' || !style) {
	        return;
	      }
	
	      var styleKeys = Object.keys(style);
	      styleKeys.forEach(function (styleKey) {
	        if (Array.isArray(shorthandPropertyExpansions[styleKey]) && shorthandPropertyExpansions[styleKey].some(function (sp) {
	          return styleKeys.indexOf(sp) !== -1;
	        })) {
	          if (process.env.NODE_ENV !== 'production') {
	            /* eslint-disable no-console */
	            console.warn('Radium: property "' + styleKey + '" in style object', style, ': do not mix longhand and ' + 'shorthand properties in the same style object. Check the render ' + 'method of ' + componentName + '.', 'See https://github.com/FormidableLabs/radium/issues/95 for more ' + 'information.');
	            /* eslint-enable no-console */
	          }
	        }
	      });
	
	      styleKeys.forEach(function (k) {
	        return checkProps(_extends({}, config, { style: style[k] }));
	      });
	      return;
	    };
	  })();
	}
	
	exports['default'] = checkProps;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 33 */
/***/ function(module, exports) {

	/* @flow */
	
	'use strict';
	
	exports.__esModule = true;
	
	// Convenient syntax for multiple styles: `style={[style1, style2, etc]}`
	// Ignores non-objects, so you can do `this.state.isCool && styles.cool`.
	/*:: import type {PluginConfig, PluginResult} from '.';*/var mergeStyleArrayPlugin = function mergeStyleArrayPlugin(_ref /*: PluginConfig*/) /*: PluginResult*/ {
	  var style = _ref.style;
	  var mergeStyles = _ref.mergeStyles;
	
	  var newStyle = Array.isArray(style) ? mergeStyles(style) : style;
	  return { style: newStyle };
	};
	
	exports['default'] = mergeStyleArrayPlugin;
	module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/* @flow */
	
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = prefixPlugin;
	
	var _prefixer = __webpack_require__(35);
	
	/*:: import type {PluginConfig, PluginResult} from '.';*/
	function prefixPlugin(_ref /*: PluginConfig*/) /*: PluginResult*/ {
	  var componentName = _ref.componentName;
	  var config = _ref.config;
	  var style = _ref.style;
	
	  var newStyle = _prefixer.getPrefixedStyle(style, componentName, config.userAgent);
	  return { style: newStyle };
	}
	
	module.exports = exports['default'];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Based on https://github.com/jsstyles/css-vendor, but without having to
	 * convert between different cases all the time.
	 *
	 * @flow
	 */
	
	'use strict';
	
	exports.__esModule = true;
	exports.getPrefixedStyle = getPrefixedStyle;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _inlineStylePrefixer = __webpack_require__(4);
	
	var _inlineStylePrefixer2 = _interopRequireDefault(_inlineStylePrefixer);
	
	function transformValues(style) {
	  return Object.keys(style).reduce(function (newStyle, key) {
	    var value = style[key];
	    if (Array.isArray(value)) {
	      value = value.join(';' + key + ':');
	    }
	    newStyle[key] = value;
	    return newStyle;
	  }, {});
	}
	
	var hasWarnedAboutUserAgent = false;
	var lastUserAgent = undefined;
	var prefixer = undefined;
	
	// Returns a new style object with vendor prefixes added to property names
	// and values.
	
	function getPrefixedStyle(style /*: Object*/, componentName /*: ?string*/, userAgent /*:: ?: ?string*/) /*: Object*/ {
	  var actualUserAgent = userAgent || global && global.navigator && global.navigator.userAgent;
	
	  if (process.env.NODE_ENV !== 'production') {
	    if (!actualUserAgent && !hasWarnedAboutUserAgent) {
	      /* eslint-disable no-console */
	      console.warn('Radium: userAgent should be supplied for server-side rendering. See ' + 'https://github.com/FormidableLabs/radium/tree/master/docs/api#radium ' + 'for more information.');
	      /* eslint-enable no-console */
	      hasWarnedAboutUserAgent = true;
	    }
	  }
	
	  if (!prefixer || actualUserAgent !== lastUserAgent) {
	    prefixer = new _inlineStylePrefixer2['default'](actualUserAgent);
	    lastUserAgent = actualUserAgent;
	  }
	
	  var prefixedStyle = prefixer.prefix(style);
	  var prefixedStyleWithFallbacks = transformValues(prefixedStyle);
	  return prefixedStyleWithFallbacks;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(5)))

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/** @flow */
	
	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _mouseUpListener = __webpack_require__(37);
	
	var _mouseUpListener2 = _interopRequireDefault(_mouseUpListener);
	
	/*:: import type {PluginConfig, PluginResult} from '.';*/
	
	var _isInteractiveStyleField = function _isInteractiveStyleField(styleFieldName) {
	  return styleFieldName === ':hover' || styleFieldName === ':active' || styleFieldName === ':focus';
	};
	
	var resolveInteractionStyles = function resolveInteractionStyles(config /*: PluginConfig*/) /*: PluginResult*/ {
	  var ExecutionEnvironment = config.ExecutionEnvironment;
	  var getComponentField = config.getComponentField;
	  var getState = config.getState;
	  var mergeStyles = config.mergeStyles;
	  var props = config.props;
	  var setState = config.setState;
	  var style = config.style;
	
	  var newComponentFields = {};
	  var newProps = {};
	
	  // Only add handlers if necessary
	  if (style[':hover']) {
	    (function () {
	      // Always call the existing handler if one is already defined.
	      // This code, and the very similar ones below, could be abstracted a bit
	      // more, but it hurts readability IMO.
	      var existingOnMouseEnter = props.onMouseEnter;
	      newProps.onMouseEnter = function (e) {
	        existingOnMouseEnter && existingOnMouseEnter(e);
	        setState(':hover', true);
	      };
	
	      var existingOnMouseLeave = props.onMouseLeave;
	      newProps.onMouseLeave = function (e) {
	        existingOnMouseLeave && existingOnMouseLeave(e);
	        setState(':hover', false);
	      };
	    })();
	  }
	
	  if (style[':active']) {
	    (function () {
	      var existingOnMouseDown = props.onMouseDown;
	      newProps.onMouseDown = function (e) {
	        existingOnMouseDown && existingOnMouseDown(e);
	        newComponentFields._lastMouseDown = Date.now();
	        setState(':active', 'viamousedown');
	      };
	
	      var existingOnKeyDown = props.onKeyDown;
	      newProps.onKeyDown = function (e) {
	        existingOnKeyDown && existingOnKeyDown(e);
	        if (e.key === ' ' || e.key === 'Enter') {
	          setState(':active', 'viakeydown');
	        }
	      };
	
	      var existingOnKeyUp = props.onKeyUp;
	      newProps.onKeyUp = function (e) {
	        existingOnKeyUp && existingOnKeyUp(e);
	        if (e.key === ' ' || e.key === 'Enter') {
	          setState(':active', false);
	        }
	      };
	    })();
	  }
	
	  if (style[':focus']) {
	    (function () {
	      var existingOnFocus = props.onFocus;
	      newProps.onFocus = function (e) {
	        existingOnFocus && existingOnFocus(e);
	        setState(':focus', true);
	      };
	
	      var existingOnBlur = props.onBlur;
	      newProps.onBlur = function (e) {
	        existingOnBlur && existingOnBlur(e);
	        setState(':focus', false);
	      };
	    })();
	  }
	
	  if (style[':active'] && !getComponentField('_radiumMouseUpListener') && ExecutionEnvironment.canUseEventListeners) {
	    newComponentFields._radiumMouseUpListener = _mouseUpListener2['default'].subscribe(function () {
	      Object.keys(getComponentField('state')._radiumStyleState).forEach(function (key) {
	        if (getState(':active', key) === 'viamousedown') {
	          setState(':active', false, key);
	        }
	      });
	    });
	  }
	
	  // Merge the styles in the order they were defined
	  var interactionStyles = Object.keys(style).filter(function (name) {
	    return _isInteractiveStyleField(name) && getState(name);
	  }).map(function (name) {
	    return style[name];
	  });
	
	  var newStyle = mergeStyles([style].concat(interactionStyles));
	
	  // Remove interactive styles
	  newStyle = Object.keys(newStyle).reduce(function (styleWithoutInteractions, name) {
	    if (!_isInteractiveStyleField(name)) {
	      styleWithoutInteractions[name] = newStyle[name];
	    }
	    return styleWithoutInteractions;
	  }, {});
	
	  return {
	    componentFields: newComponentFields,
	    props: newProps,
	    style: newStyle
	  };
	};
	
	exports['default'] = resolveInteractionStyles;
	module.exports = exports['default'];

/***/ },
/* 37 */
/***/ function(module, exports) {

	/* @flow */
	
	'use strict';
	
	exports.__esModule = true;
	var _callbacks = [];
	var _mouseUpListenerIsActive = false;
	
	function _handleMouseUp() {
	  _callbacks.forEach(function (callback) {
	    callback();
	  });
	}
	
	var subscribe = function subscribe(callback /*: () => void*/) /*: {remove: () => void}*/ {
	  if (_callbacks.indexOf(callback) === -1) {
	    _callbacks.push(callback);
	  }
	
	  if (!_mouseUpListenerIsActive) {
	    window.addEventListener('mouseup', _handleMouseUp);
	    _mouseUpListenerIsActive = true;
	  }
	
	  return {
	    remove: function remove() {
	      var index = _callbacks.indexOf(callback);
	      _callbacks.splice(index, 1);
	
	      if (_callbacks.length === 0 && _mouseUpListenerIsActive) {
	        window.removeEventListener('mouseup', _handleMouseUp);
	        _mouseUpListenerIsActive = false;
	      }
	    }
	  };
	};
	
	exports['default'] = {
	  subscribe: subscribe,
	  __triggerForTests: _handleMouseUp
	};
	module.exports = exports['default'];

/***/ },
/* 38 */
/***/ function(module, exports) {

	/** @flow */
	
	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = resolveMediaQueries;
	
	/*:: import type {MatchMediaType} from '../config';*/
	/*:: import type {PluginConfig, PluginResult} from '.';*/
	
	var _windowMatchMedia = undefined;
	var _getWindowMatchMedia = function _getWindowMatchMedia(ExecutionEnvironment) {
	  if (_windowMatchMedia === undefined) {
	    _windowMatchMedia = !!ExecutionEnvironment.canUseDOM && !!window && !!window.matchMedia && function (mediaQueryString) {
	      return window.matchMedia(mediaQueryString);
	    } || null;
	  }
	  return _windowMatchMedia;
	};
	
	function resolveMediaQueries(_ref /*: PluginConfig*/) /*: PluginResult*/ {
	  var ExecutionEnvironment = _ref.ExecutionEnvironment;
	  var getComponentField = _ref.getComponentField;
	  var getGlobalState = _ref.getGlobalState;
	  var config = _ref.config;
	  var mergeStyles = _ref.mergeStyles;
	  var setState = _ref.setState;
	  var style = _ref.style;
	
	  var newComponentFields = {};
	  var newStyle = style;
	  var matchMedia /*: ?MatchMediaType*/ = config.matchMedia || _getWindowMatchMedia(ExecutionEnvironment);
	  if (!matchMedia) {
	    return newStyle;
	  }
	
	  var mediaQueryListByQueryString = getGlobalState('mediaQueryListByQueryString') || {};
	
	  Object.keys(style).filter(function (name) {
	    return name.indexOf('@media') === 0;
	  }).map(function (query) {
	    var mediaQueryStyles = style[query];
	    query = query.replace('@media ', '');
	
	    // Create a global MediaQueryList if one doesn't already exist
	    var mql = mediaQueryListByQueryString[query];
	    if (!mql && matchMedia) {
	      mediaQueryListByQueryString[query] = mql = matchMedia(query);
	    }
	
	    var listenersByQuery = getComponentField('_radiumMediaQueryListenersByQuery');
	
	    if (!listenersByQuery || !listenersByQuery[query]) {
	      (function () {
	        var listener = function listener() {
	          return setState(query, mql.matches, '_all');
	        };
	        mql.addListener(listener);
	        newComponentFields._radiumMediaQueryListenersByQuery = _extends({}, listenersByQuery);
	        newComponentFields._radiumMediaQueryListenersByQuery[query] = {
	          remove: function remove() {
	            mql.removeListener(listener);
	          }
	        };
	      })();
	    }
	
	    // Apply media query states
	    if (mql.matches) {
	      newStyle = mergeStyles([newStyle, mediaQueryStyles]);
	    }
	  });
	
	  // Remove media queries
	  newStyle = Object.keys(newStyle).reduce(function (styleWithoutMedia, key) {
	    if (key.indexOf('@media') !== 0) {
	      styleWithoutMedia[key] = newStyle[key];
	    }
	    return styleWithoutMedia;
	  }, {});
	
	  return {
	    componentFields: newComponentFields,
	    globalState: { mediaQueryListByQueryString: mediaQueryListByQueryString },
	    style: newStyle
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Based on code that is Copyright 2013-2015, Facebook, Inc.
	  All rights reserved.
	*/
	
	(function () {
		'use strict';
	
		var canUseDOM = !!(
			typeof window !== 'undefined' &&
			window.document &&
			window.document.createElement
		);
	
		var ExecutionEnvironment = {
	
			canUseDOM: canUseDOM,
	
			canUseWorkers: typeof Worker !== 'undefined',
	
			canUseEventListeners:
				canUseDOM && !!(window.addEventListener || window.attachEvent),
	
			canUseViewport: canUseDOM && !!window.screen
	
		};
	
		if (true) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return ExecutionEnvironment;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = ExecutionEnvironment;
		} else {
			window.ExecutionEnvironment = ExecutionEnvironment;
		}
	
	}());


/***/ },
/* 40 */
/***/ function(module, exports) {

	/* @flow */
	
	"use strict";
	
	exports.__esModule = true;
	var allPrintStyles = {};
	var listeners = [];
	
	function subscribe(listener /*: () => void*/) /*: {remove: () => void}*/ {
	  if (listeners.indexOf(listener) === -1) {
	    listeners.push(listener);
	  }
	
	  return {
	    remove: function remove() {
	      var listenerIndex = listeners.indexOf(listener);
	
	      if (listenerIndex > -1) {
	        listeners.splice(listenerIndex, 1);
	      }
	    }
	  };
	}
	
	function _emitChange() {
	  listeners.forEach(function (listener) {
	    return listener();
	  });
	}
	
	function _appendImportantToEachValue(styleObj) {
	  var importantStyleObj = {};
	
	  Object.keys(styleObj).forEach(function (key) {
	    var value = styleObj[key];
	
	    // This breaks unitless values but they'll be deprecated soon anyway
	    // https://github.com/facebook/react/issues/1873
	    value = value + " !important";
	    importantStyleObj[key] = value;
	  });
	
	  return importantStyleObj;
	}
	
	function addPrintStyles(Component /*: constructor*/) {
	  if (!Component.printStyles) {
	    return;
	  }
	
	  var printStyleClass = {};
	
	  Object.keys(Component.printStyles).forEach(function (key) {
	    var styles = Component.printStyles[key];
	    var className = "Radium-" + Component.displayName + "-" + key;
	    allPrintStyles["." + className] = _appendImportantToEachValue(styles);
	    printStyleClass[key] = className;
	  });
	
	  // Allows for lazy loading of JS that then calls Radium to update the
	  // print styles
	  _emitChange();
	  return printStyleClass;
	}
	
	function getPrintStyles() /*: Object*/ {
	  return allPrintStyles;
	}
	
	exports["default"] = {
	  addPrintStyles: addPrintStyles,
	  getPrintStyles: getPrintStyles,
	  subscribe: subscribe
	};
	module.exports = exports["default"];

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _react = __webpack_require__(20);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styleJs = __webpack_require__(42);
	
	var _styleJs2 = _interopRequireDefault(_styleJs);
	
	var _printStylesJs = __webpack_require__(40);
	
	var _printStylesJs2 = _interopRequireDefault(_printStylesJs);
	
	var PrintStyle = _react2['default'].createClass({
	  displayName: 'PrintStyle',
	
	  getInitialState: function getInitialState() {
	    return this._getStylesState();
	  },
	
	  componentDidMount: function componentDidMount() {
	    this.subscription = _printStylesJs2['default'].subscribe(this._onChange);
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    this.subscription.remove();
	  },
	
	  _onChange: function _onChange() {
	    this.setState(this._getStylesState());
	  },
	
	  _getStylesState: function _getStylesState() {
	    return {
	      styles: _printStylesJs2['default'].getPrintStyles()
	    };
	  },
	
	  render: function render() {
	    return _react2['default'].createElement(_styleJs2['default'], { rules: {
	        mediaQueries: {
	          print: this.state.styles
	        }
	      } });
	  }
	});
	
	exports['default'] = PrintStyle;
	module.exports = exports['default'];

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/* @flow */
	
	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _camelCasePropsToDashCase = __webpack_require__(43);
	
	var _camelCasePropsToDashCase2 = _interopRequireDefault(_camelCasePropsToDashCase);
	
	var _createMarkupForStyles = __webpack_require__(44);
	
	var _createMarkupForStyles2 = _interopRequireDefault(_createMarkupForStyles);
	
	var _prefixer = __webpack_require__(35);
	
	var _react = __webpack_require__(20);
	
	var _react2 = _interopRequireDefault(_react);
	
	var buildCssString = function buildCssString(selector /*: string*/, rules /*: Object*/, userAgent /*: ?string*/) /*: string*/ {
	  if (!selector || !rules) {
	    return '';
	  }
	
	  var prefixedRules = _prefixer.getPrefixedStyle(rules, 'Style', userAgent);
	  var cssPrefixedRules = _camelCasePropsToDashCase2['default'](prefixedRules);
	  var serializedRules = _createMarkupForStyles2['default'](cssPrefixedRules);
	
	  return selector + '{' + serializedRules + '}';
	};
	
	var Style = _react2['default'].createClass({
	  displayName: 'Style',
	
	  propTypes: {
	    rules: _react2['default'].PropTypes.object,
	    scopeSelector: _react2['default'].PropTypes.string
	  },
	
	  contextTypes: {
	    radiumConfig: _react2['default'].PropTypes.object
	  },
	
	  getDefaultProps: function getDefaultProps() /*: {scopeSelector: string}*/ {
	    return {
	      prefix: _prefixer.getPrefixedStyle,
	      scopeSelector: ''
	    };
	  },
	
	  _buildStyles: function _buildStyles(styles /*: Object*/) /*: string*/ {
	    var _this = this;
	
	    return Object.keys(styles).reduce(function (accumulator, selector) {
	      var rules = styles[selector];
	
	      if (selector === 'mediaQueries') {
	        accumulator += _this._buildMediaQueryString(rules);
	      } else {
	        var completeSelector = (_this.props.scopeSelector ? _this.props.scopeSelector + ' ' : '') + selector;
	        accumulator += buildCssString(completeSelector, rules, _this.context && _this.context.radiumConfig && _this.context.radiumConfig.userAgent);
	      }
	
	      return accumulator;
	    }, '');
	  },
	
	  _buildMediaQueryString: function _buildMediaQueryString(stylesByMediaQuery /*: {[mediaQuery: string]: Object}*/) /*: string*/ {
	    var _this2 = this;
	
	    var contextMediaQueries = this._getContextMediaQueries();
	    var mediaQueryString = '';
	
	    Object.keys(stylesByMediaQuery).forEach(function (query) {
	      var completeQuery = contextMediaQueries[query] ? contextMediaQueries[query] : query;
	      mediaQueryString += '@media ' + completeQuery + '{' + _this2._buildStyles(stylesByMediaQuery[query]) + '}';
	    });
	
	    return mediaQueryString;
	  },
	
	  _getContextMediaQueries: function _getContextMediaQueries() /*: {[mediaQuery: string]: Object}*/ {
	    var _this3 = this;
	
	    var contextMediaQueries = {};
	    if (this.context && this.context.mediaQueries) {
	      Object.keys(this.context.mediaQueries).forEach(function (query) {
	        contextMediaQueries[query] = _this3.context.mediaQueries[query].media;
	      });
	    }
	
	    return contextMediaQueries;
	  },
	
	  render: function render() /*: ?ReactElement*/ {
	    if (!this.props.rules) {
	      return null;
	    }
	
	    var styles = this._buildStyles(this.props.rules);
	
	    return _react2['default'].createElement('style', { dangerouslySetInnerHTML: { __html: styles } });
	  }
	});
	
	exports['default'] = Style;
	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports) {

	/* @flow */
	
	'use strict';
	
	exports.__esModule = true;
	var _camelCaseRegex = /([a-z])?([A-Z])/g;
	
	var _camelCaseReplacer = function _camelCaseReplacer(match, p1, p2) {
	  return (p1 || '') + '-' + p2.toLowerCase();
	};
	
	var _camelCaseToDashCase = function _camelCaseToDashCase(s) {
	  return s.replace(_camelCaseRegex, _camelCaseReplacer);
	};
	
	var camelCasePropsToDashCase = function camelCasePropsToDashCase(prefixedStyle /*: Object*/) /*: Object*/ {
	  // Since prefix is expected to work on inline style objects, we must
	  // translate the keys to dash case for rendering to CSS.
	  return Object.keys(prefixedStyle).reduce(function (result, key) {
	    var dashCaseKey = _camelCaseToDashCase(key);
	
	    // Fix IE vendor prefix
	    if (/^ms-/.test(dashCaseKey)) {
	      dashCaseKey = '-' + dashCaseKey;
	    }
	
	    result[dashCaseKey] = prefixedStyle[key];
	    return result;
	  }, {});
	};
	
	exports['default'] = camelCasePropsToDashCase;
	module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports) {

	/* @flow */
	
	'use strict';
	
	exports.__esModule = true;
	var createMarkupForStyles = function createMarkupForStyles(style /*: Object*/) /*: string*/ {
	  var spaces /*: string*/ = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
	
	  return Object.keys(style).map(function (property) {
	    return spaces + property + ': ' + style[property] + ';';
	  }).join('\n');
	};
	
	exports['default'] = createMarkupForStyles;
	module.exports = exports['default'];

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	/* @flow */
	
	'use strict';
	
	exports.__esModule = true;
	exports['default'] = keyframes;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _camelCasePropsToDashCase = __webpack_require__(43);
	
	var _camelCasePropsToDashCase2 = _interopRequireDefault(_camelCasePropsToDashCase);
	
	var _createMarkupForStyles = __webpack_require__(44);
	
	var _createMarkupForStyles2 = _interopRequireDefault(_createMarkupForStyles);
	
	var _prefixer = __webpack_require__(35);
	
	var _exenv = __webpack_require__(39);
	
	var _exenv2 = _interopRequireDefault(_exenv);
	
	var isAnimationSupported = false;
	var keyframesPrefixed = 'keyframes';
	
	if (_exenv2['default'].canUseDOM) {
	  (function () {
	    // Animation feature detection and keyframes prefixing from MDN:
	    // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Detecting_CSS_animation_support
	    var domPrefixes = ['Webkit', 'Moz', 'O', 'ms'];
	    var element = (document.createElement('div') /*: any*/);
	
	    if (element.style.animationName !== undefined) {
	      isAnimationSupported = true;
	    } else {
	      domPrefixes.some(function (prefix) {
	        if (element.style[prefix + 'AnimationName'] !== undefined) {
	          keyframesPrefixed = '-' + prefix.toLowerCase() + '-keyframes';
	          isAnimationSupported = true;
	          return true;
	        }
	        return false;
	      });
	    }
	  })();
	}
	
	var animationIndex = 1;
	var animationStyleSheet = null;
	
	if (isAnimationSupported) {
	  animationStyleSheet = (document.createElement('style') /*: any*/);
	  document.head.appendChild(animationStyleSheet);
	}
	
	// Simple animation helper that injects CSS into a style object containing the
	// keyframes, and returns a string with the generated animation name.
	
	function keyframes(keyframeRules /*: {[percentage: string]: {[key: string]: string|number}}*/, componentName /*:: ?: string*/) /*: string*/ {
	  var prefix /*: (style: Object, componentName: ?string) => Object*/ = arguments.length <= 2 || arguments[2] === undefined ? _prefixer.getPrefixedStyle : arguments[2];
	
	  var name = 'Animation' + animationIndex;
	  animationIndex += 1;
	
	  if (!isAnimationSupported) {
	    return name;
	  }
	
	  var rule = '@' + keyframesPrefixed + ' ' + name + ' {\n' + Object.keys(keyframeRules).map(function (percentage) {
	    var props = keyframeRules[percentage];
	    var prefixedProps = prefix(props, componentName);
	    var cssPrefixedProps = _camelCasePropsToDashCase2['default'](prefixedProps);
	    var serializedProps = _createMarkupForStyles2['default'](cssPrefixedProps, '  ');
	    return '  ' + percentage + ' {\n  ' + serializedProps + '\n  }';
	  }).join('\n') + '\n}\n';
	
	  // for flow
	  /* istanbul ignore next */
	  if (!animationStyleSheet) {
	    throw new Error('keyframes not initialized properly');
	  }
	
	  animationStyleSheet.sheet.insertRule(rule, animationStyleSheet.sheet.cssRules.length);
	  return name;
	}
	
	module.exports = exports['default'];

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/*******************************************************************************
	 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
	 * material contains unpublished, copyrighted work including confidential and
	 * proprietary information of Rapid7.
	 ******************************************************************************/
	
	/*!
	 * Sqwish - a CSS Compressor
	 * Copyright Dustin Diaz 2011
	 * https://github.com/ded/sqwish
	 * License MIT
	 */
	
	"use strict";
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _utils = __webpack_require__(17);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function strict_css(css) {
	    // now some super fun funky shit where we remove duplicate declarations
	    // into combined rules
	
	    // store global dict of all rules
	    var ruleList = {},
	        rules = css.match(/([^{]+\{[^}]+\})+?/g);
	
	    // lets find the dups
	    _utils2["default"].forEach(rules, function (rule) {
	        // break rule into selector|declaration parts
	        var parts = rule.match(/([^{]+)\{([^}]+)/),
	            selector = parts[1],
	            declarations = parts[2];
	
	        // start new list if it wasn't created already
	        if (!ruleList[selector]) {
	            ruleList[selector] = [];
	        }
	
	        declarations = declarations.split(";");
	
	        // filter out duplicate properties
	        ruleList[selector] = ruleList[selector].filter(function (decl) {
	            var prop = decl.match(/[^:]+/)[0];
	
	            // pre-existing properties are not wanted anymore
	            return !declarations.some(function (dec) {
	                // must include "^" as to not confuse "color" with "border-color" etc.
	                return dec.match(new RegExp("^" + prop.replace(/[-\/\^$*+?.()|[]{}]/g, "\$&") + ":"));
	            });
	        });
	
	        // latter takes presedence :)
	        ruleList[selector] = ruleList[selector].concat(declarations);
	
	        // still dups? just in case
	        ruleList[selector] = _utils2["default"].unique(ruleList[selector]);
	    });
	
	    // reset css because we"re gonna recreate the whole shabang.
	    css = "";
	
	    _utils2["default"].forIn(ruleList, function (value, selector) {
	        var joinedRuleList = value.join(";");
	
	        css += selector + "{" + joinedRuleList.replace(/;$/, "") + "}";
	    });
	
	    return css;
	}
	
	function sqwish(css, strict) {
	    // allow /*! bla */ style comments to retain copyrights etc.
	    var comments = css.match(/\/\*![\s\S]+?\*\//g);
	
	    css = css.trim() // give it a solid trimming to start
	
	    // comments
	    .replace(/\/\*[\s\S]+?\*\//g, "")
	
	    // line breaks and carriage returns
	    .replace(/[\n\r]/g, "")
	
	    // space between selectors, declarations, properties and values
	    .replace(/\s*([:;,{}])\s*/g, "$1")
	
	    // replace multiple spaces with single spaces
	    .replace(/\s+/g, " ")
	
	    // space between last declaration and end of rule
	    // also remove trailing semi-colons on last declaration
	    .replace(/;}/g, "}")
	
	    // this is important
	    .replace(/\s+(!important)/g, "$1")
	
	    // convert longhand hex to shorthand hex
	    .replace(/#([a-fA-F0-9])\1([a-fA-F0-9])\2([a-fA-F0-9])\3(?![a-fA-F0-9])/g, "#$1$2$3")
	    // Restore Microsoft longhand hex
	    .replace(/(Microsoft[^;}]*)#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])(?![a-fA-F0-9])/g, "$1#$2$2$3$3$4$4")
	
	    // replace longhand values with shorthand "5px 5px 5px 5px" => "5px"
	    .replace(/\b(\d+[a-z]{2}) \1 \1 \1/gi, "$1")
	
	    // replace double-specified longhand values with shorthand "5px 2px 5px 2px" => "5px 2px"
	    .replace(/\b(\d+[a-z]{2}) (\d+[a-z]{2}) \1 \2/gi, "$1 $2")
	
	    // replace 0px with 0
	    .replace(/([\s|:])[0]+px/g, "$10");
	
	    if (strict) {
	        css = strict_css(css);
	    }
	
	    // put back in copyrights
	    if (comments) {
	        comments = comments ? comments.join("\n") : "";
	        css = comments + "\n" + css;
	    }
	
	    return css;
	}
	
	exports["default"] = function (css, strict) {
	    return sqwish(css, strict);
	};
	
	module.exports = exports["default"];

/***/ },
/* 47 */
/***/ function(module, exports) {

	/*******************************************************************************
	 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
	 * material contains unpublished, copyrighted work including confidential and
	 * proprietary information of Rapid7.
	 ******************************************************************************/
	
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = ["columnCount", "columns", "counterIncrement", "counterReset", "flexGrow", "flexShrink", "fontWeight", "lineHeight", "opacity", "order", "pitchRange", "richness", "stress", "volume", "zIndex"];
	module.exports = exports["default"];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=bix.js.map