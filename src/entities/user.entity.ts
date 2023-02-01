import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  uid: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column({ name: 'sns_id', nullable: true })
  snsId: string;

  @Column({ nullable: true })
  provider: string;

  @Column({ name: 'reg_date' })
  regDate: string;
}
