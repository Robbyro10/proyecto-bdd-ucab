import { Injectable } from '@nestjs/common';
import { CreatePatrocinanteDto } from './dto/create-patrocinante.dto';
import { UpdatePatrocinanteDto } from './dto/update-patrocinante.dto';

@Injectable()
export class PatrocinantesService {
  create(createPatrocinanteDto: CreatePatrocinanteDto) {
    return 'This action adds a new patrocinante';
  }

  findAll() {
    return `This action returns all patrocinantes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} patrocinante`;
  }

  update(id: number, updatePatrocinanteDto: UpdatePatrocinanteDto) {
    return `This action updates a #${id} patrocinante`;
  }

  remove(id: number) {
    return `This action removes a #${id} patrocinante`;
  }
}
