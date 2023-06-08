import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SambaService } from './samba.service';
import { CreateSambaDto } from './dto/create-samba.dto';
import { UpdateSambaDto } from './dto/update-samba.dto';

@Controller('samba')
export class SambaController {
  constructor(private readonly sambaService: SambaService) {}

  @Post()
  create(@Body() createSambaDto: CreateSambaDto) {
    return this.sambaService.create(createSambaDto);
  }

  @Get()
  findAll() {
    return this.sambaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sambaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSambaDto: UpdateSambaDto) {
    return this.sambaService.update(+id, updateSambaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sambaService.remove(+id);
  }
}
