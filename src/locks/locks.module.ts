import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksService } from 'src/locks/services/tasks/tasks.service';
import { Lock } from './entities/lock.entity';
import { LocksController } from './locks.controller';
import { LocksService } from './services/locks/locks.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([Lock]),
  ],
  providers:[LocksService, TasksService],
  controllers: [LocksController],
})
export class LocksModule {}
