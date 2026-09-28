import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';

import { EducationWorkService } from './education-work.service';

@Controller('education-work')
export class EducationWorkController {
  constructor(
    private readonly educationWorkService: EducationWorkService,
  ) {}

  @Post(':applicationId')
  create(
    @Param('applicationId', ParseIntPipe) applicationId: number,
    @Body()
    body: {
      educationLevel: string;
      institution: string;
      major?: string;
      currentJob?: string;
      landOwnership?: string;
      plantationInvolvement?: string;
    },
  ) {
    return this.educationWorkService.create(
      applicationId,
      body,
    );
  }

  @Get(':applicationId')
  findOne(
    @Param('applicationId', ParseIntPipe) applicationId: number,
  ) {
    return this.educationWorkService.findOne(applicationId);
  }

  @Patch(':applicationId')
  update(
    @Param('applicationId', ParseIntPipe) applicationId: number,
    @Body()
    body: {
      educationLevel?: string;
      institution?: string;
      major?: string;
      currentJob?: string;
      landOwnership?: string;
      plantationInvolvement?: string;
    },
  ) {
    return this.educationWorkService.update(
      applicationId,
      body,
    );
  }
}

