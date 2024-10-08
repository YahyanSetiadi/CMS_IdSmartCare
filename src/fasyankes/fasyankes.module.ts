import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fasyankes } from './fasyankes.entity';
import { FasyankesController } from './fasyankes.controller';
import { FasyankesService } from './fasyankes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Fasyankes])],
  controllers: [FasyankesController],
  providers: [FasyankesService],
})
export class FasyankesModule {}
