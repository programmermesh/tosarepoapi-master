import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('visitor')
export class VisitorEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  discription: string;

  @Column()
  checkin: boolean;

  @Column()
  checkinDate: Date;

  @Column()
  checkout: boolean;

  @Column({nullable: true})
  checkoutDate: Date;

  @Column()
  residentId: string;
}
