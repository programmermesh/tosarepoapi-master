import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('expense-income')
export class ExpenseIncomeEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  Name: string;

  @Column()
  description: string;

  @Column()
  amount: number;

  @Column()
  month: string;

  @Column()
  year: string;

  @Column()
  type: string;
}
