import { CatService } from './cat.service';
export declare class CatController {
    private readonly service;
    constructor(service: CatService);
    getCatTop10(): Promise<import("../entities/cat.entity").Cat[]>;
    putCat(id: string): Promise<import("typeorm").UpdateResult | import("typeorm").InsertResult>;
}
