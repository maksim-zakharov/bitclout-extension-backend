import {
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller()
export class AppController {
  constructor(private readonly profileService: ProfileService) {
  }

  @Get('/:nick')
  getBitcloutProfileByLinkedInNick(@Param() { nick }) {
    return this.profileService.getBitcloutProfileByLinkedInNick(nick);
  }

  // @Post('/uploadFile')
  // @UseInterceptors(FileInterceptor('files'))
  // uploadCrFiles(@Param() { id }, @UploadedFile() files) {
  //   return this.profileService.uploadCrFiles(id, files);
  // }
}
