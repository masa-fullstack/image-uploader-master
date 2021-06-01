import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Cat {
  @PrimaryColumn()
  id: string;

  @Column()
  searchedCount: number;
}
