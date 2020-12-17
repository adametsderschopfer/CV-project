import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Redirect,
  Render,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from './../../guards/Auth.guard';
import { AuthException } from './../../exceptions/Auth.exception';
import { ExpsDto } from './dto/Exps.dto';
import { TitlePage } from './../../dto/TitlePage.dto';
import { WorkExpiriencesService } from './workexpiriences.service';
import { WorkExpirienceDto } from 'src/Dto/WorkExpirience/WorkExpirience.dto';

@Controller('admin/workexpiriences')
@UseGuards(AuthGuard)
@UseFilters(AuthException)
export class WorkExpiriencesController {
  constructor(private readonly _expsService: WorkExpiriencesService) {}

  @Get('/')
  @Render('WotkExpirience')
  Page(): Promise<ExpsDto & TitlePage> {
    return this._expsService.page();
  }

  @Post('/add')
  @Redirect('/admin/workexpiriences')
  Add(@Body() work: WorkExpirienceDto): Promise<void> {
    return this._expsService.add(work);
  }

  @Get('/delete/:id')
  @Redirect('/admin/workexpiriences')
  Delete(@Param('id') id: string): Promise<void> {
    return this._expsService.delete(id);
  }
}
