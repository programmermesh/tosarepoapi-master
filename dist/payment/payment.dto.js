"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentDTO = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var PaymentDTO = /** @class */ (function () {
    function PaymentDTO() {
    }
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], PaymentDTO.prototype, "month", void 0);
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], PaymentDTO.prototype, "pendingPaymentId", void 0);
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], PaymentDTO.prototype, "year", void 0);
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], PaymentDTO.prototype, "status", void 0);
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsInt(),
        __metadata("design:type", Number)
    ], PaymentDTO.prototype, "amount", void 0);
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], PaymentDTO.prototype, "levy", void 0);
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], PaymentDTO.prototype, "houseType", void 0);
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], PaymentDTO.prototype, "houseNumber", void 0);
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], PaymentDTO.prototype, "fullName", void 0);
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], PaymentDTO.prototype, "processed", void 0);
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], PaymentDTO.prototype, "residentId", void 0);
    __decorate([
        swagger_1.ApiProperty(),
        __metadata("design:type", String)
    ], PaymentDTO.prototype, "file", void 0);
    return PaymentDTO;
}());
exports.PaymentDTO = PaymentDTO;
//# sourceMappingURL=payment.dto.js.map