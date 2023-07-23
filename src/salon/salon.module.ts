import { Module } from '@nestjs/common';
import { SalonController } from './saloncontroller';
import { SalonService } from './salon.service';
import { SalonEntity } from './salon.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SalonEntity])],
  controllers: [SalonController],
  providers: [SalonService],
})
export class SalonModule {}
