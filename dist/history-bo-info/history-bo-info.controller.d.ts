import { HistoryBoInfoService } from './history-bo-info.service';
export declare class HistoryBoInfoController {
    private readonly historyBoInfoService;
    constructor(historyBoInfoService: HistoryBoInfoService);
    getAllHistoryBoInfo(start_date?: string, end_date?: string, search?: string, page?: number, limit?: number): Promise<any>;
}
