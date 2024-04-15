import { Get, Controller } from '@nestjs/common';

// import { JwtAuthGuard } from '@src/auth/jwt-auth.guard';

import { UserEntity } from '@src/users/entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  // @UseGuards(JwtAuthGuard)
  @Get('list')
  async getAllUsers(): Promise<UserEntity[]> {
    return await this.usersService.getAllUsers();
  }
}
