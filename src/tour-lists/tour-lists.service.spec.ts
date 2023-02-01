import { Test, TestingModule } from '@nestjs/testing';
import { TourListsService } from './tour-lists.service';

describe('TourListsService', () => {
  let service: TourListsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TourListsService],
    }).compile();

    service = module.get<TourListsService>(TourListsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
