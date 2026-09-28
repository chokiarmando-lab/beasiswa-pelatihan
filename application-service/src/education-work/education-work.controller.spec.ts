import { Test, TestingModule } from '@nestjs/testing';
import { EducationWorkController } from './education-work.controller';

describe('EducationWorkController', () => {
  let controller: EducationWorkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EducationWorkController],
    }).compile();

    controller = module.get<EducationWorkController>(EducationWorkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
