import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { SalonEntity } from './salon.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { SalonDTO } from './salon.dto';
import { HairstyleDTO } from '../shared/hairstyle.dto';

@Injectable()
export class SalonService {
  constructor(
    @InjectRepository(SalonEntity)
    private salonRepository: Repository<SalonEntity>,
  ) {}

  async showAll() {
    const hairtypes = await this.salonRepository.find();
    if (!hairtypes.length) {
      return {
        ResponseCode: '03',
        ResponseDescription: 'No record found',
      };
    }
    return hairtypes;
  }

  async addHairTypes(data: SalonDTO) {
    let hairtypes = (await this.salonRepository.find()).filter(
      x =>
        x.hairType === data.hairType && x.gender === data.gender
    );
    if (hairtypes.length) {
      return {
        ResponseCode: '99',
        ResponseDescription: 'Already Exist',
      };
    }

    const hairtypeData = this.salonRepository.create(data);
    await this.salonRepository.save(data);
    return {
      hairtypes: hairtypeData,
      ResponseCode: '00',
      ResponseDescription: 'Hairstyle created succesfully',
    };
  }

  private async find(id: any) {
    const hairtypes = await this.salonRepository.findOne(id);
    if (!hairtypes) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return hairtypes;
  }

  async getHairStyleByGender(data: HairstyleDTO) {
    let genderHairStyles = (await this.salonRepository.find()).filter(
      x =>
        x.gender == data.gender
    );
    if (!genderHairStyles.length) {
      return {
        ResponseCode: '99',
        ResponseDescription: 'No record found',
      };
    }
    return {
      amount: genderHairStyles,
      ResponseCode: '00',
      ResponseDescription: 'Succesfully',
    };
  }

  async updateHairstyleById(id: any, data: Partial<SalonDTO>) {
    let hairstyle = await this.find(id);
    await this.salonRepository.update(id, data);
    hairstyle = await this.find(id);
    return {
      resident: hairstyle,
      ResponseCode: '00',
      ResponseDescription: 'Hairstyle updated succesfully',
    };
  }

  async deleteHairstyleById(id: any) {
    const hairstyle = await this.find(id);
    await this.salonRepository.delete(id);
    return {
      resident: hairstyle,
      ResponseCode: '00',
      ResponseDescription: 'Hairstyle deleted succesfully',
    };
  }
}
