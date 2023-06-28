import { IsEnum, IsNumber, IsString } from "class-validator";

enum Tipo {
    Individual = 'I',
    Escuela = 'E'
}

export class CreatePremioDto {
    @IsString()
    nombre: string;

    @IsString()
    descripcion: string;

    @IsEnum(Tipo)
    tipo: string;

    @IsNumber()
    lugar_id: number;
}