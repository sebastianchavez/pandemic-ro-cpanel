import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class RequestUpdateProcessLockDto {
  @IsNotEmpty()
  @IsNumber()
  readonly processlock_id: number;

  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsNumber()
  readonly pid: number;

  @IsNotEmpty()
  @IsString()
  readonly type: string;

  @IsNotEmpty()
  @IsNumber()
  readonly size: number;
}
