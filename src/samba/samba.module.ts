import { Module } from '@nestjs/common';
import { SambaService } from './samba.service';
import { SambaController } from './samba.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Samba } from './entities/samba.entity';
import { CommonModule } from 'src/common/common.module';

@Module({
  controllers: [SambaController],
  providers: [SambaService],
  imports: [
    TypeOrmModule.forFeature([ 
      // Samba 
    ]),
    CommonModule
  ],
})
export class SambaModule {}
