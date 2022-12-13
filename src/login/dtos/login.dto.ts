import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  readonly userid: string;

  @IsString()
  @IsNotEmpty()
  readonly user_pass: string;

  @IsString()
  @IsNotEmpty()
  readonly sex: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly last_ip: string;
}
