import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { db } from './config/db.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(db),
    AccountModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
