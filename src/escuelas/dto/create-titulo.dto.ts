import { IsEnum, IsNumber, IsOptional, IsString } from "class-validator";

enum Grupo {
    Acceso = "A",
    Femenino = "Ac",
    Especiales = "E",
    Uno = "1",
}

export class CreateTituloDto {
    @IsString()
    año: string;

    @IsEnum(Grupo)
    @IsString()
    grupo: string;

    @IsNumber()
    @IsOptional()
    monto_ganado?: number;

    @IsNumber()
    agjid_escuela: number;
}