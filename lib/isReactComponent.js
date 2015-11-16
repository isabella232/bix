/*******************************************************************************
 * COPYRIGHT (C) 2015, Rapid7 LLC, Boston, MA, USA. All rights reserved. This
 * material contains unpublished, copyrighted work including confidential and
 * proprietary information of Rapid7.
 ******************************************************************************/

"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _utils = require("./utils");

var _utils2 = _interopRequireDefault(_utils);

exports["default"] = function (obj) {
  return _utils2["default"].isFunction(obj) && Object.getPrototypeOf(obj) === _react2["default"].Component;
};

module.exports = exports["default"];