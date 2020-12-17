import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Aboutme {
  @PrimaryColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  projects_count: string;

  @Column()
  work_exp: string;
}
