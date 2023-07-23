import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ExpenseIncomeDTO {
  @ApiProperty()
  @IsString()
  Name: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsString()
  amount: number;

  @ApiProperty()
  @IsString()
  month: string;

  @ApiProperty()
  @IsString()
  year: string;

  @ApiProperty()
  @IsString()
  type: string;
}
