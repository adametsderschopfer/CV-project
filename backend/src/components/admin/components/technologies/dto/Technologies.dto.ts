import { SkillsEntity } from 'src/Models/Skills.entity';
import { TechnologiesEntity } from 'src/Models/Technologies.entity';

type More = { technologies: TechnologiesEntity[]; skills: SkillsEntity[] };

export class TechnologiesDto {
  readonly technologies?: More;
}

export class SkillsItemsDto {
  readonly skills: SkillsEntity[];
}


export class TechnologiesItemsDto {
  readonly technologies: TechnologiesEntity[];
}

