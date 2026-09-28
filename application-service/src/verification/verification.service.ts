import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';

import { PrismaService } from '../prisma.service';
import { ApplicationStatus } from '../generated/client';


@Injectable()
export class VerificationService {


  constructor(
    private readonly prisma: PrismaService
  ){}



  // ambil detail pendaftaran

  async getApplicationDetail(id:number){

    const application =
      await this.prisma.application.findUnique({

        where:{
          id
        },

        include:{
          studentProfile:true,
          educationWork:true,
          trainingInterest:true,
          documents:true,
          verificationLogs:true
        }

      });



    if(!application){

      throw new NotFoundException(
        'Application tidak ditemukan'
      );

    }


    return application;

  }





  // mulai proses verifikasi

  async startVerification(
    id:number,
    note?:string
  ){


    const application =
      await this.prisma.application.findUnique({

        where:{
          id
        }

      });



    if(!application){

      throw new NotFoundException(
        'Application tidak ditemukan'
      );

    }



    if(application.status !== 'SUBMITTED'){

      throw new BadRequestException(
        'Application belum siap diverifikasi'
      );

    }



    const updated =
      await this.prisma.application.update({

        where:{
          id
        },

        data:{
          status:'VERIFICATION'
        }

      });



    await this.prisma.verificationLog.create({

      data:{

        applicationId:id,

        status:'VERIFICATION',

        note:note || 'Mulai proses verifikasi'

      }

    });



    return updated;


  }







  // hasil verifikasi


  async updateVerification(

    id:number,

    status:
    'VERIFIED'
    |
    'REVISION'
    |
    'REJECTED',

    note:string

  ){


    const application =
      await this.prisma.application.findUnique({

        where:{
          id
        }

      });



    if(!application){

      throw new NotFoundException(
        'Application tidak ditemukan'
      );

    }




    if(application.status !== 'VERIFICATION'){

      throw new BadRequestException(
        'Application belum dalam tahap verifikasi'
      );

    }




    const updated =
      await this.prisma.application.update({

        where:{
          id
        },

        data:{
          status
        }

      });





    await this.prisma.verificationLog.create({

      data:{

        applicationId:id,

        status,

        note

      }

    });




    return updated;

  }


}