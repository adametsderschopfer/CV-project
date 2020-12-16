import { Test, TestingModule } from '@nestjs/testing';
import { TechonologiesService } from './techonologies.service';

describe('TechonologiesService', () => {
  let service: TechonologiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TechonologiesService],
    }).compile();

    service = module.get<TechonologiesService>(TechonologiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
