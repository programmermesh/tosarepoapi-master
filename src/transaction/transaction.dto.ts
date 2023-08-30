import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsInt, IsString } from 'class-validator';

export class TransactionDTO {
  @ApiProperty()
  @IsString()
  hairType: string;

  @ApiProperty()
  @IsString()
  gender: string;

  @ApiProperty()
  @IsInt()
  amount: number;

  @ApiProperty()
  @IsString()
  date: string;
}

export class TransactionMaleFemaleDTO {
  @ApiProperty()
  @IsString()
  gender: string;
}

