import { BoInfos } from 'src/bo-infos/bo-infos.entity';
import { BisnisOwner } from 'src/bisnis-owner/bisnis-owner.entity';
export declare class HistoryBoInfo {
    id: number;
    boInfo: BoInfos;
    status: string;
    petugas: string;
    created_at: Date;
    updated_at: Date;
    bisnisOwner: BisnisOwner;
}
