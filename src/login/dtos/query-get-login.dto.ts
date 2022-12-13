import { IsEmail, IsOptional, IsString } from 'class-validator';

export class QueryGetLoginDto {
  @IsEmail()
  @IsOptional()
  readonly email?: string;

  @IsString()
  @IsOptional()
  readonly userid?: string;
}
