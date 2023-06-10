import { IsEmail, IsOptional, IsString, MinLength } from "class-validator";

export class CreateEmpresaDto {
    @IsString()
    @MinLength(1)
    nombre: string;

    @IsString()
    @MinLength(1)
    @IsOptional()
    mision: string;

    @IsString()
    @MinLength(1)
    @IsEmail()
    email_contacto: string;
}
