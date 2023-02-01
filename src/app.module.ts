import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './entities/user.entity';
import { UsersModule } from './users/users.module';
import { BoardsModule } from './boards/boards.module';
import { Board } from './entities/board.entity';
import { TourList } from './entities/tourList.entity';
import { TourCart } from './entities/tourCart.entity';
import { TourCartsModule } from './tour-carts/tour-carts.module';
import { TourListModule } from './tour-list/tour-list.module';
import { TourListsModule } from './tour-lists/tour-lists.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'dev' ? '.dev.env' : '.test.env',
      ignoreEnvFile: process.env.NODE_ENV === 'prod',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [User, Board, TourList, TourCart],
      synchronize: true,
    }),
    UsersModule,
    BoardsModule,
    TourCartsModule,
    TourListModule,
    TourListsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
