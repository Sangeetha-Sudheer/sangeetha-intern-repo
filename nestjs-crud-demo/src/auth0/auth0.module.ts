import { Module } from '@nestjs/common';
import { Auth0Controller } from './auth0.controller';
import { Auth0JwtGuard } from './auth0-jwt.guard';

@Module({
  controllers: [Auth0Controller],
  providers: [Auth0JwtGuard],
})
export class Auth0Module {}
