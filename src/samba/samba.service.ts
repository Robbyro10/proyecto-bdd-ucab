import { Injectable } from '@nestjs/common';
import { CreateSambaDto } from './dto/create-samba.dto';
import { UpdateSambaDto } from './dto/update-samba.dto';

@Injectable()
export class SambaService {
  create(createSambaDto: CreateSambaDto) {
    return 'This action adds a new samba';
  }

  findAll() {
    return `This action returns all samba`;
  }

  findOne(id: number) {
    return `This action returns a #${id} samba`;
  }

  update(id: number, updateSambaDto: UpdateSambaDto) {
    return `This action updates a #${id} samba`;
  }

  remove(id: number) {
    return `This action removes a #${id} samba`;
  }
}
