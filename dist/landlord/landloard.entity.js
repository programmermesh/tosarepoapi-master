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
exports.LandlordEntity = void 0;
var typeorm_1 = require("typeorm");
var LandlordEntity = /** @class */ (function () {
    function LandlordEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], LandlordEntity.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], LandlordEntity.prototype, "lastname", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], LandlordEntity.prototype, "other_names", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], LandlordEntity.prototype, "gender", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], LandlordEntity.prototype, "address", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], LandlordEntity.prototype, "phone1", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], LandlordEntity.prototype, "phone2", void 0);
    LandlordEntity = __decorate([
        typeorm_1.Entity('landlord')
    ], LandlordEntity);
    return LandlordEntity;
}());
exports.LandlordEntity = LandlordEntity;
//# sourceMappingURL=landloard.entity.js.map