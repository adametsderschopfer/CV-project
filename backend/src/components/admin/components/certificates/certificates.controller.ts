import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller('admin/certificates')
export class CertificatesController {
  @Get('/')
  Page() {}

  @Post('/add')
  Add() {}

  @Delete('/delete')
  Delete() {}
}
