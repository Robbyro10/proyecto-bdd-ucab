import { Injectable } from '@nestjs/common';
import { CreateEmpresaDto } from './dto/create-patrocinante_empresa.dto';
import { CreatePersonaDto } from './dto/create-patrocinante_persona.dto';
import { UpdateEmpresaDto } from './dto/update-patrocinante_empresa.dto';
import { UpdatePersonaDto } from './dto/update-patrocinante_persona.dto';

@Injectable()
export class PatrocinantesService {
  createEmpresa(createEmpresaDto: CreateEmpresaDto) {
    return 'This action adds a new patrocinante empresa';
  }

  createPersona(createPersonaDto: CreatePersonaDto) {
    return 'This action adds a new patrocinante persona';
  }

  findAll() {
    return `This action returns all patrocinantes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} patrocinante`;
  }

  updateEmpresa(id: number, updateEmpresaDto: UpdateEmpresaDto) {
    return `This action updates a #${id} patrocinante empresa`;
  }

  updatePersona(id: number, updatePersonaDto: UpdatePersonaDto) {
    return `This action updates a #${id} patrocinante persona`;
  }

  remove(id: number) {
    return `This action removes a #${id} patrocinante`;
  }
}
