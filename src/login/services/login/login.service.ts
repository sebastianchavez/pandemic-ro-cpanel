import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginDto } from 'src/login/dtos/login.dto';
import { QueryGetLoginDto } from 'src/login/dtos/query-get-login.dto';
import { QueryGetLoginsDto } from 'src/login/dtos/query-get-logins.dto';
import { Login } from 'src/login/entities/login.entity';
import { Repository, Like } from 'typeorm';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(Login)
    private loginRepository: Repository<Login>,
  ) {}

  async getLogins(query: QueryGetLoginsDto) {
    try {
      const { email, ip, name, limit, page } = query;
      const where = {};
      const select = {
        account_id: true,
        userid: true,
        email: true,
        last_ip: true,
        chars: true,
      };
      if (email) {
        where['email'] = Like(`%${email}%`);
      }
      if (ip) {
        where['ip'] = Like(`%${ip}%`);
      }
      if (name) {
        where['chars'] = {
          name: Like(`%${name}%`),
        };
      }
      const user = await this.loginRepository.find({
        select,
        relations: ['chars'],
        where,
      });
      return {
        user,
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async getLogin(query: QueryGetLoginDto) {
    try {
      const { email, userid } = query;
      const where = {};
      if (email) {
        where['email'] = email.toLowerCase();
      }
      if (userid) {
        where['userid'] = userid;
      }
      const loginUser = await this.loginRepository.findOne({
        select: { account_id: true, email: true },
        where,
      });
      return {
        loginUser,
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async register(body: LoginDto) {
    const account = await this.loginRepository.findOne({
      select: { userid: true },
      where: { userid: body.userid },
    });
    if (account) {
      throw new HttpException('Ya existe este usuario', HttpStatus.BAD_REQUEST);
    }
    const login = new Login();
    login.email = body.email;
    login.sex = body.sex;
    login.userid = body.userid;
    login.user_pass = body.user_pass;
    login.group_id = 0;
    login.state = 0;
    login.unban_time = 0;
    login.expiration_time = 0;
    login.logincount = 0;
    login.last_ip = body.last_ip;
    login.character_slots = 15;
    login.pincode_change = 0;
    login.vip_time = 0;
    login.old_group = 0;
    login.web_auth_token_enabled = 0;
    return this.loginRepository.insert(login);
  }
}
