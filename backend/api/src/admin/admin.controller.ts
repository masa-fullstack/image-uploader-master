import { Body, Controller, Post } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly service: AdminService) {}

  @Post()
  async authPassword(password: string) {
    return this.service.authPassword(password);
  }
}
