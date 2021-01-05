import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import * as path from 'path';

@Controller([
  '/',
  '/about',
  '/contacts',
  '/projects',
  '/references',
  '/workexp',
  '/certs',
  '/technologies',
  '/books',
])
export class AppController {
  @Get()
  fronted_React(@Res() res: Response) {
    return res.sendFile(
      path.resolve(__dirname, '../../frontend', 'index.html'),
    );
  }
}
