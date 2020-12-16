import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

/* 
  Entities
*/

import { Admin_auth } from './models/admin_auth.entity';
import { Aboutme } from './components/aboutme/models/Aboutme.entity';

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
import { TechonologiesController } from './components/techonologies/techonologies.controller';
import { TechonologiesService } from './components/techonologies/techonologies.service';
import { WorkExpiriencesService } from './components/workexpiriences/workexpiriences.service';
import { WorkExpiriencesController } from './components/workexpiriences/workexpiriences.controller';
import { AboutMeController } from './components/aboutme/aboutme.controller';
import { AboutMeService } from './components/aboutme/aboutme.service';

@Module({
  imports: [TypeOrmModule.forFeature([Admin_auth, Aboutme])],
  providers: [
    AdminService,
    ContactsService,
    BooksService,
    ProjectsService,
    ReferencesService,
    CertificatesService,
    TechonologiesService,
    WorkExpiriencesService,
    AboutMeService,
  ],
  controllers: [
    AdminController,
    ContactsController,
    BooksController,
    ProjectsController,
    ReferencesController,
    CertificatesController,
    TechonologiesController,
    WorkExpiriencesController,
    AboutMeController,
  ],
})
export class AdminModule {}
