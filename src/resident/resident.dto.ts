import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, IsArray } from 'class-validator';

export class ResidentDTO {
  @ApiProperty()
  @IsString()
  lastname: string;

  @ApiProperty()
  @IsString()
  other_names: string;

  @ApiProperty()
  @IsString()
  gender: string;

  @ApiProperty()
  @IsString()
  status: string; //single, married, widow, widower

  @ApiProperty()
  @IsString()
  phone_number1: string;

  @ApiProperty()
  @IsString()
  phone_number2: string;

  @ApiProperty()
  @IsString()
  dob: string;

  @ApiProperty()
  @IsString()
  employment_status: string;

  @ApiProperty()
  @IsString()
  profession: string;

  @ApiProperty()
  @IsString()
  date_of_entry: string;

  @ApiProperty()
  @IsString()
  spouseName: string;

  @ApiProperty()
  @IsString()
  spouse_dob: string;

  @ApiProperty()
  @IsInt()
  numberOfChildren: number;

  @ApiProperty()
  childrenName: string;

  @ApiProperty()
  @IsInt()
  houseNumber: string;

  @ApiProperty()
  @IsString()
  nameOfLandLord: string;

  @ApiProperty()
  @IsString()
  streetName: string;

  @ApiProperty()
  @IsInt()
  houseType: string;

  @ApiProperty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsString()
  type: string;

  @ApiProperty()
  @IsString()
  landlordId: string;
}

export class BirthDayDTO {
  @ApiProperty()
  @IsString()
  dob: string;
}

export class LoginDTO {
  @ApiProperty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsString()
  password: string;
}

export class ResidentRO {
  id: string;
  username: string;
  token?: string;
  ResponseCode: string;
  ResponseDiscription: string;
}

export class ResidentUPO {
  id: string;
  password: string;
  token?: string;
  ResponseCode: string;
  ResponseDiscription: string;
}

export class ResidentUP {
  @ApiProperty()
  @IsString()
  password: string;
}
