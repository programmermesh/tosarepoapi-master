"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalonModule = void 0;
var common_1 = require("@nestjs/common");
var salon_controller_1 = require("./salon.controller");
var salon_service_1 = require("./salon.service");
var salon_entity_1 = require("./salon.entity");
var typeorm_1 = require("@nestjs/typeorm");
var SalonModule = exports.SalonModule = /** @class */ (function () {
    function SalonModule() {
    }
    SalonModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([salon_entity_1.SalonEntity])],
            controllers: [salon_controller_1.SalonController],
            providers: [salon_service_1.SalonService],
        })
    ], SalonModule);
    return SalonModule;
}());
//# sourceMappingURL=salon.module.js.map