import { Injectable } from '@nestjs/common';
import { CreateIntegranteDto } from './dto/create-integrante.dto';
import { UpdateIntegranteDto } from './dto/update-integrante.dto';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { CommonService } from 'src/common/common.service';

@Injectable()
export class IntegrantesService {
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
    private readonly commonService: CommonService,
  ) {}

  create(createIntegranteDto: CreateIntegranteDto) {

    const query = this.commonService.create('agjintegrantes', createIntegranteDto)
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

  findOne(id: number) {
    return `This action returns a #${id} integrante`;
  }

  update(id: number, updateIntegranteDto: UpdateIntegranteDto) {
    return `This action updates a #${id} integrante`;
  }

  remove(id: number) {
    return `This action removes a #${id} integrante`;
  }
}
