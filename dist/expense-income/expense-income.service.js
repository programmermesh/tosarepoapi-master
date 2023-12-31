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
exports.ExpenseIncomeService = void 0;
var common_1 = require("@nestjs/common");
var expense_income_entity_1 = require("./expense-income.entity");
var typeorm_1 = require("typeorm");
var typeorm_2 = require("@nestjs/typeorm");
var ExpenseIncomeService = exports.ExpenseIncomeService = /** @class */ (function () {
    function ExpenseIncomeService(expenseIncomeRepository) {
        this.expenseIncomeRepository = expenseIncomeRepository;
    }
    ExpenseIncomeService.prototype.showAllExpenses = function () {
        return __awaiter(this, void 0, void 0, function () {
            var expense, totalExpense;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.expenseIncomeRepository.find({
                            where: {
                                type: 'Expense',
                            },
                        })];
                    case 1:
                        expense = _a.sent();
                        totalExpense = 0;
                        expense.forEach(function (x) { return (totalExpense += x.amount); });
                        if (!expense)
                            throw new common_1.HttpException('No Record', common_1.HttpStatus.NOT_FOUND);
                        return [2 /*return*/, {
                                totalExpense: totalExpense,
                                expenseIncome: expense,
                                ResponseCode: '00',
                                ResponseDescription: 'Succesfully',
                            }];
                }
            });
        });
    };
    ExpenseIncomeService.prototype.showAllIncomes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var expense, totalIncome;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.expenseIncomeRepository.find({
                            where: {
                                type: 'Income',
                            },
                        })];
                    case 1:
                        expense = _a.sent();
                        totalIncome = 0;
                        expense.forEach(function (x) { return (totalIncome += x.amount); });
                        if (!expense)
                            throw new common_1.HttpException('No Record', common_1.HttpStatus.NOT_FOUND);
                        return [2 /*return*/, {
                                totalIncome: totalIncome,
                                expenseIncome: expense,
                                ResponseCode: '00',
                                ResponseDescription: 'Succesfully',
                            }];
                }
            });
        });
    };
    ExpenseIncomeService.prototype.create = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var expenseIncome;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        expenseIncome = this.expenseIncomeRepository.create(data);
                        return [4 /*yield*/, this.expenseIncomeRepository.save(expenseIncome)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, {
                                expenseIncome: expenseIncome,
                                ResponseCode: '00',
                                ResponseDescription: 'Created succesfully',
                            }];
                }
            });
        });
    };
    ExpenseIncomeService.prototype.find = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var expenseIncome;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.expenseIncomeRepository.findOne(id)];
                    case 1:
                        expenseIncome = _a.sent();
                        if (!expenseIncome) {
                            throw new common_1.HttpException('Not found', common_1.HttpStatus.NOT_FOUND);
                        }
                        return [2 /*return*/, expenseIncome];
                }
            });
        });
    };
    ExpenseIncomeService.prototype.expenseIncomeById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var expenseIncome;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.find(id)];
                    case 1:
                        expenseIncome = _a.sent();
                        return [2 /*return*/, {
                                expenseIncome: expenseIncome,
                                ResponseCode: '00',
                                ResponseDescription: 'Succesfully',
                            }];
                }
            });
        });
    };
    ExpenseIncomeService.prototype.updateExpenseIncomeById = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var expenseIncome;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.find(id)];
                    case 1:
                        expenseIncome = _a.sent();
                        return [4 /*yield*/, this.expenseIncomeRepository.update(id, data)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.find(id)];
                    case 3:
                        expenseIncome = _a.sent();
                        return [2 /*return*/, {
                                expenseIncome: expenseIncome,
                                ResponseCode: '00',
                                ResponseDescription: 'Update succesfully',
                            }];
                }
            });
        });
    };
    ExpenseIncomeService.prototype.deleteExpenseIncomeById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var expenseIncome;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.find(id)];
                    case 1:
                        expenseIncome = _a.sent();
                        return [4 /*yield*/, this.expenseIncomeRepository.delete(id)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, {
                                expenseIncome: expenseIncome,
                                ResponseCode: '00',
                                ResponseDescription: 'Delete succesfully',
                            }];
                }
            });
        });
    };
    ExpenseIncomeService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_2.InjectRepository)(expense_income_entity_1.ExpenseIncomeEntity)),
        __metadata("design:paramtypes", [typeorm_1.Repository])
    ], ExpenseIncomeService);
    return ExpenseIncomeService;
}());
//# sourceMappingURL=expense-income.service.js.map