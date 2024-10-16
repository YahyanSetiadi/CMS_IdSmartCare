import { Repository } from 'typeorm';
import { Notifications } from './notifications.entity';
export declare class NotificationsService {
    private readonly notificationsRepository;
    constructor(notificationsRepository: Repository<Notifications>);
    getAllNotifications(): Promise<Notifications[]>;
}
