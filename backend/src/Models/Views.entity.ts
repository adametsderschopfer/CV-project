import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class ViewsEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  views: number;
}
