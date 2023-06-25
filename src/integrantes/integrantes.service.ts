import { Injectable } from '@nestjs/common';
import { CreateIntegranteDto } from './dto/create-integrante.dto';
import { UpdateIntegranteDto } from './dto/update-integrante.dto';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { CommonService } from 'src/common/common.service';
import { CreateHabilidadDto } from './dto/create-habilidad.dto';
import { UpdateHabilidadDto } from './dto/update-habilidad.dto';

@Injectable()
export class IntegrantesService {
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
    private readonly commonService: CommonService,
  ) {}

  create(createIntegranteDto: CreateIntegranteDto) {
    const query = this.commonService.create(
      'agjintegrantes',
      createIntegranteDto,
    );
    const data = this.dataSource.query(query);
    return data;
  }

  createHabilidad(createHabilidadDto: CreateHabilidadDto) {
    const query = this.commonService.create('agjhabilidad', createHabilidadDto);
    const data = this.dataSource.query(query);
    return data;
  }

  async findAll() {
    return this.dataSource.query(
      `
      SELECT id, primer_nombre, segundo_nombre, primer_apellido, fecha_nac, genero, apodo, nacionalidad
      FROM agjintegrantes
      `,
    );
  }

  async findAllHabilidades() {
    return this.commonService.find('agjhabilidad');
  }

  async findOne(id: number) {
    let integrante = await this.dataSource.query(
      `SELECT *
    FROM agjintegrantes
    WHERE agjintegrantes.id = ${id};
    `,
    );

    let habilidades = await this.dataSource.query(
      `SELECT id AS id_habilidad, nombre AS nombre_habilidad
    FROM agjhabilidad
    LEFT JOIN agjint_hab
    ON agjhabilidad.id = agjint_hab.agjhabilidad_id
    WHERE agjint_hab.agjintegrantes_id = ${id};`,
    );

    return { habilidades, integrante };
  }

  update(id: number, updateIntegranteDto: UpdateIntegranteDto) {
    const query = this.commonService.update(
      updateIntegranteDto,
      'agjintegrantes',
      id,
    );
    return this.dataSource.query(query);
  }

  removeHabilidad(id: number, updateHabilidadDto: UpdateHabilidadDto) {
    return this.dataSource.query(`
      DELETE FROM agjint_hab WHERE 
      agjintegrantes_id=${id} AND agjhabilidad_id=${updateHabilidadDto.id_habilidad}
    `);
  }

  addHabilidad(id: number, updateHabilidadDto: UpdateHabilidadDto) {
    return this.dataSource.query(`
    INSERT INTO agjint_hab (agjintegrantes_id, agjhabilidad_id)
    VALUES (${id}, ${updateHabilidadDto.id_habilidad})
    `);
  }

  remove(id: number) {
    this.commonService.delete('agjintegrantes', { id });
    return `Se ha borrado el integrante de id: ${id}`;
  }
}
