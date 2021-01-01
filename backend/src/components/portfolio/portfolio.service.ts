import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Aboutme } from '../../Models/Aboutme.entity';
import { Repository } from 'typeorm';
import { BooksEntity } from './../../Models/Books.entity';
import { ProjectsEntity } from './../../Models/Projects.entity';
import { CertsEntity } from './../../Models/Cerit.entity';
import { ContactsEntity } from './../../Models/contacts.entity';
import { WorkExpiriencesEntity } from '../../Models/WorkExpiriences.entity';
import { ReferencesEntity } from './../../Models/Reference.entity';
import { SkillsEntity } from './../../Models/Skills.entity';
import { TechnologiesEntity } from './../../Models/Technologies.entity';
import { MailDto } from '../../Dto/Mail.dto';

@Injectable()
export class PortfolioService {
  constructor(
    private readonly _mailerService: MailerService,
    @InjectRepository(Aboutme) private readonly _aboutme: Repository<Aboutme>,
    @InjectRepository(BooksEntity)
    private readonly _books: Repository<BooksEntity>,

    @InjectRepository(ProjectsEntity)
    private readonly _projects: Repository<ProjectsEntity>,

    @InjectRepository(CertsEntity)
    private readonly _certs: Repository<CertsEntity>,

    @InjectRepository(ContactsEntity)
    private readonly _contacts: Repository<ContactsEntity>,

    @InjectRepository(WorkExpiriencesEntity)
    private readonly _workexp: Repository<WorkExpiriencesEntity>,

    @InjectRepository(ReferencesEntity)
    private readonly _reference: Repository<ReferencesEntity>,

    @InjectRepository(SkillsEntity)
    private readonly _skills: Repository<SkillsEntity>,

    @InjectRepository(TechnologiesEntity)
    private readonly _technologies: Repository<TechnologiesEntity>,
  ) {}

  async aboutme() {
    return (await this._aboutme.find())[0];
  }

  async books() {
    return await this._books.find();
  }

  async projects() {
    return (await this._projects.find()).reverse();
  }

  async technologies() {
    return {
      skills: await this._skills.find(),
      technologies: await this._technologies.find(),
    };
  }

  async certs() {
    return await this._certs.find();
  }

  async contacts() {
    return await this._contacts.find();
  }

  async workexp() {
    return (await this._workexp.find()).reverse();
  }

  async reference() {
    return await this._reference.find();
  }

  async feedback(mail: MailDto) {
    if (!mail.email) {
      return false;
    }

    try {
      await this._mailerService.sendMail({
        to: mail.email,
        subject: `New response from ${mail.name || mail.phone || mail.email}`,
        html: `
          Name: ${mail.name}
          Email: ${mail.email}
          Phone: ${mail.phone}
          Content: ${mail.content}
        `,
      });
    } catch (error) {
      console.log(error);

      return false;
    }
  }
}
