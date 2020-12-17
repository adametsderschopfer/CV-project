import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProjectsEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  repo_link: string;

  @Column()
  website_link: string;
}
