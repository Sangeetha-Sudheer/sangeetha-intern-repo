import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';

@Processor('notifications')
export class NotificationProcessor extends WorkerHost {
  async process(job: Job): Promise<void> {
    console.log(`Processing job ${job.id}`);
    console.log(`Job name: ${job.name}`);
    console.log('Job data:', job.data);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log(`Job ${job.id} completed`);
  }
}
