import { MigrationInterface, QueryRunner } from "typeorm";
export declare class createCat1622523344685 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
