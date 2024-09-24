import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BoInfos } from './bo-infos.entity';

@Injectable()
export class BoInfosService {
  constructor(
    @InjectRepository(BoInfos)
    private readonly boInfosRepository: Repository<BoInfos>,
  ) {}

  // get id dari tabel bo-infos
  async findOne(id: number): Promise<BoInfos> {
    return await this.boInfosRepository.findOne({ where: { id } });
  }

  // update status
  async updateStatus(id: number, newStatus: string): Promise<BoInfos> {
    const boInfos = await this.boInfosRepository.findOne({
      where: { id },
    });
    if (!boInfos) {
      throw new Error('Data Not Found');
    }
    boInfos.status = newStatus;
    await this.boInfosRepository.save(boInfos);
    return boInfos;
  }
}
