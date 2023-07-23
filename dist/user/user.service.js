"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
        while (_) try {
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
exports.UserService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var user_entity_1 = require("./user.entity");
var typeorm_2 = require("typeorm");
var bcrypt = __importStar(require("bcryptjs"));
var UserService = /** @class */ (function () {
    function UserService(userRepository) {
        this.userRepository = userRepository;
    }
    UserService.prototype.showAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var users, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.find()];
                    case 1:
                        users = _a.sent();
                        result = users.map(function (user) { return user.toResponseObject(false); });
                        return [2 /*return*/, {
                                users: result,
                                ResponseCode: '00',
                                ResponseDescription: 'succesfully',
                            }];
                }
            });
        });
    };
    UserService.prototype.login = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var username, password, user, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        username = data.username, password = data.password;
                        return [4 /*yield*/, this.userRepository.findOne({ where: { username: username } })];
                    case 1:
                        user = _b.sent();
                        _a = !user;
                        if (_a) return [3 /*break*/, 3];
                        return [4 /*yield*/, user.comparePassword(password)];
                    case 2:
                        _a = !(_b.sent());
                        _b.label = 3;
                    case 3:
                        if (_a) {
                            throw new common_1.HttpException('Invalid username/password', common_1.HttpStatus.BAD_REQUEST);
                        }
                        return [2 /*return*/, user.toResponseObject()];
                }
            });
        });
    };
    UserService.prototype.register = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var username, user, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        username = data.username;
                        return [4 /*yield*/, this.userRepository.findOne({ where: { username: username } })];
                    case 1:
                        user = _a.sent();
                        if (user) {
                            return [2 /*return*/, {
                                    ResponseCode: '03',
                                    ResponseDescription: 'Usernames already exists',
                                }];
                            //throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
                        }
                        user = this.userRepository.create(data);
                        return [4 /*yield*/, this.userRepository.save(user)];
                    case 2:
                        _a.sent();
                        result = user.toResponseObject();
                        return [2 /*return*/, {
                                user: result,
                                ResponseCode: '00',
                                ResponseDescription: 'User created succesfully',
                            }];
                }
            });
        });
    };
    UserService.prototype.updateRegister = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var password, user, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        password = data.password;
                        return [4 /*yield*/, this.find(id)];
                    case 1:
                        user = _b.sent();
                        _a = data;
                        return [4 /*yield*/, bcrypt.hash(password, 10)];
                    case 2:
                        _a.password = _b.sent();
                        return [4 /*yield*/, this.userRepository.update(id, data)];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, this.find(id)];
                    case 4:
                        user = _b.sent();
                        return [2 /*return*/, user.toResponseObject()];
                }
            });
        });
    };
    UserService.prototype.find = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.findOne(id)];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            throw new common_1.HttpException('Not found', common_1.HttpStatus.NOT_FOUND);
                        }
                        return [2 /*return*/, user];
                }
            });
        });
    };
    UserService.prototype.deleteUser = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.find(id)];
                    case 1:
                        user = _a.sent();
                        return [4 /*yield*/, this.userRepository.delete(id)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, {
                                resident: user,
                                ResponseCode: '00',
                                ResponseDescription: 'User deleted succesfully',
                            }];
                }
            });
        });
    };
    UserService = __decorate([
        common_1.Injectable(),
        __param(0, typeorm_1.InjectRepository(user_entity_1.UserEntity)),
        __metadata("design:paramtypes", [typeorm_2.Repository])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map