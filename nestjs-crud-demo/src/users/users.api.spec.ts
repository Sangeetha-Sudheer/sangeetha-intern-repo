/** @jest-environment node */

import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('Users API integration tests', () => {
  let app: INestApplication;

  const mockUsersService = {
    findAll: jest.fn(),
    create: jest.fn(),
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule =
      await Test.createTestingModule({
        controllers: [UsersController],
        providers: [
          {
            provide: UsersService,
            useValue: mockUsersService,
          },
        ],
      }).compile();

    app = moduleFixture.createNestApplication();

    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );

    await app.init();

    jest.clearAllMocks();
  });

  afterEach(async () => {
    await app.close();
  });

  it('GET /users should return users', async () => {
    const mockUsers = [
      {
        id: 1,
        name: 'Alice',
        email: 'alice@example.com',
        status: 'active',
      },
    ];

    mockUsersService.findAll.mockResolvedValue(mockUsers);

    const response = await request(app.getHttpServer())
      .get('/users')
      .expect(200);

    expect(response.body).toEqual(mockUsers);
    expect(mockUsersService.findAll).toHaveBeenCalledTimes(1);
  });

  it('POST /users should create a user', async () => {
    const createdUser = {
      id: 2,
      name: 'Bob',
      email: 'bob@example.com',
      status: 'active',
    };

    mockUsersService.create.mockResolvedValue(createdUser);

    const response = await request(app.getHttpServer())
      .post('/users')
      .send({
        name: 'Bob',
        email: 'bob@example.com',
      })
      .expect(201);

    expect(response.body).toEqual(createdUser);
    expect(mockUsersService.create).toHaveBeenCalled();
  });
});
