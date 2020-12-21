import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CertsEntity } from 'src/Models/Cerit.entity';
import { CertsDto } from './dto/Certs.dto';
import { TitlePage } from './../../dto/TitlePage.dto';
import { splitPublic } from 'src/helpers/splitPublic';

@Injectable()
export class CertificatesService {
  constructor(
    @InjectRepository(CertsEntity) readonly _certs: Repository<CertsEntity>,
  ) {}

  async page(): Promise<CertsDto & TitlePage> {
    const certs = await this._certs.find();

    return { certs, title: 'Certificates' };
  }

  async add(file: any) {
    await this._certs.insert({
      imglink: splitPublic(file),
    });
  }

  async delete(id: string) {
    await this._certs.delete(id);
  }
}
