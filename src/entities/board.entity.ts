import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Board {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  user: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column({ name: 'reg_date' })
  regDate: Date;

  @Column({ default: 0 })
  views: number;
}
