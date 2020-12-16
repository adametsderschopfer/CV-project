import { Controller, Delete, Post, Patch, Get } from '@nestjs/common';

@Controller('admin/references')
export class ReferencesController {
  @Get('/')
  Page() {}

  @Patch('/edit')
  Edit() {}

  @Post('/add')
  Add() {}

  @Delete('/delete')
  Delete() {}
}
