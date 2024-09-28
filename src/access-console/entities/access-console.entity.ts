import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('AccessConsole')
export class AccessConsole {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  username: string;

  @Column({ length: 255 })
  email: string;

  @Column({ length: 255 })
  password: string; // Pastikan ini menyimpan hash password

  @Column({ default: true })
  isActive: boolean;

  @Column({ length: 155 })
  role: string;
}
