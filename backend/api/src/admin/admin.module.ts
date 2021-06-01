import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { Admin } from 'src/entities/admin.entity'; //追加！
import { TypeOrmModule } from '@nestjs/typeorm'; //追加！
import { AdminController } from './admin.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Admin])], // 追加！
  providers: [AdminService],
  exports: [AdminService],
  controllers: [AdminController],
})
export class AdminModule {}
