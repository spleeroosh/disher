import { UserEntity } from '@src/users/entities/user.entity';

import { AuthService } from './auth.service';
import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from '@src/users/dto/CreateUserDto';
import { SigninUserDto } from '@src/users/dto/SigninUserDto';
import { SigninResponseDto } from '@src/auth/dto/SigninResponseDto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-in')
  async signin(
    @Body() signinUserDto: SigninUserDto,
  ): Promise<SigninResponseDto> {
    return await this.authService.signin(signinUserDto);
  }

  @Post('sign-up')
  @UsePipes(new ValidationPipe())
  async signup(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return await this.authService.signup(createUserDto);
  }
}
