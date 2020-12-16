import { Test, TestingModule } from '@nestjs/testing';
import { WorkExpiriencesService } from './workexpiriences.service';

describe('WorkExpiriencesService', () => {
  let service: WorkExpiriencesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkExpiriencesService],
    }).compile();

    service = module.get<WorkExpiriencesService>(WorkExpiriencesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
