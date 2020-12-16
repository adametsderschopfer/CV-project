import {
  Controller,
  Delete,
  Get,
  Post,
  UseGuards,
  UseFilters,
} from '@nestjs/common';
import { AuthGuard } from './../../guards/Auth.guard';
import { AuthException } from './../../exceptions/Auth.exception';

@Controller('admin/certificates')
@UseGuards(AuthGuard)
@UseFilters(AuthException)
export class CertificatesController {
  @Get('/')
  Page() {}

  @Post('/add')
  Add() {}

  @Delete('/delete')
  Delete() {}
}
