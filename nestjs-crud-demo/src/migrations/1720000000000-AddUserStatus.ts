import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUserStatus1720000000000 implements MigrationInterface {
  name = 'AddUserStatus1720000000000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "users"
      ADD COLUMN "status" character varying NOT NULL DEFAULT 'active'
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      ALTER TABLE "users"
      DROP COLUMN "status"
    `);
  }
}
