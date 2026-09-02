import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import * as jwt from 'jsonwebtoken';
import jwksClient from 'jwks-rsa';

type AuthenticatedRequest = Request & {
  user?: string | jwt.JwtPayload;
};

@Injectable()
export class Auth0JwtGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request =
      context.switchToHttp().getRequest<AuthenticatedRequest>();

    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Missing bearer token');
    }

    const token = authHeader.substring(7);

    const domain = process.env.AUTH0_DOMAIN;
    const audience = process.env.AUTH0_AUDIENCE;

    if (!domain || !audience) {
      throw new UnauthorizedException(
        'Auth0 configuration is missing',
      );
    }

    try {
      const decoded = jwt.decode(token, {
        complete: true,
      });

      if (
        !decoded ||
        typeof decoded === 'string' ||
        !decoded.header.kid
      ) {
        throw new UnauthorizedException('Invalid JWT');
      }

      const client = jwksClient({
        jwksUri: `https://${domain}/.well-known/jwks.json`,
      });

      const signingKey = await client.getSigningKey(
        decoded.header.kid,
      );

      const publicKey = signingKey.getPublicKey();

      const verified = jwt.verify(token, publicKey, {
        audience,
        issuer: `https://${domain}/`,
        algorithms: ['RS256'],
      });

      request.user = verified;

      return true;
    } catch {
      throw new UnauthorizedException(
        'Invalid or expired access token',
      );
    }
  }
}
