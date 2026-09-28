import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';

import { TrainingInterestService } from './training-interest.service';

@Controller('applications/:applicationId/training-interest')
export class TrainingInterestController {
  constructor(
    private readonly trainingInterestService: TrainingInterestService,
  ) {}

  @Post()
  create(
    @Param('applicationId', ParseIntPipe) applicationId: number,
    @Body()
    body: {
      trainingProgram: string;
      trainingLocation: string;
      motivation: string;
    },
  ) {
    return this.trainingInterestService.create(
      applicationId,
      body,
    );
  }

  @Get()
  findOne(
    @Param('applicationId', ParseIntPipe) applicationId: number,
  ) {
    return this.trainingInterestService.findOne(applicationId);
  }

  @Patch()
  update(
    @Param('applicationId', ParseIntPipe) applicationId: number,
    @Body()
    body: {
      trainingProgram?: string;
      trainingLocation?: string;
      motivation?: string;
    },
  ) {
    return this.trainingInterestService.update(
      applicationId,
      body,
    );
  }
}