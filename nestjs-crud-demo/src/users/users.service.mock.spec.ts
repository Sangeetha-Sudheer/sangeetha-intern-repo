import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersService } from './users.service';
import { User } from './user.entity';

describe('UsersService - mocked repository', () => {
  let service: UsersService;
  let repository: Repository<User>;

  const mockRepository = {
    find: jest.fn(),
    findOneBy: jest.fn(),
    create: jest.fn(),
    save: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);

    repository = module.get<Repository<User>>(
      getRepositoryToken(User),
    );

    jest.clearAllMocks();
  });

  it('should return users from mocked repository', async () => {
    const mockUsers = [
      {
        id: 1,
        name: 'Alice',
        email: 'alice@example.com',
        status: 'active',
      },
    ] as User[];

    mockRepository.find.mockResolvedValue(mockUsers);

    const result = await service.findAll();

    expect(result).toEqual(mockUsers);
    expect(repository.find).toHaveBeenCalledTimes(1);
  });

  it('should return one user from mocked repository', async () => {
    const mockUser = {
      id: 1,
      name: 'Alice',
      email: 'alice@example.com',
      status: 'active',
    } as User;

    mockRepository.findOneBy.mockResolvedValue(mockUser);

    const result = await service.findOne(1);

    expect(result).toEqual(mockUser);
    expect(repository.findOneBy).toHaveBeenCalled();
  });
});
