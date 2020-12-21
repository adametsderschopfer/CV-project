import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TechnologiesEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  img: string;

  @Column()
  name: string;
}
