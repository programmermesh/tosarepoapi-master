import {
  Controller,
  Logger,
  Post,
  Get,
  UsePipes,
  ValidationPipe,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { VisitorService } from './visitor.service';
import { ApiBody, ApiParam, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { VisitorDTO } from './visitor.dto';

@ApiTags('visitor')
@Controller('visitor')
export class VisitorController {
  private logger = new Logger('VisitorController');
  constructor(private visitorService: VisitorService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @ApiBody({ type: VisitorDTO })
  createVisitor(@Body() data: any) {
    this.logger.log(JSON.stringify(data));
    return this.visitorService.create(data);
  }

  @Get()
  showAllVisitor() {
    return this.visitorService.showAll();
  }

  @Get('/resident/:id')
  @ApiParam({ name: 'id' })
  getVisitorByResidentId(@Param('id') id: string) {
    return this.visitorService.getVisitorByResidentId(id);
  }

  @Get(':id')
  @ApiParam({ name: 'id' })
  getVisitorById(@Param('id') id: any) {
    return this.visitorService.getVisitorById(id);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  @ApiParam({ name: 'id' })
  @ApiBody({ type: VisitorDTO })
  updateVisitorById(@Param('id') id: any, @Body() data: Partial<VisitorDTO>) {
    this.logger.log(JSON.stringify(data));
    return this.visitorService.updateVisitorById(id, data);
  }

  @Delete(':id')
  @ApiParam({ name: 'id' })
  deleteVisitorById(@Param('id') id: any) {
    return this.visitorService.deleteVisitorById(id);
  }
}
