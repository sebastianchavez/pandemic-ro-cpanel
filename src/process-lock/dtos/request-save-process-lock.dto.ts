import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class RequestSaveProcessLockDto {
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
