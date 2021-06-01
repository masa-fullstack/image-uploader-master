import { Injectable } from '@nestjs/common';
import { Cat } from 'src/entities/cat.entity'; //追加！
import { Repository } from 'typeorm'; //追加！
import { InjectRepository } from '@nestjs/typeorm'; //追加！

@Injectable()
export class CatService {
    constructor(
        @InjectRepository(Cat) //追加！
        private readonly catRepository: Repository<Cat> //追加！
    ) { }

    getCatTop10() {
        return this.catRepository.find({
            order: {
                searchedCount: 'DESC',
            },
            take: 10
        })
    }

    async putCat(id: string) {
        const cat = await this.catRepository.findOne({ id: id })
        // const initialCat = {id:id, searchedCount:1}

        // await connection.createQueryBuilder()
        //         .insert()
        //         .into(Cat)
        //         .values(initialCat)
        //         .onConflict(`("id") DO UPDATE SET "searchedCount" = cat.searchedCount + 1`)
        //         .execute();

        if (cat) {
            const updatedCat = { id: id, searchedCount: cat.searchedCount + 1 }
            return this.catRepository.update(id, updatedCat)
        }
        return this.catRepository.insert({ id: id, searchedCount: 1 })


    }
}
