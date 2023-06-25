import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IntegrantesService } from './integrantes.service';
import { CreateIntegranteDto } from './dto/create-integrante.dto';
import { UpdateIntegranteDto } from './dto/update-integrante.dto';
import { CreateHabilidadDto } from './dto/create-habilidad.dto';
import { UpdateHabilidadDto } from './dto/update-habilidad.dto';

@Controller('integrantes')
export class IntegrantesController {
  constructor(private readonly integrantesService: IntegrantesService) {}

  @Post('habilidad')
  createHabilidad(@Body() createHabilidadDto: CreateHabilidadDto) {
    return this.integrantesService.createHabilidad(createHabilidadDto);
  }

  @Post()
  create(@Body() createIntegranteDto: CreateIntegranteDto) {
    return this.integrantesService.create(createIntegranteDto);
  }

  @Get()
  findAll() {
    return this.integrantesService.findAll();
  }

  @Get('habilidad')
  findAllHabilidades() {
    return this.integrantesService.findAllHabilidades();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.integrantesService.findOne(+id);
  }

  @Patch('habilidad/:id')
  addHabilidad(@Param('id') id: string, @Body() updateHabilidadDto: UpdateHabilidadDto) {
    return this.integrantesService.addHabilidad(+id, updateHabilidadDto);
  }

  @Patch('/remove-habilidad/:id')
  removeHabilidad(@Param('id') id: string, @Body() updateHabilidadDto: UpdateHabilidadDto) {
    return this.integrantesService.removeHabilidad(+id, updateHabilidadDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIntegranteDto: UpdateIntegranteDto) {
    return this.integrantesService.update(+id, updateIntegranteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.integrantesService.remove(+id);
  }

}
