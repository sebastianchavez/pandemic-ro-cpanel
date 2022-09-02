import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginDto } from 'src/account/dtos/login.dto';
import { QueryLoginDto } from 'src/account/dtos/query-login.dto';
import { Login } from 'src/account/entities/login.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LoginService {

    constructor(
        @InjectRepository(Login)
        private loginRepository: Repository<Login>,
    ) {
    }

    async getAccount(query: QueryLoginDto) {
        try {
            const user = await this.loginRepository.find({ select: { account_id: true, email: true }, where: { email: query.email.toLowerCase() } })
            return {
                user
            }
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }

    async register(body: LoginDto) {
        const account = await this.loginRepository.findOne({ select: { userid: true }, where: { userid: body.userid } })
        if (account) {
            throw new HttpException('Ya existe este nombre de usuario', HttpStatus.BAD_REQUEST)
        }
        const login = new Login()
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
        return this.loginRepository.insert(login)

    }
}
