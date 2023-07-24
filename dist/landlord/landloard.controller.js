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
exports.LandlordController = void 0;
var common_1 = require("@nestjs/common");
var landloard_service_1 = require("./landloard.service");
var validation_pipe_1 = require("../shared/validation.pipe");
var swagger_1 = require("@nestjs/swagger");
var landloard_dto_1 = require("./landloard.dto");
var LandlordController = exports.LandlordController = /** @class */ (function () {
    function LandlordController(landlordService) {
        this.landlordService = landlordService;
        this.logger = new common_1.Logger('LandlordController');
    }
    LandlordController.prototype.showAllUsers = function () {
        return this.landlordService.showAll();
    };
    LandlordController.prototype.showAllTenantByLandlordId = function (landlordId) {
        return this.landlordService.showAllTenantByLandlordId(landlordId);
    };
    LandlordController.prototype.register = function (data) {
        return this.landlordService.createLandlord(data);
    };
    LandlordController.prototype.updateRegister = function (id, data) {
        this.logger.log(JSON.stringify(data));
        return this.landlordService.updateLandlordById(id, data);
    };
    LandlordController.prototype.deleteUser = function (id) {
        return this.landlordService.deleteLandlordById(id);
    };
    __decorate([
        (0, common_1.Get)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LandlordController.prototype, "showAllUsers", null);
    __decorate([
        (0, common_1.Get)('/tenant/:landlordId'),
        (0, swagger_1.ApiParam)({ name: 'landlordId' }),
        __param(0, (0, common_1.Param)('landlordId')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], LandlordController.prototype, "showAllTenantByLandlordId", null);
    __decorate([
        (0, common_1.Post)('createLandlord'),
        (0, swagger_1.ApiBody)({ type: landloard_dto_1.LandlordDTO }),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [landloard_dto_1.LandlordDTO]),
        __metadata("design:returntype", void 0)
    ], LandlordController.prototype, "register", null);
    __decorate([
        (0, common_1.Put)(':id'),
        (0, common_1.UsePipes)(new validation_pipe_1.ValidationPipe()),
        (0, swagger_1.ApiParam)({ name: 'id' }),
        (0, swagger_1.ApiBody)({ type: landloard_dto_1.LandlordDTO }),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LandlordController.prototype, "updateRegister", null);
    __decorate([
        (0, common_1.Delete)(':id'),
        (0, swagger_1.ApiParam)({ name: 'id' }),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LandlordController.prototype, "deleteUser", null);
    LandlordController = __decorate([
        (0, swagger_1.ApiTags)('landlords'),
        (0, common_1.Controller)('landlords'),
        __metadata("design:paramtypes", [landloard_service_1.LandlordService])
    ], LandlordController);
    return LandlordController;
}());
//# sourceMappingURL=landloard.controller.js.map