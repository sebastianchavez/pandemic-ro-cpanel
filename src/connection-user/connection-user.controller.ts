import { Controller, Get, Query, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { QueryGetMyLastConnectionDto } from './dtos/query-get-my-last-connection.dto';
import { ConnectionUserService } from './services/connection-user/connection-user.service';

@Controller('api/connection-user')
export class ConnectionUserController {

    constructor(
        private connectionUserService: ConnectionUserService
    ){}

    @Get('get-my-last-connection')
    async getMyPrize(@Query() query: QueryGetMyLastConnectionDto, @Res() res: Response){
        try {
            const { email } = query
            const response = await this.connectionUserService.getMyLastConnection(email)
            res.status(HttpStatus.OK).send(response)
        } catch (error) {
            throw error;
        }
    }
}
