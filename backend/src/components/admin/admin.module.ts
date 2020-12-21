/* 
  Modules
 */

import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

/* 
  Entities
*/

import { Admin_auth } from './models/admin_auth.entity';
import { Aboutme } from '../../Models/Aboutme.entity';
import { ContactsEntity } from '../../Models/contacts.entity';
import { WorkExpiriencesEntity } from 'src/Models/WorkExpiriences.entity';
import { ProjectsEntity } from './../../Models/Projects.entity';
import { ReferencesEntity } from './../../Models/Reference.entity';
import { BooksEntity } from './../../Models/Books.entity';
import { CertsEntity } from './../../Models/Cerit.entity';
import { TechnologiesEntity } from './../../Models/Technologies.entity';
import { SkillsEntity } from './../../Models/Skills.entity';

/* 
  Views
*/

import { ContactsController } from './components/contacts/contacts.controller';
import { ContactsService } from './components/contacts/contacts.service';
import { BooksController } from './components/books/books.controller';
import { BooksService } from './components/books/books.service';
import { ProjectsService } from './components/projects/projects.service';
import { ProjectsController } from './components/projects/projects.controller';
import { ReferencesService } from './components/references/references.service';
import { ReferencesController } from './components/references/references.controller';
import { CertificatesService } from './components/certificates/certificates.service';
import { CertificatesController } from './components/certificates/certificates.controller';
import { TechnologiesController } from './components/technologies/technologies.controller';
import { TechnologiesService } from './components/technologies/services/technologies.service';
import { WorkExpiriencesService } from './components/workexpiriences/workexpiriences.service';
import { WorkExpiriencesController } from './components/workexpiriences/workexpiriences.controller';
import { AboutMeController } from './components/aboutme/aboutme.controller';
import { AboutMeService } from './components/aboutme/aboutme.service';
import { SkillsService } from './components/technologies/services/skills/skills.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Admin_auth,
      Aboutme,
      ContactsEntity,
      WorkExpiriencesEntity,
      ProjectsEntity,
      ReferencesEntity,
      BooksEntity,
      CertsEntity,
      TechnologiesEntity,
      SkillsEntity,
    ]),
  ],
  providers: [
    AdminService,
    ContactsService,
    BooksService,
    ProjectsService,
    ReferencesService,
    CertificatesService,
    TechnologiesService,
    WorkExpiriencesService,
    AboutMeService,
    SkillsService,
  ],
  controllers: [
    AdminController,
    ContactsController,
    BooksController,
    ProjectsController,
    ReferencesController,
    CertificatesController,
    TechnologiesController,
    WorkExpiriencesController,
    AboutMeController,
  ],
})
export class AdminModule {}
