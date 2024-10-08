import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Fasyankes } from './fasyankes.entity';
import { classToPlain } from 'class-transformer';

@Injectable()
export class FasyankesService {
  constructor(
    @InjectRepository(Fasyankes)
    private readonly fasyankesRepository: Repository<Fasyankes>,
  ) {}

  // Mendapatkan semua data fasyankes
  async findAll(
    page: number = 1,
    limit: number = 10,
    search: string = '',
    is_active: boolean = true
  ): Promise<any> {
    const queryBuilder =
      this.fasyankesRepository.createQueryBuilder('fasyankes');

      // parameter search, tambah kondisi whare
      if (search) {
        queryBuilder.where(
          'LOWER(fasyankes.name) LIKE LOWER(:search)  OR LOWER(fasyankes.email) LIKE LOWER(:search) ', 
          {
          search: `%${search.toLocaleLowerCase()}%`,
        });
      }

      // untuk filter
      if (is_active) {
        queryBuilder.andWhere(
          'fasyankes.is_active = :is_active',
          { is_active },
        );
      }

      // Tambahkan pagination
      queryBuilder.skip((page - 1) * limit).take(limit);

      // tambahkan relation jika relation
      queryBuilder.leftJoinAndSelect('fasyankes.accessFasyankes', 'accessFasyankes');

      const [items, total] = await queryBuilder.getManyAndCount();

      // buat hasil dengan format pagination
      const results = {
        data: classToPlain(items),
        totalItems: total,
        currentPage: page,
        totalPages: Math.ceil(total / limit),
      };

      return results;
  }
}
