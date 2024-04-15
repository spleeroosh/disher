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

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @Mutation(() => LoginResponseDto)
  // async login(
  //   @Args('createUserDto') createUserDto: CreateUserDto,
  // ): Promise<LoginResponseDto> {
  //   return await this.authService.login(createUserDto);
  // }

  @Post('sign-up')
  @UsePipes(new ValidationPipe())
  async signup(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return await this.authService.signup(createUserDto);
  }
}
