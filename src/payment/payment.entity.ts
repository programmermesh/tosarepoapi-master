import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('payment')
export class PaymentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  pendingPaymentId: string;

  @Column()
  month: string;

  @Column()
  year: string;

  @Column()
  status: string;

  @Column()
  amount: number;

  @Column()
  levy: string;

  @Column()
  houseType: string;

  @Column()
  houseNumber: string;

  @Column()
  fullName: string;

  @Column()
  processed: string;

  @Column()
  residentId: string;

  @Column()
  file: string;
}
