import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateEventoDto {

    @IsString()
    nombre: string;

    @IsString()
    fecha_ini: string;

    @IsString()
    fecha_fin: string;

    @IsString()
    tipo: string;

    @IsString()
    @IsOptional()
    descripcion?: string;

    @IsNumber()
    total_asistentes: number;

    @IsNumber()
    costo_unitario_r$: number;

    @IsNumber()
    agjid_escuela: number;
}