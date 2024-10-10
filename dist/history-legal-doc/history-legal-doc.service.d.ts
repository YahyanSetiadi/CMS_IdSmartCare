import { HistoryLegalDoc } from './history-legal-doc.entity';
import { Repository } from 'typeorm';
export declare class HistoryLegalDocService {
    private readonly historyLegalDocRepository;
    constructor(historyLegalDocRepository: Repository<HistoryLegalDoc>);
    findHistoryLegalDoc(start_date?: string, end_date?: string, search?: string, page?: number, limit?: number): Promise<any>;
}
