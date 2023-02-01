import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(userId: number): Promise<User> {
    return this.userRepository.findOneBy({ id: userId });
  }

  async remove(userId: number): Promise<void> {
    await this.userRepository.delete(userId);
  }
}
