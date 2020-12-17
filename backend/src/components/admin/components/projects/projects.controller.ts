import {
  Controller,
  Post,
  Get,
  UseGuards,
  UseFilters,
  Redirect,
  Render,
  Param,
  Body,
} from '@nestjs/common';
import { AuthGuard } from './../../guards/Auth.guard';
import { AuthException } from './../../exceptions/Auth.exception';
import { ProjectsService } from './projects.service';
import { ProjectDto } from 'src/Dto/WorkExpirience/Project.dto';
import { ProjectsDto } from './dto/projects.dto';
import { TitlePage } from './../../dto/TitlePage.dto';

@Controller('admin/projects')
@UseGuards(AuthGuard)
@UseFilters(AuthException)
export class ProjectsController {
  constructor(private readonly _projectService: ProjectsService) {}

  @Get('/')
  @Render('Projects')
  Page(): Promise<ProjectsDto & TitlePage> {
    return this._projectService.page();
  }

  @Post('/add')
  @Redirect('/admin/projects')
  Add(@Body() project: ProjectDto) {
    return this._projectService.add(project);
  }

  @Post('/delete/:id')
  @Redirect('/admin/projects')
  Delete(@Param('id') id: string): Promise<void> {
    return this._projectService.delete(id);
  }
}
