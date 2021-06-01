"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCat1622523344685 = void 0;
class createCat1622523344685 {
    constructor() {
        this.name = 'createCat1622523344685';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "cat" DROP CONSTRAINT "PK_7704d5c2c0250e4256935ae31b4"`);
        await queryRunner.query(`ALTER TABLE "cat" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "cat" ADD "id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cat" ADD CONSTRAINT "PK_7704d5c2c0250e4256935ae31b4" PRIMARY KEY ("id")`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "cat" DROP CONSTRAINT "PK_7704d5c2c0250e4256935ae31b4"`);
        await queryRunner.query(`ALTER TABLE "cat" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "cat" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cat" ADD CONSTRAINT "PK_7704d5c2c0250e4256935ae31b4" PRIMARY KEY ("id")`);
    }
}
exports.createCat1622523344685 = createCat1622523344685;
//# sourceMappingURL=1622523344685-create-cat.js.map