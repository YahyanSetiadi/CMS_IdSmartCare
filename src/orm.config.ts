import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { BisnisOwner } from './bisnis-owner/bisnis-owner.entity';
import { Fasyankes } from './fasyankes/fasyankes.entity';
import { BoInfos } from './bo-infos/bo-infos.entity';
import { LegalDokumen } from './legal-dokumen/legal-dokumen.entity';
export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  username: 'postgres',
  password: '',
  database: 'bisnis-owner',
  // entities: ['dist/**/*.entity{.ts,.js}'],
  entities: [BisnisOwner, Fasyankes, BoInfos, LegalDokumen],
  synchronize: false,
  // synchronize: true, //compainies(id, name, city, location)
  logging: true,
  logger: 'advanced-console', // Log SQL queries executed by TypeORM
};
