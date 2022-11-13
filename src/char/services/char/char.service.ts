import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryGetCharsDto } from 'src/char/dtos/query-get-chars.dto';
import { Char } from 'src/char/entities/char.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class CharService {

    schema: string = process.env.DB_SCHEMA

    constructor(
        @InjectRepository(Char)
        private charRepository: Repository<Char>,
    ){}

    async getChars(query: QueryGetCharsDto) {
        try {
            const { limit, page } = query
            let where = '';
            let count = 0;
            for(let q in query){
                if(query[q] && q == 'name'){
                    where += count == 0 ? 'where ' : 'and ';
                    where += 'ch.' + q + ' like "%' + query[q] + '%"';
                } else if (query[q] && q == 'email'){
                    where += count == 0 ? 'where ' : 'and ';
                    where += 'l.' + q + ' like "%' + query[q] + '%"';
                } else if (query[q] && q == 'ip'){
                    where += count == 0 ? 'where ' : 'and ';
                    where += 'l.last_ip like "%' + query[q] + '%"';
                }
                count++;
            }
            const totalRegister = await this.charRepository.query(`
                    select 
                        count(*) 
                    from ${this.schema}.char ch 
                    inner join ${this.schema}.login l on l.account_id = ch.account_id
                    ${where}`)
            where += ` LIMIT ${limit} OFFSET ${(page * limit) - limit }`
            const chars = await this.charRepository.query(`
                    select 
                        ch.name,
                        ch.base_level,
                        ch.job_level,
                        ch.last_map,
                        ch.last_x,
                        ch.last_y,
                        ch.char_id,
                        ch.account_id,
                        l.last_ip,
                        l.email
                    from ${this.schema}.char ch 
                    inner join ${this.schema}.login l on l.account_id = ch.account_id
                    ${where};`)
                console.log({totalRegister})
            return {
                chars,
                totalRegister: Number(totalRegister[0]['count(*)'])
            }
        } catch (error) {
            console.log('ERROR:',error)
            throw error
        }
    }

    changePassword(request) {
        try {
            
        } catch (error) {
            
        }
    }

    getChar(query) {
        try {
            
        } catch (error) {
            
        }
    }

    register(body) {
        try {
            
        } catch (error) {
            
        }
    }

    changeName(body){
        try {
            
        } catch (error) {
            
        }
    }
}
