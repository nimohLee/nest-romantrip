import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TourList } from 'src/entities/tourList.entity';
import { TourListsController } from './tour-lists.controller';
import { TourListsService } from './tour-lists.service';

@Module({
  imports: [TypeOrmModule.forFeature([TourList])],
  controllers: [TourListsController],
  providers: [TourListsService],
})
export class TourListsModule {}
