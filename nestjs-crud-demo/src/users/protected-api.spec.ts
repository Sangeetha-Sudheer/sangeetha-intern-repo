/** @jest-environment node */

import {
  CanActivate,
  Controller,
  ExecutionContext,
  Get,
  INestApplication,
  Injectable,
  UseGuards,
} from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';

@Injectable()
class TestAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();

    req.user = {
      sub: 'test-user',
      email: 'test@example.com',
    };

    return true;
  }
}

@Controller('protected-test')
class ProtectedTestController {
  @Get()
  @UseGuards(TestAuthGuard)
  getProtectedData() {
    return {
      message: 'Protected API accessed',
    };
  }
}

describe('Mocked authentication API test', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule =
      await Test.createTestingModule({
        controllers: [ProtectedTestController],
        providers: [TestAuthGuard],
      }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('should access protected endpoint using mocked authentication', async () => {
    const response = await request(app.getHttpServer())
      .get('/protected-test')
      .expect(200);

    expect(response.body).toEqual({
      message: 'Protected API accessed',
    });
  });
});
