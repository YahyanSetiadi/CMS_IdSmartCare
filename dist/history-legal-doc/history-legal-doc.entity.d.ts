import { BisnisOwner } from 'src/bisnis-owner/bisnis-owner.entity';
import { BoInfos } from 'src/bo-infos/bo-infos.entity';
import { LegalDokumen } from 'src/legal-dokumen/legal-dokumen.entity';
export declare class HistoryLegalDoc {
    id: number;
    legalDocBoId: number;
    status: string;
    petugas: string;
    created_at: Date;
    updated_at: Date;
    boInfo: BoInfos;
    bisnisOwner: BisnisOwner;
    legalDokumen: LegalDokumen;
}
