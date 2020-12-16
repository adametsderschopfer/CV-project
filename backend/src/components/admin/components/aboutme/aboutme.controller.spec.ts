import { Test, TestingModule } from '@nestjs/testing';
import { AboutMeController } from './aboutme.controller';

describe('AboutMeController', () => {
  let controller: AboutMeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AboutMeController],
    }).compile();

    controller = module.get<AboutMeController>(AboutMeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
