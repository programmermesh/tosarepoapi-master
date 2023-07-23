import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('landlord')
export class LandlordEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  lastname: string;

  @Column()
  other_names: string;

  @Column()
  gender: string;

  @Column()
  address: string;

  @Column()
  phone1: string;

  @Column()
  phone2: string;
}
