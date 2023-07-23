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
exports.VisitorDTO = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var VisitorDTO = /** @class */ (function () {
    function VisitorDTO() {
    }
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], VisitorDTO.prototype, "name", void 0);
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], VisitorDTO.prototype, "discription", void 0);
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], VisitorDTO.prototype, "residentId", void 0);
    __decorate([
        swagger_1.ApiProperty({
            enum: ['false', 'true'],
            default: 'false',
        }),
        class_validator_1.IsBoolean(),
        __metadata("design:type", Boolean)
    ], VisitorDTO.prototype, "checkin", void 0);
    __decorate([
        swagger_1.ApiProperty({
            enum: ['false', 'true'],
            default: 'false',
        }),
        class_validator_1.IsDate(),
        __metadata("design:type", Boolean)
    ], VisitorDTO.prototype, "checkout", void 0);
    __decorate([
        swagger_1.ApiProperty(),
        __metadata("design:type", Date)
    ], VisitorDTO.prototype, "checkinDate", void 0);
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsDate(),
        __metadata("design:type", Date)
    ], VisitorDTO.prototype, "checkoutDate", void 0);
    return VisitorDTO;
}());
exports.VisitorDTO = VisitorDTO;
//# sourceMappingURL=visitor.dto.js.map