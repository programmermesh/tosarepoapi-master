import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { ResidentRO } from './resident.dto';

@Entity('resident')
export class ResidentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  lastname: string;

  @Column()
  other_names: string;

  @Column()
  gender: string;

  @Column()
  status: string;

  @Column()
  phone_number1: string;

  @Column()
  phone_number2: string;

  @Column()
  dob: string;

  @Column()
  employment_status: string;

  @Column()
  profession: string;

  @Column()
  date_of_entry: string;

  @Column()
  spouse_dob: string;

  @Column()
  spouseName: string;

  @Column()
  numberOfChildren: number;

  @Column()
  childrenName: string;

  @Column()
  houseNumber: string;

  @Column()
  nameOfLandLord: string;

  @Column()
  streetName: string;

  @Column()
  houseType: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  type: string;

  @Column()
  landlordId: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  toResponseObject(showToken: boolean = true): ResidentRO {
    const {
      id,
      username,
      token,
      lastname,
      other_names,
      gender,
      phone_number1,
      phone_number2,
      date_of_entry,
      dob,
      employment_status,
      profession,
      spouse_dob,
      spouseName,
      numberOfChildren,
      childrenName,
      houseNumber,
      houseType,
      password,
      type,
      landlordId,
    } = this;
    const responseObject: any = {
      id,
      username,
      lastname,
      other_names,
      gender,
      phone_number1,
      phone_number2,
      date_of_entry,
      dob,
      employment_status,
      profession,
      spouse_dob,
      spouseName,
      numberOfChildren,
      childrenName,
      houseNumber,
      houseType,
      password,
      type,
      landlordId,
    };
    if (showToken) {
      responseObject.token = token;
    }
    return responseObject;
  }

  async comparePassword(attempt: string) {
    return await bcrypt.compare(attempt, this.password);
  }

  private get token() {
    const { id, username } = this;
    return jwt.sign({ id, username }, process.env.SECRET, { expiresIn: '7d' });
  }
}
