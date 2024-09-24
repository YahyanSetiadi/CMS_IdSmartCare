import { Body, Controller, Get, Param } from '@nestjs/common';
import { FasyankesService } from './fasyankes.service';
import { Fasyankes } from './fasyankes.entity';

@Controller('fasyankes')
export class FasyankesController {
  constructor(private readonly fasyankesService: FasyankesService) {}

  @Get()
  async getAllFasyankes(): Promise<Fasyankes[]> {
    return this.fasyankesService.findAll();
  }
}
