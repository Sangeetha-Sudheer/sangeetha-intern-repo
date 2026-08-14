import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const startTime = Date.now();

    console.log(`Interceptor request: ${request.method} ${request.url}`);

    return next.handle().pipe(
      tap(() => {
        const duration = Date.now() - startTime;

        console.log(
          `Interceptor response: ${request.method} ${request.url} - ${duration}ms`,
        );
      }),
    );
  }
}
