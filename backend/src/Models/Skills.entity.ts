import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class SkillsEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  img: string;

  @Column()
  name: string;

  @Column()
  skillPercent: number;
}
