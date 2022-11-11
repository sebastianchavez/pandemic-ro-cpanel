import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class QueryLoginDto {
    @IsEmail()
    @IsOptional()
    readonly email?: string;

    @IsString()
    @IsOptional()
    readonly userid?: string;
}