import { Module } from '@nestjs/common';
import { ImageController } from './image.controller';
import { ImageService } from './image.service';
import { Image } from 'src/entities/image.entity'; //追加！
import { TypeOrmModule } from '@nestjs/typeorm'; //追加！
import { CloudinaryModule } from '../cloudinary/cloudinary.module';
import { AdminModule } from 'src/admin/admin.module';

@Module({
  controllers: [ImageController],
  imports: [TypeOrmModule.forFeature([Image]), CloudinaryModule, AdminModule], // 追加！
  providers: [ImageService],
})
export class ImageModule {}
