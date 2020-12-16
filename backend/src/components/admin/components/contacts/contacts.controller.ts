import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('admin/contacts')
export class ContactsController {
  @Get('/')
  Page() {}

  @Patch('/edit')
  Edit() {}

  @Post('/add')
  Add() {}

  @Delete('/delete')
  Delete() {}
}
