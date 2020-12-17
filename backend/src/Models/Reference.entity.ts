import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ReferencesEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  link: string;
}
