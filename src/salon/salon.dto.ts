import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class SalonDTO {
  @ApiProperty()
  @IsString()
  hairType: string;

  @ApiProperty()
  @IsString()
  gender: string;

  @ApiProperty()
  @IsInt()
  amount: number;
}

