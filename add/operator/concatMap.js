"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("../../internal/Observable");
var concatMap_1 = require("../../internal/patching/operator/concatMap");
Observable_1.Observable.prototype.concatMap = concatMap_1.concatMap;
//# sourceMappingURL=concatMap.js.map