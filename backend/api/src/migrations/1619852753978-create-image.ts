import {MigrationInterface, QueryRunner} from "typeorm";

export class createImage1619852753978 implements MigrationInterface {
    name = 'createImage1619852753978'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "image" ("id" SERIAL NOT NULL, "fileName" character varying(500) NOT NULL, "file" text NOT NULL, CONSTRAINT "PK_d6db1ab4ee9ad9dbe86c64e4cc3" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "image"`);
    }

}
