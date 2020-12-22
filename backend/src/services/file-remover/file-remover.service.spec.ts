import { Test, TestingModule } from '@nestjs/testing';
import { FileRemoverService } from './file-remover.service';

describe('FileRemoverService', () => {
  let service: FileRemoverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FileRemoverService],
    }).compile();

    service = module.get<FileRemoverService>(FileRemoverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
