import { AccessFasyankesService } from './access_fasyankes.service';
import { AccessFasyankes } from './access_fasyankes.entity';
export declare class AccessFasyankesController {
    private readonly accessFasyankesService;
    constructor(accessFasyankesService: AccessFasyankesService);
    findAll(): Promise<AccessFasyankes[]>;
}
