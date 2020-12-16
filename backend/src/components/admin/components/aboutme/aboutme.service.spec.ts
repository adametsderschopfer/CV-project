import { Test, TestingModule } from '@nestjs/testing';
import { AboutMeService } from './aboutme.service';

describe('AboutMeService', () => {
  let service: AboutMeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AboutMeService],
    }).compile();

    service = module.get<AboutMeService>(AboutMeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
