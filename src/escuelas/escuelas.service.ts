import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEscuelaDto } from './dto/create-escuela.dto';
import { UpdateEscuelaDto } from './dto/update-escuela.dto';
import { CreateLugarDto } from './dto/create-lugar.dto';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Escuela_Samba } from './entities/escuela_samba.entity';
import { CommonService } from 'src/common/common.service';
import { Lugar } from './entities/lugar.entity';
import { UpdateLugarDto } from './dto/update-lugar.dto';

@Injectable()
export class EscuelasService {
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
    private readonly commonService: CommonService
  ) {}

  async createEscuela(createEscuelaDto: CreateEscuelaDto) {
    const data = this.dataSource.query(
      `
        INSERT INTO agjescuela_samba (nombre, direccion_sede, resumen_hist, id_lugar)
        VALUES ('${createEscuelaDto.nombre}', '${createEscuelaDto.direccion_sede}', 
        '${createEscuelaDto.resumen_hist}', '${createEscuelaDto.id_lugar}')
        `,
    );
    return data;
  }

  createLugar(createLugarDto: CreateLugarDto) {
    if (!createLugarDto.id_lugar_padre) {
      this.dataSource.query(
        `
          INSERT INTO agjlugar (nombre, tipo)
          VALUES ('${createLugarDto.nombre}', '${createLugarDto.tipo}')
        `,
      );
      
    } else {
      this.dataSource.query(
        `
          INSERT INTO agjlugar (nombre, tipo, id_lugar_padre)
          VALUES ('${createLugarDto.nombre}', '${createLugarDto.tipo}', '${createLugarDto.id_lugar_padre}')
          `,
      );
    }
  }

  findAllEscuelas() {
    // return this.dataSource.query('SELECT * FROM agjescuela_samba;');
    return this.commonService.find('agjescuela_samba');
  }

  findAllLugares() {
    return this.commonService.find('agjlugar');
  }

  async findOneEscuela(id: number) {
    return await this.dataSource.query<Escuela_Samba[]>(
      `SELECT * FROM agjescuela_samba WHERE id = ${id};`,
    );
  }

  async findOneLugar(id: number) {
    return await this.dataSource.query<Lugar[]>(
      `SELECT * FROM agjlugar WHERE id = ${id};`,
    );
  }

  async updateEscuela(id: number, updateEscuelaDto: UpdateEscuelaDto) {
    const escuela = await this.findOneEscuela(id);
    if (escuela.length > 0) {
      this.dataSource.query<Escuela_Samba>(`
          UPDATE agjescuela_samba SET 
          nombre = '${updateEscuelaDto.nombre}', direccion_sede = '${updateEscuelaDto.direccion_sede}', resumen_hist = '${updateEscuelaDto.resumen_hist}'
          WHERE id = ${id}
          `);
      return 'Se actualizo la escuela de id: ' + id;
    }
    return 'No existe escuela de samba con id: ' + id;
  }

  async updateLugar(id: number, updateLugarDto: UpdateLugarDto) {
    const lugar = await this.findOneLugar(id);
    if (lugar.length > 0) {
      this.dataSource.query<Lugar>(`
          UPDATE agjlugar SET 
          nombre = '${updateLugarDto.nombre}', tipo = '${updateLugarDto.tipo}'
          WHERE id = ${id}
          `);
      return 'Se actualizo el lugar de id: ' + id;
    }
    return 'No existe lugar con id: ' + id;
  }

  async removeEscuela(id: number) {
    const escuela = await this.findOneEscuela(id);
    if (escuela.length > 0) {
      this.commonService.delete('agjescuela_samba', { id });
      return `Se ha borrado la escuela de id: ${id}`;
    }
    return 'No existe escuela de samba con id: ' + id;
  }

  async removeLugar(id: number) {
    const lugar = await this.findOneLugar(id);
    if (lugar.length > 0) {
      // this.dataSource.query(`DELETE FROM agjlugar WHERE id = ${id};`);
      this.commonService.delete('agjlugar', { id });
      return `Se ha borrado el lugar de id: ${id}`;
    }
    return 'No existe lugar con id: ' + id;
  }
}
