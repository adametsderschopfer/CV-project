import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('admin/workexpiriences')
export class WorkExpiriencesController {
  @Get('/')
  Page() {}

  @Patch('/edit')
  Edit() {}

  @Post('/add')
  Add() {}

  @Delete('/delete')
  Delete() {}
}
