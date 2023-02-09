import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeUser } from 'src/common/enums/type-user.enum';
import { RequestUpdateDeviceDto } from 'src/device/dtos/request-update-device.dto';
import { Device } from 'src/device/entities/device.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DeviceService {

    constructor(
        @InjectRepository(Device)
        private deviceRepository: Repository<Device>,
    ){}

    async insertOrUpdateDevice(request: RequestUpdateDeviceDto){
        const { mac, ip, os } = request
        try {
            const device = await this.deviceRepository.findOneBy({
                mac
            })
            if(device){
                device.updated_at = new Date();
                device.ip = ip;
                device.os = os;
                await this.deviceRepository.save(device)
            } else {
                const newDevice = new Device();
                newDevice.enabled = true;
                newDevice.ip = ip;
                newDevice.os = os;
                newDevice.mac = mac;
                newDevice.type_user = TypeUser.user
                newDevice.created_at = new Date();
                await this.deviceRepository.insert(newDevice)
            }

            return {
                message: 'Ok'
            }
        } catch (error) {
            throw error    
        }
    }
}
