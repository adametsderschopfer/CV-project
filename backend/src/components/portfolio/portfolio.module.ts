import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailerModule } from '@nestjs-modules/mailer';

import { PortfolioController } from './portfolio.controller';
import { PortfolioService } from './portfolio.service';

/* 
  Entity
 */

import { Aboutme } from '../../Models/Aboutme.entity';
import { WorkExpiriencesEntity } from '../../Models/WorkExpiriences.entity';
import { ContactsEntity } from '../../Models/contacts.entity';
import { ProjectsEntity } from '../../Models/Projects.entity';
import { ReferencesEntity } from '../../Models/Reference.entity';
import { BooksEntity } from '../../Models/Books.entity';
import { CertsEntity } from '../../Models/Cerit.entity';
import { TechnologiesEntity } from '../../Models/Technologies.entity';
import { SkillsEntity } from '../../Models/Skills.entity';
import { ViewsEntity } from '../../Models/Views.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Aboutme,
      ContactsEntity,
      WorkExpiriencesEntity,
      ProjectsEntity,
      ReferencesEntity,
      BooksEntity,
      CertsEntity,
      TechnologiesEntity,
      SkillsEntity,
      ViewsEntity,
    ]),
    MailerModule.forRoot({
      transport: `smtps://${process.env.MAIL_INCOMING_USER}:${process.env.MAIL_INCOMING_PASS}@${process.env.MAIL_INCOMING_HOST}`,

      defaults: {
        from: '<no-reply@adametsofficial@info.dev>',
      },
    }),
  ],
  controllers: [PortfolioController],
  providers: [PortfolioService],
})
export class PortfolioModule {}
