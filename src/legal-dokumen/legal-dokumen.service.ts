import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LegalDokumen } from './legal-dokumen.entity';

@Injectable()
export class LegalDokumenService {
    constructor(
        @InjectRepository(LegalDokumen)
        private readonly legalDokumenRepository: Repository<LegalDokumen>,
    ) {}

    // get id dari tabel legal_doc_bo
    async findOne(id: number): Promise<LegalDokumen> {
        return await this.legalDokumenRepository.findOne({ where: { id } });
    }

    // update status
    async updateStatus(id: number, newStatus: string): Promise<LegalDokumen> {
        const LegalDokumen = await this.legalDokumenRepository.findOne({ 
            where: { id },
         });
         if (!LegalDokumen) {
            throw new Error ('Data Not Found');
         }
         LegalDokumen.status = newStatus;
         await this.legalDokumenRepository.save(LegalDokumen);
         return LegalDokumen;
    }
}
