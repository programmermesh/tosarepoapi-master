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
exports.VisitorEntity = void 0;
var typeorm_1 = require("typeorm");
var VisitorEntity = /** @class */ (function () {
    function VisitorEntity() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], VisitorEntity.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], VisitorEntity.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], VisitorEntity.prototype, "discription", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], VisitorEntity.prototype, "checkin", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Date)
    ], VisitorEntity.prototype, "checkinDate", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], VisitorEntity.prototype, "checkout", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Date)
    ], VisitorEntity.prototype, "checkoutDate", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], VisitorEntity.prototype, "residentId", void 0);
    VisitorEntity = __decorate([
        typeorm_1.Entity('visitor')
    ], VisitorEntity);
    return VisitorEntity;
}());
exports.VisitorEntity = VisitorEntity;
//# sourceMappingURL=visitor.entity.js.map