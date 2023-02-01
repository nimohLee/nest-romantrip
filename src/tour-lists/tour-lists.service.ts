import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TourList } from 'src/entities/tourList.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TourListsService {
  constructor(
    @InjectRepository(TourList)
    private tourCartRepository: Repository<TourList>,
  ) {}
}
