import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class DemoAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<{
      headers: Record<string, string | undefined>;
      user?: {
        roles: string[];
      };
    }>();

    const role = request.headers['x-demo-role'];

    if (!role) {
      throw new UnauthorizedException(
        'Missing x-demo-role header',
      );
    }

    request.user = {
      roles: [role],
    };

    return true;
  }
}
