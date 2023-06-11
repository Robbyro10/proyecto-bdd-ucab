import { Module } from '@nestjs/common';
import { EscuelasService } from './escuelas.service';
import { EscuelasController } from './escuelas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Escuela_Samba } from './entities/escuela_samba.entity';
import { Lugar } from './entities/lugar.entity';
import { Color } from './entities/color.entity';
import { Evento_Anual_Sem } from './entities/evento_anual_sem.entity';
import { Premio_especial } from './entities/premio_especial.entity';
import { CommonModule } from 'src/common/common.module';
import { Hist_Titulo_Carnaval } from './entities/Hist_Titulo_Carnaval.entity';
import { Ganador } from './entities/ganador.entity';

@Module({
  controllers: [EscuelasController],
  providers: [EscuelasService],
  imports: [
    TypeOrmModule.forFeature([ Escuela_Samba, Lugar, Color, 
      Evento_Anual_Sem, Premio_especial, 
      Hist_Titulo_Carnaval, Ganador ]),
    CommonModule
  ],
})
export class EscuelasModule {}
