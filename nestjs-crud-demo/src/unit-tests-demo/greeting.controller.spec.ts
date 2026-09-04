import { GreetingController } from './greeting.controller';
import { GreetingService } from './greeting.service';

describe('GreetingController', () => {
  let controller: GreetingController;
  let mockGreetingService: jest.Mocked<GreetingService>;

  beforeEach(() => {
    mockGreetingService = {
      getGreeting: jest.fn(),
    } as jest.Mocked<GreetingService>;

    controller = new GreetingController(mockGreetingService);
  });

  it('returns the greeting from the service', () => {
    mockGreetingService.getGreeting.mockReturnValue(
      'Hello, Sangeetha!',
    );

    const result = controller.getGreeting('Sangeetha');

    expect(result).toEqual({
      message: 'Hello, Sangeetha!',
    });

    expect(mockGreetingService.getGreeting).toHaveBeenCalledWith(
      'Sangeetha',
    );
  });

  it('calls the service once', () => {
    mockGreetingService.getGreeting.mockReturnValue('Hello, Test!');

    controller.getGreeting('Test');

    expect(
      mockGreetingService.getGreeting,
    ).toHaveBeenCalledTimes(1);
  });
});
