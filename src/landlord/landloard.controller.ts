import {
  Controller,
  Post,
  Get,
  Logger,
  Body,
  UsePipes,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { LandlordService } from './landloard.service';
import { ValidationPipe } from '../shared/validation.pipe';
import { ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';
import { LandlordDTO } from './landloard.dto';

@ApiTags('landlords')
@Controller('landlords')
export class LandlordController {
  private logger = new Logger('LandlordController');
  constructor(private landlordService: LandlordService) {}
  @Get()
  showAllUsers() {
    return this.landlordService.showAll();
  }

  @Get('/tenant/:landlordId')
  @ApiParam({ name: 'landlordId' })
  showAllTenantByLandlordId(@Param('landlordId') landlordId: string) {
    return this.landlordService.showAllTenantByLandlordId(landlordId);
  }

  @Post('createLandlord')
  @ApiBody({ type: LandlordDTO })
  register(@Body() data: LandlordDTO) {
    return this.landlordService.createLandlord(data);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  @ApiParam({ name: 'id' })
  @ApiBody({ type: LandlordDTO })
  updateRegister(@Param('id') id: any, @Body() data: Partial<LandlordDTO>) {
    this.logger.log(JSON.stringify(data));
    return this.landlordService.updateLandlordById(id, data);
  }

  @Delete(':id')
  @ApiParam({ name: 'id' })
  deleteUser(@Param('id') id: any) {
    return this.landlordService.deleteLandlordById(id);
  }
}
