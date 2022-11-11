import { Body, Controller, Get, HttpStatus, Post, Put, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { AccountService } from './services/account/account.service';

@Controller('api/accounts')
export class AccountController {

    constructor(
        private accountService: AccountService,
    ) { }

    @Get('get-account')
    async getAccount(){

    }

    @Put('change-password')
    async updateUser(@Body() body, @Res() res: Response){
        try {
            const response = await this.accountService.changePassword(body)
            res.status(HttpStatus.OK).send(response)
        } catch (error) {
            res.status(HttpStatus.BAD_REQUEST).send(error)
        }
    }
}
