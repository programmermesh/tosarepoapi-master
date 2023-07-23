import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, IsDateString } from 'class-validator';

export class PaymentDTO {
  @ApiProperty()
  @IsString()
  month: string;

  @ApiProperty()
  @IsString()
  pendingPaymentId: string;

  @ApiProperty()
  @IsString()
  year: string;

  @ApiProperty()
  @IsString()
  status: string;

  @ApiProperty()
  @IsInt()
  amount: number;

  @ApiProperty()
  @IsString()
  levy: string;

  @ApiProperty()
  @IsString()
  houseType: string;

  @ApiProperty()
  @IsString()
  houseNumber: string;

  @ApiProperty()
  @IsString()
  fullName: string;

  @ApiProperty()
  @IsString()
  processed: string;

  @ApiProperty()
  @IsString()
  residentId: string;

  @ApiProperty()
  file: string;
}
