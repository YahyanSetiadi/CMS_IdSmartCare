import { Controller, Get, Param, Put, Body } from '@nestjs/common';
import { LegalDokumenService } from './legal-dokumen.service';
import { LegalDokumen } from './legal-dokumen.entity';

@Controller('legal-dokumen')
export class LegalDokumenController {
  constructor(private readonly legalDokumenService: LegalDokumenService) {}

  // get id tabel
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<LegalDokumen> {
    return await this.legalDokumenService.findOne(id);
  }

  // update status
  @Put(':id/status')
  async updateStatus(
    @Param('id') id: number,
    @Body('status') status: string,
  ): Promise<LegalDokumen> {
    return this.legalDokumenService.updateStatus(id, status);
  }
}
