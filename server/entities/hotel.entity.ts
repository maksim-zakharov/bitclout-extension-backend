import {
  Column,
  Entity,
  BaseEntity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { StaffMemberEntity } from './staff-member.entity';
import { RoomEntity } from './room.entity';

@Entity('hotels')
export class HotelEntity extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  public id: string;

  @Column({
    unique: true,
    type: 'varchar',
  })
  name: string;

  @Column({
    unique: true,
    type: 'varchar',
  })
  legalCompanyName: string;

  @Column({
    unique: true,
    type: 'varchar',
  })
  crNumber: string;

  @Column({
    type: 'varchar',
  })
  crPerson: string;

  @Column({
    type: 'varchar',
  })
  signatoryName: string;

  @Column({
    type: 'text',
  })
  signatoryPhoneNumber: string;

  @Column({
    type: 'text',
  })
  signatoryEmail: string;

  @Column({
    type: 'text',
    nullable: true
  })
  crFileUrl: string;

  @Column({
    type: 'text',
    nullable: true
  })
  hotelFileUrl: string;

  @Column({
    type: 'text',
  })
  focalName: string;

  @Column({
    type: 'text',
  })
  focalEmail: string;

  @Column({
    type: 'text',
  })
  focalPhoneNumber: string;

  @OneToMany(() => StaffMemberEntity, (v) => v.hotel, { cascade: true })
  members: StaffMemberEntity[];

  @OneToMany(() => RoomEntity, (v) => v.hotel, { cascade: true })
  contractedHotels: RoomEntity[];
}
