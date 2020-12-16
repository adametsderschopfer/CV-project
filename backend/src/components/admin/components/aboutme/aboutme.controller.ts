import {
  Body,
  Controller,
  Get,
  Post,
  Redirect,
  Render,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { AboutMeService } from './aboutme.service';
import { UpdateAboutmeDto } from './dto/UpdateContent.dto';
import { TitlePage } from './../../dto/TitlePage.dto';
import { AuthException } from './../../exceptions/Auth.exception';
import { AuthGuard } from './../../guards/Auth.guard';

@Controller('admin/aboutme')
@UseGuards(AuthGuard)
@UseFilters(AuthException)
export class AboutMeController {
  constructor(private readonly _aboutmeService: AboutMeService) {}

  @Get('/')
  @Render('Aboutme')
  Page(): Promise<UpdateAboutmeDto & TitlePage> {
    return this._aboutmeService.page();
  }

  @Post('/edit')
  @Redirect('/admin/aboutme')
  Edit(@Body() UpdatedData: UpdateAboutmeDto): Promise<any> {
    return this._aboutmeService.edit(UpdatedData);
  }
}
