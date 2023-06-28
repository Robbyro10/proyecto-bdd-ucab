import { Injectable } from '@nestjs/common';
import { CreateSambaDto } from './dto/create-samba.dto';
import { UpdateSambaDto } from './dto/update-samba.dto';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { CommonService } from 'src/common/common.service';

@Injectable()
export class SambaService {
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
    private readonly commonService: CommonService,
  ) {}

  create(createSambaDto: CreateSambaDto) {
    const query = this.commonService.create('agjsamba', createSambaDto)
    return this.dataSource.query(query);
  }

  findAll() {
    return `This action returns all samba`;
  }

  findOne(id: number) {
    return `This action returns a #${id} samba`;
  }

  update(id: number, updateSambaDto: UpdateSambaDto) {
    const query = this.commonService.update(updateSambaDto, 'agjsamba', id);
    return this.dataSource.query(query);
  }

  remove(id: number) {
    return this.dataSource.query(`DELETE FROM agjsamba WHERE id = ${id}`)
  }
}
