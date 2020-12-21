import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class WorkExpiriencesEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  tag: string;

  @Column()
  companyName: string;

  @Column('tinyint')
  termWork: string;

  @Column()
  position: string;

  @Column({ default: '/imgs/img-404.png', nullable: true })
  imglink: string;
}
