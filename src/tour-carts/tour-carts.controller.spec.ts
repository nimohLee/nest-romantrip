import { Test, TestingModule } from '@nestjs/testing';
import { TourCartsController } from './tour-carts.controller';

describe('TourCartsController', () => {
  let controller: TourCartsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TourCartsController],
    }).compile();

    controller = module.get<TourCartsController>(TourCartsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
