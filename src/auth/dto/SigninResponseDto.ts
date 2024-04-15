import { IsJWT, IsObject } from 'class-validator';

export class SigninResponseDto {
  @IsObject()
  user: {
    name: string;
    surname: string;
    email: string;
  };

  @IsJWT()
  accessToken: string;
}
