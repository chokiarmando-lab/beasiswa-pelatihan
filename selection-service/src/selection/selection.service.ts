import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ApplicationStatus } from '../generated/client';

@Injectable()
export class SelectionService {

  constructor(
    private readonly prisma: PrismaService
  ) {}


  async createResult(
    applicationId:number,
    score:number,
    note?:string
  ){

    const application =
      await this.prisma.application.findUnique({
        where:{
          id:applicationId
        }
      });


    if(!application){
      throw new NotFoundException(
        'Application tidak ditemukan'
      );
    }


    const result =
      await this.prisma.selectionResult.upsert({

        where:{
          applicationId
        },

        update:{
          score,
          note
        },

        create:{
          applicationId,
          score,
          note
        }

      });


    const status: ApplicationStatus =
    score >= 70
    ? ApplicationStatus.SELECTED
    : ApplicationStatus.NOT_SELECTED;


    await this.prisma.application.update({

      where:{
        id:applicationId
      },

      data:{
        status
      }

    });


    return result;

  }



  async findByApplication(
    applicationId:number
  ){

    return this.prisma.selectionResult.findUnique({

      where:{
        applicationId
      }

    });

  }

}