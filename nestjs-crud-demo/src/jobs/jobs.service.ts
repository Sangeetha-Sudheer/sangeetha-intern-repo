import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';

@Injectable()
export class JobsService {
  constructor(
    @InjectQueue('notifications')
    private readonly notificationQueue: Queue,
  ) {}

  async addNotificationJob(message: string) {
    const job = await this.notificationQueue.add(
      'send-notification',
      {
        message,
        createdAt: new Date().toISOString(),
      },
      {
        attempts: 3,
        backoff: {
          type: 'exponential',
          delay: 1000,
        },
      },
    );

    return {
      message: 'Background job added',
      jobId: job.id,
    };
  }
}
