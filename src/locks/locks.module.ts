import { Module } from '@nestjs/common';
import { LocksController } from './locks.controller';
import { LocksService } from './services/locks/locks.service';

@Module({
  providers:[LocksService],
  controllers: [LocksController]
})
export class LocksModule {}
