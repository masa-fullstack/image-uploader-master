import { AdminService } from './admin.service';
export declare class AdminController {
    private readonly service;
    constructor(service: AdminService);
    authPassword(password: string): Promise<boolean>;
}
