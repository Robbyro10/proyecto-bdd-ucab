import { PartialType } from '@nestjs/swagger';
import { CreatePersonaDto } from './create-patrocinante_persona.dto';

export class UpdatePersonaDto extends PartialType(CreatePersonaDto) {}
