import { PartialType } from "@nestjs/swagger";
import { CreateIntEscuelaDto } from "./create-int-escuela.dto";

export class UpdateIntEscuela extends PartialType(CreateIntEscuelaDto){}