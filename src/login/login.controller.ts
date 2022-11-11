import { Controller, Get, HttpStatus, Post, Put, Query, Res, Body } from '@nestjs/common';
import { Response } from 'express';
import { LoginDto } from './dtos/login.dto';
import { QueryLoginDto } from './dtos/query-login.dto';
import { LoginService } from './services/login/login.service';

@Controller('login')
export class LoginController {

    constructor(
        private loginService: LoginService,
    ){}

    @Post('register')
    async registerAccount(@Body() body: LoginDto, @Res() res: Response) {
        try {
            const response = await this.loginService.register(body)
            res.status(HttpStatus.OK).send({ message: 'Usuario registado con éxito', idUser: response.raw.insertId })
        } catch (error) {
            res.status(HttpStatus.BAD_REQUEST).json(error)
        }
    }

    @Get('get-logins')
    async getAccounts(@Query() query: QueryLoginDto, @Res() res: Response) {
        try {
            const response = await this.loginService.getLogins(query)
            res.status(HttpStatus.OK).send(response.user)
        } catch (error) {
            res.status(HttpStatus.BAD_REQUEST).send(error)
        }
    }


    @Get('get-login')
    async getLogin(@Query() query: QueryLoginDto, @Res() res: Response) {
        try {
            const response = await this.loginService.getLogin(query)
            res.status(HttpStatus.OK).send(response)
        } catch (error) {
            res.status(HttpStatus.BAD_REQUEST).send(error)
        }
    }
}
