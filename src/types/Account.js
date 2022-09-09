"use strict";
exports.__esModule = true;
exports.Account = void 0;
var Account = /** @class */ (function () {
    function Account(o) {
        var _a, _b, _c;
        this.application = (_a = (o && o.application)) !== null && _a !== void 0 ? _a : "";
        this.emails = (_b = (o && o.emails)) !== null && _b !== void 0 ? _b : [];
        this.name = (_c = (o && o.name)) !== null && _c !== void 0 ? _c : "";
    }
    return Account;
}());
exports.Account = Account;
