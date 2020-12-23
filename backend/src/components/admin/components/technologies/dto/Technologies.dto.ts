import { SkillsEntity } from '../../../../../Models/Skills.entity';
import { TechnologiesEntity } from '../../../../../Models/Technologies.entity';

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

