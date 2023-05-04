import { IsBoolean, IsOptional, IsString, MinLength } from "class-validator";

export class CreateTodoDto {
    @IsString()
    @MinLength(1)
    @IsOptional()
    title: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsBoolean()
    @IsOptional()
    complete: boolean;
}
