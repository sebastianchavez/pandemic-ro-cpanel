import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { db } from './config/db.config';
import { LocksModule } from './locks/locks.module';
import { LoginModule } from './login/login.module';
import { HealthModule } from './health/health.module';
import { CharModule } from './char/char.module';
import { ScheduleModule } from '@nestjs/schedule';
import { PrizeModule } from './prize/prize.module';
import { ItemModule } from './item/item.module';
import { ConnectionUserModule } from './connection-user/connection-user.module';
import { VoteModule } from './vote/vote.module';
import { PrizePvpModule } from './prize-pvp/prize-pvp.module';
import { PvpRankingModule } from './pvp-ranking/pvp-ranking.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(db),
    LocksModule,
    LoginModule,
    HealthModule,
    CharModule,
    ScheduleModule.forRoot(),
    PrizeModule,
    ItemModule,
    ConnectionUserModule,
    VoteModule,
    PrizePvpModule,
    PvpRankingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
