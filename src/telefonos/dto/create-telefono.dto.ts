import { IsEnum, IsNumber, IsString } from "class-validator";

enum Tipo {
    Empresa = 'empresa',
    Persona = 'persona',
    Escuela = 'escuela',
}

export class CreateTelefonoDto {

    @IsNumber()
    cod_int: number;
    
    @IsNumber()
    cod_area: number;
    
    @IsNumber()
    numero: number;

    @IsString()
    @IsEnum(Tipo)
    tipo: string;
}
