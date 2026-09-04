import { GreetingService } from './greeting.service';

describe('GreetingService', () => {
  let service: GreetingService;

  beforeEach(() => {
    service = new GreetingService();
  });

  it('returns a greeting for a name', () => {
    expect(service.getGreeting('Sangeetha')).toBe(
      'Hello, Sangeetha!',
    );
  });

  it('handles an empty name', () => {
    expect(service.getGreeting('')).toBe('Hello, !');
  });
});
