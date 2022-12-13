import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RequestSaveProcessLockDto } from 'src/process-lock/dtos/request-save-process-lock.dto';
import { RequestUpdateProcessLockDto } from 'src/process-lock/dtos/request-update-process-lock.dto';
import { ProcessLock } from 'src/process-lock/entities/processlock.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProcessLockService {
  constructor(
    @InjectRepository(ProcessLock)
    private processLockRepository: Repository<ProcessLock>,
  ) {}

  getProcessLock() {
    return this.processLockRepository.find();
  }

  saveProcessLock(body: RequestSaveProcessLockDto) {
    const processLock = new ProcessLock();
    processLock.name = body.name;
    processLock.pid = body.pid;
    processLock.type = body.type;
    processLock.size = body.size;
    return this.processLockRepository.insert(processLock);
  }

  async updateProcessLock(body: RequestUpdateProcessLockDto) {
    try {
      const processLock = await this.processLockRepository.findOneBy({
        processlock_id: body.processlock_id,
      });
      if (processLock) {
        processLock.name = body.name;
        processLock.pid = body.pid;
        processLock.size = body.size;
        processLock.type = body.type;
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
