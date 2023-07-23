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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalonController = void 0;
var common_1 = require("@nestjs/common");
var salon_service_1 = require("./salon.service");
var salon_dto_1 = require("./salon.dto");
var swagger_1 = require("@nestjs/swagger");
var validation_pipe_1 = require("../shared/validation.pipe");
var hairstyle_dto_1 = require("../shared/hairstyle.dto");
var SalonController = /** @class */ (function () {
    function SalonController(salonService) {
        this.salonService = salonService;
        this.logger = new common_1.Logger('SalonController');
    }
    SalonController.prototype.addHairTypes = function (hairtypes) {
        this.logger.log(JSON.stringify(hairtypes));
        return this.salonService.addHairTypes(hairtypes);
    };
    SalonController.prototype.showAllPayment = function () {
        return this.salonService.showAll();
    };
    SalonController.prototype.getHairStyleByGender = function (genderHairStyles) {
        this.logger.log(JSON.stringify(genderHairStyles));
        return this.salonService.getHairStyleByGender(genderHairStyles);
    };
    SalonController.prototype.updateHairstyleById = function (id, data) {
        this.logger.log(JSON.stringify(data));
        return this.salonService.updateHairstyleById(id, data);
    };
    SalonController.prototype.deleteHairstyleById = function (id) {
        return this.salonService.deleteHairstyleById(id);
    };
    __decorate([
        common_1.Post(),
        common_1.UsePipes(new validation_pipe_1.ValidationPipe()),
        swagger_1.ApiBody({ type: salon_dto_1.SalonDTO }),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [salon_dto_1.SalonDTO]),
        __metadata("design:returntype", void 0)
    ], SalonController.prototype, "addHairTypes", null);
    __decorate([
        common_1.Get(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SalonController.prototype, "showAllPayment", null);
    __decorate([
        common_1.Post(':genderHairStyles'),
        swagger_1.ApiBody({ type: hairstyle_dto_1.HairstyleDTO }),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [hairstyle_dto_1.HairstyleDTO]),
        __metadata("design:returntype", void 0)
    ], SalonController.prototype, "getHairStyleByGender", null);
    __decorate([
        common_1.Put(':id'),
        common_1.UsePipes(new validation_pipe_1.ValidationPipe()),
        swagger_1.ApiParam({ name: 'id' }),
        swagger_1.ApiBody({ type: salon_dto_1.SalonDTO }),
        __param(0, common_1.Param('id')), __param(1, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], SalonController.prototype, "updateHairstyleById", null);
    __decorate([
        common_1.Delete(':id'),
        swagger_1.ApiParam({ name: 'id' }),
        __param(0, common_1.Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SalonController.prototype, "deleteHairstyleById", null);
    SalonController = __decorate([
        swagger_1.ApiTags('salon'),
        common_1.Controller('salon'),
        __metadata("design:paramtypes", [salon_service_1.SalonService])
    ], SalonController);
    return SalonController;
}());
exports.SalonController = SalonController;
//# sourceMappingURL=saloncontroller.js.map