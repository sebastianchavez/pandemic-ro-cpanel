import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryProcessLockDto } from 'src/process-lock/dtos/query-process-lock.dto';
import { RequestSaveProcessLockDto } from 'src/process-lock/dtos/request-save-process-lock.dto';
import { RequestUpdateProcessLockDto } from 'src/process-lock/dtos/request-update-process-lock.dto';
import { ProcessLock } from 'src/process-lock/entities/processlock.entity';
import { Like, Repository } from 'typeorm';

@Injectable()
export class ProcessLockService {
  constructor(
    @InjectRepository(ProcessLock)
    private processLockRepository: Repository<ProcessLock>,
  ) {}

  async getProcessLock(query: QueryProcessLockDto) {
    try {
      const { limit, page, typeValidation, value } = query
      const where = {};
      if (typeValidation) {
        where['typeValidation'] = Like(`%${typeValidation}%`);
      }
      if (value) {
        where['value'] = Like(`%${value}%`);
      }
      const totalRegister = await this.processLockRepository.count({where})
  
        let processLocks;        
        if(limit && limit > 0){
          processLocks = await this.processLockRepository.find({ select: { processlock_id: true, created_at: true, updated_at: true, typeValidation: true, value: true }, take: limit, skip: (limit * page - limit), where});  
        } else {
          processLocks = await this.processLockRepository.find({ select: { processlock_id: true, created_at: true, updated_at: true, typeValidation: true, value: true }, where});
        }
      return {
        totalRegister,
        processLocks
      }
    } catch (error) {
      throw error      
    }
  }

  saveProcessLock(body: RequestSaveProcessLockDto) {
    const processLock = new ProcessLock();
    processLock.typeValidation = body.typeValidation;
    processLock.value = body.value;
    processLock.created_at = new Date();
    return this.processLockRepository.insert(processLock);
  }

  async updateProcessLock(body: RequestUpdateProcessLockDto) {
    try {
      const processLock = await this.processLockRepository.findOneBy({
        processlock_id: body.processlock_id,
      });
      if (processLock) {
        processLock.typeValidation = body.typeValidation;
        processLock.value = body.value;
        this.processLockRepository.save(processLock);
      }
      return {
        message: 'Proceso actualizado',
      };
    } catch (error) {
      throw error;
    }
  }

  async deleteProcessLock(processlock_id: number) {
    try {
      await this.processLockRepository.delete({ processlock_id });
      return {
        message: 'Proceso eliminado',
      };
    } catch (error) {
      throw error;
    }
  }
}
