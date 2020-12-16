import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('admin/techonologies')
export class TechonologiesController {
  @Get('/')
  Page() {}

  @Patch('/edit')
  Edit() {}

  @Post('/add')
  Add() {}

  @Delete('/delete')
  Delete() {}
}
