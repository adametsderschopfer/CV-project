import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TechnologyDto } from 'src/Dto/Technologies/Technology.dto';
import { splitPublic } from 'src/helpers/splitPublic';
import { TechnologiesEntity } from 'src/Models/Technologies.entity';
import { Repository } from 'typeorm';
import { FileRemoverService } from 'src/services/file-remover/file-remover.service';

@Injectable()
export class TechnologiesService {
  constructor(
    @InjectRepository(TechnologiesEntity)
    readonly _technologies: Repository<TechnologiesEntity>,
    @Inject('FileRemoverService')
    private readonly _fileRemover: FileRemoverService,
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
    if (await this._fileRemover.remove(this._technologies, id, 'img'))
      await this._technologies.delete(id);
  }
}
