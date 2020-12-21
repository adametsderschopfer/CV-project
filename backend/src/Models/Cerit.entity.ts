import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CertsEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'text' })
  imglink: string;
}
