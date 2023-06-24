import { IsNumber, IsOptional } from "class-validator";


export class CreateColorDto {
    @IsNumber()
    @IsOptional()
    escuela_id?: number;

    @IsNumber()
    color_id: number;
}