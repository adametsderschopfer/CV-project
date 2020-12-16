import { Test, TestingModule } from '@nestjs/testing';
import { WorkExpiriencesController } from './workexpiriences.controller';

describe('WorkExpiriencesController', () => {
  let controller: WorkExpiriencesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkExpiriencesController],
    }).compile();

    controller = module.get<WorkExpiriencesController>(WorkExpiriencesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
