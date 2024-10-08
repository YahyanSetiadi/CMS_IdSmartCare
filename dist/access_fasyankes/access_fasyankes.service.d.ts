import { AccessFasyankes } from './access_fasyankes.entity';
import { Repository } from 'typeorm';
export declare class AccessFasyankesService {
    private readonly accessFasyankesRepository;
    constructor(accessFasyankesRepository: Repository<AccessFasyankes>);
    findAll(): Promise<AccessFasyankes[]>;
}
