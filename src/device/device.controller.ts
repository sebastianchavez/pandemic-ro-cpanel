import { Controller, Put, Body, Res } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { Response } from 'express';
import { RequestUpdateDeviceDto } from './dtos/request-update-device.dto';
import { DeviceService } from './services/device/device.service';

@Controller('api/device')
export class DeviceController {

    constructor(
        private deviceService: DeviceService
    ){}

    @Put('update-device')
    async updateDevice(@Body() body: RequestUpdateDeviceDto, @Res() res: Response){
        try {
            const response = await this.deviceService.insertOrUpdateDevice(body)
            res.status(HttpStatus.OK).send(response)
        } catch (error) {
            throw error
        }
    }
}
