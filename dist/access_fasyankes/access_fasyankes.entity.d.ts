import { Fasyankes } from 'src/fasyankes/fasyankes.entity';
export declare class AccessFasyankes {
    id: number;
    fasyankes_id: string;
    username: string;
    password: string;
    is_active: boolean;
    created_by: string;
    id_profile: string;
    role: string;
    created_at: Date;
    updated_at: Date;
    fasyankes: Fasyankes;
}
