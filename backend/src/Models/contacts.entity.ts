import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ContactsEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  where: string;

  @Column()
  contact: string;

  @Column()
  link: string;
}
