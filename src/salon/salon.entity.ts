import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('salon')
export class SalonEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  hairType: string;

  @Column()
  gender: string;

  @Column()
  amount: number;
}
