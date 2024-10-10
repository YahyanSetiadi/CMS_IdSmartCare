import { BisnisOwner } from 'src/bisnis-owner/bisnis-owner.entity';
import { BoInfos } from 'src/bo-infos/bo-infos.entity';
export declare class HistoryLegalDoc {
    id: number;
    legal_doc_bo_id: number;
    status: string;
    petugas: string;
    created_at: Date;
    updated_at: Date;
    boInfo: BoInfos;
    bisnisOwner: BisnisOwner;
}
