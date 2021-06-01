import { MigrationInterface, QueryRunner } from "typeorm";
export declare class createCat1622514855720 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
