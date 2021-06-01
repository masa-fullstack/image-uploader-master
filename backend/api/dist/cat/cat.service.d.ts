import { Cat } from 'src/entities/cat.entity';
import { Repository } from 'typeorm';
export declare class CatService {
    private readonly catRepository;
    constructor(catRepository: Repository<Cat>);
    getCatTop10(): Promise<Cat[]>;
    putCat(id: string): Promise<import("typeorm").UpdateResult | import("typeorm").InsertResult>;
}
