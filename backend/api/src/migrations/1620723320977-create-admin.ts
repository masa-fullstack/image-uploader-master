import {MigrationInterface, QueryRunner} from "typeorm";

export class createAdmin1620723320977 implements MigrationInterface {
    name = 'createAdmin1620723320977'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "admin" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "password" character varying NOT NULL, CONSTRAINT "PK_e032310bcef831fb83101899b10" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "image" DROP CONSTRAINT "PK_d6db1ab4ee9ad9dbe86c64e4cc3"`);
        await queryRunner.query(`ALTER TABLE "image" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "image" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "image" ADD CONSTRAINT "PK_d6db1ab4ee9ad9dbe86c64e4cc3" PRIMARY KEY ("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "image" DROP CONSTRAINT "PK_d6db1ab4ee9ad9dbe86c64e4cc3"`);
        await queryRunner.query(`ALTER TABLE "image" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "image" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "image" ADD CONSTRAINT "PK_d6db1ab4ee9ad9dbe86c64e4cc3" PRIMARY KEY ("id")`);
        await queryRunner.query(`DROP TABLE "admin"`);
    }

}
