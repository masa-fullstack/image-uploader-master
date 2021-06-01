import { Admin } from 'src/entities/admin.entity';
import { Repository } from 'typeorm';
export declare class AdminService {
    private readonly adminRepository;
    constructor(adminRepository: Repository<Admin>);
    authPassword(password: string): Promise<boolean>;
}
