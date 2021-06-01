import {MigrationInterface, QueryRunner} from "typeorm";

export class createImage1620715631096 implements MigrationInterface {
    name = 'createImage1620715631096'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "image" ADD "label" character varying(500) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "image" DROP COLUMN "label"`);
    }

}
