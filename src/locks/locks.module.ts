import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lock } from './entities/lock.entity';
import { LocksController } from './locks.controller';
import { LocksService } from './services/locks/locks.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([Lock]),
  ],
  providers:[LocksService],
  controllers: [LocksController]
})
export class LocksModule {}
