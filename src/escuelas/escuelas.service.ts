import { Injectable } from '@nestjs/common';
import { CreateEscuelaDto } from './dto/create-escuela.dto';
import { UpdateEscuelaDto } from './dto/update-escuela.dto';
import { CreateLugarDto } from './dto/create-lugar.dto';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Escuela_Samba } from './entities/escuela_samba.entity';
import { CommonService } from 'src/common/common.service';
import { Lugar } from './entities/lugar.entity';
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

@Injectable()
export class EscuelasService {
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
    private readonly commonService: CommonService,
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

  addColor(createColorDto: CreateColorDto) {
    return this.dataSource.query(`
    INSERT INTO agje_c (agjescuela_samba_id, agjcolor_id)
    VALUES (${createColorDto.escuela_id}, ${createColorDto.color_id}) 
    `)
  }

  async createPremio(createPremioDto: CreatePremioDto) {
    const query = this.commonService.create('agjpremio_especial', createPremioDto);
    return this.dataSource.query(query);
  }

  addPremioEscuela(createGanadorDto: CreateGanadorDto) {
    return this.dataSource.query(`
    INSERT INTO agjganador (año, escuela_id, premio_id)
    VALUES ('${createGanadorDto.año}', ${createGanadorDto.escuela_id}, ${createGanadorDto.premio_id})
    `);
  }

  addPremioIntegrante(createGanadorDto: CreateGanadorDto) {
    return this.dataSource.query(`
    INSERT INTO agjganador (año, premio_id, hist_int_fecha_ini, hist_int_agjid_escuela, hist_int_agjid_integrante)
    VALUES ('${createGanadorDto.año}', ${createGanadorDto.premio_id}, '${createGanadorDto.hist_int_fecha_ini}',
    ${createGanadorDto.hist_int_agjid_escuela}, ${createGanadorDto.hist_int_agjid_integrante}); 
    `)
  }

  async addTitulo(createTituloDto: CreateTituloDto) {
    const query = this.commonService.create('agjhist_título_carnaval', createTituloDto);
    console.log(query)
    return this.dataSource.query(query);
  }

  createRol(createRolDto: CreateRolDto) {
    const query = this.commonService.create('agjrol', createRolDto)
    return this.dataSource.query(query);
  }

  createLugar(createLugarDto: CreateLugarDto) {
    const query = this.commonService.create('agjlugar', createLugarDto);
    return this.dataSource.query(query);
  }
  
  createEvento(createEventoDto: CreateEventoDto) {
    const query = this.commonService.create('agjevento_anual_sem', createEventoDto);
    return this.dataSource.query(query);
  }

  findAllEscuelas() {
    return this.dataSource.query(
      `
      SELECT agjescuela_samba.id, agjescuela_samba.nombre, direccion_sede, resumen_hist, agjlugar.nombre AS nombre_lugar
      FROM agjescuela_samba
      JOIN agjlugar
      ON agjescuela_samba.id_lugar = agjlugar.id
      `,
    );
  }

  findAllLugares() {
    return this.dataSource.query(`
    SELECT * from agjlugar
    `);
  }

  async findMoney(id: number) {
    const empresas = await this.dataSource.query(
      `SELECT d.fecha, d.monto_r$, p.nombre
      FROM agjdonacion d JOIN agjhist_patrocinio h ON d.hist_patrocinio_id=h.id 
      JOIN agjpatrocinante_empresa p ON h.empresa_id=p.id JOIN agjescuela_samba e
      ON h.agjid_escuela=e.id WHERE e.id=${id}; `,
    );

    const personas = await this.dataSource.query(`
    SELECT d.fecha, d.monto_r$, p.primer_nombre, p.primer_apellido 
    FROM agjdonacion d JOIN agjhist_patrocinio h ON d.hist_patrocinio_id=h.id 
    JOIN agjpatrocinante_persona p ON h.persona_id=p.id 
    JOIN agjescuela_samba e ON h.agjid_escuela=e.id WHERE e.id=${id};
    `);

    const titulos = await this.dataSource.query(`
    SELECT t.año, t.monto_ganado FROM agjhist_título_carnaval t 
    JOIN agjescuela_samba e ON t.agjid_escuela=e.id 
    WHERE e.id=${id} and t.monto_ganado is not null;
    `);

    const eventos = await this.dataSource.query(`
    SELECT ev.nombre, ev.tipo, ev.costo_unitario_r$*ev.total_asistentes 
    "ingresoTotal" FROM agjevento_anual_sem ev 
    JOIN agjescuela_samba e ON e.id=ev.agjid_escuela WHERE e.id=${id}
    `);

    return {empresas, personas, titulos, eventos}
  }

  findAllColores() {
    return this.dataSource.query(`SELECT * from agjcolor`);
  }

  findAllPremiosEscuela() {
    return this.dataSource.query(`SELECT * from agjpremio_especial WHERE tipo='E'`);
  }

  findAllPremiosIntegrante() {
    return this.dataSource.query(`SELECT * from agjpremio_especial WHERE tipo='I'`);
  }

  async findOneEscuela(id: number) {
    const escuela = await this.dataSource.query<Escuela_Samba[]>(
      `SELECT agjescuela_samba.id, agjescuela_samba.nombre, direccion_sede, resumen_hist, agjlugar.nombre AS nombre_lugar, cod_int, cod_area, numero
      FROM agjescuela_samba
      LEFT JOIN agjlugar ON agjescuela_samba.id_lugar = agjlugar.id
      LEFT JOIN agjtelefono ON agjescuela_samba.id = agjtelefono.escuela_id
      WHERE agjescuela_samba.id = ${id}
      `,
    );

    const colores = await this.dataSource.query(
      `SELECT *
      FROM agjcolor
      JOIN agje_c ON agje_c.agjcolor_id = agjcolor.id
      WHERE agjescuela_samba_id = ${id} `,
    );

    const titulos = await this.dataSource.query(`
      SELECT * FROM agjhist_título_carnaval
      WHERE agjid_escuela = ${id}
    `);

    const empresas = await this.dataSource.query(`
    SELECT agjhist_patrocinio.id AS id , fecha_ini, fecha_fin, empresa_id, nombre
    FROM agjhist_patrocinio
    JOIN agjpatrocinante_empresa ON agjhist_patrocinio.empresa_id = agjpatrocinante_empresa.id    
    WHERE agjid_escuela = ${id}`);

    const personas = await this.dataSource.query(`
    SELECT agjhist_patrocinio.id AS id , fecha_ini, fecha_fin, persona_id, primer_nombre, primer_apellido
    FROM agjhist_patrocinio
    JOIN agjpatrocinante_persona ON agjhist_patrocinio.persona_id = agjpatrocinante_persona.id    
    WHERE agjid_escuela = ${id}`);

    const eventos = await this.dataSource.query(`SELECT * from agjevento_anual_sem WHERE agjid_escuela=${id}`);

    const integrantes = await this.dataSource.query(`
    SELECT i.id, i.primer_nombre, i.primer_apellido, i.segundo_apellido, h.fecha_ini, h.fecha_fin, h.autoridad 
    from agjescuela_samba e JOIN agjhist_int h on e.id=h.agjid_escuela join 
    agjintegrantes i on i.id=h.agjid_integrante WHERE e.id=${id} and h.fecha_fin is null;`);

    const sambas = await this.dataSource.query(`
    SELECT s.id, s.titulo, s.tipo, s.año_carnaval, s.letra, i.primer_nombre, i.primer_apellido 
    FROM agjsamba s 
    JOIN agjautor a ON s.id=a.agjsamba_id 
    JOIN agjintegrantes i ON a.agjhist_int_agjid_integrante=i.id 
    JOIN agjescuela_samba e ON a.agjhist_int_agjid_escuela=e.id 
    WHERE e.id=${id}
    `);

    const premios = await this.dataSource.query(`
    SELECT p.id, p.nombre, p.descripcion, p.tipo, g.año, l.nombre AS nombreLugar
    FROM agjpremio_especial p 
    JOIN agjlugar l ON p.lugar_id = l.id
    JOIN agjganador g ON p.id=g.premio_id JOIN agjescuela_samba e ON e.id=g.escuela_id 
    WHERE e.id=${id}`);

    return { escuela, colores, titulos, empresas, personas, eventos, integrantes, sambas, premios };
  }

  async findOneLugar(id: number) {
    return await this.dataSource.query<Lugar[]>(
      `SELECT * FROM agjlugar WHERE id = ${id};`,
    );
  }

  async updateEscuela(id: number, updateEscuelaDto: UpdateEscuelaDto) {
    const query = this.commonService.update(
      updateEscuelaDto,
      'agjescuela_samba',
      id,
    );
    return this.dataSource.query(query);
  }

  async updateEvento(id: number, updateEventoDto: UpdateEventoDto) {
    const query = this.commonService.update(
      updateEventoDto,
      'agjevento_anual_sem',
      id,
    );
    return this.dataSource.query(query);
  }

  async updateTitulo(año: string, updateTituloDto: UpdateTituloDto) {
    if (updateTituloDto.monto_ganado) {
      return this.dataSource.query(`
      UPDATE agjhist_título_carnaval SET monto_ganado = ${updateTituloDto.monto_ganado}, 
      grupo = '${updateTituloDto.grupo}' 
      WHERE año = '${año}' AND agjid_escuela = ${updateTituloDto.agjid_escuela};
      `);

    } else {
      return this.dataSource.query(`
      UPDATE agjhist_título_carnaval SET grupo = '${updateTituloDto.grupo}'  
      WHERE año = '${año}' AND agjid_escuela = ${updateTituloDto.agjid_escuela};
      `)
    }
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
    this.commonService.delete('agjescuela_samba', { id });
    return `Se ha borrado la escuela de id: ${id}`;
  }

  async removeSamba(id: number) {
    this.commonService.delete('agjsamba', { id });
    return `Se ha borrado la samba de id: ${id}`;
  }

  async removeTitulo(año: string) {
    this.dataSource.query(`DELETE FROM agjhist_título_carnaval WHERE año = '${año}'`)
  }

  async removeLugar(id: number) {
    this.commonService.delete('agjlugar', { id });
    return `Se ha borrado el lugar de id: ${id}`;
  }

  async removeEvento(id: number) {
    this.commonService.delete('agjevento_anual_sem', { id });
    return `Se ha borrado el evento de id: ${id}`;
  }

  async removeColor(id: number, updateColorDto: UpdateColorDto) {
    return this.dataSource.query(
      `DELETE FROM agje_c WHERE 
      agjescuela_samba_id = ${id} AND agjcolor_id = ${updateColorDto.color_id}`
    );
  }
}
