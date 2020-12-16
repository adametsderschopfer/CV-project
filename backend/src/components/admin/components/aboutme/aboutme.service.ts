import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Aboutme } from './models/Aboutme.entity';
import { UpdateAboutmeDto } from './dto/UpdateContent.dto';
import { TitlePage } from './../../dto/TitlePage.dto';

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

  async edit(data: UpdateAboutmeDto): Promise<any> {

    return;
  }
}
