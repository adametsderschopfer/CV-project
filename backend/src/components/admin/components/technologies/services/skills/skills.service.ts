import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SkillDto } from 'src/Dto/Technologies/Skill.dto';
import { splitPublic } from 'src/helpers/splitPublic';
import { SkillsEntity } from 'src/Models/Skills.entity';
import { Repository } from 'typeorm';
import { FileRemoverService } from 'src/services/file-remover/file-remover.service';

@Injectable()
export class SkillsService {
  constructor(
    @InjectRepository(SkillsEntity)
    private readonly _skills: Repository<SkillsEntity>,
    @Inject('FileRemoverService')
    private readonly _fileRemover: FileRemoverService,
  ) {}

  async page(): Promise<SkillsEntity[]> {
    return await this._skills.find();
  }

  async add(skill: SkillDto, file: any): Promise<void> {
    await this._skills.insert({
      name: skill.name,
      img: splitPublic(file),
      skillPercent: skill.skillPercent,
    });
  }

  async edit(skill: SkillDto, file: any): Promise<void> {
    await this._skills.update(
      skill.id,
      file
        ? {
            name: skill.name,
            img: splitPublic(file),
            skillPercent: skill.skillPercent,
          }
        : {
            name: skill.name,
            skillPercent: skill.skillPercent,
          },
    );
  }

  async delete(id: string): Promise<void> {
    if (await this._fileRemover.remove(this._skills, id, 'img'))
      await this._skills.delete(id);
  }
}
