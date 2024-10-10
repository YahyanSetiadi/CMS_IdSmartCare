import { HistoryBoInfo } from './history-bo-info.entity';
import { Repository } from 'typeorm';
export declare class HistoryBoInfoService {
    private readonly historyBoInfoRepository;
    constructor(historyBoInfoRepository: Repository<HistoryBoInfo>);
    findHistoryBoInfo(start_date?: string, end_date?: string, search?: string, page?: number, limit?: number): Promise<any>;
}
