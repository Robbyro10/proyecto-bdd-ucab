import { Module } from '@nestjs/common';
import { EscuelasService } from './escuelas.service';
import { EscuelasController } from './escuelas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Escuela_Samba } from './entities/escuela_samba.entity';
import { Lugar } from './entities/lugar.entity';
import { Color } from './entities/color.entity';
import { Evento_Anual_Sem } from './entities/evento_anual_sem.entity';

@Module({
  controllers: [EscuelasController],
  providers: [EscuelasService],
  imports: [
    TypeOrmModule.forFeature([ Escuela_Samba, Lugar, Color, Evento_Anual_Sem ]),
  ],
})
export class EscuelasModule {}
