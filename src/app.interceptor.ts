import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

export interface Response {
  serverTime: number;
}

@Injectable()
export class AppInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response> {
    const now = Date.now();
    return next.handle().pipe(map(() => ({ serverTime: Date.now() - now })));
  }
}