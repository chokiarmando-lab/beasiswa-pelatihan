import { Module } from '@nestjs/common';
import { EducationWorkController } from './education-work.controller';
import { EducationWorkService } from './education-work.service';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [EducationWorkController],
  providers: [EducationWorkService, PrismaService],
})
export class EducationWorkModule {}