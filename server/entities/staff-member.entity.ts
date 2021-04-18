import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { HotelEntity } from './hotel.entity';

@Entity('staff-members')
export class StaffMemberEntity extends BaseEntity {
  @PrimaryGeneratedColumn ({
    type: 'int',
  })
  public id: string;

  @Column({
    unique: true,
    type: 'varchar',
  })
  name: string;

  @Column({
    type: 'varchar',
  })
  phoneNumber: string;

  @Column({
    type: 'varchar',
  })
  email: string;

  @ManyToOne(() => HotelEntity, (v) => v.members, { onDelete: 'CASCADE' })
  hotel: HotelEntity;
}
