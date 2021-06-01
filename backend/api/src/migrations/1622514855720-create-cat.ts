import {MigrationInterface, QueryRunner} from "typeorm";

export class createCat1622514855720 implements MigrationInterface {
    name = 'createCat1622514855720'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cat" ("id" SERIAL NOT NULL, "searchedCount" integer NOT NULL, CONSTRAINT "PK_7704d5c2c0250e4256935ae31b4" PRIMARY KEY ("id"))`);
        }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "cat"`);
   
    }

}
