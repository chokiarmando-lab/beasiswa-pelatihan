import {
  Module,
  MiddlewareConsumer,
  NestModule
} from '@nestjs/common';


import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PrismaModule } from './prisma.module';
import { ApplicationsModule } from './applications/applications.module';
import { EducationWorkModule } from './education-work/education-work.module';
import { TrainingInterestModule } from './training-interest/training-interest.module';
import { DocumentsModule } from './documents/documents.module';
import { VerificationModule } from './verification/verification.module';

import { JwtMiddleware } from './auth/jwt.middleware';



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
export class AppModule implements NestModule {


  configure(
    consumer: MiddlewareConsumer
  ) {

    consumer
      .apply(JwtMiddleware)
      .forRoutes('*');

  }

}