import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class LandlordDTO {
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
  address: string;

  @ApiProperty()
  @IsString()
  phone1: string;

  @ApiProperty()
  @IsString()
  phone2: string;
}
