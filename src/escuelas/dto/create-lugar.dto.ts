import { IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class CreateLugarDto {
    @IsString()
    @MinLength(1)
    nombre: string;

    @IsString()
    @MinLength(1)
    tipo: string;

    @IsNumber()
    @IsOptional()
    id_lugar_padre: number;
}