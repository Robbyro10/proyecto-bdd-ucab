import { Injectable } from '@nestjs/common';
import { CreateEscuelaDto } from './dto/create-escuela.dto';
import { UpdateEscuelaDto } from './dto/update-escuela.dto';
import { CreateLugarDto } from './dto/create-lugar.dto';
import { InjectConnection, InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Escuela_Samba } from './entities/escuela_samba.entity';
import { CommonService } from 'src/common/common.service';

@Injectable()
export class EscuelasService {
  constructor(
    @InjectRepository(Escuela_Samba)
    private readonly escuelaRepository: Repository<Escuela_Samba>,
    // private readonly commonService: CommonService

    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  async create(createEscuelaDto: CreateEscuelaDto) {
    // this.dataSource.query(
    //   `
    //   INSERT INTO Escuela_Samba
    //   VALUES ('${createEscuelaDto.nombre}', '${createEscuelaDto.direccion_sede}', '${createEscuelaDto.resumen_hist}');
    //   `)

    // const escuela = this.dataSource.createQueryBuilder()
    // .insert()
    // .into(Escuela_Samba)
    // .values(
    //   { nombre: createEscuelaDto.nombre, direccion_sede: createEscuelaDto.direccion_sede, resumen_hist: createEscuelaDto.resumen_hist },
    // )
    // .execute();

    const queryBuilder = this.escuelaRepository.createQueryBuilder();
    const escuela = await queryBuilder
      .insert()
      .into(Escuela_Samba)
      .values({
        nombre: createEscuelaDto.nombre,
        direccion_sede: createEscuelaDto.direccion_sede,
        resumen_hist: createEscuelaDto.resumen_hist,
      })
      .execute();

    return escuela;
  }

  createLugar(createLugarDto: CreateLugarDto) {
    return 'This action adds a new escuela';
  }

  findAll() {
    return `This action returns all escuelas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} escuela`;
  }

  update(id: number, updateEscuelaDto: UpdateEscuelaDto) {
    return `This action updates a #${id} escuela`;
  }

  remove(id: number) {
    return `This action removes a #${id} escuela`;
  }
}
