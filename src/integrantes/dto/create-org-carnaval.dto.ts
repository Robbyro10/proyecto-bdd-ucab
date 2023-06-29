import { IsNumber, IsString } from "class-validator";

export class CreateOrgCarnavalDto {
    @IsString()
    año: string;

    @IsNumber()
    hist_int_agjid_escuela: number

    @IsNumber()
    hist_int_agjid_integrante: number

    @IsString()
    hist_int_fecha_ini: string;

    @IsNumber()
    agjid_rol: number;
}