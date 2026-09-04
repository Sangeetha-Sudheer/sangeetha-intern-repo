import { GreetingService } from './greeting.service';

export class GreetingController {
  constructor(private readonly greetingService: GreetingService) {}

  getGreeting(name: string) {
    return {
      message: this.greetingService.getGreeting(name),
    };
  }
}
