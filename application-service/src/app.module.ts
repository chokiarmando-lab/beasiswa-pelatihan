import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PrismaModule } from './prisma.module';
import { ApplicationsModule } from './applications/applications.module';
import { EducationWorkModule } from './education-work/education-work.module';
import { TrainingInterestModule } from './training-interest/training-interest.module';
import { DocumentsModule } from './documents/documents.module';
import { VerificationModule } from './verification/verification.module';


@Module({

  imports: [
    PrismaModule,
    ApplicationsModule,
    EducationWorkModule,
    TrainingInterestModule,
    DocumentsModule,
    VerificationModule
  ],

  controllers: [
    AppController
  ],

  providers: [
    AppService
  ],

})
export class AppModule {}