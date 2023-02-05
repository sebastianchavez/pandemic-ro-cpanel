import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { db } from './config/db.config';
import { LocksModule } from './locks/locks.module';
import { LoginModule } from './login/login.module';
import { LogsModule } from './logs/logs.module';
import { InventoryModule } from './inventory/inventory.module';
import { StorageModule } from './storage/storage.module';
import { HealthModule } from './health/health.module';
import { CharModule } from './char/char.module';
import { ScheduleModule } from '@nestjs/schedule';
import { DeviceModule } from './device/device.module';
import { ProcessLockModule } from './process-lock/process-lock.module';
import { PrizeModule } from './prize/prize.module';
import { ItemModule } from './item/item.module';
import { ConnectionUserModule } from './connection-user/connection-user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(db),
    LocksModule,
    LoginModule,
    LogsModule,
    InventoryModule,
    StorageModule,
    HealthModule,
    CharModule,
    ScheduleModule.forRoot(),
    DeviceModule,
    ProcessLockModule,
    PrizeModule,
    ItemModule,
    ConnectionUserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
