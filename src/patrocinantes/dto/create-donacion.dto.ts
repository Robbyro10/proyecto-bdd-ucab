import { IsNumber, IsString } from "class-validator";

export class CreateDonacionDto {
    @IsString()
    fecha: string;

    @IsNumber()
    hist_patrocinio_agjid_escuela: number;
    
    @IsNumber()
    hist_patrocinio_id: number

    @IsNumber()
    monto_r$: number;
}