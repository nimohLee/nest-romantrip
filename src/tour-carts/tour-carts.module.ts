import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TourCart } from 'src/entities/tourCart.entity';
import { TourCartsController } from './tour-carts.controller';
import { TourCartsService } from './tour-carts.service';

@Module({
  imports: [TypeOrmModule.forFeature([TourCart])],
  controllers: [TourCartsController],
  providers: [TourCartsService],
})
export class TourCartsModule {}
