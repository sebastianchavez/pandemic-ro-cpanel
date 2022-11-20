import { Body, Controller, Post, Put, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { RequestUpdateLockUserDto } from './dtos/request-update-lock-user.dto';
import { LocksService } from './services/locks/locks.service';

@Controller('api/lock')
export class LocksController {

    constructor(
        private lockService: LocksService
    ){}

    @Put('update-lock-user')
    async updateBanUser(@Body() body: RequestUpdateLockUserDto, @Res() res: Response){
        try {
            const response = await this.lockService.saveOrUpdateLockService(body)
            res.status(HttpStatus.OK).send(response)
        } catch (error) {
            console.log('ERROR:', error)
            res.status(HttpStatus.BAD_REQUEST).send(error)
        }
    }
}
