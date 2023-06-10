import { IsString, MinLength } from "class-validator";

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
}
