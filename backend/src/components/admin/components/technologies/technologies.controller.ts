import {
  Controller,
  Get,
  Post,
  UseGuards,
  UseFilters,
  Redirect,
  Render,
  Param,
  Body,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { AuthGuard } from '../../guards/Auth.guard';
import { AuthException } from '../../exceptions/Auth.exception';
import { TechnologiesDto } from './dto/Technologies.dto';
import { TitlePage } from '../../dto/TitlePage.dto';
import { SkillsService } from './services/skills/skills.service';
import { TechnologiesService } from './services/technologies.service';
import { SkillDto } from './../../../../Dto/Technologies/Skill.dto';
import { TechnologyDto } from 'src/Dto/Technologies/Technology.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { diskStorage } from 'multer';
import fileFilter from './../../../../helpers/fileFilterImg';

const FileInterseptor = (p: string) =>
  FileInterceptor('file', {
    storage: diskStorage({
      destination: './public/imgs/' + p,

      filename: (req, file, cb) => {
        const randomName = Array(32)
          .fill(null)
          .map(() => Math.round(Math.random() * 16).toString(16))
          .join('');
        return cb(null, `${randomName}${extname(file.originalname)}`);
      },
    }),

    fileFilter,
  });

@Controller('admin/technologies')
@UseGuards(AuthGuard)
@UseFilters(AuthException)
export class TechnologiesController {
  constructor(
    private readonly _skillsService: SkillsService,
    private readonly _technologiesService: TechnologiesService,
  ) {}

  @Get('/')
  @Render('Techonologies')
  async Page(): Promise<TechnologiesDto & TitlePage> {
    return {
      title: 'Technologies',
      technologies: {
        technologies: await this._technologiesService.page(),
        skills: await this._skillsService.page(),
      },
    };
  }

  @Post('/edit/skill')
  @Redirect('/admin/technologies')
  @UseInterceptors(FileInterseptor('skills'))
  EditSkill(@Body() skill: SkillDto, @UploadedFile() file: any): Promise<void> {
    return this._skillsService.edit(skill, file);
  }

  @Post('/edit/technology')
  @Redirect('/admin/technologies')
  @UseInterceptors(FileInterseptor('techonologies'))
  EditTechnology(
    @Body() technology: TechnologyDto,
    @UploadedFile() file: any,
  ): Promise<void> {
    return this._technologiesService.edit(technology, file);
  }

  @Post('/add/skill')
  @Redirect('/admin/technologies')
  @UseInterceptors(FileInterseptor('skills'))
  AddSkill(@Body() skill: SkillDto, @UploadedFile() file: any): Promise<void> {
    return this._skillsService.add(skill, file);
  }

  @Post('/add/technology')
  @Redirect('/admin/technologies')
  @UseInterceptors(FileInterseptor('techonologies'))
  AddTechnology(
    @Body() technology: TechnologyDto,
    @UploadedFile() file: any,
  ): Promise<void> {
    return this._technologiesService.add(technology, file);
  }

  @Get('/delete/skill/:id')
  @Redirect('/admin/technologies')
  DeleteSkill(@Param('id') id: string): Promise<void> {
    return this._skillsService.delete(id);
  }

  @Get('/delete/technology/:id')
  @Redirect('/admin/technologies')
  DeleteTechnology(@Param('id') id: string): Promise<void> {
    return this._technologiesService.delete(id);
  }
}
