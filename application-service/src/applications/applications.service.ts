import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma.service';

import { ApplicationStatus } from '../generated/client';


@Injectable()
export class ApplicationsService {


  constructor(
    private readonly prisma: PrismaService
  ) {}



  async findAll() {
    return this.prisma.application.findMany({
      orderBy:{
        createdAt:'desc'
      },
      include:{
        studentProfile:true,
        educationWork:true,
        trainingInterest:true,
        documents:true,
        verificationLogs:true
      }
    });
  }

  async findSubmitted(){

  return this.prisma.application.findMany({

    where:{
      status:'SUBMITTED'
    },

    orderBy:{
      createdAt:'desc'
    },

    include:{
      studentProfile:true,
      educationWork:true,
      trainingInterest:true,
      documents:true,
      verificationLogs:true
    }

  });

}

  async findOne(id: number) {


    return this.prisma.application.findUnique({


      where: {

        id,

      },


      include: {


        studentProfile: true,


        educationWork: true,


        trainingInterest: true,


        documents: true,

        verificationLogs:true
      },


    });


  }





  async create(
    userId: number,
    scholarshipId: number
  ) {


    return this.prisma.application.create({


      data: {

        userId,

        scholarshipId,

      },


    });


  }







  async updateStatus(
    id:number,
    status:ApplicationStatus,
    note?:string
  ) {

    const application =
      await this.prisma.application.findUnique({
        where:{
          id,
        },
      });


    if(!application){
      throw new NotFoundException(
        'Application tidak ditemukan'
      );
    }


    const allowedTransitions:
    Record<ApplicationStatus, ApplicationStatus[]> =
    {

      DRAFT:[
        'SUBMITTED'
      ],

      SUBMITTED:[
        'VERIFICATION'
      ],

      VERIFICATION:[
        'REVISION',
        'VERIFIED',
        'REJECTED'
      ],

      REVISION:[
        'SUBMITTED'
      ],

      VERIFIED:[
        'SELECTED',
        'NOT_SELECTED'
      ],

      SELECTED:[],

      NOT_SELECTED:[],

      REJECTED:[],

    };


    if(
      !allowedTransitions[
        application.status
      ].includes(status)
    ){

      throw new BadRequestException(
        `Tidak bisa mengubah status dari ${application.status} ke ${status}`
      );

    }



    return this.prisma.$transaction(async(tx)=>{


      const updatedApplication =
        await tx.application.update({

          where:{
            id,
          },

          data:{
            status,
          },

        });



      await tx.verificationLog.create({

        data:{

          applicationId:id,

          status,
          
          note:
          note || `Status berubah menjadi ${status}`

        }

      });



      return updatedApplication;


    });

  }







  async remove(id: number) {


    return this.prisma.application.delete({


      where: {

        id,

      },


    });


  }








  async createProfile(

    applicationId: number,


    data: {

      nik: string;

      fullName: string;

      birthPlace: string;

      birthDate: string;

      gender: 'MALE' | 'FEMALE';

      address: string;

      phone: string;

      email: string;

    }

  ) {


    return this.prisma.studentProfile.create({


      data: {


        applicationId,


        nik: data.nik,


        fullName: data.fullName,


        birthPlace: data.birthPlace,


        birthDate: new Date(
          data.birthDate
        ),


        gender: data.gender,


        address: data.address,


        phone: data.phone,


        email: data.email,


      },


    });


  }







  async updateProfile(

    applicationId: number,


    data: {


      nik?: string;

      fullName?: string;

      birthPlace?: string;

      birthDate?: string;

      gender?: 'MALE' | 'FEMALE';

      address?: string;

      phone?: string;

      email?: string;


    }

  ) {


    return this.prisma.studentProfile.update({


      where: {

        applicationId,

      },


      data: {


        ...data,


        birthDate: data.birthDate

          ? new Date(data.birthDate)

          : undefined,


      },


    });


  }








  async submit(id: number) {


    const application =
      await this.prisma.application.findUnique({


        where: {

          id,

        },


        include: {


          studentProfile: true,


          educationWork: true,


          trainingInterest: true,


          documents: true,

          verificationLogs:true
        },


      });






    if (!application) {


      throw new NotFoundException(

        'Application tidak ditemukan'

      );


    }






    if (!application.studentProfile) {


      throw new BadRequestException(

        'Student profile wajib diisi sebelum submit'

      );


    }






    if (!application.educationWork) {


      throw new BadRequestException(

        'Data pendidikan wajib diisi sebelum submit'

      );


    }






    if (!application.trainingInterest) {


      throw new BadRequestException(

        'Data pelatihan wajib diisi sebelum submit'

      );


    }






    if (
      application.documents.length === 0
    ) {


      throw new BadRequestException(

        'Minimal satu dokumen wajib diupload sebelum submit'

      );


    }






    if (
      application.status !== 'DRAFT'
    ) {


      throw new BadRequestException(

        `Application dengan status ${application.status} tidak dapat disubmit`

      );


    }






  return this.prisma.$transaction(async(tx)=>{


    const updatedApplication =
      await tx.application.update({

        where:{
          id,
        },

        data:{
          status:'SUBMITTED',
        },

      });



    await tx.verificationLog.create({

      data:{

        applicationId:id,

        status:'SUBMITTED',

        note:'Peserta mengirim pendaftaran'

      }

    });



    return updatedApplication;


  });


  }

  async findVerified(){

    return this.prisma.application.findMany({

      where:{
        status:'VERIFIED'
      },


      orderBy:{
        createdAt:'desc'
      },


      include:{

        studentProfile:true,

        educationWork:true,

        trainingInterest:true,

        documents:true,

        verificationLogs:true

      }


    });

  }

  async findByUser(userId:number){

    return this.prisma.application.findFirst({

      where:{
        userId,
        status:{
          not:'DRAFT'
        }
      },

      orderBy:{
        createdAt:'desc'
      },

      include:{
        studentProfile:true,
        educationWork:true,
        trainingInterest:true,
        documents:true,
        verificationLogs:true
      }

    });

  }

}