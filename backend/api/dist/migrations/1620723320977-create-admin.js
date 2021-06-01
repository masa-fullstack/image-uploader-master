"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAdmin1620723320977 = void 0;
class createAdmin1620723320977 {
    constructor() {
        this.name = 'createAdmin1620723320977';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "admin" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "password" character varying NOT NULL, CONSTRAINT "PK_e032310bcef831fb83101899b10" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "image" DROP CONSTRAINT "PK_d6db1ab4ee9ad9dbe86c64e4cc3"`);
        await queryRunner.query(`ALTER TABLE "image" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "image" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "image" ADD CONSTRAINT "PK_d6db1ab4ee9ad9dbe86c64e4cc3" PRIMARY KEY ("id")`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "image" DROP CONSTRAINT "PK_d6db1ab4ee9ad9dbe86c64e4cc3"`);
        await queryRunner.query(`ALTER TABLE "image" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "image" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "image" ADD CONSTRAINT "PK_d6db1ab4ee9ad9dbe86c64e4cc3" PRIMARY KEY ("id")`);
        await queryRunner.query(`DROP TABLE "admin"`);
    }
}
exports.createAdmin1620723320977 = createAdmin1620723320977;
//# sourceMappingURL=1620723320977-create-admin.js.map