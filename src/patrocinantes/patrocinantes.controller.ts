import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PatrocinantesService } from './patrocinantes.service';
import { CreateEmpresaDto } from './dto/create-patrocinante_empresa.dto';
import { UpdateEmpresaDto } from './dto/update-patrocinante_empresa.dto';
import { CreatePersonaDto } from './dto/create-patrocinante_persona.dto';
import { UpdatePersonaDto } from './dto/update-patrocinante_persona.dto';
import { CreatePatroEscuelaDto } from './dto/create-patro-escuela.dto';

@Controller('patrocinantes')
export class PatrocinantesController {
  constructor(private readonly patrocinantesService: PatrocinantesService) {}

  @Post('/empresa')
  createEmpresa(@Body() createEmpresaDto: CreateEmpresaDto) {
    return this.patrocinantesService.createEmpresa(createEmpresaDto);
  }

  @Post('/persona')
  createPersona(@Body() createPersonaDto: CreatePersonaDto) {
    return this.patrocinantesService.createPersona(createPersonaDto);
  }

  @Post('empresa/escuela')
  addEscuelaEmpresa(@Body() createPatroEscuelaDto: CreatePatroEscuelaDto) {
    return this.patrocinantesService.addEscuelaEmpresa(createPatroEscuelaDto)
  }

  @Post('persona/escuela')
  addEscuelaPersona(@Body() createPatroEscuelaDto: CreatePatroEscuelaDto) {
    return this.patrocinantesService.addEscuelaPersona(createPatroEscuelaDto)
  }

  @Get('/empresa')
  findAllEmpresa() {
    return this.patrocinantesService.findAllEmpresa();
  }

  @Get('/persona')
  findAllPersona() {
    return this.patrocinantesService.findAllPersona();
  }

  @Get('/empresa/:id')
  findOneEmpresa(@Param('id') id: string) {
    return this.patrocinantesService.findOneEmpresa(+id);
  }

  @Get('/persona/:id')
  findOnePersona(@Param('id') id: string) {
    return this.patrocinantesService.findOnePersona(+id);
  }

  @Patch('/empresa/:id')
  updateEmpresa(@Param('id') id: string, @Body() updateEmpresaDto: UpdateEmpresaDto) {
    return this.patrocinantesService.updateEmpresa(+id, updateEmpresaDto);
  }

  @Patch('/persona/:id')
  updatePersona(@Param('id') id: string, @Body() updatePersonaDto: UpdatePersonaDto) {
    return this.patrocinantesService.updatePersona(+id, updatePersonaDto);
  }

  @Delete('empresa/:id')
  removeEmpresa(@Param('id') id: string) {
    return this.patrocinantesService.removeEmpresa(+id);
  }

  @Delete('persona/:id')
  removePersona(@Param('id') id: string) {
    return this.patrocinantesService.removePersona(+id);
  }
}
