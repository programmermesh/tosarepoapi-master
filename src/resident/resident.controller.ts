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
import { ResidentService } from './resident.service';
import { BirthDayDTO, LoginDTO, ResidentDTO } from './resident.dto';
import { ApiParam, ApiBody, ApiTags } from '@nestjs/swagger';
import { ValidationPipe } from '../shared/validation.pipe';

@ApiTags('resident')
@Controller('resident')
export class ResidentController {
  private logger = new Logger('ResidentController');
  constructor(private residentService: ResidentService) {}

  @Get()
  showAllResident() {
    return this.residentService.showAll();
  }

  @Post('/birthday/:dob')
  @ApiBody({ type: BirthDayDTO })
  birthDayCelebration(@Body() data: any) {
    return this.residentService.birthDayCelebration(data);
  }

  @Post('login')
  @UsePipes(new ValidationPipe())
  @ApiBody({ type: LoginDTO })
  login(@Body() data: LoginDTO) {
    return this.residentService.login(data);
  }

  @Post('register')
  @ApiBody({ type: ResidentDTO })
  register(@Body() data: ResidentDTO) {
    return this.residentService.register(data);
  }

  @Get(':id')
  @ApiParam({ name: 'id' })
  getResidentById(@Param('id') id: any) {
    return this.residentService.getResidentById(id);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  @ApiParam({ name: 'id' })
  @ApiBody({ type: ResidentDTO })
  updateResidentById(@Param('id') id: any, @Body() data: Partial<ResidentDTO>) {
    this.logger.log(JSON.stringify(data));
    return this.residentService.updateResidentById(id, data);
  }

  @Delete(':id')
  @ApiParam({ name: 'id' })
  deleteResidentById(@Param('id') id: any) {
    return this.residentService.deleteResidentById(id);
  }
}
