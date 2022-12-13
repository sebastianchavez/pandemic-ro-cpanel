import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksService } from 'src/locks/services/tasks/tasks.service';
import { Login } from 'src/login/entities/login.entity';
import { LoginService } from 'src/login/services/login/login.service';
import { Lock } from './entities/lock.entity';
import { LocksController } from './locks.controller';
import { LocksService } from './services/locks/locks.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Lock]),
    TypeOrmModule.forFeature([Login]),
  ],
  providers: [LocksService, TasksService],
  controllers: [LocksController],
  exports: [TypeOrmModule],
})
export class LocksModule {}
