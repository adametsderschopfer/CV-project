import {
  Controller,
  Post,
  Patch,
  Delete,
  Get,
  UseGuards,
  UseFilters,
} from '@nestjs/common';
import { AuthGuard } from './../../guards/Auth.guard';
import { AuthException } from './../../exceptions/Auth.exception';

@Controller('admin/projects')
@UseGuards(AuthGuard)
@UseFilters(AuthException)
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
