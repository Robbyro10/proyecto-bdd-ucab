import { Injectable } from '@nestjs/common';
import { CreateTelefonoDto } from './dto/create-telefono.dto';
import { UpdateTelefonoDto } from './dto/update-telefono.dto';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { CommonService } from 'src/common/common.service';

@Injectable()
export class TelefonosService {
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
    private readonly commonService: CommonService,
  ) {}

  create(id: number, createTelefonoDto: CreateTelefonoDto) {
    return this.dataSource.query(`
    INSERT INTO agjtelefono (cod_int, cod_area, numero, ${createTelefonoDto.tipo}_id)
    VALUES (${createTelefonoDto.cod_int}, ${createTelefonoDto.cod_area}, 
      ${createTelefonoDto.numero}, ${id})
    `)
  }

  findAll() {
    return `This action returns all telefonos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} telefono`;
  }

  update(id: number, updateTelefonoDto: UpdateTelefonoDto) {
    return this.dataSource.query(`
      UPDATE agjtelefono
      SET cod_int = ${updateTelefonoDto.cod_int}, cod_area = ${updateTelefonoDto.cod_area}, 
      numero = ${updateTelefonoDto.numero}
      WHERE  ${updateTelefonoDto.tipo}_id = ${id}
    `);
  }

  remove(id: number) {
    return `This action removes a #${id} telefono`;
  }
}
