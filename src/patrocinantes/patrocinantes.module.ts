import { Module } from '@nestjs/common';
import { PatrocinantesService } from './patrocinantes.service';
import { PatrocinantesController } from './patrocinantes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patrocinante_empresa } from './entities/patrocinante_empresa.entity';
import { Patrocinante_persona } from './entities/patrocinante_persona.entity';
import { Donacion } from './entities/donacion.entity';
import { Hist_Patrocinio } from './entities/hist_patrocinio.entity';
import { CommonModule } from 'src/common/common.module';

@Module({
  controllers: [PatrocinantesController],
  providers: [PatrocinantesService],
  imports: [
    TypeOrmModule.forFeature([ 
      // Patrocinante_empresa, Patrocinante_persona, Donacion, Hist_Patrocinio 
    ]),
    CommonModule
  ],
})
export class PatrocinantesModule {}
