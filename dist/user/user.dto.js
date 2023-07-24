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
exports.UserUP = exports.UserUPO = exports.UserRO = exports.LoginDTO = exports.UserDTO = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var UserDTO = exports.UserDTO = /** @class */ (function () {
    function UserDTO() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], UserDTO.prototype, "username", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], UserDTO.prototype, "password", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], UserDTO.prototype, "lastname", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], UserDTO.prototype, "other_names", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], UserDTO.prototype, "gender", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], UserDTO.prototype, "type", void 0);
    return UserDTO;
}());
var LoginDTO = exports.LoginDTO = /** @class */ (function () {
    function LoginDTO() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], LoginDTO.prototype, "username", void 0);
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], LoginDTO.prototype, "password", void 0);
    return LoginDTO;
}());
var UserRO = /** @class */ (function () {
    function UserRO() {
    }
    return UserRO;
}());
exports.UserRO = UserRO;
var UserUPO = /** @class */ (function () {
    function UserUPO() {
    }
    return UserUPO;
}());
exports.UserUPO = UserUPO;
var UserUP = exports.UserUP = /** @class */ (function () {
    function UserUP() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], UserUP.prototype, "password", void 0);
    return UserUP;
}());
//# sourceMappingURL=user.dto.js.map