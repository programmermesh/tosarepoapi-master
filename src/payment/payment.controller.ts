import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UsePipes,
  Logger,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentDTO } from './payment.dto';
import { ApiParam, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { ValidationPipe } from '../shared/validation.pipe';
import { PaymentMonthDTO } from '../shared/paymentMonth.dto';
import { PaymentYearDTO } from '../shared/paymentYear.dto';

@ApiTags('payment')
@Controller('payment')
export class PaymentController {
  private logger = new Logger('PaymentController');
  constructor(private paymentService: PaymentService) {}

  @Post('/approvePayment')
  @ApiBody({ type: PaymentDTO })
  approvePayment(@Body() payment: PaymentDTO) {
    this.logger.log(JSON.stringify(payment));
    return this.paymentService.approvePayment(payment);
  }

  @Get()
  showAllPayment() {
    return this.paymentService.showAll();
  }

  @Post('/payment/:id')
  @ApiParam({ name: 'id' })
  getPaymentByResidentId(@Param('id') id: string) {
    return this.paymentService.getPaymentByResidentId(id);
  }

  @Post('/month')
  @ApiBody({ type: PaymentMonthDTO })
  getPaymentMonthYear(@Body() data: PaymentMonthDTO) {
    this.logger.log(JSON.stringify(data));
    return this.paymentService.getPaymentMonthYear(data);
  }

  @Post('/perannum')
  @ApiBody({ type: PaymentYearDTO })
  getPaymentYear(@Body() model: PaymentYearDTO) {
    this.logger.log(JSON.stringify(model));
    return this.paymentService.getPaymentYear(model);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  @ApiParam({ name: 'id' })
  @ApiBody({ type: PaymentDTO })
  updateResidentById(@Param('id') id: any, @Body() data: Partial<PaymentDTO>) {
    this.logger.log(JSON.stringify(data));
    return this.paymentService.updatePaymentById(id, data);
  }

  @Delete(':id')
  @ApiParam({ name: 'id' })
  deletePaymentById(@Param('id') id: any) {
    return this.paymentService.deletePaymentById(id);
  }
}
