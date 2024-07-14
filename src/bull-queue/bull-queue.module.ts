import { Module } from '@nestjs/common';
import { BullQueueService } from './bull-queue.service';
import { BullQueueController } from './bull-queue.controller';
import { BullModule } from '@nestjs/bull';
import { BullQueueProcessor } from './bull-queue.processor';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
        db: 1,
        maxRetriesPerRequest: null,
        enableReadyCheck: false,
        password:
          'eB3tuHxJOK7SfOgtnyIiDe3N6yiX82Xc6U3Xe0PbHCUsV5WyOwiFnJBZo9YNbDkdBIaYCE5ibizB5b75',
      },
    }),
    BullModule.registerQueue({
      name: 'BULL-QUEUE-INITIALIZER',
    }),
  ],
  controllers: [BullQueueController],
  providers: [BullQueueService, BullQueueProcessor],
})
export class BullQueueModule {}
