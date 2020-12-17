import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ExpsDto } from './dto/Exps.dto';
import { TitlePage } from './../../dto/TitlePage.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkExpiriencesEntity } from 'src/Models/WorkExpiriences.entity';
import { WorkExpirienceDto } from 'src/Dto/WorkExpirience/WorkExpirience.dto';

@Injectable()
export class WorkExpiriencesService {
  constructor(
    @InjectRepository(WorkExpiriencesEntity)
    readonly _workExp: Repository<WorkExpiriencesEntity>,
  ) {}

  async page(): Promise<ExpsDto & TitlePage> {
    const expiriences = (await this._workExp.find()).reverse();

    return { expiriences, title: 'Work Expiriences' };
  }

  async delete(id: string): Promise<void> {
    await this._workExp.delete(id);
  }

  async add(work: WorkExpirienceDto): Promise<void> {
    await this._workExp.insert({
      ...work,
      imglink: !work.imglink.length ? '/imgs/img-404.png' : work.imglink,
    });
  }
}
