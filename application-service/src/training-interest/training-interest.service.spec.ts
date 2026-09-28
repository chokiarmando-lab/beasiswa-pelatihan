import { Test, TestingModule } from '@nestjs/testing';
import { TrainingInterestService } from './training-interest.service';

describe('TrainingInterestService', () => {
  let service: TrainingInterestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrainingInterestService],
    }).compile();

    service = module.get<TrainingInterestService>(TrainingInterestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
