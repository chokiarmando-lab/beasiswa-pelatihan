import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Body,
} from '@nestjs/common';

import { VerificationService } from './verification.service';


@Controller('verification')
export class VerificationController {

  constructor(
    private readonly verificationService: VerificationService
  ){}


  @Get(':id')
  getDetail(
    @Param('id', ParseIntPipe)
    id:number
  ){

    return this.verificationService.getApplicationDetail(id);

  }



  @Patch(':id/start')
  start(
    @Param('id', ParseIntPipe)
    id:number,

    @Body()
    body:{
      note?:string
    }

  ){

    return this.verificationService.startVerification(
      id,
      body.note
    );

  }



  @Patch(':id/result')
  result(

    @Param('id', ParseIntPipe)
    id:number,


    @Body()
    body:{
      status:
      'VERIFIED'
      |
      'REVISION'
      |
      'REJECTED',

      note:string
    }

  ){

    return this.verificationService.updateVerification(
      id,
      body.status,
      body.note
    );

  }

}