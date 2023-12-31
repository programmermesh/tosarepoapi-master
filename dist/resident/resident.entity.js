"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
exports.ResidentEntity = void 0;
var typeorm_1 = require("typeorm");
var bcrypt = __importStar(require("bcryptjs"));
var jwt = __importStar(require("jsonwebtoken"));
var ResidentEntity = exports.ResidentEntity = /** @class */ (function () {
    function ResidentEntity() {
    }
    ResidentEntity.prototype.hashPassword = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, bcrypt.hash(this.password, 10)];
                    case 1:
                        _a.password = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ResidentEntity.prototype.toResponseObject = function (showToken) {
        var _a;
        if (showToken === void 0) { showToken = true; }
        var id = (_a = this, _a.id), username = _a.username, token = _a.token, lastname = _a.lastname, other_names = _a.other_names, gender = _a.gender, phone_number1 = _a.phone_number1, phone_number2 = _a.phone_number2, date_of_entry = _a.date_of_entry, dob = _a.dob, employment_status = _a.employment_status, profession = _a.profession, spouse_dob = _a.spouse_dob, spouseName = _a.spouseName, numberOfChildren = _a.numberOfChildren, childrenName = _a.childrenName, houseNumber = _a.houseNumber, houseType = _a.houseType, password = _a.password, type = _a.type, landlordId = _a.landlordId;
        var responseObject = {
            id: id,
            username: username,
            lastname: lastname,
            other_names: other_names,
            gender: gender,
            phone_number1: phone_number1,
            phone_number2: phone_number2,
            date_of_entry: date_of_entry,
            dob: dob,
            employment_status: employment_status,
            profession: profession,
            spouse_dob: spouse_dob,
            spouseName: spouseName,
            numberOfChildren: numberOfChildren,
            childrenName: childrenName,
            houseNumber: houseNumber,
            houseType: houseType,
            password: password,
            type: type,
            landlordId: landlordId,
        };
        if (showToken) {
            responseObject.token = token;
        }
        return responseObject;
    };
    ResidentEntity.prototype.comparePassword = function (attempt) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, bcrypt.compare(attempt, this.password)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Object.defineProperty(ResidentEntity.prototype, "token", {
        get: function () {
            var _a;
            var id = (_a = this, _a.id), username = _a.username;
            return jwt.sign({ id: id, username: username }, process.env.SECRET, { expiresIn: '7d' });
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
        __metadata("design:type", String)
    ], ResidentEntity.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ResidentEntity.prototype, "lastname", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ResidentEntity.prototype, "other_names", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ResidentEntity.prototype, "gender", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ResidentEntity.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ResidentEntity.prototype, "phone_number1", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ResidentEntity.prototype, "phone_number2", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ResidentEntity.prototype, "dob", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ResidentEntity.prototype, "employment_status", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ResidentEntity.prototype, "profession", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ResidentEntity.prototype, "date_of_entry", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ResidentEntity.prototype, "spouse_dob", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ResidentEntity.prototype, "spouseName", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], ResidentEntity.prototype, "numberOfChildren", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ResidentEntity.prototype, "childrenName", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ResidentEntity.prototype, "houseNumber", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ResidentEntity.prototype, "nameOfLandLord", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ResidentEntity.prototype, "streetName", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ResidentEntity.prototype, "houseType", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ResidentEntity.prototype, "username", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ResidentEntity.prototype, "password", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ResidentEntity.prototype, "type", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ResidentEntity.prototype, "landlordId", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], ResidentEntity.prototype, "hashPassword", null);
    ResidentEntity = __decorate([
        (0, typeorm_1.Entity)('resident')
    ], ResidentEntity);
    return ResidentEntity;
}());
//# sourceMappingURL=resident.entity.js.map