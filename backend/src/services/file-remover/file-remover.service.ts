import { Injectable } from '@nestjs/common';
import { path } from 'app-root-path';
import { join } from 'path';
import { Repository } from 'typeorm';
import { rm } from 'fs/promises';

@Injectable()
export class FileRemoverService {
  async remove(
    db_entity: Repository<any>,
    id: number | string,
    fieldName: string,
  ): Promise<boolean> {
    const data = await db_entity.findOne(id);
    const _path = join(path, 'public', data[fieldName]);

    try {
      await rm(_path);

      return true;
    } catch (error) {
      console.log(error);

      return false;
    }
  }
}
