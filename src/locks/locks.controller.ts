import { Controller, Post, Put } from '@nestjs/common';
import { LocksService } from './services/locks/locks.service';

@Controller('locks')
export class LocksController {

    constructor(
        private lockService: LocksService
    ){}

    @Put('ban-user')
    banUser(){
        try {
            
        } catch (error) {
            
        }
    }

    @Put('lock')
    lock(){
        try {
            
        } catch (error) {
            
        }
    }
}
