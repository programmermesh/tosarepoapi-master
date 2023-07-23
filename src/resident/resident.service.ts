import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ResidentEntity } from './resident.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {
  BirthDayDTO,
  ResidentDTO,
  ResidentRO,
  ResidentUP,
} from './resident.dto';
import { LoginDTO } from '../user/user.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class ResidentService {
  constructor(
    @InjectRepository(ResidentEntity)
    private residentRepository: Repository<ResidentEntity>,
  ) {}

  async showAll() {
    const resident = await this.residentRepository.find();
    if (resident.length === 0)
      throw new HttpException('No Record', HttpStatus.NOT_FOUND);
    return {
      resident: resident,
      ResponseCode: '00',
      ResponseDescription: 'Succesfully',
    };
  }

  async birthDayCelebration(data: ResidentDTO) {
    let birthdayNotification: any[] = [];
    const getDob = await this.birthday();
    const result1 = getDob.filter(x => x.dob === data.dob);
    const result2 = getDob.filter(x => x.dob === data.spouse_dob);
    //  if(result1){
    //     result1.
    //  }
    console.log(result1);
    // if(getDob.length === 0) throw new HttpException('No Record', HttpStatus.NOT_FOUND);
    // return {
    //   dob: getDob,
    //   ResponseCode: '00',
    //   ResponseDescription: 'Succesfully',
    // }
  }

  private async birthday() {
    const birthday = await this.residentRepository.find();
    if (birthday.length === 0) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return birthday;
  }

  async login(data: LoginDTO): Promise<ResidentRO> {
    const { username, password } = data;
    const user = await this.residentRepository.findOne({ where: { username } });
    if (!user || !(await user.comparePassword(password))) {
      throw new HttpException(
        'Invalid username/password',
        HttpStatus.BAD_REQUEST,
      );
    }
    return user.toResponseObject();
  }

  async register(data: Partial<ResidentDTO>) {
    const { username } = data;
    let resident = await this.residentRepository.findOne({
      where: { username },
    });
    if (resident) {
      return {
        ResponseCode: '03',
        ResponseDescription: 'Usernames already exists',
      };
      //throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }
    resident = this.residentRepository.create(data);
    await this.residentRepository.save(resident);
    const result = resident.toResponseObject();
    return {
      resident: result,
      ResponseCode: '00',
      ResponseDescription: 'User created succesfully',
    };
  }

  async updateRegister(id: any, data: ResidentUP): Promise<ResidentRO> {
    const { password } = data;
    let user = await this.find(id);
    data.password = await bcrypt.hash(password, 10);
    await this.residentRepository.update(id, data);
    user = await this.find(id);
    return user.toResponseObject();
  }

  private async find(id: any) {
    const resident = await this.residentRepository.findOne(id);
    if (!resident) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return resident;
  }

  async getResidentById(id: any) {
    const resident = await this.find(id);
    return {
      resident: resident,
      ResponseCode: '00',
      ResponseDescription: 'Succesfully',
    };
  }

  async updateResidentById(id: any, data: Partial<ResidentDTO>) {
    let resident = await this.find(id);
    await this.residentRepository.update(id, data);
    resident = await this.find(id);
    return {
      resident: resident,
      ResponseCode: '00',
      ResponseDescription: 'Resident updated succesfully',
    };
  }

  async deleteResidentById(id: any) {
    const resident = await this.find(id);
    await this.residentRepository.delete(id);
    return {
      resident: resident,
      ResponseCode: '00',
      ResponseDescription: 'Resident deleted succesfully',
    };
  }
}
