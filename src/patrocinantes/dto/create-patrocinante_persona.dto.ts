import { IsEmail, IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class CreatePersonaDto {
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

    @IsNumber()
    doc_identidad?: number;

    @IsEmail()
    @MinLength(1)
    email_contacto: string;
}
