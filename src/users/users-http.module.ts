import { Module } from '@nestjs/common';
import { UsersModule } from './users.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
@Module({
  imports: [UsersModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UserHttpModule {}
