import {
  Body,
  Controller,
  Get,
  Post,
  Render,
  Res,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { AuthGuard } from './guards/Auth.guard';
import { LoginDto } from './dto/login.dto';
import { AuthException } from './exceptions/Auth.exception';
import { Response } from 'express';

@Controller('admin')
export class AdminController {
  constructor(private readonly _adminService: AdminService) {}

  @Post('/signin')
  SignIn(@Body() body: LoginDto, @Res() response: Response): Promise<never> {
    return this._adminService.SignIn(body, response);
  }

  @Get('/')
  @Render('Main')
  @UseGuards(AuthGuard)
  @UseFilters(AuthException)
  Main() {
    return { title: 'Main' };
  }
}
