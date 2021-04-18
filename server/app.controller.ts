import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { RegisterHotelDto } from './dto/register-hotel.dto';
import { validate } from 'class-validator';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  helloWorld() {
    return 'Hello World';
  }

  @Post('/register')
  // @UseInterceptors(FileInterceptor('crFiles'))
  async register(@UploadedFile() crFiles, @Body() dto: RegisterHotelDto) {
    const errors = await validate(dto);
    if (errors.length > 0) {
      throw new HttpException(errors[0].toString(), HttpStatus.OK);
    }
    return this.appService.registerHotel(dto);
  }

  @Post('/:id/crFiles')
  @UseInterceptors(FileInterceptor('files'))
  uploadCrFiles(@Param() { id }, @UploadedFile() files) {
    return this.appService.uploadCrFiles(id, files);
  }

  @Post('/:id/hotelsFiles')
  @UseInterceptors(FileInterceptor('files'))
  async uploadHotelFiles(@Param() { id }, @UploadedFile() files) {
    return this.appService.uploadHotelFiles(id, files);
  }
}
