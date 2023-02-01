import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TourCart } from 'src/entities/tourCart.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TourCartsService {
  constructor(
    @InjectRepository(TourCart)
    private tourCartRepository: Repository<TourCart>,
  ) {}
}
