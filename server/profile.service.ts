import { Injectable } from '@nestjs/common';
import { ProfileEntity } from './entities/profile.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(ProfileEntity)
    private readonly repository: Repository<ProfileEntity>,
  ) {
  }

  async getBitcloutProfileByLinkedInNick(nick: string) {
    return this.repository.find({ where: { linkedinUrl: ILike(nick) } });
  }
}
