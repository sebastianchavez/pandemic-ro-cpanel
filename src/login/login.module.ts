import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Login } from './entities/login.entity';
import { LoginController } from './login.controller';
import { LoginService } from './services/login/login.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([Login]),
    HttpModule,
  ],
  controllers: [LoginController],
  providers:[LoginService]
})
export class LoginModule {}
