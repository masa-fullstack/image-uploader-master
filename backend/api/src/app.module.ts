import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageModule } from './image/image.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { Cloudinary } from './cloudinary';
import { CloudinaryService } from './cloudinary/cloudinary.service';
import { ConfigModule } from '@nestjs/config';
import { AdminModule } from './admin/admin.module';
import { CatModule } from './cat/cat.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.development`, `.env`],
    }),
    TypeOrmModule.forRoot(),
    ImageModule,
    CloudinaryModule,
    AdminModule,
    CatModule,
  ],
  controllers: [AppController],
  providers: [AppService, Cloudinary, CloudinaryService],
})
export class AppModule {}
