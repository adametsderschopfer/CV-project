import {
  Controller,
  Delete,
  Post,
  Patch,
  Get,
  UseGuards,
  UseFilters,
} from '@nestjs/common';
import { AuthGuard } from './../../guards/Auth.guard';
import { AuthException } from './../../exceptions/Auth.exception';

@Controller('admin/books')
@UseGuards(AuthGuard)
@UseFilters(AuthException)
export class BooksController {
  @Get('/')
  Page() {}

  @Patch('/edit')
  Edit() {}

  @Post('/add')
  Add() {}

  @Delete('/delete')
  Delete() {}
}
