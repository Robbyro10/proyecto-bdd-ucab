import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { User } from 'src/auth/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CommonService } from 'src/common/common.service';
import { Todo } from './entities/todo.entity';
import { isUUID } from 'class-validator';

@Injectable()
export class TodoService {

  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
    private readonly dataSource: DataSource,
    private readonly commonService: CommonService
  ) {}

  async create(createTodoDto: CreateTodoDto, user: User) {
    try {
      const { ...todoDetails } = createTodoDto;

      const todo = this.todoRepository.create({
        ...todoDetails,
        user
      });

      await this.todoRepository.save(todo);
  
      return todo;

    } catch (error) {
      this.commonService.errorHandle(error);
    }
  }

  findAll() {
    return this.todoRepository.find();
  }

  async findOne(id: string) {
    let todo: Todo;
    todo = await this.todoRepository.findOneBy({id});


    if ( !todo ) throw new NotFoundException(`Todo with ${id} not found`)
    
    return todo;
  }

  async update(id: string, updateTodoDto: UpdateTodoDto, user: User) {

    const todo = await this.todoRepository.preload({ id: id, ...updateTodoDto });

    if ( !todo ) throw new NotFoundException(`Todo with id: ${ id } not found`);

    try {
      todo.user = user;
      await this.todoRepository.save(todo);
      return todo;
      
    } catch (error) {
      this.commonService.errorHandle(error)
    }
  }

  async remove(id: string) {
    const todo = await this.findOne( id );
    
    await this.todoRepository.remove( todo );
  }

  async removeAll() {
    const query = this.todoRepository.createQueryBuilder('todo');

    try {
      return await query
        .delete()
        .where({})
        .execute();
        
    } catch (error) {
      this.commonService.errorHandle(error)
    }
  }
}
