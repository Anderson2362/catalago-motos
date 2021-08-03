import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Moto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  milage: string;

 
}