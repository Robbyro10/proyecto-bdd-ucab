import { Module } from '@nestjs/common';
import { IntegrantesService } from './integrantes.service';
import { IntegrantesController } from './integrantes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Integrante } from './entities/integrante.entity';
import { Habilidad } from './entities/habilidad.entity';
import { Rol } from './entities/rol.entity';
import { Hist_Int } from './entities/hist_int.entity';
import { Org_carnaval } from './entities/org_carnaval.entity';
import { Parentesco } from './entities/parentesco.entity';

@Module({
  controllers: [IntegrantesController],
  providers: [IntegrantesService],
  imports: [
    TypeOrmModule.forFeature([ Integrante, Habilidad, Rol, Hist_Int, Org_carnaval, Parentesco ]),
  ],
})
export class IntegrantesModule {}
