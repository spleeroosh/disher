import { IsString, IsStrongPassword } from 'class-validator';

export class CreateUserDto {
  @IsString()
  email: string;

  @IsString()
  name: string;

  @IsString()
  surname: string;

  @IsStrongPassword()
  password: string;
}
