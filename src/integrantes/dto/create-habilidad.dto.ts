import { IsOptional, IsString } from "class-validator";

export class CreateHabilidadDto {

    @IsOptional()
    id_habilidad?: number;

    @IsString()
    @IsOptional()
    nombre?: string;
}