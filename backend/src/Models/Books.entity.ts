import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BooksEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  img: string;

  @Column({ default: false })
  isReaded: boolean;
}
