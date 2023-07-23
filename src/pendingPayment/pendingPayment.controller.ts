import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Logger,
} from '@nestjs/common';
import { PendingPaymentService } from './pendingPayment.service';
import { PendingPaymentDTO } from './pendingPayment.dto';
import { ApiParam, ApiBody, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('pendingPayment')
@Controller('pendingPayment')
export class PendingPaymentController {
  private logger = new Logger('PendingPaymentController');
  constructor(private PendingpaymentService: PendingPaymentService) {}

  @Post()
  @ApiBody({ type: PendingPaymentDTO })
  createPendingPayment(@Body() payment: any) {
    this.logger.log(JSON.stringify(payment));
    return this.PendingpaymentService.create(payment);
  }

  @Get()
  showAllPendingPayment() {
    return this.PendingpaymentService.showAllPendingPayment();
  }

  @Delete(':id')
  @ApiParam({ name: 'id' })
  deletePendingPaymentById(@Param('id') id: any) {
    return this.PendingpaymentService.deletePendingPaymentById(id);
  }
}
