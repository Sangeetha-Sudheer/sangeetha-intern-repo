import 'dotenv/config';
import { EncryptionTransformer } from 'typeorm-encrypted';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ default: 'active' })
  status: string;

  @Column({
    type: 'text',
    nullable: true,
    transformer: new EncryptionTransformer({
      key: process.env.ENCRYPTION_KEY!,
      algorithm: 'aes-256-cbc',
      ivLength: 16,
    }),
  })
  privateNote?: string;
}
