import { Body, Controller, Delete, Get, Param, Post, Put, Query, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { RequestSavePrizeConnectionDto } from './dtos/request-save-prize-connection.dto';
import { PrizeService } from './services/prize/prize.service';

@Controller('api/prizes')
export class PrizeController {
    constructor(
        private prizeService: PrizeService
    ){}

    @Post('save-prize')
    async savePrize(@Body() body: RequestSavePrizeConnectionDto, @Res() res: Response){
        try {
            const response = this.prizeService.savePrizeConnection(body)
            res.status(HttpStatus.OK).send(response)
        } catch (error) {
            throw error;
        }
    }

    @Delete('delete-prize/:id')
    async deletePrize(@Param() params, @Res() res: Response){
        try {
            const { id } = params
            const response = await this.prizeService.deletePrizeConnection(id)
            res.status(HttpStatus.OK).send(response)
        } catch (error) {
            throw error;
        }
    }

    @Get('get-prizes')
    async getPrize(@Res() res: Response){
        try {
            const response = await this.prizeService.getPrizesConnection()
            res.status(HttpStatus.OK).send(response)
        } catch (error) {
            throw error;
        }
    }

}
