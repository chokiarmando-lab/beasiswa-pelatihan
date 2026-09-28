import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class TrainingInterestService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    applicationId: number,
    data: {
      trainingProgram: string;
      trainingLocation: string;
      motivation: string;
    },
  ) {
    return this.prisma.trainingInterest.create({
      data: {
        applicationId,
        trainingProgram: data.trainingProgram,
        trainingLocation: data.trainingLocation,
        motivation: data.motivation,
      },
    });
  }

  async findOne(applicationId: number) {
    return this.prisma.trainingInterest.findUnique({
      where: {
        applicationId,
      },
    });
  }

  async update(
    applicationId: number,
    data: {
      trainingProgram?: string;
      trainingLocation?: string;
      motivation?: string;
    },
  ) {
    return this.prisma.trainingInterest.update({
      where: {
        applicationId,
      },
      data,
    });
  }
}

