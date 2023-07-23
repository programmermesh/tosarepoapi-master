import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UsePipes,
  Logger,
} from '@nestjs/common';
import { SalonService } from './salon.service';
import { SalonDTO } from './salon.dto';
import { ApiParam, ApiBody, ApiTags } from '@nestjs/swagger';
import { ValidationPipe } from '../shared/validation.pipe';
import { HairstyleDTO } from '../shared/hairstyle.dto';

@ApiTags('salon')
@Controller('salon')
export class SalonController {
  private logger = new Logger('SalonController');
  constructor(private salonService: SalonService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @ApiBody({ type: SalonDTO })
  addHairTypes(@Body() hairtypes: SalonDTO) {
    this.logger.log(JSON.stringify(hairtypes));
    return this.salonService.addHairTypes(hairtypes);
  }

  @Get()
  showAllPayment() {
    return this.salonService.showAll();
  }

  @Post(':genderHairStyles')
  @ApiBody({ type: HairstyleDTO })
  getHairStyleByGender(@Body() genderHairStyles: HairstyleDTO) {
    this.logger.log(JSON.stringify(genderHairStyles));
    return this.salonService.getHairStyleByGender(genderHairStyles);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  @ApiParam({ name: 'id' })
  @ApiBody({ type: SalonDTO })
  updateHairstyleById(@Param('id') id: any, @Body() data: Partial<SalonDTO>) {
    this.logger.log(JSON.stringify(data));
    return this.salonService.updateHairstyleById(id, data);
  }

  @Delete(':id')
  @ApiParam({ name: 'id' })
  deleteHairstyleById(@Param('id') id: any) {
    return this.salonService.deleteHairstyleById(id);
  }
}
