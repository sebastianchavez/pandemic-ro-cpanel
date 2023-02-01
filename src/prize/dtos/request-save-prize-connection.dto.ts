import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class RequestSavePrizeConnectionDto {
    @IsNotEmpty()
    @IsNumber()
    readonly day: number;
    
    @IsNotEmpty()
    @IsNumber()
    readonly itemId: number;

    @IsNotEmpty()
    @IsNumber()
    readonly quantity: number;
}