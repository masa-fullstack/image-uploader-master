import { Module } from '@nestjs/common';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';
import { Cat } from 'src/entities/cat.entity'; //追加！
import { TypeOrmModule } from '@nestjs/typeorm'; //追加！

@Module({
  controllers: [CatController],
  imports: [TypeOrmModule.forFeature([Cat])], // 追加！
  providers: [CatService]
})
export class CatModule {}
