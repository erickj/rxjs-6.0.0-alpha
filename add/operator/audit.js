"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("../../internal/Observable");
var audit_1 = require("../../internal/patching/operator/audit");
Observable_1.Observable.prototype.audit = audit_1.audit;
//# sourceMappingURL=audit.js.map