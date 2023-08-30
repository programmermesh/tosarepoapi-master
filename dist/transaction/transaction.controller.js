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
exports.TransactionController = void 0;
var common_1 = require("@nestjs/common");
var transaction_service_1 = require("./transaction.service");
var transaction_dto_1 = require("./transaction.dto");
var swagger_1 = require("@nestjs/swagger");
var validation_pipe_1 = require("../shared/validation.pipe");
var TransactionController = exports.TransactionController = /** @class */ (function () {
    function TransactionController(transactionService) {
        this.transactionService = transactionService;
        this.logger = new common_1.Logger('TransactionController');
    }
    TransactionController.prototype.addTransaction = function (hairtypes) {
        this.logger.log(JSON.stringify(hairtypes));
        return this.transactionService.addTransaction(hairtypes);
    };
    TransactionController.prototype.showAllPayment = function () {
        return this.transactionService.showAll();
    };
    TransactionController.prototype.getDailyTransactionsSales = function () {
        return this.transactionService.getDailyTransactionSales();
    };
    TransactionController.prototype.getDailyTransactionSalesMaleOrFemale = function (data) {
        this.logger.log(JSON.stringify(data));
        return this.transactionService.getDailyTransactionSalesMaleOrFemale(data);
    };
    TransactionController.prototype.getTransactionSalesOfCurrentMonthMale0rFemale = function (data) {
        this.logger.log(JSON.stringify(data));
        return this.transactionService.getTransactionSalesOfCurrentMonthMale0rFemale(data);
    };
    TransactionController.prototype.getTransactionSalesOfCurrentYearMale0rFemale = function (data) {
        this.logger.log(JSON.stringify(data));
        return this.transactionService.getTransactionSalesOfCurrentYearMale0rFemale(data);
    };
    TransactionController.prototype.getTransactionSalesOfCurrentMonth = function () {
        return this.transactionService.getTransactionSalesOfCurrentMonth();
    };
    TransactionController.prototype.getTransactionSalesOfCurrentYear = function () {
        return this.transactionService.getTransactionSalesOfCurrentYear();
    };
    TransactionController.prototype.updateTransactionById = function (id, data) {
        this.logger.log(JSON.stringify(data));
        return this.transactionService.updateTransactionById(id, data);
    };
    __decorate([
        (0, common_1.Post)(),
        (0, common_1.UsePipes)(new validation_pipe_1.ValidationPipe()),
        (0, swagger_1.ApiBody)({ type: transaction_dto_1.TransactionDTO }),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [transaction_dto_1.TransactionDTO]),
        __metadata("design:returntype", void 0)
    ], TransactionController.prototype, "addTransaction", null);
    __decorate([
        (0, common_1.Get)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TransactionController.prototype, "showAllPayment", null);
    __decorate([
        (0, common_1.Get)('getDailyTransactionSales'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TransactionController.prototype, "getDailyTransactionsSales", null);
    __decorate([
        (0, common_1.Post)(':getDailyTransactionSalesMaleOrFemale'),
        (0, swagger_1.ApiBody)({ type: transaction_dto_1.TransactionMaleFemaleDTO }),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [transaction_dto_1.TransactionMaleFemaleDTO]),
        __metadata("design:returntype", void 0)
    ], TransactionController.prototype, "getDailyTransactionSalesMaleOrFemale", null);
    __decorate([
        (0, common_1.Post)('/transactionMonthly/:getTransactionSalesOfCurrentMonthMale0rFemale'),
        (0, swagger_1.ApiBody)({ type: transaction_dto_1.TransactionMaleFemaleDTO }),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [transaction_dto_1.TransactionMaleFemaleDTO]),
        __metadata("design:returntype", void 0)
    ], TransactionController.prototype, "getTransactionSalesOfCurrentMonthMale0rFemale", null);
    __decorate([
        (0, common_1.Post)('/yearlyMaleOrFemale/getTransactionSalesOfCurrentYearMale0rFemale'),
        (0, swagger_1.ApiBody)({ type: transaction_dto_1.TransactionMaleFemaleDTO }),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [transaction_dto_1.TransactionMaleFemaleDTO]),
        __metadata("design:returntype", void 0)
    ], TransactionController.prototype, "getTransactionSalesOfCurrentYearMale0rFemale", null);
    __decorate([
        (0, common_1.Get)('getTransactionSalesOfCurrentMonth'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TransactionController.prototype, "getTransactionSalesOfCurrentMonth", null);
    __decorate([
        (0, common_1.Get)('/yearly/getTransactionSalesOfCurrentYear'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TransactionController.prototype, "getTransactionSalesOfCurrentYear", null);
    __decorate([
        (0, common_1.Put)(':id'),
        (0, common_1.UsePipes)(new validation_pipe_1.ValidationPipe()),
        (0, swagger_1.ApiParam)({ name: 'id' }),
        (0, swagger_1.ApiBody)({ type: transaction_dto_1.TransactionDTO }),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], TransactionController.prototype, "updateTransactionById", null);
    TransactionController = __decorate([
        (0, swagger_1.ApiTags)('transaction'),
        (0, common_1.Controller)('transaction'),
        __metadata("design:paramtypes", [transaction_service_1.TransactionService])
    ], TransactionController);
    return TransactionController;
}());
//# sourceMappingURL=transaction.controller.js.map