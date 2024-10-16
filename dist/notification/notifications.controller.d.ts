import { NotificationsService } from './notifications.service';
import { Notifications } from './notifications.entity';
export declare class NotificationsController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    getAllNotifications(): Promise<Notifications[]>;
}
