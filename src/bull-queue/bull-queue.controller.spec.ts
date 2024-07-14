import { Test, TestingModule } from '@nestjs/testing';
import { BullQueueController } from './bull-queue.controller';
import { BullQueueService } from './bull-queue.service';

describe('BullQueueController', () => {
  let controller: BullQueueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BullQueueController],
      providers: [BullQueueService],
    }).compile();

    controller = module.get<BullQueueController>(BullQueueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
