import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { AuthModule } from 'src/auth/auth.module';
import { TodoModule } from 'src/todo/todo.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [TodoModule, AuthModule]
})
export class SeedModule {}
