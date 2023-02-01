import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TourList {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  location: string;

  @Column()
  image: string;
}
