import { IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class CreateEscuelaDto {
    @IsString()
    @MinLength(1)
    nombre: string;

    @IsString()
    @MinLength(1)
    direccion_sede: string;

    @IsString()
    @MinLength(1)
    resumen_hist: string;

    @IsNumber()
    @IsOptional()
    lugar_id: number;
}
