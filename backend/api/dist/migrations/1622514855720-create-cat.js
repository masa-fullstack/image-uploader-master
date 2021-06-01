"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCat1622514855720 = void 0;
class createCat1622514855720 {
    constructor() {
        this.name = 'createCat1622514855720';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "cat" ("id" SERIAL NOT NULL, "searchedCount" integer NOT NULL, CONSTRAINT "PK_7704d5c2c0250e4256935ae31b4" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "cat"`);
    }
}
exports.createCat1622514855720 = createCat1622514855720;
//# sourceMappingURL=1622514855720-create-cat.js.map