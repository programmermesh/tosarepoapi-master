import {
  Controller,
  Logger,
  Post,
  Get,
  UsePipes,
  ValidationPipe,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ExpenseIncomeService } from './expense-income.service';
import { ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';
import { ExpenseIncomeDTO } from './expense-income.dto';

@ApiTags('expense-income')
@Controller('expense-income')
export class ExpenseIncomeController {
  private logger = new Logger('ExpenseIncomeController');
  constructor(private expenseincomeService: ExpenseIncomeService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @ApiBody({ type: ExpenseIncomeDTO })
  createNotice(@Body() data: any) {
    this.logger.log(JSON.stringify(data));
    return this.expenseincomeService.create(data);
  }

  @Get('/expenses')
  showAllExpense() {
    return this.expenseincomeService.showAllExpenses();
  }

  @Get('/income')
  showAllIncomes() {
    return this.expenseincomeService.showAllIncomes();
  }

  @Get(':id')
  @ApiParam({ name: 'id' })
  getExpenseIncomeById(@Param('id') id: any) {
    return this.expenseincomeService.expenseIncomeById(id);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  @ApiParam({ name: 'id' })
  @ApiBody({ type: ExpenseIncomeDTO })
  updateExpenseIncomeById(
    @Param('id') id: any,
    @Body() data: Partial<ExpenseIncomeDTO>,
  ) {
    this.logger.log(JSON.stringify(data));
    return this.expenseincomeService.updateExpenseIncomeById(id, data);
  }

  @Delete(':id')
  @ApiParam({ name: 'id' })
  deleteExpenseIncomeById(@Param('id') id: any) {
    return this.expenseincomeService.deleteExpenseIncomeById(id);
  }
}
