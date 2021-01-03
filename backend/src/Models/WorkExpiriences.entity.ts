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

  @Column('text')
  description: string;

  @Column({ nullable: true })
  imglink: string;
}
