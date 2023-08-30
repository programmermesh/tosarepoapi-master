import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  Logger,
  Param,
  Put,
} from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionDTO, TransactionMaleFemaleDTO } from './transaction.dto';
import { ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';
import { ValidationPipe } from '../shared/validation.pipe';

@ApiTags('transaction')
@Controller('transaction')
export class TransactionController {
  private logger = new Logger('TransactionController');
  constructor(private transactionService: TransactionService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @ApiBody({ type: TransactionDTO })
  addTransaction(@Body() hairtypes: TransactionDTO) {
    this.logger.log(JSON.stringify(hairtypes));
    return this.transactionService.addTransaction(hairtypes);
  }

  @Get()
  showAllPayment() {
    return this.transactionService.showAll();
  }

  @Get('getDailyTransactionSales')
  getDailyTransactionsSales(){
    return this.transactionService.getDailyTransactionSales();
  }

  @Post(':getDailyTransactionSalesMaleOrFemale')
  @ApiBody({ type: TransactionMaleFemaleDTO })
  getDailyTransactionSalesMaleOrFemale(@Body() data: TransactionMaleFemaleDTO) {
    this.logger.log(JSON.stringify(data));
    return this.transactionService.getDailyTransactionSalesMaleOrFemale(data);
  }

  @Post('/transactionMonthly/:getTransactionSalesOfCurrentMonthMale0rFemale')
  @ApiBody({ type: TransactionMaleFemaleDTO })
  getTransactionSalesOfCurrentMonthMale0rFemale(@Body() data: TransactionMaleFemaleDTO) {
    this.logger.log(JSON.stringify(data));
    return this.transactionService.getTransactionSalesOfCurrentMonthMale0rFemale(data);
  }

  @Post('/yearlyMaleOrFemale/getTransactionSalesOfCurrentYearMale0rFemale')
  @ApiBody({ type: TransactionMaleFemaleDTO})
  getTransactionSalesOfCurrentYearMale0rFemale(@Body() data: TransactionMaleFemaleDTO) {
    this.logger.log(JSON.stringify(data));
    return this.transactionService.getTransactionSalesOfCurrentYearMale0rFemale(data);
  }

  @Get('getTransactionSalesOfCurrentMonth')
  getTransactionSalesOfCurrentMonth() {
    return this.transactionService.getTransactionSalesOfCurrentMonth();
  }

  @Get('/yearly/getTransactionSalesOfCurrentYear')
  getTransactionSalesOfCurrentYear() {
    return this.transactionService.getTransactionSalesOfCurrentYear();
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  @ApiParam({ name: 'id' })
  @ApiBody({ type: TransactionDTO })
  updateTransactionById(@Param('id') id: any, @Body() data: Partial<TransactionDTO>) {
    this.logger.log(JSON.stringify(data));
    return this.transactionService.updateTransactionById(id, data);
  }
}
