import { Test, TestingModule } from '@nestjs/testing';
import { TechonologiesController } from './techonologies.controller';

describe('TechonologiesController', () => {
  let controller: TechonologiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TechonologiesController],
    }).compile();

    controller = module.get<TechonologiesController>(TechonologiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
