import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class BullQueueService {
  constructor(
    @InjectQueue('BULL-QUEUE-INITIALIZER') private bullQueue: Queue,
  ) {}

  async resumeQueue() {
    await this.bullQueue.resume();
  }
  async pauseQueue() {
    await this.bullQueue.pause();
  }

  async createJob(key, value) {
    const job = await this.bullQueue.add('BULL-QUEUE', {
      [key]: value,
    });
    return job;
  }

  async getJobByKey(key) {
    const job = await this.bullQueue.getJob(key);
    return job;
  }
}
