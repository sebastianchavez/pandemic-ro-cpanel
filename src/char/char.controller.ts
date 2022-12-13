import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { CharService } from './services/char/char.service';
import { Response } from 'express';
import { QueryGetCharsDto } from './dtos/query-get-chars.dto';

@Controller('api/char')
export class CharController {
  constructor(private charService: CharService) {}

  @Get('get-char')
  async getAccount(@Query() query, @Res() res: Response) {
    try {
      const response = await this.charService.getChar(query);
      res.status(HttpStatus.OK).send(response);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).send(error);
    }
  }

  @Get('get-chars')
  async getAccounts(@Query() query: QueryGetCharsDto, @Res() res: Response) {
    try {
      const response = await this.charService.getChars(query);
      res.status(HttpStatus.OK).send(response);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).send(error);
    }
  }

  @Put('change-password')
  async updateUser(@Body() body, @Res() res: Response) {
    try {
      const response = await this.charService.changePassword(body);
      res.status(HttpStatus.OK).send(response);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).send(error);
    }
  }

  @Post('register')
  async registerAccount(@Body() body, @Res() res: Response) {
    try {
      const response = await this.charService.register(body);
      res.status(HttpStatus.OK).send(response);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).send(error);
    }
  }

  @Put('change-name')
  async changeNameAccount(@Body() body, @Res() res: Response) {
    try {
      const response = await this.charService.changeName(body);
      res.status(HttpStatus.OK).send(response);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).send(error);
    }
  }
}
