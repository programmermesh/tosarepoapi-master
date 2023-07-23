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
exports.ExpenseIncomeController = void 0;
var common_1 = require("@nestjs/common");
var expense_income_service_1 = require("./expense-income.service");
var swagger_1 = require("@nestjs/swagger");
var expense_income_dto_1 = require("./expense-income.dto");
var ExpenseIncomeController = /** @class */ (function () {
    function ExpenseIncomeController(expenseincomeService) {
        this.expenseincomeService = expenseincomeService;
        this.logger = new common_1.Logger('ExpenseIncomeController');
    }
    ExpenseIncomeController.prototype.createNotice = function (data) {
        this.logger.log(JSON.stringify(data));
        return this.expenseincomeService.create(data);
    };
    ExpenseIncomeController.prototype.showAllExpense = function () {
        return this.expenseincomeService.showAllExpenses();
    };
    ExpenseIncomeController.prototype.showAllIncomes = function () {
        return this.expenseincomeService.showAllIncomes();
    };
    ExpenseIncomeController.prototype.getExpenseIncomeById = function (id) {
        return this.expenseincomeService.expenseIncomeById(id);
    };
    ExpenseIncomeController.prototype.updateExpenseIncomeById = function (id, data) {
        this.logger.log(JSON.stringify(data));
        return this.expenseincomeService.updateExpenseIncomeById(id, data);
    };
    ExpenseIncomeController.prototype.deleteExpenseIncomeById = function (id) {
        return this.expenseincomeService.deleteExpenseIncomeById(id);
    };
    __decorate([
        common_1.Post(),
        common_1.UsePipes(new common_1.ValidationPipe()),
        swagger_1.ApiBody({ type: expense_income_dto_1.ExpenseIncomeDTO }),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ExpenseIncomeController.prototype, "createNotice", null);
    __decorate([
        common_1.Get('/expenses'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ExpenseIncomeController.prototype, "showAllExpense", null);
    __decorate([
        common_1.Get('/income'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ExpenseIncomeController.prototype, "showAllIncomes", null);
    __decorate([
        common_1.Get(':id'),
        swagger_1.ApiParam({ name: 'id' }),
        __param(0, common_1.Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ExpenseIncomeController.prototype, "getExpenseIncomeById", null);
    __decorate([
        common_1.Put(':id'),
        common_1.UsePipes(new common_1.ValidationPipe()),
        swagger_1.ApiParam({ name: 'id' }),
        swagger_1.ApiBody({ type: expense_income_dto_1.ExpenseIncomeDTO }),
        __param(0, common_1.Param('id')),
        __param(1, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], ExpenseIncomeController.prototype, "updateExpenseIncomeById", null);
    __decorate([
        common_1.Delete(':id'),
        swagger_1.ApiParam({ name: 'id' }),
        __param(0, common_1.Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ExpenseIncomeController.prototype, "deleteExpenseIncomeById", null);
    ExpenseIncomeController = __decorate([
        swagger_1.ApiTags('expense-income'),
        common_1.Controller('expense-income'),
        __metadata("design:paramtypes", [expense_income_service_1.ExpenseIncomeService])
    ], ExpenseIncomeController);
    return ExpenseIncomeController;
}());
exports.ExpenseIncomeController = ExpenseIncomeController;
//# sourceMappingURL=expense-income.controller.js.map