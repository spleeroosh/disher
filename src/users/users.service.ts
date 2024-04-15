import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from './dto/CreateUserDto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async createUser(dto: CreateUserDto): Promise<UserEntity> {
    const user = await this.usersRepository.save({
      name: dto.name,
      email: dto.email,
      password: dto.password,
      surname: dto.surname,
    });

    return user;
  }

  async findUserByEmail(email: string): Promise<UserEntity> {
    const user = await this.usersRepository.findOne({ where: { email } });
    return user;
  }

  async getAllUsers(): Promise<UserEntity[]> {
    const users = await this.usersRepository.find();
    return users;
  }
}
