import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RegisterHotelDto } from './dto/register-hotel.dto';
import { HotelEntity } from './entities/hotel.entity';
import { StaffMemberEntity } from './entities/staff-member.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { S3Service } from './s3.service';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(HotelEntity)
    private readonly repository: Repository<HotelEntity>,
    @InjectRepository(StaffMemberEntity)
    private readonly membersRepository: Repository<StaffMemberEntity>,
    private readonly s3Service: S3Service,
  ) {}

  async registerHotel(dto: RegisterHotelDto) {
    if (!dto.members?.length || dto.members.length < 2) {
      throw new HttpException(
        `Requires at least 2 staff members`,
        HttpStatus.OK,
      );
    }

    if (dto.members.length > 5) {
      throw new HttpException(
        `No more than 5 staff members needed`,
        HttpStatus.OK,
      );
    }

    const existHotel = await this.repository.findOne({
      where: { name: dto.name },
    });
    if (existHotel) {
      throw new HttpException(`The hotel is already registered`, HttpStatus.OK);
    }

    const uniqueEmails = [
      ...new Set(dto.members.map((member) => member.email)),
    ];
    if (uniqueEmails.length < dto.members.length) {
      throw new HttpException(`Members email must be unique`, HttpStatus.OK);
    }

    const uniquePhoneNumbers = [
      ...new Set(dto.members.map((member) => member.phoneNumber)),
    ];
    if (uniquePhoneNumbers.length < dto.members.length) {
      throw new HttpException(
        `Members phone number must be unique`,
        HttpStatus.OK,
      );
    }

    const existMembers = await this.membersRepository.find({
      where: [
        {
          email: In(uniqueEmails),
        },
        {
          phoneNumber: In(uniquePhoneNumbers),
        },
      ],
    });

    if (existMembers.length) {
      throw new HttpException(
        `Such staff members are already registered`,
        HttpStatus.OK,
      );
    }

    const newHotel = HotelEntity.create(dto);

    newHotel.members = dto.members.map((member) =>
      StaffMemberEntity.create(member),
    );

    return this.repository.save(newHotel);
  }

  async uploadCrFiles(hotelId: number, file: any) {
    const existHotel = await this.repository.findOne(hotelId);
    if (!existHotel) {
      throw new HttpException(`The hotel is not registered`, HttpStatus.OK);
    }
    const { Location } = await this.s3Service.upload(hotelId, 'cr', file);
    existHotel.crFileUrl = Location;
    await this.repository.save(existHotel);
  }

  async uploadHotelFiles(hotelId: number, file: any) {
    const existHotel = await this.repository.findOne(hotelId);
    if (!existHotel) {
      throw new HttpException(`The hotel is not registered`, HttpStatus.OK);
    }
    const { Location } = await this.s3Service.upload(hotelId, 'hotel', file);
    existHotel.hotelFileUrl = Location;
    await this.repository.save(existHotel);
  }
}
