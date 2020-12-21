import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Aboutme {
  @PrimaryColumn()
  id: number;

  @Column({ type: 'text' })
  content: string;

  @Column()
  projects_count: string;

  @Column()
  work_exp: string;
}
