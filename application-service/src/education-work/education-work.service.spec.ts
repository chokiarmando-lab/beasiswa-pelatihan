import { Test, TestingModule } from '@nestjs/testing';
import { EducationWorkService } from './education-work.service';

describe('EducationWorkService', () => {
  let service: EducationWorkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EducationWorkService],
    }).compile();

    service = module.get<EducationWorkService>(EducationWorkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
