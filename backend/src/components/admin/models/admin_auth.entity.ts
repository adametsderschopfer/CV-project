import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Admin_auth {
  @PrimaryColumn()
  adminLogin: string;

  @Column()
  password: string;
}
