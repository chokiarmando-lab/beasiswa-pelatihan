import { Module } from '@nestjs/common';
import { TrainingInterestController } from './training-interest.controller';
import { TrainingInterestService } from './training-interest.service';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [TrainingInterestController],
  providers: [TrainingInterestService, PrismaService],
})
export class TrainingInterestModule {}