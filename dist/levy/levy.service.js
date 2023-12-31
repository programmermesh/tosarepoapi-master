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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LevyService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("typeorm");
var levy_entity_1 = require("./levy.entity");
var typeorm_2 = require("@nestjs/typeorm");
var LevyService = exports.LevyService = /** @class */ (function () {
    function LevyService(levyRepository) {
        this.levyRepository = levyRepository;
    }
    LevyService.prototype.showAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var levy;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.levyRepository.find()];
                    case 1:
                        levy = _a.sent();
                        if (!levy.length) {
                            return [2 /*return*/, {
                                    ResponseCode: '03',
                                    ResponseDescription: 'No record found',
                                }];
                        }
                        return [2 /*return*/, levy];
                }
            });
        });
    };
    LevyService.prototype.create = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var levy, levydata;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.levyRepository.find()];
                    case 1:
                        levy = (_a.sent()).filter(function (x) {
                            return x.apartmentType === data.apartmentType && x.levyType === data.levyType;
                        });
                        if (levy.length) {
                            return [2 /*return*/, {
                                    ResponseCode: '99',
                                    ResponseDescription: 'Already Exist',
                                }];
                        }
                        levydata = this.levyRepository.create(data);
                        return [4 /*yield*/, this.levyRepository.save(data)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, {
                                levy: levydata,
                                ResponseCode: '00',
                                ResponseDescription: 'Levy created succesfully',
                            }];
                }
            });
        });
    };
    LevyService.prototype.find = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var levy;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.levyRepository.findOne(id)];
                    case 1:
                        levy = _a.sent();
                        if (!levy) {
                            throw new common_1.HttpException('Not found', common_1.HttpStatus.NOT_FOUND);
                        }
                        return [2 /*return*/, levy];
                }
            });
        });
    };
    LevyService.prototype.getLevyByApartmentType = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var levy;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.levyRepository.find()];
                    case 1:
                        levy = (_a.sent()).filter(function (x) {
                            return x.apartmentType === data.apartmentType && x.levyType === data.levyType;
                        });
                        if (!levy.length) {
                            return [2 /*return*/, {
                                    ResponseCode: '99',
                                    ResponseDescription: 'No record found',
                                }];
                        }
                        return [2 /*return*/, {
                                amount: levy,
                                ResponseCode: '00',
                                ResponseDescription: 'Succesfully',
                            }];
                }
            });
        });
    };
    LevyService.prototype.updateLevyById = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var levy, levydata, check;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.find(id)];
                    case 1:
                        levy = _a.sent();
                        levydata = [levy];
                        return [4 /*yield*/, this.levyRepository.find()];
                    case 2:
                        check = (_a.sent()).filter(function (x) {
                            return x.apartmentType === data.apartmentType && x.levyType === data.levyType;
                        });
                        if (check.length === levydata.length) {
                            return [2 /*return*/, {
                                    ResponseCode: '03',
                                    ResponseDescription: 'Already Exist',
                                }];
                        }
                        return [4 /*yield*/, this.levyRepository.update(id, data)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.find(id)];
                    case 4:
                        levy = _a.sent();
                        return [2 /*return*/, {
                                resident: levy,
                                ResponseCode: '00',
                                ResponseDescription: 'Levy updated succesfully',
                            }];
                }
            });
        });
    };
    LevyService.prototype.deleteLevyById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var levy;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.find(id)];
                    case 1:
                        levy = _a.sent();
                        return [4 /*yield*/, this.levyRepository.delete(id)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, {
                                resident: levy,
                                ResponseCode: '00',
                                ResponseDescription: 'Levy deleted succesfully',
                            }];
                }
            });
        });
    };
    LevyService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_2.InjectRepository)(levy_entity_1.LevyEntity)),
        __metadata("design:paramtypes", [typeorm_1.Repository])
    ], LevyService);
    return LevyService;
}());
//# sourceMappingURL=levy.service.js.map