import {MigrationInterface, QueryRunner} from "typeorm";

export class createAdmin1620724497253 implements MigrationInterface {
    name = 'createAdmin1620724497253'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "admin" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "admin" ADD "password" character varying(50) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "admin" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "admin" ADD "password" character varying NOT NULL`);
    }

}
