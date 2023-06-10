import { IsString, MinLength } from "class-validator";

export class CreateColorDto {
    @IsString()
    @MinLength(1)
    nombre: string;
}