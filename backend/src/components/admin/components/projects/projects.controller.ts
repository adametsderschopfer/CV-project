import { Controller, Post, Patch, Delete, Get } from '@nestjs/common';

@Controller('admin/projects')
export class ProjectsController {
  @Get('/')
  Page() {}

  @Patch('/edit')
  Edit() {}

  @Post('/add')
  Add() {}

  @Delete('/delete')
  Delete() {}
}
