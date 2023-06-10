import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { AuthModule } from './auth/auth.module';
import { TodoModule } from './todo/todo.module';
import { IntegrantesModule } from './integrantes/integrantes.module';
import { EscuelasModule } from './escuelas/escuelas.module';
import { SambaModule } from './samba/samba.module';
import { PatrocinantesModule } from './patrocinantes/patrocinantes.module';
import { TelefonosModule } from './telefonos/telefonos.module';
import { DataSource } from 'typeorm';

@Module({
 imports: [
  ConfigModule.forRoot(),
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    autoLoadEntities: true,
    synchronize: true,
  }),
  CommonModule,
  SeedModule,
  AuthModule,
  TodoModule,
  IntegrantesModule,
  EscuelasModule,
  SambaModule,
  PatrocinantesModule,
  TelefonosModule,
],
})
export class AppModule {}