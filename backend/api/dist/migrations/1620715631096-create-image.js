"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createImage1620715631096 = void 0;
class createImage1620715631096 {
    constructor() {
        this.name = 'createImage1620715631096';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "image" ADD "label" character varying(500) NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "image" DROP COLUMN "label"`);
    }
}
exports.createImage1620715631096 = createImage1620715631096;
//# sourceMappingURL=1620715631096-create-image.js.map