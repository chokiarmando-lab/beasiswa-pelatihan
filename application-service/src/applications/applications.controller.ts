import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';

import { ApplicationsService } from './applications.service';
import { ApplicationStatus } from '../generated/client';


@Controller('applications')
export class ApplicationsController {


  constructor(
    private readonly applicationsService: ApplicationsService
  ) {}



  // =========================
  // PESERTA
  // =========================


  @Post()
  create(
    @Body()
    body:{
      userId:number;
      scholarshipId:number;
    }
  ){

    return this.applicationsService.create(
      body.userId,
      body.scholarshipId
    );

  }



  @Get()
  findAll(){

    return this.applicationsService.findAll();

  }



  @Get('submitted/list')
  findSubmitted(){

    return this.applicationsService.findSubmitted();

  }



  @Get(':id')
  findOne(
    @Param('id',ParseIntPipe)
    id:number
  ){

    return this.applicationsService.findOne(id);

  }




  @Post(':id/profile')
  createProfile(
    @Param('id',ParseIntPipe)
    id:number,

    @Body()
    body:any
  ){

    return this.applicationsService.createProfile(
      id,
      body
    );

  }




  @Patch(':id/profile')
  updateProfile(
    @Param('id',ParseIntPipe)
    id:number,

    @Body()
    body:any
  ){

    return this.applicationsService.updateProfile(
      id,
      body
    );

  }




  @Patch(':id/submit')
  submit(
    @Param('id',ParseIntPipe)
    id:number
  ){

    return this.applicationsService.submit(id);

  }

  @Get('user/:userId')
  findByUser(
    @Param('userId', ParseIntPipe)
    userId:number
  ){

    return this.applicationsService.findByUser(userId);

}



  // =========================
  // VERIFIKATOR
  // =========================


  @Patch(':id/status')
  updateStatus(

    @Param('id',ParseIntPipe)
    id:number,


    @Body()
    body:{
    status:ApplicationStatus,
    note?:string
    }

  ){

    return this.applicationsService.updateStatus(
    id,
    body.status,
    body.note
    );

  }




  @Delete(':id')
  remove(

    @Param('id',ParseIntPipe)
    id:number

  ){

    return this.applicationsService.remove(id);

  }

  // =========================
  // LEMBAGA
  // =========================


  @Get('verified/list')
  findVerified(){

    return this.applicationsService.findVerified();

  }

}