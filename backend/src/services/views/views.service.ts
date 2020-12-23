import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ViewsEntity } from '../../Models/Views.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ViewsService {
  constructor(
    @InjectRepository(ViewsEntity)
    private readonly _view: Repository<ViewsEntity>,
  ) {}

  async get(): Promise<number> {
    const [{ views }] = await this._view.find();

    return views;
  }

  async view(): Promise<void> {
    await this._view.update('1', { views: (await this.get()) + 1 });
  }
}
