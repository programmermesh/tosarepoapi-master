import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDate, IsString } from 'class-validator';

export class VisitorDTO {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  discription: string;

  @ApiProperty()
  @IsString()
  residentId: string;

  @ApiProperty({
    enum: ['false', 'true'],
    default: 'false',
  })
  @IsBoolean()
  checkin: boolean;

  @ApiProperty({
    enum: ['false', 'true'],
    default: 'false',
  })
  @IsDate()
  checkout: boolean;

  @ApiProperty()
  checkinDate: Date;

  @ApiProperty()
  @IsDate()
  checkoutDate: Date;
}
