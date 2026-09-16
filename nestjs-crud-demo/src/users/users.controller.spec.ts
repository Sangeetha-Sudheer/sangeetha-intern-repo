import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './user.entity';

describe('UsersController', () => {
  let controller: UsersController;

  const mockUsersService = {
    findAll: jest.fn(),
    findOne: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
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

    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return all users from the service', async () => {
    const users = [
      { id: 1, name: 'Alice', email: 'alice@example.com' },
      { id: 2, name: 'Bob', email: 'bob@example.com' },
    ] as User[];

    mockUsersService.findAll.mockResolvedValue(users);

    const result = await controller.findAll();

    expect(result).toEqual(users);
    expect(mockUsersService.findAll).toHaveBeenCalledTimes(1);
  });

  it('should return one user from the service', async () => {
    const user = {
      id: 1,
      name: 'Alice',
      email: 'alice@example.com',
    } as User;

    mockUsersService.findOne.mockResolvedValue(user);

    const result = await controller.findOne(1);

    expect(result).toEqual(user);
    expect(mockUsersService.findOne).toHaveBeenCalledWith(1);
  });

  it('should create a user through the service', async () => {
    const createUserData = {
      name: 'Charlie',
      email: 'charlie@example.com',
    };

    const createdUser = {
      id: 3,
      ...createUserData,
    } as User;

    mockUsersService.create.mockResolvedValue(createdUser);

    const result = await controller.create(createUserData);

    expect(result).toEqual(createdUser);
    expect(mockUsersService.create).toHaveBeenCalledWith(createUserData);
  });
});
