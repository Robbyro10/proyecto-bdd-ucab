import { IsString, IsOptional, IsNumber } from "class-validator";

export class CreatePatroEscuelaDto {
    @IsString()
    fecha_ini: string;

    @IsString()
    @IsOptional()
    fecha_fin?: string;

    @IsNumber()
    agjid_escuela: number;

    @IsNumber()
    patrocinante_id: number;
}