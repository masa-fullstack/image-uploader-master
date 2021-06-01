import { Controller, Get, Param, Put } from '@nestjs/common';
import { CatService } from './cat.service';

@Controller('cat')
export class CatController {
    constructor(private readonly service: CatService) { }

    @Get()
    getCatTop10() {
        return this.service.getCatTop10();
    }

    @Put('/:id')
    putCat(@Param('id') id: string,) {
        return this.service.putCat(id);
    }

}
