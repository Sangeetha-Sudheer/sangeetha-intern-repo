import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './users/user.entity';
import { AddUserStatus1720000000000 } from './migrations/1720000000000-AddUserStatus';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'sangeetha',
  database: 'focusbear_db',
  entities: [User],
  migrations: [AddUserStatus1720000000000],
  synchronize: false,
});
