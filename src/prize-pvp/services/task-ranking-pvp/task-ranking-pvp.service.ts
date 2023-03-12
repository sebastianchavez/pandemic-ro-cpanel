import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { PrizePvp } from 'src/prize-pvp/entities/prize-pvp.entity';
import { PrizeUserPvp } from 'src/prize-pvp/entities/prize-user-pvp.entity';
import { PvpRanking } from 'src/prize-pvp/entities/pvpranking.entity';
import { LessThan, MoreThan, Repository } from 'typeorm';

// * * * * * *
// | | | | | |
// | | | | | day of week
// | | | | months
// | | | day of month
// | | hours
// | minutes
// seconds (optional)

@Injectable()
export class TaskRankingPvpService {

    constructor(
        @InjectRepository(PrizePvp)
        private prizePvpRepository: Repository<PrizePvp>, 
        @InjectRepository(PrizeUserPvp)
        private prizeUserPvpRepository: Repository<PrizeUserPvp>,
        @InjectRepository(PvpRanking)
        private pvpRankingRepository: Repository<PvpRanking>
    ){}

    @Cron('0 0 0 * * 1')
    async createPrizesRankingPvp(){
        try {
            let timer = 0;
            let interval = setInterval(() => {
                timer++
            },1000)
            console.log('CRON RUN');
            
            const ranking = await this.pvpRankingRepository.find({
                order: {
                    kill: 'DESC'
                }
            })

            if(ranking && ranking.length > 0){
                const prizes = await this.prizePvpRepository.find({})
                
                const prizeUserPvpList: PrizeUserPvp[] = [];
                await Promise.all(ranking.map(async (r, i) => {
                    const rank = i +1;
                    await Promise.all(prizes.map(async p => {
                        if(rank > p.morethan && rank < p.lessthan){
                            const newPrizeUserPvp = new PrizeUserPvp();
                            newPrizeUserPvp.char_id = r.char_id;
                            newPrizeUserPvp.is_reclamed = false;
                            newPrizeUserPvp.ranking_date = new Date()
                            newPrizeUserPvp.created_at = new Date();
                            newPrizeUserPvp.ranking = i + 1;
                            newPrizeUserPvp.item_id = p.item_id;
                            newPrizeUserPvp.quantity = p.quantity;
                            prizeUserPvpList.push(newPrizeUserPvp)
                        }
                    }))
                }))
                await this.prizeUserPvpRepository.insert(prizeUserPvpList)
                await this.pvpRankingRepository.clear()
            }
        } catch (error) {
            console.log('ERROR TaskRankingPvp:', error);
        }
    }
}