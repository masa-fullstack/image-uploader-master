/// <reference types="multer" />
import { ImageService } from './image.service';
export declare class ImageController {
    private readonly service;
    constructor(service: ImageService);
    getImage(id: string): Promise<import("../entities/image.entity").Image>;
    deleteImage(id: string, password: string): Promise<import("typeorm").DeleteResult>;
    getImageList(query?: {
        label?: string;
    }): Promise<import("../entities/image.entity").Image[]>;
    addImage(query: {
        imageURL: string;
        label: string;
    }): Promise<import("typeorm").InsertResult>;
    uploadAddImage(file: Express.Multer.File, query: {
        label: string;
    }): Promise<import("cloudinary").UploadApiErrorResponse | import("cloudinary").UploadApiResponse>;
}
