import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/entities/user.entity';
import { Repository } from 'typeorm';
import { initialData } from './data/seed-data';
import { TodoService } from 'src/todo/todo.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly todoService: TodoService,
    
    @InjectRepository( User )
    private readonly userRepository: Repository<User>
  ) {}

  async runSeed() {
    await this.deleteTables();
    const adminUser = await this.insertUsers();
    await this.insertNewTodos(adminUser);
    return `SEED EXECUTED`;
  }

  private async deleteTables() {
    await this.todoService.removeAll()
    const queryBuilder = this.userRepository.createQueryBuilder();
    await queryBuilder
      .delete()
      .where({})
      .execute()
  }

  private async insertUsers() {
    const seedUsers = initialData.users;
    const users: User[] = [];
    seedUsers.forEach( user => {
      users.push(this.userRepository.create(user))
    });
    const dbUsers = await this.userRepository.save(seedUsers);
    return dbUsers[0];
  }

  private async insertNewTodos(user: User) {
    this.todoService.removeAll();
    
    const todos = initialData.todos;

    const insertPromises = [];

    todos.forEach((todo) => {
      insertPromises.push(this.todoService.create(todo, user))
    });

    await Promise.all( insertPromises );

    return true;
  }
}
