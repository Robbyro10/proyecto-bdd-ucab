import { PartialType } from '@nestjs/swagger';
import { CreateEmpresaDto } from './create-patrocinante_empresa.dto';

export class UpdateEmpresaDto extends PartialType(CreateEmpresaDto) {}
