import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { CommonModule } from 'src/common/common.module';
import { AuthModule } from 'src/auth/auth.module';
import { User } from 'src/auth/entities/user.entity';

@Module({
  controllers: [TodoController],
  providers: [TodoService],
  imports: [
    TypeOrmModule.forFeature([ Todo, User ]),
    CommonModule, AuthModule
  ],
  exports: [TodoService, TypeOrmModule]
})
export class TodoModule {}
