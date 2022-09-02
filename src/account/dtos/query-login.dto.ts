import { IsEmail, IsNotEmpty } from "class-validator";

export class QueryLoginDto {
    @IsEmail()
    @IsNotEmpty()
    readonly email: string;

}