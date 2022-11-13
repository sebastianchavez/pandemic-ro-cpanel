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

@Module({
  imports: [
    TypeOrmModule.forRoot(db),
    LocksModule,
    LoginModule,
    LogsModule,
    InventoryModule,
    StorageModule,
    HealthModule,
    CharModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
