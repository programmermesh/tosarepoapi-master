import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LandlordEntity } from './landloard.entity';
import { Repository } from 'typeorm';
import { LandlordDTO } from './landloard.dto';
import { ResidentEntity } from '../resident/resident.entity';

@Injectable()
export class LandlordService {
  constructor(
    @InjectRepository(LandlordEntity)
    private landlordRepository: Repository<LandlordEntity>,
    @InjectRepository(ResidentEntity)
    private residentRepository: Repository<ResidentEntity>,
  ) {}

  async showAll() {
    const landlord = await this.landlordRepository.find();
    return {
      users: landlord,
      ResponseCode: '00',
      ResponseDescription: 'succesfully',
    };
  }

  async showAllTenantByLandlordId(landlordId: any) {
    const tenant = await this.findTenant(landlordId);
    return {
      tenants: tenant,
      ResponseCode: '00',
      ResponseDescription: 'succesfully',
    };
  }

  private async findTenant(landlordId: any) {
    const tenant = await this.residentRepository.find({
      where: { landlordId: landlordId },
    });
    if (tenant.length === 0) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return tenant;
  }

  async createLandlord(data: LandlordDTO) {
    const landlord = this.landlordRepository.create(data);
    await this.landlordRepository.save(landlord);
    return {
      landlord: landlord,
      ResponseCode: '00',
      ResponseDescription: 'Landlord created succesfully',
    };
  }

  async updateLandlordById(id: any, data: Partial<LandlordDTO>) {
    let landlord = await this.find(id);
    await this.landlordRepository.update(id, data);
    landlord = await this.find(id);
    return {
      landlord: landlord,
      ResponseCode: '00',
      ResponseDescription: 'Landlord update succesfully',
    };
  }

  private async find(id: any) {
    const landlord = await this.landlordRepository.findOne(id);
    if (!landlord) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return landlord;
  }

  async deleteLandlordById(id: any) {
    const landlord = await this.find(id);
    await this.landlordRepository.delete(id);
    return {
      resident: landlord,
      ResponseCode: '00',
      ResponseDescription: 'Landlord deleted succesfully',
    };
  }
}
