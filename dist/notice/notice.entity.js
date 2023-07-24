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
exports.NoticeEntity = void 0;
var typeorm_1 = require("typeorm");
var NoticeEntity = exports.NoticeEntity = /** @class */ (function () {
    function NoticeEntity() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
        __metadata("design:type", String)
    ], NoticeEntity.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], NoticeEntity.prototype, "title", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], NoticeEntity.prototype, "content", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({
            type: 'timestamp',
            default: function () { return 'CURRENT_TIMESTAMP(6)'; },
        }),
        __metadata("design:type", Date)
    ], NoticeEntity.prototype, "created", void 0);
    NoticeEntity = __decorate([
        (0, typeorm_1.Entity)('notice')
    ], NoticeEntity);
    return NoticeEntity;
}());
//# sourceMappingURL=notice.entity.js.map