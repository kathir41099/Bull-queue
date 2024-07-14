import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { BullQueueService } from './bull-queue.service';

@Processor({
  name: 'BULL-QUEUE-INITIALIZER',
})
export class BullQueueProcessor {
  constructor(private readonly bullQueueService: BullQueueService) {}

  @Process('BULL-QUEUE')
  async handleQueue(job: Job) {
    try {
      await this.bullQueueService.pauseQueue();
      // Write our functionalities
      console.log('Test', job.data);
      await this.bullQueueService.resumeQueue();
    } catch (err) {
      console.log('while receive bull-queue error', err);
    }
  }
}
