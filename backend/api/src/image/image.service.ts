import { Injectable, BadRequestException } from '@nestjs/common';
import { Image } from 'src/entities/image.entity'; //追加！
import { Repository } from 'typeorm'; //追加！
import { InjectRepository } from '@nestjs/typeorm'; //追加！
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { AdminService } from 'src/admin/admin.service';

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(Image) //追加！
    private readonly imageRepository: Repository<Image>, //追加！
    private readonly adminService: AdminService,
    private cloudinary: CloudinaryService,
  ) {}

  addImage(fileName: string, file: string, label: string) {
    const image = new Image();
    image.fileName = fileName;
    image.file = file;
    image.label = label || 'NO LABEL';
    return this.imageRepository.insert(image);
  }

  deleteImage(id: string) {
    return this.imageRepository.delete(id);
  }

  getImage(id: string) {
    return this.imageRepository.findOne({ where: { id: id } });
  }

  getImageList(label?: string) {
    if (label)
      return this.imageRepository.find({ where: { label: '%' + label + '%' } });
    return this.imageRepository.find();
  }

  async uploadImageToCloudinary(file: Express.Multer.File) {
    return await this.cloudinary.uploadImage(file).catch(() => {
      throw new BadRequestException('Invalid file type.');
    });
  }

  authPassword(password: string) {
    return this.adminService.authPassword(password);
  }
}
