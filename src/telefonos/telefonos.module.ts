import { Module } from '@nestjs/common';
import { TelefonosService } from './telefonos.service';
import { TelefonosController } from './telefonos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Telefono } from './entities/telefono.entity';
import { CommonModule } from 'src/common/common.module';

@Module({
  controllers: [TelefonosController],
  providers: [TelefonosService],
  imports: [
    TypeOrmModule.forFeature([ 
      // Telefono 
    ]),
    CommonModule
  ],
})
export class TelefonosModule {}
