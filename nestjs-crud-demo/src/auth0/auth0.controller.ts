import {
  Controller,
  Get,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { Auth0JwtGuard } from './auth0-jwt.guard';

type AuthenticatedRequest = Request & {
  user?: unknown;
};

@Controller('auth0')
export class Auth0Controller {
  @Get('protected')
  @UseGuards(Auth0JwtGuard)
  getProtected(@Req() request: AuthenticatedRequest) {
    return {
      message: 'Authenticated access granted',
      user: request.user,
    };
  }
}
