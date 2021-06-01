import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Image {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 500 })
  fileName: string;

  @Column('text')
  file: string;

  @Column({ length: 500 })
  label: string;
}
