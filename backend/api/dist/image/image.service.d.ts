/// <reference types="multer" />
import { Image } from 'src/entities/image.entity';
import { Repository } from 'typeorm';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { AdminService } from 'src/admin/admin.service';
export declare class ImageService {
    private readonly imageRepository;
    private readonly adminService;
    private cloudinary;
    constructor(imageRepository: Repository<Image>, adminService: AdminService, cloudinary: CloudinaryService);
    addImage(fileName: string, file: string, label: string): Promise<import("typeorm").InsertResult>;
    deleteImage(id: string): Promise<import("typeorm").DeleteResult>;
    getImage(id: string): Promise<Image>;
    getImageList(label?: string): Promise<Image[]>;
    uploadImageToCloudinary(file: Express.Multer.File): Promise<import("cloudinary").UploadApiErrorResponse | import("cloudinary").UploadApiResponse>;
    authPassword(password: string): Promise<boolean>;
}
