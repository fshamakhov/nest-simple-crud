import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => any) {
    console.log('Request path...', req.path);
    console.log('Response status code...', res.statusCode);
    next();
  }
}
