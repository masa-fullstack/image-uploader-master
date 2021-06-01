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
exports.ImageService = void 0;
const common_1 = require("@nestjs/common");
const image_entity_1 = require("../entities/image.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const cloudinary_service_1 = require("../cloudinary/cloudinary.service");
const admin_service_1 = require("../admin/admin.service");
let ImageService = class ImageService {
    constructor(imageRepository, adminService, cloudinary) {
        this.imageRepository = imageRepository;
        this.adminService = adminService;
        this.cloudinary = cloudinary;
    }
    addImage(fileName, file, label) {
        const image = new image_entity_1.Image();
        image.fileName = fileName;
        image.file = file;
        image.label = label || 'NO LABEL';
        return this.imageRepository.insert(image);
    }
    deleteImage(id) {
        return this.imageRepository.delete(id);
    }
    getImage(id) {
        return this.imageRepository.findOne({ where: { id: id } });
    }
    getImageList(label) {
        if (label)
            return this.imageRepository.find({ where: { label: '%' + label + '%' } });
        return this.imageRepository.find();
    }
    async uploadImageToCloudinary(file) {
        return await this.cloudinary.uploadImage(file).catch(() => {
            throw new common_1.BadRequestException('Invalid file type.');
        });
    }
    authPassword(password) {
        return this.adminService.authPassword(password);
    }
};
ImageService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(image_entity_1.Image)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        admin_service_1.AdminService,
        cloudinary_service_1.CloudinaryService])
], ImageService);
exports.ImageService = ImageService;
//# sourceMappingURL=image.service.js.map