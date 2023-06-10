import { IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class CreatePersonaDto {
    @IsString()
    @MinLength(1)
    primer_nombre: string;

    @IsString()
    @MinLength(1)
    @IsOptional()
    segundo_nombre: string;

    @IsString()
    @MinLength(1)
    primer_apellido: string;

    @IsString()
    @MinLength(1)
    segundo_apellido: string;

    @IsNumber()
    @MinLength(1)
    doc_identidad: number;
}
