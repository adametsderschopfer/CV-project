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
import { arrowShielding } from './../../helpers/arrowShielding';

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

    const { name, phone, email, content } = mail;

    try {
      await this._mailerService.sendMail({
        subject: `Новое письмо от ${name || email}`,
        text: `
        Name: ${name} \n
        Email: ${email} \n
        Phone: ${phone} \n
        Message:  \n ${content}
        `,
        html: `
          <div style="display: flex;"><h3><b>Name:</b></h3>&nbsp; <p style="margin: auto 0;">${arrowShielding(
            name,
          )}</p></div>
          <div style="display: flex;"><h3><b>Email:</b></h3>&nbsp; <p style="margin: auto 0;">${arrowShielding(
            email,
          )}</p></div>
          <div style="display: flex;"><h3><b>Phone:</b></h3>&nbsp; <p style="margin: auto 0;">${arrowShielding(
            phone,
          )}</p></div>
          <h3><b>Message :</b></h3><div style="white-space: pre;">${arrowShielding(
            content,
          )}</div>
        `,
      });

      return true;
    } catch (error) {
      console.log(error);

      return false;
    }
  }
}
