import { Module } from '@nestjs/common';
import { AccountController } from './account.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { AccountService } from './services/account/account.service';
import { Account } from './entities/account.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Account]),
    HttpModule,
  ],
  controllers: [AccountController],
  providers: [AccountService]
})
export class AccountModule { }
