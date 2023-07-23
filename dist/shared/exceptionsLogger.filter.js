"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExceptionsLoggerFilter = void 0;
var common_1 = require("@nestjs/common");
var core_1 = require("@nestjs/core");
var ExceptionsLoggerFilter = /** @class */ (function (_super) {
    __extends(ExceptionsLoggerFilter, _super);
    function ExceptionsLoggerFilter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExceptionsLoggerFilter.prototype.catch = function (exception, host) {
        console.log('Exception thrown', exception);
        _super.prototype.catch.call(this, exception, host);
    };
    ExceptionsLoggerFilter = __decorate([
        common_1.Catch()
    ], ExceptionsLoggerFilter);
    return ExceptionsLoggerFilter;
}(core_1.BaseExceptionFilter));
exports.ExceptionsLoggerFilter = ExceptionsLoggerFilter;
//# sourceMappingURL=exceptionsLogger.filter.js.map