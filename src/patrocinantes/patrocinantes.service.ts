import { Injectable } from '@nestjs/common';
import { CreateEmpresaDto } from './dto/create-patrocinante_empresa.dto';
import { CreatePersonaDto } from './dto/create-patrocinante_persona.dto';
import { UpdateEmpresaDto } from './dto/update-patrocinante_empresa.dto';
import { UpdatePersonaDto } from './dto/update-patrocinante_persona.dto';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { CommonService } from 'src/common/common.service';

@Injectable()
export class PatrocinantesService {
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
    private readonly commonService: CommonService,
  ) {}

  async createEmpresa(createEmpresaDto: CreateEmpresaDto) {
    const query = this.commonService.create(
      'agjpatrocinante_empresa',
      createEmpresaDto,
    );
    await this.dataSource.query(query);
  }

  async createPersona(createPersonaDto: CreatePersonaDto) {
    const query = this.commonService.create(
      'agjpatrocinante_persona',
      createPersonaDto,
    );
    await this.dataSource.query(query);
  }

  findAllEmpresa() {
    return this.dataSource.query(`
    SELECT id, nombre, email_contacto, mision, cod_int, cod_area, numero
    FROM agjpatrocinante_empresa
    LEFT JOIN agjtelefono
    ON agjpatrocinante_empresa.id = agjtelefono.empresa_id`);
  }

  findAllPersona() {
    return this.dataSource.query(`
      SELECT 
        id, doc_identidad, primer_nombre, 
        primer_apellido, segundo_apellido, email_contacto, 
        segundo_nombre, cod_int, cod_area, numero
      FROM agjpatrocinante_persona
      LEFT JOIN agjtelefono
      ON agjpatrocinante_persona.id = agjtelefono.persona_id`);
  }

  async findOneEmpresa(id: number) {
    const empresa = await this.dataSource.query(`
    SELECT id, nombre, email_contacto, mision, cod_int, cod_area, numero
    FROM agjpatrocinante_empresa
    LEFT JOIN agjtelefono
    ON agjpatrocinante_empresa.id = agjtelefono.empresa_id
    WHERE agjpatrocinante_empresa.id = ${id}
    `);

    const escuelas = await this.dataSource.query(`
    SELECT e.nombre, h.fecha_ini, h.fecha_fin, e.id 
    FROM agjpatrocinante_empresa p 
    JOIN agjhist_patrocinio h ON p.id=h.empresa_id 
    JOIN agjescuela_samba e ON h.agjid_escuela=e.id WHERE p.id=${id}
    `);

    return { empresa, escuelas };
  }

  async findOnePersona(id: number) {
    const persona = await this.dataSource.query(`
      SELECT 
        id, doc_identidad, primer_nombre, 
        primer_apellido, segundo_apellido, email_contacto, 
        segundo_nombre, cod_int, cod_area, numero
        FROM agjpatrocinante_persona
        LEFT JOIN agjtelefono
        ON agjpatrocinante_persona.id = agjtelefono.persona_id
        WHERE agjpatrocinante_persona.id = ${id}
      `);

    const escuelas = await this.dataSource.query(`
      SELECT e.nombre, e.id, h.fecha_ini, h.fecha_fin FROM agjpatrocinante_persona p 
      JOIN agjhist_patrocinio h ON p.id=h.persona_id 
      JOIN agjescuela_samba e ON h.agjid_escuela=e.id WHERE p.id=${id}`);

    return { persona, escuelas };
  }

  updateEmpresa(id: number, updateEmpresaDto: UpdateEmpresaDto) {
    const query = this.commonService.update(
      updateEmpresaDto,
      'agjpatrocinante_empresa',
      id,
    );
    return this.dataSource.query(query);
  }

  updatePersona(id: number, updatePersonaDto: UpdatePersonaDto) {
    const query = this.commonService.update(
      updatePersonaDto,
      'agjpatrocinante_persona',
      id,
    );
    return this.dataSource.query(query);
  }

  removeEmpresa(id: number) {
    this.commonService.delete('agjpatrocinante_empresa', { id });
    return `Se ha borrado la empresa de id: ${id}`;
  }

  removePersona(id: number) {
    this.commonService.delete('agjpatrocinante_persona', { id });
    return `Se ha borrado la persona de id: ${id}`;
  }
}
