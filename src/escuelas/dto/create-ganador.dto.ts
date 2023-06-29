import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateGanadorDto {
    @IsString()
    año: string;

    @IsNumber()
    @IsOptional()
    escuela_id?: string;

    @IsNumber()
    premio_id: string;

    @IsString()
    @IsOptional()
    hist_int_fecha_ini?: string;

    @IsNumber()
    @IsOptional()
    hist_int_agjid_escuela?: number;

    @IsNumber()
    @IsOptional()
    hist_int_agjid_integrante?: number;
}