import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResidentEntity } from '../resident/resident.entity';
import { ResidentService } from '../resident/resident.service';
import { LandlordController } from './landloard.controller';
import { LandlordEntity } from './landloard.entity';
import { LandlordService } from './landloard.service';

@Module({
  imports: [TypeOrmModule.forFeature([LandlordEntity, ResidentEntity])],
  controllers: [LandlordController],
  providers: [LandlordService, ResidentService],
})
export class LandlordModule {}
