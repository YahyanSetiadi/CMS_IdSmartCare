import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('legal_doc_bo')
export class LegalDokumen {
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id: number;

  @Column({ type: 'bigint', unsigned: true })
  bisnis_owner_id: number;

  @Column({ type: 'varchar', length: 255 })
  ktp: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  akta: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  sk_kemenkumham: string;

  @Column({ type: 'varchar', length: 255 })
  npwp: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  nib: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  iso: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  status: string;

  @Column({ type: 'timestamp', nullable: true })
  created_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  updated_at: Date;
}
