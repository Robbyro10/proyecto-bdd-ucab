import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EscuelasService } from './escuelas.service';
import { CreateEscuelaDto } from './dto/create-escuela.dto';
import { UpdateEscuelaDto } from './dto/update-escuela.dto';
import { CreateLugarDto } from './dto/create-lugar.dto';
import { UpdateLugarDto } from './dto/update-lugar.dto';
import { CreateColorDto } from './dto/create-color.dto';
import { UpdateColorDto } from './dto/update-color.dto';
import { CreateTituloDto } from './dto/create-titulo.dto';
import { UpdateTituloDto } from './dto/update-titulo.dto';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { CreatePremioDto } from './dto/create-premio.dto';
import { CreateRolDto } from './dto/create-rol.dto';
import { CreateGanadorDto } from './dto/create-ganador.dto';

@Controller('escuelas')
export class EscuelasController {
  constructor(private readonly escuelasService: EscuelasService) {}

  @Post('/lugar')
  createLugar(@Body() createLugarDto: CreateLugarDto) {
    return this.escuelasService.createLugar(createLugarDto);
  }

  @Post('/evento')
  createEvento(@Body() createEventoDto: CreateEventoDto) {
    return this.escuelasService.createEvento(createEventoDto);
  }

  @Post('/premio/E')
  addPremioEscuela(@Body() createGanadorDto: CreateGanadorDto) {
    return this.escuelasService.addPremioEscuela(createGanadorDto);
  }

  @Post('/premio/I')
  addPremioIntegrante(@Body() createGanadorDto: CreateGanadorDto) {
    return this.escuelasService.addPremioIntegrante(createGanadorDto);
  }

  @Post('/premio')
  createPremio(@Body() createPremioDto: CreatePremioDto) {
    return this.escuelasService.createPremio(createPremioDto);
  }

  @Post('/color')
  addColor(@Body() createColorDto: CreateColorDto) {
    return this.escuelasService.addColor(createColorDto);
  }

  @Post('/titulo')
  addTitulo(@Body() createTituloDto: CreateTituloDto) {
    return this.escuelasService.addTitulo(createTituloDto);
  }

  @Post('/rol')
  createRol(@Body() createRolDto: CreateRolDto) {
    return this.escuelasService.createRol(createRolDto);
  }

  @Post()
  createEscuela(@Body() createEscuelaDto: CreateEscuelaDto) {
    return this.escuelasService.createEscuela(createEscuelaDto);
  }

  @Get('/premio/E')
  findAllPremiosEscuela() {
    return this.escuelasService.findAllPremiosEscuela();
  }

  @Get('/premio/I')
  findAllPremiosIntegrante() {
    return this.escuelasService.findAllPremiosIntegrante();
  }

  @Get('/lugar')
  findAllLugares() {
    return this.escuelasService.findAllLugares();
  }

  @Get('/color')
  findAllColores() {
    return this.escuelasService.findAllColores();
  }

  @Get('/lugar/:id')
  findOneLugar(@Param('id') id: string) {
    return this.escuelasService.findOneLugar(+id);
  }

  @Get()
  findAllEscuelas() {
    return this.escuelasService.findAllEscuelas();
  }
  
  @Get(':id')
  findOneEscuela(@Param('id') id: string) {
    return this.escuelasService.findOneEscuela(+id);
  }

  @Patch('/lugar/:id')
  updateLugar(@Param('id') id: string, @Body() updateLugarDto: UpdateLugarDto) {
    return this.escuelasService.updateLugar(+id, updateLugarDto);
  }

  @Patch('/titulo/:id')
  updateTitulo(@Param('id') id: string, @Body() updateTituloDto: UpdateTituloDto) {
    return this.escuelasService.updateTitulo(id, updateTituloDto);
  }

  @Patch('/evento/:id')
  updateEvento(@Param('id') id: string, @Body() updateEventoDto: UpdateEventoDto) {
    return this.escuelasService.updateEvento(+id, updateEventoDto);
  }

  //Its weird but it works
  @Patch('/color/:id')
  removeColor(@Param('id') id: string, @Body() updateColorDto: UpdateColorDto) {
    return this.escuelasService.removeColor(+id, updateColorDto);
  }
  
  @Delete('/lugar/:id')
  removeLugar(@Param('id') id: string) {
    return this.escuelasService.removeLugar(+id);
  }
  
  @Patch(':id')
  updateEscuela(@Param('id') id: string, @Body() updateEscuelaDto: UpdateEscuelaDto) {
    return this.escuelasService.updateEscuela(+id, updateEscuelaDto);
  }

  @Delete('/samba/:id')
  removeSamba(@Param('id') id: string) {
    return this.escuelasService.removeSamba(+id);
  }

  @Delete('/evento/:id')
  removeEvento(@Param('id') id: string) {
    return this.escuelasService.removeEvento(+id);
  }

  @Delete('/titulo/:id')
  removeTitulo(@Param('id') id: string) {
    return this.escuelasService.removeTitulo(id);
  }
  
  @Delete(':id')
  removeEscuela(@Param('id') id: string) {
    return this.escuelasService.removeEscuela(+id);
  }
}
