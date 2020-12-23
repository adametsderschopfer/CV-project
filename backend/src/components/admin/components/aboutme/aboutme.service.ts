import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Aboutme } from '../../../../Models/Aboutme.entity';
import { UpdateAboutmeDto } from '../../../../Dto/Aboutme/UpdateContent.dto';
import { TitlePage } from '../../dto/TitlePage.dto';

@Injectable()
export class AboutMeService {
  constructor(
    @InjectRepository(Aboutme)
    readonly _aboutme: Repository<Aboutme>,
  ) {}

  async page(): Promise<UpdateAboutmeDto & TitlePage> {
    const [{ content, projects_count, work_exp }] = await this._aboutme.find();

    return {
      title: 'About Me',
      content,
      projects_count,
      work_exp,
    };
  }

  async edit({
    work_exp,
    projects_count,
    content,
  }: UpdateAboutmeDto): Promise<any> {
    if (!content) {
      throw 'Content is required';
    }

    await this._aboutme.update(
      { id: 1 },
      { work_exp, projects_count, content },
    );

    return;
  }
}
