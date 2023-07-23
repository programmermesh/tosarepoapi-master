import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PendingPaymentEntity } from './pendingPayment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PendingPaymentDTO } from './pendingPayment.dto';
var fs = require('fs');

@Injectable()
export class PendingPaymentService {
  constructor(
    @InjectRepository(PendingPaymentEntity)
    private PendingPaymentRepository: Repository<PendingPaymentEntity>,
  ) {}

  async create(data: PendingPaymentDTO) {
    let check = (await this.PendingPaymentRepository.find()).filter(
      x =>
        x.month === data.month &&
        x.residentId === data.residentId &&
        x.year === data.year,
    );
    if (check.length > 0)
      return {
        ResponseCode: '03',
        ResponseDescription: 'You have already paid for this month',
      };
    else {
      const payment = this.PendingPaymentRepository.create(data);
      await this.PendingPaymentRepository.save(payment);
      return {
        resident: payment,
        ResponseCode: '00',
        ResponseDescription: 'Payment created and awaiting approval',
      };
    }
  }

  private async find(id: any) {
    const payment = await this.PendingPaymentRepository.findOne(id);
    if (!payment) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return payment;
  }

  async showAllPendingPayment() {
    const payment = await this.PendingPaymentRepository.find({
      where: {
        processed: 'No',
      },
    });
    if (!payment.length) {
      return {
        ResponseCode: '03',
        ResponseDescription: 'No record found',
      };
    }
    return {
      payment: payment,
      ResponseCode: '00',
      ResponseDescription: 'Succesfully',
    };
  }

  async deletePendingPaymentById(id: any) {
    const payment = await this.find(id);
    await this.PendingPaymentRepository.delete(id);
    return {
      resident: payment,
      ResponseCode: '00',
      ResponseDescription: 'Payment deleted succesfully',
    };
  }
}
