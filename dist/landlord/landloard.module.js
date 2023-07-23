"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LandlordModule = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var resident_entity_1 = require("../resident/resident.entity");
var resident_service_1 = require("../resident/resident.service");
var landloard_controller_1 = require("./landloard.controller");
var landloard_entity_1 = require("./landloard.entity");
var landloard_service_1 = require("./landloard.service");
var LandlordModule = /** @class */ (function () {
    function LandlordModule() {
    }
    LandlordModule = __decorate([
        common_1.Module({
            imports: [typeorm_1.TypeOrmModule.forFeature([landloard_entity_1.LandlordEntity, resident_entity_1.ResidentEntity])],
            controllers: [landloard_controller_1.LandlordController],
            providers: [landloard_service_1.LandlordService, resident_service_1.ResidentService],
        })
    ], LandlordModule);
    return LandlordModule;
}());
exports.LandlordModule = LandlordModule;
//# sourceMappingURL=landloard.module.js.map