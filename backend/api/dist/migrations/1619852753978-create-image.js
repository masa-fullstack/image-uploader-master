"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createImage1619852753978 = void 0;
class createImage1619852753978 {
    constructor() {
        this.name = 'createImage1619852753978';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "image" ("id" SERIAL NOT NULL, "fileName" character varying(500) NOT NULL, "file" text NOT NULL, CONSTRAINT "PK_d6db1ab4ee9ad9dbe86c64e4cc3" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "image"`);
    }
}
exports.createImage1619852753978 = createImage1619852753978;
//# sourceMappingURL=1619852753978-create-image.js.map