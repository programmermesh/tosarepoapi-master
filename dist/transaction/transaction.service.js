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
exports.TransactionService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("typeorm");
var transaction_entity_1 = require("./transaction.entity");
var typeorm_2 = require("@nestjs/typeorm");
var TransactionService = exports.TransactionService = /** @class */ (function () {
    function TransactionService(TransactionRepository) {
        this.TransactionRepository = TransactionRepository;
    }
    TransactionService.prototype.showAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var getAllTransactions;
            return __generator(this, function (_a) {
                getAllTransactions = this.TransactionRepository.find();
                return [2 /*return*/, getAllTransactions];
            });
        });
    };
    TransactionService.prototype.addTransaction = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var addTransaction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        addTransaction = this.TransactionRepository.create(data);
                        return [4 /*yield*/, this.TransactionRepository.save(data)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, {
                                transaction: addTransaction,
                                ResponseCode: '00',
                                ResponseDescription: 'Payment succesfully',
                            }];
                }
            });
        });
    };
    TransactionService.prototype.find = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var transactions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.TransactionRepository.find()];
                    case 1:
                        transactions = _a.sent();
                        if (!transactions.length) {
                            return [2 /*return*/, {
                                    ResponseCode: '03',
                                    ResponseDescription: 'No record found',
                                }];
                        }
                        return [2 /*return*/, transactions];
                }
            });
        });
    };
    TransactionService.prototype.getDailyTransactionSales = function () {
        return __awaiter(this, void 0, void 0, function () {
            var getDailyTransactionSales, sumDailyTransactions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.TransactionRepository.find({ where: {
                                date: new Date().toJSON().slice(0, 10)
                            } })];
                    case 1:
                        getDailyTransactionSales = _a.sent();
                        if (getDailyTransactionSales.length) {
                            sumDailyTransactions = getDailyTransactionSales.reduce(function (total, transaction) {
                                return total + transaction.amount;
                            }, 0);
                            return [2 /*return*/, {
                                    Transaction: sumDailyTransactions,
                                    ResponseCode: '00',
                                    ResponseDescription: 'Succesfully',
                                }];
                        }
                        else {
                            return [2 /*return*/, {
                                    ResponseCode: '03',
                                    ResponseDescription: 'No record found',
                                }];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TransactionService.prototype.getDailyTransactionSalesMaleOrFemale = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var getDailyTransactionSales, sumDailyTransactionsMaleOrFemale;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.TransactionRepository.find()];
                    case 1:
                        getDailyTransactionSales = (_a.sent())
                            .filter(function (x) { return x.gender === data.gender && x.date === new Date().toJSON().slice(0, 10); });
                        if (getDailyTransactionSales.length) {
                            sumDailyTransactionsMaleOrFemale = getDailyTransactionSales.reduce(function (total, transaction) {
                                return total + transaction.amount;
                            }, 0);
                            return [2 /*return*/, {
                                    Transaction: sumDailyTransactionsMaleOrFemale,
                                    ResponseCode: '00',
                                    ResponseDescription: 'Succesfully',
                                }];
                        }
                        else {
                            return [2 /*return*/, {
                                    ResponseCode: '03',
                                    ResponseDescription: 'No record found',
                                }];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TransactionService.prototype.getTransactionSalesOfCurrentMonthMale0rFemale = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var currentDate, currentMonth, transactionSalesOfCurrentMonthMale0rFemale, getTransactionSalesOfCurrentMonthMale0rFemale;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currentDate = new Date();
                        currentMonth = currentDate.getMonth() + 1;
                        return [4 /*yield*/, this.TransactionRepository.find()];
                    case 1:
                        transactionSalesOfCurrentMonthMale0rFemale = (_a.sent()).filter(function (x) {
                            return x.gender === data.gender &&
                                new Date(x.date).getMonth() + 1 === currentMonth;
                        });
                        if (transactionSalesOfCurrentMonthMale0rFemale.length) {
                            getTransactionSalesOfCurrentMonthMale0rFemale = transactionSalesOfCurrentMonthMale0rFemale.reduce(function (total, transaction) { return total + transaction.amount; }, 0);
                            return [2 /*return*/, {
                                    Transaction: getTransactionSalesOfCurrentMonthMale0rFemale,
                                    ResponseCode: '00',
                                    ResponseDescription: 'Succesfully',
                                }];
                        }
                        else {
                            return [2 /*return*/, {
                                    ResponseCode: '03',
                                    ResponseDescription: 'No record found',
                                }];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TransactionService.prototype.getTransactionSalesOfCurrentYearMale0rFemale = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var currentYear, getTransactionSalesOfCurrentYearMale0rFemale, transactionSalesOfCurrentMonthMale0rFemale;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currentYear = new Date().getFullYear();
                        return [4 /*yield*/, this.TransactionRepository.find()];
                    case 1:
                        getTransactionSalesOfCurrentYearMale0rFemale = (_a.sent()).filter(function (x) {
                            return x.gender === data.gender &&
                                new Date(x.date).getFullYear() === currentYear;
                        });
                        if (getTransactionSalesOfCurrentYearMale0rFemale.length) {
                            transactionSalesOfCurrentMonthMale0rFemale = getTransactionSalesOfCurrentYearMale0rFemale.reduce(function (total, transaction) { return total + transaction.amount; }, 0);
                            return [2 /*return*/, {
                                    Transaction: transactionSalesOfCurrentMonthMale0rFemale,
                                    ResponseCode: '00',
                                    ResponseDescription: 'Succesfully',
                                }];
                        }
                        else {
                            return [2 /*return*/, {
                                    ResponseCode: '03',
                                    ResponseDescription: 'No record found',
                                }];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TransactionService.prototype.getTransactionSalesOfCurrentMonth = function () {
        return __awaiter(this, void 0, void 0, function () {
            var currentDate, currentMonth, transactionsThisMonth, getTransactionSalesOfCurrentMonth;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currentDate = new Date();
                        currentMonth = currentDate.getMonth() + 1;
                        return [4 /*yield*/, this.TransactionRepository.find()];
                    case 1:
                        transactionsThisMonth = (_a.sent()).filter(function (transactionMonthly) {
                            var transactionDate = new Date(transactionMonthly.date);
                            return (transactionDate.getMonth() + 1 === currentMonth);
                        });
                        if (transactionsThisMonth.length) {
                            getTransactionSalesOfCurrentMonth = transactionsThisMonth.reduce(function (total, transaction) { return total + transaction.amount; }, 0);
                            return [2 /*return*/, {
                                    Transaction: getTransactionSalesOfCurrentMonth,
                                    ResponseCode: '00',
                                    ResponseDescription: 'Succesfully',
                                }];
                        }
                        else {
                            return [2 /*return*/, {
                                    ResponseCode: '03',
                                    ResponseDescription: 'No record found',
                                }];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TransactionService.prototype.getTransactionSalesOfCurrentYear = function () {
        return __awaiter(this, void 0, void 0, function () {
            var currentDate, currentYear, transactionsThisYear, getTransactionSalesOfCurrentYear;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currentDate = new Date();
                        currentYear = currentDate.getFullYear();
                        return [4 /*yield*/, this.TransactionRepository.find()];
                    case 1:
                        transactionsThisYear = (_a.sent()).filter(function (transactionYearly) {
                            var transactionDate = new Date(transactionYearly.date);
                            return (transactionDate.getFullYear() === currentYear);
                        });
                        if (transactionsThisYear.length) {
                            getTransactionSalesOfCurrentYear = transactionsThisYear.reduce(function (total, transaction) { return total + transaction.amount; }, 0);
                            return [2 /*return*/, {
                                    Transaction: getTransactionSalesOfCurrentYear,
                                    ResponseCode: '00',
                                    ResponseDescription: 'Succesfully',
                                }];
                        }
                        else {
                            return [2 /*return*/, {
                                    ResponseCode: '03',
                                    ResponseDescription: 'No record found',
                                }];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TransactionService.prototype.updateTransactionById = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var transaction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.find(id)];
                    case 1:
                        transaction = _a.sent();
                        return [4 /*yield*/, this.TransactionRepository.update(id, data)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.find(id)];
                    case 3:
                        transaction = _a.sent();
                        return [2 /*return*/, {
                                resident: transaction,
                                ResponseCode: '00',
                                ResponseDescription: 'Transaction updated succesfully',
                            }];
                }
            });
        });
    };
    TransactionService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_2.InjectRepository)(transaction_entity_1.TransactionEntity)),
        __metadata("design:paramtypes", [typeorm_1.Repository])
    ], TransactionService);
    return TransactionService;
}());
//# sourceMappingURL=transaction.service.js.map