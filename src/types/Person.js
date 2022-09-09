"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(o) {
        var _a, _b, _c;
        this.applications = (_a = (o && o.applications)) !== null && _a !== void 0 ? _a : [];
        this.emails = (_b = (o && o.emails)) !== null && _b !== void 0 ? _b : [];
        this.name = (_c = (o && o.name)) !== null && _c !== void 0 ? _c : "";
    }
    return Person;
}());
exports.Person = Person;
