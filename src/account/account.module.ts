import { Module } from '@nestjs/common';
import { AccountController } from './account.controller';
import { LoginService } from './services/login/login.service';
import { HealthService } from './services/health/health.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Login } from './entities/login.entity';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    TypeOrmModule.forFeature([Login]),
    HttpModule,
  ],
  controllers: [AccountController],
  providers: [LoginService, HealthService]
})
export class AccountModule { }
