import { IsEnum, IsNumber, IsOptional, IsString, MinLength } from "class-validator";

enum Genero {
    Masculino = 'M',
    Femenino = 'F',
}
export class CreateIntegranteDto {
    @IsString()
    @MinLength(1)
    primer_nombre: string;

    @IsString()
    @IsOptional()
    segundo_nombre?: string;

    @IsString()
    @MinLength(1)
    primer_apellido: string;

    @IsString()
    @MinLength(1)
    segundo_apellido: string;

    @IsString()
    @IsOptional()
    apodo: string;

    @IsNumber()
    @IsOptional()
    doc_identidad?: number;

    @IsString()
    @MinLength(1)
    fecha_nac: string;

    @IsString()
    @IsEnum(Genero)
    genero: string;

    @IsString()
    @MinLength(1)
    nacionalidad: string;
}
