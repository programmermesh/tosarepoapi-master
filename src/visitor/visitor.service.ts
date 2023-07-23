import {
  Injectable,
  HttpException,
  HttpStatus,
  UploadedFile,
} from '@nestjs/common';
import { VisitorEntity } from './visitor.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { VisitorDTO } from './visitor.dto';
import { ResidentEntity } from '../resident/resident.entity';

@Injectable()
export class VisitorService {
  constructor(
    @InjectRepository(VisitorEntity)
    private visitorRepository: Repository<VisitorEntity>,
    @InjectRepository(ResidentEntity)
    private residentRepository: Repository<ResidentEntity>,
  ) {}

  async showAll() {
    const visitor = await this.visitorRepository.find();
    if (!visitor) throw new HttpException('No Record', HttpStatus.NOT_FOUND);
    return {
      visitor: visitor,
      ResponseCode: '00',
      ResponseDescription: 'Succesfully',
    };
  }

  async create(data: VisitorDTO) {
    let resident = await this.residentRepository.findOne(data.residentId);
    if (resident) {
      const visitor = this.visitorRepository.create(data);
      await this.visitorRepository.save(visitor);
      return {
        visitor: visitor,
        ResponseCode: '00',
        ResponseDescription: 'Visitor created succesfully',
      };
    } else {
      throw new HttpException('An error occur', HttpStatus.NOT_FOUND);
    }
  }

  private async find(id: any) {
    const visitor = await this.visitorRepository.findOne(id);
    if (!visitor) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return visitor;
  }

  async getVisitorById(id: any) {
    const visitor = await this.find(id);
    return {
      visitor: visitor,
      ResponseCode: '00',
      ResponseDescription: 'Succesfully',
    };
  }

  async getVisitorByResidentId(id: any) {
    const visitor = await this.visitorRepository.find({ residentId: id });
    if (!visitor.length) {
      return {
        ResponseCode: '99',
        ResponseDescription: 'No record found',
      };
    }
    return {
      resident: visitor,
      ResponseCode: '00',
      ResponseDescription: 'Succesfully',
    };
  }

  async updateVisitorById(id: any, data: Partial<VisitorDTO>) {
    let visitor = await this.find(id);
    await this.visitorRepository.update(id, data);
    visitor = await this.find(id);
    return {
      visitor: visitor,
      ResponseCode: '00',
      ResponseDescription: 'Visitor update succesfully',
    };
  }

  async deleteVisitorById(id: any) {
    const visitor = await this.find(id);
    await this.visitorRepository.delete(id);
    return {
      visitor: visitor,
      ResponseCode: '00',
      ResponseDescription: 'Visitor delete succesfully',
    };
  }
}
