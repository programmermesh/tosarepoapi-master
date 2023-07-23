import { Module } from '@nestjs/common';
import { ExpenseIncomeService } from './expense-income.service';
import { ExpenseIncomeEntity } from './expense-income.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpenseIncomeController } from './expense-income.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ExpenseIncomeEntity])],
  controllers: [ExpenseIncomeController],
  providers: [ExpenseIncomeService],
})
export class ExpenseIncomeModule {}
