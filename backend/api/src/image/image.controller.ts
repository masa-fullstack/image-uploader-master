import {
  Controller,
  Get,
  Post,
  Param,
  UseInterceptors,
  UploadedFile,
  Body,
  Query,
  Patch,
  UnauthorizedException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageService } from './image.service';

@Controller('image')
export class ImageController {
  constructor(private readonly service: ImageService) {}

  @Get('/:id')
  getImage(@Param('id') id: string) {
    return this.service.getImage(id);
  }

  @Patch('/:id')
  async deleteImage(
    @Param('id') id: string,
    @Body('password') password: string,
  ) {
    if (!(await this.service.authPassword(password))) {
      throw new UnauthorizedException(); // 認証失敗
    }
    return this.service.deleteImage(id);
  }

  @Get()
  getImageList(@Query() query?: { label?: string }) {
    return this.service.getImageList(query?.label);
  }

  @Post()
  async addImage(@Body() query: { imageURL: string; label: string }) {
    return this.service.addImage(query.label, query.imageURL, query.label);
  }

  @Post('/upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadAddImage(
    @UploadedFile() file: Express.Multer.File,
    @Body() query: { label: string },
  ) {
    // addImage(@Body() query: { fileName: string; file: string }) {
    const res = await this.service.uploadImageToCloudinary(file);
    this.service.addImage(res.original_filename, res.secure_url, query.label);
    return res;
  }
}
