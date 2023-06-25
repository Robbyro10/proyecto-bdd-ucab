import { CreateHabilidadDto } from "./create-habilidad.dto";
import { PartialType } from "@nestjs/swagger";

export class UpdateHabilidadDto extends PartialType(CreateHabilidadDto) {}