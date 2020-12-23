import {
  Controller,
  Post,
  Get,
  UseGuards,
  UseFilters,
  Render,
  Param,
  Body,
  Redirect,
} from '@nestjs/common';
import { AuthGuard } from './../../guards/Auth.guard';
import { AuthException } from './../../exceptions/Auth.exception';
import { ReferencesService } from './references.service';
import { ReferenceDto } from '../../../../Dto/References/Reference.dto';

@Controller('admin/references')
@UseGuards(AuthGuard)
@UseFilters(AuthException)
export class ReferencesController {
  constructor(private readonly _referencesService: ReferencesService) {}

  @Get('/')
  @Render('References')
  Page() {
    return this._referencesService.page();
  }

  @Post('/add')
  @Redirect('/admin/references')
  Add(@Body() reference: ReferenceDto): Promise<void> {
    return this._referencesService.add(reference);
  }

  @Post('/edit')
  @Redirect('/admin/references')
  Edit(@Body() reference: ReferenceDto): Promise<void> {
    return this._referencesService.edit(reference);
  }

  @Get('/delete/:id')
  @Redirect('/admin/references')
  Delete(@Param('id') id: string): Promise<void> {
    return this._referencesService.delete(id);
  }
}
