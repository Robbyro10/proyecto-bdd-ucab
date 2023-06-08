import { Injectable } from '@nestjs/common';
import { CreateIntegranteDto } from './dto/create-integrante.dto';
import { UpdateIntegranteDto } from './dto/update-integrante.dto';

@Injectable()
export class IntegrantesService {
  create(createIntegranteDto: CreateIntegranteDto) {
    return 'This action adds a new integrante';
  }

  findAll() {
    return `This action returns all integrantes`;
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
