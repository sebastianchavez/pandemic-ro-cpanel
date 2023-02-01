import { Controller, Get, Query } from '@nestjs/common';
import { Res } from '@nestjs/common/decorators';
import { HttpStatus } from '@nestjs/common/enums';
import { Response } from 'express';
import { QueryGetItemsDto } from './dtos/query-get-items.dto';
import { ItemService } from './services/item/item.service';

@Controller('api/items')
export class ItemController {

    constructor(
        private itemService: ItemService
    ) { }

    @Get('/get-items')
    async getItems(@Query() query: QueryGetItemsDto, @Res() res: Response){
        try {
            const items = await this.itemService.getItems(query)
            res.status(HttpStatus.OK).send(items)
        } catch (error) {
            throw error
        }
    }
}
