import { Test, TestingModule } from '@nestjs/testing';
import { TrainingInterestController } from './training-interest.controller';

describe('TrainingInterestController', () => {
  let controller: TrainingInterestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrainingInterestController],
    }).compile();

    controller = module.get<TrainingInterestController>(TrainingInterestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
