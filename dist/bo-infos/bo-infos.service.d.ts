import { Repository } from 'typeorm';
import { BoInfos } from './bo-infos.entity';
import { HistoryBoInfo } from 'src/history-bo-info/history-bo-info.entity';
import { Notifications } from 'src/notification/notifications.entity';
export declare class BoInfosService {
    private readonly boInfosRepository;
    private readonly historyBoInfoRepository;
    private readonly notificationsRepository;
    constructor(boInfosRepository: Repository<BoInfos>, historyBoInfoRepository: Repository<HistoryBoInfo>, notificationsRepository: Repository<Notifications>);
    findOne(id: number): Promise<BoInfos>;
    updateStatus(id: number, newStatus: string, reason?: string, petugas?: string): Promise<{
        boInfo: BoInfos;
    }>;
    findAll(): Promise<BoInfos[]>;
}
