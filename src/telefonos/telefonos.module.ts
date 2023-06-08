import { Module } from '@nestjs/common';
import { TelefonosService } from './telefonos.service';
import { TelefonosController } from './telefonos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Telefono } from './entities/telefono.entity';

@Module({
  controllers: [TelefonosController],
  providers: [TelefonosService],
  imports: [
    TypeOrmModule.forFeature([ Telefono ]),
  ],
})
export class TelefonosModule {}
