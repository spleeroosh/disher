import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { SigninUserDto } from '@src/users/dto/SigninUserDto';
import { CreateUserDto } from '@src/users/dto/CreateUserDto';
import { UserEntity } from '@src/users/entities/user.entity';
import { UsersService } from '@src/users/users.service';

import * as bcrypt from 'bcrypt';
import { SigninResponseDto } from './dto/SigninResponseDto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private configService: ConfigService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<UserEntity> {
    const user = await this.usersService.findUserByEmail(email);

    if (user) {
      const passwordsAreEqual = await bcrypt.compare(pass, user?.password);

      if (passwordsAreEqual) {
        return user;
      } else {
        throw new HttpException(
          'Invalid email or password',
          HttpStatus.BAD_REQUEST,
        );
      }
    }

    return user;
  }

  async signup(dto: CreateUserDto): Promise<UserEntity> {
    const existingUser = await this.validateUser(dto.email, dto.password);

    if (existingUser) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }

    const password = await bcrypt.hash(
      dto.password,
      +this.configService.get('SALT'),
    );

    const user = await this.usersService.createUser({ ...dto, password });
    return user;
  }

  async signin({ email, password }: SigninUserDto): Promise<SigninResponseDto> {
    const user = await this.validateUser(email, password);

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const payload = { email: user.email, sub: user.id };

    return {
      accessToken: this.jwtService.sign(payload),
      user: {
        name: user.name,
        surname: user.surname,
        email: user.email,
      },
    };
  }
}
