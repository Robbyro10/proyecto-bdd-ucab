import { IsNumber, IsString } from "class-validator";

export class CreateParentescoDto {

    @IsString()
    relacion: string;

    @IsNumber()
    integrante1: number;

    @IsNumber()
    integrante2: number;
}