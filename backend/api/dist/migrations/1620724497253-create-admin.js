"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAdmin1620724497253 = void 0;
class createAdmin1620724497253 {
    constructor() {
        this.name = 'createAdmin1620724497253';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "admin" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "admin" ADD "password" character varying(50) NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "admin" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "admin" ADD "password" character varying NOT NULL`);
    }
}
exports.createAdmin1620724497253 = createAdmin1620724497253;
//# sourceMappingURL=1620724497253-create-admin.js.map