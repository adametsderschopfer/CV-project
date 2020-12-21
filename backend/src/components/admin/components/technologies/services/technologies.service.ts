import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TechnologyDto } from 'src/Dto/Technologies/Technology.dto';
import { splitPublic } from 'src/helpers/splitPublic';
import { TechnologiesEntity } from 'src/Models/Technologies.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TechnologiesService {
  constructor(
    @InjectRepository(TechnologiesEntity)
    readonly _technologies: Repository<TechnologiesEntity>,
  ) {}

  async page(): Promise<TechnologiesEntity[]> {
    return await this._technologies.find();
  }

  async add(tech: TechnologyDto, file: any): Promise<void> {
    await this._technologies.insert({
      name: tech.name,
      img: splitPublic(file),
    });
  }

  async edit(tech: TechnologyDto, file: any): Promise<void> {
    await this._technologies.update(
      tech.id,
      file
        ? {
            name: tech.name,
            img: splitPublic(file),
          }
        : {
            name: tech.name,
          },
    );
  }

  async delete(id: string): Promise<void> {
    await this._technologies.delete(id);
  }
}
