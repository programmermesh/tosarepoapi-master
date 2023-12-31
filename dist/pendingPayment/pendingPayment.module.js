"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PendingPaymentModule = void 0;
var common_1 = require("@nestjs/common");
var pendingPayment_controller_1 = require("./pendingPayment.controller");
var pendingPayment_service_1 = require("./pendingPayment.service");
var pendingPayment_entity_1 = require("./pendingPayment.entity");
var typeorm_1 = require("@nestjs/typeorm");
var resident_entity_1 = require("../resident/resident.entity");
var resident_service_1 = require("../resident/resident.service");
var PendingPaymentModule = exports.PendingPaymentModule = /** @class */ (function () {
    function PendingPaymentModule() {
    }
    PendingPaymentModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([pendingPayment_entity_1.PendingPaymentEntity, resident_entity_1.ResidentEntity])],
            controllers: [pendingPayment_controller_1.PendingPaymentController],
            providers: [pendingPayment_service_1.PendingPaymentService, resident_service_1.ResidentService],
        })
    ], PendingPaymentModule);
    return PendingPaymentModule;
}());
//# sourceMappingURL=pendingPayment.module.js.map