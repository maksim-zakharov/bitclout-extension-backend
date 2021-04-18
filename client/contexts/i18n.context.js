"use strict";
exports.__esModule = true;
exports.i18nContext = void 0;
var react_1 = require("react");
var langEN = require("../language/en.json");
var langAr = require("../language/ar.json");
exports.i18nContext = react_1.createContext({ langEN: langEN, langAr: langAr });
