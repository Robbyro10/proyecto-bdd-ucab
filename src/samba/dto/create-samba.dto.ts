import { IsDate, IsString, MinLength } from "class-validator";

export class CreateSambaDto {
    @IsString()
    @MinLength(1)
    titulo: string;

    @IsString()
    @MinLength(1)
    letra: string;

    @IsDate()
    @MinLength(1)
    año_carnaval: string;

    @IsString()
    @MinLength(1)
    tipo: string;
}
