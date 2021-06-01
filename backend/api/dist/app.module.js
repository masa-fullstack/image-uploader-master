"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const image_module_1 = require("./image/image.module");
const cloudinary_module_1 = require("./cloudinary/cloudinary.module");
const cloudinary_1 = require("./cloudinary");
const cloudinary_service_1 = require("./cloudinary/cloudinary.service");
const config_1 = require("@nestjs/config");
const admin_module_1 = require("./admin/admin.module");
const cat_module_1 = require("./cat/cat.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: [`.env.development`, `.env`],
            }),
            typeorm_1.TypeOrmModule.forRoot(),
            image_module_1.ImageModule,
            cloudinary_module_1.CloudinaryModule,
            admin_module_1.AdminModule,
            cat_module_1.CatModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, cloudinary_1.Cloudinary, cloudinary_service_1.CloudinaryService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map