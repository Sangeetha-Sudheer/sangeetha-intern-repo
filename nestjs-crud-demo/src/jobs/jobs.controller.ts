import { Body, Controller, Post } from '@nestjs/common';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post('notification')
  async createNotification(
    @Body('message') message: string,
  ) {
    return this.jobsService.addNotificationJob(message);
  }
}
