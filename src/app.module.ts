import { ArgumentsHost, Catch, ExceptionFilter, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResidentModule } from './resident/resident.module';
import { config } from './orm.config';
import { APP_FILTER } from '@nestjs/core';
import { HttpErrorFIlter } from './shared/http.error.filter';
import { NoticeModule } from './notice/notice.module';
import { PaymentModule } from './payment/payment.module';
import { LevyModule } from './levy/levy.module';
import { VisitorModule } from './visitor/visitor.module';
import { UserModule } from './user/user.module';
import { PendingPaymentModule } from './pendingPayment/pendingPayment.module';
import { ExpenseIncomeModule } from './expense-income/expense-income.module';
import { LandlordModule } from './landlord/landloard.module';
import { SalonModule } from './salon/salon.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    ResidentModule,
    NoticeModule,
    PaymentModule,
    PendingPaymentModule,
    LevyModule,
    ExpenseIncomeModule,
    VisitorModule,
    UserModule,
    LandlordModule,
    SalonModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpErrorFIlter,
    },
  ],
})
export class AppModule {}
