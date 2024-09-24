import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('bo_infos') 
export class BoInfos {
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id: number;

  @Column({ type: 'bigint', unsigned: true })
  bisnis_owner_id: number;

  @Column({ type: 'varchar', length: 255 })
  businessId: string;

  @Column({ type: 'varchar', length: 255 })
  businessType: string;

  @Column({ type: 'varchar', length: 255 })
  businessName: string;

  @Column({ type: 'varchar', length: 255 })
  businessEmail: string;

  @Column({ type: 'varchar', length: 255 })
  phone: string;

  @Column({ type: 'varchar', length: 255 })
  mobile: string;

  @Column({ type: 'text' })
  address: string;

  @Column({ type: 'varchar', length: 255 })
  province: string;

  @Column({ type: 'varchar', length: 255 })
  city: string;

  @Column({ type: 'varchar', length: 255 })
  subdistrict: string;

  @Column({ type: 'varchar', length: 255 })
  village: string;

  @Column({ type: 'varchar', length: 255 })
  postal_code: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  status: string;

  @Column({ type: 'timestamp', nullable: true })
  created_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  updated_at: Date;
}
