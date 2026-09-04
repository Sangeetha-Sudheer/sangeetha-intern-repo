import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController - mocked service', () => {
  let controller: UsersController;
  let service: UsersService;

  const mockUsersService = {
    findAll: jest.fn(),
    findOne: jest.fn(),
    create: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: mockUsersService,
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);

    jest.clearAllMocks();
  });

  it('should return mocked users', async () => {
    const mockUsers = [
      {
        id: 1,
        name: 'Alice',
        email: 'alice@example.com',
        status: 'active',
      },
    ];

    mockUsersService.findAll.mockResolvedValue(mockUsers);

    const result = await controller.findAll();

    expect(result).toEqual(mockUsers);
    expect(service.findAll).toHaveBeenCalledTimes(1);
  });

  it('should demonstrate jest.spyOn()', async () => {
    const spy = jest
      .spyOn(service, 'findOne')
      .mockResolvedValue({
        id: 2,
        name: 'Bob',
        email: 'bob@example.com',
        status: 'active',
      });

    const result = await controller.findOne(2);

    expect(result.name).toBe('Bob');
    expect(spy).toHaveBeenCalledWith(2);
  });
});
