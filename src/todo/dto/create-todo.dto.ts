import { IsBoolean, IsOptional, IsString, MinLength } from "class-validator";
import { User } from "src/auth/entities/user.entity";

export class CreateTodoDto {
    @IsString()
    @MinLength(1)
    title: string;

    @IsString()
    @IsOptional()
    description?: string;

}
