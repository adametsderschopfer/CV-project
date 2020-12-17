import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class WorkExpiriencesEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  tag: string;

  @Column()
  companyName: string;

  @Column()
  termWork: string;

  @Column()
  position: string;

  @Column({ default: '/imgs/img-404.png' })
  imglink: string;
}
