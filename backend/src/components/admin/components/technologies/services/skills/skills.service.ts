import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SkillDto } from 'src/Dto/Technologies/Skill.dto';
import { splitPublic } from 'src/helpers/splitPublic';
import { SkillsEntity } from 'src/Models/Skills.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SkillsService {
  constructor(
    @InjectRepository(SkillsEntity)
    readonly _skills: Repository<SkillsEntity>,
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
    await this._skills.delete(id);
  }
}
