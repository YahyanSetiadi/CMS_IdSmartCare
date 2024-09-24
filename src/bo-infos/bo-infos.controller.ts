import { Controller, Get, Param, Put, Body } from '@nestjs/common';
import { BoInfosService } from './bo-infos.service';
import { BoInfos } from './bo-infos.entity';

@Controller('bo-infos')
export class BoInfosController {
  constructor(private readonly boInfosService: BoInfosService) {}

  // get id tabel bo-info
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<BoInfos> {
    return this.boInfosService.findOne(id);
  }

  // update status
  @Put(':id/status')
  async updateStatus(
    @Param('id') id: number,
    @Body('status') status: string,
  ): Promise<BoInfos> {
    return this.boInfosService.updateStatus(id, status);
  }
}
