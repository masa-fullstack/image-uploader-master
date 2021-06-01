"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatService = void 0;
const common_1 = require("@nestjs/common");
const cat_entity_1 = require("../entities/cat.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let CatService = class CatService {
    constructor(catRepository) {
        this.catRepository = catRepository;
    }
    getCatTop10() {
        return this.catRepository.find({
            order: {
                searchedCount: 'DESC',
            },
            take: 10
        });
    }
    async putCat(id) {
        const cat = await this.catRepository.findOne({ id: id });
        if (cat) {
            const updatedCat = { id: id, searchedCount: cat.searchedCount + 1 };
            return this.catRepository.update(id, updatedCat);
        }
        return this.catRepository.insert({ id: id, searchedCount: 1 });
    }
};
CatService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(cat_entity_1.Cat)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CatService);
exports.CatService = CatService;
//# sourceMappingURL=cat.service.js.map