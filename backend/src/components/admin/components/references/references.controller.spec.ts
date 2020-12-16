import { Test, TestingModule } from '@nestjs/testing';
import { ReferencesController } from './references.controller';

describe('ReferencesController', () => {
  let controller: ReferencesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReferencesController],
    }).compile();

    controller = module.get<ReferencesController>(ReferencesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
