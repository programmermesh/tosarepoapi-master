import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ExpenseIncomeEntity } from './expense-income.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ExpenseIncomeDTO } from './expense-income.dto';

@Injectable()
export class ExpenseIncomeService {
  constructor(
    @InjectRepository(ExpenseIncomeEntity)
    private expenseIncomeRepository: Repository<ExpenseIncomeEntity>,
  ) {}

  async showAllExpenses() {
    const expense = await this.expenseIncomeRepository.find({
      where: {
        type: 'Expense',
      },
    });
    let totalExpense = 0;
    expense.forEach(x => (totalExpense += x.amount));
    if (!expense) throw new HttpException('No Record', HttpStatus.NOT_FOUND);
    return {
      totalExpense: totalExpense,
      expenseIncome: expense,
      ResponseCode: '00',
      ResponseDescription: 'Succesfully',
    };
  }

  async showAllIncomes() {
    const expense = await this.expenseIncomeRepository.find({
      where: {
        type: 'Income',
      },
    });

    let totalIncome = 0;
    expense.forEach(x => (totalIncome += x.amount));
    if (!expense) throw new HttpException('No Record', HttpStatus.NOT_FOUND);
    return {
      totalIncome: totalIncome,
      expenseIncome: expense,
      ResponseCode: '00',
      ResponseDescription: 'Succesfully',
    };
  }

  async create(data: ExpenseIncomeDTO) {
    const expenseIncome = this.expenseIncomeRepository.create(data);
    await this.expenseIncomeRepository.save(expenseIncome);
    return {
      expenseIncome: expenseIncome,
      ResponseCode: '00',
      ResponseDescription: 'Created succesfully',
    };
  }

  private async find(id: any) {
    const expenseIncome = await this.expenseIncomeRepository.findOne(id);
    if (!expenseIncome) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return expenseIncome;
  }

  async expenseIncomeById(id: any) {
    const expenseIncome = await this.find(id);
    return {
      expenseIncome: expenseIncome,
      ResponseCode: '00',
      ResponseDescription: 'Succesfully',
    };
  }

  async updateExpenseIncomeById(id: any, data: Partial<ExpenseIncomeDTO>) {
    let expenseIncome = await this.find(id);
    await this.expenseIncomeRepository.update(id, data);
    expenseIncome = await this.find(id);
    return {
      expenseIncome: expenseIncome,
      ResponseCode: '00',
      ResponseDescription: 'Update succesfully',
    };
  }

  async deleteExpenseIncomeById(id: any) {
    const expenseIncome = await this.find(id);
    await this.expenseIncomeRepository.delete(id);
    return {
      expenseIncome: expenseIncome,
      ResponseCode: '00',
      ResponseDescription: 'Delete succesfully',
    };
  }
}
