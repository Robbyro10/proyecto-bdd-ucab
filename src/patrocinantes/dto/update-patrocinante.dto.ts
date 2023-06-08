import { PartialType } from '@nestjs/swagger';
import { CreatePatrocinanteDto } from './create-patrocinante.dto';

export class UpdatePatrocinanteDto extends PartialType(CreatePatrocinanteDto) {}
