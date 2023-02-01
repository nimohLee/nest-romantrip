import { Test, TestingModule } from '@nestjs/testing';
import { TourListsController } from './tour-lists.controller';

describe('TourListsController', () => {
  let controller: TourListsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TourListsController],
    }).compile();

    controller = module.get<TourListsController>(TourListsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
