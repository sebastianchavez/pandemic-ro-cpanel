import { Module } from '@nestjs/common';
import { LocksController } from './locks.controller';

@Module({
  controllers: [LocksController]
})
export class LocksModule {}
