import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TourList } from './tourList.entity';
import { User } from './user.entity';

@Entity()
export class TourCart {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id)
  user: number;

  @ManyToOne(() => TourList, (tourList) => tourList.id)
  tourList: number;
}
