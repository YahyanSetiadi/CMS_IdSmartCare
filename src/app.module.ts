import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './orm.config';
import { CompaniesModule } from './companies/companies.module';
import { BisnisOwnerModule } from './bisnis-owner/bisnis-owner.module';
import { FasyankesModule } from './fasyankes/fasyankes.module';
import { BoInfosModule } from './bo-infos/bo-infos.module';
import { LegalDokumenModule } from './legal-dokumen/legal-dokumen.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    CompaniesModule,
    BisnisOwnerModule,
    FasyankesModule,
    BoInfosModule,
    LegalDokumenModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
