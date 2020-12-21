import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProjectsEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar')
  title: string;

  @Column({ type: 'tinytext', scale: 140 })
  description: string;

  @Column({ type: 'text' })
  repo_link: string;

  @Column({ type: 'text' })
  website_link: string;
}
