import { IsEnum, IsNumber, IsOptional, IsString } from "class-validator";

enum Grupo {
    Acceso = "A",
    B = "B",
    C = "C",
    Femenino = "Ac",
    Especiales = "E",
    Uno = "1",
    Dos = "2",
    Tres = "3",
}

export class CreateTituloDto {
    @IsString()
    @IsOptional()
    año: string;

    @IsEnum(Grupo)
    @IsString()
    grupo: string;

    @IsNumber()
    @IsOptional()
    monto_ganado?: number;

    @IsNumber()
    @IsOptional()
    agjid_escuela?: number;
}