import {
  HttpStatus,
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as cookie from 'cookie';

@Injectable()
export class CheckAuthMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}

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
      throw new UnauthorizedException({
        error: error.message,
        status: error.status || HttpStatus.INTERNAL_SERVER_ERROR,
      });
    }
  }
}
