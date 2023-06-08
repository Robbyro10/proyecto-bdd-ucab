import { PartialType } from '@nestjs/swagger';
import { CreateSambaDto } from './create-samba.dto';

export class UpdateSambaDto extends PartialType(CreateSambaDto) {}
