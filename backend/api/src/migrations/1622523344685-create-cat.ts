import {MigrationInterface, QueryRunner} from "typeorm";

export class createCat1622523344685 implements MigrationInterface {
    name = 'createCat1622523344685'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cat" DROP CONSTRAINT "PK_7704d5c2c0250e4256935ae31b4"`);
        await queryRunner.query(`ALTER TABLE "cat" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "cat" ADD "id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cat" ADD CONSTRAINT "PK_7704d5c2c0250e4256935ae31b4" PRIMARY KEY ("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cat" DROP CONSTRAINT "PK_7704d5c2c0250e4256935ae31b4"`);
        await queryRunner.query(`ALTER TABLE "cat" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "cat" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cat" ADD CONSTRAINT "PK_7704d5c2c0250e4256935ae31b4" PRIMARY KEY ("id")`);
    }

}
