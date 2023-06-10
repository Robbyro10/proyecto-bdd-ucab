import { Module } from '@nestjs/common';
import { PatrocinantesService } from './patrocinantes.service';
import { PatrocinantesController } from './patrocinantes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patrocinante_empresa } from './entities/patrocinante_empresa.entity';
import { Patrocinante_persona } from './entities/patrocinante_persona.entity';

@Module({
  controllers: [PatrocinantesController],
  providers: [PatrocinantesService],
  imports: [
    TypeOrmModule.forFeature([ Patrocinante_empresa, Patrocinante_persona ]),
  ],
})
export class PatrocinantesModule {}
