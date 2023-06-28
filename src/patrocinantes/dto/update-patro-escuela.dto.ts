import { PartialType } from "@nestjs/swagger";
import { CreatePatroEscuelaDto } from "./create-patro-escuela.dto";

export class UpdatePatroEscuelaDto extends PartialType(CreatePatroEscuelaDto){}