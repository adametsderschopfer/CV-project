import {
  HttpException,
  Catch,
  ExceptionFilter,
  ArgumentsHost,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class AuthException implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    response.render('Login', {
      err: `Something went wrong, you are not logged in or an error occurred while validating the data. `,
      title: 'Sign In',
    });
  }
}
