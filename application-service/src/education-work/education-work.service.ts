import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class EducationWorkService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    applicationId: number,
    data: {
      educationLevel: string;
      institution: string;
      major?: string;
      currentJob?: string;
      landOwnership?: string;
      plantationInvolvement?: string;
    },
  ) {
    return this.prisma.educationWork.create({
      data: {
        applicationId,
        educationLevel: data.educationLevel,
        institution: data.institution,
        major: data.major,
        currentJob: data.currentJob,
        landOwnership: data.landOwnership,
        plantationInvolvement: data.plantationInvolvement,
      },
    });
  }

  async findOne(applicationId: number) {
    return this.prisma.educationWork.findUnique({
      where: {
        applicationId,
      },
    });
  }

  async update(
    applicationId: number,
    data: {
      educationLevel?: string;
      institution?: string;
      major?: string;
      currentJob?: string;
      landOwnership?: string;
      plantationInvolvement?: string;
    },
  ) {
    return this.prisma.educationWork.update({
      where: {
        applicationId,
      },
      data,
    });
  }
}

