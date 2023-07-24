"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseIncomeModule = void 0;
var common_1 = require("@nestjs/common");
var expense_income_service_1 = require("./expense-income.service");
var expense_income_entity_1 = require("./expense-income.entity");
var typeorm_1 = require("@nestjs/typeorm");
var expense_income_controller_1 = require("./expense-income.controller");
var ExpenseIncomeModule = exports.ExpenseIncomeModule = /** @class */ (function () {
    function ExpenseIncomeModule() {
    }
    ExpenseIncomeModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([expense_income_entity_1.ExpenseIncomeEntity])],
            controllers: [expense_income_controller_1.ExpenseIncomeController],
            providers: [expense_income_service_1.ExpenseIncomeService],
        })
    ], ExpenseIncomeModule);
    return ExpenseIncomeModule;
}());
//# sourceMappingURL=expense-income.module.js.map