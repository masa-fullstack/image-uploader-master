import { BadRequestException, Injectable } from '@nestjs/common';
import { Admin } from 'src/entities/admin.entity'; //追加！
import { Repository } from 'typeorm'; //追加！
import { InjectRepository } from '@nestjs/typeorm'; //追加！

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin) //追加！
    private readonly adminRepository: Repository<Admin>, //追加！
  ) {}

  async authPassword(password: string) {
    console.log(password);
    if (password) {
      const res = await this.adminRepository.findOne({
        where: { password: password },
      });
      if (res) {
        return true;
      }
    }
    return false;
  }
}
