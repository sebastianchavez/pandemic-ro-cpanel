import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { db } from './config/db.config';
import { LocksModule } from './locks/locks.module';
import { LocksService } from './services/locks/locks.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(db),
    AccountModule,
    LocksModule
  ],
  controllers: [AppController],
  providers: [AppService, LocksService],
})
export class AppModule { }
