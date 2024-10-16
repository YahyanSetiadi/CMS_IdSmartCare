import { Repository } from 'typeorm';
import { LegalDokumen } from './legal-dokumen.entity';
import { HistoryLegalDoc } from 'src/history-legal-doc/history-legal-doc.entity';
import { Notifications } from 'src/notification/notifications.entity';
export declare class LegalDokumenService {
    private readonly legalDokumenRepository;
    private readonly historyLegalDocRepository;
    private readonly notificationsRepository;
    constructor(legalDokumenRepository: Repository<LegalDokumen>, historyLegalDocRepository: Repository<HistoryLegalDoc>, notificationsRepository: Repository<Notifications>);
    updateStatus(id: number, newStatus: string, reason?: string, petugas?: string): Promise<{
        legalDokumen: LegalDokumen;
    }>;
    findOne(id: number): Promise<LegalDokumen>;
    findAll(): Promise<LegalDokumen[]>;
}
