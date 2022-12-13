import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Login } from 'src/login/entities/login.entity';
import { CharController } from './char.controller';
import { Char } from './entities/char.entity';
import { CharService } from './services/char/char.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Char]),
    TypeOrmModule.forFeature([Login]),
  ],
  controllers: [CharController],
  providers: [CharService],
  exports: [TypeOrmModule],
})
export class CharModule {}
