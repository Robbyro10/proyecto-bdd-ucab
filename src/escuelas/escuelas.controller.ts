import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EscuelasService } from './escuelas.service';
import { CreateEscuelaDto } from './dto/create-escuela.dto';
import { UpdateEscuelaDto } from './dto/update-escuela.dto';
import { CreateLugarDto } from './dto/create-lugar.dto';
import { UpdateLugarDto } from './dto/update-lugar.dto';

@Controller('escuelas')
export class EscuelasController {
  constructor(private readonly escuelasService: EscuelasService) {}

  @Post('/lugar')
  createLugar(@Body() createLugarDto: CreateLugarDto) {
    return this.escuelasService.createLugar(createLugarDto);
  }

  @Post()
  createEscuela(@Body() createEscuelaDto: CreateEscuelaDto) {
    return this.escuelasService.createEscuela(createEscuelaDto);
  }

  @Get('/lugar')
  findAllLugares() {
    return this.escuelasService.findAllLugares();
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
  
  @Delete('/lugar/:id')
  removeLugar(@Param('id') id: string) {
    return this.escuelasService.removeLugar(+id);
  }
  
  @Patch(':id')
  updateEscuela(@Param('id') id: string, @Body() updateEscuelaDto: UpdateEscuelaDto) {
    return this.escuelasService.updateEscuela(+id, updateEscuelaDto);
  }
  
  @Delete(':id')
  removeEscuela(@Param('id') id: string) {
    return this.escuelasService.removeEscuela(+id);
  }
}
