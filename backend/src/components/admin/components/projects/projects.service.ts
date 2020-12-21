import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProjectsEntity } from 'src/Models/Projects.entity';
import { ProjectsDto } from './dto/projects.dto';
import { TitlePage } from './../../dto/TitlePage.dto';
import { ProjectDto } from 'src/Dto/Project/Project.dto';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(ProjectsEntity)
    private readonly _projects: Repository<ProjectsEntity>,
  ) {}

  async page(): Promise<ProjectsDto & TitlePage> {
    const projects = await this._projects.find();

    return { projects, title: 'Projects' };
  }

  async add(project: ProjectDto): Promise<void> {
    this._projects.insert(project);
  }

  async edit(project: ProjectDto): Promise<void> {
    await this._projects.update(project.id, project);
  }

  async delete(id: string): Promise<void> {
    this._projects.delete(id);
  }
}
