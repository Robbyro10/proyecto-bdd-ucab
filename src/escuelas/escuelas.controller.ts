import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EscuelasService } from './escuelas.service';
import { CreateEscuelaDto } from './dto/create-escuela.dto';
import { UpdateEscuelaDto } from './dto/update-escuela.dto';
import { CreateLugarDto } from './dto/create-lugar.dto';

@Controller('escuelas')
export class EscuelasController {
  constructor(private readonly escuelasService: EscuelasService) {}

  @Post()
  createEscuela(@Body() createEscuelaDto: CreateEscuelaDto) {
    return this.escuelasService.create(createEscuelaDto);
  }

  @Post('/lugar')
  createLugar(@Body() createLugarDto: CreateLugarDto) {
    return this.escuelasService.createLugar(createLugarDto);
  }

  @Get()
  findAll() {
    return this.escuelasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.escuelasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEscuelaDto: UpdateEscuelaDto) {
    return this.escuelasService.update(+id, updateEscuelaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.escuelasService.remove(+id);
  }
}
