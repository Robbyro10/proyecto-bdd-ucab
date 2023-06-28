import { Injectable } from '@nestjs/common';
import { CreateIntegranteDto } from './dto/create-integrante.dto';
import { UpdateIntegranteDto } from './dto/update-integrante.dto';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { CommonService } from 'src/common/common.service';
import { CreateHabilidadDto } from './dto/create-habilidad.dto';
import { UpdateHabilidadDto } from './dto/update-habilidad.dto';
import { CreateIntEscuelaDto } from './dto/create-int-escuela.dto';
import { UpdateIntEscuela } from './dto/update-int-escuela.dto';
import { CreateParentescoDto } from './dto/create-parentesco.dto';

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

  createParentesco(createParentescoDto: CreateParentescoDto) {
    const query = this.commonService.create('agjparentesco', createParentescoDto);
    return this.dataSource.query(query);
  }

  createIntEscuela(createIntEscuelaDto: CreateIntEscuelaDto) {
    const query = this.commonService.create('agjhist_int', createIntEscuelaDto);
    console.log(query)
    return this.dataSource.query(query)
  }

  async findAll() {
    return this.commonService.find('agjintegrantes');
  }

  async findAllHabilidades() {
    return this.commonService.find('agjhabilidad');
  }

  async findOne(id: number) {
    const integrante = await this.dataSource.query(
      `SELECT *
    FROM agjintegrantes
    WHERE agjintegrantes.id = ${id};
    `,
    );

    const habilidades = await this.dataSource.query(
      `SELECT id AS id_habilidad, nombre AS nombre_habilidad
    FROM agjhabilidad
    LEFT JOIN agjint_hab
    ON agjhabilidad.id = agjint_hab.agjhabilidad_id
    WHERE agjint_hab.agjintegrantes_id = ${id};`,
    );

    const escuela = await this.dataSource.query(`
    SELECT e.id, e.nombre, h.fecha_ini, h.fecha_fin, h.autoridad 
    FROM agjescuela_samba e 
    JOIN agjhist_int h ON h.agjid_escuela=e.id 
    JOIN agjintegrantes i ON i.id=h.agjid_integrante WHERE i.id=${id}
    `);

    const roles = await this.dataSource.query(`
    SELECT r.id, r.nombre, r.descripcion, o.año, e.nombre 
    FROM agjrol r JOIN agjorg_carnaval o ON o.agjid_rol=r.id 
    JOIN agjintegrantes i ON o.hist_int_agjid_integrante=i.id 
    JOIN agjescuela_samba e ON o.hist_int_agjid_escuela=e.id WHERE i.id=${id}`);

    const parientes = await this.dataSource.query(`
    SELECT p.integrante1, i.primer_nombre, i.primer_apellido, i.segundo_apellido,  p.relacion, p.integrante2,
    i2.primer_nombre,i2.primer_apellido,i2.segundo_apellido 
    FROM agjparentesco p JOIN agjintegrantes i on i.id=p.integrante1 
    JOIN agjintegrantes i2 on i2.id=p.integrante2 where i.id=${id};
    `);

    const premios = await this.dataSource.query(`
    SELECT p.id, p.nombre, p.descripcion, i.primer_nombre, i.primer_apellido, i.segundo_apellido, g.año 
    FROM agjpremio_especial p 
    JOIN agjganador g ON p.id=g.premio_id 
    JOIN agjintegrantes i ON i.id=g.hist_int_agjid_integrante WHERE i.id=${id}`)

    return { habilidades, integrante, escuela, roles, parientes, premios };
  }

  update(id: number, updateIntegranteDto: UpdateIntegranteDto) {
    const query = this.commonService.update(
      updateIntegranteDto,
      'agjintegrantes',
      id,
    );
    return this.dataSource.query(query);
  }

  updateIntEscuela(año: string, updateIntEscuela: UpdateIntEscuela) {
    return this.dataSource.query(`
    UPDATE agjhist_int 
    SET fecha_fin = '${updateIntEscuela.fecha_fin}'
    WHERE fecha_ini = '${año}' AND agjid_integrante = ${updateIntEscuela.agjid_integrante}`);
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
