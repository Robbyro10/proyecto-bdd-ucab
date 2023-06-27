import { IsEnum, IsNumber, IsOptional, IsString } from "class-validator";

enum Autoridad {
    Si = 'SI',
    No = 'NO',
}

export class CreateIntEscuelaDto {
    @IsString()
    fecha_ini: string;

    @IsString()
    @IsOptional()
    fecha_fin?: string;

    @IsNumber()
    agjid_escuela: number;

    @IsNumber()
    agjid_integrante: number;

    @IsString()
    @IsEnum(Autoridad)
    autoridad: string;
}