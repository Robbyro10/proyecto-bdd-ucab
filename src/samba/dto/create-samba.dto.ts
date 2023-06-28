import { IsNumber, IsString, MinLength } from "class-validator";

export class CreateSambaDto {
    @IsString()
    titulo: string;

    @IsString()
    letra: string;

    @IsNumber()
    año_carnaval: number;

    @IsString()
    tipo: string;
}
