import { PartialType } from '@nestjs/mapped-types';
import { CreateBullQueueDto } from './create-bull-queue.dto';

export class UpdateBullQueueDto extends PartialType(CreateBullQueueDto) {}
