import {
  ForbiddenException,
  HttpStatus,
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as cookie from 'cookie';

@Injectable()
export class CheckRoleMiddleware implements NestMiddleware {
  jwtService: any;
  constructor(jwtService: JwtService) {}

  use(req: any, res: any, next: (error?: any) => void) {
    try {
      const token = req.cookies.token;

      if (!token) {
        throw new UnauthorizedException({
          error: 'Unauthorized',
          status: HttpStatus.UNAUTHORIZED,
        });
      }

      const verifyToken = this.jwtService.verify(token, {
        secret: process.env.SECRET_KEY,
      });

      if (!verifyToken || typeof verifyToken !== 'object') {
        throw new UnauthorizedException({
          error: 'Unauthorized, token has expired',
          status: HttpStatus.UNAUTHORIZED,
        });
      }

      if (verifyToken.role !== 'admin') {
        throw new UnauthorizedException('Client does not have access rights');
      }

      const newToken = this.jwtService.sign(verifyToken, {
        secret: process.env.SECRET_KEY,
      });

      cookie.serialize('token', newToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60,
        path: '/',
      });

      req.user = verifyToken;
      next();
    } catch (error) {
      throw new ForbiddenException({
        error: error.message,
        status: HttpStatus.FORBIDDEN || HttpStatus.INTERNAL_SERVER_ERROR,
      });
    }
  }
}
