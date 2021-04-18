import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { HotelEntity } from './hotel.entity';

@Entity('rooms')
export class RoomEntity extends BaseEntity {
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
  inventory: string;

  @ManyToOne(() => HotelEntity, (v) => v.contractedHotels, { onDelete: 'CASCADE' })
  hotel: HotelEntity;
}
