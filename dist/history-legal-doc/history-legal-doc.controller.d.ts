import { HistoryLegalDocService } from './history-legal-doc.service';
export declare class HitoryLegalDocController {
    private readonly historyLegalDocService;
    constructor(historyLegalDocService: HistoryLegalDocService);
    getAllHistoryLegalDoc(start_date?: string, end_date?: string, search?: string, page?: number, limit?: number): Promise<any>;
}
