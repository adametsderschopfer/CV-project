import {
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from './../../guards/Auth.guard';
import { AuthException } from './../../exceptions/Auth.exception';

@Controller('admin/workexpiriences')
@UseGuards(AuthGuard)
@UseFilters(AuthException)
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
