import { Controller, Get, Post, Query } from '@nestjs/common';
import { BullQueueService } from './bull-queue.service';

@Controller('bull-queue')
export class BullQueueController {
  constructor(private readonly bullQueueService: BullQueueService) {}

  @Post('create-job')
  async createJobTest(
    @Query('key') key: string,
    @Query('value') value: string,
  ) {
    return this.bullQueueService.createJob(key, value);
  }

  @Get('get-job')
  async getJob(@Query('key') key: string) {
    return this.bullQueueService.getJobByKey(key);
  }
}
