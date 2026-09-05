import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UsersService } from './users.service';
import { User } from './user.entity';

describe('UsersService', () => {
  let service: UsersService;
  let repository: Repository<User>;

  const mockRepository = {
    find: jest.fn(),
    findOneBy: jest.fn(),
    create: jest.fn(),
    save: jest.fn(),
    preload: jest.fn(),
    remove: jest.fn(),
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

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all users', async () => {
    const users = [
      {
        id: 1,
        name: 'Alice',
        email: 'alice@example.com',
        status: 'active',
      },
      {
        id: 2,
        name: 'Bob',
        email: 'bob@example.com',
        status: 'active',
      },
    ] as User[];

    mockRepository.find.mockResolvedValue(users);

    const result = await service.findAll();

    expect(result).toEqual(users);
    expect(repository.find).toHaveBeenCalledTimes(1);
  });

  it('should return one user by id', async () => {
    const user = {
      id: 1,
      name: 'Alice',
      email: 'alice@example.com',
      status: 'active',
    } as User;

    mockRepository.findOneBy.mockResolvedValue(user);

    const result = await service.findOne(1);

    expect(result).toEqual(user);
    expect(repository.findOneBy).toHaveBeenCalledWith({
      id: 1,
    });
  });

  it('should throw NotFoundException when user does not exist', async () => {
    mockRepository.findOneBy.mockResolvedValue(null);

    await expect(service.findOne(999)).rejects.toThrow(
      new NotFoundException(
        'User with ID 999 was not found',
      ),
    );

    expect(repository.findOneBy).toHaveBeenCalledWith({
      id: 999,
    });
  });

  it('should create and save a new user', async () => {
    const createData = {
      name: 'Charlie',
      email: 'charlie@example.com',
      privateNote: 'Test note',
    };

    const createdUser = {
      id: 3,
      ...createData,
      status: 'active',
    } as User;

    mockRepository.create.mockReturnValue(createdUser);
    mockRepository.save.mockResolvedValue(createdUser);

    const result = await service.create(createData);

    expect(repository.create).toHaveBeenCalledWith(
      createData,
    );

    expect(repository.save).toHaveBeenCalledWith(
      createdUser,
    );

    expect(result).toEqual(createdUser);
  });

  it('should update an existing user', async () => {
    const updatedUser = {
      id: 1,
      name: 'Alice Updated',
      email: 'alice@example.com',
      status: 'active',
    } as User;

    mockRepository.preload.mockResolvedValue(updatedUser);
    mockRepository.save.mockResolvedValue(updatedUser);

    const result = await service.update(1, {
      name: 'Alice Updated',
    });

    expect(repository.preload).toHaveBeenCalledWith({
      id: 1,
      name: 'Alice Updated',
    });

    expect(repository.save).toHaveBeenCalledWith(
      updatedUser,
    );

    expect(result).toEqual(updatedUser);
  });

  it('should throw NotFoundException when updating a missing user', async () => {
    mockRepository.preload.mockResolvedValue(undefined);

    await expect(
      service.update(999, {
        name: 'Missing User',
      }),
    ).rejects.toThrow(
      new NotFoundException(
        'User with ID 999 was not found',
      ),
    );

    expect(repository.preload).toHaveBeenCalledWith({
      id: 999,
      name: 'Missing User',
    });
  });

  it('should remove an existing user', async () => {
    const user = {
      id: 1,
      name: 'Alice',
      email: 'alice@example.com',
      status: 'active',
    } as User;

    mockRepository.findOneBy.mockResolvedValue(user);
    mockRepository.remove.mockResolvedValue(user);

    const result = await service.remove(1);

    expect(repository.findOneBy).toHaveBeenCalledWith({
      id: 1,
    });

    expect(repository.remove).toHaveBeenCalledWith(user);

    expect(result).toEqual(user);
  });

  it('should throw NotFoundException when removing a missing user', async () => {
    mockRepository.findOneBy.mockResolvedValue(null);

    await expect(service.remove(999)).rejects.toThrow(
      new NotFoundException(
        'User with ID 999 was not found',
      ),
    );

    expect(repository.remove).not.toHaveBeenCalled();
  });
});
