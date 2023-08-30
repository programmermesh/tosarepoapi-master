import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('transaction')
export class TransactionEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  hairType: string;

  @Column()
  gender: string;

  @Column()
  amount: number;

  @Column({nullable:true})
  date: string;
}
