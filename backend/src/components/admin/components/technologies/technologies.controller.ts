import {
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  UseGuards,
  UseFilters,
} from '@nestjs/common';
import { AuthGuard } from '../../guards/Auth.guard';
import { AuthException } from '../../exceptions/Auth.exception';

@Controller('admin/technologies')
@UseGuards(AuthGuard)
@UseFilters(AuthException)
export class TechnologiesController {
  @Get('/')
  Page() {}

  @Patch('/edit')
  Edit() {}

  @Post('/add')
  Add() {}

  @Delete('/delete')
  Delete() {}
}
