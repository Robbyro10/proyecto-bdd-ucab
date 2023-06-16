import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { createTablesQuery } from './queries/createTablesQuery';
import { insertDataQuery } from './queries/insertDataQuery';
import { deleteTablesQuery } from './queries/deleteTablesQuery';

@Injectable()
export class SeedService {
  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {}

  async runSeed() {
    await this.deleteTables();
    await this.createTables();
    await this.insertData();
    return `SEED EXECUTED`;
  }

  private async deleteTables() {
    // query para borrar las tablas
    await this.dataSource.query(deleteTablesQuery);
  }

  private async createTables() {
    // query para crear las tablas
    await this.dataSource.query(createTablesQuery);
  }

  private async insertData() {
    // query para insertar data
    await this.dataSource.query(insertDataQuery);
  }
}
