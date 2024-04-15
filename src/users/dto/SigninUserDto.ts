import { IsString, IsStrongPassword } from 'class-validator';

export class SigninUserDto {
  @IsString()
  email: string;

  @IsStrongPassword()
  password: string;
}
