import { Body, Controller, Get, HttpStatus, Post, Query, Res } from '@nestjs/common';
import { response, Response } from 'express';
import { LoginDto } from './dtos/login.dto';
import { QueryLoginDto } from './dtos/query-login.dto';
import { HealthService } from './services/health/health.service';
import { LoginService } from './services/login/login.service';

@Controller('api/accounts')
export class AccountController {

    constructor(
        private loginService: LoginService,
        private healthService: HealthService
    ) { }

    @Get('status')
    async getServerStatus(@Res() res: Response) {
        try {
            const response = await this.healthService.getStatus()
            res.status(HttpStatus.OK).send(response)
        } catch (error) {
            res.status(HttpStatus.BAD_REQUEST).send(error)
        }
    }

    @Post('register')
    async registerAccount(@Body() body: LoginDto, @Res() res: Response) {
        try {
            const response = await this.loginService.register(body)
            res.status(HttpStatus.OK).send({ message: 'Usuario registado con éxito', idUser: response.raw.insertId })
        } catch (error) {
            res.status(HttpStatus.BAD_REQUEST).json(error)
        }
    }

    @Get('get-accounts')
    async getAccounts(@Query() query: QueryLoginDto, @Res() res: Response) {
        try {
            const response = await this.loginService.getAccounts(query)
            res.status(HttpStatus.OK).send(response.user)
        } catch (error) {
            res.status(HttpStatus.BAD_REQUEST).send(error)
        }
    }

    @Get('get-account')
    async getAccount(@Query() query: QueryLoginDto, @Res() res: Response) {
        try {
            const response = await this.loginService.getAccount(query)
            res.status(HttpStatus.OK).send(response)
        } catch (error) {
            res.status(HttpStatus.BAD_REQUEST).send(error)
        }
    }
}
