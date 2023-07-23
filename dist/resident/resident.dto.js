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
exports.ResidentUP = exports.ResidentUPO = exports.ResidentRO = exports.LoginDTO = exports.BirthDayDTO = exports.ResidentDTO = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var ResidentDTO = /** @class */ (function () {
    function ResidentDTO() {
    }
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], ResidentDTO.prototype, "lastname", void 0);
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], ResidentDTO.prototype, "other_names", void 0);
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], ResidentDTO.prototype, "gender", void 0);
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], ResidentDTO.prototype, "status", void 0);
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], ResidentDTO.prototype, "phone_number1", void 0);
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], ResidentDTO.prototype, "phone_number2", void 0);
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], ResidentDTO.prototype, "dob", void 0);
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], ResidentDTO.prototype, "employment_status", void 0);
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], ResidentDTO.prototype, "profession", void 0);
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], ResidentDTO.prototype, "date_of_entry", void 0);
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], ResidentDTO.prototype, "spouseName", void 0);
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], ResidentDTO.prototype, "spouse_dob", void 0);
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsInt(),
        __metadata("design:type", Number)
    ], ResidentDTO.prototype, "numberOfChildren", void 0);
    __decorate([
        swagger_1.ApiProperty(),
        __metadata("design:type", String)
    ], ResidentDTO.prototype, "childrenName", void 0);
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsInt(),
        __metadata("design:type", String)
    ], ResidentDTO.prototype, "houseNumber", void 0);
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], ResidentDTO.prototype, "nameOfLandLord", void 0);
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], ResidentDTO.prototype, "streetName", void 0);
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsInt(),
        __metadata("design:type", String)
    ], ResidentDTO.prototype, "houseType", void 0);
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], ResidentDTO.prototype, "username", void 0);
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], ResidentDTO.prototype, "password", void 0);
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], ResidentDTO.prototype, "type", void 0);
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], ResidentDTO.prototype, "landlordId", void 0);
    return ResidentDTO;
}());
exports.ResidentDTO = ResidentDTO;
var BirthDayDTO = /** @class */ (function () {
    function BirthDayDTO() {
    }
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], BirthDayDTO.prototype, "dob", void 0);
    return BirthDayDTO;
}());
exports.BirthDayDTO = BirthDayDTO;
var LoginDTO = /** @class */ (function () {
    function LoginDTO() {
    }
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], LoginDTO.prototype, "username", void 0);
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], LoginDTO.prototype, "password", void 0);
    return LoginDTO;
}());
exports.LoginDTO = LoginDTO;
var ResidentRO = /** @class */ (function () {
    function ResidentRO() {
    }
    return ResidentRO;
}());
exports.ResidentRO = ResidentRO;
var ResidentUPO = /** @class */ (function () {
    function ResidentUPO() {
    }
    return ResidentUPO;
}());
exports.ResidentUPO = ResidentUPO;
var ResidentUP = /** @class */ (function () {
    function ResidentUP() {
    }
    __decorate([
        swagger_1.ApiProperty(),
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], ResidentUP.prototype, "password", void 0);
    return ResidentUP;
}());
exports.ResidentUP = ResidentUP;
//# sourceMappingURL=resident.dto.js.map