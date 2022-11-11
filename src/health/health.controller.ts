import { Body, Controller, Get, HttpStatus, Post, Put, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { HealthService } from './services/health/health.service';

@Controller('health')
export class HealthController {

    constructor(
        private healthService: HealthService
    ){}

    @Get('status')
    async getServerStatus(@Res() res: Response) {
        try {
            const response = await this.healthService.getStatus()
            res.status(HttpStatus.OK).send(response)
        } catch (error) {
            res.status(HttpStatus.BAD_REQUEST).send(error)
        }
    }
}
