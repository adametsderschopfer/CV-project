import { Controller, Delete, Post, Patch, Get } from '@nestjs/common';

@Controller('admin/books')
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
