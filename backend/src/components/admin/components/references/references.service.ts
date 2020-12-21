import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ReferencesEntity } from 'src/Models/Reference.entity';
import { ReferencesDto } from './dto/References.dto';
import { TitlePage } from './../../dto/TitlePage.dto';
import { Repository } from 'typeorm';
import { ReferenceDto } from 'src/Dto/References/Reference.dto';

@Injectable()
export class ReferencesService {
  constructor(
    @InjectRepository(ReferencesEntity)
    private readonly _reference: Repository<ReferencesEntity>,
  ) {}

  async page(): Promise<ReferencesDto & TitlePage> {
    const references = await this._reference.find();

    return { references, title: 'References' };
  }

  async add(reference: ReferenceDto): Promise<void> {
    await this._reference.insert(reference);
  }

  async edit(reference: ReferenceDto): Promise<void> {
    await this._reference.update(reference.id, reference);
  }

  async delete(id: string): Promise<void> {
    await this._reference.delete(id);
  }
}
