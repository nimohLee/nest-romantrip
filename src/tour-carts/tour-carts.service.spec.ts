import { Test, TestingModule } from '@nestjs/testing';
import { TourCartsService } from './tour-carts.service';

describe('TourCartsService', () => {
  let service: TourCartsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TourCartsService],
    }).compile();

    service = module.get<TourCartsService>(TourCartsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
